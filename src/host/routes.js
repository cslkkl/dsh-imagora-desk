// /imagora/* 接口：配置、上传、文件、生成任务、工作流、恢复快照、生成历史。
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { extname, isAbsolute, join, resolve } from 'node:path'
import { checkBudget, loadBudget, saveBudget } from './budget.js'
import { applyProviderPatch, costOfSize } from './config.js'
import { humanizeError, listModels } from './generate.js'
import { collectAll, readLedger, readRaw, summarize } from './history.js'
import { pickDirectory } from './picker.js'
import { MIME, extOf } from './store.js'

const MAX_JSON = 8_000_000
const MAX_UPLOAD = 120_000_000
const MAX_HISTORY_LIMIT = 500

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

/**
 * 账本（logs/generation.jsonl）所在目录。
 *
 * **必须两个一起看**：`imagoraRoot` 是用户显式选的共享目录，`root` 是自动探测到的
 * Imagora 安装位置。只认前者的话，没点过「选择目录」的用户读不到账本 ——
 * 生成历史空着、日预算用的 `todayCost` 恒为 0（**预算静默失效**，比报错更糟）。
 * 同一个 `loadImagoraConfig` 里 `defaultOutputDir` 早就用 root 兜底了，
 * 账本却只认 imagoraRoot，是内部的取法不一致。
 *
 * 只用于**读**（历史、统计、预算判定）。写（工作流、资产、.budget.json）仍只认
 * 显式指针，不该往用户没确认过的目录里落东西。
 */
function ledgerRoot(config) {
  return String(config?.imagoraRoot || '').trim() || String(config?.root || '').trim()
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

  /**
   * 把账本一行里的路径解析成可用的绝对路径（照原版 resolve_history_asset_path）。
   *
   * 优先级：`outputAssetIds` → 注册表（`output/.assets` 里的永久副本）→ 回退 `output` 字段。
   * 为什么注册表优先：原版的 output 路径指向「用户当时的导出目录」，那块最容易被
   * 挪走/删掉；而 .assets 里那份是它的副本、不会跟着动。反过来判会把好图报成缺失。
   *
   * 回退路有个已知近似：原版用 `WORK_ROOT = Path.cwd()` 解析相对路径，我们不知道
   * 原版进程当时的 cwd，只能用 imagora 目录近似。影响面被上一条压得很小
   * （有 outputAssetIds 的行完全不看 output 字段）。
   */
  const resolveLedgerPath = (record, entries, imagoraRoot) => {
    const rawIds = record.outputAssetIds
    if (Array.isArray(rawIds)) {
      for (const id of rawIds) {
        const abs = entries.get(String(id))
        if (abs && existsSync(abs)) return { absPath: abs, assetId: String(id) }
      }
    }
    const raw = String(record.output || '').trim()
    if (!raw) return { absPath: '', assetId: '' }
    const abs = isAbsolute(raw) ? resolve(raw) : resolve(join(String(imagoraRoot || ''), raw))
    return { absPath: existsSync(abs) ? abs : '', assetId: '' }
  }

  /** 一条账本记录 → 前端要的形状（含图片可用性、参考图、缺参考图标记）。 */
  const presentRecord = (record, entries, imagoraRoot) => {
    const output = resolveLedgerPath(record, entries, imagoraRoot)
    const exists = Boolean(output.absPath)
    // 图片走 id 时用 id 路由；只有路径走 path 路由（都由 store 的放行规则兜底）
    const url = !exists
      ? ''
      : output.assetId
        ? `/imagora/file?id=${encodeURIComponent(output.assetId)}`
        : store.allowPath(output.absPath)
          ? `/imagora/file?path=${encodeURIComponent(output.absPath)}`
          : ''

    const inputRefs = []
    const rawIds = record.inputAssetIds
    if (Array.isArray(rawIds)) {
      for (const id of rawIds) {
        const abs = entries.get(String(id))
        if (!abs || !existsSync(abs)) continue
        inputRefs.push({
          id: String(id),
          path: abs,
          url: `/imagora/file?id=${encodeURIComponent(String(id))}`,
        })
      }
    }
    // 「声明了参考图却一张都找不回」：这条只能提示，没法重跑
    const inputRefMissing =
      record.mode === 'img2img' && (Number.parseInt(String(record.refs ?? 0), 10) || 0) > 0 && inputRefs.length === 0

    // 只把列表要用的字段发出去：prompt 可能上千字，但它是历史的主要内容，
    // 必须给；账本里其余字段（submissionId / win 等）对界面无用，不传。
    return {
      time: String(record.time ?? ''),
      mode: String(record.mode ?? ''),
      refs: Number.parseInt(String(record.refs ?? 0), 10) || 0,
      prompt: String(record.prompt ?? ''),
      size: String(record.size ?? ''),
      quality: String(record.quality ?? ''),
      status: String(record.status ?? ''),
      cost: Number(record.cost) || 0,
      seconds: Number(record.seconds) || 0,
      output: String(record.output ?? ''),
      exists,
      path: output.absPath,
      url,
      // 有资产副本时给 id：前端据此把「导入画布」接回注册表条目
      // （画布节点只存 registryId，没有 id 就没法建档 —— 只有路径的旧行只能看不能导）
      assetId: exists ? output.assetId : '',
      inputRefs,
      inputRefMissing,
    }
  }

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

    if (path === '/history' && method === 'GET') {
      // 生成历史：读**账本**（logs/generation.jsonl），不是资产注册表。
      // 两者不是一回事：账本一条 = 一次生成尝试（含失败、带提示词/成本/耗时），
      // 注册表一条 = 一个存在的图片文件（无提示词）。原版历史列表读的是账本。
      const config = getConfig()
      const imagoraRoot = ledgerRoot(config)
      const limit = Math.min(MAX_HISTORY_LIMIT, Math.max(1, Number(url.searchParams.get('limit')) || 60))
      const offset = Math.max(0, Number(url.searchParams.get('offset')) || 0)
      const query = url.searchParams.get('query') || ''
      const status = url.searchParams.get('status') || ''

      const { file, records } = await readLedger(imagoraRoot)
      // 没有账本（没设 imagora 目录 / 原版没生成过图）：说清楚，让前端回落资产网格。
      // 静默返回空列表会让用户以为「历史被清空了」。
      if (!records.length) {
        return json(res, 200, {
          source: 'none',
          ledgerPath: file,
          items: [],
          total: 0,
          hasMore: false,
        })
      }
      // 聚合后的完整列表：offset/limit 都作用在**聚合后**的数组上（与原版分页语义一致，
      // 前端按已加载条数推进 offset 即可，不受聚合压缩影响）
      const all = collectAll(records, { query, status })
      const page = all.slice(offset, offset + limit)
      // 注册表一次读入复用：逐条 resolve 每条都读盘会是卡顿主要来源
      const entries = await assetIndex()
      return json(res, 200, {
        source: 'ledger',
        ledgerPath: file,
        items: page.map(record => presentRecord(record, entries, imagoraRoot)),
        total: all.length,
        hasMore: offset + page.length < all.length,
      })
    }

    if (path === '/history/stats' && method === 'GET') {
      // 成本看板：账本**原始行**聚合（不聚合、不截断）—— 每个成功行都真花过钱
      const config = getConfig()
      const imagoraRoot = ledgerRoot(config)
      const days = Number(url.searchParams.get('days')) || 14
      const { records } = await readLedger(imagoraRoot)
      const stats = summarize(readRaw(records), days)
      const budget = Number(getSettings()?.budget ?? 0)
      // 本机预算设置（.budget.json）与「本画布上限」（settings.budget）是两件事：
      // 前者管当天/单次（原版口径，软确认），后者管这个画布累计（硬拦）。
      // 两个都给出去，看板上就能同时显示「今天花了多少 / 今天还有多少额度」。
      const local = loadBudget(config.defaultOutputDir)
      return json(res, 200, {
        ...stats,
        budget: {
          limit: Number.isFinite(budget) && budget > 0 ? budget : 0,
          spentToday: stats.todayCost,
          remaining:
            Number.isFinite(budget) && budget > 0 ? Math.round(Math.max(0, budget - stats.todayCost) * 100) / 100 : 0,
        },
        localBudget: {
          ...local,
          remainingToday:
            local.dailyLimit > 0 ? Math.round(Math.max(0, local.dailyLimit - stats.todayCost) * 100) / 100 : 0,
        },
      })
    }

    // 本机预算设置（原版 GET/POST /api/budget）：落在当前输出目录的 .budget.json
    if (path === '/budget' && method === 'GET') {
      const config = getConfig()
      const local = loadBudget(config.defaultOutputDir)
      return json(res, 200, { ...local, path: join(String(config.defaultOutputDir || ''), '.budget.json') })
    }

    if (path === '/budget' && method === 'POST') {
      const body = await readJson(req)
      const config = getConfig()
      const next = saveBudget(config.defaultOutputDir, body)
      return json(res, 200, { ok: true, ...next })
    }

    if (path === '/file') {
      const id = url.searchParams.get('id') || ''
      // 按路径取图：账本里没有 outputAssetIds 的旧行只有路径（原版同样按路径发图）。
      // 放行规则与 id 那条同源（store.allowPath 只认 assets/ 与 output/ 之下），
      // 所以用户在别的目录（比如「图片」文件夹）里的旧图会被拒绝 —— 这与原版的
      // 「文件已移动」是同一件事，不是 bug。
      const rawPath = url.searchParams.get('path') || ''
      if (!id && rawPath) {
        if (!store.allowPath(rawPath)) return json(res, 403, { error: '路径不在允许范围内' })
        const absPath = resolve(rawPath)
        const type = MIME[extname(absPath).toLowerCase()] || 'application/octet-stream'
        res.setHeader('content-type', type)
        res.setHeader('cache-control', 'private, max-age=3600')
        res.setHeader('x-content-type-options', 'nosniff')
        if (method === 'HEAD') return res.end()
        store
          .stream(absPath)
          .on('error', () => res.end())
          .pipe(res)
        return undefined
      }
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
      // 预算闸门（两道，语义不同，见 budget.js 文件头）：
      //
      // 1) 本画布累计上限（settings.budget）—— **硬拦**。这条先立住，是因为它管的是
      //    「这个画布的活干完没」，花完了就该停，不该给个确认按钮绕过去。
      const budget = Number(getSettings()?.budget ?? 0)
      const spent = Number(body.spent ?? 0)
      if (Number.isFinite(budget) && budget > 0 && spent >= budget) {
        return json(res, 409, {
          error: `已达预算上限 ¥${budget.toFixed(2)}（本画布已花 ¥${spent.toFixed(2)}），调高预算或不设上限后再运行`,
          budget,
          spent,
        })
      }

      // 2) 本机每日 / 单次上限（.budget.json）—— **超限需确认**，照原版 core/cost.py。
      //    放行靠 body.allowOverBudget：前端弹出理由后由用户点「仍然提交」再发一次。
      //    判据要现读账本（今天的钱是别的进程/原版花掉的也算），不能只信前端报的数。
      const localBudget = loadBudget(config.defaultOutputDir)
      if (localBudget.dailyLimit > 0 || localBudget.singleRunLimit > 0) {
        const { records } = await readLedger(ledgerRoot(config))
        const today = summarize(readRaw(records), 1).todayCost
        const estimate = costOfSize(config, size) * Math.max(1, Number(body.count) || 1)
        const verdict = checkBudget(estimate, localBudget, today, body.allowOverBudget === true)
        if (!verdict.allowed) {
          return json(res, 409, {
            error: verdict.reason,
            overBudget: verdict,
            localBudget,
          })
        }
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
      // 「缺失」只能**按解析结果**判，不能在解析前按「节点上有没有 absPath」判。
      // 原版工作流（以及我们共用模式写出的那份）里图片节点**只存 registryId**，
      // 派生路径是加载时从注册表现算的 —— 解析前看字段必然为空，那样判会把健康的
      // 存档整批判成「缺失」（实测一个 12 图的存档报了 12 张缺失，实际全都能取到）。
      // 正确顺序：先 hydrate（补 absPath / url / missing），再按 missing 汇总。
      const nodes = store.hydrate(data.nodes, await assetIndex())
      const missing = (Array.isArray(nodes) ? nodes : [])
        .filter(node => node?.type === 'image' && node.data?.missing === true)
        .map(node => String(node.data?.registryId || node.id))
      return json(res, 200, {
        name: data.name || name,
        nodes,
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
