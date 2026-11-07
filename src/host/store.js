// 画布的资产、工作流与恢复快照落在两套目录里的**一套**：
//
//   A. 未设置 imagora 目录（插件独用）—— `~/.dsh/imagora/`
//        assets/  output/  workflows/  recovery/  registry.json  settings.json
//   B. 设置了 imagora 目录（与原版共用一份）—— `<imagoraRoot>/`
//        output/.assets/registry.json   原版的资产注册表（v2 格式，relPath 相对 output/）
//        output/.assets/canv_<sha1>.<ext>
//        output/workflows/<名字>.json   原版的工作流（它自己保存的就是这个位置）
//        output/workflows/.recovery/    原版的恢复快照
//
// 共用那条路是**指针，不是副本**：填上 imagora 目录之后，这里读的就是原版那份
// registry.json 与 workflows/，插件新出的图也注册进同一张表、落在同一个 .assets 里。
// 原版看得到插件的东西，插件也看得到原版的东西，两边都不需要同步脚本。
//
// 为什么要有两套格式：原版 registry 是 v2（`{schemaVersion, images:{id:entry}}`，
// 条目用 `relPath` 相对 output/ 推导绝对路径），插件最初写的是 v1（`{version, assets:[]}`，
// 条目直接存 absPath）。读的时候两种都认，写的时候「跟着当前所处的目录」走 ——
// 共用模式必须写 v2，否则原版读不到。
import { createHash, randomUUID } from 'node:crypto'
import { createReadStream, existsSync, readdirSync } from 'node:fs'
import { mkdir, readFile, rename, stat, unlink, writeFile } from 'node:fs/promises'
import { extname, join, relative, resolve, sep } from 'node:path'

export const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp'])
export const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.bmp': 'image/bmp',
}

export function extOf(name) {
  const ext = extname(String(name || '')).toLowerCase()
  return IMAGE_EXT.has(ext) ? ext : '.png'
}

export function makeId() {
  return randomUUID().replace(/-/g, '').slice(0, 16)
}

/** 原版 registry 的 schemaVersion（v2 包装）。共用模式下必须写这个版本。 */
const SCHEMA_VERSION = 2

export class Store {
  constructor(root) {
    /** 插件自己的数据目录（`~/.dsh/imagora`）：settings.json 永远在这里。 */
    this.root = root
    /** 用户填的 imagora 目录；空串 = 插件独用。由 setSharedRoot 更新。 */
    this.imagoraRoot = ''
    this.writeQueue = Promise.resolve()
  }

  /**
   * 切到 / 切回「与原版共用一份」。
   *
   * 只改指针，**不搬文件、不复制**：切过去马上就看得见原版已有的图与工作流。
   * 由 host/index.js 在启动与每次写设置后调用 —— 设置里改完目录不用重启插件。
   */
  setSharedRoot(imagoraRoot) {
    this.imagoraRoot = String(imagoraRoot || '').trim()
  }

  /** 是否处在「与原版共用一份」的模式。 */
  get shared() {
    return this.imagoraRoot !== ''
  }

  /** 原版的输出根（共用模式下所有路径都相对它推导）。 */
  get sharedOutputDir() {
    return join(this.imagoraRoot, 'output')
  }

  get assetsDir() {
    // 原版把资产放 output/.assets（v1 时代是 output/.canvas，已迁移）
    return this.shared ? join(this.sharedOutputDir, '.assets') : join(this.root, 'assets')
  }

  get outputDir() {
    return this.shared ? this.sharedOutputDir : join(this.root, 'output')
  }

  get workflowsDir() {
    return this.shared ? join(this.sharedOutputDir, 'workflows') : join(this.root, 'workflows')
  }

  get recoveryDir() {
    // 原版的恢复快照在工作流目录下的 .recovery 里（不是同级目录）
    return this.shared ? join(this.workflowsDir, '.recovery') : join(this.root, 'recovery')
  }

  get registryPath() {
    return this.shared ? join(this.assetsDir, 'registry.json') : join(this.root, 'registry.json')
  }

  get settingsPath() {
    return join(this.root, 'settings.json')
  }

  async init() {
    for (const dir of [this.assetsDir, this.outputDir, this.workflowsDir, this.recoveryDir]) {
      await mkdir(dir, { recursive: true })
    }
  }

  /** 串行化落盘：并发生成会把 registry 同时写坏，这里排队。 */
  async serialize(task) {
    const run = this.writeQueue.then(task, task)
    this.writeQueue = run.then(
      () => undefined,
      () => undefined,
    )
    return run
  }

  /**
   * 读注册表，统一成 `{ id, name, size, ext, relPath, absPath, createdAt, origin }` 的数组。
   *
   * 两种磁盘格式都认：
   *   v2（原版）`{ schemaVersion, images: { id: { relPath, name, size, ext, createdAt } } }`
   *   v1（插件旧版）`{ version, assets: [ { id, absPath, ... } ] }`
   * v2 条目的绝对路径靠 `relPath`（相对 output/）现算 —— 项目目录搬家后依旧有效，
   * 这正是原版不存 absPath 的理由，共用模式必须遵守。
   */
  async readRegistry() {
    let data = null
    try {
      data = JSON.parse(await readFile(this.registryPath, 'utf8'))
    } catch {
      return { assets: [] }
    }
    if (!data || typeof data !== 'object') return { assets: [] }

    // v2：images 是 id → entry 的字典
    if (data.images && typeof data.images === 'object' && !Array.isArray(data.images)) {
      const assets = []
      for (const [key, row] of Object.entries(data.images)) {
        if (!row || typeof row !== 'object') continue
        const id = String(row.id || key)
        const relPath = String(row.relPath || '')
        const absPath = relPath ? resolve(join(this.sharedOutputDir, relPath)) : ''
        assets.push({
          id,
          name: String(row.name || relPath.split('/').pop() || `${id}.png`),
          size: Number(row.size) || 0,
          ext: String(row.ext || extOf(relPath).replace('.', '')),
          relPath,
          absPath,
          createdAt: String(row.createdAt || ''),
          origin: String(row.kind || 'canvas'),
        })
      }
      return { assets }
    }

    // v1（以及插件自己写的那份）：assets 是数组，条目自带 absPath
    const rows = Array.isArray(data.assets) ? data.assets : []
    const assets = rows
      .filter(row => row && typeof row === 'object')
      .map(row => ({
        id: String(row.id || ''),
        name: String(row.name || ''),
        size: Number(row.size) || 0,
        ext: String(row.ext || ''),
        relPath: String(row.relPath || ''),
        absPath: String(row.absPath || ''),
        createdAt: String(row.createdAt || ''),
        origin: String(row.origin || 'upload'),
      }))
      .filter(row => row.id)
    return { assets }
  }

  /**
   * 落盘注册表。**写哪个格式由当前目录决定**：
   *   共用模式 → v2（原版要能读，条目只存 relPath，不带 absPath）
   *   插件独用 → v1（插件自己的老格式，条目带 absPath 更省事）
   */
  async writeRegistry(assets) {
    return this.serialize(async () => {
      await mkdir(this.assetsDir, { recursive: true })
      let payload
      if (this.shared) {
        const images = {}
        for (const row of assets) {
          const relPath = row.relPath || relative(this.sharedOutputDir, row.absPath).split(sep).join('/')
          images[row.id] = {
            id: row.id,
            relPath,
            name: row.name,
            size: row.size,
            ext: row.ext,
            createdAt: row.createdAt,
            kind: row.origin || 'canvas',
          }
        }
        payload = { schemaVersion: SCHEMA_VERSION, images }
      } else {
        payload = { version: 1, assets }
      }
      const tmp = `${this.registryPath}.tmp`
      await writeFile(tmp, JSON.stringify(payload, null, 2), 'utf8')
      await rename(tmp, this.registryPath)
    })
  }

  /** 登记一张图：文件必须已经在 assets/ 里，返回可直接给画布用的条目。 */
  async register(absPath, meta = {}) {
    const info = await stat(absPath)
    const name = meta.name || absPath.split(sep).pop() || 'image.png'
    const ext = extOf(name)
    const id = meta.id || makeId()
    const { assets } = await this.readRegistry()
    const at = assets.findIndex(row => row.id === id)
    const entry = {
      id,
      name,
      ext: ext.replace('.', ''),
      size: info.size,
      relPath: this.shared ? relative(this.sharedOutputDir, absPath).split(sep).join('/') : '',
      absPath,
      createdAt:
        at >= 0 && assets[at].createdAt
          ? assets[at].createdAt
          : new Date().toISOString().replace('T', ' ').slice(0, 19),
      origin: meta.origin || (at >= 0 ? assets[at].origin : 'upload'),
    }
    if (at >= 0) assets[at] = { ...assets[at], ...entry }
    else assets.push(entry)
    await this.writeRegistry(assets)
    return entry
  }

  /**
   * 把任意字节写进 assets 并登记。
   *
   * 共用模式下按**内容 sha1 去重**（原版 registry 就是这么登记的：同内容只留一份，
   * 文件名 `canv_<sha1[:12]>.<ext>`）。这样插件新出的图与原版已有的同一张图不会存两遍。
   */
  async saveAsset(buffer, name, meta = {}) {
    const ext = extOf(name)
    let id = meta.id || ''
    if (this.shared) {
      id = createHash('sha1').update(buffer).digest('hex').slice(0, 12)
      const { assets } = await this.readRegistry()
      const hit = assets.find(row => row.id === id)
      if (hit && existsSync(hit.absPath)) return hit
    } else {
      id = id || makeId()
    }
    await mkdir(this.assetsDir, { recursive: true })
    const file = join(this.assetsDir, `${this.shared ? 'canv_' : ''}${id}${ext}`)
    await writeFile(file, buffer)
    return this.register(file, { ...meta, id, name })
  }

  async removeAsset(id) {
    const { assets } = await this.readRegistry()
    const entry = assets.find(row => row.id === id)
    if (!entry) return false
    await this.writeRegistry(assets.filter(row => row.id !== id))
    try {
      await unlink(entry.absPath)
    } catch {
      // 文件可能已被用户手动删掉：注册表清掉就算完成
    }
    return true
  }

  async assetById(id) {
    const { assets } = await this.readRegistry()
    return assets.find(row => row.id === id) || null
  }

  /** registryId → absPath：给 hydrate 补节点上没存的路径用。 */
  async assetIndex() {
    const { assets } = await this.readRegistry()
    const map = new Map()
    for (const entry of assets) {
      if (entry.id && entry.absPath) map.set(entry.id, entry.absPath)
    }
    return map
  }

  /** 只允许读 assets/ 与 output/ 里的文件：路径穿越一律拒绝。 */
  allowPath(path) {
    const abs = resolve(path)
    const roots = [this.assetsDir, this.outputDir].map(dir => resolve(dir) + sep)
    return roots.some(root => abs.startsWith(root)) && existsSync(abs)
  }

  stream(file) {
    return createReadStream(file)
  }

  async listWorkflows() {
    try {
      const names = readdirSync(this.workflowsDir).filter(name => name.endsWith('.json'))
      const rows = []
      for (const name of names) {
        const info = await stat(join(this.workflowsDir, name))
        rows.push({ name: name.replace(/\.json$/, ''), modified: new Date(info.mtimeMs).toISOString() })
      }
      return rows.sort((a, b) => (a.modified < b.modified ? 1 : -1))
    } catch {
      return []
    }
  }

  safeName(name) {
    const cleaned = String(name || '')
      .replace(/[\\/:*?"<>|\s]+/g, ' ')
      .trim()
      .slice(0, 60)
    return cleaned || `工作流-${Date.now()}`
  }

  async saveWorkflow(name, payload) {
    const safe = this.safeName(name)
    const file = join(this.workflowsDir, `${safe}.json`)
    await mkdir(this.workflowsDir, { recursive: true })
    // 共用模式写成原版认得的 v2 结构（version / name / savedAt / nodes / edges）；
    // 插件独用也写同一套 —— 两边格式一致，来回导不会丢字段。
    const body = {
      version: 2,
      name: safe,
      savedAt: new Date().toISOString().replace('T', ' ').slice(0, 19),
      ...payload,
    }
    await writeFile(file, JSON.stringify(body, null, 2), 'utf8')
    return { ok: true, name: safe, path: file }
  }

  async loadWorkflow(name) {
    const safe = this.safeName(name)
    const file = join(this.workflowsDir, `${safe}.json`)
    const data = JSON.parse(await readFile(file, 'utf8'))
    return data
  }

  async saveRecovery(payload) {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-')
    await mkdir(this.recoveryDir, { recursive: true })
    const file = join(this.recoveryDir, `${stamp}.json`)
    const body = JSON.stringify({ version: 1, name: `自动恢复 ${stamp}`, savedAt: stamp, ...payload }, null, 2)
    await writeFile(file, body, 'utf8')
    // 只留最近 5 份，避免快照堆积（原版是 20；插件这边改动频繁，5 份够回溯）
    const names = readdirSync(this.recoveryDir)
      .filter(name => name.endsWith('.json'))
      .sort()
    for (const old of names.slice(0, Math.max(0, names.length - 5))) {
      try {
        await unlink(join(this.recoveryDir, old))
      } catch {
        // 删不掉不影响本次保存
      }
    }
    return { ok: true, name: `自动恢复 ${stamp}`, savedAt: stamp }
  }

  async latestRecovery() {
    let names = []
    try {
      names = readdirSync(this.recoveryDir)
        .filter(name => name.endsWith('.json'))
        .sort()
    } catch {
      return { ok: true, empty: true }
    }
    const last = names[names.length - 1]
    if (!last) return { ok: true, empty: true }
    const data = JSON.parse(await readFile(join(this.recoveryDir, last), 'utf8'))
    return { ok: true, ...data }
  }

  /**
   * 给节点补 url / absPath：文件被用户删掉时标 missing，画布画红框而不是整张卡消失。
   *
   * `byId` 是 registry 索引（registryId → absPath）。节点上没存 absPath 时要靠它补——
   * 手工写的或旧版本的快照就属于这种，只认节点字段会把好文件误判成「缺失」，
   * 连带 url 被抹掉，图片节点的操作（裁剪/切分/放大/预览）就全哑了。
   *
   * ⚠️ 共用模式下原版的工作流存的就是 `registryId` + 元数据（不含 absPath），
   * 所以这条回退是**读原版工作流的唯一通路**，不能删。
   */
  hydrate(nodes, byId = new Map()) {
    return (Array.isArray(nodes) ? nodes : []).map(node => {
      if (node?.type !== 'image' || !node.data) return node
      const data = node.data
      const fromRegistry = byId.get(String(data.registryId ?? '')) || ''
      const abs = data.absPath || data.file || fromRegistry
      const exists = abs ? existsSync(abs) : false
      return {
        ...node,
        data: {
          ...data,
          absPath: abs,
          url: exists ? `/imagora/file?id=${encodeURIComponent(data.registryId)}` : undefined,
          missing: !exists,
        },
      }
    })
  }

  digestFile(file) {
    return createHash('sha1').update(file).digest('hex').slice(0, 10)
  }
}
