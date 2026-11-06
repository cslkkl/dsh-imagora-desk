// 读取 Imagora 自己的 config.json / providers.local.json / .env，解析出当前生效的
// 中转站、模型、尺寸与价目表。插件不复制一份配置：改了 imagora 的配置，画布跟着变。
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { dirname, join, resolve } from 'node:path'

/** 模型 ID 里的全角连字符（U+2011/U+2010）与半角 '-' 肉眼一样，中转站两种都在用。 */
export function foldId(text) {
  return String(text || '').replace(/[\u2010\u2011\u2012\u2013\u2014\u2212]/g, '-')
}

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
    writeFileSync(join(root, 'settings.json'), JSON.stringify(next, null, 2), 'utf8')
  } catch {
    // 写不进去也要让本次会话用上新值，只是下次启动会丢
  }
  return next
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

/** 解析一次 imagora 配置。任何字段缺失都回退到内置默认，不让画布因为配置不全而打不开。 */
export function loadImagoraConfig(settings) {
  const root = locateImagoraRoot(settings)
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
  if (!cfg.profiles) issues.push('没读到 imagora 的 config.json（可在插件设置里指定目录）')
  if (!apiKey) issues.push(`当前 profile「${profileName || '未命名'}」没有配置密钥`)
  if (!modelId) issues.push('当前 profile 没有默认模型')

  return {
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
  }
}

export function costOfSize(config, size) {
  const row = config.sizes.find(option => option.value === size)
  return row ? row.cost : 0
}

export { dirname, join }
