// 工作流的保存 / 加载 / 自动恢复快照。
// 快照只留「有什么」：节点与边；运行期状态（running/失败原因）加载时按 idle 归一。
import { useCallback, useEffect, useRef, type MutableRefObject } from 'react'
import type { Edge, ReactFlowInstance } from '@xyflow/react'
import { latestRecovery, loadWorkflow, saveRecovery, saveWorkflow } from '../api'
import { workflowToCanvas } from '../lib/workflow'
import type { WorkflowEdge, WorkflowNode } from '../lib/types'
import { errMessage } from '../lib/format'

interface Options {
  nodes: WorkflowNode[]
  edges: Edge[]
  nodesRef: MutableRefObject<WorkflowNode[]>
  edgesRef: MutableRefObject<Edge[]>
  setNodes: (next: WorkflowNode[]) => void
  setEdges: (next: Edge[]) => void
  instanceRef: MutableRefObject<ReactFlowInstance<WorkflowNode, Edge> | null>
  log: (line: string) => void
  flash: (line: string) => void
  closeDialog: () => void
}

const RECOVERY_DEBOUNCE = 2500

export function useCanvasWorkflow({
  nodes,
  edges,
  nodesRef,
  edgesRef,
  setNodes,
  setEdges,
  instanceRef,
  log,
  flash,
  closeDialog,
}: Options) {
  const timerRef = useRef<number | null>(null)

  // 画布一改就排一次快照；空画布不写，避免把「刚打开」也存成一份空快照
  useEffect(() => {
    if (!nodes.length) return undefined
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      void saveRecovery(nodesRef.current, edgesRef.current as WorkflowEdge[]).catch(() => undefined)
    }, RECOVERY_DEBOUNCE)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [nodes, edges, nodesRef, edgesRef])

  // 挂载时尝试接上次的画布；第一次打开没有快照属正常，静默跳过
  useEffect(() => {
    let cancelled = false
    const restore = async () => {
      try {
        const snapshot = await latestRecovery()
        if (cancelled || snapshot.empty || !snapshot.nodes?.length) return
        const canvas = workflowToCanvas(snapshot.nodes, (snapshot.edges ?? []) as WorkflowEdge[], [])
        setNodes(canvas.nodes)
        setEdges(canvas.edges as Edge[])
        log(`已恢复上次的画布（${snapshot.name ?? '自动恢复'}）`)
      } catch {
        // 没有快照或接口不可用，保持空画布
      }
    }
    void restore()
    return () => {
      cancelled = true
    }
  }, [setNodes, setEdges, log])

  const doSave = useCallback(
    async (name: string) => {
      try {
        const saved = await saveWorkflow(name, nodesRef.current, edgesRef.current as WorkflowEdge[])
        closeDialog()
        flash(`已保存工作流「${saved.name || name}」`)
      } catch (error) {
        flash(`保存失败：${errMessage(error)}`)
      }
    },
    [nodesRef, edgesRef, closeDialog, flash],
  )

  const doLoad = useCallback(
    async (name: string) => {
      try {
        const data = await loadWorkflow(name)
        const canvas = workflowToCanvas(data.nodes, data.edges as WorkflowEdge[], data.missing ?? [])
        setNodes(canvas.nodes)
        setEdges(canvas.edges as Edge[])
        closeDialog()
        flash(`已加载「${data.name || name}」`)
        window.setTimeout(() => instanceRef.current?.fitView({ padding: 0.2, duration: 300 }), 60)
      } catch (error) {
        flash(`加载失败：${errMessage(error)}`)
      }
    },
    [setNodes, setEdges, instanceRef, closeDialog, flash],
  )

  return { doSave, doLoad }
}
