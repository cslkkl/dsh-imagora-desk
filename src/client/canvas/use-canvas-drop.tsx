// 工具栏按钮拖到画布上新建节点 —— 照搬 Imagora 的 useCanvasDrop（工具栏拖出那一半）。
//
// 交互链路（与原版一致）：
// 1. 工具栏按钮 dragstart 写一个自定义 MIME + 类型（prompt / group）
// 2. 落点胶囊 portal 到 body、fixed 定位、跟着光标走（不限于画布内）
// 3. 只有松手落在画布容器内才新建；落到工具栏/空白处即取消，不夹紧到边缘
//
// 与原版的差异只有一处：原版用 rAF 直接写 DOM transform（dragover 高频不触发渲染），
// 这里用 state 驱动，但只在「位置/内外状态」真的变了才 setState —— 少一个易错的性能陷阱，
// 效果在节点量级下看不出来。
import { useCallback, useRef, useState } from 'react'
import type { DragEvent, RefObject } from 'react'
import { Icon } from '../icons'

/** 自定义拖拽类型。用私有 MIME 是为了不误接外部拖来的文件与文本。 */
export const CANVAS_DRAG_MIME = 'application/x-dsh-imagora-node'

export type DropKind = 'prompt' | 'group' | 'images'

interface ChipState {
  kind: DropKind
  /** 停在画布外 = true：胶囊换成「松开取消」 */
  outside: boolean
  x: number
  y: number
}

function chipLabel(kind: DropKind, outside: boolean) {
  if (outside) return '松开取消'
  if (kind === 'group') return '松开新建图片组'
  if (kind === 'images') return '松开导入图片'
  return '松开新建提示词卡片'
}

/** 从 dataTransfer 读出这是哪一类拖拽；不是我们的类型就返回 null（放行给浏览器默认行为）。 */
export function resolveDropKind(dataTransfer: DataTransfer | null): DropKind | null {
  if (!dataTransfer) return null
  const custom = dataTransfer.getData(CANVAS_DRAG_MIME)
  if (custom === 'prompt' || custom === 'group') return custom
  if (Array.from(dataTransfer.types ?? []).includes('Files')) return 'images'
  return null
}

export interface CanvasDropOptions {
  canvasRef: RefObject<HTMLDivElement | null>
  onDropNode: (kind: 'prompt' | 'group', point: { x: number; y: number }) => void
  onDropFiles: (files: File[], point: { x: number; y: number }) => void
  toFlowPosition: (screen: { x: number; y: number }) => { x: number; y: number }
  /** 弹窗打开时不接管拖放 */
  isModalOpen: boolean
}

export function useCanvasDrop(options: CanvasDropOptions) {
  const { canvasRef, onDropNode, onDropFiles, toFlowPosition, isModalOpen } = options
  const [chip, setChip] = useState<ChipState | null>(null)
  const lastRef = useRef<ChipState | null>(null)
  const depthRef = useRef(0)

  const hide = useCallback(() => {
    depthRef.current = 0
    lastRef.current = null
    setChip(null)
  }, [])

  /** 只在「位置或内外状态变了」时更新，避免每帧一次 setState */
  const move = useCallback((next: ChipState) => {
    const prev = lastRef.current
    if (prev && prev.kind === next.kind && prev.outside === next.outside && prev.x === next.x && prev.y === next.y) {
      return
    }
    lastRef.current = next
    setChip(next)
  }, [])

  const insideCanvas = useCallback(
    (x: number, y: number) => {
      const el = canvasRef.current
      if (!el) return false
      const r = el.getBoundingClientRect()
      return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom
    },
    [canvasRef],
  )

  /** 工具栏按钮的 onDragStart */
  const startToolbarDrag = useCallback(
    (event: DragEvent<HTMLButtonElement>, kind: 'prompt' | 'group') => {
      event.dataTransfer.setData(CANVAS_DRAG_MIME, kind)
      event.dataTransfer.effectAllowed = 'copy'
      move({ kind, outside: !insideCanvas(event.clientX, event.clientY), x: event.clientX, y: event.clientY })
    },
    [insideCanvas, move],
  )

  const handlers = {
    onDragEnter: (event: DragEvent) => {
      if (isModalOpen) return
      const kind = resolveDropKind(event.dataTransfer)
      if (!kind) return
      event.preventDefault()
      // 文件拖拽在子元素间移动会成对触发 enter/leave，用计数平衡
      if (kind === 'images') depthRef.current += 1
      move({ kind, outside: !insideCanvas(event.clientX, event.clientY), x: event.clientX, y: event.clientY })
    },
    onDragOver: (event: DragEvent) => {
      if (isModalOpen) return
      const kind = resolveDropKind(event.dataTransfer)
      if (!kind) return
      event.preventDefault()
      event.dataTransfer.dropEffect = 'copy'
      move({ kind, outside: !insideCanvas(event.clientX, event.clientY), x: event.clientX, y: event.clientY })
    },
    onDragLeave: (event: DragEvent) => {
      if (isModalOpen) return
      if (resolveDropKind(event.dataTransfer) !== 'images') return
      depthRef.current -= 1
      if (depthRef.current <= 0) hide()
    },
    onDrop: (event: DragEvent) => {
      if (isModalOpen) return
      const kind = resolveDropKind(event.dataTransfer)
      if (!kind) return
      event.preventDefault()
      const inside = insideCanvas(event.clientX, event.clientY)
      const point = toFlowPosition({ x: event.clientX, y: event.clientY })
      hide()
      if (kind === 'images') {
        const files = Array.from(event.dataTransfer.files ?? [])
        if (files.length) onDropFiles(files, point)
        return
      }
      // 工具栏拖出：落在画布外即取消，不夹紧到边缘（与 Imagora 一致）
      if (!inside) return
      onDropNode(kind, point)
    },
  }

  const chipElement = chip ? <DropChip state={chip} /> : null
  return { handlers, startToolbarDrag, chip: chipElement, hide }
}

/** 落点胶囊：fixed 定位跟着光标，portal 到 body 才不会被子元素的 overflow 裁掉。 */
function DropChip({ state }: { state: ChipState }) {
  const { kind, outside, x, y } = state
  return (
    <div className={`im-drop-chip${outside ? ' is-cancel' : ''}`} style={{ left: x + 16, top: y + 16 }} aria-hidden>
      <Icon name={outside ? 'close' : kind === 'group' ? 'layers' : kind === 'images' ? 'image' : 'plus'} size={13} />
      {chipLabel(kind, outside)}
    </div>
  )
}

export { chipLabel }
