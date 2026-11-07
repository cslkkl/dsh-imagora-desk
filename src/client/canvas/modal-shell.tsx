// 弹窗基座：照搬 Imagora 的 components/ModalShell.tsx。
//
// 为什么不用宿主的 ui.Modal：宿主那套面板宽度是按它自己的内容定的，我们的对话框
// 里又各写各的 minWidth（360/400/480/720），挤在固定宽度里必然溢出被裁——
// 表现就是「弹窗右边被切掉一块」「内容很挤」。
// 原版的基座自带四档宽度 + 头/身/脚三段 + 内容区自己滚，才装得下表单类内容。
//
// 这里保留原版的行为：
// - createPortal 到 body，脱离画布的层叠上下文与 overflow 裁切
// - z-index 50（嵌套弹窗 60）
// - 遮罩是宿主 token 的蒙版色 + 模糊，暗色自动跟随
// - Esc 关闭、点遮罩关闭、Tab 焦点圈闭、关闭后焦点归还
import { useEffect, useId, useRef, type MouseEvent, type ReactNode, type RefObject } from 'react'
import { createPortal } from 'react-dom'

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  "[tabindex]:not([tabindex='-1'])",
].join(',')

/** 面板宽度档：与原版的 modal-panel--sm / --md / --lg 对齐 */
export type ModalSize = 'sm' | 'md' | 'lg' | 'wide'

const modalStack: string[] = []

function isTopModal(id: string) {
  return modalStack[modalStack.length - 1] === id
}

export interface ModalShellProps {
  title: string
  /** 标题下那行说明，原版里是 .modal-subtitle */
  subtitle?: string
  children: ReactNode
  onClose: () => void
  size?: ModalSize
  /** 底部按钮区；不传则不渲染 footer */
  footer?: ReactNode
  initialFocusRef?: RefObject<HTMLElement | null>
  closeOnBackdrop?: boolean
}

export function ModalShell({
  title,
  subtitle,
  children,
  onClose,
  size = 'md',
  footer,
  initialFocusRef,
  closeOnBackdrop = true,
}: ModalShellProps) {
  const instanceId = `im-modal-${useId()}`
  const titleId = `${instanceId}-title`
  const panelRef = useRef<HTMLElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  useEffect(() => {
    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    modalStack.push(instanceId)

    const panel = panelRef.current
    const focusTarget = initialFocusRef?.current ?? panel?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR) ?? panel
    focusTarget?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isTopModal(instanceId)) return
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopPropagation()
        onCloseRef.current()
        return
      }
      if (event.key !== 'Tab' || !panel) return
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        element => !element.hidden && element.getAttribute('aria-hidden') !== 'true',
      )
      if (!focusable.length) {
        event.preventDefault()
        panel.focus()
        return
      }
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!first || !last) return
      if (event.shiftKey && (document.activeElement === first || !panel.contains(document.activeElement))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown, true)
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true)
      const index = modalStack.lastIndexOf(instanceId)
      if (index >= 0) modalStack.splice(index, 1)
      const returnTarget = returnFocusRef.current
      window.setTimeout(() => returnTarget?.focus(), 0)
    }
  }, [initialFocusRef])

  const handleBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdrop && event.target === event.currentTarget && isTopModal(instanceId)) onClose()
  }

  return createPortal(
    <div className="im-modal-shell" onMouseDown={handleBackdrop}>
      <section
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`im-modal-panel im-modal-panel--${size}`}
        onMouseDown={event => event.stopPropagation()}
      >
        <header className="im-modal-header">
          <h2 id={titleId} className="im-modal-title">
            {title}
          </h2>
          {subtitle ? <p className="im-modal-subtitle">{subtitle}</p> : null}
        </header>
        <div className="im-modal-body">{children}</div>
        {footer ? <footer className="im-modal-footer">{footer}</footer> : null}
      </section>
    </div>,
    document.body,
  )
}
