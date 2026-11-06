// 配置来源有两层：
//   1. 插件自带的 provider（settings.json 里的 provider）——填了 baseUrl + key 就能用，
//      不要求本机装过 Imagora，这是「下载后填 key 即可用」的那条路。
//   2. 本机 Imagora 的 config.json / providers.local.json / .env——没自带配置时的兜底，
//      沿用它的来源、模型、尺寸与价目。
// 自带 provider 优先级更高：用户在插件里明确填过，就该生效。
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { dirname, join, resolve } from 'node:path'

/** 模型 ID 里的全角连字符（U+2011/U+2010）与半角 '-' 肉眼一样，中转站两种都在用。 */
export function foldId(text) {
  return String(text || '').replace(/[\u2010\u2011\u2012\u2013\u2014\u2212]/g, '-')
}

/** 自带 provider 没给尺寸时的默认档位：覆盖常见 1:1 / 横 / 竖。 */
const FALLBACK_SIZES = [
  { value: '1024x1024', label: '1024x1024 (1:1)', cost: 0 },
  { value: '1536x1024', label: '1536x1024 (3:2 横版)', cost: 0 },
  { value: '1024x1536', label: '1024x1536 (2:3 竖版)', cost: 0 },
]

const FALLBACK_QUALITIES = ['low', 'medium', 'high']

function parseEnv(text) {
  const out = {}
  for (const raw of String(text || '').split(/\r?\n/)) {
    const line = raw.trim()
    if (!line || line.startsWith('#')) continue
    const at = line.indexOf('=')
    if (at < 0) continue
    const key = line.slice(0, at).trim()
    let value = line.slice(at + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (key) out[key] = value
  }
  return out
}

function readJson(file) {
  try {
    return JSON.parse(readFileSync(file, 'utf8'))
  } catch {
    return null
  }
}

/** 插件自己的设置（模型选择、imagora 目录），与 imagora 的配置互不覆盖。 */
export function readSettings(root) {
  const data = readJson(join(root, 'settings.json'))
  return data && typeof data === 'object' ? data : {}
}

export function writeSettings(root, patch) {
  const next = { ...readSettings(root), ...patch }
  try {
    mkdirSync(root, { recursive: true })
    const file = join(root, 'settings.json')
    // 里面有明文密钥：只给当前用户读
    writeFileSync(file, JSON.stringify(next, null, 2), { encoding: 'utf8', mode: 0o600 })
  } catch {
    // 写不进去也要让本次会话用上新值，只是下次启动会丢
  }
  return next
}

/** 归一化自带 provider：去掉空串与首尾空白，URL 去尾斜杠。 */
function normalizeProvider(raw) {
  if (!raw || typeof raw !== 'object') return null
  const text = value => (typeof value === 'string' ? value.trim() : '')
  const baseUrl = text(raw.baseUrl).replace(/\/+$/, '')
  const provider = {
    baseUrl,
    apiKey: text(raw.apiKey),
    model: text(raw.model),
    qualities: Array.isArray(raw.qualities) && raw.qualities.length ? raw.qualities.map(String) : [],
    sizes: Array.isArray(raw.sizes)
      ? raw.sizes
          .filter(row => row && typeof row.value === 'string' && row.value.trim())
          .map(row => ({
            value: row.value.trim(),
            label: text(row.label) || row.value.trim(),
            cost: Number(row.cost) || 0,
          }))
      : [],
  }
  // 没地址就没有 provider：其余字段单独存在没有意义
  return provider.baseUrl ? provider : null
}

/** 自带 provider 生效时用它解析，不看本机 Imagora。 */
function resolveFromProvider(provider, settings, root) {
  const modelId = provider.model || String(settings?.model || '').trim()
  const sizes = provider.sizes.length ? provider.sizes : FALLBACK_SIZES
  const qualities = provider.qualities.length ? provider.qualities : FALLBACK_QUALITIES
  const issues = []
  if (!provider.apiKey) issues.push('还没填 API Key：点右上角「设置」填一次即可')
  if (!modelId) issues.push('还没填模型名：点右上角「设置」填一次即可')

  return {
    source: 'plugin',
    root,
    profile: 'plugin',
    profileLabel: '插件内配置',
    profiles: [],
    baseUrl: provider.baseUrl,
    apiPaths: { generations: '/v1/images/generations', edits: '/v1/images/edits' },
    apiKey: provider.apiKey,
    model: modelId,
    modelLabel: modelId,
    models: modelId ? [{ id: modelId, label: modelId, note: '' }] : [],
    sizes,
    qualities,
    qualityEffective: qualities.length > 1,
    outputFormats: ['png', 'jpeg', 'webp'],
    defaultOutputDir: join(root || homedir(), 'output'),
    issues,
    providerView: providerView({ provider }),
  }
}

/** 候选 imagora 目录：设置 > 环境变量 > 桌面默认位置。 */
export function locateImagoraRoot(settings) {
  const candidates = []
  if (settings?.imagoraRoot) candidates.push(settings.imagoraRoot)
  if (process.env.DSH_IMAGORA_ROOT) candidates.push(process.env.DSH_IMAGORA_ROOT)
  candidates.push(join(homedir(), 'Desktop', 'imagora', 'imagora'))
  candidates.push(join(homedir(), 'Desktop', 'imagora'))
  for (const candidate of candidates) {
    if (candidate && existsSync(join(candidate, 'config.json'))) return resolve(candidate)
  }
  return candidates[0] ? resolve(candidates[0]) : ''
}

/** 解析一次配置。自带 provider 优先；否则回退到本机 Imagora。 */
export function loadImagoraConfig(settings) {
  const root = locateImagoraRoot(settings)
  const provider = normalizeProvider(settings?.provider)
  if (provider) return resolveFromProvider(provider, settings, root)

  const configPath = root ? join(root, 'config.json') : ''
  const cfg = (configPath && readJson(configPath)) || {}
  const local = (root && readJson(join(root, 'providers.local.json'))) || {}
  const envFile = (root && readJson(join(root, '.env'))) || null
  const envPath = root ? join(root, '.env') : ''
  const env = existsSync(envPath) ? { ...parseEnv(readFileSync(envPath, 'utf8')), ...process.env } : { ...process.env }
  void envFile

  const profiles = { ...(cfg.profiles || {}), ...(local.profiles || {}) }
  const envProfile = String(env.ACTIVE_PROFILE || '').trim()
  const profileName = String(settings?.profile || envProfile || cfg.default_profile || '').trim()
  const profile = profiles[profileName] || {}

  const apiKey = env[`API_KEY_${profileName.toUpperCase()}`] || env.API_KEY || env.AIWANWU_API_KEY || ''
  const baseUrl = String(env[`BASE_URL_${profileName.toUpperCase()}`] || profile.base_url || '')
  const apiPaths = {
    generations:
      env[`PATH_GENERATIONS_${profileName.toUpperCase()}`] ||
      profile.api_paths?.generations ||
      '/v1/images/generations',
    edits: env[`PATH_EDITS_${profileName.toUpperCase()}`] || profile.api_paths?.edits || '/v1/images/edits',
  }

  const models = Array.isArray(profile.models) ? profile.models.filter(row => row && row.id) : []
  const modelOverride = settings?.model ? String(settings.model) : ''
  const fileModel = env[`MODEL_${profileName.toUpperCase()}`] || ''
  const wanted = modelOverride || fileModel || profile.default_model || models[0]?.id || ''

  let modelId = wanted
  let model = models.find(row => row.id === wanted)
  if (!model) {
    const folded = foldId(wanted)
    model = models.find(row => foldId(row.id) === folded)
    if (model) modelId = model.id
  }

  const sizeOptions = model?.size_options?.length ? model.size_options : profile.size_options || []
  const qualities = model?.quality_options?.length
    ? model.quality_options
    : profile.quality_options || ['low', 'medium', 'high']

  const defaultOutputDir = join(root || homedir(), 'output')
  const issues = []
  if (!cfg.profiles) issues.push('没读到 imagora 的 config.json（也没在插件里填过接口地址）')
  if (!apiKey) issues.push(`当前 profile「${profileName || '未命名'}」没有配置密钥`)
  if (!modelId) issues.push('当前 profile 没有默认模型')

  return {
    source: 'imagora',
    root,
    profile: profileName,
    profileLabel: profile.label || profileName,
    profiles: Object.entries(profiles).map(([name, row]) => ({ name, label: row?.label || name })),
    baseUrl,
    apiPaths,
    apiKey,
    model: modelId,
    modelLabel: model?.label || modelId,
    models: models.map(row => ({ id: row.id, label: row.label || row.id, note: row.note || '' })),
    sizes: sizeOptions.map(row => ({ value: row.value, label: row.label || row.value, cost: Number(row.cost) || 0 })),
    qualities,
    qualityEffective: qualities.length > 1,
    outputFormats: model?.output_formats || ['png'],
    defaultOutputDir,
    issues,
    providerView: providerView(settings),
  }
}

export function costOfSize(config, size) {
  const row = config.sizes.find(option => option.value === size)
  return row ? row.cost : 0
}

/** 读回给前端的 provider 视图：密钥只报「有没有」，永不回传明文。 */
export function providerView(settings) {
  const provider = normalizeProvider(settings?.provider) || {}
  return {
    baseUrl: provider.baseUrl || '',
    model: provider.model || String(settings?.model || ''),
    qualities: provider.qualities || [],
    sizes: provider.sizes || [],
    apiKeyConfigured: Boolean(provider.apiKey),
  }
}

/**
 * 写 provider。空字符串字段表示「不修改」，`clearApiKey` 显式清空密钥。
 * 只接受 JSON 能表达的值，避免把函数之类的东西写进设置文件。
 */
export function applyProviderPatch(settings, patch) {
  const current = normalizeProvider(settings?.provider) || {
    baseUrl: '',
    apiKey: '',
    model: '',
    qualities: [],
    sizes: [],
  }
  const text = value => (typeof value === 'string' ? value.trim() : '')
  const next = { ...current }

  if (typeof patch.baseUrl === 'string' && patch.baseUrl.trim()) {
    next.baseUrl = patch.baseUrl.trim().replace(/\/+$/, '')
  }
  if (typeof patch.model === 'string' && patch.model.trim()) next.model = patch.model.trim()
  if (typeof patch.apiKey === 'string' && patch.apiKey.trim()) next.apiKey = patch.apiKey.trim()
  if (patch.clearApiKey === true) next.apiKey = ''
  if (Array.isArray(patch.qualities)) next.qualities = patch.qualities.map(String).filter(Boolean)
  if (Array.isArray(patch.sizes)) {
    next.sizes = patch.sizes
      .filter(row => row && typeof row.value === 'string' && row.value.trim())
      .map(row => ({
        value: String(row.value).trim(),
        label: text(row.label) || String(row.value).trim(),
        cost: Number(row.cost) || 0,
      }))
  }
  if (patch.reset === true) {
    return {
      baseUrl: '',
      apiKey: '',
      model: '',
      qualities: [],
      sizes: [],
    }
  }
  return next
}

export { dirname, join }
