// 画布拖拽接线：照搬 Imagora 的 useCanvasDrop.tsx。
//
// 职责：落点示意的显隐/定位/文案、拖放意图解析、窗口级兜底守卫、画布四事件。
// 纯逻辑在 lib/canvasDrop.ts。
//
// 与原版保持一致的三个关键点（这三条错任何一条，拖拽就"能拖但松手没反应"）：
// 1. **dragstart 时用 ref 登记意图**，dragover 判定时作为 fallback ——
//    dragover 阶段 getData 读不到自定义类型，只靠它永远判不出意图。
// 2. **window 级 dragover** 让胶囊全局跟随光标，并按位置切换「松开新建 / 松开取消」。
//    只在画布内更新的话，拖出画布时胶囊会静止在最后位置。
// 3. 落在画布外松手 = 取消（不夹紧到边缘）；文件拖入则夹紧到画布内。
import { useCallback, useEffect, useRef, useState } from 'react'
import type { DragEvent, DragEventHandler, RefObject } from 'react'
import { createPortal } from 'react-dom'
import { Icon } from '../icons'
import {
  CANVAS_DRAG_MIME,
  TOOLBAR_DROP_LABEL_CANCEL,
  TOOLBAR_DROP_LABELS,
  countDraggedFiles,
  dragCarriesFiles,
  dropChipLabel,
  isInsideRect,
  resolveDropIntent,
  type CanvasDropIntent,
} from '../lib/canvasDrop'

/** 胶囊相对光标的偏移：略大于鼠标，避免被拖拽虚影挡住 */
const CHIP_OFFSET_X = 22
const CHIP_OFFSET_Y = 28
/** 到视口边缘的最小留白，保证胶囊完整可见 */
const CHIP_MARGIN = 8

export interface CanvasDropOptions {
  canvasRef: RefObject<HTMLDivElement | null>
  /** 弹窗打开时暂停接管，避免误落到弹窗背后 */
  modalOpen: boolean
  /** 实例未就绪时的落点兜底 */
  getCreatePosition: () => { x: number; y: number }
  toFlowPosition: (screen: { x: number; y: number }) => { x: number; y: number }
  onDropFiles: (files: File[], point: { x: number; y: number }) => void
  onDropNode: (kind: 'prompt' | 'group', point: { x: number; y: number }) => void
}

export interface CanvasDropResult {
  dropIntent: CanvasDropIntent | null
  dropChip: React.ReactNode
  dragHandlers: {
    onDragEnter: DragEventHandler<HTMLDivElement>
    onDragOver: DragEventHandler<HTMLDivElement>
    onDragLeave: DragEventHandler<HTMLDivElement>
    onDrop: DragEventHandler<HTMLDivElement>
  }
  startToolbarDrag: (event: DragEvent<HTMLButtonElement>, kind: 'prompt' | 'group') => void
  hideDropChip: () => void
}

export function useCanvasDrop(options: CanvasDropOptions): CanvasDropResult {
  const { canvasRef, modalOpen, getCreatePosition, toFlowPosition, onDropFiles, onDropNode } = options

  const [dropIntent, setDropIntent] = useState<CanvasDropIntent | null>(null)
  /** 意图的最新引用：dragover 判定与窗口级跟随都从这里读（避免闭包过期） */
  const intentRef = useRef<CanvasDropIntent | null>(null)
  /** 文件拖拽 enter/leave 计数：子元素间移动成对触发，计数平衡防闪烁 */
  const depthRef = useRef(0)

  const chipRef = useRef<HTMLDivElement>(null)
  const chipInnerRef = useRef<HTMLDivElement>(null)
  const chipTextRef = useRef<HTMLSpanElement>(null)

  const showDropChip = useCallback((intent: CanvasDropIntent, label: string) => {
    intentRef.current = intent
    setDropIntent(intent)
    const text = chipTextRef.current
    if (text && text.textContent !== label) text.textContent = label
  }, [])

  const hideDropChip = useCallback(() => {
    intentRef.current = null
    depthRef.current = 0
    setDropIntent(null)
    chipInnerRef.current?.classList.remove('is-outside')
  }, [])

  /** 跟随光标：直接写 transform（高频 dragover 不走 React 渲染） */
  const positionDropChip = useCallback((clientX: number, clientY: number) => {
    const chip = chipRef.current
    if (!chip) return
    const x = Math.min(clientX + CHIP_OFFSET_X, window.innerWidth - chip.offsetWidth - CHIP_MARGIN)
    const y = Math.min(clientY + CHIP_OFFSET_Y, window.innerHeight - chip.offsetHeight - CHIP_MARGIN)
    chip.style.transform = `translate(${Math.max(CHIP_MARGIN, x)}px, ${Math.max(CHIP_MARGIN, y)}px)`
  }, [])

  /** 屏幕坐标 → 画布坐标；文件落到画布外时夹紧到边缘，保证节点仍在可见区 */
  const dropPointFromEvent = useCallback(
    (clientX: number, clientY: number, clamp: boolean) => {
      const el = canvasRef.current
      if (!el) return getCreatePosition()
      const rect = el.getBoundingClientRect()
      const x = clamp ? Math.min(Math.max(clientX, rect.left), rect.left + rect.width) : clientX
      const y = clamp ? Math.min(Math.max(clientY, rect.top), rect.top + rect.height) : clientY
      return toFlowPosition({ x, y })
    },
    [canvasRef, getCreatePosition, toFlowPosition],
  )

  /* ---------------- 窗口级兜底：全局跟随 + 文案切换 + 状态复位 ---------------- */
  useEffect(() => {
    const preventFileDrop = (event: globalThis.DragEvent) => {
      if (dragCarriesFiles(event)) event.preventDefault()
    }
    const positionToolbarDrag = (event: globalThis.DragEvent) => {
      const intent = intentRef.current
      if (!intent || intent === 'images') return
      positionDropChip(event.clientX, event.clientY)
      const el = canvasRef.current
      const inside = Boolean(el && isInsideRect(event.clientX, event.clientY, el.getBoundingClientRect()))
      const label = inside ? TOOLBAR_DROP_LABELS[intent] : TOOLBAR_DROP_LABEL_CANCEL
      const text = chipTextRef.current
      if (text && text.textContent !== label) text.textContent = label
      chipInnerRef.current?.classList.toggle('is-outside', !inside)
    }
    const reset = () => {
      depthRef.current = 0
      hideDropChip()
    }
    window.addEventListener('dragover', preventFileDrop)
    window.addEventListener('dragover', positionToolbarDrag)
    window.addEventListener('drop', preventFileDrop)
    window.addEventListener('dragend', reset)
    window.addEventListener('blur', reset)
    return () => {
      window.removeEventListener('dragover', preventFileDrop)
      window.removeEventListener('dragover', positionToolbarDrag)
      window.removeEventListener('drop', preventFileDrop)
      window.removeEventListener('dragend', reset)
      window.removeEventListener('blur', reset)
    }
  }, [canvasRef, hideDropChip, positionDropChip])

  /* ---------------- 画布四事件 ---------------- */
  const dragHandlers = {
    onDragEnter: (event: DragEvent<HTMLDivElement>) => {
      if (modalOpen) return
      const intent = resolveDropIntent(event, intentRef.current)
      if (!intent) return
      event.preventDefault()
      if (intent === 'images') depthRef.current += 1
      showDropChip(intent, dropChipLabel(intent, countDraggedFiles(event.dataTransfer)))
      positionDropChip(event.clientX, event.clientY)
    },
    onDragOver: (event: DragEvent<HTMLDivElement>) => {
      if (modalOpen) return
      const intent = resolveDropIntent(event, intentRef.current)
      if (!intent) return
      // 这一句是「能不能 drop」的开关：不 preventDefault，浏览器就不认这个落点
      event.preventDefault()
      event.dataTransfer.dropEffect = 'copy'
      positionDropChip(event.clientX, event.clientY)
    },
    onDragLeave: (event: DragEvent<HTMLDivElement>) => {
      if (modalOpen) return
      // 只对文件拖拽做计数平衡；工具栏拖出由窗口级 dragend 复位
      if (resolveDropIntent(event, intentRef.current) !== 'images') return
      depthRef.current -= 1
      if (depthRef.current <= 0) hideDropChip()
    },
    onDrop: (event: DragEvent<HTMLDivElement>) => {
      if (modalOpen) return
      const intent = resolveDropIntent(event, intentRef.current)
      if (!intent) return
      event.preventDefault()
      const el = canvasRef.current
      const inside = !el || isInsideRect(event.clientX, event.clientY, el.getBoundingClientRect())
      hideDropChip()
      if (intent === 'images') {
        const files = Array.from(event.dataTransfer.files ?? [])
        if (!files.length) return
        void onDropFiles(files, dropPointFromEvent(event.clientX, event.clientY, true))
        return
      }
      // 工具栏拖出：落在画布外即取消，不夹紧到边缘
      if (!inside) return
      onDropNode(intent, dropPointFromEvent(event.clientX, event.clientY, false))
    },
  }

  const startToolbarDrag = useCallback(
    (event: DragEvent<HTMLButtonElement>, kind: 'prompt' | 'group') => {
      event.dataTransfer.setData(CANVAS_DRAG_MIME, kind)
      event.dataTransfer.effectAllowed = 'copy'
      showDropChip(kind, TOOLBAR_DROP_LABELS[kind])
      positionDropChip(event.clientX, event.clientY)
    },
    [positionDropChip, showDropChip],
  )

  const dropChip = createPortal(
    <div ref={chipRef} className="im-drop-chip-host" aria-hidden data-drop-chip>
      <div ref={chipInnerRef} className={`im-drop-chip${dropIntent ? ' show' : ''}`}>
        <span className="im-drop-chip-icon im-drop-chip-icon--create">
          <Icon name={dropIntent === 'group' ? 'layers' : dropIntent === 'images' ? 'image' : 'plus'} size={14} />
        </span>
        <span className="im-drop-chip-icon im-drop-chip-icon--cancel">
          <Icon name="close" size={14} />
        </span>
        <span ref={chipTextRef}>松开添加图片</span>
      </div>
    </div>,
    document.body,
  )

  return { dropIntent, dropChip, dragHandlers, startToolbarDrag, hideDropChip }
}
