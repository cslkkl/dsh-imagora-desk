// 在没有浏览器的情况下验证 client bundle：
// 模拟 window.__ModuleLoader__ / document / window 事件接口，执行 bundle，
// 断言导出与「侧边栏 + 主区域」两处插槽注册真的发生。
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join, resolve } from 'node:path'

const ROOT = resolve(new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'))
const DEP_DIR = process.env.DSH_IMAGORA_FRONTEND
  ? join(process.env.DSH_IMAGORA_FRONTEND, 'node_modules')
  : join(process.env.USERPROFILE || '', 'Desktop', 'imagora', 'imagora', 'frontend', 'node_modules')

const nodeRequire = createRequire(join(DEP_DIR, 'noop.js'))

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
check('注册了 effect 清理', effects.length >= 2, effects.join(' | '))

const failed = results.filter(row => !row.ok)
console.log(`\n${results.length - failed.length}/${results.length} 通过`)
if (failed.length) process.exit(1)
void created
