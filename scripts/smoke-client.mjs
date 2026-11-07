// 在没有浏览器的情况下验证 client bundle：
// 模拟 window.__ModuleLoader__ / document / window 事件接口，执行 bundle，
// 断言导出与「侧边栏 + 主区域」两处插槽注册真的发生。
import { readFileSync } from 'node:fs'
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
  effect(fn, label) {
    effects.push(label)
    const dispose = fn()
    return typeof dispose === 'function' ? dispose : () => {}
  },
}

exportsObject.apply(ctx)

check('注入了 main 插槽', injections.includes('main'), injections.join(','))
check('注入了 sidebar.panellist 插槽', injections.includes('sidebar.panellist'))
const mainReg = registrations.find(row => row.options.name === 'main')
check('main 注册 key=imagora', mainReg?.options?.key === 'imagora', JSON.stringify(mainReg?.options))
check('main 注册了组件', typeof mainReg?.component === 'function')
const sidebarReg = registrations.find(row => row.options.name === 'sidebar.panellist')
check('侧边栏注册 id=imagora', sidebarReg?.options?.id === 'imagora', JSON.stringify(sidebarReg?.options))
check('侧边栏有 label', typeof sidebarReg?.options?.label === 'function' && sidebarReg.options.label() === '自由画布')
check(
  'xyflow 样式注入到 head',
  styleNodes.some(node => String(node.textContent).includes('react-flow')),
  `${styleNodes.length} 个 style`,
)

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
}

check('注册了 effect 清理', effects.length >= 2, effects.join(' | '))

const failed = results.filter(row => !row.ok)
console.log(`\n${results.length - failed.length}/${results.length} 通过`)
if (failed.length) process.exit(1)
void created
