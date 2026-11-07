// 三类画布节点：图片 / 提示词 / 图片组。
// 标记照搬 Imagora 的 CanvasNodes.tsx（panel-card + 右侧 hover 操作栏 + 状态灯），
// 只把取数与动作换成画布 context —— 这是跑在插件里必须改的一处。
import { createContext, memo, useContext, useEffect, useState } from 'react'
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react'
import type { CanvasGroupNodeData, CanvasImageNodeData, CanvasPromptNodeData } from './lib/types'
import { generatingLabel } from './lib/format'
import { Icon } from './icons'
import type { ImagoraConfig } from './api'

export interface NodeActions {
  updatePrompt: (nodeId: string, patch: Partial<CanvasPromptNodeData>) => void
  runPrompt: (nodeId: string) => void
  cancelPrompt: (nodeId: string) => void
  deleteNode: (nodeId: string) => void
  zoomImage: (nodeId: string) => void
  replaceImage: (nodeId: string) => void
  /** 图片加工：分别打开裁剪 / 切分 / 放大 / 蒙版对话框 */
  cropImage: (nodeId: string) => void
  maskImage: (nodeId: string) => void
  splitImage: (nodeId: string) => void
  upscaleImage: (nodeId: string) => void
  config: ImagoraConfig | null
}

export const NodeActionContext = createContext<NodeActions | null>(null)

function useActions(): NodeActions {
  const value = useContext(NodeActionContext)
  if (!value) throw new Error('dsh-imagora: 节点缺少画布上下文')
  return value
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
      className={`im-icon-btn nodrag${danger ? ' is-danger' : ''}`}
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
  const [broken, setBroken] = useState(false)
  const missing = data.missing || broken
  return (
    <div
      className={`im-panel-card${selected ? ' is-selected' : ''}${missing ? ' is-missing' : ''}`}
      style={{ padding: 8, width: 148 }}
    >
      <Handles />
      {missing ? (
        <span className="im-chip is-danger" style={{ position: 'absolute', right: 6, top: 6, zIndex: 20 }}>
          文件缺失
        </span>
      ) : null}
      {data.maskDataUrl ? (
        <span className="im-chip is-brand" style={{ position: 'absolute', left: 6, top: 6, zIndex: 20 }}>
          蒙版
        </span>
      ) : null}
      <Rail>
        <RailButton label="预览大图" onClick={() => actions.zoomImage(id)}>
          <Icon name="eye" />
        </RailButton>
        <RailButton label="换一张图" onClick={() => actions.replaceImage(id)}>
          <Icon name="image" />
        </RailButton>
        <RailButton label="裁剪" onClick={() => actions.cropImage(id)}>
          <Icon name="crop" />
        </RailButton>
        <RailButton label="切分" onClick={() => actions.splitImage(id)}>
          <Icon name="grid" />
        </RailButton>
        <RailButton label="放大" onClick={() => actions.upscaleImage(id)}>
          <Icon name="expand" />
        </RailButton>
        <RailButton label="蒙版重绘" onClick={() => actions.maskImage(id)}>
          <Icon name="wand" />
        </RailButton>
        <RailButton label="删除图片" danger onClick={() => actions.deleteNode(id)}>
          <Icon name="trash" />
        </RailButton>
      </Rail>
      {/* 固定展示框：避免图片加载后撑高节点，object-contain 保留完整画面 */}
      <div
        className="im-thumb"
        onDoubleClick={event => {
          event.stopPropagation()
          actions.zoomImage(id)
        }}
      >
        {data.url ? (
          <img
            src={data.url}
            alt={data.name}
            loading="lazy"
            decoding="async"
            draggable={false}
            onError={() => setBroken(true)}
          />
        ) : (
          <span className="im-muted" style={{ fontSize: 11 }}>
            图片缺失
          </span>
        )}
      </div>
      <div className="im-thumb-label" title={data.name}>
        {data.name}
      </div>
      <div style={{ fontSize: 11, color: data.refCount > 0 ? 'var(--im-brand)' : 'var(--im-ink-3)' }}>
        {data.refCount > 0 ? `引用 ${data.refCount} 处` : '未引用'}
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
 */
const STACK_STEP_PX = 4

export const GroupNode = memo(function GroupNode({ id, data, selected }: NodeProps<GroupFlowNode>) {
  const actions = useActions()
  const mb = data.totalSize > 0 ? (data.totalSize / (1024 * 1024)).toFixed(1) : '0.0'
  const dup = data.duplicateCount ?? 0
  const stackCount = Math.min(Math.max(data.imageCount - 1, 0), 3)

  return (
    <div className={`im-group-node${selected ? ' is-selected' : ''}`}>
      <Handles />
      <Rail>
        <RailButton label="删除图片组" danger onClick={() => actions.deleteNode(id)}>
          <Icon name="trash" />
        </RailButton>
      </Rail>
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
          <div className="im-group-count">{data.imageCount} 张图</div>
          <div className="im-group-size">{mb} MB</div>
          {dup > 0 ? (
            <span className="im-chip im-chip--sm is-brand im-group-dup" title={`已去重 ${dup} 张重复图片`}>
              去重
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
  const [seconds, setSeconds] = useState(() => (from ? Math.max(0, Math.floor((Date.now() - from) / 1000)) : 0))
  useEffect(() => {
    if (!from) return undefined
    const timer = window.setInterval(() => setSeconds(Math.max(0, Math.floor((Date.now() - from) / 1000))), 1000)
    return () => window.clearInterval(timer)
  }, [from])
  return <>{generatingLabel(seconds)}</>
}

const STATUS_TEXT: Record<string, string> = {
  idle: '就绪',
  queued: '排队中',
  running: '生成中',
  done: '完成',
  failed: '失败',
}

export const PromptNode = memo(function PromptNode({ id, data, selected }: NodeProps<PromptFlowNode>) {
  const actions = useActions()
  const config = actions.config
  const busy = data.status === 'queued' || data.status === 'running'
  const sizes = config?.sizes ?? []
  const qualities = config?.qualities ?? []
  const sizeOptions =
    sizes.some(row => row.value === data.size) || !data.size
      ? sizes
      : [...sizes, { value: data.size, label: `${data.size}（自定义）`, cost: 0 }]
  const qualityEffective = config?.qualityEffective !== false

  return (
    <div
      className={`im-panel-card${selected ? ' is-selected' : ''}`}
      style={{ width: 380, padding: 12, boxSizing: 'border-box' }}
    >
      <Handles />
      {/* 右侧操作区：状态灯 + 删除 */}
      <Rail>
        <span className={`im-dot is-${data.status}`} title={STATUS_TEXT[data.status] ?? ''} />
        <RailButton label="删除提示词" danger onClick={() => actions.deleteNode(id)}>
          <Icon name="trash" />
        </RailButton>
      </Rail>

      {/* 标题只做定位标签：完整提示词就在下方 textarea 里可见可编辑 */}
      <div
        className="im-node-title"
        style={{ marginBottom: 8, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
      >
        {data.title ?? '提示词生成'}
      </div>

      <textarea
        className="im-field nodrag"
        rows={5}
        value={data.prompt}
        placeholder="英文提示词，例如：a red apple on white background"
        onChange={event => actions.updatePrompt(id, { prompt: event.target.value })}
      />

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
          <span className="im-label">尺寸</span>
          <select
            className="im-select"
            style={{ width: '100%' }}
            value={data.size}
            onChange={event => actions.updatePrompt(id, { size: event.target.value })}
          >
            {sizeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {qualityEffective ? (
          <div style={{ minWidth: 0 }}>
            <span className="im-label">质量</span>
            <select
              className="im-select"
              style={{ width: '100%' }}
              value={data.quality}
              onChange={event => actions.updatePrompt(id, { quality: event.target.value })}
            >
              {qualities.map(quality => (
                <option key={quality} value={quality}>
                  {quality}
                </option>
              ))}
            </select>
          </div>
        ) : null}
      </div>

      <div className="nodrag" style={{ marginTop: 8 }}>
        <span className="im-label">输出路径（留空 = 只留在画布）</span>
        <input
          className="im-field"
          value={data.outputDir}
          placeholder={config?.defaultOutputDir ?? ''}
          onChange={event => actions.updatePrompt(id, { outputDir: event.target.value })}
        />
      </div>

      {data.status === 'failed' && data.message ? (
        <div style={{ marginTop: 6, fontSize: 11, color: 'var(--im-danger)', lineHeight: 1.5 }}>{data.message}</div>
      ) : null}

      <div className="nodrag" style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
        <button
          type="button"
          className={`im-btn-primary im-btn-sm nodrag${busy ? ' im-btn-busy' : ''}`}
          style={{ flex: 1 }}
          disabled={busy || !data.prompt.trim()}
          onClick={event => {
            event.stopPropagation()
            actions.runPrompt(id)
          }}
        >
          {data.status === 'running' ? (
            <Elapsed from={data.startedAtMs} />
          ) : data.status === 'queued' ? (
            '排队中…'
          ) : (
            '运行'
          )}
        </button>
        {busy ? (
          <button
            type="button"
            className="im-btn-ghost im-btn-sm nodrag"
            disabled={data.cancelRequested === true}
            title="排队中的不会再发出去；生成中的会等当前这张跑完才作废"
            onClick={event => {
              event.stopPropagation()
              actions.cancelPrompt(id)
            }}
          >
            {data.cancelRequested ? '取消中…' : '取消'}
          </button>
        ) : null}
      </div>
    </div>
  )
})
