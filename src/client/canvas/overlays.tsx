// 画布上的浮层：空态提示、日志面板、toast、大图预览。
// 全部是纯展示，唯一交互是「清空日志」「关闭预览」。
import type { CSSProperties } from 'react'
import { Icon } from '../icons'

export function EmptyState() {
  return (
    <div className="im-empty">
      <strong>这里是自由画布</strong>
      <span>点「提示词卡」开始，把图片拖进来当参考；连线就是参考关系。</span>
      <span>双击图片放大 · 滚轮缩放 · 空白处拖拽平移</span>
    </div>
  )
}

export function LogPanel({ logs, onClear }: { logs: string[]; onClear: () => void }) {
  if (!logs.length) return null
  return (
    <div className="im-log">
      <div className="im-log-head">
        <span>日志</span>
        <button type="button" className="im-icon-btn" onClick={onClear} aria-label="清空日志">
          <Icon name="close" size={12} />
        </button>
      </div>
      {logs.map((line, index) => (
        <div key={`${index}-${line}`}>{line}</div>
      ))}
    </div>
  )
}

const TOAST_STYLE: CSSProperties = {
  position: 'absolute',
  left: '50%',
  bottom: 18,
  transform: 'translateX(-50%)',
  zIndex: 30,
  padding: '7px 14px',
  borderRadius: 999,
  background: 'var(--dsw-alias-toast-bg, var(--im-layer))',
  border: '1px solid var(--im-line)',
  boxShadow: 'var(--dsw-elevation-panel, 0 6px 20px rgba(0,0,0,.14))',
  fontSize: 12,
}

export function Toast({ text }: { text: string | null }) {
  if (!text) return null
  return <div style={TOAST_STYLE}>{text}</div>
}

const PREVIEW_STYLE: CSSProperties = {
  maxWidth: '86%',
  maxHeight: '86%',
  borderRadius: 12,
  boxShadow: '0 20px 60px rgba(0,0,0,.45)',
  background: 'var(--im-layer)',
}

export function PreviewOverlay({
  preview,
  onClose,
}: {
  preview: { url: string; name: string } | null
  onClose: () => void
}) {
  if (!preview) return null
  return (
    <div className="im-modal-mask" onClick={onClose}>
      <img src={preview.url} alt={preview.name} onClick={event => event.stopPropagation()} style={PREVIEW_STYLE} />
    </div>
  )
}

/** 顶部提示条：配置问题 / 已恢复上次画布。 */
export function Banner({
  tone,
  children,
  action,
}: {
  tone: 'warn' | 'error'
  children: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <div className={`im-banner${tone === 'error' ? ' is-error' : ''}`}>
      <Icon name={tone === 'error' ? 'help' : 'clock'} />
      {children}
      {action ? <span style={{ marginLeft: 'auto' }}>{action}</span> : null}
    </div>
  )
}
