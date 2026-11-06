// 本地冒烟：用假的 Cordis 上下文挂起 host 半片，再用真实 HTTP 打一遍接口。
// 不提交真实生图任务（不花钱），只验证配置解析、上传、文件服务、错误分支与工作流落盘。
import { createServer } from 'node:http'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

// 用临时目录跑：不往真实画布目录里塞测试资产与恢复快照
const SANDBOX = mkdtempSync(join(tmpdir(), 'dsh-imagora-smoke-'))
process.env.DSH_IMAGORA_HOME = SANDBOX

const plugin = await import(new URL('../src/host/index.js', import.meta.url).href)

let handler = null
const ctx = {
  get(name) {
    if (name === 'connection') return { requestRejection: () => undefined }
    return undefined
  },
  effect(fn) {
    fn()
  },
  webServer: {
    register(options) {
      handler = options.handler
      return () => {
        handler = null
      }
    },
  },
  logger: { warn: line => console.warn('[host]', line) },
}

plugin.default.apply(ctx)
if (!handler) throw new Error('host 半片没有注册 /imagora 路由')

const server = createServer((req, res) => {
  handler(req, res).catch(error => {
    res.statusCode = 500
    res.end(JSON.stringify({ error: error.message }))
  })
})
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
const port = server.address().port
const base = `http://127.0.0.1:${port}/imagora`

const results = []
const check = (name, ok, detail = '') => {
  results.push({ name, ok, detail })
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? `  ${detail}` : ''}`)
}

// 1x1 PNG
const PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
  'base64',
)

try {
  const config = await fetch(`${base}/config`).then(res => res.json())
  check('GET /config 返回 profile', Boolean(config.profile), `profile=${config.profile} model=${config.model}`)
  check('GET /config 带尺寸表', Array.isArray(config.sizes) && config.sizes.length > 0, `${config.sizes?.length} 档`)
  check('GET /config 读到了 imagora 目录', Boolean(config.root && existsSync(config.root)), config.root)

  const health = await fetch(`${base}/health`).then(res => res.json())
  check('GET /health 有 issues 字段', Array.isArray(health.config?.issues), JSON.stringify(health.config?.issues ?? health))

  const upload = await fetch(`${base}/upload?name=smoke.png`, { method: 'POST', body: PNG }).then(res => res.json())
  check('POST /upload 登记资产', Boolean(upload.image?.id), upload.image?.id ?? JSON.stringify(upload))

  const listed = await fetch(`${base}/assets`).then(res => res.json())
  check('GET /assets 列出刚上传的图', listed.images.some(row => row.id === upload.image.id))

  const file = await fetch(`${base}/file?id=${upload.image.id}`)
  const bytes = Buffer.from(await file.arrayBuffer())
  check('GET /file 返回原字节', file.ok && bytes.equals(PNG), `${bytes.length} bytes ${file.headers.get('content-type')}`)

  const missing = await fetch(`${base}/file?id=does-not-exist`)
  check('GET /file 未知 id 返回 404', missing.status === 404)

  const badGenerate = await fetch(`${base}/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ prompt: '   ' }),
  })
  check('POST /generate 空提示词返回 400', badGenerate.status === 400)

  const save = await fetch(`${base}/workflow/save`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      name: 'smoke-test',
      nodes: [{
        id: `img-${upload.image.id}`,
        type: 'image',
        position: { x: 10, y: 20 },
        data: { registryId: upload.image.id, name: 'smoke.png', size: PNG.length, ext: 'png', url: upload.image.url, absPath: upload.image.absPath, refCount: 0 },
      }],
      edges: [],
    }),
  }).then(res => res.json())
  check('POST /workflow/save 落盘', save.ok === true, save.name)

  const load = await fetch(`${base}/workflow/load?name=smoke-test`).then(res => res.json())
  check('GET /workflow/load 读回并补 url', load.nodes?.[0]?.data?.url === upload.image.url, JSON.stringify(load.missing ?? []))

  const lists = await fetch(`${base}/workflow/list`).then(res => res.json())
  check('GET /workflow/list 含刚保存的', lists.workflows.some(row => row.name === 'smoke-test'))

  const recovery = await fetch(`${base}/recovery/save`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ nodes: load.nodes, edges: [] }),
  }).then(res => res.json())
  check('POST /recovery/save 落盘', recovery.ok === true, recovery.name)

  const latest = await fetch(`${base}/recovery/latest`).then(res => res.json())
  check('GET /recovery/latest 有快照', latest.ok === true && Array.isArray(latest.nodes) && latest.nodes.length > 0)

  const unknown = await fetch(`${base}/nope`)
  check('未知路径返回 404', unknown.status === 404)

  await fetch(`${base}/asset/delete`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ id: upload.image.id }),
  })
  const after = await fetch(`${base}/assets`).then(res => res.json())
  check('POST /asset/delete 清掉资产', !after.images.some(row => row.id === upload.image.id))

  // 生成的接口形状检查（不发真实请求，只看 tasks 池的取消分支）
  const cancel = await fetch(`${base}/task/cancel`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ id: 'not-a-task' }),
  }).then(res => res.json())
  check('POST /task/cancel 未知任务返回 ok:false', cancel.ok === false)
} finally {
  server.close()
  try {
    rmSync(SANDBOX, { recursive: true, force: true })
  } catch {
    // 临时目录删不掉不影响结论
  }
}

const failed = results.filter(row => !row.ok)
console.log(`\n${results.length - failed.length}/${results.length} 通过`)
if (failed.length) process.exit(1)

void readFileSync
void join
