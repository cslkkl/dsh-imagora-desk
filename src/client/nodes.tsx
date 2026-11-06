// 三类画布节点：图片 / 提示词 / 图片组。
// 画布把回调放在 context 里，节点组件只认 NodeProps —— 与 React Flow 的约定一致。
import { createContext, memo, useContext, useEffect, useState } from 'react'
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react'
import type {
  CanvasGroupNodeData,
  CanvasImageNodeData,
  CanvasPromptNodeData,
} from './lib/types'
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

function Rail({ children }: { children: React.ReactNode }) {
  return <div className="im-rail">{children}</div>
}

function RailButton({ label, onClick, danger, children }: { label: string; onClick: () => void; danger?: boolean; children: React.ReactNode }) {
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
    <div className={`im-card${selected ? ' is-selected' : ''}${missing ? ' is-missing' : ''}`} style={{ padding: 8, width: 148 }}>
      <Handles />
      {missing ? <span className="im-chip is-danger" style={{ position: 'absolute', right: 6, top: 6, zIndex: 2 }}>文件缺失</span> : null}
      {data.maskDataUrl ? <span className="im-chip is-brand" style={{ position: 'absolute', left: 6, top: 6, zIndex: 2 }}>蒙版</span> : null}
      <Rail>
        <RailButton label="预览大图" onClick={() => actions.zoomImage(id)}><Icon name="eye" /></RailButton>
        <RailButton label="换一张图" onClick={() => actions.replaceImage(id)}><Icon name="image" /></RailButton>
        <RailButton label="删除图片" danger onClick={() => actions.deleteNode(id)}><Icon name="trash" /></RailButton>
      </Rail>
      <div
        className="im-thumb"
        onDoubleClick={event => {
          event.stopPropagation()
          actions.zoomImage(id)
        }}
      >
        {data.url ? (
          <img src={data.url} alt={data.name} loading="lazy" decoding="async" draggable={false} onError={() => setBroken(true)} />
        ) : (
          <span className="im-muted" style={{ fontSize: 11 }}>图片缺失</span>
        )}
      </div>
      <div style={{ marginTop: 5, fontSize: 11, color: 'var(--im-ink-2)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={data.name}>
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

export const GroupNode = memo(function GroupNode({ id, data, selected }: NodeProps<GroupFlowNode>) {
  const actions = useActions()
  const mb = data.totalSize > 0 ? (data.totalSize / (1024 * 1024)).toFixed(1) : '0.0'
  const dup = data.duplicateCount ?? 0
  return (
    <div className={`im-card${selected ? ' is-selected' : ''}`} style={{ width: 196, padding: 14, background: 'color-mix(in srgb, var(--im-brand) 5%, var(--im-layer))' }}>
      <Handles />
      <Rail>
        <RailButton label="删除图片组" danger onClick={() => actions.deleteNode(id)}><Icon name="trash" /></RailButton>
      </Rail>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--im-brand)' }}>{data.imageCount} 张图</div>
        <div style={{ marginTop: 3, fontSize: 12 }} className="im-muted">{mb} MB</div>
        {dup > 0 ? <span className="im-chip is-brand" style={{ marginTop: 5 }}>去重 {dup}</span> : null}
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
  const sizeOptions = sizes.some(row => row.value === data.size) || !data.size
    ? sizes
    : [...sizes, { value: data.size, label: `${data.size}（自定义）`, cost: 0 }]
  const qualityEffective = config?.qualityEffective !== false

  return (
    <div className={`im-card${selected ? ' is-selected' : ''}`} style={{ width: 340, padding: 10 }}>
      <Handles />
      <Rail>
        <span className={`im-dot is-${data.status}`} title={STATUS_TEXT[data.status] ?? ''} />
        <RailButton label="删除提示词" danger onClick={() => actions.deleteNode(id)}><Icon name="trash" /></RailButton>
      </Rail>

      <div className="im-row" style={{ justifyContent: 'space-between', marginBottom: 6 }}>
        <span className="im-node-title" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{data.title ?? '提示词生成'}</span>
        <span className="im-chip">{data.status === 'running' ? <Elapsed from={data.startedAtMs} /> : (STATUS_TEXT[data.status] ?? '就绪')}</span>
      </div>

      <textarea
        className="im-field nodrag"
        rows={5}
        value={data.prompt}
        placeholder="英文提示词，例如：a red apple on white background"
        onChange={event => actions.updatePrompt(id, { prompt: event.target.value })}
      />

      <div className="nodrag" style={{ display: 'grid', gap: 6, gridTemplateColumns: qualityEffective ? '1fr 84px' : '1fr', marginTop: 6 }}>
        <div>
          <span className="im-label">尺寸</span>
          <select className="im-select" style={{ width: '100%' }} value={data.size} onChange={event => actions.updatePrompt(id, { size: event.target.value })}>
            {sizeOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        {qualityEffective ? (
          <div>
            <span className="im-label">质量</span>
            <select className="im-select" style={{ width: '100%' }} value={data.quality} onChange={event => actions.updatePrompt(id, { quality: event.target.value })}>
              {qualities.map(quality => (
                <option key={quality} value={quality}>{quality}</option>
              ))}
            </select>
          </div>
        ) : null}
      </div>

      <div className="nodrag" style={{ marginTop: 6 }}>
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

      <div className="nodrag im-row" style={{ marginTop: 8 }}>
        <button
          type="button"
          className="im-btn is-primary nodrag"
          style={{ flex: 1 }}
          disabled={busy || !data.prompt.trim()}
          onClick={event => {
            event.stopPropagation()
            actions.runPrompt(id)
          }}
        >
          <Icon name="play" />
          {data.status === 'running' ? <Elapsed from={data.startedAtMs} /> : data.status === 'queued' ? '排队中…' : '运行'}
        </button>
        {busy ? (
          <button
            type="button"
            className="im-btn nodrag"
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
