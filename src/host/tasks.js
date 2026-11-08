// 生成任务池：画布上每张提示词卡提交一次，排队跑，前端轮询快照。
// 语义与 Imagora 一致：排队中的可以就地取消；跑起来的要等当前这张结束才作废。
import { join } from 'node:path'
import { costOfSize } from './config.js'
import { generateImage, humanizeError } from './generate.js'
import { appendGeneration, buildRecord } from './ledger.js'

const MAX_KEEP = 200

export class TaskPool {
  /**
   * @param {object} options
   * @param {() => object} options.getConfig 取当前 imagora 配置（每次执行都重读，换模型立即生效）
   * @param {import('./store.js').Store} options.store
   * @param {number} [options.concurrency]
   */
  constructor({ getConfig, store, concurrency = 3 }) {
    this.getConfig = getConfig
    this.store = store
    this.concurrency = concurrency
    this.tasks = new Map()
    this.queue = []
    this.active = 0
  }

  submit(input) {
    const id = `t_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`
    const task = {
      id,
      status: 'queued',
      prompt: input.prompt,
      size: input.size,
      quality: input.quality,
      outputDir: input.outputDir || '',
      refs: Array.isArray(input.refs) ? input.refs : [],
      // 蒙版（局部重绘）：Buffer 或 null。随任务快照保存，之后改画布不影响已提交的任务。
      mask: Buffer.isBuffer(input.mask) && input.mask.length ? input.mask : null,
      createdAt: Date.now(),
      startedAt: null,
      finishedAt: null,
      cancelRequested: false,
      results: [],
      messages: [],
      error: null,
      cost: 0,
    }
    this.tasks.set(id, task)
    this.queue.push(id)
    this.trim()
    this.pump()
    return { taskId: id, status: task.status }
  }

  trim() {
    if (this.tasks.size <= MAX_KEEP) return
    const done = [...this.tasks.values()]
      .filter(task => task.status === 'done' || task.status === 'failed' || task.status === 'cancelled')
      .sort((a, b) => a.createdAt - b.createdAt)
    for (const task of done.slice(0, this.tasks.size - MAX_KEEP)) this.tasks.delete(task.id)
  }

  pump() {
    while (this.active < this.concurrency && this.queue.length) {
      const id = this.queue.shift()
      const task = this.tasks.get(id)
      if (!task || task.status !== 'queued') continue
      if (task.cancelRequested) {
        task.status = 'cancelled'
        task.finishedAt = Date.now()
        continue
      }
      this.active += 1
      this.run(task).finally(() => {
        this.active -= 1
        this.pump()
      })
    }
  }

  async run(task) {
    task.status = 'running'
    task.startedAt = Date.now()
    const config = this.getConfig()
    const cost = costOfSize(config, task.size)
    const refs = task.refs
    task.messages.push(refs.length ? `图生图 · 参考图 ${refs.length} 张` : '文生图')
    // 账本记录在**两条出口**都要写（成功 / 失败），原版同样记失败行：
    // 成本看板的成功率与失败数都靠它，只记成功会让「失败」永远是 0。
    let ledgerAssetId = ''
    let ledgerOutput = ''
    try {
      const { buffer, ext, meta } = await generateImage(config, {
        prompt: task.prompt,
        size: task.size,
        quality: task.quality,
        refs,
        mask: task.mask || null,
      })
      // 结果同时落两处：assets/（画布引用）与用户指定的输出目录（可交付）
      const stamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14)
      const prefix = refs.length ? 'img2img' : 'txt2img'
      const name = `${prefix}_${stamp}_${task.id.slice(-4)}${ext}`
      const entry = await this.store.saveAsset(buffer, name, { origin: 'generate' })
      const target = task.outputDir ? join(task.outputDir, name) : ''
      if (target) {
        try {
          const { writeFile } = await import('node:fs/promises')
          await writeFile(target, buffer)
          task.messages.push(`已另存到 ${target}`)
          ledgerOutput = target
        } catch (error) {
          task.messages.push(`另存失败（结果仍在画布上）：${error.message}`)
        }
      }
      // 没另存时，账本记资产副本的绝对路径：历史里「打开目录」要靠它
      ledgerAssetId = entry.id
      if (!ledgerOutput) ledgerOutput = entry.absPath
      if (task.cancelRequested) {
        task.status = 'cancelled'
        task.messages.push('已取消，本次结果不派回画布（图仍保存在 assets 里）')
      } else {
        task.status = 'done'
        task.results.push({
          status: 'ok',
          assetId: entry.id,
          url: `/imagora/file?id=${entry.id}`,
          name: entry.name,
          absPath: entry.absPath,
          ext: entry.ext,
          bytes: entry.size,
          size: task.size,
          cost,
          mode: meta.mode,
        })
        task.cost = cost
        task.messages.push(`已生成 · ${task.size}${cost ? ` · ${cost.toFixed(2)} 元` : ''}`)
      }
    } catch (error) {
      const human = humanizeError(error)
      task.status = task.cancelRequested ? 'cancelled' : 'failed'
      task.error = human
      task.results.push({ status: 'error', message: human })
      task.messages.push(`失败 · ${human}`)
    } finally {
      task.finishedAt = Date.now()
      // 账本只在**真正花过钱**的出口写：成功、或失败（失败也会被上游计费）。
      // 取消分两种：排队中被就地取消（根本没提交，不写）、运行中被取消
      // （上游已经跑了，图也落盘计费了 —— 写，与原版一致）。
      const submitted = task.startedAt !== null
      if (submitted) {
        const record = buildRecord({
          prompt: task.prompt,
          size: task.size,
          quality: task.quality,
          refs: task.refs.length,
          ok: task.status === 'done' || (task.status === 'cancelled' && Boolean(ledgerAssetId)),
          cost: task.status === 'failed' ? 0 : cost,
          seconds: (task.finishedAt - task.startedAt) / 1000,
          output: ledgerOutput,
          assetId: ledgerAssetId || undefined,
          root: config?.root || '',
        })
        void appendGeneration(config, record)
      }
    }
  }

  cancel(id) {
    const task = this.tasks.get(id)
    if (!task) return { ok: false, reason: 'not_found' }
    if (task.status === 'queued') {
      task.status = 'cancelled'
      task.cancelRequested = true
      task.finishedAt = Date.now()
      return { ok: true, status: task.status }
    }
    if (task.status === 'running') {
      task.cancelRequested = true
      return { ok: true, status: task.status }
    }
    return { ok: true, status: task.status }
  }

  snapshot(id) {
    const task = this.tasks.get(id)
    if (!task) return null
    return {
      taskId: task.id,
      status: task.status,
      startedAt: task.startedAt,
      finishedAt: task.finishedAt,
      results: task.results,
      messages: task.messages,
      totalCost: task.cost,
      error: task.error,
      cancelRequested: task.cancelRequested,
    }
  }
}
