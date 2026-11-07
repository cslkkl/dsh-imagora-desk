// 渲染验收台的静态服务 + mock 接口：用真实浏览器把真实 bundle 渲染出来。
// 只读本地文件，不发任何上游请求。
import { createReadStream, existsSync, readFileSync } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, resolve } from 'node:path'
import { defineConfig } from './mock-data.mjs'

const ROOT = resolve(new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'))
const PORT = Number(process.env.HARNESS_PORT || 4319)

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.json': 'application/json; charset=utf-8',
}

// 占位图：优先仓库里的 harness/sample.png（1600×1200，进版本控制），
// 其次本地生成的 harness/dist/sample.png，最后才退回内嵌 PNG。
//
// 为什么必须有真尺寸的那张：内嵌兜底只有 64×64，所有与图片尺寸相关的验收
// （缩放读数、适应窗口 vs 实际大小、缩略图比例）都会失去意义——
// 曾因此把「读数恒 100%」误判成组件 bug。
const SAMPLE_CANDIDATES = [join(ROOT, 'harness', 'sample.png'), join(ROOT, 'harness', 'dist', 'sample.png')]
const FALLBACK_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAXklEQVR42u3OMQEAAAgDoC251a3gLwSgOXLVkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkqQvBw6hAAF3lVhIAAAAAElFTkSuQmCC',
  'base64',
)

const server = createServer(async (req, res) => {
  const url = new URL(req.url || '/', 'http://local')
  const path = url.pathname

  // 先把请求体读干净：否则 keep-alive 连接上会出现 RST（浏览器报 ERR_CONNECTION_RESET）
  for await (const chunk of req) void chunk

  if (path.startsWith('/imagora/')) {
    const body = defineConfig(path, url)
    if (body === 'png') {
      const samplePath = SAMPLE_CANDIDATES.find(candidate => existsSync(candidate))
      const bytes = samplePath ? readFileSync(samplePath) : FALLBACK_PNG
      res.setHeader('content-type', 'image/png')
      res.setHeader('cache-control', 'no-store')
      res.setHeader('content-length', bytes.length)
      return res.end(bytes)
    }
    res.setHeader('content-type', 'application/json; charset=utf-8')
    res.setHeader('cache-control', 'no-store')
    res.statusCode = body === null ? 404 : 200
    return res.end(JSON.stringify(body === null ? { error: 'not found' } : body))
  }

  const rel = path === '/' ? 'harness/index.html' : path.replace(/^\//, '')
  const file = join(ROOT, rel)

  if (path === '/dist/client.js') {
    return send(join(ROOT, 'dist', 'client.js'), res)
  }
  if (file.startsWith(resolve(ROOT))) return send(file, res)
  res.statusCode = 403
  res.end('forbidden')
})

async function send(file, res) {
  if (!existsSync(file)) {
    res.statusCode = 404
    res.end(`missing: ${file}`)
    return
  }
  const info = await stat(file)
  res.setHeader('content-type', MIME[extname(file).toLowerCase()] || 'application/octet-stream')
  res.setHeader('content-length', info.size)
  createReadStream(file).pipe(res)
}

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[harness] http://127.0.0.1:${PORT}/`)
})
