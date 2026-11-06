// 自由画布主体：无限画布 + 提示词卡 + 图片节点 + 图片组，连线即参考关系。
// 纯逻辑沿用 Imagora 的模块（lib/workflow.ts 等），界面换成本插件自己的样式。
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Background,
  BackgroundVariant,
  Controls,
  MarkerType,
  MiniMap,
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type EdgeChange,
  type NodeChange,
  type ReactFlowInstance,
} from '@xyflow/react'
import {
  cancelTask,
  deleteAsset,
  fetchTask,
  getConfig,
  latestRecovery,
  listWorkflows,
  loadWorkflow,
  saveRecovery,
  saveWorkflow,
  setModel,
  setProfile,
  submitGenerate,
  uploadImage,
  type ImagoraConfig,
  type TaskSnapshot,
} from './api'
import {
  autoConnect,
  buildGroupNode,
  buildImageNode,
  buildPromptNode,
  canConnect,
  collectPromptRefImages,
  computeCounts,
  isImageFile,
  staggerCreatePosition,
  updatePromptNode,
  workflowToCanvas,
} from './lib/workflow'
import { nodeSize } from './lib/layout'
import type { WorkflowEdge, WorkflowNode } from './lib/types'
import { errMessage } from './lib/format'
import { GroupNode, ImageNode, NodeActionContext, PromptNode } from './nodes'
import { Icon } from './icons'
import { CANVAS_CSS } from './styles'

const NODE_TYPES = { image: ImageNode, prompt: PromptNode, group: GroupNode }

interface DialogState {
  kind: 'save' | 'load' | 'help'
  workflows?: { name: string; modified: string }[]
}

export function CanvasApp() {
  const [nodes, setNodes, onNodesChangeBase] = useNodesState<WorkflowNode>([])
  const [edges, setEdges, onEdgesChangeBase] = useEdgesState<Edge>([])
  const [config, setConfig] = useState<ImagoraConfig | null>(null)
  const [configError, setConfigError] = useState<string | null>(null)
  const [logs, setLogs] = useState<string[]>([])
  const [toast, setToast] = useState<string | null>(null)
  const [dialog, setDialog] = useState<DialogState | null>(null)
  const [preview, setPreview] = useState<{ url: string; name: string } | null>(null)
  const [zoom, setZoom] = useState(1)
  const [minimapOpen, setMinimapOpen] = useState(true)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [restored, setRestored] = useState<string | null>(null)

  const flowRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<ReactFlowInstance<WorkflowNode, Edge> | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const lastCreateRef = useRef<{ x: number; y: number } | null>(null)
  const timersRef = useRef<Map<string, number>>(new Map())
  const taskIdsRef = useRef<Map<string, string>>(new Map())
  const recoveryTimerRef = useRef<number | null>(null)
  const nodesRef = useRef(nodes)
  const edgesRef = useRef(edges)
  const configRef = useRef(config)

  nodesRef.current = nodes
  edgesRef.current = edges
  configRef.current = config

  const log = useCallback((line: string) => {
    setLogs(current => [...current.slice(-8), line])
  }, [])

  const flash = useCallback((line: string) => {
    setToast(line)
    window.setTimeout(() => setToast(current => (current === line ? null : current)), 2600)
  }, [])

  /* ---------------- 配置 ---------------- */
  const loadConfig = useCallback(async () => {
    try {
      const next = await getConfig()
      setConfig(next)
      configRef.current = next
      setConfigError(next.issues.length ? next.issues.join('　') : null)
    } catch (error) {
      setConfigError(errMessage(error))
    }
  }, [])

  useEffect(() => {
    void loadConfig()
  }, [loadConfig])

  /* ---------------- 变化包装 ---------------- */
  const onNodesChange = useCallback((changes: NodeChange<WorkflowNode>[]) => onNodesChangeBase(changes), [onNodesChangeBase])
  const onEdgesChange = useCallback((changes: EdgeChange<Edge>[]) => onEdgesChangeBase(changes), [onEdgesChangeBase])

  // 引用计数与组聚合是派生量：渲染时算，不写回状态（写回会和节点同步互相触发）
  const counts = useMemo(() => computeCounts(nodes, edges as WorkflowEdge[]), [nodes, edges])
  const renderNodes = useMemo(() => nodes.map(node => {
    if (node.type === 'image') {
      const count = counts.refCounts.get(node.data.registryId) ?? 0
      return (node.data.refCount ?? 0) === count ? node : { ...node, data: { ...node.data, refCount: count } }
    }
    if (node.type === 'group') {
      const imageCount = counts.groupCounts.get(node.id) ?? 0
      const totalSize = counts.groupSizes.get(node.id) ?? 0
      const duplicateCount = counts.groupDups.get(node.id) ?? 0
      if (node.data.imageCount === imageCount && node.data.totalSize === totalSize && node.data.duplicateCount === duplicateCount) {
        return node
      }
      return { ...node, data: { ...node.data, imageCount, totalSize, duplicateCount } }
    }
    return node
  }), [nodes, counts])

  /* ---------------- 节点操作 ---------------- */
  const updatePrompt = useCallback((nodeId: string, patch: Record<string, unknown>) => {
    setNodes(current => updatePromptNode(current, nodeId, patch))
  }, [setNodes])

  const removeNodes = useCallback((ids: string[]) => {
    const drop = new Set(ids)
    setNodes(current => current.filter(node => !drop.has(node.id)))
    setEdges(current => current.filter(edge => !drop.has(edge.source) && !drop.has(edge.target)))
  }, [setNodes, setEdges])

  const deleteNode = useCallback((nodeId: string) => {
    const node = nodesRef.current.find(row => row.id === nodeId)
    removeNodes([nodeId])
    if (node?.type === 'image') void deleteAsset(node.data.registryId).catch(() => undefined)
  }, [removeNodes])

  /* ---------------- 创建节点 ---------------- */
  const createPosition = useCallback((): { x: number; y: number } => {
    const instance = instanceRef.current
    const rect = flowRef.current?.getBoundingClientRect()
    const center = instance && rect
      ? instance.screenToFlowPosition({ x: rect.width / 2 + (instance.getViewport?.().x ?? 0) * 0, y: rect.height / 2 })
      : { x: 140, y: 120 }
    const { position, next } = staggerCreatePosition(center, lastCreateRef.current)
    lastCreateRef.current = next
    return position
  }, [])

  const addPromptNode = useCallback(() => {
    const cfg = configRef.current
    const node = buildPromptNode(createPosition(), {
      size: cfg?.sizes[0]?.value ?? '1024x1024',
      quality: cfg?.qualities[0] ?? 'high',
      outputDir: '',
    })
    setNodes(current => [...current, node])
  }, [createPosition, setNodes])

  const addGroupNode = useCallback(() => {
    setNodes(current => [...current, buildGroupNode(createPosition())])
  }, [createPosition, setNodes])

  const addImages = useCallback(async (files: File[], position: { x: number; y: number }) => {
    const images = files.filter(isImageFile)
    if (!images.length) {
      flash('只认图片文件')
      return
    }
    for (const [index, file] of images.entries()) {
      try {
        log(`上传 ${file.name || '剪贴板图片'} …`)
        const entry = await uploadImage(file, file.name || `pasted-${Date.now()}.png`)
        const node = buildImageNode({ ...entry, relPath: entry.name, createdAt: entry.createdAt ?? new Date().toISOString() }, { x: position.x + index * 172, y: position.y })
        setNodes(current => [...current, node])
        log(`已添加 ${entry.name}`)
      } catch (error) {
        log(`上传失败：${errMessage(error)}`)
      }
    }
  }, [setNodes, log, flash])

  const onDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault()
    const files = Array.from(event.dataTransfer?.files ?? [])
    if (!files.length) return
    const instance = instanceRef.current
    const position = instance
      ? instance.screenToFlowPosition({ x: event.clientX, y: event.clientY })
      : createPosition()
    void addImages(files, position)
  }, [addImages, createPosition])

  useEffect(() => {
    const onPaste = (event: ClipboardEvent) => {
      const target = event.target as HTMLElement | null
      if (target && (target.tagName === 'TEXTAREA' || target.tagName === 'INPUT')) return
      const files = Array.from(event.clipboardData?.files ?? [])
      if (!files.length) return
      event.preventDefault()
      void addImages(files, createPosition())
    }
    window.addEventListener('paste', onPaste)
    return () => window.removeEventListener('paste', onPaste)
  }, [addImages, createPosition])

  /* ---------------- 生成 ---------------- */
  const finishTask = useCallback((nodeId: string, snapshot: TaskSnapshot) => {
    const results = Array.isArray(snapshot.results) ? snapshot.results : []
    const okResults = results.filter(row => row.status === 'ok' && row.assetId && row.url)
    const prompt = nodesRef.current.find(node => node.id === nodeId && node.type === 'prompt')
    const created: WorkflowNode[] = []
    if (prompt && prompt.type === 'prompt') {
      const height = nodeSize(prompt).height
      okResults.forEach((result, index) => {
        created.push(buildImageNode({
          id: String(result.assetId),
          relPath: result.name ?? 'result.png',
          name: result.name ?? 'result.png',
          url: String(result.url),
          size: result.bytes ?? 0,
          ext: String(result.ext ?? 'png'),
          absPath: result.absPath ?? '',
          createdAt: new Date().toISOString(),
        }, {
          x: prompt.position.x + index * 172,
          y: prompt.position.y + height + 56,
        }))
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
    log(snapshot.status === 'done'
      ? `完成 · ${okResults.length} 张${cost ? ` · ${cost.toFixed(2)} 元` : ''}`
      : `${snapshot.status === 'cancelled' ? '已取消' : '失败'} · ${snapshot.error ?? '见日志'}`)
  }, [setNodes, setEdges, log])

  const pollTask = useCallback((nodeId: string, taskId: string) => {
    const tick = async () => {
      try {
        const snapshot = await fetchTask(taskId)
        if (snapshot.status === 'queued') {
          setNodes(current => updatePromptNode(current, nodeId, { status: 'queued' }))
        } else if (snapshot.status === 'running') {
          setNodes(current => updatePromptNode(current, nodeId, {
            status: 'running',
            startedAtMs: snapshot.startedAt ?? Date.now(),
            cancelRequested: snapshot.cancelRequested,
          }))
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
  }, [finishTask, log, setNodes])

  const runPrompt = useCallback(async (nodeId: string) => {
    const node = nodesRef.current.find(row => row.id === nodeId)
    if (!node || node.type !== 'prompt') return
    if (!node.data.prompt.trim()) {
      flash('提示词是空的')
      return
    }
    const resolved = collectPromptRefImages(nodesRef.current, edgesRef.current as WorkflowEdge[], nodeId, node.data.prompt)
    if (resolved.mode === 'invalid') {
      const names = resolved.unknown.map(name => `@${name}`).join('、')
      setNodes(current => updatePromptNode(current, nodeId, {
        status: 'failed',
        message: `提示词里引用了画布上没有的图：${names}`,
      }))
      return
    }
    try {
      const submitted = await submitGenerate({
        prompt: node.data.prompt,
        size: node.data.size,
        quality: node.data.quality,
        refIds: resolved.images
          .map(row => (row.type === 'image' ? row.data.registryId : ''))
          .filter(Boolean),
        outputDir: node.data.outputDir,
      })
      taskIdsRef.current.set(nodeId, submitted.taskId)
      setNodes(current => updatePromptNode(current, nodeId, {
        status: 'queued',
        startedAtMs: Date.now(),
        message: undefined,
        resultCount: undefined,
        cancelRequested: false,
      }))
      log(`提交 · 参考图 ${resolved.images.length} 张 · ${node.data.size}`)
      pollTask(nodeId, submitted.taskId)
    } catch (error) {
      const message = errMessage(error)
      setNodes(current => updatePromptNode(current, nodeId, { status: 'failed', message }))
      log(`提交失败：${message}`)
    }
  }, [pollTask, setNodes, flash, log])

  const cancelPrompt = useCallback(async (nodeId: string) => {
    const taskId = taskIdsRef.current.get(nodeId)
    setNodes(current => updatePromptNode(current, nodeId, { cancelRequested: true }))
    if (!taskId) return
    try {
      await cancelTask(taskId)
    } catch (error) {
      log(`取消失败：${errMessage(error)}`)
    }
  }, [setNodes, log])

  const runMany = useCallback((ids: string[]) => {
    for (const id of ids) void runPrompt(id)
  }, [runPrompt])

  /* ---------------- 组织 ---------------- */
  const autoConnectAll = useCallback(() => {
    setEdges(autoConnect(nodesRef.current, edgesRef.current as WorkflowEdge[]) as Edge[])
    flash('已按位置补齐明显的连线')
  }, [setEdges, flash])

  const arrangeSelected = useCallback(() => {
    const ids = new Set(selectedIds)
    if (!ids.size) {
      flash('先选中要整理的节点')
      return
    }
    setNodes(current => {
      const images = current.filter(node => ids.has(node.id) && node.type === 'image')
      if (!images.length) return current
      const baseX = Math.min(...images.map(node => node.position.x))
      const baseY = Math.min(...images.map(node => node.position.y))
      const order = new Map(images.map((node, index) => [node.id, index]))
      return current.map(node => {
        const index = order.get(node.id)
        if (index === undefined) return node
        return { ...node, position: { x: baseX + index * 172, y: baseY } }
      })
    })
  }, [selectedIds, setNodes, flash])

  /* ---------------- 保存 / 加载 / 恢复 ---------------- */
  useEffect(() => {
    if (!nodes.length) return undefined
    if (recoveryTimerRef.current) window.clearTimeout(recoveryTimerRef.current)
    recoveryTimerRef.current = window.setTimeout(() => {
      void saveRecovery(nodesRef.current, edgesRef.current as WorkflowEdge[]).catch(() => undefined)
    }, 2500)
    return () => {
      if (recoveryTimerRef.current) window.clearTimeout(recoveryTimerRef.current)
    }
  }, [nodes, edges])

  useEffect(() => {
    let cancelled = false
    const restore = async () => {
      try {
        const snapshot = await latestRecovery()
        if (cancelled || snapshot.empty || !snapshot.nodes?.length) return
        const canvas = workflowToCanvas(snapshot.nodes, (snapshot.edges ?? []) as WorkflowEdge[], [])
        setNodes(canvas.nodes)
        setEdges(canvas.edges as Edge[])
        setRestored(snapshot.savedAt ?? null)
        log(`已恢复上次的画布（${snapshot.name ?? '自动恢复'}）`)
      } catch {
        // 首次打开没有快照，属正常
      }
    }
    void restore()
    return () => {
      cancelled = true
    }
  }, [setNodes, setEdges, log])

  const doSave = useCallback(async (name: string) => {
    try {
      const saved = await saveWorkflow(name, nodesRef.current, edgesRef.current as WorkflowEdge[])
      setDialog(null)
      flash(`已保存工作流「${saved.name || name}」`)
    } catch (error) {
      flash(`保存失败：${errMessage(error)}`)
    }
  }, [flash])

  const doLoad = useCallback(async (name: string) => {
    try {
      const data = await loadWorkflow(name)
      const canvas = workflowToCanvas(data.nodes, data.edges as WorkflowEdge[], data.missing ?? [])
      setNodes(canvas.nodes)
      setEdges(canvas.edges as Edge[])
      setDialog(null)
      flash(`已加载「${data.name || name}」`)
      window.setTimeout(() => instanceRef.current?.fitView({ padding: 0.2, duration: 300 }), 60)
    } catch (error) {
      flash(`加载失败：${errMessage(error)}`)
    }
  }, [setNodes, setEdges, flash])

  /* ---------------- 预览 / 换图 ---------------- */
  const zoomImage = useCallback((nodeId: string) => {
    const node = nodesRef.current.find(row => row.id === nodeId)
    if (!node || node.type !== 'image' || !node.data.url) return
    setPreview({ url: node.data.url, name: node.data.name })
  }, [])

  const replaceImage = useCallback((nodeId: string) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = async () => {
      const file = input.files?.[0]
      if (!file) return
      try {
        const entry = await uploadImage(file, file.name)
        setNodes(current => current.map(node => (
          node.id === nodeId && node.type === 'image'
            ? {
              ...node,
              data: {
                ...node.data,
                registryId: entry.id,
                name: entry.name,
                url: entry.url,
                size: entry.size,
                ext: entry.ext,
                absPath: entry.absPath,
                missing: false,
              },
            }
            : node
        )))
        log(`已替换为 ${entry.name}`)
      } catch (error) {
        log(`替换失败：${errMessage(error)}`)
      }
    }
    input.click()
  }, [setNodes, log])

  /* ---------------- 键盘 ---------------- */
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && preview) {
        setPreview(null)
        return
      }
      const target = event.target as HTMLElement | null
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return
      if ((event.key === 'Delete' || event.key === 'Backspace') && selectedIds.length) {
        event.preventDefault()
        removeNodes(selectedIds)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [preview, selectedIds, removeNodes])

  useEffect(() => {
    const timers = timersRef.current
    return () => {
      for (const timer of timers.values()) window.clearTimeout(timer)
      timers.clear()
    }
  }, [])

  const promptNodes = nodes.filter(node => node.type === 'prompt')
  const busyIds = promptNodes
    .filter(node => node.data.status === 'queued' || node.data.status === 'running')
    .map(node => node.id)

  const actions = useMemo(() => ({
    updatePrompt,
    runPrompt: (nodeId: string) => { void runPrompt(nodeId) },
    cancelPrompt: (nodeId: string) => { void cancelPrompt(nodeId) },
    deleteNode,
    zoomImage,
    replaceImage,
    config,
  }), [updatePrompt, runPrompt, cancelPrompt, deleteNode, zoomImage, replaceImage, config])

  return (
    <NodeActionContext.Provider value={actions}>
      <style>{CANVAS_CSS}</style>
      <div className="im-root">
        <div className="im-toolbar">
          <button type="button" className="im-btn is-primary" onClick={addPromptNode}><Icon name="plus" />提示词卡</button>
          <button type="button" className="im-btn" onClick={() => fileInputRef.current?.click()}><Icon name="image" />导入图片</button>
          <button type="button" className="im-btn" onClick={addGroupNode}><Icon name="layers" />图片组</button>
          <span style={{ width: 1, height: 18, background: 'var(--im-line)', margin: '0 2px' }} />
          <button
            type="button"
            className="im-btn"
            disabled={!promptNodes.length}
            onClick={() => runMany(promptNodes
              .filter(node => node.data.prompt.trim() && node.data.status !== 'running' && node.data.status !== 'queued')
              .map(node => node.id))}
          >
            <Icon name="play" />全部运行
          </button>
          <button
            type="button"
            className="im-btn"
            disabled={!selectedIds.length}
            onClick={() => runMany(promptNodes.filter(node => selectedIds.includes(node.id)).map(node => node.id))}
          >
            运行所选
          </button>
          <button
            type="button"
            className="im-btn is-danger"
            disabled={!busyIds.length}
            onClick={() => busyIds.forEach(id => void cancelPrompt(id))}
          >
            <Icon name="stop" />取消全部
          </button>
          <span style={{ width: 1, height: 18, background: 'var(--im-line)', margin: '0 2px' }} />
          <button type="button" className="im-btn" onClick={autoConnectAll}><Icon name="link" />自动连线</button>
          <button type="button" className="im-btn" disabled={!selectedIds.length} onClick={arrangeSelected}><Icon name="wand" />整理所选</button>
          <span className="im-spacer" />
          {config && (config.profiles?.length ?? 0) > 1 ? (
            <select
              className="im-select"
              style={{ maxWidth: 150 }}
              value={config.profile}
              title="来源（profile）：决定接口地址与密钥"
              onChange={async event => {
                try {
                  const next = await setProfile(event.target.value)
                  setConfig(next)
                  configRef.current = next
                  setConfigError(next.issues.length ? next.issues.join('　') : null)
                  flash(`已切到 ${next.profileLabel || next.profile}`)
                } catch (error) {
                  flash(`切换失败：${errMessage(error)}`)
                }
              }}
            >
              {(config.profiles ?? []).map(row => <option key={row.name} value={row.name}>{row.label}</option>)}
              <option value="">跟随 imagora 的 .env</option>
            </select>
          ) : null}
          {config ? (
            <select
              className="im-select"
              value={config.model}
              title={`${config.profileLabel || config.profile} · 当前模型`}
              onChange={async event => {
                try {
                  const next = await setModel(event.target.value)
                  setConfig(next)
                  configRef.current = next
                  flash(`已切换到 ${next.modelLabel}`)
                } catch (error) {
                  flash(`切换失败：${errMessage(error)}`)
                }
              }}
            >
              {config.models.length
                ? config.models.map(row => <option key={row.id} value={row.id}>{row.label}</option>)
                : <option value={config.model}>{config.modelLabel}</option>}
            </select>
          ) : null}
          <button
            type="button"
            className={`im-btn${minimapOpen ? ' is-on' : ''}`}
            title="小地图"
            onClick={() => setMinimapOpen(value => !value)}
          >
            <Icon name="map" />
          </button>
          <span className="im-zoom" title="当前缩放">{Math.round(zoom * 100)}%</span>
          <button type="button" className="im-btn" onClick={() => instanceRef.current?.fitView({ padding: 0.2, duration: 300 })}>
            <Icon name="maximize" />全览
          </button>
          <button type="button" className="im-btn" onClick={() => setDialog({ kind: 'save' })}><Icon name="save" />保存</button>
          <button
            type="button"
            className="im-btn"
            onClick={async () => {
              try {
                const data = await listWorkflows()
                setDialog({ kind: 'load', workflows: data.workflows })
              } catch (error) {
                flash(`读取失败：${errMessage(error)}`)
              }
            }}
          >
            <Icon name="folder" />加载
          </button>
          <button type="button" className="im-btn is-ghost" title="帮助" onClick={() => setDialog({ kind: 'help' })}><Icon name="help" /></button>
        </div>

        {configError ? <div className="im-banner is-error"><Icon name="help" />{configError}</div> : null}
        {restored && !configError ? (
          <div className="im-banner">
            <Icon name="clock" />已恢复上次画布
            <button
              type="button"
              className="im-btn is-ghost"
              style={{ marginLeft: 'auto', height: 22 }}
              onClick={() => setRestored(null)}
            >
              知道了
            </button>
          </div>
        ) : null}

        <div className="im-canvas" ref={flowRef} onDragOver={event => event.preventDefault()} onDrop={onDrop}>
          <ReactFlow
            nodes={renderNodes}
            edges={edges}
            nodeTypes={NODE_TYPES}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnectBridge(setEdges)}
            isValidConnection={connection => canConnect(nodesRef.current, edgesRef.current as WorkflowEdge[], {
              source: String(connection.source ?? ''),
              target: String(connection.target ?? ''),
            })}
            onInit={instance => { instanceRef.current = instance }}
            onMove={(_, viewport) => setZoom(viewport.zoom)}
            onSelectionChange={({ nodes: picked }) => {
              const ids = picked.map(node => node.id)
              setSelectedIds(current => (current.length === ids.length && current.every((id, index) => id === ids[index]) ? current : ids))
            }}
            fitView
            fitViewOptions={{ padding: 0.25, maxZoom: 1 }}
            minZoom={0.05}
            maxZoom={2.5}
            proOptions={{ hideAttribution: true }}
            defaultEdgeOptions={{ animated: true, markerEnd: { type: MarkerType.ArrowClosed } }}
            deleteKeyCode={null}
            panOnScroll
            selectionOnDrag
            panOnDrag={[1, 2]}
          >
            <Background variant={BackgroundVariant.Dots} gap={18} size={1.4} />
            <Controls position="bottom-left" showInteractive={false} />
            {minimapOpen ? <MiniMap pannable zoomable position="bottom-right" style={{ width: 160, height: 110 }} /> : null}
          </ReactFlow>

          {nodes.length === 0 ? (
            <div className="im-empty">
              <strong>这里是自由画布</strong>
              <span>点「提示词卡」开始，把图片拖进来当参考；连线就是参考关系。</span>
              <span>双击图片放大 · 滚轮缩放 · 空白处拖拽平移</span>
            </div>
          ) : null}

          {logs.length ? (
            <div className="im-log">
              <div className="im-log-head">
                <span>日志</span>
                <button type="button" className="im-icon-btn" onClick={() => setLogs([])} aria-label="清空日志">
                  <Icon name="close" size={12} />
                </button>
              </div>
              {logs.map((line, index) => <div key={`${index}-${line}`}>{line}</div>)}
            </div>
          ) : null}

          {toast ? (
            <div style={{
              position: 'absolute',
              left: '50%',
              bottom: 18,
              transform: 'translateX(-50%)',
              zIndex: 30,
              padding: '7px 14px',
              borderRadius: 999,
              background: 'var(--dsw-alias-toast-bg, var(--im-layer))',
              border: '1px solid var(--im-line)',
              boxShadow: 'var(--dsw-elevation-panel, 0 6px 20px rgba(0,0,0,.14))',
              fontSize: 12,
            }}>
              {toast}
            </div>
          ) : null}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={event => {
            const files = Array.from(event.target.files ?? [])
            event.target.value = ''
            void addImages(files, createPosition())
          }}
        />

        {preview ? (
          <div className="im-modal-mask" onClick={() => setPreview(null)}>
            <img
              src={preview.url}
              alt={preview.name}
              onClick={event => event.stopPropagation()}
              style={{
                maxWidth: '86%',
                maxHeight: '86%',
                borderRadius: 12,
                boxShadow: '0 20px 60px rgba(0,0,0,.45)',
                background: 'var(--im-layer)',
              }}
            />
          </div>
        ) : null}

        {dialog?.kind === 'save' ? (
          <SaveDialog onCancel={() => setDialog(null)} onSubmit={name => void doSave(name)} />
        ) : null}
        {dialog?.kind === 'load' ? (
          <LoadDialog
            workflows={dialog.workflows ?? []}
            onCancel={() => setDialog(null)}
            onPick={name => void doLoad(name)}
          />
        ) : null}
        {dialog?.kind === 'help' ? <HelpDialog config={config} onClose={() => setDialog(null)} /> : null}
      </div>
    </NodeActionContext.Provider>
  )
}

/** 连线：source→target 合法时补一条边（id 固定，重复连接不会叠多条）。 */
function onConnectBridge(setEdges: (updater: (current: Edge[]) => Edge[]) => void) {
  return (connection: Connection) => {
    const source = String(connection.source ?? '')
    const target = String(connection.target ?? '')
    if (!source || !target) return
    setEdges(current => {
      const id = `${source}->${target}`
      if (current.some(edge => edge.id === id)) return current
      return addEdge({ id, source, target, animated: true }, current)
    })
  }
}

function SaveDialog({ onCancel, onSubmit }: { onCancel: () => void; onSubmit: (name: string) => void }) {
  const [name, setName] = useState(`画布 ${new Date().toISOString().slice(5, 16).replace('T', ' ')}`)
  return (
    <div className="im-modal-mask" onClick={onCancel}>
      <div className="im-modal" onClick={event => event.stopPropagation()}>
        <h3>保存工作流</h3>
        <input className="im-field" autoFocus value={name} onChange={event => setName(event.target.value)} />
        <div className="im-modal-actions" style={{ marginTop: 12 }}>
          <button type="button" className="im-btn" onClick={onCancel}>取消</button>
          <button type="button" className="im-btn is-primary" disabled={!name.trim()} onClick={() => onSubmit(name.trim())}>
            保存
          </button>
        </div>
      </div>
    </div>
  )
}

function LoadDialog({ workflows, onCancel, onPick }: {
  workflows: { name: string; modified: string }[]
  onCancel: () => void
  onPick: (name: string) => void
}) {
  return (
    <div className="im-modal-mask" onClick={onCancel}>
      <div className="im-modal" onClick={event => event.stopPropagation()}>
        <h3>加载工作流</h3>
        {workflows.length ? (
          <div className="im-modal-list">
            {workflows.map(row => (
              <div key={row.name} className="im-modal-row" onClick={() => onPick(row.name)}>
                <span>{row.name}</span>
                <span className="im-muted" style={{ fontSize: 11 }}>{new Date(row.modified).toLocaleString()}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="im-muted" style={{ fontSize: 12 }}>还没有保存过的工作流。</p>
        )}
        <div className="im-modal-actions">
          <button type="button" className="im-btn" onClick={onCancel}>关闭</button>
        </div>
      </div>
    </div>
  )
}

function HelpDialog({ onClose, config }: { onClose: () => void; config: ImagoraConfig | null }) {
  const rows: [string, string][] = [
    ['画布', '滚轮缩放 · 右键或中键拖拽平移 · 空白拖拽框选 · 双击图片放大'],
    ['节点', '悬停右侧操作栏 · Del 删除选中'],
    ['连线', '图片/图片组 → 提示词（参考图）；提示词 → 图片（产出）'],
    ['引用', '提示词里写 @图片名 只挑指定图；不写就用全部入边图片'],
    ['运行', '单卡「运行」· 工具栏「全部运行」「运行所选」「取消全部」'],
    ['保存', '命名保存进工作流；画布改动会自动落恢复快照'],
  ]
  return (
    <div className="im-modal-mask" onClick={onClose}>
      <div className="im-modal" style={{ width: 520 }} onClick={event => event.stopPropagation()}>
        <h3>自由画布</h3>
        <table style={{ width: '100%', fontSize: 12, borderCollapse: 'collapse' }}>
          <tbody>
            {rows.map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '5px 8px 5px 0', color: 'var(--im-ink-3)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>{key}</td>
                <td style={{ padding: '5px 0', lineHeight: 1.6 }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {config ? (
          <p className="im-muted" style={{ fontSize: 11.5, marginTop: 10, lineHeight: 1.7 }}>
            配置来源：{config.root || '未找到'} · profile「{config.profileLabel || config.profile}」· 模型 {config.modelLabel}
            <br />
            结果默认落在 {config.defaultOutputDir}
          </p>
        ) : null}
        <div className="im-modal-actions" style={{ marginTop: 12 }}>
          <button type="button" className="im-btn" onClick={onClose}>关闭</button>
        </div>
      </div>
    </div>
  )
}
