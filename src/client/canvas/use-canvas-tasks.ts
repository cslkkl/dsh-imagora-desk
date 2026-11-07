// 生成任务：提交、轮询、把结果回流成图片节点、取消。
// 语义与 Imagora 一致：排队中的可以就地取消，跑起来的要等当前这张结束才作废。
import { useCallback, useEffect, type MutableRefObject } from 'react'
import type { Edge } from '@xyflow/react'
import { cancelTask, fetchTask, submitGenerate, type TaskSnapshot } from '../api'
import { buildImageNode, collectPromptRefImages, updatePromptNode } from '../lib/workflow'
import { nodeSize } from '../lib/layout'
import type { WorkflowEdge, WorkflowNode } from '../lib/types'
import { errMessage } from '../lib/format'

interface Options {
  nodesRef: MutableRefObject<WorkflowNode[]>
  edgesRef: MutableRefObject<Edge[]>
  setNodes: (updater: (current: WorkflowNode[]) => WorkflowNode[]) => void
  setEdges: (updater: (current: Edge[]) => Edge[]) => void
  log: (line: string) => void
  flash: (line: string) => void
  taskIdsRef: MutableRefObject<Map<string, string>>
  timersRef: MutableRefObject<Map<string, number>>
}

export function useGeneratedTasks({
  nodesRef,
  edgesRef,
  setNodes,
  setEdges,
  log,
  flash,
  taskIdsRef,
  timersRef,
}: Options) {
  /** 结果回流：成功的结果在提示词卡正下方排成一行，并自动连一条「产出边」。 */
  const finishTask = useCallback(
    (nodeId: string, snapshot: TaskSnapshot) => {
      const results = Array.isArray(snapshot.results) ? snapshot.results : []
      const okResults = results.filter(row => row.status === 'ok' && row.assetId && row.url)
      const prompt = nodesRef.current.find(node => node.id === nodeId && node.type === 'prompt')
      const created: WorkflowNode[] = []
      if (prompt && prompt.type === 'prompt') {
        const height = nodeSize(prompt).height
        okResults.forEach((result, index) => {
          created.push(
            buildImageNode(
              {
                id: String(result.assetId),
                relPath: result.name ?? 'result.png',
                name: result.name ?? 'result.png',
                url: String(result.url),
                size: result.bytes ?? 0,
                ext: String(result.ext ?? 'png'),
                absPath: result.absPath ?? '',
                createdAt: new Date().toISOString(),
              },
              {
                x: prompt.position.x + index * 172,
                y: prompt.position.y + height + 56,
              },
            ),
          )
        })
      }
      setNodes(current => {
        const merged = [...current, ...created]
        return updatePromptNode(merged, nodeId, {
          status: snapshot.status === 'done' ? 'done' : snapshot.status === 'cancelled' ? 'idle' : 'failed',
          resultCount: okResults.length,
          message: snapshot.error ?? undefined,
          startedAtMs: undefined,
          cancelRequested: false,
        })
      })
      if (created.length) {
        setEdges(current => {
          const additions = created
            .map(node => ({ id: `${nodeId}->${node.id}`, source: nodeId, target: node.id, animated: true }))
            .filter(edge => !current.some(row => row.id === edge.id))
          return additions.length ? [...current, ...additions] : current
        })
      }
      taskIdsRef.current.delete(nodeId)
      const timer = timersRef.current.get(nodeId)
      if (timer) window.clearTimeout(timer)
      timersRef.current.delete(nodeId)
      const cost = snapshot.totalCost ?? 0
      // 成本记在卡上（累加）：画布的成本看板直接把这些数加起来，
      // 不再单独维护一份账，避免「节点删了但账还在」的不一致。
      if (cost > 0) {
        setNodes(current => {
          const node = current.find(row => row.id === nodeId)
          const before = Number(node?.data?.cost ?? 0)
          return updatePromptNode(current, nodeId, { cost: before + cost })
        })
      }
      log(
        snapshot.status === 'done'
          ? `完成 · ${okResults.length} 张${cost ? ` · ${cost.toFixed(2)} 元` : ''}`
          : `${snapshot.status === 'cancelled' ? '已取消' : '失败'} · ${snapshot.error ?? '见日志'}`,
      )
    },
    [nodesRef, setNodes, setEdges, log, taskIdsRef, timersRef],
  )

  /** 轮询：1.2 秒一次，直到 done / failed / cancelled。轮询失败不终止，下一次接着问。 */
  const pollTask = useCallback(
    (nodeId: string, taskId: string) => {
      const tick = async () => {
        try {
          const snapshot = await fetchTask(taskId)
          if (snapshot.status === 'queued') {
            setNodes(current => updatePromptNode(current, nodeId, { status: 'queued' }))
          } else if (snapshot.status === 'running') {
            setNodes(current =>
              updatePromptNode(current, nodeId, {
                status: 'running',
                startedAtMs: snapshot.startedAt ?? Date.now(),
                cancelRequested: snapshot.cancelRequested,
              }),
            )
          } else {
            finishTask(nodeId, snapshot)
            return
          }
        } catch (error) {
          log(`轮询失败：${errMessage(error)}`)
        }
        timersRef.current.set(nodeId, window.setTimeout(tick, 1200))
      }
      void tick()
    },
    [finishTask, log, setNodes, timersRef],
  )

  const runPrompt = useCallback(
    async (nodeId: string) => {
      const node = nodesRef.current.find(row => row.id === nodeId)
      if (!node || node.type !== 'prompt') return
      if (!node.data.prompt.trim()) {
        flash('提示词是空的')
        return
      }
      const resolved = collectPromptRefImages(
        nodesRef.current,
        edgesRef.current as WorkflowEdge[],
        nodeId,
        node.data.prompt,
      )
      if (resolved.mode === 'invalid') {
        const names = resolved.unknown.map(name => `@${name}`).join('、')
        setNodes(current =>
          updatePromptNode(current, nodeId, {
            status: 'failed',
            message: `提示词里引用了画布上没有的图：${names}`,
          }),
        )
        return
      }
      try {
        const submitted = await submitGenerate({
          prompt: node.data.prompt,
          size: node.data.size,
          quality: node.data.quality,
          refIds: resolved.images.map(row => (row.type === 'image' ? row.data.registryId : '')).filter(Boolean),
          outputDir: node.data.outputDir,
          // 让 host 知道这个画布已经花了多少，撞到预算上限就当场拒掉
          spent: nodesRef.current.reduce((sum, row) => sum + Number(row.data?.cost ?? 0), 0),
        })
        taskIdsRef.current.set(nodeId, submitted.taskId)
        setNodes(current =>
          updatePromptNode(current, nodeId, {
            status: 'queued',
            startedAtMs: Date.now(),
            message: undefined,
            resultCount: undefined,
            cancelRequested: false,
          }),
        )
        log(`提交 · 参考图 ${resolved.images.length} 张 · ${node.data.size}`)
        pollTask(nodeId, submitted.taskId)
      } catch (error) {
        const message = errMessage(error)
        setNodes(current => updatePromptNode(current, nodeId, { status: 'failed', message }))
        log(`提交失败：${message}`)
      }
    },
    [nodesRef, edgesRef, setNodes, flash, log, pollTask, taskIdsRef],
  )

  const cancelPrompt = useCallback(
    async (nodeId: string) => {
      const taskId = taskIdsRef.current.get(nodeId)
      setNodes(current => updatePromptNode(current, nodeId, { cancelRequested: true }))
      if (!taskId) return
      try {
        await cancelTask(taskId)
      } catch (error) {
        log(`取消失败：${errMessage(error)}`)
      }
    },
    [setNodes, log, taskIdsRef],
  )

  const runMany = useCallback(
    (ids: string[]) => {
      for (const id of ids) void runPrompt(id)
    },
    [runPrompt],
  )

  // 卸载时清掉所有轮询定时器，避免面板关掉后还在打接口
  useEffect(() => {
    const timers = timersRef.current
    return () => {
      for (const timer of timers.values()) window.clearTimeout(timer)
      timers.clear()
    }
  }, [timersRef])

  return { runPrompt, cancelPrompt, runMany }
}
