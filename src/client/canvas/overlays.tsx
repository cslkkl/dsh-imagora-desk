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

/**
 * 画布右下角日志轮播：只露最新几条，新条目淡入上移，旧的自然被挤出去。
 *
 * 与 Imagora 的 CanvasLog 同形：不可交互（pointer-events: none），否则会挡住右下角
 * 画布的拖拽与框选——原来这里是个带标题栏和清空按钮的浮层面板，正好压住那块交互区。
 * 日志是「刚刚发生了什么」的即时反馈，读到就够了，不需要在画布上操作它。
 */
const LOG_VISIBLE_COUNT = 5

export function LogPanel({ logs }: { logs: string[] }) {
  if (!logs.length) return null
  const recent = logs.slice(-LOG_VISIBLE_COUNT)
  return (
    <div className="im-log" aria-live="polite">
      {recent.map((line, index) => (
        <div key={`${index}-${line}`} className="im-log-line">
          {line}
        </div>
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
  background: 'var(--dsw-alias-toast-bg, var(--im-surface-float))',
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
  background: 'var(--im-surface-float)',
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

/**
 * 顶部提示条：配置问题 / 已恢复上次画布。
 *
 * 不做成整块色底——原版没有这种"红条/黄条"，它只在内容里用一行小字加一个引导按钮。
 * 色底在暗色主题下尤其脏，而且一眼看去像报错页。这里只在图标上着色，其余走中性表面。
 */
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
      <span className="im-banner-icon" aria-hidden>
        <Icon name={tone === 'error' ? 'help' : 'clock'} />
      </span>
      <span className="im-banner-text">{children}</span>
      {action ? <span style={{ marginLeft: 'auto', flex: 'none' }}>{action}</span> : null}
    </div>
  )
}
