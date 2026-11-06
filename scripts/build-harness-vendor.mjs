// 渲染验收台的 vendor 构建：把 React / ReactDOM 打成浏览器全局，供 client bundle 使用。
import { createRequire } from 'node:module'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DEP_DIR = process.env.DSH_IMAGORA_FRONTEND
  ? join(process.env.DSH_IMAGORA_FRONTEND, 'node_modules')
  : join(process.env.USERPROFILE || '', 'Desktop', 'imagora', 'imagora', 'frontend', 'node_modules')

const esbuildEntry = join(DEP_DIR, 'esbuild', 'lib', 'main.js')
const esbuild = (await import(pathToFileURL(esbuildEntry).href)).default

const entry = `
import * as React from 'react'
import * as jsxRuntime from 'react/jsx-runtime'
import { createRoot, hydrateRoot } from 'react-dom/client'
import * as ReactDOM from 'react-dom'

window.React = React
window.ReactDOM = ReactDOM
window.ReactDOMClient = { createRoot, hydrateRoot }
window.__jsxRuntime = jsxRuntime
`

const outDir = resolve(ROOT, 'harness', 'dist')
await mkdir(outDir, { recursive: true })
await writeFile(join(outDir, 'vendor-entry.js'), entry, 'utf8')

await esbuild.build({
  entryPoints: [join(outDir, 'vendor-entry.js')],
  outfile: join(outDir, 'vendor.js'),
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['chrome110'],
  jsx: 'automatic',
  nodePaths: [DEP_DIR],
  define: { 'process.env.NODE_ENV': '"production"' },
  logLevel: 'warning',
})
console.log('[harness] vendor.js 已生成')
void createRequire
