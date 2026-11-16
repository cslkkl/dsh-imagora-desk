/**
 * 本插件的文案词典 —— **全部界面文字的唯一住所**。
 *
 * ## 为什么集中在这一个文件
 *
 * 文案散在 40 多个组件里时，「这句英文翻得对不对」要跳 40 个文件才看完，
 * 「有没有漏翻」只能靠肉眼。集中之后两件事都变成机械可查的：
 *
 * - **漏译是编译错误**：`en` 声明成 `Record<LocaleKey, string>`，少一个键 TS 就报；
 * - **拼错键名是编译错误**：`LocaleKey` 是从 `zh` 推出来的联合类型，
 *   `t('toolbar.save')` 写成 `t('toolbar.saved')` 直接不过编译。
 *
 * 与 `dsh-plugins/dsh-ds-balance` 同构（那份也是 `zh` 当真源、`en` 用 `Record` 兜完整性），
 * 也与 DSH 官方 `ui-settings-plugins/src/client/locales.ts` 同构。
 *
 * ## 语言由宿主决定，这里不选
 *
 * 跟随 DSH 的语言设置（设置 → 通用 → 语言）。`ctx.locale.register` 之后，
 * 宿主切语言会推进 locale 修订号，已挂载的出口自动重取译文，**不需要重挂载**。
 * 所以本文件只提供两份词典，不提供「当前语言」这个概念 —— 那是宿主的事。
 *
 * ## 两种语言的文辞**各自写**
 *
 * 不做逐字直译。中文短、信息密度高，英文要显式主语和冠词；中文的「（未设置）」
 * 在英文里是 `Not set`，不是 `(Not set)`。**同一个键的两句话可以结构完全不同**，
 * 只要说的是同一件事。这也是唯一能避免「翻译腔」的做法。
 *
 * 插值占位符一律 `{name}` 形状，由 `interpolate()` 填，**两种语言必须给同一组占位符**
 * （少写一个不会报错，只会少显示一段信息，所以改文案时要对着看）。
 */

/** 词典命名空间。与 slot 注册项的 `locale` 字段、`LocaleNamespaceMap` 的键三处同串。 */
export const NS = 'imagora'

/**
 * 简体中文词典 —— **键集真源**。
 *
 * 新增文案只改这里 + `en`，`LocaleKey` 会自动变宽；两处都给全才过编译。
 *
 * 顺手做了两件事（维护者 2026-11-17 定）：
 * - **砍掉冗长**：「按参考关系分层重排选中的节点，其余保持原位」这种把实现细节
 *   写进提示的句子，压成用户真正需要知道的半句；
 * - **提示只说补充信息**：按钮上已经写着的字不再重复（见 toolbar 的 `tool()` 注释）。
 */
export const zh = {
  // ---------- 通用 ----------
  'common.notSet': '（未设置）',
  'common.save': '保存',
  'common.saving': '保存中…',
  'common.cancel': '取消',
  'common.close': '关闭',
  'common.confirm': '确定',
  'common.reset': '重置',
  'common.delete': '删除',

  // ---------- 侧边栏入口 ----------
  'panel.entry': '自由画布',

  // ---------- 顶栏第一行：出图配置 ----------
  'toolbar.profile.follow': '跟随 imagora 的 .env',
  'toolbar.profile.title': '来源：决定接口地址与密钥',
  'toolbar.model.title': '{profile} · 当前模型',
  'toolbar.settings': '设置',
  'toolbar.settings.title': '接口地址、API Key、模型与目录',

  // ---------- 顶栏第二行：画布工具栏 ----------
  'toolbar.upload': '上传图片',
  'toolbar.upload.title': '从本机选图片（也可拖入或粘贴）',
  'toolbar.paste': '粘贴导入',
  'toolbar.paste.title': '粘贴模型回复，按行拆成多张提示词卡',
  'toolbar.newPrompt': '新建提示词卡片',
  'toolbar.newPrompt.title': '也可拖到画布上，松开处即新卡位置',
  'toolbar.newGroup': '新建图片组',
  'toolbar.newGroup.title': '也可拖到画布上，松开处即新组位置',
  'toolbar.save': '保存工作流',
  'toolbar.save.title': '给画布起个名字存下来',
  'toolbar.load': '加载工作流',
  'toolbar.load.title': '选一份已保存的画布继续',
  'toolbar.history': '生成历史',
  'toolbar.history.title': '磁盘上真实存在的图，删掉节点也能找回',
  'toolbar.outputDir': '默认输出路径',
  'toolbar.outputDir.title': '新建卡片用这个值：{dir}',
  'toolbar.undo': '撤销',
  'toolbar.undo.title': '撤销上一步（Ctrl+Z）',
  'toolbar.redo': '恢复',
  'toolbar.redo.title': '恢复被撤销的一步（Ctrl+Y）',
  'toolbar.autoConnect': '自动连线',
  'toolbar.autoConnect.title': '按位置补齐明显的关系：图片 → 提示词 → 图片',
  'toolbar.runAll': '全部运行',
  'toolbar.runAll.title': '运行所有提示词卡片',
  'toolbar.cancelAll': '取消全部 ({count})',
  'toolbar.cancelAll.title': '排队中的不再发出；生成中的等这张跑完才作废（图仍落盘并计费）',

  // ---------- 画布提示条（flash） ----------
  'flash.autoConnect.done': '已按位置补齐明显的连线',
  'flash.autoConnect.noneSelected': '先选中要连线的节点',
  'flash.autoConnect.selection': '已补齐选中节点间的连线',
  'flash.outputDir.set': '已把选中卡片的输出路径设为 {dir}',
  'flash.outputDir.cleared': '已把选中卡片改回「只留在画布」',
  'flash.noNodes': '画布上还没有节点',
  'flash.layout.noneSelected': '先选中要整理的节点',
  'flash.drop.noImage': '没有可用的图片文件：支持 png / jpg / webp / gif / bmp',
  'flash.image.noFile': '这张图还没有可用的文件',
  'flash.mask.cleared': '已清除这张图的蒙版',
  'flash.prompt.copied': '已复制提示词',
  'flash.prompt.copyFailed': '复制失败：浏览器拒绝了剪贴板访问',
  'flash.readFailed': '读取失败：{reason}',
  'flash.split.done': '已切出 {count} 张',
  'flash.drop.images': '已放入 {count} 张图',
  'flash.import.prompts': '已建 {count} 张提示词卡',
  'flash.snap.on': '吸附已开：拖动时会贴齐邻居',
  'flash.snap.off': '吸附已关：自由摆放',
  'flash.lock.on': '画布已锁：只可缩放，拖动 / 连线 / 选中 / 平移都停了',
  'flash.lock.off': '画布已解锁',
  'flash.renderError': '画布渲染出错：{reason}',

  // ---------- 画布其他 ----------
  'canvas.goSettings': '去设置',
  'canvas.minimap': '画布小地图',

  // ---------- 节点右键菜单（按 action id 取文案，见 canvas/menu-labels.ts） ----------
  'menu.preview': '预览大图',
  'menu.crop': '裁剪',
  'menu.upscale': '放大',
  'menu.split': '切分',
  'menu.mask': '蒙版重绘',
  'menu.replace': '替换图片',
  'menu.run': '运行',
  'menu.copyPrompt': '复制提示词',
  'menu.deleteSelection': '删除所选 {count} 项',
  'menu.delete': '删除',
  'menu.deleteOnly': '仅删除此项',
  'menu.aria': '节点操作',

  // ---------- 放大对话框 ----------
  'upscale.title': '放大图片',
  'upscale.subtitle': '本地按长边重采样，不调用接口、不花钱。',
  'upscale.longEdge': '长边目标',
  'upscale.algorithm': '算法',
  'upscale.algo.high': '高质量',
  'upscale.algo.bilinear': '平滑',
  'upscale.algo.nearest': '保像素',
  'upscale.original': '原图 {width} × {height}',
  'upscale.scale': '{ratio}×',
  'upscale.shrink': '目标比原图小，等于缩小',
  'upscale.reading': '读取中…',
  'upscale.note': '放大是本地重采样：细节不会凭空长出来。想要更清晰的另一张，应该改提示词重画。',
  'upscale.busy': '处理中…',
  'upscale.confirm': '放大并放入画布',
  'upscale.failed': '放大失败：{reason}',
  'upscale.resultName': '放大 {width}×{height} · {algorithm}',

  // ---------- 裁剪对话框 ----------
  'crop.title': '裁剪图片',
  'crop.subtitle': '拖框内平移、拖八个手柄改尺寸，确认后放入画布。',
  'crop.ratio': '比例',
  'crop.ratio.free': '自由',
  'crop.ratio.group': '裁剪比例',
  'crop.note': '裁剪后 {width} × {height}',
  'crop.note.original': '原图 {width} × {height}',
  'crop.note.gcd': '原比例 {ratio}',
  'crop.note.hint': '拖框内平移 · 拖八个手柄改尺寸 · 最小 {min}%',
  'crop.alt': '待裁剪',
  'crop.busy': '处理中…',
  'crop.confirm': '裁剪并放入画布',
  'crop.failed': '裁剪失败：{reason}',
  'crop.resultName': '裁剪 {width}×{height}',
  'crop.resultName.ratio': '裁剪 {width}×{height} · {ratio}',

  // ---------- 切分对话框 ----------
  'split.title': '切分图片',
  'split.subtitle': '按行 × 列切开这张图，每块单独放进画布。',
  'split.cols': '列',
  'split.rows': '行',
  'split.summary': '{count} 张',
  'split.summary.cell': '{count} 张 · 每张 {width} × {height}',
  'split.original': '原图 {width} × {height}',
  'split.readingOriginal': '正在读取原图尺寸…',
  'split.busy': '处理中…',
  'split.confirm': '确认切分（{count} 张）',
  'split.needTwo': '至少 2 张',
  'split.more': '…等 {count} 个',
  'split.tooSmall': '1 × 1 等于不切。把行或列调大一点。',
  'split.note': '切出来的每一块都会各自成为一个图片节点。',
  'split.failed': '切分失败：{reason}',
  'split.resultName': '切分 {index}/{total}',
  // ---------- 蒙版对话框 ----------
  'mask.title': '蒙版重绘',
  'mask.subtitle': '涂出要重绘的区域，导出与原图同尺寸的 PNG 蒙版。',
  'mask.mode.paint': '涂（要重绘）',
  'mask.mode.erase': '擦',
  'mask.brush': '笔刷',
  'mask.clear': '清空',
  'mask.strokes': '{count} 笔',
  'mask.noStrokes': '还没涂',
  'mask.note': '涂过的地方会被重绘，没涂的保持原样（导出的是与原图同尺寸的 PNG 蒙版）。',
  'mask.note.original': '原图 {width} × {height}',
  'mask.busy': '导出中…',
  'mask.confirm': '挂上蒙版',
  'mask.failed': '导出蒙版失败：{reason}',
  'mask.noBase': '原图还没加载好',
  'mask.noCanvas': '画布不可用',
  'mask.resultName': '已挂上蒙版：涂过的地方会被重绘',
  // ---------- 提示词导入对话框 ----------
  'import.title': '粘贴导入提示词卡片',
  'import.subtitle': '粘贴模型回复。每张卡片由标题、文本围栏与首行比例组成。',
  'import.aria': '待导入的提示词文本',
  'import.placeholder': '=== 秋日通勤包 ===\n`	ext\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n`\n\n=== 冬日围巾 ===\n`	ext\nratio: 2:3\n\nwool scarf on linen, morning window light\n`',
  'import.summary': '识别 {count} 张卡片',
  'import.summaryIssues': '发现 {count} 个问题',
  'import.card.untitled': '第 {index} 张',
  'import.card.defaultRatio': '默认比例',
  'import.card.fallback': '尺寸回退',
  'import.card.empty': '（提示词为空）',
  'import.hint': '一张卡一块：标题行 === 名字 ===，围栏里第一行写 ratio: 3:2，空行之后是提示词正文。尺寸表来自当前配置（{count} 档）；解析不出比例时用第一档。',
  'import.waiting': '粘贴内容后将在这里实时预览',
  'import.confirm': '确认建卡（{count}）',
  // ---------- 保存 / 加载 / 帮助对话框 ----------
  'save.title': '保存工作流',
  'save.subtitle': '给这个画布起个名字，之后可以再加载回来。',
  'save.defaultName': '画布 {stamp}',
  'save.nameAria': '工作流名称',
  'save.namePlaceholder': '给这个画布起个名字',
  'save.where': '存到 {dir}',
  'save.where.shared': '存到 {dir}（与原版共用一份）',
  'save.where.fallback': '插件自己的数据目录（未设置 imagora 目录）',
  'save.overwriteMore': '或者覆盖一个已有的（点一下填名字）',
  'save.overwriteTitle': '覆盖已存在的工作流？',
  'save.overwriteSubtitle': '「{name}」已经存在，保存会覆盖掉它。',
  'save.overwriteWarn': '覆盖后旧的那份就找不回来了；想保留就先返回改个名字。',
  'save.back': '返回改名',
  'save.overwrite': '覆盖保存',

  'load.title': '加载工作流',
  'load.subtitle': '选一份已保存的画布继续工作。',
  'load.empty': '这个目录里还没有工作流',
  'load.where': '读的是 {dir}',

  'help.title': '操作帮助',
  'help.subtitle': '拖入图片 · 右键框选 · 右键单击节点出菜单',
  'help.rows.canvas': '画布',
  'help.rows.canvasText': '右键拖拽框选 · 右键单击节点弹菜单 · Ctrl/Cmd+点击加选 · 滚轮缩放 · 空白拖拽平移 · 左下角「适应」全览 · 双击图片放大预览',
  'help.rows.node': '节点',
  'help.rows.nodeText': '悬停显右侧操作栏 · 选中后右上角可运行 / 整理 / 连线 / 设路径 / 删除 · 运行中可单卡取消',
  'help.rows.edge': '连线',
  'help.rows.edgeText': '图片→提示词 / 图片组 · 图片组→提示词 · 提示词→图片；提示词只有一条入边，多图经图片组聚合',
  'help.rows.keys': '快捷键',
  'help.rows.keysText': 'Ctrl+A 全选 · Ctrl+Z/Y 撤销恢复 · Delete 删除选中 · Ctrl+S 保存 · 双击连线或选中后 Delete 删除连线',
  'help.rows.refs': '引用',
  'help.rows.refsText': '提示词里写 @图片名 只挑指定图；不写就用全部入边图片',
  'help.rows.run': '运行',
  'help.rows.runText': '单卡「运行」· 工具栏「全部运行」「运行所选」「取消全部」',
  'help.rows.save': '保存',
  'help.rows.saveText': '命名保存进工作流；画布改动会自动落恢复快照',
  'help.config': '配置来源：{source} · 模型 {model}',
  'help.config.plugin': '插件内配置',
  'help.config.missing': '未找到',
  'help.output': '结果默认落在 {dir}',
  // ---------- 弹窗共用 ----------
  'dialog.readImageFailed': '读不到这张图：{reason}',

  // ---------- 画布节点：共用 ----------
  'node.missing': '文件缺失',
  'node.imageMissing': '图片缺失',
  'node.mask.title': '这张图已设蒙版（局部重绘）。点击清除',
  'node.mask.clear': '清除蒙版',
  'node.mask.badge': '蒙版',
  'node.refs': '引用 {count} 处',
  'node.noRefs': '未引用',

  // ---------- 图片节点：右侧操作栏 ----------
  'node.image.preview': '预览大图',
  'node.image.crop': '裁剪图片',
  'node.image.upscale': '放大图片',
  'node.image.split': '切分图片',
  'node.image.mask': '蒙版重绘',
  'node.image.replace': '替换图片',
  'node.image.delete': '删除图片',

  // ---------- 图片组节点 ----------
  'node.group.delete': '删除图片组',
  'node.group.count': '{count} 张图',
  'node.group.dedup': '去重',
  'node.group.dedup.title': '已去掉 {count} 张重复图片',

  // ---------- 提示词节点 ----------
  'node.prompt.placeholder': '英文提示词，例如：a red apple on white background',
  'node.prompt.untitled': '提示词生成',
  'node.prompt.delete': '删除提示词',
  'node.prompt.size': '尺寸',
  'node.prompt.size.title': '输出尺寸',
  'node.prompt.quality': '质量',
  'node.prompt.quality.title': '生成质量',
  'node.prompt.outputDir': '输出路径（留空 = 只留在画布）',
  'node.prompt.customSize': '{size}（自定义）',
  'node.prompt.run': '运行',
  'node.prompt.cancel': '取消',
  'node.prompt.cancelling': '取消中…',
  'node.prompt.queueing': '排队中…',
  'node.prompt.cancel.title': '排队中的不再发出；生成中的等这张跑完才作废',

  // ---------- 节点状态 ----------
  'status.idle': '就绪',
  'status.queued': '排队中',
  'status.running': '生成中',
  'status.done': '完成',
  'status.failed': '失败',
  'status.generating': '生成中 {seconds}s',
  'status.done.withCount': '完成 · {count} 张',
  'status.failed.withReason': '失败：{reason}',
} as const

/** 本词典的键集。拼错键名、漏写译文都过不了编译。 */
export type LocaleKey = keyof typeof zh

/**
 * English dictionary.
 *
 * Written as English, not as a gloss of the Chinese: short imperatives on buttons,
 * full sentences only where the reader needs the consequence. Sentence case
 * throughout — the surrounding DSH chrome uses it, and Title Case here would
 * look like a different product.
 */
export const en: Record<LocaleKey, string> = {
  'common.notSet': 'Not set',
  'common.save': 'Save',
  'common.saving': 'Saving…',
  'common.cancel': 'Cancel',
  'common.close': 'Close',
  'common.confirm': 'OK',
  'common.reset': 'Reset',
  'common.delete': 'Delete',

  'panel.entry': 'Freeform canvas',

  'toolbar.profile.follow': "Follow imagora's .env",
  'toolbar.profile.title': 'Profile: picks the endpoint and the API key',
  'toolbar.model.title': '{profile} · current model',
  'toolbar.settings': 'Settings',
  'toolbar.settings.title': 'Endpoint, API key, model, and folders',

  'toolbar.upload': 'Upload',
  'toolbar.upload.title': 'Pick images from this machine — or drag them in, or paste',
  'toolbar.paste': 'Paste prompts',
  'toolbar.paste.title': 'Paste a model reply; each line becomes a prompt card',
  'toolbar.newPrompt': 'New prompt card',
  'toolbar.newPrompt.title': 'Drag onto the canvas to drop it where you let go',
  'toolbar.newGroup': 'New image group',
  'toolbar.newGroup.title': 'Drag onto the canvas to drop it where you let go',
  'toolbar.save': 'Save workflow',
  'toolbar.save.title': 'Name this canvas and keep it',
  'toolbar.load': 'Load workflow',
  'toolbar.load.title': 'Continue from a saved canvas',
  'toolbar.history': 'Generation history',
  'toolbar.history.title': 'Every image on disk, even ones you deleted from the canvas',
  'toolbar.outputDir': 'Default output folder',
  'toolbar.outputDir.title': 'New cards start here: {dir}',
  'toolbar.undo': 'Undo',
  'toolbar.undo.title': 'Undo the last step (Ctrl+Z)',
  'toolbar.redo': 'Redo',
  'toolbar.redo.title': 'Reapply the step you undid (Ctrl+Y)',
  'toolbar.autoConnect': 'Auto-connect',
  'toolbar.autoConnect.title': 'Wire up the obvious links by position: image → prompt → image',
  'toolbar.runAll': 'Run all',
  'toolbar.runAll.title': 'Run every prompt card',
  'toolbar.cancelAll': 'Cancel all ({count})',
  'toolbar.cancelAll.title': "Queued jobs won't start; the running one is discarded after it finishes (it still lands on disk and is still billed)",

  'flash.autoConnect.done': 'Filled in the obvious links',
  'flash.autoConnect.noneSelected': 'Select the nodes to connect first',
  'flash.autoConnect.selection': 'Linked the selected nodes',
  'flash.outputDir.set': 'Output folder for the selected cards: {dir}',
  'flash.outputDir.cleared': 'Selected cards now stay on the canvas only',
  'flash.noNodes': 'Nothing on the canvas yet',
  'flash.layout.noneSelected': 'Select the nodes to tidy first',
  'flash.drop.noImage': 'No usable image: png / jpg / webp / gif / bmp',
  'flash.image.noFile': 'This image has no file yet',
  'flash.mask.cleared': 'Mask cleared',
  'flash.prompt.copied': 'Prompt copied',
  'flash.prompt.copyFailed': 'Copy failed: the browser blocked clipboard access',
  'flash.readFailed': 'Could not read: {reason}',
  'flash.split.done': 'Split into {count} images',
  'flash.drop.images': 'Added {count} images',
  'flash.import.prompts': 'Created {count} prompt cards',
  'flash.snap.on': 'Snapping on: dragged cards line up with their neighbours',
  'flash.snap.off': 'Snapping off: cards go wherever you put them',
  'flash.lock.on': 'Canvas locked: zoom only — no dragging, connecting, selecting, or panning',
  'flash.lock.off': 'Canvas unlocked',
  'flash.renderError': 'Canvas failed to render: {reason}',

  'canvas.goSettings': 'Open settings',
  'canvas.minimap': 'Canvas minimap',

  'menu.preview': 'View full size',
  'menu.crop': 'Crop',
  'menu.upscale': 'Upscale',
  'menu.split': 'Split into a grid',
  'menu.mask': 'Repaint with a mask',
  'menu.replace': 'Replace image',
  'menu.run': 'Run',
  'menu.copyPrompt': 'Copy prompt',
  'menu.deleteSelection': 'Delete {count} selected',
  'menu.delete': 'Delete',
  'menu.deleteOnly': 'Delete just this one',
  'menu.aria': 'Node actions',

  'upscale.title': 'Upscale',
  'upscale.subtitle': 'Resampled locally to a target long edge. No API call, no cost.',
  'upscale.longEdge': 'Long edge',
  'upscale.algorithm': 'Algorithm',
  'upscale.algo.high': 'High quality',
  'upscale.algo.bilinear': 'Smooth',
  'upscale.algo.nearest': 'Keep pixels',
  'upscale.original': 'Original {width} × {height}',
  'upscale.scale': '{ratio}×',
  'upscale.shrink': 'Smaller than the original — this shrinks it',
  'upscale.reading': 'Reading…',
  'upscale.note': 'Upscaling resamples locally; it cannot invent detail. For a sharper image, rewrite the prompt and generate again.',
  'upscale.busy': 'Working…',
  'upscale.confirm': 'Upscale and add to canvas',
  'upscale.failed': 'Upscale failed: {reason}',
  'upscale.resultName': 'Upscale {width}×{height} · {algorithm}',

  'dialog.readImageFailed': 'Could not read this image: {reason}',

  'crop.title': 'Crop',
  'crop.subtitle': 'Drag inside the frame to move it, drag a handle to resize, then confirm.',
  'crop.ratio': 'Ratio',
  'crop.ratio.free': 'Free',
  'crop.ratio.group': 'Crop ratio',
  'crop.note': 'Result {width} × {height}',
  'crop.note.original': 'Original {width} × {height}',
  'crop.note.gcd': 'Native ratio {ratio}',
  'crop.note.hint': 'Drag inside to move · drag a handle to resize · down to {min}%',
  'crop.alt': 'Image to crop',
  'crop.busy': 'Working…',
  'crop.confirm': 'Crop and add to canvas',
  'crop.failed': 'Crop failed: {reason}',
  'crop.resultName': 'Crop {width}×{height}',
  'crop.resultName.ratio': 'Crop {width}×{height} · {ratio}',

  'split.title': 'Split image',
  'split.subtitle': 'Cut this image into a rows × columns grid; each cell becomes its own node.',
  'split.cols': 'Columns',
  'split.rows': 'Rows',
  'split.summary': '{count} images',
  'split.summary.cell': '{count} images · {width} × {height} each',
  'split.original': 'Original {width} × {height}',
  'split.readingOriginal': 'Reading the original size…',
  'split.busy': 'Working…',
  'split.confirm': 'Split into {count}',
  'split.needTwo': 'At least 2 needed',
  'split.more': '…{count} in total',
  'split.tooSmall': '1 × 1 is no split at all. Raise the rows or columns.',
  'split.note': 'Each piece becomes its own image node on the canvas.',
  'split.failed': 'Split failed: {reason}',
  'split.resultName': 'Split {index}/{total}',

  'mask.title': 'Repaint with a mask',
  'mask.subtitle': 'Paint the area to repaint; the exported PNG mask matches the original size.',
  'mask.mode.paint': 'Paint (to repaint)',
  'mask.mode.erase': 'Erase',
  'mask.brush': 'Brush',
  'mask.clear': 'Clear',
  'mask.strokes': '{count} strokes',
  'mask.noStrokes': 'Nothing painted yet',
  'mask.note': 'Painted areas get repainted; everything else stays. The exported mask is a PNG at the original size.',
  'mask.note.original': 'Original {width} × {height}',
  'mask.busy': 'Exporting…',
  'mask.confirm': 'Attach mask',
  'mask.failed': 'Could not export the mask: {reason}',
  'mask.noBase': 'The image has not loaded yet',
  'mask.noCanvas': 'Canvas unavailable',
  'mask.resultName': 'Mask attached — painted areas will be repainted',

  'import.title': 'Paste prompt cards',
  'import.subtitle': 'Paste a model reply. Each card is a title, a fenced block, and a ratio on the first line.',
  'import.aria': 'Prompt text to import',
  'import.placeholder': '=== Autumn commute bag ===\n`	ext\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n`\n\n=== Winter scarf ===\n`	ext\nratio: 2:3\n\nwool scarf on linen, morning window light\n`',
  'import.summary': '{count} cards recognised',
  'import.summaryIssues': '{count} problems found',
  'import.card.untitled': 'Card {index}',
  'import.card.defaultRatio': 'Default ratio',
  'import.card.fallback': 'Size fell back',
  'import.card.empty': '(empty prompt)',
  'import.hint': 'One card per block: a title line === name ===, then ratio: 3:2 inside the fence, then a blank line and the prompt. Sizes come from the current config ({count} options); if no ratio parses, the first one is used.',
  'import.waiting': 'Paste something to see a live preview here',
  'import.confirm': 'Create {count} cards',

  'save.title': 'Save workflow',
  'save.subtitle': 'Name this canvas so you can load it again later.',
  'save.defaultName': 'Canvas {stamp}',
  'save.nameAria': 'Workflow name',
  'save.namePlaceholder': 'Name this canvas',
  'save.where': 'Saved to {dir}',
  'save.where.shared': 'Saved to {dir} (shared with original Imagora)',
  'save.where.fallback': "the plugin's own data folder (no imagora folder set)",
  'save.overwriteMore': 'Or overwrite an existing one (click to fill in the name)',
  'save.overwriteTitle': 'Overwrite this workflow?',
  'save.overwriteSubtitle': '“{name}” already exists. Saving replaces it.',
  'save.overwriteWarn': 'The old copy is gone for good. Go back and rename if you want to keep it.',
  'save.back': 'Back',
  'save.overwrite': 'Overwrite',

  'load.title': 'Load workflow',
  'load.subtitle': 'Continue from a saved canvas.',
  'load.empty': 'No workflows in this folder yet',
  'load.where': 'Looked in {dir}',

  'help.title': 'How to use this canvas',
  'help.subtitle': 'Drop images in · right-drag to box-select · right-click a node for its menu',
  'help.rows.canvas': 'Canvas',
  'help.rows.canvasText': 'Right-drag to box-select · right-click a node for its menu · Ctrl/Cmd+click to add to the selection · wheel to zoom · drag empty space to pan · “Fit” at bottom-left for an overview · double-click an image to enlarge',
  'help.rows.node': 'Nodes',
  'help.rows.nodeText': 'Hover for the action rail · once selected, run / tidy / connect / set folder / delete from the top-right bar · a running card can be cancelled on its own',
  'help.rows.edge': 'Links',
  'help.rows.edgeText': 'image → prompt or group · group → prompt · prompt → image. A prompt takes one incoming link; multiple images are aggregated through a group',
  'help.rows.keys': 'Keys',
  'help.rows.keysText': 'Ctrl+A select all · Ctrl+Z/Y undo and redo · Delete removes the selection · Ctrl+S saves · double-click a link, or select it and press Delete',
  'help.rows.refs': 'References',
  'help.rows.refsText': 'Write @image-name in a prompt to use only those images; leave it out to use every incoming image',
  'help.rows.run': 'Running',
  'help.rows.runText': '“Run” on a single card · “Run all”, “Run selected”, “Cancel all” in the toolbar',
  'help.rows.save': 'Saving',
  'help.rows.saveText': 'Save under a name to keep it as a workflow; canvas edits also land in a recovery snapshot',
  'help.config': 'Config from {source} · model {model}',
  'help.config.plugin': 'the plugin settings',
  'help.config.missing': 'not found',
  'help.output': 'Output defaults to {dir}',

  'node.missing': 'File missing',
  'node.imageMissing': 'No image',
  'node.mask.title': 'This image has a mask; every re-run repaints only inside it. Click to clear',
  'node.mask.clear': 'Clear mask',
  'node.mask.badge': 'Mask',
  'node.refs': 'Used {count}×',
  'node.noRefs': 'Unused',

  'node.image.preview': 'View full size',
  'node.image.crop': 'Crop',
  'node.image.upscale': 'Upscale',
  'node.image.split': 'Split into a grid',
  'node.image.mask': 'Repaint with a mask',
  'node.image.replace': 'Replace image',
  'node.image.delete': 'Delete image',

  'node.group.delete': 'Delete group',
  'node.group.count': '{count} images',
  'node.group.dedup': 'Deduped',
  'node.group.dedup.title': 'Removed {count} duplicate images',

  'node.prompt.placeholder': 'English prompt, e.g. a red apple on white background',
  'node.prompt.untitled': 'Prompt output',
  'node.prompt.delete': 'Delete prompt',
  'node.prompt.size': 'Size',
  'node.prompt.size.title': 'Output size',
  'node.prompt.quality': 'Quality',
  'node.prompt.quality.title': 'Generation quality',
  'node.prompt.outputDir': 'Output folder (empty = canvas only)',
  'node.prompt.customSize': '{size} (custom)',
  'node.prompt.run': 'Run',
  'node.prompt.cancel': 'Cancel',
  'node.prompt.cancelling': 'Cancelling…',
  'node.prompt.queueing': 'Queued…',
  'node.prompt.cancel.title': "Queued jobs won't start; the running one is discarded once it finishes",

  'status.idle': 'Ready',
  'status.queued': 'Queued',
  'status.running': 'Generating',
  'status.done': 'Done',
  'status.failed': 'Failed',
  'status.generating': 'Generating {seconds}s',
  'status.done.withCount': 'Done · {count}',
  'status.failed.withReason': 'Failed: {reason}',
}

/** 往译文里填 `{name}` 占位符。缺参时保留原样的 `{name}`，好让漏传当场看得见。 */
export function interpolate(template: string, params?: Record<string, string | number>): string {
  if (!params) return template
  return template.replace(/\{(\w+)\}/g, (whole, name: string) =>
    Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : whole,
  )
}

/** 不依赖宿主的翻译函数形状。宿主注入的 `t` 与它兼容。 */
export type Translate = (key: LocaleKey, params?: Record<string, string | number>) => string

/**
 * 没有宿主 locale 面时的兜底翻译：直接查 `zh`。
 *
 * 什么时候会用到：渲染验收台与冒烟脚本直接挂 `CanvasApp`，不经过 slot 的
 * `locale:` 座位，因此拿不到宿主注入的 `t`。**正式运行时永远走宿主注入那条路**。
 * 兜底选中文而不是英文，是因为本项目的基准界面、截图与文档都是中文。
 */
export const fallbackTranslate: Translate = (key, params) => interpolate(zh[key], params)
