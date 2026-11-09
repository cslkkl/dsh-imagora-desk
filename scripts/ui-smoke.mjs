// 自动化 UI 冒烟：用真实浏览器把 bundle 渲染出来，点一遍关键交互并断言结果。
//
// 为什么要有它：渲染验收台（harness-server + mock）过去只能靠人点。人点会漏 ——
// 本轮就漏过「蒙版预览画布全白」「预算框吞小数点」两个，都是点一下就能发现的。
// 这里把那些手工步骤固化成断言，跑一次十几秒，不花钱（全是 mock 数据）。
//
// 依赖边界：只用**本项目的 devDependency**（playwright-core）。不去解析别处的
// node_modules —— 那会让「本机绿、CI 红」（scripts/AGENTS.md 的硬规矩）。
//
// 浏览器从哪来（顺序）：
//   1. PW_CHROMIUM_PATH 指定的可执行文件；
//   2. 系统 Chrome / Edge（playwright-core 的 channel，无需下载）；
//   3. Playwright 缓存里的 chromium（ms-playwright/chromium-*）。
// 一个都找不到 → 打 SKIP 并 exit 0：这条检查是**加分项**，不该让没装浏览器的
// 环境整体变红（CI 只跑 smoke-host/smoke-client）。
//
// 用法：pnpm run test:ui        （会自动起/停验收台）
//       UI_KEEP_OPEN=1 保留浏览器窗口便于旁观
import { spawn } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)))
const PORT = Number(process.env.HARNESS_PORT || 4319)
const BASE = `http://127.0.0.1:${PORT}/`

const results = []
const check = (name, ok, detail = '') => {
  results.push({ name, ok })
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? `  ${detail}` : ''}`)
}
const skip = reason => {
  console.log(`SKIP  ${reason}`)
  process.exit(0)
}

/** 找一个能用的 chromium 可执行文件 */
function findChromium() {
  const explicit = process.env.PW_CHROMIUM_PATH
  if (explicit && existsSync(explicit)) return { executablePath: explicit }

  const cache = join(homedir(), 'AppData', 'Local', 'ms-playwright')
  if (existsSync(cache)) {
    // 版本号排序取最新的那个
    const dirs = readdirSync(cache)
      .filter(name => name.startsWith('chromium-'))
      .sort((a, b) => Number(b.split('-')[1] ?? 0) - Number(a.split('-')[1] ?? 0))
    for (const dir of dirs) {
      for (const rel of [
        'chrome-win64/chrome.exe',
        'chrome-linux/chrome',
        'chrome-mac/Chromium.app/Contents/MacOS/Chromium',
      ]) {
        const candidate = join(cache, dir, rel)
        if (existsSync(candidate)) return { executablePath: candidate }
      }
    }
  }
  // 交给 playwright-core 自己找系统 Chrome / Edge
  return { channel: process.platform === 'win32' ? 'msedge' : 'chrome' }
}

/** 起验收台（子进程），等到端口可连通 */
async function startHarness() {
  const child = spawn(process.execPath, [join(ROOT, 'scripts', 'harness-server.mjs')], {
    cwd: ROOT,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, HARNESS_PORT: String(PORT) },
  })
  child.stdout.on('data', () => {})
  child.stderr.on('data', chunk => process.stderr.write(chunk))
  for (let i = 0; i < 60; i += 1) {
    try {
      const res = await fetch(BASE)
      if (res.ok) return child
    } catch {
      // 还没起来
    }
    await new Promise(r => setTimeout(r, 250))
  }
  child.kill()
  throw new Error('验收台没能在 15 秒内起来')
}

let playwright
try {
  playwright = await import('playwright-core')
} catch {
  skip('缺 playwright-core（pnpm install 后重试）')
}

const launchOptions = findChromium()
const harness = await startHarness()
let browser
try {
  browser = await playwright.chromium.launch({ headless: !process.env.UI_KEEP_OPEN, ...launchOptions })
} catch (error) {
  harness.kill()
  skip(`起不了浏览器：${error.message.split('\n')[0]}`)
}

const page = await browser.newPage({ viewport: { width: 1280, height: 860 } })
/** 收集页面报错：有任何 uncaught / console.error 都算失败 */
const pageErrors = []
/** 噪声：验收台没有 favicon.ico，浏览器每次都会记一条 404。
 *  这条与插件无关（任何页面都会），不能让它把「无异常」这条判定拖红。 */
const isNoise = text => /favicon/i.test(text) || /Failed to load resource.*404/i.test(text)
page.on('pageerror', error => {
  if (!isNoise(String(error))) pageErrors.push(String(error))
})
page.on('console', message => {
  if (message.type() === 'error' && !isNoise(message.text())) pageErrors.push(message.text())
})

try {
  await page.goto(BASE, { waitUntil: 'networkidle' })

  // ---------------- 画布渲染 ----------------
  check('画布挂载', await page.locator('.react-flow').isVisible())
  check(
    'mock 夹具的节点渲染出来了',
    (await page.locator('.react-flow__node').count()) >= 5,
    String(await page.locator('.react-flow__node').count()),
  )

  // ---------------- 设置弹窗：原版结构 ----------------
  await page.getByRole('button', { name: '设置', exact: true }).click()
  const dialog = page.getByRole('dialog')
  await dialog.waitFor()
  const labels = await dialog.locator('.im-label, .im-section-label').allInnerTexts()
  check(
    '设置弹窗有「配置来源」下拉',
    labels.some(t => t.includes('配置来源')),
    labels.join(' | '),
  )
  check(
    '设置弹窗有「默认模型」下拉',
    labels.some(t => t.includes('默认模型')),
    labels.join(' | '),
  )
  check(
    '设置弹窗有「生效中」只读表',
    labels.some(t => t.includes('生效中')),
    labels.join(' | '),
  )
  check(
    '设置弹窗只有一个目录输入框（不再重复「默认输出路径」）',
    (await dialog.locator('#imagora-output-override').count()) === 1 &&
      (await dialog.locator('#imagora-output-dir').count()) === 0,
    `override=${await dialog.locator('#imagora-output-override').count()} legacy=${await dialog.locator('#imagora-output-dir').count()}`,
  )
  check(
    '生效中列出「来源 / 模型 / API Key」三行',
    (await dialog.locator('.im-spec-row').count()) >= 3,
    String(await dialog.locator('.im-spec-row').count()),
  )

  // 预算框：必须能清空、能输入小数（type=text 而非 number）
  const budget = dialog.locator('#imagora-budget')
  await budget.fill('')
  check('本画布预算框能清空（不回弹 0）', (await budget.inputValue()) === '', await budget.inputValue())
  await budget.fill('0.5')
  check('本画布预算框能输入小数', (await budget.inputValue()) === '0.5', await budget.inputValue())
  await page.keyboard.press('Escape')
  await dialog.waitFor({ state: 'detached' })

  // ---------------- 生成历史：提示词浮层 ----------------
  await page.getByRole('button', { name: '生成历史' }).click()
  const history = page.getByRole('dialog')
  await history.waitFor()
  check(
    '生成历史打开后有记录',
    (await history.locator('.im-history-row').count()) >= 3,
    String(await history.locator('.im-history-row').count()),
  )
  const budgetInputs = history.locator('.im-history-budget-input')
  check(
    '生成历史成本条有「日预算 / 单次上限」两个输入框',
    (await budgetInputs.count()) === 2,
    String(await budgetInputs.count()),
  )

  // 逐字输入小数：中间态 "0." 必须能留住
  const daily = budgetInputs.first()
  await daily.fill('')
  await daily.pressSequentially('0.5', { delay: 30 })
  check('日预算能逐字打出 0.5（小数点不被吞）', (await daily.inputValue()) === '0.5', await daily.inputValue())

  // 浮层只对**真被截断**的行出现
  const longRow = history.locator('.im-history-prompt').first()
  await longRow.hover()
  await page.waitForTimeout(120)
  const tipVisible = await page.locator('[data-testid="prompt-tip"]').count()
  const truncatedFirst = await longRow.evaluate(el => el.scrollHeight > el.clientHeight)
  check(
    '长提示词悬浮出浮层，短提示词不出（判据 scrollHeight > clientHeight）',
    truncatedFirst ? tipVisible === 1 : tipVisible === 0,
    `截断=${truncatedFirst} 浮层=${tipVisible}`,
  )
  if (tipVisible) {
    // evaluate 的回调在**页面**里执行，`getComputedStyle` 是浏览器全局；
    // 而 ESLint 按 Node 环境检查这个文件 → 这里显式从 window 取，两边都自洽。
    const tipStyle = await page.locator('[data-testid="prompt-tip"]').evaluate(el => {
      const cs = el.ownerDocument.defaultView.getComputedStyle(el)
      return { bg: cs.backgroundColor, color: cs.color, pe: cs.pointerEvents }
    })
    check(
      '浮层是深底白字且不吃鼠标事件',
      tipStyle.bg === 'rgb(38, 38, 38)' && tipStyle.pe === 'none',
      JSON.stringify(tipStyle),
    )
  }
  await page.keyboard.press('Escape')
  await history.waitFor({ state: 'detached' })

  // ---------------- 蒙版：底图必须画出来 ----------------
  await page.locator('button[aria-label="蒙版重绘"]').first().click()
  const mask = page.getByRole('dialog')
  await mask.waitFor()
  await page.waitForTimeout(300)
  const canvasInfo = await mask.locator('canvas').evaluate(canvas => {
    const ctx = canvas.getContext('2d')
    const pixel = ctx.getImageData(10, 10, 1, 1).data
    return { w: canvas.width, h: canvas.height, pixel: [...pixel] }
  })
  check('蒙版预览画布尺寸正确（非默认 300×150）', canvasInfo.w > 300, `${canvasInfo.w}×${canvasInfo.h}`)
  check(
    '蒙版预览画出了底图（不是全白）',
    !(canvasInfo.pixel[0] > 250 && canvasInfo.pixel[1] > 250 && canvasInfo.pixel[2] > 250),
    JSON.stringify(canvasInfo.pixel),
  )
  const modeChips = await mask.locator('.im-chip').allInnerTexts()
  check(
    '蒙版「涂 / 擦」用 chip 档（不是主按钮）',
    modeChips.some(t => t.includes('涂')),
    modeChips.join(' | '),
  )
  await page.keyboard.press('Escape')
  await mask.waitFor({ state: 'detached' })

  // ---------------- 粘贴导入：预览卡与问题条 ----------------
  await page.getByRole('button', { name: '粘贴导入' }).click()
  const importer = page.getByRole('dialog')
  await importer.waitFor()
  await importer
    .locator('textarea')
    .fill('=== 好卡 ===\n```text\nratio: 1:1\n\napple on white\n```\n\n=== 坏卡 ===\n```text\nratio: 3:2\n```')
  await page.waitForTimeout(150)
  check(
    '粘贴导入识别出 1 张卡',
    (await importer.locator('.im-import-card').count()) === 1,
    String(await importer.locator('.im-import-card').count()),
  )
  const issueText = await importer.locator('.im-import-issue').first().innerText()
  check(
    '问题条不重复标题（不是「「坏卡」：「坏卡」…」）',
    issueText.includes('坏卡') && (issueText.match(/坏卡/g) ?? []).length === 1,
    issueText,
  )
  check(
    '预览卡显示解析出的尺寸',
    (await importer.locator('.im-import-card-meta').first().innerText()).includes('1024x1024'),
    await importer.locator('.im-import-card-meta').first().innerText(),
  )
  await page.keyboard.press('Escape')
  await importer.waitFor({ state: 'detached' })

  // ---------------- 帮助弹窗 ----------------
  await page.locator('button[aria-label="帮助"]').click()
  const help = page.getByRole('dialog')
  await help.waitFor()
  const helpText = await help.innerText()
  check('帮助弹窗写了正确的手势（Shift+拖拽框选）', helpText.includes('Shift+拖拽框选'), helpText.slice(0, 40))
  check('帮助弹窗没有照抄原版的「右键框选」', !helpText.includes('右键框选'))
  await page.keyboard.press('Escape')
  await help.waitFor({ state: 'detached' })

  // ---------------- 画布交互：拖拽平移 / 滚轮缩放 ----------------
  const zoomBefore = await page.locator('.im-dock-row-value').first().innerText()
  await page.locator('.react-flow').hover()
  await page.mouse.wheel(0, -240)
  await page.waitForTimeout(250)
  const zoomAfter = await page.locator('.im-dock-row-value').first().innerText()
  check('滚轮能缩放画布', zoomBefore !== zoomAfter, `${zoomBefore} → ${zoomAfter}`)

  // ---------------- 全程无 JS 报错 ----------------
  check('全程没有页面异常', pageErrors.length === 0, pageErrors.slice(0, 2).join(' | '))
} catch (error) {
  check('UI 冒烟执行完成', false, error.message.split('\n')[0])
} finally {
  if (!process.env.UI_KEEP_OPEN) {
    await browser.close().catch(() => {})
    harness.kill()
  }
}

const failed = results.filter(row => !row.ok)
console.log(`\n${results.length - failed.length}/${results.length} 通过`)
process.exit(failed.length ? 1 : 0)
