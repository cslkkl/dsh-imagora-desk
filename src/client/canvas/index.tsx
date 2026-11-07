// 自由画布主体：无限画布 + 提示词卡 + 图片节点 + 图片组，连线即参考关系。
// 纯逻辑沿用 Imagora 的模块（lib/workflow.ts 等），界面用本插件自己的样式。
//
// 这个文件只做装配：状态与 refs 在这里，具体动作分散在 use-canvas-*.ts，
// 展示件在 toolbar / overlays / dialogs。
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Background,
  BackgroundVariant,
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
  autoConnectSelection,
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
import { applySnapToChanges, readSnapEnabled, saveSnapEnabled, snapBoxOf } from '../lib/snapDrag'
import { snapToNeighbors, type SnapGuide } from '../lib/snapGuide'
import { NodeActionContext } from '../nodes'
import { CANVAS_CSS } from '../styles'
import { NODE_TYPES } from './node-types'
import { CanvasToolbar } from './toolbar'
import { CanvasDock } from './dock'
import { useCanvasDrop } from './use-canvas-drop'
import { readMinimapVisible, saveMinimapVisible } from '../lib/canvasPrefs'
import { SelectionInspector } from './inspector'
import { Banner, EmptyState, LogPanel, Toast } from './overlays'
import { ZoomModal } from './zoom-modal'
import { HelpDialog, LoadDialog, SaveDialog } from './dialogs'
import { CropDialog } from './crop-dialog'
import { MaskDialog } from './mask-dialog'
import { HistoryDialog } from './history-dialog'
import { SplitDialog } from './split-dialog'
import { UpscaleDialog } from './upscale-dialog'
import { useCostSummary } from './cost'
import { SnapGuideLayer } from './snap-guides'
import { PromptImportDialog } from './prompt-import-dialog'
import { SettingsDialog } from './settings-dialog'
import { connectEdge, useCanvasImages } from './use-canvas-images'
import { useGeneratedTasks } from './use-canvas-tasks'
import { useCanvasConfig } from './use-canvas-config'
import { useCanvasHistory } from './use-canvas-history'
import { useCanvasKeys } from './use-canvas-keys'
import { useCanvasWorkflow } from './use-canvas-workflow'

type DialogState = {
  kind: 'save' | 'load' | 'help' | 'settings' | 'import' | 'history' | 'crop' | 'split' | 'upscale' | 'mask'
  workflows?: { name: string; modified: string }[]
  /** 图片加工类对话框要处理的那张图 */
  target?: { nodeId: string; src: string; name: string }
}

export function CanvasApp() {
  const [nodes, setNodes, onNodesChangeBase] = useNodesState<WorkflowNode>([])
  const [edges, setEdges, onEdgesChangeBase] = useEdgesState<Edge>([])
  const [logs, setLogs] = useState<string[]>([])
  const [toast, setToast] = useState<string | null>(null)
  const [dialog, setDialog] = useState<DialogState | null>(null)
  /** 预览：url 用来显示，path 是本机绝对路径（「复制路径」用；外链/blob 没有就为空） */
  const [preview, setPreview] = useState<{ url: string; name: string; path?: string } | null>(null)
  const [zoom, setZoom] = useState(1)
  // 小地图默认关（与 Imagora 一致：卡片铺开了才需要它，平时白占地方）
  // 小地图默认关；开关状态存本机（原版也是这么存的，刷新后保持）
  const [minimapOpen, setMinimapOpen] = useState(() => readMinimapVisible())
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [selectedEdgeId, setSelectedEdgeId] = useState<string | null>(null)
  const [snapEnabled, setSnapEnabled] = useState(() => readSnapEnabled())
  const [canvasLocked, setCanvasLocked] = useState(false)
  const [guides, setGuides] = useState<SnapGuide[]>([])

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

  const { config, configIssues, configRef, switchProfile, switchModel, replaceConfig } = useCanvasConfig(flash)

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
  const { addImages, replaceImage, openPreview, addDataUrl } = useCanvasImages({
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
  })

  /* ---------------- 撤销 / 重做 ---------------- */
  const history = useCanvasHistory({ nodesRef, edgesRef, setNodes, setEdges, flash })

  /* ---------------- 成本 ---------------- */
  const cost = useCostSummary(nodes)

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

  const addPromptNode = useCallback(
    (at?: { x: number; y: number }) => {
      const cfg = configRef.current
      const node = buildPromptNode(at ?? createPosition(), {
        size: cfg?.sizes[0]?.value ?? '1024x1024',
        quality: cfg?.qualities[0] ?? 'high',
        outputDir: '',
      })
      setNodes(current => [...current, node])
    },
    [createPosition, setNodes, configRef],
  )

  const addGroupNode = useCallback(
    (at?: { x: number; y: number }) => {
      setNodes(current => [...current, buildGroupNode(at ?? createPosition())])
    },
    [createPosition, setNodes],
  )

  /* ---------------- 组织 ---------------- */
  const autoConnectAll = useCallback(() => {
    setEdges(autoConnect(nodesRef.current, edgesRef.current as WorkflowEdge[]) as Edge[])
    flash('已按位置补齐明显的连线')
  }, [setEdges, flash])

  /** 只补选中节点之间的边（选中栏的「自动连线」，与顶栏那个全局的不一样）。 */
  const autoConnectSelected = useCallback(() => {
    const ids = new Set(selectedIds)
    if (!ids.size) {
      flash('先选中要连线的节点')
      return
    }
    history.record()
    setEdges(autoConnectSelection(nodesRef.current, edgesRef.current as WorkflowEdge[], ids) as Edge[])
    flash('已补齐选中节点间的连线')
  }, [selectedIds, setEdges, flash, history])

  /** 把选中的提示词卡片统一设为默认输出路径。
   *  原版走服务端的目录选择窗口；插件 host 没有这个接口，所以取「设置里那个默认输出路径」，
   *  按钮标题写清楚用的就是这个值，不做无声的猜测。 */
  const setSelectedOutputDir = useCallback(() => {
    const ids = new Set(selectedIds)
    const target = configRef.current?.defaultOutputDir ?? ''
    if (!ids.size) return
    history.record()
    setNodes(current =>
      current.map(node =>
        node.type === 'prompt' && ids.has(node.id) ? { ...node, data: { ...node.data, outputDir: target } } : node,
      ),
    )
    flash(target ? `已把选中的卡片输出路径设为 ${target}` : '已把选中的卡片改回「只留在画布」')
  }, [selectedIds, setNodes, flash, history])

  /** 聚焦：有选中就只看选中的，否则看全图（原版 Controls 里那一行）。 */
  const focusSelected = useCallback(() => {
    const instance = instanceRef.current
    if (!instance) return
    const selected = nodesRef.current.filter(node => selectedIds.includes(node.id))
    const targets = selected.length ? selected : nodesRef.current
    if (!targets.length) {
      flash('画布上还没有节点')
      return
    }
    void instance.fitView({ nodes: targets, padding: 0.25, duration: 300, maxZoom: 1.6 })
  }, [selectedIds, flash])

  const arrangeSelected = useCallback(() => {
    const ids = new Set(selectedIds)
    if (!ids.size) {
      flash('先选中要整理的节点')
      return
    }
    history.record()
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
  }, [selectedIds, setNodes, flash, history])

  /* ---------------- 拖入：文件 / 工具栏按钮 ---------------- */
  // 文件拖进来 -> 建图片节点；工具栏按钮拖进来 -> 在落点建提示词卡 / 图片组。
  // 落点胶囊全局跟随光标，落在画布外即取消（与 Imagora 的 useCanvasDrop 同一套语义）。
  const {
    dropIntent,
    dragHandlers: dropHandlers,
    startToolbarDrag,
    dropChip,
  } = useCanvasDrop({
    canvasRef: flowRef,
    modalOpen: Boolean(dialog) || Boolean(preview),
    getCreatePosition: () => createPosition(),
    toFlowPosition: screen =>
      instanceRef.current ? instanceRef.current.screenToFlowPosition(screen) : createPosition(),
    onDropFiles: (files, point) => void addImages(files, point),
    onDropNode: (kind, point) => {
      history.record()
      if (kind === 'prompt') addPromptNode(point)
      else addGroupNode(point)
    },
  })

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

  /* ---------------- 图片加工：裁剪 / 切分 / 放大 ---------------- */
  // 三个动作都只是「打开对应对话框，把要处理的那张图带过去」，
  // 真正的像素处理在对话框里（本地 canvas，不走接口、不花钱）。
  const openImageOp = useCallback(
    (kind: 'crop' | 'split' | 'upscale' | 'mask') => (nodeId: string) => {
      const node = nodesRef.current.find(row => row.id === nodeId)
      if (!node || node.type !== 'image' || !node.data.url) {
        flash('这张图还没有可用的文件')
        return
      }
      setDialog({ kind, target: { nodeId, src: node.data.url, name: node.data.name } })
    },
    [nodesRef, flash],
  )

  const imageOps = useMemo(
    () => ({
      cropImage: openImageOp('crop'),
      splitImage: openImageOp('split'),
      upscaleImage: openImageOp('upscale'),
      maskImage: openImageOp('mask'),
    }),
    [openImageOp],
  )

  /** 清除某张图挂着的蒙版：角标点一下就清（原版同样的交互）。
   *  蒙版会一直跟着图走，之后每次拿它当参考图都按蒙版重绘；没有清除入口时，
   *  用户挂错了只能删图重建。 */
  const clearMask = useCallback(
    (nodeId: string) => {
      history.record()
      setNodes(current =>
        current.map(node =>
          node.id === nodeId && node.type === 'image'
            ? { ...node, data: { ...node.data, maskDataUrl: undefined } }
            : node,
        ),
      )
      flash('已清除这张图的蒙版')
    },
    [setNodes, history, flash],
  )

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
      ...imageOps,
      clearMask,
      config,
    }),
    [updatePrompt, runPrompt, cancelPrompt, deleteNode, openPreview, replaceImage, imageOps, clearMask, config],
  )

  return (
    <NodeActionContext.Provider value={actions}>
      <style>{CANVAS_CSS}</style>
      <div className="im-root">
        <CanvasToolbar
          config={config}
          promptCount={promptNodes.length}
          runnableIds={runnableIds}
          busyIds={busyIds.length}
          snapEnabled={snapEnabled}
          canvasLocked={canvasLocked}
          cost={cost}
          canUndo={history.canUndo}
          canRestore={history.canRestore}
          onUndo={() => {
            history.record()
            history.undo()
          }}
          onRestore={history.restore}
          onAddPrompt={() => addPromptNode()}
          onPickFiles={() => fileInputRef.current?.click()}
          onAddGroup={() => addGroupNode()}
          onPasteImport={() => setDialog({ kind: 'import' })}
          onDragCreateNode={startToolbarDrag}
          onRun={runMany}
          onCancelAll={() => busyIds.forEach(id => void cancelPrompt(id))}
          onAutoConnect={autoConnectAll}
          onOpenDefaultOutputDir={() => setDialog({ kind: 'settings' })}
          onSwitchProfile={name => void switchProfile(name)}
          onSwitchModel={model => void switchModel(model)}
          onOpenSave={async () => {
            // 保存弹窗要列出已有工作流（同名可覆盖），所以先取一次列表；
            // 读不到也照样能存 —— 只是少了「覆盖已有」这条捷径。
            try {
              const data = await listWorkflows()
              setDialog({ kind: 'save', workflows: data.workflows })
            } catch {
              setDialog({ kind: 'save' })
            }
          }}
          onOpenLoad={async () => {
            try {
              const data = await listWorkflows()
              setDialog({ kind: 'load', workflows: data.workflows })
            } catch (error) {
              flash(`读取失败：${errMessage(error)}`)
            }
          }}
          onOpenSettings={() => setDialog({ kind: 'settings' })}
          onOpenHelp={() => setDialog({ kind: 'help' })}
          onOpenHistory={() => setDialog({ kind: 'history' })}
        />
        {/* 配置缺失：逐条列出来 + 一个直达设置的按钮，不做整块色底 */}
        {configIssues.length ? (
          <Banner
            tone="error"
            action={
              <button type="button" className="im-btn-ghost im-btn-xs" onClick={() => setDialog({ kind: 'settings' })}>
                去设置
              </button>
            }
          >
            <ul className="im-banner-list">
              {configIssues.map(line => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Banner>
        ) : null}

        {/* 不设常驻提示条：Imagora 把这一行删了（占画布高度、浮层还会被画布盖住），
            用法收进左下角控件坞的「帮助」弹窗里 */}

        <div className={`im-canvas${dropIntent ? ` is-drop-active` : ``}`} ref={flowRef} {...dropHandlers}>
          {/* 选中操作栏：相对**画布**右上角定位（原版挂在 .studio-canvas 里）。
              放到 .im-root 上会跑到整个面板的右上角，离画布边距、工具栏都错开。 */}
          <SelectionInspector
            selectedCount={selectedIds.length}
            selectedPromptCount={
              selectedIds.filter(id => nodes.some(node => node.id === id && node.type === 'prompt')).length
            }
            selectedRunnableIds={runnableIds.filter(id => selectedIds.includes(id))}
            pickingOutputDir={false}
            onRunSelected={() => runMany(runnableIds.filter(id => selectedIds.includes(id)))}
            onAutoLayout={arrangeSelected}
            onAutoConnectSelected={autoConnectSelected}
            onSetOutputDir={setSelectedOutputDir}
            onDeleteSelected={() => {
              removeNodes(selectedIds)
              setSelectedIds([])
            }}
          />
          <ReactFlow
            nodes={renderNodes}
            edges={edges}
            nodeTypes={NODE_TYPES}
            onNodesChange={(changes: NodeChange<WorkflowNode>[]) => {
              // 拖拽时按邻居对齐（与 Imagora 同一套 snapGuide/snapDrag 纯函数）。
              // 只修正 position change，其余变更原样交给 React Flow。
              const outcome = applySnapToChanges(changes, nodesRef.current, snapEnabled)
              setGuides(outcome.guides)
              onNodesChangeBase(outcome.changes as NodeChange<WorkflowNode>[])
            }}
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
            onNodeDragStop={(_event, node) => {
              setGuides([])
              if (!snapEnabled) return
              // React Flow 松手时会再发一帧 dragging:false 的 position change，
              // 那一帧不走吸附，落点会退回未对齐的坐标。这里按最终位置再对齐一次。
              const moving = snapBoxOf(node as WorkflowNode)
              const others = nodesRef.current.filter(row => row.id !== node.id).map(snapBoxOf)
              const snapped = snapToNeighbors(moving, others)
              if (snapped.x === moving.x && snapped.y === moving.y) return
              setNodes(current =>
                current.map(row => (row.id === node.id ? { ...row, position: { x: snapped.x, y: snapped.y } } : row)),
              )
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
            // 与 Imagora 的「锁定画布」同语义：一次性关掉拖动/连线/选中/平移，
            // 只看不动（缩放仍留着，方便凑近看细节）
            nodesDraggable={!canvasLocked}
            nodesConnectable={!canvasLocked}
            elementsSelectable={!canvasLocked}
            panOnDrag={!canvasLocked}
            selectionOnDrag={false}
            selectionKeyCode="Shift"
            multiSelectionKeyCode={['Meta', 'Control']}
          >
            <Background variant={BackgroundVariant.Dots} gap={18} size={1.4} />
            {/* 缩放控件栈由 CanvasDock 接管（React Flow 自带的那套图标不带文字，认不出） */}
            {/* 小地图放左上（Imagora 的位置）：右下角留给日志，那是「刚刚发生了什么」的即时反馈，
                被小地图压住就读不到了；左下角是缩放控件栈，右上角是选中操作栏。 */}
            {minimapOpen ? (
              <MiniMap
                ariaLabel="画布小地图"
                pannable
                zoomable
                position="top-left"
                style={{ width: 160, height: 110 }}
                nodeColor={node => (node.type === 'prompt' ? 'var(--im-brand)' : 'var(--im-ink-3)')}
                maskColor="rgba(31, 41, 55, 0.08)"
                nodeStrokeWidth={2}
              />
            ) : null}
            <SnapGuideLayer guides={guides} />
          </ReactFlow>
          <CanvasDock
            zoom={zoom}
            snapEnabled={snapEnabled}
            canvasLocked={canvasLocked}
            minimapOpen={minimapOpen}
            onZoomIn={() => void instanceRef.current?.zoomIn({ duration: 180 })}
            onZoomOut={() => void instanceRef.current?.zoomOut({ duration: 180 })}
            onFitView={() => instanceRef.current?.fitView({ padding: 0.2, duration: 300 })}
            onFocusSelected={focusSelected}
            onToggleSnap={() =>
              setSnapEnabled(value => {
                const next = !value
                saveSnapEnabled(next)
                if (!next) setGuides([])
                flash(next ? '吸附已开：拖动时会贴齐邻居' : '吸附已关：自由摆放')
                return next
              })
            }
            onToggleLock={() =>
              setCanvasLocked(value => {
                const next = !value
                flash(next ? '画布已锁：只可缩放，拖动/连线/选中/平移都停了' : '画布已解锁')
                return next
              })
            }
            onToggleMinimap={() =>
              setMinimapOpen(value => {
                const next = !value
                saveMinimapVisible(next)
                return next
              })
            }
            onOpenHelp={() => setDialog({ kind: 'help' })}
          />
          {nodes.length === 0 ? <EmptyState /> : null}
          <LogPanel logs={logs} />
          <Toast text={toast} />
          {dropChip}
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
          <ZoomModal
            imageUrl={preview.url}
            name={preview.name}
            copyPath={preview.path}
            onClose={() => setPreview(null)}
          />
        ) : null}
        {dialog?.kind === 'save' ? (
          <SaveDialog
            workflows={dialog.workflows ?? []}
            imagoraRoot={config?.imagoraRoot}
            onCancel={() => setDialog(null)}
            onSubmit={name => void doSave(name)}
          />
        ) : null}
        {dialog?.kind === 'load' ? (
          <LoadDialog
            workflows={dialog.workflows ?? []}
            imagoraRoot={config?.imagoraRoot}
            onCancel={() => setDialog(null)}
            onPick={name => void doLoad(name)}
          />
        ) : null}
        {dialog?.kind === 'crop' && dialog.target ? (
          <CropDialog
            src={dialog.target.src}
            name={dialog.target.name}
            onClose={() => setDialog(null)}
            onConfirm={async (dataUrl, note) => {
              history.record()
              await addDataUrl(dataUrl, `${dialog.target!.name.replace(/\.[^.]+$/, '')}_crop_${Date.now()}.png`)
              setDialog(null)
              flash(note)
            }}
          />
        ) : null}
        {dialog?.kind === 'split' && dialog.target ? (
          <SplitDialog
            src={dialog.target.src}
            onClose={() => setDialog(null)}
            onConfirm={async parts => {
              history.record()
              const base = dialog.target!.name.replace(/\.[^.]+$/, '')
              const origin = createPosition()
              for (const [index, part] of parts.entries()) {
                await addDataUrl(part.dataUrl, `${base}_${index + 1}.png`, {
                  x: origin.x + index * 160,
                  y: origin.y,
                })
              }
              setDialog(null)
              flash(`已切出 ${parts.length} 张`)
            }}
          />
        ) : null}
        {dialog?.kind === 'upscale' && dialog.target ? (
          <UpscaleDialog
            src={dialog.target.src}
            onClose={() => setDialog(null)}
            onConfirm={async (dataUrl, note) => {
              history.record()
              await addDataUrl(dataUrl, `${dialog.target!.name.replace(/\.[^.]+$/, '')}_up_${Date.now()}.png`)
              setDialog(null)
              flash(note)
            }}
          />
        ) : null}
        {dialog?.kind === 'mask' && dialog.target ? (
          <MaskDialog
            src={dialog.target.src}
            name={dialog.target.name}
            onClose={() => setDialog(null)}
            onConfirm={async (maskDataUrl, note) => {
              // 蒙版挂在图片节点上而不是提示词卡：它描述的是「这张图的哪块要改」，
              // 换提示词重画同一块是常态，蒙版该跟着图走
              history.record()
              setNodes(current =>
                current.map(row =>
                  row.id === dialog.target!.nodeId && row.type === 'image'
                    ? { ...row, data: { ...row.data, maskDataUrl } }
                    : row,
                ),
              )
              setDialog(null)
              flash(note)
            }}
          />
        ) : null}
        {dialog?.kind === 'help' ? <HelpDialog config={config} onClose={() => setDialog(null)} /> : null}
        {dialog?.kind === 'history' ? (
          <HistoryDialog
            imagoraRoot={config?.imagoraRoot}
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
          <SettingsDialog config={config} onClose={() => setDialog(null)} onSaved={replaceConfig} onFlash={flash} />
        ) : null}
      </div>
    </NodeActionContext.Provider>
  )
}
