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
  /**
   * 修复旧卡片时用的参数缺省值（缺 size/quality 的卡补成这些）。
   *
   * 与「新建卡片」用的是同一个来源（`config.sizes[0]` / `config.qualities[0]`），
   * 所以修复出来的卡和手动新建的卡完全一样。取的是 ref 而不是值：
   * 加载那一刻的配置才是准的（用户可能刚在设置里换过模型）。
   */
  defaultsRef: MutableRefObject<{ size?: string; quality?: string }>
  /**
   * 恢复流程走完（无论接到快照、还是本来就没有）后回调一次，参数是**此刻画布上的节点**。
   *
   * 为什么要把节点当参数传、而不是让回调自己读 nodesRef：恢复里刚 `setNodes`，
   * React 还没重渲染，`nodesRef` 要到下一次渲染才更新。回调里读 ref 会读到空数组，
   * 任务认领就静默失效（实测踩中过）。这里直接把即将生效的节点交出去，时序上无歧义。
   */
  onRestored?: (nodes: WorkflowNode[]) => void
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
  defaultsRef,
  onRestored,
}: Options) {
  const timerRef = useRef<number | null>(null)

  /**
   * 立刻把当前画布写进快照并取消防抖。
   *
   * 为什么需要它：保存是 2500ms 防抖，而组件卸载 / 切走窗口时如果只是
   * clearTimeout，防抖窗口里那些改动**根本没落盘**。回来时再按快照恢复，
   * 就等于把刚做的东西退回上一个旧版本 —— 用户看到的是「我的新卡片没了」。
   * 所以离开前必须先 flush。
   */
  const flushRef = useRef<() => void>(() => {})
  flushRef.current = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (!nodesRef.current.length) return
    void saveRecovery(nodesRef.current, edgesRef.current as WorkflowEdge[]).catch(() => undefined)
  }

  // 画布一改就排一次快照；空画布不写，避免把「刚打开」也存成一份空快照。
  // 这里**不清理计时器**：清理等于「每次改动都把上一次待写取消」，卸载时更是直接丢；
  // 重新排期由上面那句 clearTimeout 负责。
  useEffect(() => {
    if (!nodes.length) return undefined
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null
      void saveRecovery(nodesRef.current, edgesRef.current as WorkflowEdge[]).catch(() => undefined)
    }, RECOVERY_DEBOUNCE)
  }, [nodes, edges, nodesRef, edgesRef])

  // 离开前落盘：切窗口 / 切标签页（visibilitychange）、页面卸载（pagehide）、
  // 以及组件真的卸载时各兜一次。三个入口都试，因为宿主什么时机拆我们说不准。
  useEffect(() => {
    const onHidden = () => {
      if (document.visibilityState === 'hidden') flushRef.current()
    }
    const onPageHide = () => flushRef.current()
    document.addEventListener('visibilitychange', onHidden)
    window.addEventListener('pagehide', onPageHide)
    return () => {
      document.removeEventListener('visibilitychange', onHidden)
      window.removeEventListener('pagehide', onPageHide)
      flushRef.current()
    }
  }, [])

  // 挂载时尝试接上次的画布；第一次打开没有快照属正常，静默跳过。
  // **本地已经有节点就不恢复**：恢复只该服务「刚打开还是空画布」这一种情况，
  // 拿旧快照盖掉用户当前的画布是所有数据丢失里最难解释的一种。
  useEffect(() => {
    let cancelled = false
    const restore = async () => {
      let effective = nodesRef.current
      try {
        const snapshot = await latestRecovery()
        if (cancelled) return
        if (!snapshot.empty && snapshot.nodes?.length && !nodesRef.current.length) {
          const canvas = workflowToCanvas(
            snapshot.nodes,
            (snapshot.edges ?? []) as WorkflowEdge[],
            [],
            defaultsRef.current,
          )
          setNodes(canvas.nodes)
          setEdges(canvas.edges as Edge[])
          effective = canvas.nodes
          log(`已恢复上次的画布（${snapshot.name ?? '自动恢复'}）`)
        }
      } catch {
        // 没有快照或接口不可用，保持空画布
      }
      // 不管有没有接到快照都要通知一次：没有快照时画布上也可能已经有节点
      // （宿主保留了组件状态），这些节点的任务照样得认领回来。
      if (!cancelled) onRestored?.(effective)
    }
    void restore()
    return () => {
      cancelled = true
    }
  }, [setNodes, setEdges, log, nodesRef, onRestored])

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
        const canvas = workflowToCanvas(
          data.nodes,
          data.edges as WorkflowEdge[],
          data.missing ?? [],
          defaultsRef.current,
        )
        setNodes(canvas.nodes)
        setEdges(canvas.edges as Edge[])
        closeDialog()
        flash(`已加载「${data.name || name}」`)
        window.setTimeout(() => instanceRef.current?.fitView({ padding: 0.2, duration: 300 }), 60)
      } catch (error) {
        flash(`加载失败：${errMessage(error)}`)
      }
    },
    [setNodes, setEdges, instanceRef, closeDialog, flash, defaultsRef],
  )

  return { doSave, doLoad }
}
