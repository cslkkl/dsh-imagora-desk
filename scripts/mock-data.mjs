// 验收台的 mock 数据：配置 + 一份带图的恢复快照，让画布一打开就有真实内容。
const pollCounts = new Map()

/** 生成历史的 mock 行：形状与 host 的 /imagora/history 完全一致。
 *
 * 里面全是**编的**提示词（不带任何真实用户内容），只为让「提示词 2 行截断 / 参考图缩略 /
 * 三颗按钮 / 失败行 / 文件已移动」这几种状态都能在验收台上看到。
 * `assetId` 非空的几条同时出现在 /imagora/assets 里 —— 历史行的「导入画布」按钮
 * 要靠注册表条目才点得动，没有它按钮是禁用的（这条本身也要能看到）。
 */
const HISTORY_ROWS = [
  {
    time: '2026-11-07 21:40:12',
    mode: 'img2img',
    refs: 2,
    prompt:
      'linen tote bag on warm concrete, soft top light, shallow depth of field, muted sand palette, editorial product photography, 85mm',
    size: '1024x1024',
    quality: 'high',
    status: 'ok',
    cost: 0.05,
    seconds: 61.2,
    output: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\output\\img2img_20261107_213955.png',
    exists: true,
    path: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\output\\.assets\\canv_aaaa11112222.png',
    url: '/imagora/file?id=aaaa11112222',
    assetId: 'aaaa11112222',
    inputRefs: [
      {
        id: 'ref000000001',
        path: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\output\\.assets\\ref1.png',
        url: '/imagora/file?id=ref000000001',
      },
      {
        id: 'ref000000002',
        path: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\output\\.assets\\ref2.png',
        url: '/imagora/file?id=ref000000002',
      },
    ],
    inputRefMissing: false,
  },
  {
    time: '2026-11-07 20:12:03',
    mode: 'txt2img',
    refs: 0,
    prompt: 'wool scarf on linen, morning window light, quiet still life, warm neutral tones',
    size: '1536x1024',
    quality: 'high',
    status: 'ok',
    cost: 0.1,
    seconds: 58.4,
    output: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\output\\txt2img_20261107_201205.png',
    exists: true,
    path: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\output\\.assets\\canv_bbbb33334444.png',
    url: '/imagora/file?id=bbbb33334444',
    assetId: 'bbbb33334444',
    inputRefs: [],
    inputRefMissing: false,
  },
  {
    time: '2026-11-06 19:31:55',
    mode: 'img2img',
    refs: 1,
    prompt: 'ceramic mug, hand-thrown, soft shadow, off-white backdrop',
    size: '1024x1024',
    quality: 'medium',
    status: 'error',
    cost: 0,
    seconds: 3.1,
    output: '',
    exists: false,
    path: '',
    url: '',
    assetId: '',
    inputRefs: [],
    // 图生图声明了参考图、却一张都找不回：列表要显示「参考图缺失」并计入顶部提示
    inputRefMissing: true,
  },
  {
    time: '2026-11-05 09:02:41',
    mode: 'txt2img',
    refs: 0,
    prompt: 'paper texture study, warm grey, high frequency detail',
    size: '1024x1024',
    quality: 'low',
    status: 'ok',
    cost: 0.05,
    seconds: 22.8,
    output: 'C:\\Users\\demo\\Pictures\\txt2img_20261105_090241.png',
    exists: true,
    path: 'C:\\Users\\demo\\Pictures\\txt2img_20261105_090241.png',
    // 文件在「图片」目录里：不在 assets/output 之下，所以 host 不给 url。
    // 这行就是原版的「文件已移动」形态 —— 只能看文字、不能看图。
    url: '',
    assetId: '',
    inputRefs: [],
    inputRefMissing: false,
  },
]

/** 验收台的本机预算设置（.budget.json）：非零值，好让成本条那两个输入框一打开就有内容 */
const MOCK_BUDGET = { dailyLimit: 5, singleRunLimit: 0.5 }

export function defineConfig(path, url) {
  if (path === '/imagora/config') {
    return {
      root: 'C:\\Users\\demo\\Desktop\\imagora\\imagora',
      profile: 'wanwu',
      profileLabel: 'aiwanwu 中转站',
      model: 'gpt-image-2.5-flare',
      modelLabel: 'GPT Image 2.5 Flare',
      profiles: [
        { name: 'wanwu', label: 'aiwanwu 中转站' },
        { name: 'volc', label: '火山方舟官方' },
      ],
      models: [
        { id: 'gpt-image-2.5-flare', label: 'GPT Image 2.5 Flare' },
        { id: 'gpt-image-2.5-sunburst', label: 'GPT Image 2.5 Sunburst' },
      ],
      sizes: [
        { value: '1024x1024', label: '1024x1024 (1:1 1K)', cost: 0.05 },
        { value: '2048x2048', label: '2048x2048 (1:1 2K)', cost: 0.1 },
        { value: '1536x1024', label: '1536x1024 (3:2 横版)', cost: 0.1 },
        { value: '1024x1536', label: '1024x1536 (2:3 竖版)', cost: 0.1 },
      ],
      qualities: ['low', 'medium', 'high'],
      qualityEffective: true,
      defaultOutputDir: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\output',
      issues: [],
    }
  }

  if (path === '/imagora/health') {
    return { ok: true, config: defineConfig('/imagora/config', url) }
  }

  if (path === '/imagora/assets') {
    // 与历史 mock 里带 assetId 的几条对齐：历史行要能换成资产条目才「导入画布」得动
    return {
      images: HISTORY_ROWS.filter(row => row.assetId).map(row => ({
        id: row.assetId,
        name: `canv_${row.assetId}.png`,
        size: 1024 * 1024,
        ext: 'png',
        relPath: `.assets/canv_${row.assetId}.png`,
        url: `/imagora/file?id=${row.assetId}`,
        absPath: `C:\\Users\\demo\\Desktop\\imagora\\imagora\\output\\.assets\\canv_${row.assetId}.png`,
        createdAt: row.time,
      })),
    }
  }

  if (path === '/imagora/history') {
    const query = (url.searchParams.get('query') || '').trim().toLowerCase()
    const status = (url.searchParams.get('status') || '').trim().toLowerCase()
    const limit = Math.min(500, Math.max(1, Number(url.searchParams.get('limit')) || 60))
    const offset = Math.max(0, Number(url.searchParams.get('offset')) || 0)
    // 与 host 侧同序：搜索/状态在聚合**之前**过滤，分页作用在聚合后的数组上
    const all = HISTORY_ROWS.filter(row => {
      if (status && row.status !== status) return false
      if (!query) return true
      return [row.time, row.prompt, row.mode, row.quality, row.output]
        .join(' ')
        .replace(/\s+/g, ' ')
        .toLowerCase()
        .includes(query)
    })
    const page = all.slice(offset, offset + limit)
    return {
      source: 'ledger',
      ledgerPath: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\logs\\generation.jsonl',
      items: page,
      total: all.length,
      hasMore: offset + page.length < all.length,
    }
  }

  if (path === '/imagora/history/stats') {
    const ok = HISTORY_ROWS.filter(row => row.status === 'ok')
    const cost = ok.reduce((sum, row) => sum + row.cost, 0)
    const seconds = ok.reduce((sum, row) => sum + row.seconds, 0)
    return {
      total: HISTORY_ROWS.length,
      ok: ok.length,
      error: HISTORY_ROWS.length - ok.length,
      successRate: Math.round((ok.length / HISTORY_ROWS.length) * 1000) / 10,
      cost: Math.round(cost * 100) / 100,
      seconds: Math.round(seconds * 10) / 10,
      avgSeconds: Math.round((seconds / ok.length) * 10) / 10,
      todayCost: Math.round(cost * 100) / 100,
      byDay: [],
      bySize: [
        { size: '1024x1024', count: 4, cost: 0.2 },
        { size: '1536x1024', count: 1, cost: 0.1 },
      ],
      byMode: [{ mode: 'img2img', count: 3, cost: 0.15 }],
      budget: { limit: 0, spentToday: Math.round(cost * 100) / 100, remaining: 0 },
      // 本机预算设置（.budget.json）：验收台给一组非零值，让成本条那两个输入框
      // 一开始就有内容 —— 全 0 时看不出「读回来的值」与「新建草稿」的区别。
      localBudget: {
        ...MOCK_BUDGET,
        remainingToday: MOCK_BUDGET.dailyLimit ? Math.max(0, MOCK_BUDGET.dailyLimit - cost) : 0,
        path: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\output\\.budget.json',
      },
    }
  }

  // 本机预算设置：**固定夹具，不落盘也不记住 POST**。
  // 验收台只负责「渲染对不对」，读写语义由 host 冒烟那 13 条预算用例守（真实文件 + 真实判定）。
  // 这里给非零值是有意的：全 0 时看不出「读回来的值」与「新建草稿」的区别。
  if (path === '/imagora/budget') {
    return {
      ...MOCK_BUDGET,
      path: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\output\\.budget.json',
    }
  }

  if (path === '/imagora/file') {
    return 'png'
  }

  if (path === '/imagora/recovery/latest') {
    // ⚠️ 这里的 edges **故意照抄原版 Imagora 真实存档的形态**：
    // 每条边都带 `style.stroke: "var(--edge-stroke-idle)"` 与 `animated: true`。
    // 原版从 edgeStyle 那次提交起把连线外观内联进 JSON，导出的工作流长这样。
    // 插件没有 `--edge-stroke-*` 这组变量名，加载时如果不清洗，`var()` 解析失败会让
    // 整条 stroke 声明作废 → 线整个消失（用户报的「新的工作流没有线」就是这个）。
    // 夹具保留这份形态，验收台每渲染一次就等于跑一遍 sanitizeEdges 的回归。
    const legacyEdge = (id, source, target) => ({
      id,
      source,
      target,
      className: '',
      style: { stroke: 'var(--edge-stroke-idle)', strokeWidth: 1.5, opacity: 1 },
      animated: true,
    })
    return {
      ok: true,
      name: '自动恢复 验收台',
      savedAt: '2026-11-06T13:20:00.000Z',
      edges: [
        legacyEdge('img-ref-1->prompt-1', 'img-ref-1', 'prompt-1'),
        legacyEdge('img-ref-2->prompt-1', 'img-ref-2', 'prompt-1'),
        // 图片组：两张图汇进组，组自己再连到提示词卡（张数与大小由边聚合推导）
        legacyEdge('img-ref-1->group-1', 'img-ref-1', 'group-1'),
        legacyEdge('img-ref-2->group-1', 'img-ref-2', 'group-1'),
        legacyEdge('img-out-1->group-1', 'img-out-1', 'group-1'),
        legacyEdge('group-1->prompt-1', 'group-1', 'prompt-1'),
        legacyEdge('prompt-1->img-out-1', 'prompt-1', 'img-out-1'),
      ],
      nodes: [
        {
          id: 'img-ref-1',
          type: 'image',
          position: { x: 40, y: 40 },
          data: {
            registryId: 'ref-1',
            name: 'reference-plate.png',
            url: '/imagora/file?id=ref-1',
            size: 482113,
            ext: 'png',
            absPath: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\assets\\ref-1.png',
            // 带蒙版：验收「蒙版」角标是可点的清除按钮（原版点一下清）
            maskDataUrl: 'data:image/png;base64,iVBORw0KGgo=',
            refCount: 1,
          },
        },
        {
          id: 'img-ref-2',
          type: 'image',
          position: { x: 215, y: 40 },
          data: {
            registryId: 'ref-2',
            name: 'reference-material.png',
            url: '/imagora/file?id=ref-2',
            size: 512004,
            ext: 'png',
            absPath: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\assets\\ref-2.png',
            refCount: 2,
          },
        },
        {
          id: 'prompt-1',
          type: 'prompt',
          position: { x: 90, y: 280 },
          data: {
            prompt: 'product hero shot, soft studio light, warm beige backdrop, subtle film grain',
            size: '1536x1024',
            quality: 'high',
            outputDir: '',
            status: 'idle',
          },
        },
        // 图片组：验收叠卡效果（3 张以上才看得出层次）
        {
          id: 'group-1',
          type: 'group',
          position: { x: 600, y: 640 },
          data: { imageCount: 5, totalSize: 4_512_000, duplicateCount: 1 },
        },
        {
          id: 'img-out-1',
          type: 'image',
          position: { x: 90, y: 700 },
          data: {
            registryId: 'out-1',
            name: 'txt2img_20261106_131500_aa12.png',
            url: '/imagora/file?id=out-1',
            size: 903112,
            ext: 'png',
            absPath: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\assets\\out-1.png',
            refCount: 0,
          },
        },
      ],
    }
  }

  if (path === '/imagora/workflow/list') {
    return { workflows: [{ name: '商品主图', modified: '2026-11-06T12:00:00.000Z' }] }
  }

  // 生成任务：头两次排队/运行中，第三次返回成功结果 —— 让画布真的走一遍「出图回流」
  if (path === '/imagora/task') {
    const id = url.searchParams.get('id') || 'demo'
    const step = (pollCounts.get(id) ?? 0) + 1
    pollCounts.set(id, step)
    if (step === 1) {
      return {
        taskId: id,
        status: 'queued',
        startedAt: null,
        finishedAt: null,
        results: [],
        messages: [],
        totalCost: 0,
        error: null,
        cancelRequested: false,
      }
    }
    if (step < 3) {
      return {
        taskId: id,
        status: 'running',
        startedAt: Date.now() - 1200,
        finishedAt: null,
        results: [],
        messages: [],
        totalCost: 0,
        error: null,
        cancelRequested: false,
      }
    }
    return {
      taskId: id,
      status: 'done',
      startedAt: Date.now() - 2400,
      finishedAt: Date.now(),
      results: [
        {
          status: 'ok',
          assetId: `gen-${id}`,
          url: `/imagora/file?id=gen-${id}`,
          name: 'txt2img_20261106_131900_demo.png',
          absPath: 'C:\\Users\\demo\\Desktop\\imagora\\imagora\\output\\txt2img_20261106_131900_demo.png',
          ext: 'png',
          bytes: 812345,
          size: '1024x1024',
          cost: 0.05,
          mode: 'txt2img',
        },
      ],
      messages: ['文生图', '已生成 · 1024x1024 · 0.05 元'],
      totalCost: 0.05,
      error: null,
      cancelRequested: false,
    }
  }

  if (path.startsWith('/imagora/')) {
    return { ok: true }
  }

  return null
}
