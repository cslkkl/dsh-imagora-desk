// 请求体组装：产品基线 + 渠道字段 + 模型字段。
//
// **与 Imagora 的 `core/payload.py` 逐条同语义**。两边各有一份，是因为宿主语言不同
// （Python / JS），没有共享代码的途径；但规则、顺序、报错文案、notes 标注都对齐，
// 并且有同名用例锁住（见 scripts/smoke-host.mjs 的 payload 段）。
// 改这里必须同时改那边 —— 判据是 tests/test_core_payload.py 与冒烟里同一组断言。
//
// ## 为什么需要这一层（照抄上游的推理，别删）
//
// 上游差异分两堆，出处不同：
//   - **服务器 / 渠道差异**：同一台服务器换个模型也不变（`response_format` 决定
//     「图以什么形式回来」，同一模型的另一家网关可能就不认）。
//   - **模型能力差异**：换服务器不变、换模型就变（某模型要显式 `background:
//     transparent` 才出透明底，另一个只靠提示词就会）。
//
// 判据：换模型不换服务器还成立 → `transport.request`；换服务器不换模型还成立 →
// `models[].params`。
//
// 实证（2026-11-18，chatgpt2api + gpt-image-2.6，同一句提示词）：
//   含 output_format        → url → JPEG/RGB（黑底）
//   去掉 output_format      → url → JPEG/RGB
//   再加 stream:true        → SSE 里仍是 url → JPEG/RGB
//   只加 response_format    → **PNG/RGBA，alpha 0–255**（且更快：44.4s vs 49.0s）
//
// ## 三条规则（顺序不可换）
//   1. 基线：调用方给的那份字典
//   2. 摘除：`transport.drop` 只从**基线**里摘（唯一能删基线的手段）
//   3. 覆盖：先渠道字段、后模型字段（同键后者胜）
//
// ## 失败策略：坏配置只降级，不抛异常
// `normalize*` 返回 { value, problems }；配置写错时调用方丢弃该块并打日志，
// payload 回落到「今天的行为」——最坏是不生效，而不是出图直接失败。

/** 产品语义字段：由应用决定，配置不许改写（否则界面上显示的和发出去的不是一回事） */
export const PROTECTED_KEYS = new Set(['model', 'prompt', 'size', 'quality', 'n', 'images', 'mask'])

/** 会改变「发给谁、带什么凭证」的键：配置只能改请求体 */
export const FORBIDDEN_KEYS = new Set([
  'url',
  'uri',
  'host',
  'base_url',
  'endpoint',
  'authorization',
  'auth',
  'headers',
  'header',
  'api_key',
  'apikey',
  'key',
  'token',
  'cookie',
])

const KEY_RE = /^[A-Za-z0-9_.-]{1,40}$/

function isScalar(value) {
  return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || value === null
}

function valueOk(value) {
  if (isScalar(value)) return true
  return Array.isArray(value) && value.every(isScalar)
}

/** 检查一个字段块，返回人话问题列表（空数组 = 合法）。 */
export function checkBlock(raw, where) {
  if (raw === undefined || raw === null) return []
  if (typeof raw !== 'object' || Array.isArray(raw)) return [`${where} 必须是对象`]
  const problems = []
  for (const [key, value] of Object.entries(raw)) {
    if (!KEY_RE.test(key)) {
      problems.push(`${where} 的键名 ${JSON.stringify(key)} 非法（只允许字母数字与 _ . -，1~40 字符）`)
      continue
    }
    if (FORBIDDEN_KEYS.has(key.toLowerCase())) {
      problems.push(`${where}.${key} 不允许配置：配置只能改请求体字段，不能改目标地址或凭证`)
    }
    if (PROTECTED_KEYS.has(key)) {
      problems.push(`${where}.${key} 是产品语义字段，不能由配置覆盖（若该渠道不接受它，用 transport.drop 摘掉）`)
    }
    if (!valueOk(value)) {
      problems.push(`${where}.${key} 的值类型不受支持（只允许字符串/数字/布尔/null，或它们的数组）`)
    }
  }
  return problems
}

/** 归一化 profile 的 transport；有任何问题就整体丢弃（半截生效比不生效更难查）。 */
export function normalizeTransport(raw) {
  const empty = { request: {}, drop: [] }
  if (raw === undefined || raw === null) return { value: empty, problems: [] }
  if (typeof raw !== 'object' || Array.isArray(raw)) {
    return { value: empty, problems: [`transport 必须是对象；已忽略`] }
  }

  const problems = []
  for (const key of Object.keys(raw).sort()) {
    if (key !== 'request' && key !== 'drop') {
      problems.push(`transport.${key} 不是已知字段（只认 request / drop）；已忽略该键`)
    }
  }

  const request = raw.request || {}
  problems.push(...checkBlock(request, 'transport.request'))

  const drop = []
  const dropRaw = raw.drop || []
  if (!Array.isArray(dropRaw)) {
    problems.push('transport.drop 必须是字符串数组；已忽略')
  } else {
    for (const item of dropRaw) {
      if (typeof item === 'string' && KEY_RE.test(item)) drop.push(item)
      else problems.push(`transport.drop 里的 ${JSON.stringify(item)} 不是合法键名；已忽略`)
    }
  }

  if (problems.length) return { value: empty, problems }
  return { value: { request: { ...request }, drop }, problems: [] }
}

/** 归一化单个模型的 params；坏块整体丢弃。 */
export function normalizeModelParams(raw) {
  if (raw === undefined || raw === null) return { value: {}, problems: [] }
  const problems = checkBlock(raw, 'models[].params')
  if (problems.length) return { value: {}, problems }
  return { value: { ...raw }, problems: [] }
}

/**
 * 这个字段最终会不会进请求体（基线里有、且没被 `drop` 摘掉）。
 *
 * 界面拿它当**唯一判据**决定「这个控件该不该出现」：上游不认的字段，显示出来
 * 就是个骗人的选项 —— 用户调了没反应，还以为是自己没调对。与 Imagora 的
 * `core/payload.py::sends` 同语义。
 *
 * 为什么不按模型名/域名猜：那是写死。同一台网关换个模型、同一个模型换台网关，
 * 结论就变了；而这里问的是「我们实际发了什么」，换谁都不会答错。
 * 渠道不认某个字段，就把它写进 `transport.drop`。
 */
export function sends(transport, key) {
  return !((transport || {}).drop || []).includes(key)
}

/**
 * 拼出最终请求体。
 * @returns {{ payload: object, notes: string[] }} notes 标出来源：drop/channel/model/passthrough
 */
export function buildPayload(base, transport, modelParams) {
  const block = transport || {}
  const request = block.request || {}
  const drop = block.drop || []
  const params = modelParams || {}

  const dropped = drop.filter(key => key in base)
  const payload = {}
  for (const [key, value] of Object.entries(base)) {
    if (!drop.includes(key)) payload[key] = value
  }
  Object.assign(payload, request, params)

  const notes = [
    ...dropped.map(key => `drop:${key}`),
    ...Object.keys(request).map(key => `channel:${key}`),
    ...Object.keys(params).map(key => `model:${key}`),
  ]
  const known = new Set([...PROTECTED_KEYS, ...Object.keys(base), ...Object.keys(request), ...Object.keys(params)])
  for (const key of Object.keys(payload)) {
    if (!known.has(key)) notes.push(`passthrough:${key}`)
  }
  return { payload, notes }
}
