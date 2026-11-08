// 本机预算设置：读写 `<输出目录>/.budget.json`，以及「当次 / 当日」超限判定。
//
// 照搬 Imagora 的 core/cost.py（normalize_budget / load_budget / save_budget / check_budget），
// 包括最关键的那条语义：**超限只是「需要确认」，不是硬拦**。
//   check_budget(confirmed=False) → allowed = !over
//   check_budget(confirmed=True)  → allowed = true（用户看过理由后仍然放行）
// 硬拦会让「就差 3 毛钱想跑最后一张」变成做不到；而静默放行又等于没有预算。
//
// 文件名与位置也照原版（output/.budget.json，git 忽略）：**共用 imagora 目录时，
// 原版与插件读的是同一份预算**，在两个界面里改都能立刻被对方看到。
//
// 与插件自有 `settings.budget` 的分工（这两个不是一回事，都留着）：
//   settings.budget      本画布累计上限，硬拦（工具栏 ¥ 徽章的进度条就是它）
//   .budget.json         本机每日 / 单次上限，软确认（原版口径，其它工具也读它）
// 前者管「这个画布别超支」，后者管「今天整体别超支」，作用域不同。
import { existsSync, readFileSync, renameSync, unlinkSync, writeFileSync } from 'node:fs'
import { mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

/** 预算文件名（原版 BUDGET_FILE 的 basename） */
export const BUDGET_FILE = '.budget.json'

/** 默认值：都 0 = 不限（原版 DEFAULT_BUDGET） */
export const DEFAULT_BUDGET = { dailyLimit: 0, singleRunLimit: 0 }

function toNumber(value, fallback = 0) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

/** 预算文件路径：落在**当前生效的输出目录**下（与原版同一个落点） */
export function budgetPath(outputDir) {
  return outputDir ? join(String(outputDir), BUDGET_FILE) : ''
}

/** 补齐 / 清洗（负数为 0、缺失取默认、保留两位）。纯函数。 */
export function normalizeBudget(settings) {
  const raw = settings && typeof settings === 'object' ? settings : {}
  const out = {}
  for (const [key, fallback] of Object.entries(DEFAULT_BUDGET)) {
    const value = toNumber(raw[key], fallback)
    out[key] = value > 0 ? Math.round(value * 100) / 100 : 0
  }
  return out
}

/** 读预算设置；文件缺失 / 损坏一律回落到「不限」，不抛错（原版同样吞异常）。 */
export function loadBudget(outputDir) {
  const file = budgetPath(outputDir)
  if (!file || !existsSync(file)) return { ...DEFAULT_BUDGET }
  try {
    return normalizeBudget(JSON.parse(readFileSync(file, 'utf8')))
  } catch {
    return { ...DEFAULT_BUDGET }
  }
}

/**
 * 写预算设置。原子写：先写临时文件再 rename —— 账本与工作流都是这么写的，
 * 半截文件会让下次启动读到「损坏」并静默回落到不限，等于预算凭空消失。
 */
export function saveBudget(outputDir, settings) {
  const file = budgetPath(outputDir)
  const normalized = normalizeBudget(settings)
  if (!file) return normalized
  const dir = dirname(file)
  mkdirSync(dir, { recursive: true })
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`
  try {
    writeFileSync(tmp, JSON.stringify(normalized, null, 2), 'utf8')
    renameSync(tmp, file)
  } finally {
    // rename 成功后 tmp 已不存在；失败时清掉，别在目录里留垃圾
    try {
      if (existsSync(tmp)) unlinkSync(tmp)
    } catch {
      // 清不掉也无所谓：下次写入会用新的 pid+时间戳，不会撞名
    }
  }
  return normalized
}

/**
 * 预算校验（纯函数，照 core/cost.py 的 check_budget）。
 *
 * 规则：`singleRunLimit > 0` 且本次预估超它，或 `dailyLimit > 0` 且「今日已花 + 本次预估」
 * 超它 → `over = true`；此时只有 `confirmed = true` 才放行。
 * 两项都没设（0）或没超 → 直接放行。
 *
 * @param {number} estimate 本次提交的预估费用（元）
 * @param {object} settings 预算设置（会被 normalize）
 * @param {number} spentToday 今天已经花掉多少（元）
 * @param {boolean} confirmed 用户是否已确认「知道超了，仍然要跑」
 */
export function checkBudget(estimate, settings, spentToday, confirmed = false) {
  const cfg = normalizeBudget(settings)
  const est = Math.max(0, toNumber(estimate))
  const spent = Math.max(0, toNumber(spentToday))
  const reasons = []

  if (cfg.singleRunLimit > 0 && est > cfg.singleRunLimit) {
    reasons.push(`本次预估 ${est.toFixed(2)} 元，超过单次上限 ${cfg.singleRunLimit.toFixed(2)} 元`)
  }
  if (cfg.dailyLimit > 0 && spent + est > cfg.dailyLimit) {
    reasons.push(
      `今日已花 ${spent.toFixed(2)} 元 + 本次预估 ${est.toFixed(2)} 元，超过当日预算 ${cfg.dailyLimit.toFixed(2)} 元`,
    )
  }

  const over = reasons.length > 0
  const limit = cfg.dailyLimit > 0 ? cfg.dailyLimit : 0
  return {
    allowed: !over || Boolean(confirmed),
    over,
    confirmed: Boolean(confirmed),
    reason: reasons.join('；'),
    estimate: Math.round(est * 100) / 100,
    spentToday: Math.round(spent * 100) / 100,
    remaining: limit > 0 ? Math.round(Math.max(0, limit - spent) * 100) / 100 : 0,
    settings: cfg,
  }
}
