// /imagora/* 的浏览器侧封装。host 半片已做鉴权，这里只负责把回答变成对象。
import type { WorkflowEdge, WorkflowNode } from './lib/types'

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
  issues: string[]
}

export interface AssetEntry {
  id: string
  name: string
  size: number
  ext: string
  url: string
  absPath: string
  createdAt?: string
}

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
    throw Object.assign(new Error(message || `请求失败（HTTP ${res.status}）`), { status: res.status })
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

export interface SubmitInput {
  prompt: string
  size: string
  quality: string
  refIds: string[]
  outputDir?: string
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
