// /imagora/* 接口：配置、上传、文件、生成任务、工作流、恢复快照。
import { readFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { applyProviderPatch } from './config.js'
import { humanizeError, listModels } from './generate.js'
import { pickDirectory } from './picker.js'
import { MIME, extOf } from './store.js'

const MAX_JSON = 8_000_000
const MAX_UPLOAD = 120_000_000

function json(res, status, body) {
  res.statusCode = status
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
}

/**
 * 落盘前归一化：图片节点只保留 `registryId` + 元数据，**剥掉派生的 url / absPath / missing**。
 *
 * 这是原版 workflow_save 的硬约束（core/graphstore.py 的 `_strip_derived_node_paths`）：
 * 派生路径一旦写进文件，项目目录改名 / 换机器之后旧存档就指向不存在的绝对路径；
 * 只存 registryId，加载时按注册表的 `relPath` 现算，才叫「搬走也不坏」。
 * `missing` 同理 —— 它是加载那一刻的判定结果，存进文件只会让下次打开带着过期结论。
 * 共用模式下我们写的是原版要读的文件，所以必须遵守同样的规则。
 */
function stripDerived(nodes) {
  return (Array.isArray(nodes) ? nodes : []).map(node => {
    if (node?.type !== 'image' || !node.data) return node
    const { url, absPath, missing, ...rest } = node.data
    void url
    void absPath
    void missing
    return { ...node, data: rest }
  })
}

async function readBuffer(req, limit) {
  const chunks = []
  let size = 0
  for await (const chunk of req) {
    size += chunk.length
    if (size > limit) {
      const error = new Error('内容太大')
      error.status = 413
      throw error
    }
    chunks.push(chunk)
  }
  return Buffer.concat(chunks)
}

async function readJson(req) {
  const raw = await readBuffer(req, MAX_JSON)
  if (!raw.length) return {}
  try {
    return JSON.parse(raw.toString('utf8'))
  } catch {
    const error = new Error('请求不是有效的 JSON')
    error.status = 400
    throw error
  }
}

function publicConfig(config) {
  return {
    source: config.source,
    root: config.root,
    profile: config.profile,
    profileLabel: config.profileLabel,
    profiles: config.profiles,
    model: config.model,
    modelLabel: config.modelLabel,
    models: config.models,
    sizes: config.sizes,
    qualities: config.qualities,
    qualityEffective: config.qualityEffective,
    defaultOutputDir: config.defaultOutputDir,
    budget: config.budget,
    issues: config.issues,
    // 两个指针：imagora 目录（读 config.json / .env / 工作流 / 图片注册表）与输出目录
    imagoraRoot: config.imagoraRoot || '',
    outputDirOverride: config.outputDirOverride || '',
    provider: config.providerView,
  }
}

/**
 * @param {object} deps
 * @param {import('./store.js').Store} deps.store
 * @param {import('./tasks.js').TaskPool} deps.pool
 * @param {() => object} deps.getConfig
 * @param {() => object} deps.getSettings
 * @param {(patch: object) => void} deps.applySettings
 */
export function createRouter({ store, pool, getConfig, getSettings, applySettings }) {
  /** registryId → absPath：给 hydrate 补节点上没存的路径用。 */
  const assetIndex = () => store.assetIndex()
  return async function route(req, res) {
    const url = new URL(req.url || '/', 'http://local')
    const path = url.pathname.replace(/^\/imagora/, '') || '/'
    const method = (req.method || 'GET').toUpperCase()

    if (path === '/health') {
      const config = getConfig()
      return json(res, 200, { ok: config.issues.length === 0, config: publicConfig(config) })
    }

    if (path === '/config' && method === 'GET') {
      return json(res, 200, publicConfig(getConfig()))
    }

    // 弹系统文件夹选择框，返回绝对路径。宿主是桌面会话里的普通进程，只能由它来弹；
    // 浏览器侧的 <input webkitdirectory> 拿不到绝对路径，对这个用途没用。
    if (path === '/pick-folder' && method === 'POST') {
      const body = await readJson(req).catch(() => ({}))
      const picked = await pickDirectory({
        title: typeof body.title === 'string' && body.title.trim() ? body.title.trim() : '选择文件夹',
        startAt: typeof body.startAt === 'string' ? body.startAt.trim() : '',
      })
      return json(res, 200, picked)
    }

    if (path === '/settings' && method === 'POST') {
      const body = await readJson(req)
      if (typeof body.model === 'string' && body.model.trim()) applySettings({ model: body.model.trim() })
      // 传空字符串 = 清掉插件里的来源覆盖，回到跟随 imagora 的 .env
      if (typeof body.profile === 'string') applySettings({ profile: body.profile.trim() })
      if (typeof body.imagoraRoot === 'string') applySettings({ imagoraRoot: body.imagoraRoot.trim() })
      // 默认输出路径：空字符串 = 回到插件数据目录下的 output
      if (typeof body.outputDir === 'string') applySettings({ outputDir: body.outputDir.trim() })
      // 预算上限（元）：0 或空 = 不设上限
      if (body.budget !== undefined) {
        const budget = Number(body.budget)
        applySettings({ budget: Number.isFinite(budget) && budget > 0 ? budget : 0 })
      }
      return json(res, 200, publicConfig(getConfig()))
    }

    // 插件自带的接口配置：填完就能用，不要求本机装过 Imagora
    if (path === '/provider' && method === 'POST') {
      const body = await readJson(req)
      const settings = getSettings()
      const next = applyProviderPatch(settings, body)
      applySettings({ provider: next })
      return json(res, 200, publicConfig(getConfig()))
    }

    // 试一下地址 + 密钥能不能通：只读一次模型清单，不生成图、不花钱
    if (path === '/provider/probe' && method === 'POST') {
      const body = await readJson(req)
      const settings = getSettings()
      const merged = applyProviderPatch(settings, body)
      const baseUrl = merged.baseUrl || getConfig().baseUrl
      const apiKey = String(body.apiKey || '').trim() || merged.apiKey || getConfig().apiKey
      if (!baseUrl) return json(res, 400, { error: '先填接口地址' })
      try {
        const models = await listModels(baseUrl, apiKey)
        return json(res, 200, { ok: true, models })
      } catch (error) {
        return json(res, 400, { ok: false, error: humanizeError(error) })
      }
    }

    if (path === '/profiles' && method === 'GET') {
      const config = getConfig()
      return json(res, 200, { profile: config.profile, profiles: config.profiles })
    }

    if (path === '/assets' && method === 'GET') {
      const registry = await store.readRegistry()
      return json(res, 200, {
        images: registry.assets.map(entry => ({
          id: entry.id,
          name: entry.name,
          size: entry.size,
          ext: entry.ext,
          // 落盘位置就是 assets/<id>.<ext>；registry 里的旧条目可能没记 relPath，
          // 按这个规则补出来，客户端拿到的条目结构才一致
          relPath: entry.relPath || `${entry.id}.${entry.ext}`,
          url: `/imagora/file?id=${encodeURIComponent(entry.id)}`,
          absPath: entry.absPath,
          createdAt: entry.createdAt,
        })),
      })
    }

    if (path === '/upload' && method === 'POST') {
      const name = url.searchParams.get('name') || `pasted-${Date.now()}.png`
      const buffer = await readBuffer(req, MAX_UPLOAD)
      if (!buffer.length) return json(res, 400, { error: '空文件' })
      const entry = await store.saveAsset(buffer, name, { origin: 'upload' })
      return json(res, 200, {
        image: {
          id: entry.id,
          name: entry.name,
          size: entry.size,
          ext: entry.ext,
          url: `/imagora/file?id=${encodeURIComponent(entry.id)}`,
          absPath: entry.absPath,
        },
      })
    }

    if (path === '/asset/delete' && method === 'POST') {
      const body = await readJson(req)
      const removed = await store.removeAsset(String(body.id || ''))
      return json(res, 200, { ok: removed })
    }

    if (path === '/file') {
      const id = url.searchParams.get('id') || ''
      const entry = await store.assetById(id)
      if (!entry) return json(res, 404, { error: '图片不存在' })
      if (!store.allowPath(entry.absPath)) return json(res, 403, { error: '路径不在允许范围内' })
      const type = MIME[extname(entry.absPath).toLowerCase()] || 'application/octet-stream'
      res.setHeader('content-type', type)
      res.setHeader('cache-control', 'private, max-age=3600')
      res.setHeader('x-content-type-options', 'nosniff')
      if (method === 'HEAD') return res.end()
      store
        .stream(entry.absPath)
        .on('error', () => res.end())
        .pipe(res)
      return undefined
    }

    if (path === '/generate' && method === 'POST') {
      const body = await readJson(req)
      const prompt = String(body.prompt || '').trim()
      if (!prompt) return json(res, 400, { error: '提示词为空' })
      const config = getConfig()
      const size = String(body.size || config.sizes[0]?.value || '1024x1024')
      const quality = String(body.quality || config.qualities[0] || 'high')
      const refIds = Array.isArray(body.refIds) ? body.refIds.map(String) : []
      const refs = []
      for (const id of refIds) {
        const entry = await store.assetById(id)
        if (entry) refs.push(entry.absPath)
      }
      const outputDir = String(body.outputDir || '')
      // 蒙版：data URL 或 base64 都能收，统一转成 Buffer 交给任务池
      let mask = null
      if (typeof body.mask === 'string' && body.mask.trim()) {
        const raw = body.mask.trim()
        const base64 = raw.includes(',') ? raw.slice(raw.indexOf(',') + 1) : raw
        try {
          mask = Buffer.from(base64, 'base64')
        } catch {
          return json(res, 400, { error: '蒙版数据解析失败' })
        }
        if (!mask.length) return json(res, 400, { error: '蒙版数据为空' })
      }
      // 预算闸门：花到上限就别再发新任务。这里拦的是「提交」，不是「结果」——
      // 排队后再拦没有意义，钱已经花了。
      const budget = Number(getSettings()?.budget ?? 0)
      const spent = Number(body.spent ?? 0)
      if (Number.isFinite(budget) && budget > 0 && spent >= budget) {
        return json(res, 409, {
          error: `已达预算上限 ¥${budget.toFixed(2)}（本画布已花 ¥${spent.toFixed(2)}），调高预算或不设上限后再运行`,
          budget,
          spent,
        })
      }
      const submitted = pool.submit({ prompt, size, quality, refs, outputDir, mask })
      return json(res, 200, submitted)
    }

    if (path === '/task' && method === 'GET') {
      const id = url.searchParams.get('id') || ''
      const snapshot = pool.snapshot(id)
      if (!snapshot) return json(res, 404, { error: '任务不存在' })
      return json(res, 200, snapshot)
    }

    if (path === '/task/cancel' && method === 'POST') {
      const body = await readJson(req)
      return json(res, 200, pool.cancel(String(body.id || '')))
    }

    if (path === '/workflow/save' && method === 'POST') {
      const body = await readJson(req)
      const nodes = store.hydrate(body.nodes, await assetIndex())
      const saved = await store.saveWorkflow(body.name, { nodes: stripDerived(nodes), edges: body.edges || [] })
      return json(res, 200, saved)
    }

    if (path === '/workflow/list' && method === 'GET') {
      return json(res, 200, { workflows: await store.listWorkflows() })
    }

    if (path === '/workflow/load' && method === 'GET') {
      const name = url.searchParams.get('name') || ''
      const data = await store.loadWorkflow(name)
      const missing = []
      const nodes = (Array.isArray(data.nodes) ? data.nodes : []).map(node => {
        if (node?.type !== 'image') return node
        const abs = node.data?.absPath || node.data?.file || ''
        if (!abs) {
          missing.push(node.data?.registryId || node.id)
          return { ...node, data: { ...node.data, missing: true } }
        }
        return node
      })
      return json(res, 200, {
        name: data.name || name,
        nodes: store.hydrate(nodes, await assetIndex()),
        edges: Array.isArray(data.edges) ? data.edges : [],
        missing,
      })
    }

    if (path === '/recovery/save' && method === 'POST') {
      const body = await readJson(req)
      const saved = await store.saveRecovery({
        nodes: store.hydrate(body.nodes, await assetIndex()),
        edges: body.edges || [],
      })
      return json(res, 200, saved)
    }

    if (path === '/recovery/latest' && method === 'GET') {
      const data = await store.latestRecovery()
      if (data.empty) return json(res, 200, { ok: true, empty: true })
      return json(res, 200, {
        ok: true,
        name: data.name,
        savedAt: data.savedAt,
        nodes: store.hydrate(data.nodes, await assetIndex()),
        edges: Array.isArray(data.edges) ? data.edges : [],
        missing: [],
      })
    }

    if (path === '/reveal' && method === 'POST') {
      const body = await readJson(req)
      const target = String(body.path || '')
      if (!target) return json(res, 400, { error: '路径为空' })
      const { execFile } = await import('node:child_process')
      execFile('explorer.exe', [target], () => undefined)
      return json(res, 200, { ok: true })
    }

    return json(res, 404, { error: `未知接口：${method} ${path}` })
  }
}

export { extOf, join, readFile }
