// /imagora/* 的浏览器侧封装。host 半片已做鉴权，这里只负责把回答变成对象。
import type { AssetEntry, WorkflowEdge, WorkflowNode } from './lib/types'

export interface ImagoraConfig {
  source?: 'plugin' | 'imagora'
  root: string
  profile: string
  profileLabel: string
  profiles?: { name: string; label: string }[]
  provider?: {
    baseUrl: string
    model: string
    qualities: string[]
    sizes: { value: string; label: string; cost: number }[]
    apiKeyConfigured: boolean
  }
  model: string
  modelLabel: string
  models: { id: string; label: string; note?: string }[]
  sizes: { value: string; label: string; cost: number }[]
  qualities: string[]
  qualityEffective: boolean
  defaultOutputDir: string
  /** 预算上限（元）；0 = 不设上限 */
  budget?: number
  /** Imagora 目录指针：读它的 config.json / .env / 工作流 / 图片注册表；空 = 不共享 */
  imagoraRoot?: string
  /** 显式设过的输出目录覆盖值；空 = 跟随 imagoraRoot 或插件数据目录 */
  outputDirOverride?: string
  issues: string[]
}

// 资产的类型定义只有一份：lib/types.ts（移植区）。这里不再重复声明，
// 否则两边字段一漂移，调用点就会出现「结构兼容但类型不兼容」。
export type { AssetEntry } from './lib/types'

export interface TaskSnapshot {
  taskId: string
  status: 'queued' | 'running' | 'done' | 'failed' | 'cancelled'
  startedAt: number | null
  finishedAt: number | null
  results: {
    status: 'ok' | 'error'
    assetId?: string
    url?: string
    name?: string
    absPath?: string
    ext?: string
    bytes?: number
    size?: string
    cost?: number
    message?: string
  }[]
  messages: string[]
  totalCost: number
  error: string | null
  cancelRequested: boolean
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`imagora/${path}`, init)
  const text = await res.text()
  let body: unknown = null
  try {
    body = text ? JSON.parse(text) : null
  } catch {
    body = null
  }
  if (!res.ok) {
    const message =
      (body && typeof body === 'object' && 'error' in body ? String((body as { error: unknown }).error) : '') ||
      text.slice(0, 200)
    // 把响应体一起挂上：409 的预算超限要读 body.overBudget 才能区分
    // 「硬拦」与「超限需确认」（两者都是 409，只有后者带 overBudget）。
    throw Object.assign(new Error(message || `请求失败（HTTP ${res.status}）`), { status: res.status, body })
  }
  return body as T
}

function jsonBody(body: unknown): RequestInit {
  return { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }
}

export const getConfig = () => request<ImagoraConfig>('config')
export const getHealth = () => request<{ ok: boolean; config: ImagoraConfig }>('health')
export const listAssets = () => request<{ images: AssetEntry[] }>('assets')

export const uploadImage = async (file: File | Blob, name: string) => {
  const res = await fetch(`imagora/upload?name=${encodeURIComponent(name)}`, { method: 'POST', body: file })
  const text = await res.text()
  const body = text ? JSON.parse(text) : {}
  if (!res.ok) throw new Error(body.error || `上传失败（HTTP ${res.status}）`)
  return body.image as AssetEntry
}

export const deleteAsset = (id: string) => request<{ ok: boolean }>('asset/delete', jsonBody({ id }))

/* ---------------- 生成历史（读账本 logs/generation.jsonl，不是资产注册表） ----------------
 *
 * 「先有账本还是先有图」决定了这条链路为什么要单独一套接口：注册表一条 = 一个存在的
 * 图片文件（没有提示词/成本/耗时），账本一条 = 一次生成尝试（含失败，带提示词）。
 * 历史列表要显示提示词与参考图，只能走账本。
 *
 * host 侧语义逐条照原版 core/history.py（聚合去重 + 空白折叠搜索 + 聚合后分页），
 * 所以这里只管拼参数与翻页。 */

export interface HistoryInputRef {
  id: string
  path: string
  url: string
}

export interface GenerationHistoryItem {
  time: string
  mode: string
  refs: number
  prompt: string
  size: string
  quality: string
  status: string
  cost: number
  seconds: number
  /** 账本里记的原始输出路径（可能是别的机器/别的目录，仅作展示与「打开目录」用） */
  output: string
  /** 图还在不在（按注册表副本判定，回退路径） */
  exists: boolean
  /** 解析出的本机绝对路径；不存在时为空 */
  path: string
  /** 可直接 <img src> 的地址；不存在或路径不在放行范围时为空 */
  url: string
  /** 有资产副本时的注册表 id：画布节点只存 registryId，没有它就建不了档 */
  assetId: string
  inputRefs: HistoryInputRef[]
  /** 声明了参考图却一张都找不回（只能提示，无法重跑） */
  inputRefMissing: boolean
}

export interface HistoryPage {
  /** `ledger` = 读到账本；`none` = 没设 imagora 目录或原版还没生成过图 */
  source: 'ledger' | 'none'
  ledgerPath: string
  items: GenerationHistoryItem[]
  total: number
  hasMore: boolean
}

export interface HistoryStats {
  total: number
  ok: number
  error: number
  successRate: number
  cost: number
  seconds: number
  avgSeconds: number
  todayCost: number
  byDay: { date: string; count: number; ok: number; error: number; cost: number }[]
  bySize: { size: string; count: number; cost: number }[]
  byMode: { mode: string; count: number; cost: number }[]
  budget: { limit: number; spentToday: number; remaining: number }
  /** 本机预算设置（.budget.json）：每日 / 单次上限，0 = 不限 */
  localBudget?: LocalBudgetView
}

export const generationHistory = (input: { limit?: number; offset?: number; query?: string; status?: string } = {}) => {
  const params = new URLSearchParams()
  params.set('limit', String(input.limit ?? 60))
  params.set('offset', String(input.offset ?? 0))
  if (input.query) params.set('query', input.query)
  if (input.status) params.set('status', input.status)
  return request<HistoryPage>(`history?${params.toString()}`)
}

export const generationStats = (days = 14) => request<HistoryStats>(`history/stats?days=${days}`)

export interface SubmitInput {
  prompt: string
  size: string
  quality: string
  refIds: string[]
  outputDir?: string
  /** 本画布当前已花多少（元）：host 用它判断是否撞到预算上限 */
  spent?: number
  /** 蒙版 data URL：透明像素 = 要重绘的区域；空串表示不带 */
  mask?: string
  /** 本次提交预估张数（默认 1）：host 用它算单次预估费用判超限 */
  count?: number
  /** 用户已确认「知道超了仍然要跑」：带上它 host 才放行（原版 allow_over_budget） */
  allowOverBudget?: boolean
}

export const submitGenerate = (input: SubmitInput) =>
  request<{ taskId: string; status: string }>('generate', jsonBody(input))

export const fetchTask = (id: string) => request<TaskSnapshot>(`task?id=${encodeURIComponent(id)}`)
export const cancelTask = (id: string) => request<{ ok: boolean; status: string }>('task/cancel', jsonBody({ id }))

export const saveWorkflow = (name: string, nodes: WorkflowNode[], edges: WorkflowEdge[]) =>
  request<{ ok: boolean; name: string }>('workflow/save', jsonBody({ name, nodes, edges }))

export const listWorkflows = () => request<{ workflows: { name: string; modified: string }[] }>('workflow/list')

export const loadWorkflow = (name: string) =>
  request<{ name: string; nodes: WorkflowNode[]; edges: WorkflowEdge[]; missing: string[] }>(
    `workflow/load?name=${encodeURIComponent(name)}`,
  )

export const saveRecovery = (nodes: WorkflowNode[], edges: WorkflowEdge[]) =>
  request<{ ok: boolean; name: string; savedAt: string }>('recovery/save', jsonBody({ nodes, edges }))

export const latestRecovery = () =>
  request<{
    ok: boolean
    empty?: boolean
    name?: string
    savedAt?: string
    nodes?: WorkflowNode[]
    edges?: WorkflowEdge[]
  }>('recovery/latest')

export const setModel = (model: string) => request<ImagoraConfig>('settings', jsonBody({ model }))
export const setProfile = (profile: string) => request<ImagoraConfig>('settings', jsonBody({ profile }))
/** 默认输出路径：传空串 = 回到来源根目录下的 output。 */
export const setOutputDir = (outputDir: string) => request<ImagoraConfig>('settings', jsonBody({ outputDir }))

/** 预算上限（元）：0 = 不设上限。 */
export const setBudget = (budget: number) => request<ImagoraConfig>('settings', jsonBody({ budget }))

/** Imagora 目录：读它的 config.json / .env / 工作流 / 图片注册表；空串 = 不用共享。 */
export const setImagoraRoot = (imagoraRoot: string) => request<ImagoraConfig>('settings', jsonBody({ imagoraRoot }))

/**
 * 弹宿主机的系统文件夹对话框，返回绝对路径。
 * 浏览器侧 `<input webkitdirectory>` 只给相对名，拿不到绝对路径，所以只能由宿主来弹。
 */
export const pickFolder = (input: { title?: string; startAt?: string } = {}) =>
  request<{ ok: boolean; path?: string; reason?: string }>('pick-folder', jsonBody(input))
export const revealPath = (path: string) => request<{ ok: boolean }>('reveal', jsonBody({ path }))

export interface ProviderPatch {
  baseUrl?: string
  model?: string
  apiKey?: string
  clearApiKey?: boolean
  reset?: boolean
  qualities?: string[]
  sizes?: { value: string; label?: string; cost?: number }[]
}

/** 写插件自带的接口配置；空字符串字段表示不修改。 */
export const saveProvider = (patch: ProviderPatch) => request<ImagoraConfig>('provider', jsonBody(patch))

/** 试连通：只读上游模型清单，不生成图、不花钱。 */
export const probeProvider = (input: { baseUrl?: string; apiKey?: string }) =>
  request<{ ok: boolean; models: string[]; error?: string }>('provider/probe', jsonBody(input))

/* ---------------- 本机预算设置（<输出目录>/.budget.json） ----------------
 *
 * 与原版 core/cost.py 同一份文件、同一套语义：**超限需确认**，不是硬拦。
 * 与 setBudget（settings.budget，本画布累计上限、硬拦）是两件事：
 * 那个管「这个画布别超支」，这个管「今天整体 / 单次别超支」。 */
export interface LocalBudget {
  dailyLimit: number
  singleRunLimit: number
}

export interface LocalBudgetView extends LocalBudget {
  /** 今天还剩多少额度（dailyLimit = 0 时为 0，表示不设限） */
  remainingToday?: number
  /** 实际读写的文件路径：看到它就知道「我改的是哪一份」 */
  path?: string
}

export const getBudget = () => request<LocalBudgetView>('budget')
export const saveBudget = (settings: LocalBudget) =>
  request<{ ok: boolean } & LocalBudget>('budget', jsonBody(settings))
