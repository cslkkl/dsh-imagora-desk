// 在没有浏览器的情况下验证 client bundle：
// 模拟 window.__ModuleLoader__ / document / window 事件接口，执行 bundle，
// 断言导出与「侧边栏 + 主区域」两处插槽注册真的发生。
import { readFileSync, readdirSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
// 依赖来自本项目（已锁定在 pnpm-lock.yaml），不再依赖外部目录，CI 上可直接跑
const nodeRequire = createRequire(join(ROOT, 'node_modules', 'noop.js'))

// --- 极简浏览器环境 ---
const styleNodes = []
const created = []
globalThis.window = globalThis
globalThis.document = {
  createElement(tag) {
    const el = {
      tagName: String(tag).toUpperCase(),
      style: {},
      setAttribute(key, value) {
        this[key] = value
      },
      remove() {
        const at = styleNodes.indexOf(this)
        if (at >= 0) styleNodes.splice(at, 1)
      },
      appendChild() {},
      textContent: '',
      children: [],
    }
    created.push(el)
    return el
  },
  head: {
    appendChild(node) {
      styleNodes.push(node)
    },
  },
  body: { appendChild() {} },
  addEventListener() {},
  removeEventListener() {},
  querySelector() {
    return null
  },
}
globalThis.addEventListener = () => {}
globalThis.removeEventListener = () => {}
globalThis.matchMedia = () => ({
  matches: false,
  addEventListener() {},
  removeEventListener() {},
  addListener() {},
  removeListener() {},
})
globalThis.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.requestAnimationFrame = fn => setTimeout(fn, 0)
globalThis.cancelAnimationFrame = id => clearTimeout(id)
globalThis.getComputedStyle = () => ({ getPropertyValue: () => '' })

// --- 模块加载器 ---
let factory = null
globalThis.__ModuleLoader__ = {
  load(entry) {
    factory = entry.factory
  },
}

const bundle = readFileSync(join(ROOT, 'dist', 'client.js'), 'utf8')
// 极少量的 DOM 访问会在模块初始化阶段触发，包一层保证失败能定位到具体行
new Function('window', 'document', bundle)(globalThis, globalThis.document)

/** 官方组件库的替身：只需要「是函数」就能让 require 与模块初始化通过。 */
const primitivesStub = new Proxy(
  {},
  {
    get: (_target, key) => (typeof key === 'string' ? () => null : undefined),
    has: () => true,
  },
)

const results = []
const check = (name, ok, detail = '') => {
  results.push({ name, ok })
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? `  ${detail}` : ''}`)
}

// 包名一旦改了，模块加载器 id 与 patch 必须跟着改，否则页面加载不到这个 bundle
const pkgName = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).name
const bundleId = /__ModuleLoader__\.load\(\{\s*id:\s*"([^"]+)"/.exec(bundle)?.[1]
check('bundle id 与 package.json name 一致', bundleId === pkgName, `${bundleId} vs ${pkgName}`)
const patchText = readFileSync(join(ROOT, 'cordis.patch.yml'), 'utf8')
check('cordis.patch.yml 指向同一个包名', patchText.includes(`name: '${pkgName}'`), pkgName)

check('bundle 调用了 __ModuleLoader__.load', typeof factory === 'function')

const exportsObject = factory(id => {
  if (id === 'react') return nodeRequire('react')
  if (id === 'react-dom') return nodeRequire('react-dom')
  if (id === 'react/jsx-runtime') return nodeRequire('react/jsx-runtime')
  if (id === 'react-dom/client') return nodeRequire('react-dom/client')
  // 官方组件库由宿主提供；冒烟里给一组最小替身，只为让模块初始化跑通
  if (id === '@deepseek-ai/dsh-client-ui-primitives') return primitivesStub
  throw new Error(`bundle 请求了未声明的外部模块：${id}`)
})

check('导出 apply 函数', typeof exportsObject.apply === 'function')
check(
  '导出 inject 含 slots',
  Array.isArray(exportsObject.inject) && exportsObject.inject.includes('slots'),
  JSON.stringify(exportsObject.inject),
)

// --- 假 ctx：记录插槽注册 ---
const injections = []
const registrations = []
const effects = []
// locale 桩：与真宿主同语义 —— `register` 存词典，`bind` 返回按当前语言查表的函数。
// 语言固定 zh：冒烟断言的是「中文这一版对不对」，英文版面的验收在 ui-smoke 里。
const dictionaries = {}
const ctx = {
  slots: {
    inject(name, fn) {
      injections.push(name)
      fn()
      return () => {}
    },
    register(options, component) {
      registrations.push({ options, component })
      return { dispose() {} }
    },
  },
  locale: {
    register(ns, dicts) {
      dictionaries[ns] = dicts
      return () => {}
    },
    bind(ns) {
      return (key, params) => {
        const table = (dictionaries[ns] ?? {}).zh ?? {}
        const template = table[key] ?? key
        if (!params) return template
        return template.replace(/\{(\w+)\}/g, (whole, name) =>
          Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : whole,
        )
      }
    },
  },
  effect(fn, label) {
    effects.push(label)
    const dispose = fn()
    return typeof dispose === 'function' ? dispose : () => {}
  },
}

exportsObject.apply(ctx)

check(
  'inject 含 locale（文案层依赖宿主语言服务）',
  exportsObject.inject.includes('locale'),
  JSON.stringify(exportsObject.inject),
)
check('注册了文案词典', Object.keys(dictionaries).length > 0, JSON.stringify(Object.keys(dictionaries)))
const dict = dictionaries.imagora ?? {}
check('词典有 zh 与 en 两份', Boolean(dict.zh && dict.en), JSON.stringify(Object.keys(dict)))
check(
  '中英词典键集一致',
  JSON.stringify(Object.keys(dict.zh ?? {}).sort()) === JSON.stringify(Object.keys(dict.en ?? {}).sort()),
)
check('注入了 main 插槽', injections.includes('main'), injections.join(','))
check('注入了 sidebar.panellist 插槽', injections.includes('sidebar.panellist'))
const mainReg = registrations.find(row => row.options.name === 'main')
check('main 注册 key=imagora', mainReg?.options?.key === 'imagora', JSON.stringify(mainReg?.options))
check('main 注册了组件', typeof mainReg?.component === 'function')
check('main 声明了 locale 座位', mainReg?.options?.locale === 'imagora', String(mainReg?.options?.locale))
const sidebarReg = registrations.find(row => row.options.name === 'sidebar.panellist')
check('侧边栏注册 id=imagora', sidebarReg?.options?.id === 'imagora', JSON.stringify(sidebarReg?.options))
check(
  '侧边栏有 label（thunk，切语言时由宿主重取）',
  typeof sidebarReg?.options?.label === 'function' && sidebarReg.options.label() === '自由画布',
  String(sidebarReg?.options?.label?.()),
)
check(
  'xyflow 样式注入到 head',
  styleNodes.some(node => String(node.textContent).includes('react-flow')),
  `${styleNodes.length} 个 style`,
)

/* ---------------- 文案层：中文不许漏回组件里 ----------------
 *
 * 这条是「便于维护」的实际抓手。文案集中到 `locales.ts` 之后，最大的退化方式是
 * **以后图省事又在代码里写一句中文** —— 编译器不会报错（它只是多了一个字面量），
 * 于是那一句永远停在中文，切语言时留在原地，而且只有把界面切到英文才看得见。
 *
 * 三类位置都算「用户能看到」：
 *   ① JSX 文本节点与 title / aria-label / placeholder / alt / emptyLabel 字面量；
 *   ② 写进 `flash(...)` / `setError(...)` / `message:` 的提示（提示条、卡片上的错误）；
 *   ③ 写进 `log(...)` 的日志行 —— 它会显示在画布右下角，也是用户读的。
 *
 * **只放行** console / throw 里的中文：那是给维护者看的，不随语言变。
 * 也放行注释（整行以 // 或 * 开头）。排除 `locales.ts`（词典本身）与 `lib/`
 * （A 档移植区，不许为 i18n 改写，它的界面文字在消费处换）。
 *
 * 这条守卫是真抓到过东西的：设置弹窗的「API Key」标签、切来源的 `flash` 提示，
 * 都是它揪出来的 —— 两处都长得像「不像要翻」的地方。
 */
{
  const ATTR = /(title|aria-label|placeholder|alt|emptyLabel)\s*=\s*"[^"]*[\u4e00-\u9fff]/
  const TEXT = />[^<>{}]*[\u4e00-\u9fff][^<>{}]*</
  /** 用户会读到的提示：闪条、错误、卡片上的失败原因 */
  const SINK = /\b(flash|setError|setProbeResult|setBudgetTip)\(\s*[`'"][^`'"]*[\u4e00-\u9fff]/
  const MESSAGE = /\bmessage:\s*[`'"][^`'"]*[\u4e00-\u9fff]/
  /** 画布右下角的日志行 */
  const LOG = /\blog\(\s*[`'"][^`'"]*[\u4e00-\u9fff]/
  const offenders = []
  const walk = dir => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) {
        if (entry.name === 'lib') continue
        walk(full)
        continue
      }
      if (!/\.tsx?$/.test(entry.name) || entry.name === 'locales.ts') continue
      const lines = readFileSync(full, 'utf8').split('\n')
      lines.forEach((line, index) => {
        const trimmed = line.trim()
        // 注释行整行跳过：单行、块注释续行、JSX 注释都一样
        if (/^(\/\/|\*|\/\*|\{\/\*)/.test(trimmed)) return
        // 用户可见位置命中任一条就算漏译
        if (ATTR.test(line) || TEXT.test(line) || SINK.test(line) || MESSAGE.test(line) || LOG.test(line)) {
          offenders.push(`${full.slice(ROOT.length + 1)}:${index + 1}`)
        }
      })
    }
  }
  walk(join(ROOT, 'src', 'client'))
  check('组件与 hook 里没有漏回的中文字面量（文案只许在 locales.ts）', offenders.length === 0, offenders.join(', '))

  // 反向：词典里的每个键都真的被用到过。孤儿键是「改了文案却没删旧键」的残渣，
  // 会让人误以为某句还在生效。允许 `en` 只被类型约束，所以只在源码里找 key。
  const sources = []
  const walkKeys = dir => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) {
        walkKeys(full)
        continue
      }
      if (!/\.tsx?$/.test(entry.name) || entry.name === 'locales.ts') continue
      sources.push(readFileSync(full, 'utf8'))
    }
  }
  walkKeys(join(ROOT, 'src', 'client'))
  const used = sources.join('\n')
  const orphans = Object.keys(dict.zh ?? {}).filter(key => !used.includes(`'${key}'`))
  check('词典没有孤儿键（每个键都被源码引用）', orphans.length === 0, orphans.join(', '))
}

// 设计层 CSS 的大括号必须平衡。
// 少一个 `}` 的后果是「它之后的所有规则静默失效」——CSS 不会报错，页面只是变丑，
// 查起来极费劲（真的踩过：丢了一个花括号，提示条和落点胶囊一起变裸文本）。
// 直接从源码的模板字面量里取，边界最准；bundle 里它是转义后的 JS 字符串，不好切。
const stylesSource = readFileSync(join(ROOT, 'src', 'client', 'styles.ts'), 'utf8')
const cssStart = stylesSource.indexOf('export const CANVAS_CSS = `')
const cssBody = cssStart < 0 ? '' : stylesSource.slice(cssStart).replace('export const CANVAS_CSS = `', '')
const cssText = cssBody.slice(0, cssBody.lastIndexOf('`'))
check('styles.ts 里有 CANVAS_CSS 模板', cssStart >= 0 && cssText.length > 1000, `${cssText.length} 字符`)
if (cssStart >= 0) {
  let depth = 0
  let broke = false
  for (const ch of cssText) {
    if (ch === '{') depth += 1
    else if (ch === '}') {
      depth -= 1
      if (depth < 0) broke = true
    }
  }
  check('设计层 CSS 括号平衡', depth === 0 && !broke, `净深度 ${depth}`)
  // 末尾几条规则（浮层/胶囊/动效）最容易被前面的花括号事故连坐，抽查一条
  check('设计层尾部规则还在（落点胶囊）', cssText.includes('.im-drop-chip-host'))

  /* ---------------- 连线：三条一起守 ----------------
   *
   * 这三条对应一次真事故：原版存档把连线外观内联成 `stroke: var(--edge-stroke-idle)`，
   * 而插件把变量名收口成了 `--im-*`。`var()` 引用不存在的变量又没兜底 → 整条声明作废
   * → stroke 回到 initial 的 none → **连线整条消失**，而且没有任何报错。
   * 用户当时说的是「新的工作流加载后看不见线，旧的却能看见」——
   * 差别就在于 10 月之后保存的那几份存档里带了这个内联值。 */

  // 断言前先把注释剥掉：本文件里的规则**故意**在注释里引用了 `stroke-dasharray` 与
  // `.react-flow__edge.animated` 来解释历史，直接扫原文会把解释文字当成真规则
  // （踩过一次：断言红、代码是对的，白查一轮）。与 surfaceAudit 的做法一致。
  const cssRules = cssText.replace(/\/\*[\s\S]*?\*\//g, '')

  // 1) 旧变量名必须有别名兜底：任何一条漏掉，引用它的元素就会无声消失
  for (const name of ['idle', 'hovered', 'selected']) {
    check(
      `旧连线 token 有别名兜底 --edge-stroke-${name}`,
      new RegExp(`--edge-stroke-${name}:\\s*var\\(--im-edge-`).test(cssRules),
    )
  }

  // 2) 流动虚线的画法交给 @xyflow/react，本层不许自己写 dasharray。
  //    写过 6 4（选择器更具体，压过库里的 5），线段比原版长 20%、节奏也对不上。
  check(
    '设计层不覆盖 animated 连线的 stroke-dasharray（交给库的默认画法）',
    !/\.react-flow__edge\.animated[^{]*\{[^}]*stroke-dasharray/.test(cssRules),
  )

  // 3) LOD 抽象模式的样式必须在（节点降级只改渲染，样式缺了就等于没做）
  check('LOD 抽象卡样式在（.im-node-lod）', cssRules.includes('.im-node-lod'))
  check(
    'LOD 状态四色齐备',
    ['is-queued', 'is-running', 'is-done', 'is-failed'].every(s => cssRules.includes(`.im-lod-status.${s}`)),
  )

  /* ---------------- 节点卡：不许被提升成合成层 ----------------
   *
   * 对应维护者报的「缩小再放大后文字一直是糊的，点一下才清晰 / 加载很慢」。
   * 真宿主里量到的现场（22 张卡）：
   *     22/22  willChange: transform
   *     22/22  animationName: im-enter-up        ← 入场动画永久挂着
   * 两个都会把卡提升成独立合成层，而画布缩放改的是 .react-flow__viewport 的 scale，
   * 合成层不按新倍率重栅格 → 放大后是拉大的旧位图。原版 Imagora 全文件 0 处
   * will-change，入场动画也只在 .node-enter 上生效，所以那边不出这个现象。
   *
   * 断言锁两件事，谁改回去就红。 */

  // 1) .im-panel-card 上不许出现 will-change
  const cardRules = [...cssRules.matchAll(/([^{}]+)\{([^{}]*)\}/g)].filter(m => /\.im-panel-card/.test(m[1]))
  check(
    '节点卡没有 will-change（会锁死栅格倍率 → 缩放后文字发虚）',
    !cardRules.some(m => /will-change\s*:/u.test(m[2])),
    `${cardRules.length} 条 .im-panel-card 规则`,
  )

  // 2) 入场动画必须按 node-enter 门控，不能无条件下在卡上
  check(
    '入场动画按 .node-enter 门控（不是每张卡永久挂着）',
    /\.react-flow__node\.node-enter \.im-panel-card\s*\{[^}]*animation:/u.test(cssRules),
  )
  // 逐条规则看：选了 .im-panel-card 且带 animation 的，选择器里必须出现 node-enter。
  // 用不带 u 标志的正则：u 模式下 `{`/`}` 的转义写法规则更严，容易写出非法表达式。
  const unconditional = [...cssRules.matchAll(/([^{}]+)\{([^{}]*)\}/g)].filter(
    m => /\.im-panel-card/.test(m[1]) && /(^|;)\s*animation\s*:/.test(m[2]) && !/node-enter/.test(m[1]),
  )
  check(
    '没有任何选择器给 .im-panel-card 无条件挂 animation',
    unconditional.length === 0,
    unconditional.map(m => m[1].trim().slice(0, 60)).join(' | '),
  )
}

check('注册了 effect 清理', effects.length >= 2, effects.join(' | '))

const failed = results.filter(row => !row.ok)
console.log(`\n${results.length - failed.length}/${results.length} 通过`)
if (failed.length) process.exit(1)
void created
