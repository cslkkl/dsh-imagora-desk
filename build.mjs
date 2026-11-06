// 构建 client bundle：esbuild 打成 CJS，再套上 DSH 的模块加载器包装。
// react / react-dom 由宿主模块表提供，不重复打包；@xyflow/react 打进包内。
//
// 依赖复用 Imagora 前端的 node_modules（esbuild / @xyflow/react 都在那儿），
// 本插件不带自己的 node_modules：插件目录保持干净，装完即可用。
import { createRequire } from 'node:module'
import { copyFile, mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(ROOT, 'dist')
const watch = process.argv.includes('--watch')

/** 依赖搜索路径：插件自己的 node_modules 优先，其次 Imagora 前端的。 */
const DEPS_DIRS = [
  join(ROOT, 'node_modules'),
  process.env.DSH_IMAGORA_FRONTEND
    ? join(process.env.DSH_IMAGORA_FRONTEND, 'node_modules')
    : '',
  join(process.env.USERPROFILE || process.env.HOME || '', 'Desktop', 'imagora', 'imagora', 'frontend', 'node_modules'),
].filter(Boolean)

async function loadEsbuild() {
  for (const dir of DEPS_DIRS) {
    const entry = join(dir, 'esbuild', 'lib', 'main.js')
    try {
      await stat(entry)
      const mod = await import(pathToFileURL(entry).href)
      return mod.default ?? mod
    } catch {
      // 换下一个候选
    }
  }
  throw new Error(`找不到 esbuild：检查 ${DEPS_DIRS.join(' 或 ')}`)
}

const esbuild = await loadEsbuild()

/** 把 import 'x.css' 变成导出一段 CSS 文本的 JS 模块（样式由入口注入 <style>）。 */
const cssAsText = {
  name: 'css-as-text',
  setup(b) {
    b.onResolve({ filter: /\.css$/ }, args => {
      if (args.path.startsWith('.')) return { path: resolve(args.resolveDir, args.path), namespace: 'css-text' }
      try {
        const resolved = createRequire(import.meta.url).resolve(args.path, { paths: DEPS_DIRS })
        return { path: resolved, namespace: 'css-text' }
      } catch {
        return { errors: [{ text: `找不到样式文件：${args.path}` }] }
      }
    })
    b.onLoad({ filter: /.*/, namespace: 'css-text' }, async args => ({
      contents: `export default ${JSON.stringify(await readFile(args.path, 'utf8'))}`,
      loader: 'js',
    }))
  },
}

const wrap = {
  name: 'dsh-module-loader',
  setup(b) {
    b.onEnd(async result => {
      if (result.errors.length) return
      for (const file of result.outputFiles ?? []) {
        const wrapped = `window.__ModuleLoader__.load({id:"dsh-imagora-desk",factory:(require)=>{const module={exports:{}};const exports=module.exports;\n${file.text}\nreturn module.exports}})\n`
        await writeFile(file.path, wrapped, 'utf8')
      }
    })
  },
}

await mkdir(OUT_DIR, { recursive: true })

const options = {
  entryPoints: [resolve(ROOT, 'src/client/index.tsx')],
  outfile: join(OUT_DIR, 'client.js'),
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  target: ['chrome110'],
  jsx: 'automatic',
  jsxImportSource: 'react',
  external: ['react', 'react-dom', 'react/jsx-runtime', 'react-dom/client', 'react/jsx-dev-runtime'],
  nodePaths: DEPS_DIRS,
  define: { 'process.env.NODE_ENV': '"production"' },
  write: false,
  plugins: [cssAsText, wrap],
  logLevel: 'info',
  minify: !watch,
  sourcemap: false,
}

if (watch) {
  const ctx = await esbuild.context(options)
  await ctx.watch()
  console.log('[dsh-imagora-desk] watching src/client …')
} else {
  const result = await esbuild.build(options)
  const info = await stat(join(OUT_DIR, 'client.js'))
  console.log(`[dsh-imagora-desk] client.js ${(info.size / 1024).toFixed(0)} KB，warnings：${result.warnings.length}`)
}

// host 半端是纯 ESM，直接跑 src；patch 复制一份到 dist 方便排查
await copyFile(join(ROOT, 'cordis.patch.yml'), join(OUT_DIR, 'cordis.patch.yml')).catch(() => undefined)

