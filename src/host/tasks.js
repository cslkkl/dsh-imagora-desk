// 生成任务池：画布上每张提示词卡提交一次，排队跑，前端轮询快照。
// 终态（done / failed / cancelled）的保留策略与上游一致：超 TTL 即清、超上限再清。
// 语义与 Imagora 一致：排队中的可以就地取消；跑起来的要等当前这张结束才作废。
import { join } from 'node:path'
import { costOfSize } from './config.js'
import { generateImage, humanizeError } from './generate.js'
import { appendGeneration, buildRecord } from './ledger.js'

// 与上游 core/tasks.py 对齐：MAX_TASKS = 500、TERMINAL_TTL_SECONDS = 600。
// 插件早期的版本只有数量上限、没有 TTL —— 跑完的任务连同它的蒙版 Buffer（原图尺寸
// 的 PNG，MB 级）一直挂在内存里，直到被下一次提交挤掉。
/** 终态：这些状态的任务会在 TTL 后被清掉（排队中 / 运行中的永远不动） */
const TERMINAL = new Set(['done', 'failed', 'cancelled'])

const MAX_TASKS = 500
const TERMINAL_TTL_MS = 600 * 1000

export class TaskPool {
  /**
   * @param {object} options
   * @param {() => object} options.getConfig 取当前 imagora 配置（每次执行都重读，换模型立即生效）
   * @param {import('./store.js').Store} options.store
   * @param {number} [options.concurrency]
   */
  constructor({ getConfig, store, concurrency = 3, maxTasks = MAX_TASKS, terminalTtlMs = TERMINAL_TTL_MS }) {
    this.getConfig = getConfig
    this.store = store
    this.concurrency = concurrency
    this.maxTasks = maxTasks
    this.terminalTtlMs = terminalTtlMs
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
      // 参考图的登记 id（与 refs 路径一一对应，顺序相同）：账本靠它把参考图解析回来。
      // 跟着任务走而不是跑完再查，是因为排队期间用户可能已经把那张图从画布上删了 ——
      // 路径还能从注册表补，但"这次到底用了哪几张"只有提交那一刻知道。
      refAssetIds: Array.isArray(input.refAssetIds) ? input.refAssetIds.map(String) : [],
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

  /** 终态任务的存活时长（从结束时刻算；没结束时间的按创建时间兜底） */
  expired(task, now = Date.now()) {
    if (!TERMINAL.has(task.status)) return false
    return now - (task.finishedAt ?? task.createdAt) > this.terminalTtlMs
  }

  /**
   * 清理：**先按 TTL 清过期终态，仍超上限再清最旧的终态**（顺序与上游一致）。
   *
   * 为什么两段：只看数量的话，跑得慢的用户攒到 500 条才清；只看 TTL 的话，
   * 一次提交几百个任务的上限形同虚设。两者叠加才既不涨、也不早清。
   *
   * 删任务时顺手把 `mask` 置空 —— 那是 MB 级 Buffer，进程里唯一还引用它的
   * 就是这个任务对象，不显式断开就要等 GC 兜底。
   */
  trim(now = Date.now()) {
    const overflow = () => this.tasks.size - this.maxTasks
    let dropped = 0
    for (const task of this.tasks.values()) {
      if (this.expired(task, now)) {
        this.tasks.delete(task.id)
        task.mask = null
        dropped += 1
      }
    }
    if (overflow() <= 0) return dropped
    const finished = [...this.tasks.values()]
      .filter(task => TERMINAL.has(task.status))
      .sort((a, b) => a.createdAt - b.createdAt)
    for (const task of finished) {
      if (overflow() <= 0) break
      this.tasks.delete(task.id)
      task.mask = null
      dropped += 1
    }
    return dropped
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
      // 结果同时落两处：assets/（画布引用）与输出目录（可交付）。
      //
      // **空串 = 用默认输出目录**，与原版同一条语义（server.py 的
      // `task.output_dir or load_default_output_dir() or DEFAULT_OUTPUT_DIR`）。
      // 插件从前把空串解释成「只留在画布」：那是自己造的第二套语义 —— 卡片留空
      // 就静默不落盘，而界面上又写着「留空 = 只留在画布」，用户以为设了默认就都落。
      // 现在只有一条规则：卡上写的优先，没写就用配置里的默认值。
      const stamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14)
      const prefix = refs.length ? 'img2img' : 'txt2img'
      const name = `${prefix}_${stamp}_${task.id.slice(-4)}${ext}`
      const entry = await this.store.saveAsset(buffer, name, { origin: 'generate' })
      const outDir = String(task.outputDir || '').trim() || String(config.defaultOutputDir || '').trim()
      const target = outDir ? join(outDir, name) : ''
      if (target) {
        try {
          const { mkdir, writeFile } = await import('node:fs/promises')
          // 目录不存在就先建（原版 run_generation 里同样有 os.makedirs）：
          // 默认目录可能刚在设置里改成一个还没建的路径，不建就直接 ENOENT。
          await mkdir(outDir, { recursive: true })
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
          // 参考图 id 也进账本：历史里那条记录才能把参考图缩略图显示出来。
          // 原版在提交阶段就 register_input_assets 并写 inputAssetIds；我们在
          // `/generate` 里解析 refIds 时拿到同一批 id（共用模式下内容 sha1 = 原版 id）。
          inputAssetIds: task.refAssetIds,
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

  /** 取任务快照（前端轮询用）。终态超 TTL 的惰性清理后返回 null —— 与上游一致：
   *  轮询是唯一的高频入口，在这里顺手清一次，就不需要后台定时器。 */
  snapshot(id) {
    const task = this.tasks.get(id)
    if (!task) return null
    if (this.expired(task)) {
      this.tasks.delete(id)
      task.mask = null
      return null
    }
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
