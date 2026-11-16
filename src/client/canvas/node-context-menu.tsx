// 画布节点的右键菜单。
//
// 结构照搬 Imagora 的 `components/NodeContextMenu.tsx`；容器与类名换成插件自己的
// （`.im-select-list` / `.im-select-option` 与自绘下拉共用同一套「浮层」外观，
// 不为菜单另造一套视觉）。
//
// 与上游一致的四点：
// 1. portal 到 body + `position: fixed`：节点卡是 `overflow: hidden` 的容器，
//    就地 absolute 会被裁掉一半；
// 2. 挂载即 `pushPopup()`、卸载即 `popPopup()`：`.im-modal-shell` 的 Esc 监听挂在
//    capture 阶段，不登记的话一次 Esc 会顺手把外层弹窗也关掉；
// 3. 滚动 / 改窗口尺寸直接关闭，不做跟随重算 —— 落点是视口坐标，画布一动就会错位；
// 4. 挂载后量一次真实高度再夹 y（常量高度只是兜底，真实行高受字体与缩放影响）。
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  MENU_ITEM_HEIGHT,
  MENU_WIDTH,
  clampMenuPosition,
  isMenuDismissKey,
  menuHeight,
  type ContextMenuItem,
  type MenuPoint,
  type MenuSize,
} from '../lib/contextMenu'
import { popPopup, pushPopup } from '../lib/popupLayer'

export interface NodeContextMenuProps {
  /** 右键落点（视口坐标） */
  x: number
  y: number
  items: readonly ContextMenuItem[]
  /** 点中某项。禁用的项不会触发 */
  onPick: (actionId: string) => void
  onClose: () => void
}

function viewportSize(): MenuSize {
  return { width: window.innerWidth, height: window.innerHeight }
}

/** 菜单左上角：先按**算出来的**高度夹一次，避免首帧就从屏幕底部溢出去 */
function initialPosition(x: number, y: number, items: readonly ContextMenuItem[]): MenuPoint {
  return clampMenuPosition({ x, y }, { width: MENU_WIDTH, height: menuHeight(items) }, viewportSize())
}

export function NodeContextMenu({ x, y, items, onPick, onClose }: NodeContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<MenuPoint>(() => initialPosition(x, y, items))
  /** 悬停高亮：复用 `.im-select-option.is-active`，不新造 CSS 类 */
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // 登记为「有浮层」：Esc 先给菜单，不会穿透去关外层弹窗
  useEffect(() => {
    pushPopup()
    return () => popPopup()
  }, [])

  // 量一次真实高度再夹：常量高度只是兜底
  useLayoutEffect(() => {
    const height = menuRef.current?.getBoundingClientRect().height ?? 0
    if (height <= 0) return
    const next = clampMenuPosition({ x, y }, { width: MENU_WIDTH, height }, viewportSize())
    setPosition(prev => (prev.x === next.x && prev.y === next.y ? prev : next))
  }, [x, y])

  useEffect(() => {
    const handlePointerDown = (event: Event) => {
      const target = event.target
      if (target instanceof Node && menuRef.current?.contains(target)) return
      onClose()
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      // 已经有人消费掉这次按键（例如外层弹窗自己的 Esc 逻辑）就不要再关一遍
      if (event.defaultPrevented) return
      if (!isMenuDismissKey(event.key)) return
      onClose()
    }
    const handleViewportChange = () => onClose()

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleViewportChange)
    // capture：节点内部的滚动容器滚动也要关，否则菜单会跟节点错位
    window.addEventListener('scroll', handleViewportChange, true)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleViewportChange)
      window.removeEventListener('scroll', handleViewportChange, true)
    }
  }, [onClose])

  return createPortal(
    <div
      ref={menuRef}
      role="menu"
      aria-label="节点操作"
      data-testid="node-context-menu"
      className="im-select-list"
      style={{ left: position.x, top: position.y, width: MENU_WIDTH, zIndex: 72, userSelect: 'none' }}
    >
      {items.map((item, index) => {
        if (item.kind === 'separator') {
          return <div key={`separator-${index}`} role="separator" className="im-menu-separator" />
        }
        const { action } = item
        const disabled = action.disabled === true
        return (
          <button
            key={action.id}
            type="button"
            role="menuitem"
            data-testid={`node-menu-${action.id}`}
            aria-disabled={disabled ? 'true' : undefined}
            className={`im-select-option${hoveredId === action.id ? ' is-active' : ''}${
              action.danger ? ' is-danger' : ''
            }${disabled ? ' is-disabled' : ''}`}
            // 高度钉成 MENU_ITEM_HEIGHT：`menuHeight()` 是按常量算的，
            // 行高不一致时贴底弹出的菜单会被裁掉最后一项。
            style={{ height: MENU_ITEM_HEIGHT, minHeight: 0, paddingTop: 0, paddingBottom: 0 }}
            onClick={() => {
              // 不用原生 disabled：那会让键盘焦点跳过它，而 aria-disabled 才是菜单的标准语义
              if (disabled) return
              onPick(action.id)
            }}
            onMouseEnter={() => setHoveredId(action.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {action.label}
          </button>
        )
      })}
    </div>,
    document.body,
  )
}
