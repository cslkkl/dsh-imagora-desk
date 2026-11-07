// 验收台的 mock 数据：配置 + 一份带图的恢复快照，让画布一打开就有真实内容。
const pollCounts = new Map()

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
    return { images: [] }
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
