// 上游生图调用：与 Imagora 的 core/api.py 同口径（generations 文生图 / edits 图生图）。
// 这里只做「把一张图拿回来」，画布与排队由 tasks.js 管。
import { readFile } from 'node:fs/promises'
import { basename, extname } from 'node:path'

/** 从各家上游的响应里挑出含图片的那一项（OpenAI / 火山方舟 / 中转站三种口径都见过）。 */
export function extractImageItem(payload) {
  const findIn = seq => {
    for (const item of seq) {
      if (item && typeof item === 'object') {
        if ('b64_json' in item || 'url' in item) return item
        for (const value of Object.values(item)) {
          if (Array.isArray(value)) {
            const hit = findIn(value)
            if (hit) return hit
          } else if (typeof value === 'string' && value.startsWith('http')) {
            return { url: value }
          }
        }
      }
    }
    return null
  }
  if (Array.isArray(payload?.data)) {
    const hit = findIn(payload.data)
    if (hit) return hit
  }
  if (payload?.data && typeof payload.data === 'object') {
    const hit = findIn([payload.data])
    if (hit) return hit
  }
  for (const key of ['images', 'output', 'result']) {
    if (Array.isArray(payload?.[key])) {
      const hit = findIn(payload[key])
      if (hit) return hit
    }
  }
  return findIn([payload])
}

function fail(status, detail) {
  const error = new Error(`接口请求失败（HTTP ${status}）：${String(detail || '').slice(0, 240)}`)
  error.status = status
  return error
}

/**
 * 生成一张图并返回二进制内容。
 * @param {object} config - loadImagoraConfig() 的结果
 * @param {{prompt: string, size: string, quality: string, refs: string[]}} input
 * @returns {Promise<{buffer: Buffer, ext: string, meta: object}>}
 */
export async function generateImage(config, input) {
  if (!config.apiKey) {
    throw new Error(`当前 profile「${config.profile || '未命名'}」没有配置密钥，先在 imagora 的 .env 里填 API_KEY_${(config.profile || '').toUpperCase() || '<PROFILE>'}`)
  }
  if (!config.baseUrl) throw new Error('当前 profile 没有接口地址，检查 imagora 的 config.json')

  const base = config.baseUrl.replace(/\/+$/, '')
  const payload = {
    model: config.model,
    prompt: input.prompt,
    size: input.size,
    quality: input.quality,
    n: 1,
    output_format: 'png',
    watermark: false,
  }
  const headers = { authorization: `Bearer ${config.apiKey}` }
  const refs = Array.isArray(input.refs) ? input.refs.filter(Boolean) : []

  let response
  if (refs.length) {
    const form = new FormData()
    for (const file of refs) {
      const buffer = await readFile(file)
      const ext = extname(file).toLowerCase() || '.png'
      const type = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : ext === '.webp' ? 'image/webp' : 'image/png'
      form.append('image', new Blob([buffer], { type }), basename(file))
    }
    for (const [key, value] of Object.entries(payload)) form.append(key, String(value))
    response = await fetch(`${base}${config.apiPaths.edits}`, {
      method: 'POST',
      headers,
      body: form,
      signal: AbortSignal.timeout(300_000),
    })
  } else {
    response = await fetch(`${base}${config.apiPaths.generations}`, {
      method: 'POST',
      headers: { ...headers, 'content-type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(300_000),
    })
  }

  const text = await response.text()
  if (!response.ok) throw fail(response.status, text)
  let body
  try {
    body = JSON.parse(text)
  } catch {
    throw new Error(`接口返回的不是 JSON：${text.slice(0, 200)}`)
  }
  const item = extractImageItem(body)
  if (!item) throw new Error(`接口响应没有图片数据：${JSON.stringify(body).slice(0, 240)}`)

  if (item.b64_json) {
    return { buffer: Buffer.from(item.b64_json, 'base64'), ext: '.png', meta: { mode: refs.length ? 'img2img' : 'txt2img' } }
  }
  if (item.url) {
    const file = await fetch(item.url, { signal: AbortSignal.timeout(300_000) })
    if (!file.ok) throw new Error(`下载结果图失败（HTTP ${file.status}）`)
    const type = file.headers.get('content-type') || 'image/png'
    const ext = type.includes('jpeg') ? '.jpg' : type.includes('webp') ? '.webp' : '.png'
    return {
      buffer: Buffer.from(await file.arrayBuffer()),
      ext,
      meta: { mode: refs.length ? 'img2img' : 'txt2img', upstreamUrl: item.url },
    }
  }
  throw new Error(`接口响应没有图片数据：${JSON.stringify(item).slice(0, 200)}`)
}

/** 人话错误：把上游原文压成一句能读懂的话。 */
export function humanizeError(error) {
  const text = String(error?.message || error || '未知错误')
  if (/401|unauthor|invalid.*key|api.?key/i.test(text)) return `密钥无效或没权限：${text}`
  if (/429|rate.?limit|quota/i.test(text)) return `请求太频繁或额度用尽：${text}`
  if (/timeout|aborted|ETIMEDOUT/i.test(text)) return `上游超时，稍后重试：${text}`
  if (/model.*not.*found|invalid.*model/i.test(text)) return `模型名不被该中转站接受：${text}`
  return text
}
