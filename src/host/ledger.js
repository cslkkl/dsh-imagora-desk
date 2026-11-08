// 生成账本：`<imagora 目录>/logs/generation.jsonl` 的**读路径判定**与**追加写入**。
//
// 格式逐字段照 Imagora 的 core/logging.py（log_generation）：
//   time / mode / refs / prompt / size / quality / status / cost / seconds / output
//   + 可选的 outputAssetIds（有资产副本时写，历史里据此解析出图）
// 「字段名与取值口径必须一模一样」不是洁癖：原版与插件共用同一个文件，
// 任一侧写偏了，另一侧的历史/成本看板就会读出 NaN 或空行。
//
// 读与写共用同一个根目录判定（ledgerRoot），这是曾经踩过的坑：
// 只认 `imagoraRoot`（用户显式选的共享目录）时，没点过「选择目录」的用户
// 读不到自己机器上明明存在的账本 —— 历史空着、日预算的 todayCost 恒为 0。
// 同一个 loadImagoraConfig 里 defaultOutputDir 早就用 root 兜底了。
import { existsSync } from 'node:fs'
import { mkdir, open } from 'node:fs/promises'
import { join } from 'node:path'

/** 账本文件名（原版 core/logging.py 的 LOGS_DIR / "generation.jsonl"） */
export const LEDGER_NAME = 'generation.jsonl'

/**
 * 账本所在目录。
 *
 * 显式设的 `imagoraRoot` 优先（用户明确要和原版共用一份），否则回落到
 * 自动探测到的 `root`。只用于**读**；写另有闸门，见 appendGeneration。
 */
export function ledgerRoot(config) {
  return String(config?.imagoraRoot || '').trim() || String(config?.root || '').trim()
}

/**
 * 写入闸门：这值得我们往这个目录里写账本吗？
 *
 * - 显式指针：用户明确指了这个目录，写（目录本身要存在，避免往手滑路径里造目录）。
 * - 自动探测：只有该目录**真的是 imagora 安装目录**（含 config.json）才写。
 *   否则就是随便一个被探测到的路径，往里 append 日志属于越界。
 */
function writable(config) {
  const root = ledgerRoot(config)
  if (!root || !existsSync(root)) return ''
  const explicit = Boolean(String(config?.imagoraRoot || '').trim())
  if (!explicit && !existsSync(join(root, 'config.json'))) return ''
  return root
}

/** 本地时间 'YYYY-MM-DD HH:mm:ss'（原版 time.strftime 的默认格式，本地时区） */
function localStamp(date = new Date()) {
  const pad = n => String(n).padStart(2, '0')
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ` +
    `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
  )
}

/**
 * 输出路径的展示形态：相对 imagora 目录、统一正斜杠（原版 _display_path）。
 *
 * 相对化是**必需的**：绝对路径换台机器就失效，而账本是要跨机器读的历史。
 * 落在目录之外（用户另存到别处）时保留绝对路径 —— 原版也是这个行为。
 */
export function displayPath(root, absPath) {
  const raw = String(absPath || '').trim()
  if (!raw) return ''
  const prefix = String(root || '')
  if (prefix) {
    const normalized = raw.replace(/\\/g, '/')
    const base = prefix.replace(/\\/g, '/').replace(/\/+$/, '')
    if (normalized.toLowerCase().startsWith(`${base.toLowerCase()}/`)) {
      return normalized.slice(base.length + 1)
    }
  }
  return raw.replace(/\\/g, '/')
}

/**
 * 组装一条账本记录（纯函数，便于单测）。
 *
 * @param {object} input
 * @param {string} input.prompt 提示词
 * @param {string} input.size 尺寸
 * @param {string} input.quality 质量
 * @param {boolean} input.ok 成功与否
 * @param {number} [input.cost] 本次费用（元）
 * @param {number} [input.seconds] 耗时（秒）
 * @param {number} [input.refs] 参考图张数
 * @param {string} [input.output] 输出绝对路径（会相对化成展示形态）
 * @param {string} [input.assetId] 资产副本 id
 * @param {string} [input.root] imagora 目录，用于相对化 output
 */
export function buildRecord(input) {
  const refs = Math.max(0, Number(input.refs) || 0)
  const record = {
    time: localStamp(input.at instanceof Date ? input.at : new Date()),
    mode: refs > 0 ? 'img2img' : 'txt2img',
    refs,
    prompt: String(input.prompt ?? ''),
    size: String(input.size ?? ''),
    quality: String(input.quality ?? ''),
    status: input.ok ? 'ok' : 'error',
    // 与 core/logging.py 一致：费用两位、耗时一位
    cost: Math.round((Number(input.cost) || 0) * 100) / 100,
    seconds: Math.round((Number(input.seconds) || 0) * 10) / 10,
    output: displayPath(input.root, input.output),
  }
  if (input.assetId) record.outputAssetIds = [String(input.assetId)]
  return record
}

/**
 * 进程内写入队列。
 *
 * 同一进程里 3 个任务并发完成时，两次 append 可能交错成半行 —— 而账本是
 * 「一行一条」的格式，半行就是坏行（读取侧虽然会跳过，但那条记录就丢了）。
 * 这里串行化本进程的写；跨进程（原版 Python 同时在写）靠下面单次 write 的
 * O_APPEND 原子性兜住：一行一次系统调用，不拆包。
 */
let tail = Promise.resolve()

/**
 * 追加一条账本记录。
 *
 * 语义照原版：**写失败不影响生成主流程**（core/logging.py 里是 try/except 静默）。
 * 所以这里不抛错，只回 false，由调用方决定要不要提示。
 *
 * @returns {Promise<boolean>} 是否真的写进去了
 */
export function appendGeneration(config, record) {
  const root = writable(config)
  if (!root) return Promise.resolve(false)
  const line = `${JSON.stringify(record)}\n`
  const run = tail.then(() => writeLine(root, line))
  // 队列本身不许 reject：一次失败不能让后续写入集体挂掉
  tail = run.then(
    () => undefined,
    () => undefined,
  )
  return run
}

async function writeLine(root, line) {
  try {
    const dir = join(root, 'logs')
    await mkdir(dir, { recursive: true })
    const handle = await open(join(dir, LEDGER_NAME), 'a')
    try {
      // 整行一次 write：多一次系统调用就多一个和 Python 侧交错的窗口
      await handle.write(line)
    } finally {
      await handle.close()
    }
    return true
  } catch {
    return false
  }
}
