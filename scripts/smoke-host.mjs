// 本地冒烟：用假的 Cordis 上下文挂起 host 半片，再用真实 HTTP 打一遍接口。
// 不提交真实生图任务（不花钱），只验证配置解析、上传、文件服务、错误分支与工作流落盘。
import { createHash } from 'node:crypto'
import { createServer } from 'node:http'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { resolveApiPaths } from '../src/host/config.js'

// 用临时目录跑：不往真实画布目录里塞测试资产与恢复快照
const SANDBOX = mkdtempSync(join(tmpdir(), 'dsh-imagora-smoke-'))
process.env.DSH_IMAGORA_HOME = SANDBOX

// 造一份最小的 imagora 配置，让冒烟在任何机器（含 CI）上都能自证配置解析。
// 真实机器上 DSH_IMAGORA_ROOT 存在时不覆盖，改为校验真实配置。
const FIXTURE_ROOT = mkdtempSync(join(tmpdir(), 'imagora-fixture-'))
if (!process.env.DSH_IMAGORA_ROOT) {
  writeFileSync(
    join(FIXTURE_ROOT, 'config.json'),
    JSON.stringify(
      {
        default_profile: 'fixture',
        profiles: {
          fixture: {
            label: '冒烟来源',
            base_url: 'https://example.invalid/api/v3',
            api_paths: { generations: '/images/generations', edits: '/images/generations' },
            default_model: 'fixture-model',
            default_quality: 'high',
            quality_options: ['low', 'high'],
            models: [
              {
                id: 'fixture-model',
                label: 'Fixture Model',
                size_options: [{ value: '1024x1024', label: '1024x1024 (1:1 1K)', cost: 0.1 }],
              },
            ],
          },
        },
      },
      null,
      2,
    ),
  )
  writeFileSync(join(FIXTURE_ROOT, '.env'), 'API_KEY_FIXTURE=sk-smoke\nACTIVE_PROFILE=fixture\n')
  process.env.DSH_IMAGORA_ROOT = FIXTURE_ROOT
}

const plugin = await import(new URL('../src/host/index.js', import.meta.url).href)

let handler = null
const ctx = {
  get(name) {
    if (name === 'connection') return { requestRejection: () => undefined }
    return undefined
  },
  effect(fn) {
    fn()
  },
  webServer: {
    register(options) {
      handler = options.handler
      return () => {
        handler = null
      }
    },
  },
  logger: { warn: line => console.warn('[host]', line) },
}

plugin.default.apply(ctx)
if (!handler) throw new Error('host 半片没有注册 /imagora 路由')

const server = createServer((req, res) => {
  handler(req, res).catch(error => {
    res.statusCode = 500
    res.end(JSON.stringify({ error: error.message }))
  })
})
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
const port = server.address().port
const base = `http://127.0.0.1:${port}/imagora`

const results = []
const check = (name, ok, detail = '') => {
  results.push({ name, ok, detail })
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? `  ${detail}` : ''}`)
}

// 1x1 PNG
const PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
  'base64',
)

try {
  const config = await fetch(`${base}/config`).then(res => res.json())
  check('GET /config 返回 profile', Boolean(config.profile), `profile=${config.profile} model=${config.model}`)
  check('GET /config 带尺寸表', Array.isArray(config.sizes) && config.sizes.length > 0, `${config.sizes?.length} 档`)
  check('GET /config 读到了 imagora 目录', Boolean(config.root && existsSync(config.root)), config.root)
  check(
    'GET /config 解析出模型与质量档',
    Boolean(config.model) && Array.isArray(config.qualities),
    `${config.model} / ${config.qualities}`,
  )

  const health = await fetch(`${base}/health`).then(res => res.json())
  check(
    'GET /health 有 issues 字段',
    Array.isArray(health.config?.issues),
    JSON.stringify(health.config?.issues ?? health),
  )

  const upload = await fetch(`${base}/upload?name=smoke.png`, { method: 'POST', body: PNG }).then(res => res.json())
  check('POST /upload 登记资产', Boolean(upload.image?.id), upload.image?.id ?? JSON.stringify(upload))

  const listed = await fetch(`${base}/assets`).then(res => res.json())
  check(
    'GET /assets 列出刚上传的图',
    listed.images.some(row => row.id === upload.image.id),
  )

  const file = await fetch(`${base}/file?id=${upload.image.id}`)
  const bytes = Buffer.from(await file.arrayBuffer())
  check(
    'GET /file 返回原字节',
    file.ok && bytes.equals(PNG),
    `${bytes.length} bytes ${file.headers.get('content-type')}`,
  )

  const missing = await fetch(`${base}/file?id=does-not-exist`)
  check('GET /file 未知 id 返回 404', missing.status === 404)

  const badGenerate = await fetch(`${base}/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ prompt: '   ' }),
  })
  check('POST /generate 空提示词返回 400', badGenerate.status === 400)

  const save = await fetch(`${base}/workflow/save`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      name: 'smoke-test',
      nodes: [
        {
          id: `img-${upload.image.id}`,
          type: 'image',
          position: { x: 10, y: 20 },
          data: {
            registryId: upload.image.id,
            name: 'smoke.png',
            size: PNG.length,
            ext: 'png',
            url: upload.image.url,
            absPath: upload.image.absPath,
            refCount: 0,
          },
        },
      ],
      edges: [],
    }),
  }).then(res => res.json())
  check('POST /workflow/save 落盘', save.ok === true, save.name)

  const load = await fetch(`${base}/workflow/load?name=smoke-test`).then(res => res.json())
  check(
    'GET /workflow/load 读回并补 url',
    load.nodes?.[0]?.data?.url === upload.image.url,
    JSON.stringify(load.missing ?? []),
  )

  const lists = await fetch(`${base}/workflow/list`).then(res => res.json())
  check(
    'GET /workflow/list 含刚保存的',
    lists.workflows.some(row => row.name === 'smoke-test'),
  )

  const recovery = await fetch(`${base}/recovery/save`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ nodes: load.nodes, edges: [] }),
  }).then(res => res.json())
  check('POST /recovery/save 落盘', recovery.ok === true, recovery.name)

  const latest = await fetch(`${base}/recovery/latest`).then(res => res.json())
  check('GET /recovery/latest 有快照', latest.ok === true && Array.isArray(latest.nodes) && latest.nodes.length > 0)

  const unknown = await fetch(`${base}/nope`)
  check('未知路径返回 404', unknown.status === 404)
  await fetch(`${base}/asset/delete`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ id: upload.image.id }),
  })
  const after = await fetch(`${base}/assets`).then(res => res.json())
  check('POST /asset/delete 清掉资产', !after.images.some(row => row.id === upload.image.id))

  // 生成的接口形状检查（不发真实请求，只看 tasks 池的取消分支）
  const cancel = await fetch(`${base}/task/cancel`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ id: 'not-a-task' }),
  }).then(res => res.json())
  check('POST /task/cancel 未知任务返回 ok:false', cancel.ok === false)

  // 未知任务查快照必须 404，不能编一个空快照出来
  const missingTask = await fetch(`${base}/task?id=nope`)
  check('GET /task 未知 id 返回 404', missingTask.status === 404)

  // 越权路径：/file 只放行 assets 与 output，其余一律 403/404
  const escape = await fetch(`${base}/file?id=../../package.json`)
  check('GET /file 路径穿越被拒', escape.status === 403 || escape.status === 404, String(escape.status))

  // 切来源要能落到磁盘并被下一次读取采纳
  const switched = await fetch(`${base}/settings`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ profile: 'fixture' }),
  }).then(res => res.json())
  check('POST /settings 回写配置', switched.profile === 'fixture', switched.profile)
  const restored = await fetch(`${base}/settings`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ profile: '' }),
  }).then(res => res.json())
  check('POST /settings 空 profile 回到跟随 .env', restored.profile === 'fixture', restored.profile)

  // 自带 provider：填地址 + 密钥后，配置来源切换为插件内配置，且密钥不回传明文
  const withProvider = await fetch(`${base}/provider`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ baseUrl: 'https://example.invalid/v1/', apiKey: 'sk-smoke-secret', model: 'demo-model' }),
  }).then(res => res.json())
  check('POST /provider 切到插件内配置', withProvider.source === 'plugin', withProvider.source)
  // 地址已含版本段时不能再补 /v1：否则拼出 .../api/v3/v1/images/generations（真实 404）
  const versioned = resolveApiPaths('https://ark.cn-beijing.volces.com/api/v3')
  check('地址含版本段时路径不重复加 v1', versioned.generations === '/images/generations', versioned.generations)
  const bare = resolveApiPaths('https://api.example.com')
  check('地址无版本段时补 /v1', bare.generations === '/v1/images/generations', bare.generations)
  check('POST /provider 去尾斜杠并生效', withProvider.provider?.baseUrl === 'https://example.invalid/v1')
  check('POST /provider 密钥只报已配置', withProvider.provider?.apiKeyConfigured === true)
  check('POST /provider 响应不含密钥明文', !JSON.stringify(withProvider).includes('sk-smoke-secret'))
  check(
    'POST /provider 后不再报缺少密钥',
    !withProvider.issues.some(row => row.includes('API Key')),
    JSON.stringify(withProvider.issues),
  )

  const cleared = await fetch(`${base}/provider`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ clearApiKey: true }),
  }).then(res => res.json())
  check('POST /provider clearApiKey 清掉密钥', cleared.provider?.apiKeyConfigured === false)

  const reset = await fetch(`${base}/provider`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ reset: true }),
  }).then(res => res.json())
  check('POST /provider reset 回到 imagora 配置', reset.source === 'imagora', reset.source)

  // 默认输出路径：填了就生效，清空就回落到 <数据目录>/output
  const customOut = join(SANDBOX, 'my-output')
  const withOut = await fetch(`${base}/settings`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ outputDir: customOut }),
  }).then(res => res.json())
  check('POST /settings 默认输出路径生效', withOut.defaultOutputDir === customOut, withOut.defaultOutputDir)

  const resetOut = await fetch(`${base}/settings`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ outputDir: '' }),
  }).then(res => res.json())
  // 回落的落点是「配置来源的根目录」，冒烟里是 fixture 的 imagora 根
  check(
    'POST /settings 清空输出路径回到来源根目录',
    resetOut.defaultOutputDir === join(FIXTURE_ROOT, 'output'),
    resetOut.defaultOutputDir,
  )

  const probeMissing = await fetch(`${base}/provider/probe`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ baseUrl: '' }),
  })
  check('POST /provider/probe 缺地址返回 400', probeMissing.status === 400)

  // 预算：设了上限后，超额的提交必须被拦（409），否则等于「钱已经花了才发现」
  const withBudget = await fetch(`${base}/settings`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ budget: 1.5 }),
  }).then(res => res.json())
  check('POST /settings 预算上限生效', withBudget.budget === 1.5, String(withBudget.budget))

  const blocked = await fetch(`${base}/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ prompt: 'smoke', size: '1024x1024', spent: 1.5 }),
  })
  check('POST /generate 达预算返回 409', blocked.status === 409, String(blocked.status))
  const blockedBody = await blocked.json()
  check('POST /generate 达预算带出上限与已花', blockedBody.budget === 1.5 && blockedBody.spent === 1.5)

  const notBlocked = await fetch(`${base}/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ prompt: 'smoke', size: '1024x1024', spent: 0.5 }),
  })
  check('POST /generate 未达预算仍可提交', notBlocked.status === 200, String(notBlocked.status))

  const clearBudget = await fetch(`${base}/settings`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ budget: 0 }),
  }).then(res => res.json())
  check('POST /settings 0 表示不设上限', clearBudget.budget === 0, String(clearBudget.budget))

  // 本机预算设置（.budget.json，原版 core/cost.py 的口径）：超限需确认，不是硬拦
  const budgetEmpty = await fetch(`${base}/budget`).then(res => res.json())
  check(
    'GET /budget 未设时两项皆 0',
    budgetEmpty.dailyLimit === 0 && budgetEmpty.singleRunLimit === 0,
    JSON.stringify(budgetEmpty),
  )

  const budgetSaved = await fetch(`${base}/budget`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ dailyLimit: 5, singleRunLimit: 0.05 }),
  }).then(res => res.json())
  check(
    'POST /budget 回读规范化后的值',
    budgetSaved.dailyLimit === 5 && budgetSaved.singleRunLimit === 0.05,
    JSON.stringify(budgetSaved),
  )

  const budgetFile = join(FIXTURE_ROOT, 'output', '.budget.json')
  check('POST /budget 落到输出目录的 .budget.json', existsSync(budgetFile), budgetFile)

  const budgetRead = await fetch(`${base}/budget`).then(res => res.json())
  check(
    'GET /budget 读回刚写的值',
    budgetRead.dailyLimit === 5 && budgetRead.singleRunLimit === 0.05,
    JSON.stringify(budgetRead),
  )

  // 单次上限 0.05、该尺寸单价 0.1 → 预估超限，未确认时必须 409 且带 overBudget
  const overSingle = await fetch(`${base}/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ prompt: 'smoke', size: '1024x1024', spent: 0 }),
  })
  check('POST /generate 超单次上限返回 409', overSingle.status === 409, String(overSingle.status))
  const overSingleBody = await overSingle.json()
  check(
    '超限 409 带 overBudget.reason（供前端确认）',
    typeof overSingleBody.overBudget?.reason === 'string' && overSingleBody.overBudget.reason.length > 0,
    JSON.stringify(overSingleBody.overBudget ?? null),
  )

  // allowOverBudget = 原版的 confirmed=True：确认后必须放行
  const overConfirmed = await fetch(`${base}/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ prompt: 'smoke', size: '1024x1024', spent: 0, allowOverBudget: true }),
  })
  check('POST /generate 带 allowOverBudget 放行', overConfirmed.status === 200, String(overConfirmed.status))

  // 硬拦那条（本画布累计上限）不带 overBudget，两者不能串
  await fetch(`${base}/settings`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ budget: 1 }),
  })
  const hardBlocked = await fetch(`${base}/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ prompt: 'smoke', size: '1024x1024', spent: 1, allowOverBudget: true }),
  })
  const hardBody = await hardBlocked.json()
  check(
    '本画布上限是硬拦：confirmed 也不放行、且不带 overBudget',
    hardBlocked.status === 409 && hardBody.overBudget === undefined,
    String(hardBlocked.status),
  )
  await fetch(`${base}/settings`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ budget: 0 }),
  })

  // 清空本机预算：0 表示不限，之后提交不再被拦
  await fetch(`${base}/budget`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ dailyLimit: 0, singleRunLimit: 0 }),
  })
  const budgetCleared = await fetch(`${base}/budget`).then(res => res.json())
  check('POST /budget 0 表示不限', budgetCleared.dailyLimit === 0 && budgetCleared.singleRunLimit === 0)

  const afterClear = await fetch(`${base}/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ prompt: 'smoke', size: '1024x1024', spent: 0 }),
  })
  check('清空预算后提交不再被拦', afterClear.status === 200, String(afterClear.status))

  // 节点上没存 absPath 时，hydrate 要能从 registry 补回来：否则好文件被误判「缺失」，
  // url 被抹掉，图片节点的裁剪/切分/放大/预览全部哑掉。
  // 一张 1×1 的透明 PNG：冒烟只需要「是张能读的图」
  const PIXEL_PNG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
  const uploaded = await fetch(`${base}/upload?name=hydrate-check.png`, {
    method: 'POST',
    headers: { 'content-type': 'image/png' },
    body: Buffer.from(PIXEL_PNG, 'base64'),
  }).then(res => res.json())
  const noPath = await fetch(`${base}/recovery/save`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      nodes: [
        {
          id: 'img-nopath',
          type: 'image',
          position: { x: 0, y: 0 },
          // 故意不写 absPath / file
          data: { registryId: uploaded.image.id, name: uploaded.image.name, size: 1, ext: 'png', refCount: 0 },
        },
      ],
      edges: [],
    }),
  })
  const nopath = await fetch(`${base}/recovery/latest`).then(res => res.json())
  const node = nopath.nodes?.find(row => row.id === 'img-nopath')
  check('节点没存 absPath 时从 registry 补回', Boolean(node?.data?.absPath), node?.data?.absPath ?? '')
  check('补齐后 url 不被抹掉', Boolean(node?.data?.url), node?.data?.url ?? '')
  check('补齐后不误判 missing', node?.data?.missing === false, String(node?.data?.missing))

  check('POST /recovery/save 未报错', noPath.status === 200)

  // 蒙版：data URL 要能被解析成 Buffer；空串当作「不带蒙版」；坏数据要 400
  const maskOk = await fetch(`${base}/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      prompt: 'smoke mask',
      size: '1024x1024',
      refIds: [uploaded.image.id],
      mask: `data:image/png;base64,${PIXEL_PNG}`,
    }),
  })
  check('POST /generate 收 data URL 形态的蒙版', maskOk.status === 200, String(maskOk.status))

  const maskEmpty = await fetch(`${base}/generate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ prompt: 'smoke mask', size: '1024x1024', refIds: [uploaded.image.id], mask: '' }),
  })
  check('POST /generate 空蒙版当作不带', maskEmpty.status === 200, String(maskEmpty.status))

  // ---------------- 与原版共用一份：工作流 / 生成历史必须读得到 ----------------
  //
  // 这是用户报的原始缺陷：「生成历史点开什么都没有，工作流也是空的，明明 imagora 里有」。
  // 根因是那两处只读插件自己的目录，没跟着 settings.imagoraRoot 走。
  // 这里造一份**原版磁盘布局**来锁住这条契约：
  //   <root>/output/.assets/registry.json   v2 格式（images 字典 + relPath，无 absPath）
  //   <root>/output/.assets/canv_<id>.png
  //   <root>/output/workflows/<名字>.json   v2 格式（图片节点只存 registryId）
  // 断言四件事：列表看得见、加载补得出 url、文件服务放行、工作流里不残留派生路径。
  const SHARED_ROOT = mkdtempSync(join(tmpdir(), 'imagora-shared-'))
  const sharedAssetDir = join(SHARED_ROOT, 'output', '.assets')
  const sharedWorkflowDir = join(SHARED_ROOT, 'output', 'workflows')
  mkdirSync(sharedAssetDir, { recursive: true })
  mkdirSync(sharedWorkflowDir, { recursive: true })
  // id 按原版的算法来：内容 sha1 前 12 位。夹具直接用真 sha1，
  // 后面那条「同内容去重」才有意义 —— 否则断言的是巧合。
  const SHARED_ID = createHash('sha1').update(PNG).digest('hex').slice(0, 12)
  writeFileSync(join(sharedAssetDir, `canv_${SHARED_ID}.png`), PNG)
  writeFileSync(
    join(sharedAssetDir, 'registry.json'),
    JSON.stringify(
      {
        schemaVersion: 2,
        images: {
          [SHARED_ID]: {
            id: SHARED_ID,
            relPath: `.assets/canv_${SHARED_ID}.png`,
            name: '来自原版的图.png',
            size: PNG.length,
            ext: 'png',
            createdAt: '2026-11-01 12:00:00',
            kind: 'canvas',
          },
        },
      },
      null,
      2,
    ),
  )
  writeFileSync(
    join(sharedWorkflowDir, '原版工作流.json'),
    JSON.stringify(
      {
        version: 2,
        name: '原版工作流',
        savedAt: '2026-11-01 12:00:00',
        nodes: [
          {
            id: 'img-1',
            type: 'image',
            position: { x: 0, y: 0 },
            data: { registryId: SHARED_ID, name: '来自原版的图.png', size: PNG.length, ext: 'png', refCount: 0 },
          },
        ],
        edges: [],
      },
      null,
      2,
    ),
  )

  const sharedOn = await fetch(`${base}/settings`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ imagoraRoot: SHARED_ROOT }),
  }).then(res => res.json())
  check('POST /settings 记住 imagora 根', sharedOn.imagoraRoot === SHARED_ROOT, sharedOn.imagoraRoot)

  const sharedAssets = await fetch(`${base}/assets`).then(res => res.json())
  const sharedRow = sharedAssets.images.find(row => row.id === SHARED_ID)
  check(
    '共用模式：/assets 列出原版注册表里的图',
    Boolean(sharedRow),
    sharedRow?.name ?? `${sharedAssets.images.length} 条`,
  )
  check(
    '共用模式：v2 的 relPath 换算成绝对路径',
    Boolean(sharedRow?.absPath && existsSync(sharedRow.absPath)),
    sharedRow?.absPath ?? '',
  )

  const sharedFile = await fetch(`${base}/file?id=${SHARED_ID}`)
  const sharedBytes = Buffer.from(await sharedFile.arrayBuffer())
  check(
    '共用模式：/file 能出原版 .assets 里的文件',
    sharedFile.ok && sharedBytes.equals(PNG),
    `${sharedFile.status} ${sharedBytes.length} bytes`,
  )

  const sharedList = await fetch(`${base}/workflow/list`).then(res => res.json())
  check(
    '共用模式：工作流列表读的是原版 output/workflows',
    sharedList.workflows.some(row => row.name === '原版工作流'),
    sharedList.workflows.map(row => row.name).join(', '),
  )

  const sharedLoad = await fetch(`${base}/workflow/load?name=${encodeURIComponent('原版工作流')}`).then(res =>
    res.json(),
  )
  check(
    '共用模式：原版工作流加载后补出 url（节点只存 registryId）',
    Boolean(sharedLoad.nodes?.[0]?.data?.url),
    sharedLoad.nodes?.[0]?.data?.url ?? JSON.stringify(sharedLoad.missing ?? []),
  )
  // 「缺失」必须按**解析结果**算，不能按「节点上有没有 absPath」算：原版存档里图片节点
  // 只存 registryId，解析前看字段必然为空，那样判会把健康存档整批判成缺失
  // （实测一个 12 图的存档报了 12 张，实际全都能取到）。
  check(
    '共用模式：只存 registryId 的存档不误报缺失',
    Array.isArray(sharedLoad.missing) && sharedLoad.missing.length === 0,
    JSON.stringify(sharedLoad.missing ?? []),
  )

  // 存一份回共用目录：必须写进原版那个 workflows/，且图片节点不带派生路径
  const sharedSave = await fetch(`${base}/workflow/save`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name: '插件写回的工作流', nodes: sharedLoad.nodes ?? [], edges: [] }),
  }).then(res => res.json())
  check('共用模式：保存落到原版 workflows/', sharedSave.ok === true, sharedSave.path ?? '')
  const written = JSON.parse(readFileSync(join(sharedWorkflowDir, '插件写回的工作流.json'), 'utf8'))
  check('共用模式：写入的是 v2 结构', written.version === 2, String(written.version))
  check(
    '共用模式：落盘剥掉派生路径（url / absPath）',
    !('url' in (written.nodes?.[0]?.data ?? {})) && !('absPath' in (written.nodes?.[0]?.data ?? {})),
    JSON.stringify(Object.keys(written.nodes?.[0]?.data ?? {})),
  )

  // 插件新上传的图也要进原版那张注册表（同内容去重，文件名 canv_<sha1>）
  const sharedUpload = await fetch(`${base}/upload?name=插件上传.png`, { method: 'POST', body: PNG }).then(res =>
    res.json(),
  )
  const sharedRegistry = JSON.parse(readFileSync(join(sharedAssetDir, 'registry.json'), 'utf8'))
  check(
    '共用模式：上传注册进原版 registry.json',
    Boolean(sharedRegistry.images?.[sharedUpload.image?.id]),
    sharedUpload.image?.id ?? '',
  )
  check(
    '共用模式：同内容按 sha1 去重（与原版同 id）',
    sharedUpload.image?.id === SHARED_ID,
    `${sharedUpload.image?.id} vs ${SHARED_ID}`,
  )

  // ---------------- 生成历史：读的是**账本**，不是注册表 ----------------
  //
  // 这一段锁住 core/history.py 的三条语义，它们都是「看起来能简化、简化就错」的地方：
  //   1. 坏行必须跳过（账本 append-only，断电会留半行，一条坏行不能毁掉整个历史）
  //   2. 同参数的**失败**只留最新一条（否则同一张卡失败几次就把历史刷满）
  //   3. 有 outputAssetIds 的行按注册表解析（原文件挪走也还看得见图）；
  //      没有它的旧行回退 output 路径
  const historyDir = join(SHARED_ROOT, 'logs')
  mkdirSync(historyDir, { recursive: true })
  const ledgerRows = [
    // ① 有资产副本：按注册表解析 → 有 url，且带 assetId（导入画布要用）
    {
      time: '2026-11-01 12:00:00',
      mode: 'img2img',
      refs: 1,
      prompt: '账本行 A：有资产副本',
      size: '1024x1024',
      quality: 'high',
      status: 'ok',
      cost: 0.2,
      seconds: 60,
      output: '不存在的导出目录/a.png',
      outputAssetIds: [SHARED_ID],
      inputAssetIds: [SHARED_ID],
    },
    // ② 只有 output 路径（相对 imagora 根），文件真在 output/ 下 → 走 /file?path=
    {
      time: '2026-11-01 11:00:00',
      mode: 'txt2img',
      refs: 0,
      prompt: '账本行 B：只有路径',
      size: '1536x1024',
      quality: 'medium',
      status: 'ok',
      cost: 0,
      seconds: 30,
      output: 'output/plugin-shot.png',
    },
    // ③④ 同参数的两次失败：聚合后只留最新那条
    {
      time: '2026-11-01 10:00:00',
      mode: 'txt2img',
      refs: 0,
      prompt: '账本行 C：同一张卡失败两次',
      size: '1024x1024',
      quality: 'low',
      status: 'error',
      cost: 0,
      seconds: 2,
      output: '',
    },
    {
      time: '2026-11-01 10:05:00',
      mode: 'txt2img',
      refs: 0,
      prompt: '账本行 C：同一张卡失败两次',
      size: '1024x1024',
      quality: 'low',
      status: 'error',
      cost: 0,
      seconds: 3,
      output: '',
    },
  ]
  writeFileSync(
    join(historyDir, 'generation.jsonl'),
    `${ledgerRows.map(row => JSON.stringify(row)).join('\n')}\n{"坏行": 这不是合法 JSON\n`,
  )
  // ② 引用的文件真落一份在 output/ 下（/file?path= 才放行）
  writeFileSync(join(SHARED_ROOT, 'output', 'plugin-shot.png'), PNG)

  const historyPage = await fetch(`${base}/history?limit=60&offset=0`).then(res => res.json())
  check('共用模式：/history 读的是账本', historyPage.source === 'ledger', historyPage.source)
  check(
    '共用模式：账本坏行被跳过（3 条有效记录）',
    Array.isArray(historyPage.items) && historyPage.items.length === 3 && historyPage.total === 3,
    `${historyPage.items?.length} 条 / total ${historyPage.total}`,
  )
  check(
    '共用模式：同参数失败只留最新一条',
    historyPage.items?.filter(row => row.prompt.startsWith('账本行 C')).length === 1,
    String(historyPage.items?.filter(row => row.prompt.startsWith('账本行 C')).length),
  )
  const assetRow = historyPage.items?.find(row => row.prompt.startsWith('账本行 A'))
  check(
    '共用模式：有 outputAssetIds 的行解析出 assetId 与 url',
    Boolean(assetRow?.assetId === SHARED_ID && assetRow?.url),
    `${assetRow?.assetId} ${assetRow?.url}`,
  )
  check(
    '共用模式：参考图按注册表解析成 inputRefs',
    (assetRow?.inputRefs?.length ?? 0) === 1,
    String(assetRow?.inputRefs?.length),
  )
  const pathRow = historyPage.items?.find(row => row.prompt.startsWith('账本行 B'))
  check(
    '共用模式：只有 output 路径的旧行也能出图（/file?path=）',
    Boolean(pathRow?.path && pathRow?.url?.includes('path=')),
    pathRow?.url ?? '(无 url)',
  )

  const historyStats = await fetch(`${base}/history/stats`).then(res => res.json())
  check(
    '共用模式：/history/stats 按原始行聚合（成功行算费用）',
    historyStats.total === 4 && historyStats.cost >= 0.2,
    `total ${historyStats.total} cost ${historyStats.cost}`,
  )

  // 路径式取图的边界：output/ 之外一律拒绝（账本里可能有别的机器路径）
  const outsideFile = await fetch(`${base}/file?path=${encodeURIComponent(join(FIXTURE_ROOT, 'config.json'))}`)
  check('GET /file?path= 越界路径被拒', outsideFile.status === 403, String(outsideFile.status))

  // 切回去：插件独用，不该再看见原版那份
  const sharedOff = await fetch(`${base}/settings`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ imagoraRoot: '' }),
  }).then(res => res.json())
  check('POST /settings 清空 imagora 根', sharedOff.imagoraRoot === '', sharedOff.imagoraRoot)
  const ownList = await fetch(`${base}/workflow/list`).then(res => res.json())
  check(
    '切回插件独用：不再列出原版工作流',
    !ownList.workflows.some(row => row.name === '原版工作流'),
    ownList.workflows.map(row => row.name).join(', ') || '(空)',
  )

  // ---------------- 账本根目录：没显式设指针也要读得到 ----------------
  //
  // 这条锁的是一个**静默失效**的 bug：`imagoraRoot`（用户显式选的共享目录）为空时，
  // 历史/统计/预算判定都拿空串去拼路径，结果一条记录都读不到 ——
  // 生成历史空着（用户以为图没了），日预算的 todayCost 恒为 0（预算形同不存在）。
  // 而同一个 loadImagoraConfig 里 defaultOutputDir 是拿 root 兜底的，两边取法不一致。
  //
  // 夹具：把账本写进自动探测到的那个目录（fixture 的 logs/），**不设 imagoraRoot**。
  const fixtureLedgerDir = join(FIXTURE_ROOT, 'logs')
  mkdirSync(fixtureLedgerDir, { recursive: true })
  writeFileSync(
    join(fixtureLedgerDir, 'generation.jsonl'),
    `${JSON.stringify({
      time: '2026-11-02 09:00:00',
      mode: 'txt2img',
      refs: 0,
      prompt: '没设指针也要读到的账本行',
      size: '1024x1024',
      quality: 'high',
      status: 'ok',
      cost: 0.3,
      seconds: 20,
      output: '',
    })}\n`,
  )
  const noPointerHistory = await fetch(`${base}/history?limit=60&offset=0`).then(res => res.json())
  check(
    '没设 imagoraRoot 时 /history 仍读到自动探测目录的账本',
    noPointerHistory.source === 'ledger' && noPointerHistory.items?.some(row => row.prompt.includes('没设指针')),
    `${noPointerHistory.source} / ${noPointerHistory.items?.length} 条`,
  )
  check(
    '没设 imagoraRoot 时 /history 给出账本真实路径',
    typeof noPointerHistory.ledgerPath === 'string' && noPointerHistory.ledgerPath.includes('generation.jsonl'),
    noPointerHistory.ledgerPath || '(空)',
  )
  const noPointerStats = await fetch(`${base}/history/stats`).then(res => res.json())
  check(
    '没设 imagoraRoot 时 /history/stats 也读得到（todayCost 不再恒为 0）',
    noPointerStats.total >= 1,
    `total ${noPointerStats.total}`,
  )
  rmSync(fixtureLedgerDir, { recursive: true, force: true })
  rmSync(SHARED_ROOT, { recursive: true, force: true })
} finally {
  server.close()
  for (const dir of [SANDBOX, FIXTURE_ROOT]) {
    try {
      rmSync(dir, { recursive: true, force: true })
    } catch {
      // 临时目录删不掉不影响结论
    }
  }
}

const failed = results.filter(row => !row.ok)
console.log(`\n${results.length - failed.length}/${results.length} 通过`)
if (failed.length) process.exit(1)

void readFileSync
void join
