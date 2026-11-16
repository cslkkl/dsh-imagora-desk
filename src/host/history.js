// 生成历史账本：读 `<imagora 目录>/logs/generation.jsonl`，聚合后分页返回。
//
// 这是**照搬原版** core/history.py 的语义（不是重新设计）：
//   - `_collect_all`          → collectAll：倒序读、坏行跳过、搜索/状态在聚合前过滤
//   - `dedupe_generation_history` → dedupeUnchanged：成功行全留、同参数失败只留最新
//   - `read_generation_history_paged` → readPaged：offset 是**聚合后**的偏移
//   - `read_raw_history`      → readRaw：给统计用，**不聚合不截断**（每条成功都真花过钱）
//   - core/cost.py `summarize_records` → summarize
//
// 为什么这些语义要一条条照抄而不是"简化"：
//   - 成功行**不许合并**：同卡片同提示词连点两次会真出两张图，账本两行、两个 output。
//     早先原版把所有同参数行一并折叠过，结果「两张图都在、历史里只有一张」。
//   - 搜索要折叠空白：账本 prompt 存的是 Windows CRLF，用户粘进单行搜索框时浏览器
//     把换行归一，与账本换行错位会导致整串子串匹配失败。
//   - 统计走原始行：聚合会少算费用。
//
// ## 为什么按块倒着读
//
// 账本是 append-only 的 JSONL，列表与看板都只关心**最新那一段**。早先的实现是
// `readFile(utf8)` 整体splitLines 再 reverse：文件多大就吃多大内存，且每次打开
// 历史都要把历史全解析一遍。现在从文件尾部按块往回读，凑够条数就停；统计仍要
// 全量，但走同一个迭代器，内存只与块大小有关。
//
// 本模块只做「文件 → 数据结构」，不碰 store / 注册表（解析图片存在性在 routes.js）。

import { open, stat } from 'node:fs/promises'
import { join } from 'node:path'

/** 账本相对 imagora 目录的位置（原版 core/logging.py 的 BASE_DIR/logs） */
export const LEDGER_RELATIVE = join('logs', 'generation.jsonl')

/** 原版 _collect_all 的 raw_limit 默认值：限制**匹配到的原始行数**，防大账本全盘扫描 */
export const RAW_LIMIT = 500

/** 倒序读的块大小：64KB 够摊平逐行读取的系统调用，又不至于让单次解码过大 */
const REVERSE_CHUNK = 64 * 1024

/** 看板默认回看天数（原版 core/cost.py DEFAULT_DAYS） */
const DEFAULT_DAYS = 14

/** 搜索空白折叠（原版 _SPACES）：CRLF / 连续空格 → 单空格 */
function foldSpaces(text) {
  return String(text ?? '').replace(/\s+/g, ' ')
}

/**
 * 从文件尾部按块倒序产出行（最新在前），不把整份文件读进内存。
 *
 * 块边界会切开某一行：切下来的前半段留作下一轮的 carry 拼回去，所以产出的
 * 永远是完整行（除了文件首行本来就没有前导换行）。
 */
export async function* ledgerLinesReversed(file, chunkSize = REVERSE_CHUNK) {
  let handle
  try {
    handle = await open(file, 'r')
  } catch {
    return // 没有账本：当作 0 行（与「读不到文件」同一处置）
  }
  try {
    const { size } = await handle.stat()
    let pos = size
    let carry = Buffer.alloc(0)
    while (pos > 0) {
      const step = Math.min(chunkSize, pos)
      pos -= step
      const buffer = Buffer.alloc(step)
      const { bytesRead } = await handle.read(buffer, 0, step, pos)
      const block = Buffer.concat([buffer.subarray(0, bytesRead), carry])
      const pieces = splitBuffer(block, 0x0a)
      carry = pieces[0]
      for (let i = pieces.length - 1; i >= 1; i -= 1) yield pieces[i]
    }
    if (carry.length) yield carry
  } finally {
    await handle.close()
  }
}

/** 按单字节分隔符切 Buffer（不用 String 切：中文多字节字符会被切坏） */
function splitBuffer(buffer, byte) {
  const pieces = []
  let start = 0
  for (let i = 0; i < buffer.length; i += 1) {
    if (buffer[i] === byte) {
      pieces.push(buffer.subarray(start, i))
      start = i + 1
    }
  }
  pieces.push(buffer.subarray(start))
  return pieces
}

/** 倒序产出**可解析的**记录（坏行 / 非对象 / 非法编码一律跳过） */
async function* recordsReversed(file) {
  for await (const raw of ledgerLinesReversed(file)) {
    // 逐行解码：一行坏字节只影响它自己，不会像整份 utf8 解码那样连累全部
    const line = raw.toString('utf8').trim()
    if (!line) continue
    let record
    try {
      record = JSON.parse(line)
    } catch {
      continue // 坏行忽略：账本是 append-only 的，写到一半断电就会留半行
    }
    if (record && typeof record === 'object' && !Array.isArray(record)) yield record
  }
}

/** 账本文件是否存在（供路由区分「没设目录 / 没生成过」与「读到了空账本」） */
export function ledgerPath(imagoraRoot) {
  return join(String(imagoraRoot || ''), LEDGER_RELATIVE)
}

/** 账本是否存在于磁盘（不抛错） */
export async function ledgerExists(imagoraRoot) {
  if (!imagoraRoot) return false
  try {
    const info = await stat(ledgerPath(imagoraRoot))
    return info.isFile()
  } catch {
    return false
  }
}

/**
 * 读取账本记录（最新在前，坏行跳过）。
 *
 * 三个选项都在**聚合之前**生效，与分页语义一致：
 * - `query`：搜索词（空白折叠后的子串匹配）
 * - `status`：`ok` / `error` 过滤
 * - `rawLimit`：匹配到这么多条就停（不再往文件更早的部分读）；0 = 全量
 *
 * 返回 `{ file, records }`；`file` 是账本绝对路径，路由要回给前端做「历史为空」的解释。
 */
export async function readLedger(imagoraRoot, { query = '', status = '', rawLimit = 0 } = {}) {
  const file = ledgerPath(imagoraRoot)
  if (!imagoraRoot) return { file: '', records: [] }
  const needle = foldSpaces(query).trim().toLowerCase()
  const statusFilter = String(status ?? '')
    .trim()
    .toLowerCase()
  const cap = Number(rawLimit) > 0 ? Math.max(1, Math.floor(Number(rawLimit))) : 0
  const records = []
  for await (const record of recordsReversed(file)) {
    if (statusFilter && String(record?.status ?? '').toLowerCase() !== statusFilter) continue
    if (needle) {
      const haystack = ['time', 'prompt', 'mode', 'quality', 'output']
        .map(key => foldSpaces(record?.[key]))
        .join(' ')
        .toLowerCase()
      if (!haystack.includes(needle)) continue
    }
    records.push(record)
    if (cap && records.length >= cap) break
  }
  return { file, records }
}

/** 呈现前聚合（原版 dedupe_generation_history）。输入须最新在前，输出保持同序。 */
export function dedupeGenerationHistory(items) {
  const seenOk = new Set()
  const keptError = new Set()
  const kept = []
  for (const record of items) {
    const key = paramsKey(record)
    if (String(record?.status ?? '') === 'ok') {
      // 成功：全留。记下「这组已成功过」，后面的失败行据此被取代
      seenOk.add(key)
      kept.push(record)
      continue
    }
    // 失败：本组已出现过成功（更新的那条在前）→ 已被取代，丢弃；
    // 本组已保留过一条失败 → 再丢（失败刷屏只留最新一条）
    if (seenOk.has(key) || keptError.has(key)) continue
    keptError.add(key)
    kept.push(record)
  }
  return kept
}

/** 同一生成参数的判别键（原版 _params_key）。
 *
 * 「时间不算参数」：time / output / cost / seconds / submissionId / outputAssetIds
 * 只是运行结果与环境。参考图用**内容 id** 参与（同图重传按 sha1 去重成同一 id），
 * 两批不同的参考图不会误合并。旧行无 inputAssetIds 以空数组兜底。 */
function paramsKey(record) {
  const raw = record?.inputAssetIds
  const ids = Array.isArray(raw) ? raw.map(String) : []
  return JSON.stringify([
    String(record?.mode ?? ''),
    String(record?.prompt ?? ''),
    String(record?.size ?? ''),
    String(record?.quality ?? ''),
    Number.parseInt(String(record?.refs ?? 0), 10) || 0,
    ids,
  ])
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

/** 本地日期戳 YYYY-MM-DD（原版用 time.strftime，本地时区） */
function todayStamp() {
  const now = new Date()
  const pad = n => String(n).padStart(2, '0')
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
}

/** 账本记录聚合成本看板指标（照 core/cost.py 的 summarize_records）。
 *
 * 口径提醒：**只统计成功行的费用**（失败不花钱），但 total/error 计全部行。
 * avgSeconds 只对成功行取平均 —— 失败行往往在几秒内就报错，混进平均会把
 * 「正常要跑 60 秒」显示成 20 秒。 */
export function summarize(records, days = DEFAULT_DAYS) {
  const safeDays = Math.max(1, Number.parseInt(String(days), 10) || DEFAULT_DAYS)
  const today = todayStamp()
  let total = 0
  let ok = 0
  let error = 0
  let cost = 0
  let seconds = 0
  let okSeconds = 0
  let todayCost = 0
  const perDay = new Map()
  const perSize = new Map()
  const perMode = new Map()

  for (const record of records) {
    if (!record || typeof record !== 'object') continue
    total += 1
    const success = String(record.status ?? '') === 'ok'
    const rowCost = success ? toNumber(record.cost) : 0
    const rowSeconds = toNumber(record.seconds)
    const day = String(record.time ?? '').slice(0, 10)
    if (success) {
      ok += 1
      cost += rowCost
      okSeconds += rowSeconds
      if (day === today) todayCost += rowCost
    } else {
      error += 1
    }
    seconds += rowSeconds

    const dayKey = day || '未知'
    const dayRow = perDay.get(dayKey) || { date: dayKey, count: 0, ok: 0, error: 0, cost: 0 }
    dayRow.count += 1
    dayRow[success ? 'ok' : 'error'] += 1
    if (success) dayRow.cost = Math.round((dayRow.cost + rowCost) * 100) / 100
    perDay.set(dayKey, dayRow)

    const size = String(record.size ?? '') || '-'
    const sizeRow = perSize.get(size) || { size, count: 0, cost: 0 }
    sizeRow.count += 1
    if (success) sizeRow.cost = Math.round((sizeRow.cost + rowCost) * 100) / 100
    perSize.set(size, sizeRow)

    const mode = String(record.mode ?? '') || '-'
    const modeRow = perMode.get(mode) || { mode, count: 0, cost: 0 }
    modeRow.count += 1
    if (success) modeRow.cost = Math.round((modeRow.cost + rowCost) * 100) / 100
    perMode.set(mode, modeRow)
  }

  const round2 = value => Math.round(value * 100) / 100
  const round1 = value => Math.round(value * 10) / 10
  return {
    total,
    ok,
    error,
    successRate: total ? round1((ok * 100) / total) : 0,
    cost: round2(cost),
    seconds: round1(seconds),
    avgSeconds: ok ? round1(okSeconds / ok) : 0,
    todayCost: round2(todayCost),
    byDay: [...perDay.values()].sort((a, b) => String(b.date).localeCompare(String(a.date))).slice(0, safeDays),
    bySize: [...perSize.values()]
      .sort((a, b) => b.count - a.count || String(a.size).localeCompare(String(b.size)))
      .slice(0, 10),
    byMode: [...perMode.values()]
      .sort((a, b) => b.count - a.count || String(a.mode).localeCompare(String(b.mode)))
      .slice(0, 10),
  }
}
