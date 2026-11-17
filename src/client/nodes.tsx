// 三类画布节点：图片 / 提示词 / 图片组。
// 标记照搬 Imagora 的 CanvasNodes.tsx（panel-card + 右侧 hover 操作栏 + 状态灯），
// 只把取数与动作换成画布 context —— 这是跑在插件里必须改的一处。
import { createContext, memo, useContext, useEffect, useRef, useState } from 'react'
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react'
import type { CanvasGroupNodeData, CanvasImageNodeData, CanvasPromptNodeData } from './lib/types'
import { useThumbnail } from './lib/useThumbnail'
import { Icon } from './icons'
import type { ImagoraConfig } from './api'
import { Select } from './select'
import { mergeCustomOption } from './lib/customValue'
import { useT } from './i18n'
import type { LocaleKey, Translate } from './locales'

export interface NodeActions {
  updatePrompt: (nodeId: string, patch: Partial<CanvasPromptNodeData>) => void
  runPrompt: (nodeId: string) => void
  cancelPrompt: (nodeId: string) => void
  deleteNode: (nodeId: string) => void
  /** 弹系统目录选择器，把选中的目录写进这张卡（取消则原值不动） */
  pickOutputDir: (nodeId: string) => Promise<void>
  zoomImage: (nodeId: string) => void
  replaceImage: (nodeId: string) => void
  /** 图片加工：分别打开裁剪 / 切分 / 放大 / 蒙版对话框 */
  cropImage: (nodeId: string) => void
  maskImage: (nodeId: string) => void
  /** 清除这张图挂着的蒙版（角标点一下就清） */
  clearMask: (nodeId: string) => void
  splitImage: (nodeId: string) => void
  upscaleImage: (nodeId: string) => void
  config: ImagoraConfig | null
}

export const NodeActionContext = createContext<NodeActions | null>(null)

/**
 * LOD 抽象模式标志：缩到 10% 以下时节点降级为轻量卡片。
 *
 * **为什么走 context 而不是给每个节点传 prop**：`NODE_TYPES` 是模块级的稳定对象，
 * 节点类型一旦变化，React Flow 会把**所有节点重挂载** —— 入场动画重播、节点上的
 * 输入框失焦、正在敲的提示词丢掉。原版是把 `lod` 塞进 nodeTypes 的工厂函数里
 * （每帧重建），他们那边节点组件是纯展示的，代价小；我们这里节点内有 textarea
 * 与下拉框，重挂载的代价肉眼可见。
 *
 * 所以：**nodeTypes 保持稳定，lod 从 context 进来**。context 变化只触发重渲染，
 * 不触发重挂载。
 */
export const LodContext = createContext(false)

/** 读 LOD 标志（默认 false = 完整渲染） */
function useLod(): boolean {
  return useContext(LodContext)
}

function useActions(): NodeActions {
  const value = useContext(NodeActionContext)
  if (!value) throw new Error('dsh-imagora: 节点缺少画布上下文')
  return value
}

/**
 * 提示词输入框：输入法合成期间不把 value 写回 DOM。
 *
 * 为什么必须这么做（实测，不是推测）：受控 textarea 在中文拼音输入时，
 * 每次 compositionupdate 都会触发 onChange → setNodes → 重渲染 → React
 * 把 value 重新写进 DOM。浏览器认为合成内容被外部改动，**直接提交当前
 * 拼音并重置缓冲区**，于是候选词还没选，已输入的字母就被当成正文一段段
 * 追加：输 `nihao` 得到 `nninihnihani…`，看起来就是「打字突然中断」。
 *
 * 因此：合成期间只更新本地副本（与 DOM 完全一致，React 不会碰 DOM），
 * `compositionend` 才把最终结果写回节点状态。
 */
function PromptTextarea({ value, onChange }: { value: string; onChange: (next: string) => void }) {
  const [local, setLocal] = useState(value)
  const composing = useRef(false)
  const t = useT()

  // 外部改动（加载工作流 / 撤销 / 恢复快照）同步进来；合成中的本地输入不回灌，
  // 否则正在拼的拼音会被节点里的旧值冲掉。
  useEffect(() => {
    if (!composing.current) setLocal(value)
  }, [value])

  return (
    <textarea
      className="im-field nodrag"
      rows={5}
      value={local}
      placeholder={t('node.prompt.placeholder')}
      onCompositionStart={() => {
        composing.current = true
      }}
      onCompositionEnd={event => {
        composing.current = false
        setLocal(event.currentTarget.value)
        onChange(event.currentTarget.value)
      }}
      onChange={event => {
        const next = event.target.value
        setLocal(next)
        if (!composing.current) onChange(next)
      }}
    />
  )
}

function Handles() {
  return (
    <>
      <Handle type="target" position={Position.Top} className="im-handle" />
      <Handle type="source" position={Position.Bottom} className="im-handle" />
    </>
  )
}

/** 右侧竖排操作栏：竖排只占右侧一条窄带，不会在 380px 宽的卡片上方压住邻居节点。 */
function Rail({ children }: { children: React.ReactNode }) {
  return <div className="im-rail nodrag">{children}</div>
}

/**
 * 操作栏按钮：原版是 `btn-ghost btn-icon btn-icon--sm` 三个类叠出来的
 * —— ghost 给「主体色图标 + hover 涟漪反白」，btn-icon--sm 给 30×30 / 圆角 8。
 * 所以这里也叠 `im-btn-ghost` + `im-icon-btn`，而不是另写一套中性灰按钮：
 * 两套并存会让「节点上的图标」和「工具栏上的按钮」是两种观感。
 * 危险项叠 `im-btn-danger`（原版是同名修饰类）。
 */
function RailButton({
  label,
  onClick,
  danger,
  children,
}: {
  label: string
  onClick: () => void
  danger?: boolean
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      className={`im-icon-btn im-btn-ghost nodrag${danger ? ' im-btn-danger' : ''}`}
      title={label}
      aria-label={label}
      onClick={event => {
        event.stopPropagation()
        onClick()
      }}
    >
      {children}
    </button>
  )
}

/* ---------------- 图片节点 ---------------- */
export type ImageFlowNode = Node<CanvasImageNodeData, 'image'>

export const ImageNode = memo(function ImageNode({ id, data, selected }: NodeProps<ImageFlowNode>) {
  const actions = useActions()
  const lod = useLod()
  const t = useT()
  const [broken, setBroken] = useState(false)
  const missing = data.missing || broken
  // 卡片只显示 128×160，原图却是 3072×4096（摊开约 48 MB）—— 一律走缩略图。
  // 原图地址仍留给预览 / 裁剪 / 放大 / 蒙版，那些地方要真实像素。
  const thumbSrc = useThumbnail(data.url)
  return (
    <div
      className={`im-panel-card${selected ? ' is-selected' : ''}${missing ? ' is-missing' : ''}`}
      /* 146 = 缩略图 128 + 左右内边距 8×2 + 左右边框 1×2，与缩略图严丝合缝。
       *
       * ⚠️ `boxSizing` 必须显式写 `border-box`（维护者报过「右侧有多余内间隔，左边没有」）：
       * 插件里没有 Tailwind 的全局 reset，默认是 `content-box` —— 那时 `width: 144` 指的是
       * **内容宽**，缩略图只占 128，右边就空出 16px 死区（实测左 9 / 右 25）。
       * 原版靠 Tailwind preflight 的 `*,::before,::after{box-sizing:border-box}` 拿到 border-box，
       * 所以我们这边凡是「写了 width 又写了 padding」的元素都得自己声明一次。 */
      style={{ padding: 8, width: 146, boxSizing: 'border-box' }}
    >
      <Handles />
      {missing ? (
        <span className="im-chip is-danger" style={{ position: 'absolute', right: 4, top: 4, zIndex: 20 }}>
          {t('node.missing')}
        </span>
      ) : null}
      {/* 蒙版角标：蒙版会一直跟着这张图走，之后每次拿它当参考图都按蒙版重绘。
          没有可见提示的话用户会忘掉自己设过，生成结果不对还找不到原因 ——
          所以角标本身就是一个按钮，点一下清除（原版也是这么做的）。
          放左上角：右上角已被「文件缺失」占用。 */}
      {data.maskDataUrl ? (
        <button
          type="button"
          className="im-chip is-brand im-chip--action nodrag"
          style={{ position: 'absolute', left: 4, top: 4, zIndex: 20 }}
          title={t('node.mask.title')}
          aria-label={t('node.mask.clear')}
          onClick={event => {
            event.stopPropagation()
            actions.clearMask(id)
          }}
        >
          {t('node.mask.badge')}
        </button>
      ) : null}
      {/* LOD 抽象模式：去掉右侧操作栏（7 个 30px 按钮在 10% 下每颗不到 3px，
          既点不到也看不清，却照样参与布局与合成）。缩略图、名称、引用行都留着 ——
          缩远了要看的是「哪张图连着什么」，不是能对它做什么。 */}
      {lod ? null : (
        <Rail>
          <RailButton label={t('node.image.preview')} onClick={() => actions.zoomImage(id)}>
            <Icon name="eye" />
          </RailButton>
          <RailButton label={t('node.image.crop')} onClick={() => actions.cropImage(id)}>
            <Icon name="crop" />
          </RailButton>
          <RailButton label={t('node.image.upscale')} onClick={() => actions.upscaleImage(id)}>
            <Icon name="expand" />
          </RailButton>
          <RailButton label={t('node.image.split')} onClick={() => actions.splitImage(id)}>
            <Icon name="grid" />
          </RailButton>
          <RailButton label={t('node.image.mask')} onClick={() => actions.maskImage(id)}>
            <Icon name="wand" />
          </RailButton>
          <RailButton label={t('node.image.replace')} onClick={() => actions.replaceImage(id)}>
            <Icon name="image" />
          </RailButton>
          <RailButton label={t('node.image.delete')} danger onClick={() => actions.deleteNode(id)}>
            <Icon name="trash" />
          </RailButton>
        </Rail>
      )}
      {/* 固定展示框：避免图片加载后撑高节点，object-contain 保留完整画面。
          卡片只用缩略图：原图 3072×4096 摊开一次约 48 MB，而这里只显示 128×160。
          原图地址仍留给双击放大 / 裁剪 / 放大 / 蒙版（见各自的回调）。 */}
      <div
        className="im-thumb"
        onDoubleClick={event => {
          event.stopPropagation()
          actions.zoomImage(id)
        }}
      >
        {data.url && thumbSrc ? (
          <img
            src={thumbSrc}
            alt={data.name}
            loading="lazy"
            decoding="async"
            draggable={false}
            onError={() => setBroken(true)}
          />
        ) : data.url ? (
          // 缩略图还在生成：占位（格子尺寸由 .im-thumb 固定，不会引起布局跳动）
          <span className="im-thumb-placeholder" aria-hidden />
        ) : (
          <span className="im-muted" style={{ fontSize: 11 }}>
            {t('node.imageMissing')}
          </span>
        )}
      </div>
      <div className="im-thumb-label" title={data.name}>
        {data.name}
      </div>
      <div style={{ fontSize: 11, color: data.refCount > 0 ? 'var(--im-brand)' : 'var(--im-ink-3)' }}>
        {data.refCount > 0 ? t('node.refs', { count: data.refCount }) : t('node.noRefs')}
      </div>
    </div>
  )
})

/* ---------------- 图片组节点 ---------------- */
export type GroupFlowNode = Node<CanvasGroupNodeData, 'group'>

/**
 * 图片组：照搬 Imagora 的 GroupNode。
 *
 * 用几张错位的背景卡把「这是一组、里面有 N 张」直接画出来，不靠读数字。
 * 两条约束都是从原版注释里继承来的，别改回去：
 *
 * 1. **只往左上错开，不往右下**。右下会让叠卡伸出卡面、压到相邻节点，看起来像
 *    「一堆没对齐的纸片糊在外面」。错开量由根节点的 pt-3 pl-3 预留出来，
 *    所以叠卡永远落在节点边界以内。
 * 2. **不旋转、各层同色**。旋转会让每组朝向都不一样（整块画布看着乱），
 *    不同掺色叠起来会出现「底层发白、前两层发红」的割裂感。
 *
 * 夹到 3 张：张数是数据不能当渲染数量，40 张的组渲染 39 层合成层会掉帧。
 *
 * ⚠️ 根节点**不挂** `im-panel-card`：原版图片组的根元素只有 `.node-pop`，没有
 * `.panel-card`（那是图片卡/提示词卡才有的），所以外层是**方角、无边框**的浮面 +
 * 大投影，看到的那道圆角边属于内层卡面。别"顺手补个圆角卡片"——那会和原版不一样。
 */
const STACK_STEP_PX = 4

export const GroupNode = memo(function GroupNode({ id, data, selected }: NodeProps<GroupFlowNode>) {
  const actions = useActions()
  const lod = useLod()
  const t = useT()
  const mb = data.totalSize > 0 ? (data.totalSize / (1024 * 1024)).toFixed(1) : '0.0'
  const dup = data.duplicateCount ?? 0
  const stackCount = Math.min(Math.max(data.imageCount - 1, 0), 3)

  return (
    <div className={`im-group-node${selected ? ' is-selected' : ''}`}>
      <Handles />
      {/* LOD 抽象模式：去掉悬停删除栏，只保留组本体（组节点本身已经足够轻量） */}
      {lod ? null : (
        <Rail>
          <RailButton label={t('node.group.delete')} danger onClick={() => actions.deleteNode(id)}>
            <Icon name="trash" />
          </RailButton>
        </Rail>
      )}
      {/* 叠卡与卡面同处一个定位父级：错开量落在根节点 padding 的预留区里，不越界 */}
      <div className="im-group-stack">
        {Array.from({ length: stackCount }, (_, index) => (
          <div
            key={index}
            aria-hidden
            className="im-group-stack-card"
            style={{ transform: `translate(${-(index + 1) * STACK_STEP_PX}px, ${-(index + 1) * STACK_STEP_PX}px)` }}
          />
        ))}
        <div className="im-group-face">
          <div className="im-group-count">{t('node.group.count', { count: data.imageCount })}</div>
          <div className="im-group-size">{mb} MB</div>
          {dup > 0 ? (
            <span
              className="im-chip im-chip--sm is-brand im-group-dup"
              title={t('node.group.dedup.title', { count: dup })}
            >
              {t('node.group.dedup')}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  )
})

/* ---------------- 提示词节点 ---------------- */
export type PromptFlowNode = Node<CanvasPromptNodeData, 'prompt'>

function Elapsed({ from }: { from?: number | undefined }) {
  const t = useT()
  const [seconds, setSeconds] = useState(() => (from ? Math.max(0, Math.floor((Date.now() - from) / 1000)) : 0))
  useEffect(() => {
    if (!from) return undefined
    const timer = window.setInterval(() => setSeconds(Math.max(0, Math.floor((Date.now() - from) / 1000))), 1000)
    return () => window.clearInterval(timer)
  }, [from])
  return <>{t('status.generating', { seconds })}</>
}

/** 状态灯 title 用的键；未知状态回落就绪（与原版 STATUS_TEXT 的默认值同义）。 */
const STATUS_KEY: Record<string, LocaleKey> = {
  idle: 'status.idle',
  queued: 'status.queued',
  running: 'status.running',
  done: 'status.done',
  failed: 'status.failed',
}

/**
 * LOD 抽象模式下的提示词摘要（照搬原版 `promptStatusSummary`）：
 * 一行大字说状态，title 里带完整信息。
 *
 * 为什么"完成"要带张数：缩到这个倍率时节点卡本身只有屏幕上一两厘米，
 * 能读到的只有中心和几个字。只写「完成」看不出生成了几张，得再点进去 ——
 * 而抽象模式存在的意义恰恰是「扫一眼就知道全局跑到哪了」。
 */
function promptStatusSummary(data: CanvasPromptNodeData, t: Translate): { text: string; detail: string; tone: string } {
  switch (data.status) {
    case 'queued':
      return { text: t('status.queued'), detail: t('status.queued'), tone: 'is-queued' }
    case 'running':
      return { text: t('status.running'), detail: t('status.running'), tone: 'is-running' }
    case 'done': {
      const line = t('status.done.withCount', { count: data.resultCount ?? 0 })
      return { text: line, detail: line, tone: 'is-done' }
    }
    case 'failed':
      return {
        text: t('status.failed'),
        detail: data.message ? t('status.failed.withReason', { reason: data.message }) : t('status.failed'),
        tone: 'is-failed',
      }
    default:
      return { text: t('status.idle'), detail: t('status.idle'), tone: 'is-idle' }
  }
}

export const PromptNode = memo(function PromptNode({ id, data, selected }: NodeProps<PromptFlowNode>) {
  const actions = useActions()
  const lod = useLod()
  const t = useT()
  const config = actions.config
  const busy = data.status === 'queued' || data.status === 'running'
  const sizes = config?.sizes ?? []
  const qualities = config?.qualities ?? []
  const sizeOptions =
    sizes.some(row => row.value === data.size) || !data.size
      ? sizes
      : [...sizes, { value: data.size, label: t('node.prompt.customSize', { size: data.size }), cost: 0 }]
  const qualityEffective = config?.qualityEffective !== false

  /* LOD 抽象模式（照搬原版 PromptNode 的 lod 分支）：标题大字 + 状态居中，
     不渲染表单、不出运行按钮；连接把手与拖拽照旧。
     卡面尺寸不变（原版也是 `!w-[380px] min-h-[320px]`）—— 一缩尺寸，
     进/出抽象模式时相邻节点会互相挤动，整块画布跳一下。 */
  if (lod) {
    const summary = promptStatusSummary(data, t)
    return (
      <div
        className={`im-panel-card im-node-lod${selected ? ' is-selected' : ''}`}
        style={{ width: 380, minHeight: 320, padding: 12, boxSizing: 'border-box' }}
      >
        <Handles />
        <div className="im-lod-title" title={data.title ?? t('node.prompt.untitled')}>
          {data.title ?? t('node.prompt.untitled')}
        </div>
        <div className={`im-lod-status ${summary.tone}`} title={summary.detail}>
          {data.status === 'running' ? <Elapsed from={data.startedAtMs} /> : summary.text}
        </div>
      </div>
    )
  }

  return (
    <div
      className={`im-panel-card${selected ? ' is-selected' : ''}`}
      style={{ width: 380, padding: 12, boxSizing: 'border-box' }}
    >
      <Handles />
      {/* 右侧操作区：状态灯 + 删除。
          灯包一层居中容器（原版是 flex justify-center py-0.5）：
          直接放在 flex 列里会被 align-items 拉伸成一条横杠，间隙也会跟着走形。 */}
      <Rail>
        <span className="im-rail-dot" title={t(STATUS_KEY[data.status] ?? 'status.idle')}>
          <span className={`im-dot is-${data.status}`} />
        </span>
        <RailButton label={t('node.prompt.delete')} danger onClick={() => actions.deleteNode(id)}>
          <Icon name="trash" />
        </RailButton>
      </Rail>

      {/* 标题只做定位标签：完整提示词就在下方 textarea 里可见可编辑 */}
      <div
        className="im-node-title"
        style={{ marginBottom: 8, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
      >
        {data.title ?? t('node.prompt.untitled')}
      </div>

      <PromptTextarea value={data.prompt} onChange={next => actions.updatePrompt(id, { prompt: next })} />

      <div
        className="nodrag"
        style={{
          display: 'grid',
          gap: 8,
          gridTemplateColumns: qualityEffective ? '7fr 3fr' : '1fr',
          marginTop: 8,
        }}
      >
        <div style={{ minWidth: 0 }}>
          <span className="im-label">{t('node.prompt.size')}</span>
          {/* 尺寸可能有十几项（模型自带 size_options 时），超过阈值会自动出搜索框。
              mergeCustomOption：值不在清单里时补一条「自定义」，否则触发器会显示
              「请选择」——加载了别的工作流、尺寸被改到清单外时就会这样。
              没有开 allowCustom：那会新增一个手填尺寸的入口，属于行为变化，先不擅自加。 */}
          <Select
            className="im-select-fill"
            options={mergeCustomOption(sizeOptions, data.size)}
            value={data.size}
            title={t('node.prompt.size.title')}
            onChange={value => actions.updatePrompt(id, { size: value })}
          />
        </div>
        {qualityEffective ? (
          <div style={{ minWidth: 0 }}>
            <span className="im-label">{t('node.prompt.quality')}</span>
            <Select
              className="im-select-fill"
              options={qualities.map(quality => ({ value: quality, label: quality }))}
              value={data.quality}
              title={t('node.prompt.quality.title')}
              onChange={value => actions.updatePrompt(id, { quality: value })}
            />
          </div>
        ) : null}
      </div>

      <div className="nodrag" style={{ marginTop: 8 }}>
        <span className="im-label">{t('node.prompt.outputDir')}</span>
        {/* 输入框 + 一枚文件夹按钮：与上游 FolderPicker 同一形态（可手输，也可点按钮弹系统
            目录框）。按钮做成图标而不是文字 —— 380px 的卡片里「选择文件夹」五个中文字
            加上输入框会把路径挤成一截，英文 Choose folder 更宽。
            placeholder 放当前生效的默认目录：留空等于用它，得让人看得见。 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <input
            className="im-field"
            style={{ minWidth: 0, flex: 1 }}
            value={data.outputDir}
            placeholder={config?.defaultOutputDir ?? ''}
            title={data.outputDir || config?.defaultOutputDir || ''}
            onChange={event => actions.updatePrompt(id, { outputDir: event.target.value })}
          />
          <button
            type="button"
            className="im-icon-btn im-btn-ghost nodrag"
            title={t('common.chooseFolder')}
            aria-label={t('common.chooseFolder')}
            onClick={event => {
              event.stopPropagation()
              void actions.pickOutputDir(id)
            }}
          >
            <Icon name="folder" />
          </button>
        </div>
      </div>

      {data.status === 'failed' && data.message ? (
        <div style={{ marginTop: 6, fontSize: 11, color: 'var(--im-danger)', lineHeight: 1.5 }}>{data.message}</div>
      ) : null}

      <div className="nodrag" style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
        <button
          type="button"
          className={`im-btn-primary im-btn-sm nodrag${busy ? ' im-btn-busy' : ''}`}
          style={{ flex: 1 }}
          disabled={busy || !(data.prompt ?? '').trim()}
          onClick={event => {
            event.stopPropagation()
            actions.runPrompt(id)
          }}
        >
          {data.status === 'running' ? (
            <Elapsed from={data.startedAtMs} />
          ) : data.status === 'queued' ? (
            t('node.prompt.queueing')
          ) : (
            t('node.prompt.run')
          )}
        </button>
        {busy ? (
          <button
            type="button"
            className="im-btn-ghost im-btn-sm nodrag"
            disabled={data.cancelRequested === true}
            title={t('node.prompt.cancel.title')}
            onClick={event => {
              event.stopPropagation()
              actions.cancelPrompt(id)
            }}
          >
            {data.cancelRequested ? t('node.prompt.cancelling') : t('node.prompt.cancel')}
          </button>
        ) : null}
      </div>
    </div>
  )
})
