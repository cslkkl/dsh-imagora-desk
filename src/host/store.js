// 画布的资产与工作流都落在 ~/.dsh/imagora 下：
//   assets/     画布图片（上传、粘贴、生成结果都复制/写到这里）
//   output/     生成结果的默认输出目录
//   workflows/  手动命名的工作流
//   recovery/   自动恢复快照（最近 5 份）
//   registry.json / settings.json
import { createHash, randomUUID } from 'node:crypto'
import { createReadStream, existsSync, readdirSync } from 'node:fs'
import { mkdir, readFile, rename, stat, unlink, writeFile } from 'node:fs/promises'
import { extname, join, resolve, sep } from 'node:path'

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

export class Store {
  constructor(root) {
    this.root = root
    this.assetsDir = join(root, 'assets')
    this.outputDir = join(root, 'output')
    this.workflowsDir = join(root, 'workflows')
    this.recoveryDir = join(root, 'recovery')
    this.registryPath = join(root, 'registry.json')
    this.settingsPath = join(root, 'settings.json')
    this.writeQueue = Promise.resolve()
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

  async readRegistry() {
    try {
      const data = JSON.parse(await readFile(this.registryPath, 'utf8'))
      return { version: 1, assets: Array.isArray(data.assets) ? data.assets : [] }
    } catch {
      return { version: 1, assets: [] }
    }
  }

  async writeRegistry(registry) {
    return this.serialize(async () => {
      const tmp = `${this.registryPath}.tmp`
      await writeFile(tmp, JSON.stringify(registry, null, 2), 'utf8')
      await rename(tmp, this.registryPath)
    })
  }

  /** 登记一张图：文件必须已经在 assets/ 里，返回可直接给画布用的条目。 */
  async register(absPath, meta = {}) {
    const info = await stat(absPath)
    const name = meta.name || absPath.split(sep).pop() || 'image.png'
    const ext = extOf(name)
    const id = meta.id || makeId()
    const entry = {
      id,
      name,
      ext: ext.replace('.', ''),
      size: info.size,
      mtime: Math.round(info.mtimeMs),
      absPath,
      createdAt: new Date().toISOString(),
      origin: meta.origin || 'upload',
    }
    const registry = await this.readRegistry()
    const at = registry.assets.findIndex(row => row.id === id)
    if (at >= 0) registry.assets[at] = entry
    else registry.assets.push(entry)
    await this.writeRegistry(registry)
    return entry
  }

  /** 把任意字节写进 assets/ 并登记。 */
  async saveAsset(buffer, name, meta = {}) {
    const ext = extOf(name)
    const id = meta.id || makeId()
    const file = join(this.assetsDir, `${id}${ext}`)
    await writeFile(file, buffer)
    return this.register(file, { ...meta, id, name })
  }

  async removeAsset(id) {
    const registry = await this.readRegistry()
    const entry = registry.assets.find(row => row.id === id)
    if (!entry) return false
    registry.assets = registry.assets.filter(row => row.id !== id)
    await this.writeRegistry(registry)
    try {
      await unlink(entry.absPath)
    } catch {
      // 文件可能已被用户手动删掉：注册表清掉就算完成
    }
    return true
  }

  async assetById(id) {
    const registry = await this.readRegistry()
    return registry.assets.find(row => row.id === id) || null
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
    await writeFile(file, JSON.stringify({ version: 1, name: safe, ...payload }, null, 2), 'utf8')
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
    const file = join(this.recoveryDir, `${stamp}.json`)
    const body = JSON.stringify({ version: 1, name: `自动恢复 ${stamp}`, savedAt: stamp, ...payload }, null, 2)
    await writeFile(file, body, 'utf8')
    // 只留最近 5 份，避免快照堆积
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
    const names = readdirSync(this.recoveryDir)
      .filter(name => name.endsWith('.json'))
      .sort()
    const last = names[names.length - 1]
    if (!last) return { ok: true, empty: true }
    const data = JSON.parse(await readFile(join(this.recoveryDir, last), 'utf8'))
    return { ok: true, ...data }
  }

  /** 给节点补 url / absPath：文件被用户删掉时标 missing，画布画红框而不是整张卡消失。 */
  hydrate(nodes) {
    return (Array.isArray(nodes) ? nodes : []).map(node => {
      if (node?.type !== 'image' || !node.data) return node
      const data = node.data
      const abs = data.absPath || data.file || ''
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
