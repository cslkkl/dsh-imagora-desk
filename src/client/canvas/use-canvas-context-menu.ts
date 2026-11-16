// 右键：拖拽框选 + 单击节点弹菜单。
//
// 整套语义照搬 Imagora 的 `CanvasPage.tsx`（「右键拖拽框选」+「节点右键菜单」段），
// 与上游只有**一处**实质不同：屏蔽浏览器默认菜单的监听挂在哪。
//
// 上游是整个页面，所以直接 `window.addEventListener('contextmenu', …, true)` 全吞；
// 插件活在宿主的界面里，照着抄会把宿主自己的会话区、链接、按钮的原生右键一起吞掉。
// 所以这里把范围收到**本面板根节点**（rootRef）上：画布内外都还生效，出了面板不管。
//
// 两个手势共用右键，靠「松开时的移动距离」区分：几乎没动 = 单击（节点上则弹菜单），
// 真拖过 = 框选。不能靠 contextmenu 事件分派 —— Windows 上它在右键**松开后**才触发，
// 那时已经来不及判断是拖还是点。
import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import type { WorkflowNode } from '../lib/types'
import { nodeSize } from '../lib/layout'

export interface NodeMenuAnchor {
  /** 视口坐标（菜单定位用） */
  x: number
  y: number
  nodeId: string
}

export interface BoxRect {
  x: number
  y: number
  width: number
  height: number
}

interface Options {
  /** 面板根节点：只在这一层之内屏蔽原生右键菜单 */
  rootRef: RefObject<HTMLElement | null>
  /** 画布容器：右键按下必须落在这里才算开始框选 */
  canvasRef: RefObject<HTMLElement | null>
  instanceRef: RefObject<{ screenToFlowPosition: (p: { x: number; y: number }) => { x: number; y: number } } | null>
  setNodes: (updater: (nodes: WorkflowNode[]) => WorkflowNode[]) => void
  /** 框选/弹菜单期间要挡住的浮层（对话框、大图预览） */
  modalOpen: boolean
}

/** 判定「几乎没动」的阈值（视口像素）：小于它算单击 */
const CLICK_SLOP = 2

export function useCanvasContextMenu({ rootRef, canvasRef, instanceRef, setNodes, modalOpen }: Options) {
  const [nodeMenu, setNodeMenu] = useState<NodeMenuAnchor | null>(null)
  const [boxRect, setBoxRect] = useState<BoxRect | null>(null)
  const dragRef = useRef<{
    startFlow: { x: number; y: number }
    nodeId: string | null
    clientX: number
    clientY: number
  } | null>(null)

  const closeMenu = useCallback(() => setNodeMenu(null), [])

  useEffect(() => {
    if (modalOpen) {
      // 弹窗打开时不接管右键：对话框里的输入框要能正常用原生菜单
      dragRef.current = null
      setBoxRect(null)
      return
    }
    const canvas = canvasRef.current
    const root = rootRef.current
    if (!canvas || !root) return

    const onMouseDown = (event: MouseEvent) => {
      if (event.button !== 2) return
      const rf = instanceRef.current
      if (!rf) return
      const target = event.target instanceof Element ? event.target : null
      // 文本框/输入框内右键仍走原生菜单，不启动框选
      if (target?.closest('input, textarea, [contenteditable]')) return
      const startFlow = rf.screenToFlowPosition({ x: event.clientX, y: event.clientY })
      // 落点下方的节点（React Flow 把 id 写在 .react-flow__node 的 data-id 上）。
      // 菜单项要按节点类型裁剪，所以这里必须记住是哪一个。
      const nodeEl = target?.closest('.react-flow__node')
      const nodeId = nodeEl instanceof HTMLElement ? (nodeEl.dataset.id ?? null) : null
      dragRef.current = { startFlow, nodeId, clientX: event.clientX, clientY: event.clientY }
      setBoxRect({ x: startFlow.x, y: startFlow.y, width: 0, height: 0 })
      // 屏蔽右键按下的原生行为（文本选中 / 拖拽虚影），只保留框选
      event.preventDefault()
    }

    const onMouseMove = (event: MouseEvent) => {
      const drag = dragRef.current
      const rf = instanceRef.current
      if (!drag || !rf) return
      const cur = rf.screenToFlowPosition({ x: event.clientX, y: event.clientY })
      setBoxRect({
        x: Math.min(drag.startFlow.x, cur.x),
        y: Math.min(drag.startFlow.y, cur.y),
        width: Math.abs(cur.x - drag.startFlow.x),
        height: Math.abs(cur.y - drag.startFlow.y),
      })
    }

    const onMouseUp = (event: MouseEvent) => {
      const drag = dragRef.current
      const rf = instanceRef.current
      if (!drag || !rf) return
      dragRef.current = null
      const cur = rf.screenToFlowPosition({ x: event.clientX, y: event.clientY })
      const rect = {
        x: Math.min(drag.startFlow.x, cur.x),
        y: Math.min(drag.startFlow.y, cur.y),
        width: Math.abs(cur.x - drag.startFlow.x),
        height: Math.abs(cur.y - drag.startFlow.y),
      }
      setBoxRect(null)
      if (rect.width < CLICK_SLOP && rect.height < CLICK_SLOP) {
        // 单击：节点上弹菜单，空白处只关掉已有菜单（与点空白同义，不动选中）
        setNodeMenu(drag.nodeId ? { x: drag.clientX, y: drag.clientY, nodeId: drag.nodeId } : null)
        return
      }
      // 真拖过 = 框选：顺手关菜单，避免它浮在选框上挡视线
      setNodeMenu(null)
      setNodes(nodes => {
        let changed = false
        const next = nodes.map(node => {
          const size = nodeSize(node)
          const inside =
            node.position.x >= rect.x &&
            node.position.y >= rect.y &&
            node.position.x + size.width <= rect.x + rect.width &&
            node.position.y + size.height <= rect.y + rect.height
          if (inside === !!node.selected) return node
          changed = true
          return { ...node, selected: inside }
        })
        return changed ? next : nodes
      })
    }

    /** 无状态屏蔽：本面板内非输入区的 contextmenu 一律 preventDefault。
     *  捕获阶段执行，先于一切页面监听器；不依赖「按下→松开」时序，
     *  所以拖出画布再松开也不会漏出浏览器菜单。 */
    const onContextMenu = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null
      if (!target) return
      if (target.closest('input, textarea, [contenteditable]')) return
      event.preventDefault()
    }

    // 拖拽中途窗口失焦（Alt+Tab 等）时复位，避免残留拖拽状态
    const onWindowBlur = () => {
      if (!dragRef.current) return
      dragRef.current = null
      setBoxRect(null)
    }

    canvas.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    root.addEventListener('contextmenu', onContextMenu, true)
    window.addEventListener('blur', onWindowBlur)
    return () => {
      canvas.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      root.removeEventListener('contextmenu', onContextMenu, true)
      window.removeEventListener('blur', onWindowBlur)
    }
  }, [canvasRef, rootRef, instanceRef, setNodes, modalOpen])

  return { nodeMenu, boxRect, closeMenu, setNodeMenu }
}
