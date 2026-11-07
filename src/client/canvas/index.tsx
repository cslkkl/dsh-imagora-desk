// 自由画布主体：无限画布 + 提示词卡 + 图片节点 + 图片组，连线即参考关系。
// 纯逻辑沿用 Imagora 的模块（lib/workflow.ts 等），界面用本插件自己的样式。
//
// 这个文件只做装配：状态与 refs 在这里，具体动作分散在 use-canvas-*.ts，
// 展示件在 toolbar / overlays / dialogs。
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Background,
  BackgroundVariant,
  Controls,
  MarkerType,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Edge,
  type EdgeChange,
  type NodeChange,
  type ReactFlowInstance,
} from '@xyflow/react'
import { deleteAsset, listWorkflows } from '../api'
import {
  autoConnect,
  buildGroupNode,
  buildImageNode,
  buildPromptNode,
  canConnect,
  computeCounts,
  staggerCreatePosition,
  updatePromptNode,
} from '../lib/workflow'
import type { WorkflowEdge, WorkflowNode } from '../lib/types'
import { errMessage } from '../lib/format'
import { buildPromptNodes } from '../lib/promptImportFormat'
import { NodeActionContext } from '../nodes'
import { CANVAS_CSS } from '../styles'
import { NODE_TYPES } from './node-types'
import { CanvasToolbar } from './toolbar'
import { Banner, EmptyState, LogPanel, PreviewOverlay, Toast } from './overlays'
import { HelpDialog, LoadDialog, SaveDialog } from './dialogs'
import { HistoryDialog } from './history-dialog'
import { PromptImportDialog } from './prompt-import-dialog'
import { SettingsDialog } from './settings-dialog'
import { connectEdge, useCanvasImages } from './use-canvas-images'
import { useGeneratedTasks } from './use-canvas-tasks'
import { useCanvasConfig } from './use-canvas-config'
import { useCanvasHistory } from './use-canvas-history'
import { useCanvasKeys } from './use-canvas-keys'
import { useCanvasWorkflow } from './use-canvas-workflow'

type DialogState = {
  kind: 'save' | 'load' | 'help' | 'settings' | 'import' | 'history'
  workflows?: { name: string; modified: string }[]
}

export function CanvasApp() {
  const [nodes, setNodes, onNodesChangeBase] = useNodesState<WorkflowNode>([])
  const [edges, setEdges, onEdgesChangeBase] = useEdgesState<Edge>([])
  const [logs, setLogs] = useState<string[]>([])
  const [toast, setToast] = useState<string | null>(null)
  const [dialog, setDialog] = useState<DialogState | null>(null)
  const [preview, setPreview] = useState<{ url: string; name: string } | null>(null)
  const [zoom, setZoom] = useState(1)
  const [minimapOpen, setMinimapOpen] = useState(true)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [selectedEdgeId, setSelectedEdgeId] = useState<string | null>(null)
  const [restored, setRestored] = useState<string | null>(null)

  const flowRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<ReactFlowInstance<WorkflowNode, Edge> | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const lastCreateRef = useRef<{ x: number; y: number } | null>(null)
  const timersRef = useRef<Map<string, number>>(new Map())
  const taskIdsRef = useRef<Map<string, string>>(new Map())
  const nodesRef = useRef(nodes)
  const edgesRef = useRef(edges)

  nodesRef.current = nodes
  edgesRef.current = edges

  const log = useCallback((line: string) => {
    setLogs(current => [...current.slice(-8), line])
  }, [])

  const flash = useCallback((line: string) => {
    setToast(line)
    window.setTimeout(() => setToast(current => (current === line ? null : current)), 2600)
  }, [])

  const { config, configError, configRef, switchProfile, switchModel, replaceConfig } = useCanvasConfig(flash)

  // 首次使用（既没插件内配置、也没有可用密钥）时直接把设置弹出来：
  // 「下载后填一次 key 就能用」靠这一步，不然用户只会看到一行错误提示。
  const settingsPrompted = useRef(false)
  useEffect(() => {
    if (!config || settingsPrompted.current) return
    const needsSetup = !config.provider?.apiKeyConfigured && (config.source === 'plugin' || config.issues.length > 0)
    if (!needsSetup) return
    settingsPrompted.current = true
    setDialog({ kind: 'settings' })
  }, [config])
  const { addImages, replaceImage, openPreview } = useCanvasImages({
    nodesRef,
    setNodes,
    createPosition: () => createPositionRef.current(),
    log,
    flash,
    setPreview,
  })
  const { runPrompt, cancelPrompt, runMany } = useGeneratedTasks({
    nodesRef,
    edgesRef,
    setNodes,
    setEdges,
    log,
    flash,
    taskIdsRef,
    timersRef,
  })
  const { doSave, doLoad } = useCanvasWorkflow({
    nodes,
    edges,
    nodesRef,
    edgesRef,
    setNodes,
    setEdges,
    instanceRef,
    log,
    flash,
    closeDialog: () => setDialog(null),
    setRestored,
  })

  /* ---------------- 撤销 / 重做 ---------------- */
  const history = useCanvasHistory({ nodesRef, edgesRef, setNodes, setEdges, flash })

  /* ---------------- 派生量 ---------------- */
  // 引用计数与组聚合在渲染时算，不写回状态（写回会和节点同步互相触发）
  const counts = useMemo(() => computeCounts(nodes, edges as WorkflowEdge[]), [nodes, edges])
  const renderNodes = useMemo(
    () =>
      nodes.map(node => {
        if (node.type === 'image') {
          const count = counts.refCounts.get(node.data.registryId) ?? 0
          return (node.data.refCount ?? 0) === count ? node : { ...node, data: { ...node.data, refCount: count } }
        }
        if (node.type === 'group') {
          const imageCount = counts.groupCounts.get(node.id) ?? 0
          const totalSize = counts.groupSizes.get(node.id) ?? 0
          const duplicateCount = counts.groupDups.get(node.id) ?? 0
          if (
            node.data.imageCount === imageCount &&
            node.data.totalSize === totalSize &&
            node.data.duplicateCount === duplicateCount
          ) {
            return node
          }
          return { ...node, data: { ...node.data, imageCount, totalSize, duplicateCount } }
        }
        return node
      }),
    [nodes, counts],
  )

  const promptNodes = nodes.filter(node => node.type === 'prompt')
  const busyIds = promptNodes
    .filter(node => node.data.status === 'queued' || node.data.status === 'running')
    .map(node => node.id)
  const runnableIds = promptNodes
    .filter(node => node.data.prompt.trim() && node.data.status !== 'running' && node.data.status !== 'queued')
    .map(node => node.id)

  /* ---------------- 节点操作 ---------------- */
  const updatePrompt = useCallback(
    (nodeId: string, patch: Record<string, unknown>) => {
      setNodes(current => updatePromptNode(current, nodeId, patch))
    },
    [setNodes],
  )

  const removeNodes = useCallback(
    (ids: string[]) => {
      history.record()
      const drop = new Set(ids)
      setNodes(current => current.filter(node => !drop.has(node.id)))
      setEdges(current => current.filter(edge => !drop.has(edge.source) && !drop.has(edge.target)))
    },
    [setNodes, setEdges, history],
  )

  const deleteNode = useCallback(
    (nodeId: string) => {
      const node = nodesRef.current.find(row => row.id === nodeId)
      removeNodes([nodeId])
      if (node?.type === 'image') void deleteAsset(node.data.registryId).catch(() => undefined)
    },
    [removeNodes],
  )

  /* ---------------- 新建节点落点 ---------------- */
  const createPosition = useCallback((): { x: number; y: number } => {
    const instance = instanceRef.current
    const rect = flowRef.current?.getBoundingClientRect()
    const center =
      instance && rect ? instance.screenToFlowPosition({ x: rect.width / 2, y: rect.height / 2 }) : { x: 140, y: 120 }
    const { position, next } = staggerCreatePosition(center, lastCreateRef.current)
    lastCreateRef.current = next
    return position
  }, [])

  const createPositionRef = useRef(createPosition)
  createPositionRef.current = createPosition

  const addPromptNode = useCallback(() => {
    const cfg = configRef.current
    const node = buildPromptNode(createPosition(), {
      size: cfg?.sizes[0]?.value ?? '1024x1024',
      quality: cfg?.qualities[0] ?? 'high',
      outputDir: '',
    })
    setNodes(current => [...current, node])
  }, [createPosition, setNodes, configRef])

  const addGroupNode = useCallback(() => {
    setNodes(current => [...current, buildGroupNode(createPosition())])
  }, [createPosition, setNodes])

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

  /* ---------------- 拖放 / 粘贴 ---------------- */
  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault()
      const files = Array.from(event.dataTransfer?.files ?? [])
      if (!files.length) return
      const instance = instanceRef.current
      const position = instance
        ? instance.screenToFlowPosition({ x: event.clientX, y: event.clientY })
        : createPosition()
      void addImages(files, position)
    },
    [addImages, createPosition],
  )

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

  /* ---------------- 键盘：与 Imagora 同键位 ---------------- */
  useCanvasKeys({
    nodesRef,
    edgesRef,
    setNodes,
    setEdges,
    selectedIds,
    selectedEdgeId,
    onDeleteNodes: removeNodes,
    onDeleteEdge: edgeId => {
      history.record()
      setEdges(current => current.filter(edge => edge.id !== edgeId))
      setSelectedEdgeId(null)
    },
    onUndo: history.undo,
    onRestore: history.restore,
    onSave: () => setDialog({ kind: 'save' }),
    onClosePreview: () => setPreview(null),
    hasPreview: Boolean(preview),
  })

  /* ---------------- 节点上下文 ---------------- */
  const actions = useMemo(
    () => ({
      updatePrompt,
      runPrompt: (nodeId: string) => {
        void runPrompt(nodeId)
      },
      cancelPrompt: (nodeId: string) => {
        void cancelPrompt(nodeId)
      },
      deleteNode,
      zoomImage: openPreview,
      replaceImage,
      config,
    }),
    [updatePrompt, runPrompt, cancelPrompt, deleteNode, openPreview, replaceImage, config],
  )

  return (
    <NodeActionContext.Provider value={actions}>
      <style>{CANVAS_CSS}</style>
      <div className="im-root">
        <CanvasToolbar
          config={config}
          promptCount={promptNodes.length}
          runnableIds={runnableIds}
          selectedIds={selectedIds}
          busyIds={busyIds}
          minimapOpen={minimapOpen}
          zoom={zoom}
          onAddPrompt={addPromptNode}
          onPickFiles={() => fileInputRef.current?.click()}
          onAddGroup={addGroupNode}
          onPasteImport={() => setDialog({ kind: 'import' })}
          onRun={runMany}
          onCancelAll={() => busyIds.forEach(id => void cancelPrompt(id))}
          onAutoConnect={autoConnectAll}
          onArrangeSelected={arrangeSelected}
          onSwitchProfile={name => void switchProfile(name)}
          onSwitchModel={model => void switchModel(model)}
          onToggleMinimap={() => setMinimapOpen(value => !value)}
          onFitView={() => instanceRef.current?.fitView({ padding: 0.2, duration: 300 })}
          onOpenSave={() => setDialog({ kind: 'save' })}
          onOpenLoad={async () => {
            try {
              const data = await listWorkflows()
              setDialog({ kind: 'load', workflows: data.workflows })
            } catch (error) {
              flash(`读取失败：${errMessage(error)}`)
            }
          }}
          onOpenSettings={() => setDialog({ kind: 'settings' })}
          onOpenHistory={() => setDialog({ kind: 'history' })}
          onOpenHelp={() => setDialog({ kind: 'help' })}
        />

        {configError ? <Banner tone="error">{configError}</Banner> : null}
        {restored && !configError ? (
          <Banner
            tone="warn"
            action={
              <button
                type="button"
                className="im-btn is-ghost"
                style={{ height: 22 }}
                onClick={() => setRestored(null)}
              >
                知道了
              </button>
            }
          >
            已恢复上次画布
          </Banner>
        ) : null}

        <div className="im-canvas" ref={flowRef} onDragOver={event => event.preventDefault()} onDrop={onDrop}>
          <ReactFlow
            nodes={renderNodes}
            edges={edges}
            nodeTypes={NODE_TYPES}
            onNodesChange={(changes: NodeChange<WorkflowNode>[]) => onNodesChangeBase(changes)}
            onEdgesChange={(changes: EdgeChange<Edge>[]) => onEdgesChangeBase(changes)}
            onConnect={connectEdge(setEdges)}
            isValidConnection={connection =>
              canConnect(nodesRef.current, edgesRef.current as WorkflowEdge[], {
                source: String(connection.source ?? ''),
                target: String(connection.target ?? ''),
              })
            }
            onInit={instance => {
              instanceRef.current = instance
            }}
            onMove={(_, viewport) => setZoom(viewport.zoom)}
            onEdgeDoubleClick={(_event, edge) => {
              // 与 Imagora 一致：双击连线直接删掉，不用先选中再按 Del
              history.record()
              setEdges(current => current.filter(row => row.id !== edge.id))
              setSelectedEdgeId(null)
            }}
            onSelectionChange={({ nodes: picked, edges: pickedEdges }) => {
              const ids = picked.map(node => node.id)
              setSelectedIds(current =>
                current.length === ids.length && current.every((id, index) => id === ids[index]) ? current : ids,
              )
              const edgeId = pickedEdges.length === 1 ? pickedEdges[0].id : null
              setSelectedEdgeId(current => (current === edgeId ? current : edgeId))
            }}
            fitView
            fitViewOptions={{ padding: 0.25, maxZoom: 1 }}
            minZoom={0.05}
            maxZoom={2.5}
            proOptions={{ hideAttribution: true }}
            defaultEdgeOptions={{ animated: true, markerEnd: { type: MarkerType.ArrowClosed } }}
            deleteKeyCode={null}
            // 滚轮 = 缩放。之前打开了 panOnScroll，滚轮被当成上下平移，
            // 与 Imagora（只设 panOnDrag，滚轮保持缩放）不一致。
            panOnScroll={false}
            zoomOnScroll
            zoomOnPinch
            // 与 Imagora 同一套手势：左键拖空白 = 平移画布（panOnDrag），
            // Ctrl/Cmd+点击 = 加选。框选 Imagora 用右键拖，这里用 Shift+拖（原生），
            // 右键留给「平移」，免得和 Imagora 的右键框选抢同一个键。
            panOnDrag
            selectionOnDrag={false}
            selectionKeyCode="Shift"
            multiSelectionKeyCode={['Meta', 'Control']}
          >
            <Background variant={BackgroundVariant.Dots} gap={18} size={1.4} />
            <Controls position="bottom-left" showInteractive={false} />
            {minimapOpen ? (
              <MiniMap pannable zoomable position="bottom-right" style={{ width: 160, height: 110 }} />
            ) : null}
          </ReactFlow>

          {nodes.length === 0 ? <EmptyState /> : null}
          <LogPanel logs={logs} onClear={() => setLogs([])} />
          <Toast text={toast} />
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

        <PreviewOverlay preview={preview} onClose={() => setPreview(null)} />

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
        {dialog?.kind === 'history' ? (
          <HistoryDialog
            onClose={() => setDialog(null)}
            onImport={entries => {
              if (!entries.length) return
              history.record()
              const origin = createPosition()
              // 逐张错位摆放，别叠成一摞
              const created = entries.map((entry, index) =>
                buildImageNode(entry, { x: origin.x + index * 172, y: origin.y }),
              )
              setNodes(current => [...current, ...created])
              setDialog(null)
              flash(`已放入 ${created.length} 张图`)
            }}
          />
        ) : null}
        {dialog?.kind === 'import' ? (
          <PromptImportDialog
            sizes={config?.sizes ?? []}
            onCancel={() => setDialog(null)}
            onConfirm={cards => {
              history.record()
              const cfg = configRef.current
              const created = buildPromptNodes(
                cards,
                {
                  sizes: cfg?.sizes ?? [],
                  defaultQuality: cfg?.qualities[0] ?? 'high',
                  defaultOutputDir: '',
                },
                createPosition(),
              )
              setNodes(current => [...current, ...created])
              setDialog(null)
              flash(`已建 ${created.length} 张提示词卡`)
            }}
          />
        ) : null}
        {dialog?.kind === 'settings' ? (
          <SettingsDialog
            config={config}
            onClose={() => setDialog(null)}
            onSaved={next => {
              replaceConfig(next)
              setDialog(null)
            }}
            onFlash={flash}
          />
        ) : null}
      </div>
    </NodeActionContext.Provider>
  )
}
