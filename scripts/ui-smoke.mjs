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
/** 「预期内的错误」：验收错误边界时要**故意**抛错，那是这次要验的东西本身。
 *  不加这条白名单，最后那条「全程无页面异常」会把故意抛的错算成失败 ——
 *  等于「验了边界反而证明不了别处没坏」。用完即清空，作用域尽量小。 */
const expectedErrors = []
const isNoise = text =>
  /favicon/i.test(text) ||
  /Failed to load resource.*404/i.test(text) ||
  expectedErrors.some(pattern => text.includes(pattern))
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

  // ---------------- 设置弹窗 ----------------
  // 2026-11-16 重写：原来是六个平铺的块、14 个可点元素、其中 4 个写着「保存」，
  // 且每个路径/预算字段自带一套「点了立刻写盘」的按钮，与 footer 的「保存」
  // 是两套语义。现在统一成「草稿 + footer 一次提交」，只留「测试连通」一个即时动作。
  await page.getByRole('button', { name: '设置', exact: true }).click()
  const dialog = page.getByRole('dialog')
  await dialog.waitFor()
  const labels = await dialog.locator('.im-field-label, .im-settings-group-title').allInnerTexts()
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
    '「生效中」收成一行状态句（不再是三行只读表）',
    (await dialog.locator('.im-settings-status').count()) === 1 && (await dialog.locator('.im-spec-row').count()) === 0,
    `status=${await dialog.locator('.im-settings-status').count()} specRow=${await dialog.locator('.im-spec-row').count()}`,
  )
  check(
    '设置弹窗只有一个目录输入框（不再重复「默认输出文件夹」）',
    (await dialog.locator('#imagora-output-override').count()) === 1 &&
      (await dialog.locator('#imagora-output-dir').count()) === 0,
    `override=${await dialog.locator('#imagora-output-override').count()} legacy=${await dialog.locator('#imagora-output-dir').count()}`,
  )

  // 图标语义：文件夹图标 = 「选一个目录」，与提示词卡上那枚**同一个动作同一个图形**。
  // 回归（维护者报）：设置里这枚图标从前干的是「在文件管理器中打开」，而卡片上同一个
  // 图形是「选目录」—— 同一个符号两个意思，两处互相打架。
  {
    const outputRow = dialog
      .locator('#imagora-output-override')
      .locator('xpath=ancestor::div[contains(@class,"im-field-control")]')
    const iconPick = outputRow.locator('button.im-icon-btn')
    const textReveal = outputRow.locator('button.im-btn-sm')
    check(
      '输出文件夹那行的图标记为「选择文件夹」',
      (await iconPick.count()) === 1 && (await iconPick.getAttribute('aria-label')) === '选择文件夹',
      `count=${await iconPick.count()} label=${await iconPick.getAttribute('aria-label')}`,
    )
    check(
      '「打开文件夹」退回文字按钮（不再占图标那一格）',
      (await textReveal.count()) === 1 && (await textReveal.innerText()).trim() === '打开文件夹',
      `count=${await textReveal.count()} text=${(await textReveal.innerText().catch(() => '')).trim()}`,
    )
    // 点图标真的会弹选择器并写回（mock 回一个带 picked 的确定路径）；随后清空草稿复原状态
    const outInput = dialog.locator('#imagora-output-override')
    await iconPick.click()
    await page.waitForTimeout(350)
    const pickedValue = await outInput.inputValue()
    check('设置里的图标按钮弹选择器并写回草稿', pickedValue.includes('picked'), pickedValue || '(空)')
    await outInput.fill('')
  }
  // 提交语义收口：整个弹窗里只有 footer 那一个「保存」+ 一个「测试连通」，
  // 字段级不再自带「保存手填路径 / 保存上限 / 取消上限」。
  const dialogButtons = (await dialog.locator('button').allInnerTexts()).map(t => t.trim()).filter(Boolean)
  check(
    '标着「保存」的按钮只剩 footer 一个',
    dialogButtons.filter(t => t.includes('保存')).length === 1,
    dialogButtons.filter(t => t.includes('保存')).join(' | '),
  )
  check(
    '不再有字段级提交按钮（保存手填路径 / 保存上限 / 取消上限）',
    !dialogButtons.some(t => /保存手填路径|保存上限|取消上限/.test(t)),
    dialogButtons.join(' | '),
  )
  // 两列栅格：label 在左列、控件在右列（旧版全竖排，内容 1080px 装不进 622px）。
  // 期望 5 行：配置来源 / 默认模型 / Imagora 目录 / 默认输出文件夹 / 本画布累计上限。
  // 「接口地址」「API Key」在来源是 Imagora 时被收起（填了也不生效），
  // 切到「插件内配置」才会出现 —— 那条单独断言在下面。
  check(
    '字段用两列栅格（label 与控件并排）',
    (await dialog.locator('.im-field-row').count()) === 5,
    String(await dialog.locator('.im-field-row').count()),
  )
  check(
    '来源是 Imagora 时收起「接口地址 / API Key」（填了不生效，不占版面）',
    (await dialog.locator('#imagora-provider-base-url').count()) === 0 &&
      (await dialog.locator('#imagora-provider-api-key').count()) === 0,
    `baseUrl=${await dialog.locator('#imagora-provider-base-url').count()} key=${await dialog.locator('#imagora-provider-api-key').count()}`,
  )

  // 整屏进可视区：旧版内容 1080px / 可视 622px，要滚 458px 才看得到预算。
  // 这条锁住「不靠滚动就能看到全部三组」，是这次重写的核心目标之一。
  {
    const fits = await dialog.evaluate(el => {
      const body = el.querySelector('.im-modal-body')
      return body ? { content: body.scrollHeight, visible: body.clientHeight } : null
    })
    check('设置内容一屏放得下（无需滚动）', !!fits && fits.content <= fits.visible + 2, JSON.stringify(fits))
  }

  // 切到「插件内配置」→ 接口字段出现（progressive disclosure 的另一半）
  await page.locator('#imagora-profile').click()
  await page.waitForTimeout(200)
  await page.locator('.im-select-option', { hasText: '插件内配置' }).first().click()
  await page.waitForTimeout(250)
  check(
    '切到「插件内配置」后出现接口地址与 API Key 两个输入框',
    (await dialog.locator('#imagora-provider-base-url').count()) === 1 &&
      (await dialog.locator('#imagora-provider-api-key').count()) === 1,
    `baseUrl=${await dialog.locator('#imagora-provider-base-url').count()} key=${await dialog.locator('#imagora-provider-api-key').count()}`,
  )
  // 切回原来源，别把弹窗留给后面的用例
  await page.locator('#imagora-profile').click()
  await page.waitForTimeout(200)
  await page.locator('.im-select-option', { hasText: 'aiwanwu 中转站' }).first().click()
  await page.waitForTimeout(200)

  // ---------------- 控件高度阶梯：全项目只有两档 ----------------
  // 回归（维护者报）：设置弹窗里下拉一个高度、输入框一个高度、按钮又一个，
  // 同一行对不齐。根因是每个控件各自用 padding + line-height 撑高，加上
  // `--im-h-field: 38px` 这个 token 定义了却**从没被使用过**。实测当时全项目有
  // **10 种**控件高度：13.8 / 17.2 / 18 / 21.2 / 22.4 / 23.1 / 28 / 36.4 / 40.4 / 87.5。
  //
  // 现收敛为两档 + 两个例外，全部来自 :root：
  //   紧凑档 28（--im-h-ctl）：顶栏、工具栏、节点卡、控件坞、生成历史两条带子
  //   表单档 38（--im-h-field）：设置 / 保存 / 切分这些表单弹窗
  //   例外：.im-chip 18（角标不是控件）、.im-btn-xs 24（行内附属动作）、textarea 自适应
  //
  // 只量「同一行里并排的控件」—— 那才是用户看得出参差的地方。
  {
    const heights = await dialog.evaluate(el => {
      const view = el.ownerDocument.defaultView
      const h = n => (n ? Math.round(n.getBoundingClientRect().height) : null)
      const rows = [...el.querySelectorAll('.im-field-row')].map(row => ({
        control: h(row.querySelector('.im-field, .im-select-trigger')),
        button: h(row.querySelector('.im-field-control > .im-btn-ghost')),
      }))
      const fieldToken = Number(view.getComputedStyle(el).getPropertyValue('--im-h-field').replace('px', ''))
      return { rows, fieldToken }
    })
    const mismatched = heights.rows.filter(r => r.button !== null && r.control !== r.button)
    check(
      '设置弹窗里每个字段行的控件与按钮等高',
      mismatched.length === 0,
      mismatched.length ? JSON.stringify(mismatched) : `${heights.rows.length} 行全部等高`,
    )
    check(
      '表单控件读的是 --im-h-field（不再是 padding 撑出来的怪数字）',
      heights.rows.every(r => r.control === heights.fieldToken),
      `token=${heights.fieldToken} 实测=${JSON.stringify(heights.rows.map(r => r.control))}`,
    )

    // 文字左边距：输入框与下拉必须是同一个起点。
    // 回归（维护者报）：「下拉框和输入框里面文字的边距也没统一，左边距就很明显」。
    // 根因是 .im-select-trigger 自己写了 padding: 0 10px，而 .im-field 是 20px。
    // 现在两者共用同一组声明（上游的做法：Select 触发器直接带 field-control 类）。
    // 口径统一算「边框 + 左内边距」—— 只读 paddingLeft 会把输入框的 1px 边框漏掉。
    const insets = await dialog.evaluate(el => {
      const rows = []
      for (const row of el.querySelectorAll('.im-field-row')) {
        const node = row.querySelector('input.im-field, .im-select-trigger')
        if (!node) continue
        const cs = node.ownerDocument.defaultView.getComputedStyle(node)
        rows.push({
          kind: node.classList.contains('im-select-trigger') ? 'select' : 'input',
          inset: Math.round(parseFloat(cs.borderLeftWidth) + parseFloat(cs.paddingLeft)),
        })
      }
      return rows
    })
    check('输入框与下拉的文字左边距一致', new Set(insets.map(r => r.inset)).size === 1, JSON.stringify(insets))
  }

  // ---------------- 控件坞：标签不许被列宽裁掉 ----------------
  // 行宽曾经钉死 64px（按中文两字标签算的）。换英文后「Zoom out」比「缩小」宽二十像素，
  // 文字直接溢出到列右边缘外、被邻居盖住 —— 而 overflow 没开，看起来不像布局问题。
  // 判据是「标签的实际内容宽 ≤ 它拿到的宽」，只看 label 就够：行的宽度由最宽一行决定。
  //
  // 在 `.im-dock` 这个 locator 上求值（而不是 `page.evaluate` + `document`）：
  // 冒烟脚本跑在 Node 里，`document` 不在作用域；从元素自身取 ownerDocument 才拿得到。
  {
    const rows = await page.locator('.im-dock').evaluate(dock => {
      const out = []
      for (const row of dock.querySelectorAll('.im-dock-row')) {
        const label = row.querySelector('.im-dock-row-label')
        if (!label) continue
        const cs = label.ownerDocument.defaultView.getComputedStyle(label)
        out.push({
          text: (label.textContent || '').trim(),
          rowWidth: Math.round(row.getBoundingClientRect().width),
          // scrollWidth > clientWidth 即「文字比拿到的位置宽」，也就是被裁或溢出
          overflow: label.scrollWidth - label.clientWidth,
          nowrap: cs.whiteSpace,
        })
      }
      return out
    })
    check('控件坞至少 8 行（读数 + 8 个动作）', rows.length >= 9, `${rows.length} 行`)
    check(
      '控件坞每行标签都不溢出（英文标签更长，行宽须随内容）',
      rows.every(r => r.overflow <= 0),
      JSON.stringify(rows.filter(r => r.overflow > 0)),
    )
    check(
      '控件坞各行同宽（由最宽一行决定，不参差）',
      new Set(rows.map(r => r.rowWidth)).size === 1,
      JSON.stringify([...new Set(rows.map(r => r.rowWidth))]),
    )
    check(
      '控件坞行宽不小于中文版的 64px 下限',
      rows.every(r => r.rowWidth >= 64),
      JSON.stringify([...new Set(rows.map(r => r.rowWidth))]),
    )
    check(
      '控件坞标签不换行（换行会把列撑高、行高就乱了）',
      rows.every(r => r.nowrap === 'nowrap'),
      JSON.stringify(rows.map(r => r.nowrap)),
    )
  }

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
    '生成历史成本条有「每日上限 / 单次上限」两个输入框',
    (await budgetInputs.count()) === 2,
    String(await budgetInputs.count()),
  )

  // ---------------- 生成历史：成本条与原版同构 ----------------
  // 三段版面：指标 5 格 + 预算设置同一排 → 按尺寸独立一行 → 列表。
  // 「按尺寸」早先被塞进指标网格的第 6 格，于是整行换行、预算被顶到第二排，
  // 成本条因此高 130px；指标格里也放不下金额，只剩「尺寸 ×数量」。
  check(
    '成本条：指标与预算设置在同一排（按尺寸没占指标格）',
    await history.evaluate(el => {
      const grid = el.querySelector('.im-history-stat-grid')
      const budget = el.querySelector('.im-history-budget')
      if (!grid || !budget) return false
      if (grid.children.length !== 5) return false
      return Math.abs(grid.getBoundingClientRect().top - budget.getBoundingClientRect().top) < 40
    }),
    `指标格=${await history.locator('.im-history-stat-grid > *').count()}`,
  )
  check(
    '成本条：按尺寸独立一行，并带出金额',
    await history.evaluate(el => {
      const sizes = el.querySelector('.im-history-sizes')
      if (!sizes) return false
      const grid = el.querySelector('.im-history-stat-grid')
      if (grid && grid.contains(sizes)) return false
      return /元/.test(sizes.textContent || '')
    }),
    (
      await history
        .locator('.im-history-sizes')
        .innerText()
        .catch(() => '')
    ).replace(/\s+/g, ' '),
  )

  // 一行控件同高：搜索框 / 状态下拉 / 按钮 / 金额框都读同一个 --im-row-h。
  // 早先是四档：.im-field 38、搜索框 31、金额框 26、按钮 22。
  const rowHeights = await history.evaluate(el => {
    const h = n => (n ? Math.round(n.getBoundingClientRect().height) : null)
    return {
      search: h(el.querySelector('.im-history-search')),
      status: h(el.querySelector('.im-history-status .im-select-trigger')),
      searchBtn: h([...el.querySelectorAll('.im-history-bar button')].find(n => n.textContent.trim() === '搜索')),
      budget: h(el.querySelector('.im-history-budget-input')),
      budgetBtn: h(el.querySelector('.im-history-budget button')),
      rowH: Number(
        el.ownerDocument.defaultView
          .getComputedStyle(el.querySelector('.im-history-bar'))
          .getPropertyValue('--im-row-h')
          .replace('px', ''),
      ),
    }
  })
  check(
    '一行控件同高（搜索框 / 下拉 / 按钮 / 金额框）',
    new Set([rowHeights.search, rowHeights.status, rowHeights.searchBtn, rowHeights.budget, rowHeights.budgetBtn])
      .size === 1,
    JSON.stringify(rowHeights),
  )

  // 状态下拉必须是自绘 Select（原版 Select.tsx），不是原生 <select>：
  // 原生那版的圆角、字号、箭头全由浏览器决定，跟旁边的输入框永远不同高。
  check(
    '状态筛选是自绘下拉（不是原生 select）',
    (await history.locator('select').count()) === 0 &&
      (await history.locator('.im-history-status .im-select-trigger').count()) === 1,
    `原生=${await history.locator('select').count()}`,
  )
  check(
    '状态下拉放得下「全部状态」四字（不被省略号截断）',
    await history.locator('.im-history-status .im-select-label').evaluate(el => el.scrollWidth <= el.clientWidth),
    await history.locator('.im-history-status .im-select-label').innerText(),
  )

  // 逐字输入小数：中间态 "0." 必须能留住
  const daily = budgetInputs.first()
  await daily.fill('')
  await daily.pressSequentially('0.5', { delay: 30 })
  check('每日上限能逐字打出 0.5（小数点不被吞）', (await daily.inputValue()) === '0.5', await daily.inputValue())

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

  // ---------------- 切分：走 lib/imageSplit 的预设 + 手填 + 文件名预览 ----------------
  // 回归：这一版之前组件里手写了一个 splitImage()（Math.floor 逐格 drawImage），
  // 行列上限硬编码 6、没有预设、没有文件名预览，而确认按钮还写了 `|| !size` ——
  // 正好是上游明令禁止的那条（读尺寸慢一点按钮就点不动）。现在切图算法来自
  // lib/imageSplit.ts（与上游逐字相同的那份），这里验三件事：预设能点、手填夹紧、
  // 文件名按上游规则生成。
  {
    const imageNode = page
      .locator('.react-flow__node')
      .filter({ has: page.locator('.im-thumb') })
      .first()
    await imageNode.click()
    await page.waitForTimeout(150)
    await page.locator('button[aria-label="切分图片"]').first().click()
    const split = page.getByRole('dialog')
    await split.waitFor()
    await page.waitForTimeout(300)

    const presets = await split.locator('.im-split-presets button').allInnerTexts()
    check('切分弹窗有上游那套网格预设', presets.length === 5, presets.join(' | '))

    // 点 3 × 3 预设 → 汇总跟着变
    await split.locator('.im-split-presets button', { hasText: '3 × 3' }).first().click()
    await page.waitForTimeout(200)
    check(
      '点预设后汇总显示 9 张',
      (await split.locator('.im-split-summary').innerText()).startsWith('9 张'),
      await split.locator('.im-split-summary').innerText(),
    )

    // 手填超出上限（99）→ 失焦后夹到 8（上游 SPLIT_MAX_COLS / ROWS）
    const colsInput = split.locator('#split-cols')
    await colsInput.fill('99')
    await colsInput.blur()
    await page.waitForTimeout(200)
    check('手填列数超上限被夹到 8', (await colsInput.inputValue()) === '8', await colsInput.inputValue())

    // 文件名预览按 splitOutputName 的规则：<stem>-<行>x<列>-<序号>.png
    // 注意顺序是「行 x 列」：上一步把列夹到 8（列数超限），行仍是 3，所以是 -3x8-。
    const names = await split.locator('.im-split-name').allInnerTexts()
    check(
      '输出文件名预览符合上游规则（stem-行x列-序号.png）',
      names.length > 0 && /-3x8-1\.png$/.test(names[0] ?? ''),
      names.join(' | '),
    )

    // 1 × 1 = 不切：确认按钮禁用并给出提示（上游同一判断）
    await colsInput.fill('1')
    await colsInput.blur()
    await split.locator('#split-rows').fill('1')
    await split.locator('#split-rows').blur()
    await page.waitForTimeout(200)
    check('1 × 1 时确认按钮禁用', await split.locator('.im-modal-footer .im-btn-primary').isDisabled(), '')

    await page.keyboard.press('Escape')
    await split.waitFor({ state: 'detached' })
  }

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
  // 手势与上游统一后，帮助文案也必须跟着改回来：教错操作比缺说明更糟。
  check('帮助弹窗写了右键框选', helpText.includes('右键拖拽框选'), helpText.slice(0, 60))
  check('帮助弹窗写了右键菜单', helpText.includes('右键单击节点弹菜单'), helpText.slice(0, 60))
  check('帮助弹窗不再提 Shift+拖拽框选（手势已统一）', !helpText.includes('Shift+拖拽框选'))
  await page.keyboard.press('Escape')
  await help.waitFor({ state: 'detached' })

  // ---------------- 画布交互：拖拽平移 / 滚轮缩放 ----------------
  const zoomBefore = await page.locator('.im-dock-row-value').first().innerText()
  await page.locator('.react-flow').hover()
  await page.mouse.wheel(0, -240)
  await page.waitForTimeout(250)
  const zoomAfter = await page.locator('.im-dock-row-value').first().innerText()
  check('滚轮能缩放画布', zoomBefore !== zoomAfter, `${zoomBefore} → ${zoomAfter}`)

  // ---------------- LOD 阈值与缩放行程 ----------------
  // 所有缩放数字都收在 canvas/zoom.ts（与上游 frontend/src/zoom.ts 同构）。
  // 这里验的是**行为**而不是常量本身：一路缩到底、再一路放到底，看档位在哪翻转、
  // 读数在哪封顶。改了常量却忘了某处字面量，就是靠这几条抓出来的。
  {
    const readZoom = async () => ({
      pct: Number((await page.locator('.im-dock-row-value').first().innerText()).replace('%', '')),
      lod: await page.locator('.im-node-lod').count(),
    })
    await page.locator('.react-flow').hover()

    // 缩小到极限：应停在 5%（MIN_ZOOM=0.05），并进入抽象模式
    for (let i = 0; i < 22; i += 1) {
      await page.mouse.wheel(0, 120)
      await page.waitForTimeout(35)
    }
    const atMin = await readZoom()
    check('缩到极限时的读数封顶在下限', atMin.pct === 5, `pct=${atMin.pct}`)
    check('缩到 15% 以下进入抽象模式', atMin.lod > 0, `lod=${atMin.lod} pct=${atMin.pct}`)

    // 一路放大到极限：应停在 200%（MAX_ZOOM=2），并退出抽象模式
    for (let i = 0; i < 26; i += 1) {
      await page.mouse.wheel(0, -120)
      await page.waitForTimeout(35)
    }
    const atMax = await readZoom()
    check('放到极限时的读数封顶在上限', atMax.pct === 200, `pct=${atMax.pct}`)
    check('放大到 20% 以上退出抽象模式', atMax.lod === 0, `lod=${atMax.lod} pct=${atMax.pct}`)

    // 迟滞：停在死区（15%~20%）里不该翻转。逐步缩到 18% 附近，确认仍是完整渲染
    for (let i = 0; i < 22; i += 1) {
      await page.mouse.wheel(0, 120)
      await page.waitForTimeout(35)
    }
    let deadZone = null
    for (let i = 0; i < 14; i += 1) {
      await page.mouse.wheel(0, -120)
      await page.waitForTimeout(35)
      const now = await readZoom()
      if (now.pct >= 16 && now.pct <= 19) {
        deadZone = now
        break
      }
    }
    check('死区（15%~20%）里保持抽象模式，不来回翻转', deadZone === null || deadZone.lod > 0, JSON.stringify(deadZone))
    // 回到可用的初始视口，别把后面的用例留在 5%
    for (let i = 0; i < 8; i += 1) {
      await page.mouse.wheel(0, -120)
      await page.waitForTimeout(35)
    }
  }

  // ---------------- 图片组的操作栏：hover 必须出现 ----------------
  // 回归：让 rail 显现的 hover 规则只写了 .im-panel-card，而图片组的根是
  // .im-group-node —— 组右侧的「删除图片组」恒为 opacity:0 + pointer-events:none，
  // 鼠标扫过去什么都不出现，只能靠右键菜单删。上游靠 Tailwind 的 group-hover
  // 挂在根节点上，不存在这个缺口，所以这是插件侧的移植遗漏而不是刻意简化。
  {
    const group = page.locator('.im-group-node').first()
    if ((await group.count()) === 0) {
      check('图片组节点存在（否则下一条断言无从谈起）', false, '页面里没有 .im-group-node')
    } else {
      const rail = group.locator('.im-rail').first()
      // ESLint 按 Node 环境检查本文件，浏览器全局（getComputedStyle / document）一律
      // 经元素自己的 window 取 —— 与下方右键小节同一写法。
      const railStyle = sel => rail.evaluate((el, prop) => el.ownerDocument.defaultView.getComputedStyle(el)[prop], sel)
      const before = await railStyle('opacity')
      await group.hover()
      await page.waitForTimeout(250)
      const after = await railStyle('opacity')
      const pe = await railStyle('pointerEvents')
      check(
        '图片组 hover 后操作栏出现（含「删除图片组」）',
        before === '0' && after === '1' && pe === 'auto',
        `before=${before} after=${after} pointer-events=${pe}`,
      )
      await page.mouse.move(4, 4)
      await page.waitForTimeout(120)
    }
  }

  // ---------------- 撤销：工具栏新增的节点必须可撤销 ----------------
  // 回归：三条新增入口（提示词卡 / 图片组 / 上传）曾经都只 setNodes、不 record，
  // 于是「撤销」按钮恒为 disabled，Ctrl+Z 也无可撤销 —— 用户视角就是「撤销不好使」。
  const undoBtn = page.getByRole('button', { name: '撤销' })
  const countNodes = () => page.locator('.react-flow__node').count()
  const baseCount = await countNodes()
  await page.getByRole('button', { name: '新建提示词卡片' }).click()
  await page.waitForTimeout(350)
  const addedCount = await countNodes()
  check('工具栏新增后「撤销」按钮可用', !(await undoBtn.isDisabled()), `disabled=${await undoBtn.isDisabled()}`)
  await undoBtn.click()
  await page.waitForTimeout(350)
  check(
    '点「撤销」撤回刚新增的卡片',
    (await countNodes()) === baseCount,
    `${baseCount} → ${addedCount} → ${await countNodes()}`,
  )

  // ---------------- 输出文件夹：三个入口都能弹目录选择器 ----------------
  // 回归：插件从前只有设置弹窗里能点「选择文件夹」，卡片上只有一条裸输入框，
  // 选中栏与工具栏则根本不弹选择器（一个抄默认值、一个打开设置弹窗）。
  // 上游三个入口都是 FolderPicker / selectFolder，这里逐条验「点下去真的变了值」——
  // 验收台的 /imagora/pick-folder 会回一个带 `picked` 的确定路径，所以断言看得见。
  {
    // 卡片上那枚文件夹按钮：新建一张卡，点按钮，输入框里应出现 mock 回的路径
    await page.getByRole('button', { name: '新建提示词卡片' }).click()
    await page.waitForTimeout(350)
    const freshCard = page
      .locator('.react-flow__node')
      .filter({ has: page.locator('button[aria-label="选择文件夹"]') })
      .last()
    const cardInput = freshCard.locator('input.im-field').last()
    const before = await cardInput.inputValue()
    await freshCard.locator('button[aria-label="选择文件夹"]').last().click()
    await page.waitForTimeout(350)
    const after = await cardInput.inputValue()
    check(
      '卡片上的文件夹按钮真的弹了选择器并写回路径',
      after !== before && after.includes('picked'),
      `${before || '(空)'} → ${after || '(空)'}`,
    )

    // 工具栏「默认输出文件夹」：点下去应当直接改默认值，而不是开设置弹窗
    const defaultBtn = page.getByRole('button', { name: '默认输出文件夹', exact: true })
    const cfgBefore = await page.evaluate(() =>
      fetch('imagora/config')
        .then(r => r.json())
        .then(c => c.defaultOutputDir),
    )
    await defaultBtn.click()
    await page.waitForTimeout(400)
    const cfgAfter = await page.evaluate(() =>
      fetch('imagora/config')
        .then(r => r.json())
        .then(c => c.defaultOutputDir),
    )
    check(
      '工具栏「默认输出文件夹」点了直接改默认值（不再只是打开设置）',
      cfgAfter !== cfgBefore && cfgAfter.includes('picked'),
      `${cfgBefore} → ${cfgAfter}`,
    )
    check('点完没有弹出设置弹窗', (await page.getByRole('dialog').count()) === 0)

    // 选中栏：选中那张卡后点「设置输出文件夹」，走选择器而不是抄默认值
    await freshCard.click()
    await page.waitForTimeout(250)
    const inspectorBtn = page.locator('.im-inspector').getByRole('button', { name: /设置输出文件夹/ })
    check('选中卡片后出现「设置输出文件夹」', (await inspectorBtn.count()) === 1, String(await inspectorBtn.count()))
    if ((await inspectorBtn.count()) === 1) {
      await inspectorBtn.click()
      await page.waitForTimeout(400)
      const afterBatch = await cardInput.inputValue()
      check('选中栏「设置输出文件夹」弹选择器并写回选中卡片', afterBatch.includes('picked'), afterBatch || '(空)')
      check('点完没有弹出设置弹窗', (await page.getByRole('dialog').count()) === 0)
    }

    // 收尾：这三步都进了撤销栈（新建卡 / 卡上改路径 / 选中栏改路径），必须原路撤回，
    // 否则后面那条「Ctrl+Z 与撤销按钮同一个栈」会撤销到我这里，节点数对不上。
    // 工具栏改默认值写的是 settings，不进画布撤销栈，所以只撤三次。
    await page.locator('.react-flow__pane').click({ position: { x: 20, y: 20 } })
    for (let i = 0; i < 3; i += 1) {
      await undoBtn.click()
      await page.waitForTimeout(200)
    }
    check(
      '输出文件夹用例收尾：画布回到用例开始前的节点数',
      (await countNodes()) === baseCount,
      String(await countNodes()),
    )
  }

  // ---------------- 右键：单击节点弹菜单 / 拖拽框选 ----------------
  // 回归（维护者报）：插件里一按右键就出浏览器原生菜单，右键拖动也只是选中文字 ——
  // 整套「右键菜单 + 右键框选」都没移植。这里用真实鼠标事件验三件事。
  {
    const imageNode = page
      .locator('.react-flow__node')
      .filter({ has: page.locator('.im-thumb') })
      .first()
    const imageBox = await imageNode.boundingBox()
    const paneBox = await page.locator('.react-flow__pane').boundingBox()
    check('夹具里有一张图片节点（右键菜单要用）', !!imageBox && !!paneBox, JSON.stringify({ imageBox, paneBox }))

    /** 原生右键菜单是否被拦下：本面板内必须 preventDefault。
     *  判据用事件对象的 defaultPrevented —— 真弹没弹出来取决于浏览器 / 无头环境，
     *  但「有没有调用 preventDefault」是确定的。 */
    // evaluate 的回调在**页面**里执行，但 ESLint 按 Node 环境检查这个文件，
    // 所以 `document` / `MouseEvent` 这类浏览器全局一律经元素自己的文档与视图取。
    const guarded = await page.locator('.im-root').evaluate(root => {
      const doc = root.ownerDocument
      const view = doc.defaultView
      const pane = doc.querySelector('.react-flow__pane')
      if (!pane || !view) return { ok: false, reason: 'no pane' }
      const event = new view.MouseEvent('contextmenu', { bubbles: true, cancelable: true })
      pane.dispatchEvent(event)
      return { ok: event.defaultPrevented }
    })
    check('面板内屏蔽浏览器原生右键菜单', guarded.ok === true, JSON.stringify(guarded))

    // 单击（右键按下→松开，几乎没动）：节点上弹出菜单。
    // 落点要取节点与画布的**交集**：夹具节点上沿可能被顶栏压住，
    // 点在顶栏上既不会触发画布的 mousedown，也会让「鼠标落在节点上」失效。
    const hitX = imageBox.x + imageBox.width / 2
    const hitY = Math.min(Math.max(imageBox.y + 40, paneBox.y + 30), imageBox.y + imageBox.height - 10)
    await page.mouse.move(hitX, hitY)
    await page.mouse.down({ button: 'right' })
    await page.mouse.up({ button: 'right' })
    const menu = page.getByRole('menu', { name: '节点操作' })
    await menu.waitFor({ timeout: 3000 })
    const items = await menu.locator('[role="menuitem"]').allInnerTexts()
    check('右键单击图片节点弹出菜单', items.length > 0, items.join(' | '))
    check(
      '图片菜单里有它专属的动作（预览 / 裁剪 / 蒙版）',
      items.some(t => t.includes('预览大图')) && items.some(t => t.includes('裁剪')),
      items.join(' | '),
    )
    // 点空白处关闭
    await page.mouse.click(paneBox.x + 12, paneBox.y + 12)
    await page.waitForTimeout(200)
    check('点空白关掉菜单', (await menu.count()) === 0, String(await menu.count()))

    // 右键拖拽 = 框选：选框出现，松开后按「完全包含」落定选中
    const before = await page
      .locator('.react-flow__node.node-selected, .react-flow__node[data-selected="true"]')
      .count()
    await page.mouse.move(paneBox.x + 8, paneBox.y + 8)
    await page.mouse.down({ button: 'right' })
    await page.mouse.move(paneBox.x + paneBox.width - 8, paneBox.y + paneBox.height - 8, { steps: 12 })
    const marqueeVisible = await page.locator('.im-marquee').count()
    await page.mouse.up({ button: 'right' })
    check('右键拖拽出现框选矩形', marqueeVisible === 1, String(marqueeVisible))
    await page.waitForTimeout(250)
    const selectedAfter = await page
      .locator('.react-flow__node')
      .evaluateAll(els => els.filter(el => el.classList.contains('selected')).length)
    check('右键框选落定选中（至少 1 个）', selectedAfter >= 1, `before=${before} after=${selectedAfter}`)
    check('松开后选框消失', (await page.locator('.im-marquee').count()) === 0)
    // 清掉选中，免得影响后续用例
    await page.keyboard.press('Escape')
    await page.mouse.click(paneBox.x + 12, paneBox.y + 12)
  }

  await page.locator('.react-flow__pane').click({ position: { x: 24, y: 24 } })
  await page.keyboard.press('Control+z')
  await page.waitForTimeout(300)
  check('Ctrl+Z 与撤销按钮同一个栈', (await countNodes()) === baseCount, String(await countNodes()))

  // ---------------- 缩略图：卡片用小图，预览用原图 ----------------
  // 回归（维护者报「开十几张大图很吃内存」）：卡片只显示 128×160，却 src 直指
  // 3072×4096 的原图 —— 每张摊开约 48 MB。现在卡片走浏览器侧缩略图（长边 512），
  // 而双击预览 / 裁剪 / 蒙版仍必须拿原图。三条断言把这两件事分开钉住。
  {
    await page.locator('.react-flow').waitFor()
    // evaluate 的回调在**页面**里跑，但 ESLint 按 Node 环境检查这个文件：
    // 浏览器全局一律经元素自己的文档取（与本文件其它断言同一做法）。
    const thumb = await page
      .locator('.im-thumb')
      .first()
      .evaluate(async box => {
        const img = box.querySelector('img')
        if (!img) return { ok: false, reason: 'no thumb img' }
        if (!img.complete) await new Promise(done => img.addEventListener('load', done, { once: true }))
        return { ok: true, src: img.getAttribute('src') || '', natural: img.naturalWidth }
      })
    check('卡片缩略图走的是本地生成的小图（blob:）', thumb.src?.startsWith('blob:') === true, JSON.stringify(thumb))
    check(
      '缩略图确实被缩小了（长边 ≤ 512）',
      thumb.natural > 0 && thumb.natural <= 512,
      `naturalWidth=${thumb.natural}`,
    )

    // 双击放大：预览里必须是原图（1600×1200 的验收台样例），不能被缩略图顶替
    await page.locator('.im-thumb img').first().dblclick()
    const zoom = page.locator('[data-zoom-image]')
    await zoom.waitFor({ timeout: 5000 })
    const natural = await zoom.evaluate(async img => {
      if (!img.complete) await new Promise(done => img.addEventListener('load', done, { once: true }))
      return { w: img.naturalWidth, h: img.naturalHeight, src: img.getAttribute('src') || '' }
    })
    check('双击预览加载的是原图（未被缩略图降质）', natural.w > 512, JSON.stringify(natural))
    await page.keyboard.press('Escape')
    await zoom.waitFor({ state: 'detached' })
  }

  // ---------------- 自动整理：提示词卡也必须参与 ----------------
  // 回归：插件曾把这个按钮实现成「只把选中的**图片节点**横排」（baseX + index * 172），
  // 提示词卡直接跳过 —— 于是「全选后点整理」看着像没反应，而原版走的是分层布局
  // （layoutSelection），三类节点一起排。断言锁住「提示词卡的坐标真的变了」。
  {
    const readPositions = () =>
      page.$$eval('.react-flow__node', els =>
        els.map(el => {
          const m = /translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(el.style.transform || '')
          return {
            id: el.getAttribute('data-id') || '',
            // 提示词卡是这一种里唯一带 textarea 的节点
            isPrompt: !!el.querySelector('textarea'),
            x: m ? Number(m[1]) : null,
            y: m ? Number(m[2]) : null,
          }
        }),
      )
    const before = await readPositions()
    const promptBefore = before.find(row => row.isPrompt)
    await page.locator('.react-flow__pane').click({ position: { x: 24, y: 24 } })
    await page.keyboard.press('Control+a')
    await page.waitForTimeout(150)
    await page.getByRole('button', { name: /^自动整理/ }).click()
    await page.waitForTimeout(400)
    const after = await readPositions()
    const promptAfter = after.find(row => row.id === promptBefore?.id)
    const movedCount = after.filter(row => {
      const old = before.find(b => b.id === row.id)
      return old && (old.x !== row.x || old.y !== row.y)
    }).length
    check(
      '自动整理会重排提示词卡（不是只排图片）',
      !!promptBefore && !!promptAfter && (promptBefore.x !== promptAfter.x || promptBefore.y !== promptAfter.y),
      `${promptBefore?.x},${promptBefore?.y} → ${promptAfter?.x},${promptAfter?.y}`,
    )
    check('自动整理后多个节点都动了', movedCount >= 2, `moved=${movedCount}`)
    // 布局是派生重算：撤销能退回原样（说明它记进了历史，且记录时保留重做栈）
    await page.keyboard.press('Control+z')
    await page.waitForTimeout(300)
    const restored = (await readPositions()).find(row => row.id === promptBefore?.id)
    check(
      '自动整理可撤销（退回原坐标）',
      restored?.x === promptBefore?.x && restored?.y === promptBefore?.y,
      `${restored?.x},${restored?.y}`,
    )
  }

  // ---------------- 中文输入法：合成不得被打断 ----------------
  // 回归：受控 textarea 在合成期间被 value 回写，浏览器会提交并重置合成缓冲区，
  // 已输入的拼音被当成正文逐段追加（`nihao` → `nninihnihani…`）。
  const imeCard = page
    .locator('.react-flow__node')
    .filter({ has: page.locator('textarea') })
    .first()
  const imeArea = imeCard.locator('textarea').first()
  await imeArea.click()
  const imeBefore = await imeArea.inputValue()
  const cdp = await page.context().newCDPSession(page)
  for (const step of ['n', 'ni', 'nih', 'niha', 'nihao']) {
    await cdp.send('Input.imeSetComposition', {
      text: step,
      selectionStart: step.length,
      selectionEnd: step.length,
    })
    await page.waitForTimeout(60)
  }
  await cdp.send('Input.insertText', { text: '你好' })
  await page.waitForTimeout(250)
  const imeAfter = await imeArea.inputValue()
  check('中文提交后只多出候选词本身', imeAfter === `${imeBefore}你好`, JSON.stringify(imeAfter.slice(imeBefore.length)))
  check('提示词里没有拼接出来的拼音脏串', !/nih|ninih/.test(imeAfter), JSON.stringify(imeAfter.slice(-16)))

  // ---------------- 离开画布前把快照 flush 下去 ----------------
  // 回归：保存是 2.5s 防抖，卸载时只 clearTimeout 不 flush，防抖窗口里的改动全丢；
  // 回来时再按旧快照恢复，用户看到的就是「刚放的新卡片没了」。
  await imeArea.fill('flush-probe-中文')
  await page.waitForTimeout(120) // 故意不等防抖窗口
  await page.evaluate(() => {
    // 模拟「切到别的窗口」：宿主此时会收到 visibilitychange。
    // 走 globalThis 取 document —— 这段在浏览器里跑，但 eslint 按 node 全局检查本文件。
    const doc = globalThis.document
    Object.defineProperty(doc, 'visibilityState', { value: 'hidden', configurable: true })
    doc.dispatchEvent(new globalThis.Event('visibilitychange'))
  })
  await page.waitForTimeout(500)
  const saved = await page.evaluate(async () => {
    const r = await fetch('/imagora/recovery/latest').then(x => x.json())
    return { nodes: r?.nodes?.length ?? null, hasProbe: JSON.stringify(r).includes('flush-probe-中文') }
  })
  check('切走窗口时快照里已有最新内容', saved.hasProbe === true, JSON.stringify(saved))

  // ---------------- 重新认领：切走 tab 再回来，任务还在跑 ----------------
  // 回归：任务活在宿主进程里，浏览器切走只是丢了观察者。旧实现重挂载后卡片显示
  // 「就绪」、任务再没人问 —— 白跑一次还烧钱。现在按节点 data 里的 taskId 回来问一句。
  //
  // 用验收台的重置钩子拿到干净起点：不做「清空夹具」那套 UI 操作 —— 点和 Delete 的
  // 时序跟防抖写入纠缠在一起，实测反复误判。
  {
    const probeId = 't_resume_smoke'
    const taskCalls = []
    page.on('request', r => {
      if (r.url().includes('/imagora/task?')) taskCalls.push(r.url().split('task?')[1])
    })

    // 用 page.request 播种（不执行页面脚本），且走 __harness 专用路由：
    // reload 会触发旧页面的「卸载前 flush」写回旧画布，普通 save 会被它盖掉。
    const seedSnapshot = async (nodes, edges = []) => {
      await page.request.post(`${BASE}imagora/__harness/reset-canvas`)
      await page.request.post(`${BASE}imagora/__harness/seed-canvas`, { data: { nodes, edges } })
      await page.reload({ waitUntil: 'networkidle' })
      await page.waitForTimeout(1800)
    }

    const promptCard = (id, data) => ({
      id,
      type: 'prompt',
      position: { x: 80, y: 80 },
      data: {
        prompt: data.prompt,
        size: '1024x1024',
        quality: 'high',
        outputDir: '',
        status: 'idle',
        taskId: data.taskId,
      },
    })

    taskCalls.length = 0
    await seedSnapshot([promptCard('resume-probe', { prompt: 'resume probe', taskId: probeId })])
    const dotClass = await page
      .locator('.react-flow__node .im-dot')
      .first()
      .getAttribute('class')
      .catch(() => '')
    check(
      '重新认领：卡片回到「生成中」而不是「就绪」',
      Boolean(dotClass && dotClass.includes('is-running')),
      `dot=${dotClass} nodes=${await page.locator('.react-flow__node').count()} taskCalls=${taskCalls.length}`,
    )
    check('重新认领：确实回去问了宿主任务状态', taskCalls.length > 0, taskCalls.slice(0, 2).join(','))

    // 任务真的没了（宿主重启过）时不许假装在跑
    taskCalls.length = 0
    await seedSnapshot([promptCard('gone-probe', { prompt: 'gone probe', taskId: 't_gone' })])
    const goneClass = await page
      .locator('.react-flow__node .im-dot')
      .first()
      .getAttribute('class')
      .catch(() => '')
    check('重新认领：任务已不存在时不假装运行中', !String(goneClass).includes('is-running'), String(goneClass))
    check('重新认领：任务不存在后停止轮询', taskCalls.length <= 2, String(taskCalls.length))

    // ---------------- 缺字段的工作流不该白屏 ----------------
    // 回归：一份手改/旧版本写的工作流，提示词卡只有 `{ prompt }`、没有 size。
    // 早先渲染层对 `undefined` 直接 `.trim()`，抛 TypeError；画布没有错误边界，
    // 整棵树被卸载 —— 页面全白，而且崩溃时又把坏画布存回快照，下次打开接着崩。
    // 这里播一份缺 size 的快照，断言：页面还在、卡片还在、尺寸框被补成了配置的第一档。
    const broken = {
      id: 'broken-probe',
      type: 'prompt',
      position: { x: 80, y: 80 },
      data: { prompt: '缺字段的旧卡片', status: 'idle' },
    }
    await seedSnapshot([broken], [])
    const brokenNodes = await page.locator('.react-flow__node').count()
    const hasCanvas = await page.locator('.react-flow').isVisible()
    check(
      '缺字段的工作流不会白屏（画布与卡片都还在）',
      hasCanvas && brokenNodes === 1,
      `canvas=${hasCanvas} nodes=${brokenNodes}`,
    )
    const brokenSize = await page
      .locator('.react-flow__node .im-select-trigger .im-select-label')
      .first()
      .innerText()
      .catch(() => '')
    check('缺 size 的卡片被补成了配置里的第一档（不是空白）', brokenSize.trim().length > 0, `size=${brokenSize.trim()}`)
    // 运行按钮可用 = 这张卡是完整的，不是「活着但不能用」
    const runDisabled = await page
      .locator('.react-flow__node button')
      .first()
      .isDisabled()
      .catch(() => null)
    check('缺字段的卡片补全后可直接运行（运行按钮没有因为缺字段被禁用）', runDisabled === false, String(runDisabled))

    // 更狠的一种：节点**本身**不合法（`manual.json` 里就是 `{ "id": "manual" }`，
    // 没有 type、没有 position、没有 data）。缺字段能补，这种补不了 ——
    // 猜出来的节点比没有更糟。React Flow 读 `position.x` 时会直接抛错，
    // 所以这类必须**跳过**而不是硬塞进去。
    await seedSnapshot([{ id: 'manual' }], [])
    const junkRoot = await page.locator('.im-root').count()
    const junkNodes = await page.locator('.react-flow__node').count()
    check(
      '节点本身不合法（只有 id）时跳过它，页面照常（不是白屏）',
      junkRoot === 1 && junkNodes === 0,
      `root=${junkRoot} nodes=${junkNodes}`,
    )

    // 一好一坏：坏的被跳过，好的照常显示
    await seedSnapshot([{ id: 'manual' }, promptCard('ok-probe', { prompt: '好的一张卡' })], [])
    const mixedNodes = await page.locator('.react-flow__node').count()
    check('一好一坏时只跳过坏的那个（好的照常显示）', mixedNodes === 1, `nodes=${mixedNodes}`)
  }

  // ---------------- 错误边界：兜住「想不到的」缺陷 ----------------
  // 数据侧的校验能挡住已知的坏形状，但挡不住**未知**缺陷。这一层的验收不能靠
  // 「造一份能把画布搞崩的数据」—— 脏数据现在会被跳过，根本走不到渲染异常。
  // 所以插件把边界本身交了出来（`__dshImagoraBoundary`，与 `__dshImagoraCanvas` 同一性质），
  // 这里直接挂一个「render 里必定抛错」的子树进去。
  {
    // 这两句错误是本段**故意**抛的（见上面 expectedErrors 的说明）
    expectedErrors.push('模拟渲染失败：卡片数据异常', '模拟画布崩溃')
    const nodeBoundary = await page.evaluate(() => {
      const boundary = globalThis.window.__dshImagoraBoundary
      const el = globalThis.document.createElement('div')
      el.id = 'smoke-node-boundary'
      globalThis.document.body.appendChild(el)
      const Boom = () => {
        throw new Error('模拟渲染失败：卡片数据异常')
      }
      globalThis.window.ReactDOMClient.createRoot(el).render(
        globalThis.window.React.createElement(
          boundary.NodeBoundary,
          { nodeId: 'p1' },
          globalThis.window.React.createElement(Boom),
        ),
      )
      return true
    })
    await page.waitForTimeout(300)
    const nodeText = (await page.locator('#smoke-node-boundary').innerText()).replace(/\s+/g, ' ')
    check(
      '单张卡渲染抛错时，只把那张卡换成「这张卡出错了」',
      nodeBoundary && nodeText.includes('这张卡出错了') && nodeText.includes('模拟渲染失败'),
      nodeText.slice(0, 80),
    )
    check(
      '替代卡片里给了「重试」按钮（不是死路）',
      (await page.locator('#smoke-node-boundary button').count()) === 1,
      await page.locator('#smoke-node-boundary button').innerText(),
    )

    await page.evaluate(() => {
      const boundary = globalThis.window.__dshImagoraBoundary
      const el = globalThis.document.createElement('div')
      el.id = 'smoke-canvas-boundary'
      globalThis.document.body.appendChild(el)
      globalThis.window.__smokeCleared = 0
      const Boom = () => {
        throw new Error('模拟画布崩溃')
      }
      globalThis.window.ReactDOMClient.createRoot(el).render(
        globalThis.window.React.createElement(
          boundary.CanvasBoundary,
          {
            onClear: () => (globalThis.window.__smokeCleared += 1),
            onCrash: () => (globalThis.window.__smokeCrashed = true),
          },
          globalThis.window.React.createElement(Boom),
        ),
      )
    })
    await page.waitForTimeout(300)
    const canvasText = (await page.locator('#smoke-canvas-boundary').innerText()).replace(/\s+/g, ' ')
    check(
      '画布整体崩溃时给的是「画布渲染出错」+ 出路（重试 / 清空画布）',
      canvasText.includes('画布渲染出错') &&
        (await page.locator('#smoke-canvas-boundary button', { hasText: '重试' }).count()) === 1 &&
        (await page.locator('#smoke-canvas-boundary button', { hasText: '清空画布' }).count()) === 1,
      canvasText.slice(0, 80),
    )
    check(
      '画布崩溃会通知宿主（用来停掉自动快照）',
      await page.evaluate(() => globalThis.window.__smokeCrashed === true),
    )
    await page.locator('#smoke-canvas-boundary button', { hasText: '清空画布' }).click()
    await page.waitForTimeout(200)
    check('「清空画布」真的调到调用方', (await page.evaluate(() => globalThis.window.__smokeCleared)) === 1)
    // 这个探针是挂在 body 上的，清掉别影响后面的用例
    await page.evaluate(() => {
      globalThis.document.getElementById('smoke-node-boundary')?.remove()
      globalThis.document.getElementById('smoke-canvas-boundary')?.remove()
    })
    // 白名单用完即收：后面任何真实报错仍然要算失败
    expectedErrors.length = 0
  }

  // ---------------- 快照不写蒙版涂抹图 ----------------
  // 回归：蒙版是原图尺寸的 PNG data URL（几 MB），而快照每 2.5 秒重写一次、留 5 份。
  // 一旦用过蒙版，快照会从几 KB 涨到几十 MB 并反复写盘。现在保存前剥掉它
  // （代价：刷新后涂抹痕迹不恢复，图本身不受影响）。断言直接读宿主收到的 JSON。
  {
    const mask = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUg=='
    await page.request.post(`${BASE}imagora/__harness/reset-canvas`)
    await page.request.post(`${BASE}imagora/__harness/seed-canvas`, {
      data: {
        nodes: [
          {
            id: 'mask-probe',
            type: 'image',
            position: { x: 60, y: 60 },
            data: {
              registryId: 'ref-1',
              name: 'masked.png',
              url: '/imagora/file?id=ref-1',
              size: 1234,
              ext: 'png',
              refCount: 0,
              absPath: 'D:/probe/masked.png',
              maskDataUrl: mask,
            },
          },
        ],
        edges: [],
      },
    })
    // 顺序很关键：reload 会触发旧页面的「卸载前 flush」，那一次写的是旧画布，
    // 必须在 ignoreSaves 仍然开着的时候发生（否则刚播的种子当场被盖掉）。
    // 等新页面把种子画布挂上去、再打开保存，让它的自动保存把这份画布写回来。
    await page.reload({ waitUntil: 'networkidle' })
    await page.waitForTimeout(1200)
    await page.request.post(`${BASE}imagora/__harness/accept-saves`)
    await page.waitForTimeout(3200) // > RECOVERY_DEBOUNCE(2500)

    const saved = await page.evaluate(async () => {
      const r = await fetch('/imagora/recovery/latest').then(x => x.json())
      return { nodes: r?.nodes ?? [], text: JSON.stringify(r ?? {}) }
    })
    check('快照确实存下了这次画布（有 1 个节点）', saved.nodes.length === 1, String(saved.nodes.length))
    check('快照里没有蒙版涂抹图', !saved.text.includes('maskDataUrl'), saved.text.slice(0, 120))
    check('快照里没有那串 base64 本体', !saved.text.includes('iVBORw0KGgoAAAANSUhEUg'), saved.text.slice(0, 120))
    // 图本身照旧进快照：只剥蒙版，不剥节点
    check('蒙版之外的数据照旧保留', saved.text.includes('masked.png'), saved.text.slice(0, 120))
  }

  // ---------------- 吸附对齐线：必须画在 ViewportPortal 里 ----------------
  // 回归：对齐线原先是 `<ReactFlow>` 的 children，而 children 在渲染树里是 GraphView
  // 的**兄弟**（落在 .react-flow 包裹层里、带 transform 的 .react-flow__viewport 外面），
  // 于是 absolute 定位拿到的是「未缩放的屏幕坐标」—— 只要平移或缩放过，线就画在错位置，
  // 而且不报任何错。现在挂进 ViewportPortal，画布坐标可直接用。
  //
  // 放在套件末尾 + 用 __harness 种子画布，是为了不污染夹具布局：这一块要真的拖节点，
  // 摆在中间会把后面「双击图片放大」的落点挪走（实测 dblclick 直接超时）。
  {
    const twoCards = [
      {
        id: 'snap-a',
        type: 'prompt',
        position: { x: 120, y: 140 },
        data: { prompt: 'snap a', size: '1024x1024', quality: 'high', outputDir: '', status: 'idle' },
      },
      {
        id: 'snap-b',
        type: 'prompt',
        position: { x: 520, y: 140 },
        data: { prompt: 'snap b', size: '1024x1024', quality: 'high', outputDir: '', status: 'idle' },
      },
    ]
    await page.request.post(`${BASE}imagora/__harness/reset-canvas`)
    await page.request.post(`${BASE}imagora/__harness/seed-canvas`, { data: { nodes: twoCards, edges: [] } })
    await page.reload({ waitUntil: 'networkidle' })
    await page.waitForTimeout(1800)

    const cardA = await page.locator('.react-flow__node').nth(0).boundingBox()
    const cardB = await page.locator('.react-flow__node').nth(1).boundingBox()
    let guideInfo = { found: false, reason: 'no nodes' }
    if (cardA && cardB) {
      // 慢速把 B 拖向 A 的左边缘，制造一次吸附（太快会被拖动阈值吃掉）
      await page.mouse.move(cardB.x + 30, cardB.y + 16)
      await page.mouse.down()
      for (let step = 1; step <= 12; step += 1) {
        const t = step / 12
        await page.mouse.move(cardB.x + 30 + (cardA.x - cardB.x - 4) * t, cardB.y + 16)
        await page.waitForTimeout(40)
      }
      // 探针挂在画布根元素上求值（不直接用 document，见本文件对 ESLint Node 环境的说明）
      guideInfo = await page.locator('.im-root').evaluate(root => {
        const guide = root.querySelector('[data-testid="snap-guide"]')
        if (!guide) return { found: false, reason: 'no guide during drag' }
        return {
          found: true,
          className: guide.className,
          axis: guide.getAttribute('data-axis'),
          // 坐标系正确性的判据：必须落在带 transform 的 viewport 之内
          inViewport: Boolean(guide.closest('.react-flow__viewport')),
        }
      })
      await page.mouse.up()
      await page.waitForTimeout(200)
    }
    check(
      '拖拽吸附时对齐线出现，且画在 .react-flow__viewport 内（坐标系正确）',
      guideInfo.found === true && guideInfo.inViewport === true,
      JSON.stringify(guideInfo),
    )
    check(
      '对齐线保持上游 DOM 契约（.snap-guide + data-axis）',
      guideInfo.found === true && guideInfo.className === 'snap-guide' && Boolean(guideInfo.axis),
      `${guideInfo.className} axis=${guideInfo.axis}`,
    )
    check(
      '松手后对齐线消失（不残留到静态画面）',
      (await page.locator('[data-testid="snap-guide"]').count()) === 0,
      String(await page.locator('[data-testid="snap-guide"]').count()),
    )
  }

  // ---------------- 删除节点不删文件 ----------------
  // 回归（维护者报「参考图生成的图删掉后，历史里就找不到了」）：单条删除走的是
  // `deleteNode` → 顺带调 `/asset/delete`（删登记 + unlink 文件），而历史按账本的
  // `outputAssetIds` 去注册表解析 —— 登记一删，那条记录永远只剩「文件已移动」。
  // 实测账本里已有两张插件出的图这样永久消失。原版的契约是「删节点仅断连线不删文件」。
  //
  // 断言三件事：节点真的没了、**没有**发删资产的请求、提示里说清图还在。
  // 放在套件末尾 + 用 __harness 种子画布，避免把夹具里的图片节点删掉影响前面的用例。
  {
    const deleteCalls = []
    page.on('request', r => {
      if (r.url().includes('/imagora/asset/delete')) deleteCalls.push(r.url())
    })
    await page.request.post(`${BASE}imagora/__harness/reset-canvas`)
    await page.request.post(`${BASE}imagora/__harness/seed-canvas`, {
      data: {
        nodes: [
          {
            id: 'del-probe',
            type: 'image',
            position: { x: 140, y: 160 },
            data: {
              registryId: 'del-asset-1',
              name: 'del-probe.png',
              url: '/imagora/file?id=del-asset-1',
              size: 1024,
              ext: 'png',
              absPath: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\output\\.assets\\del-probe.png',
            },
          },
        ],
        edges: [],
      },
    })
    await page.reload({ waitUntil: 'networkidle' })
    await page.waitForTimeout(1800)

    const card = page.locator('.react-flow__node').first()
    const beforeCount = await page.locator('.react-flow__node').count()
    await card.hover()
    await page.waitForTimeout(200)
    const delBtn = card.locator('.im-rail button[aria-label="删除图片"]')
    const hasDelBtn = (await delBtn.count()) === 1
    if (hasDelBtn) await delBtn.click()
    await page.waitForTimeout(500)

    check('删除图片：操作栏那颗按钮确实在（否则下两条无从谈起）', hasDelBtn)
    check(
      '删除图片：节点从画布消失',
      (await page.locator('.react-flow__node').count()) === beforeCount - 1,
      `${beforeCount} → ${await page.locator('.react-flow__node').count()}`,
    )
    check(
      '删除图片：不调用 /asset/delete（文件与登记都保留，历史才解析得出来）',
      deleteCalls.length === 0,
      deleteCalls.slice(0, 2).join(' | '),
    )
    const toastText = await page.locator('.im-root').evaluate(root => {
      // toast 是 .im-root 里贴底居中的那颗胶囊；没有就回空串
      const node = root.querySelector('div[style*="translateX(-50%)"]')
      return node ? String(node.textContent || '') : ''
    })
    check('删除图片：提示里写明图片仍留在磁盘、历史能找回', toastText.includes('图片仍留在磁盘上'), toastText)
  }

  // ---------------- 生成回流：结果图排在卡片正下方，两轮之间不重叠 ----------------
  // 回归（维护者报）：插件里生成完的图不排版、还会叠在一起，原版没这问题。
  // 根因：回流时自己算位置 `x: prompt.x + index * 172` —— 既没有「按卡片居中」，
  // 也没有把**这张卡已有的结果**算进来，于是第二轮生成正好压在上一轮那几张上。
  // 现在两边共用 lib/layout.ts 的 layoutPromptResults（同一份移植件），位置由它统一算；
  // 这条断言锁的就是「用的是它」：居中 + 同行排开 + 不重叠。
  {
    await page.request.post(`${BASE}imagora/__harness/reset-canvas`)
    await page.request.post(`${BASE}imagora/__harness/seed-canvas`, {
      data: {
        nodes: [
          {
            id: 'reflow-probe',
            type: 'prompt',
            position: { x: 200, y: 120 },
            data: { prompt: 'reflow probe', size: '1024x1024', quality: 'high', outputDir: '', status: 'idle' },
          },
        ],
        edges: [],
      },
    })
    await page.reload({ waitUntil: 'networkidle' })
    await page.waitForTimeout(1800)

    const promptBox = await page.locator('.react-flow__node-prompt').boundingBox()
    const runBtn = page.locator('.react-flow__node-prompt .im-btn-primary').first()
    const centerX = box => box.x + box.width / 2
    /** 点运行并等到收尾：mock 的轮询是 1.2s × 3 步才到 done，留足余量 */
    const runOnce = async () => {
      await runBtn.click()
      await page.waitForTimeout(5200)
    }

    await runOnce()
    const firstCount = await page.locator('.react-flow__node-image').count()
    check('生成完成后结果图落在画布上', firstCount === 1, `images=${firstCount}`)
    if (firstCount === 1 && promptBox) {
      const one = await page.locator('.react-flow__node-image').first().boundingBox()
      check(
        '结果图排在卡片正下方且水平居中（不是从卡片左边沿开始排）',
        Boolean(one) && Math.abs(centerX(one) - centerX(promptBox)) <= 2 && one.y >= promptBox.y + promptBox.height,
        JSON.stringify({ image: one, prompt: promptBox }),
      )
    }

    await runOnce()
    const twoCount = await page.locator('.react-flow__node-image').count()
    check('第二轮生成多出一张图（不是覆盖上一轮那张）', twoCount === 2, `images=${twoCount}`)
    if (twoCount === 2 && promptBox) {
      const a = await page.locator('.react-flow__node-image').nth(0).boundingBox()
      const b = await page.locator('.react-flow__node-image').nth(1).boundingBox()
      const overlaps =
        Boolean(a && b) &&
        a.x < b.x + b.width - 1 &&
        b.x < a.x + a.width - 1 &&
        a.y < b.y + b.height - 1 &&
        b.y < a.y + a.height - 1
      check(
        '两张结果图并排不重叠（这就是用户报的「叠在一起」）',
        Boolean(a && b) && !overlaps,
        JSON.stringify({ a, b }),
      )
      if (a && b) {
        // 一组结果按**整体**居中：两边的外沿中心落在卡片中心上
        const left = Math.min(a.x, b.x)
        const right = Math.max(a.x + a.width, b.x + b.width)
        check(
          '两张图作为一组仍居中对齐卡片',
          Math.abs((left + right) / 2 - centerX(promptBox)) <= 2,
          JSON.stringify({ group: (left + right) / 2, card: centerX(promptBox) }),
        )
        check('两张图在同一行（y 相同）', Math.abs(a.y - b.y) <= 1, JSON.stringify({ ay: a.y, by: b.y }))
      }
    }
  }

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
