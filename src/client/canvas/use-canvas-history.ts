// 撤销 / 重做：直接复用 Imagora 移植过来的 createCanvasHistory。
// 记录时机由调用方决定——只有「改变用户意图」的操作才 record，
// 运行状态滚动、结果回流这类派生更新不记，否则撤销会退回到一半状态。
import { useCallback, useRef, type MutableRefObject } from 'react'
import type { Edge } from '@xyflow/react'
import { createCanvasHistory } from '../lib/canvasHistory'
import type { WorkflowEdge, WorkflowNode } from '../lib/types'

interface Options {
  nodesRef: MutableRefObject<WorkflowNode[]>
  edgesRef: MutableRefObject<Edge[]>
  setNodes: (next: WorkflowNode[]) => void
  setEdges: (next: Edge[]) => void
  flash: (line: string) => void
}

export function useCanvasHistory({ nodesRef, edgesRef, setNodes, setEdges, flash }: Options) {
  const historyRef = useRef(createCanvasHistory(50))

  /** 在改动画布结构之前调一次。 */
  const record = useCallback(() => {
    historyRef.current.record({
      nodes: nodesRef.current,
      edges: edgesRef.current as WorkflowEdge[],
    })
  }, [nodesRef, edgesRef])

  const undo = useCallback(() => {
    const previous = historyRef.current.undo({
      nodes: nodesRef.current,
      edges: edgesRef.current as WorkflowEdge[],
    })
    if (!previous) {
      flash('没有可撤销的操作')
      return
    }
    setNodes(previous.nodes)
    setEdges(previous.edges as Edge[])
  }, [nodesRef, edgesRef, setNodes, setEdges, flash])

  const restore = useCallback(() => {
    const next = historyRef.current.restore({
      nodes: nodesRef.current,
      edges: edgesRef.current as WorkflowEdge[],
    })
    if (!next) {
      flash('没有可恢复的操作')
      return
    }
    setNodes(next.nodes)
    setEdges(next.edges as Edge[])
  }, [nodesRef, edgesRef, setNodes, setEdges, flash])

  const clear = useCallback(() => historyRef.current.clear(), [])

  return { record, undo, restore, clear }
}
