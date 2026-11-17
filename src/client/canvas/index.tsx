// 自由画布主体：无限画布 + 提示词卡 + 图片节点 + 图片组，连线即参考关系。
// 纯逻辑沿用 Imagora 的模块（lib/workflow.ts 等），界面用本插件自己的样式。
//
// 这个文件只做装配：状态与 refs 在这里，具体动作分散在 use-canvas-*.ts，
// 展示件在 toolbar / overlays / dialogs。
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Background,
  BackgroundVariant,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Edge,
  type EdgeChange,
  type NodeChange,
  type ReactFlowInstance,
} from '@xyflow/react'
import { listWorkflows } from '../api'
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
import { layoutSelection } from '../lib/layout'
import { LodContext, NodeActionContext } from '../nodes'
import { CANVAS_CSS } from '../styles'
import { NODE_TYPES } from './node-types'
import {
  FIT_ANIM_MS,
  FIT_MAX_ZOOM,
  FIT_PADDING,
  FOCUS_MAX_ZOOM,
  FOCUS_PADDING,
  INITIAL_FIT_MAX_ZOOM,
  LOD_IN_ZOOM,
  MAX_ZOOM,
  MIN_FIT_ZOOM,
  MIN_ZOOM,
  ZOOM_ANIM_MS,
  nextLod,
} from './zoom'
import { CanvasToolbar } from './toolbar'
import { CanvasDock } from './dock'
import { useCanvasDrop } from './use-canvas-drop'
import { useCanvasContextMenu } from './use-canvas-context-menu'
import { NodeContextMenu } from './node-context-menu'
import { buildNodeMenu } from '../lib/contextMenu'
import { menuLabel } from './menu-labels'
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
import { CanvasBoundary } from './error-boundary'
import { LocaleProvider, useT } from '../i18n'
import type { Translate } from '../locales'

type DialogState = {
  kind: 'save' | 'load' | 'help' | 'settings' | 'import' | 'history' | 'crop' | 'split' | 'upscale' | 'mask'
  workflows?: { name: string; modified: string }[]
  /** 图片加工类对话框要处理的那张图 */
  target?: { nodeId: string; src: string; name: string }
}

/**
 * 画布组件。
 *
 * `t` 由宿主按注册时声明的 `locale: NS` 注入（`src/client/index.tsx`）。
 * 缺省时（验收台与冒烟直接挂本组件）退回兜底中文翻译，见 `i18n.tsx`。
 */
export function CanvasApp({ t }: { t?: Translate } = {}) {
  // 整棵画布只在这里包一次 Provider，下面所有子组件与 hook 用 `useT()` 取。
  // 包在最外层而不是各处分别接：hook 里（提示条、错误文案）没有 props 可透传。
  return (
    <LocaleProvider translate={t}>
      <CanvasSurface />
    </LocaleProvider>
  )
}

/** 画布本体。与 `CanvasApp` 分开只为让 Provider 位于所有 hook 之上。 */
function CanvasSurface() {
  const t = useT()
  const [nodes, setNodes, onNodesChangeBase] = useNodesState<WorkflowNode>([])
  const [edges, setEdges, onEdgesChangeBase] = useEdgesState<Edge>([])
  const [logs, setLogs] = useState<string[]>([])
  const [toast, setToast] = useState<string | null>(null)
  const [dialog, setDialog] = useState<DialogState | null>(null)
  /** 预览：url 用来显示，path 是本机绝对路径（「复制路径」用；外链/blob 没有就为空） */
  const [preview, setPreview] = useState<{ url: string; name: string; path?: string } | null>(null)
  const [zoom, setZoom] = useState(1)
  /** LOD 抽象模式：缩到 15% 以下节点降级为轻量卡片（见 canvas/zoom.ts 的说明）。
   *  只影响渲染，拖拽/选中/连线等基础交互不变。 */
  const [lod, setLod] = useState(false)
  // 小地图默认关（与 Imagora 一致：卡片铺开了才需要它，平时白占地方）
  // 小地图默认关；开关状态存本机（原版也是这么存的，刷新后保持）
  const [minimapOpen, setMinimapOpen] = useState(() => readMinimapVisible())
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [selectedEdgeId, setSelectedEdgeId] = useState<string | null>(null)
  const [snapEnabled, setSnapEnabled] = useState(() => readSnapEnabled())
  const [canvasLocked, setCanvasLocked] = useState(false)
  const [guides, setGuides] = useState<SnapGuide[]>([])

  const flowRef = useRef<HTMLDivElement>(null)
  /** 面板根节点：右键菜单的「屏蔽浏览器菜单」只在这一层之内生效（不吞宿主的） */
  const rootRef = useRef<HTMLDivElement>(null)
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

  /** 画布是否已经渲染崩过：崩了就别再自动写快照。
   *
   * 这条是上次「一次事故变成永久打不开」的直接成因 —— 崩溃卸载时 flush 把坏画布
   * 写回磁盘，下次打开又读回同一份坏数据。数据侧已经在保存前收敛形状
   * （lib/recovery.ts），这里再堵一道：状态本身已经不可信时，不要落盘。 */
  const crashedRef = useRef(false)

  /** 新建卡片与「修复缺字段的旧卡片」共用的参数缺省值（配置里的第一档）。
   *  取 ref 而不是值：加载工作流那一刻的配置才是准的（用户可能刚换过模型）。 */
  const configDefaultsRef = useRef<{ size?: string; quality?: string }>({})
  configDefaultsRef.current = {
    size: configRef.current?.sizes[0]?.value,
    quality: configRef.current?.qualities[0],
  }

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
  /* ---------------- 撤销 / 重做 ---------------- */
  // 必须在 useCanvasImages / 各 add* 之前：它们落盘前要 history.record()
  const history = useCanvasHistory({ nodesRef, edgesRef, setNodes, setEdges, flash })

  const { addImages, replaceImage, openPreview, addDataUrl } = useCanvasImages({
    nodesRef,
    setNodes,
    createPosition: () => createPositionRef.current(),
    log,
    flash,
    setPreview,
    record: history.record,
  })
  const { runPrompt, cancelPrompt, runMany, resumeTasks } = useGeneratedTasks({
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
    // 缺 size/quality 的旧卡片补成「配置里的第一档」，与新建卡片同源（见 addPromptNode）
    defaultsRef: configDefaultsRef,
    // 渲染崩过就别再把当前状态写回快照（见 crashedRef 的注释）
    crashedRef,
    // 快照恢复完成后认领还活着的任务（切走 tab 再回来时要接着跑）
    onRestored: resumeTasks,
  })

  /* ---------------- 撤销 / 重做 ---------------- */
  // 定义在这里（useCanvasImages / 各 add* 之前）：它们落改动前要 history.record()

  /* ---------------- 成本 ---------------- */
  const cost = useCostSummary(nodes)

  /* ---------------- 连线的默认外观 ---------------- */
  // 只有 animated 随 LOD 变（原版同一条规则）。必须 memo：见用法处的注释。
  const defaultEdgeOptions = useMemo(() => ({ animated: !lod }), [lod])

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
    .filter(node => (node.data.prompt ?? '').trim() && node.data.status !== 'running' && node.data.status !== 'queued')
    .map(node => node.id)

  /* ---------------- 节点操作 ---------------- */
  const updatePrompt = useCallback(
    (nodeId: string, patch: Record<string, unknown>) => {
      setNodes(current => updatePromptNode(current, nodeId, patch))
    },
    [setNodes],
  )

  /**
   * 从画布上摘掉节点：**只动画布，不动磁盘**。
   *
   * 这条曾经不是这样的：单条删除会顺手调 `/asset/delete`（删登记 + `unlink` 文件），
   * 看起来"删干净了"，实际把生成历史一起弄瞎——历史按账本的 `outputAssetIds` 去注册表
   * 解析，登记一删，那条记录就永远只剩「文件已移动」，连「导入画布」都点不动。
   * 实测账本里已有两张插件出的图这样永久消失（`canv_5d47ade2f6cf` / `canv_e2c71b68aa06`）。
   *
   * 原版的不变量正相反：`handleDeleteNode` 里明写"不删文件，删除文件是显式操作"，
   * 日志也打「已删除节点（文件保留）」；`delete_asset` 那个接口在前端没有任何调用点。
   * 这不是"照搬一个按钮"，是照搬它的**存储契约**：一张图会同时被历史、@ 引用、
   * 别的工作流引用，节点只是其中一个视图，删视图不该销毁数据。
   *
   * 顺带把两条入口并齐了——过去「Delete 键 / 删除所选」走这里（不删文件），
   * 而操作栏与右键「删除」走另一条（删文件），同一个动作两种后果。
   */
  const removeNodes = useCallback(
    (ids: string[]) => {
      if (!ids.length) return
      history.record()
      const drop = new Set(ids)
      setNodes(current => current.filter(node => !drop.has(node.id)))
      setEdges(current => current.filter(edge => !drop.has(edge.source) && !drop.has(edge.target)))
      // 说清楚"图还在"：用户上一版就是因为这句缺失，以为生成记录丢了
      flash(t('flash.deleted.kept', { count: ids.length }))
    },
    [setNodes, setEdges, history, flash, t],
  )

  /** 单条删除 = 批量删除的特例（同一个后果，不再分两条路） */
  const deleteNode = useCallback((nodeId: string) => removeNodes([nodeId]), [removeNodes])

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
      const node = buildPromptNode(at ?? createPosition(), {
        size: configDefaultsRef.current.size ?? '1024x1024',
        quality: configDefaultsRef.current.quality ?? 'high',
        outputDir: '',
      })
      // 新增节点是用户意图：必须记一笔，否则「撤销」按钮恒为 disabled、
      // Ctrl+Z 无事可做。记在这里而不是各调用点（工具栏 / 拖入 / 粘贴导入），
      // 少一处就是一处漏记 —— 之前工具栏三条入口全都漏了。
      history.record()
      setNodes(current => [...current, node])
    },
    [createPosition, setNodes, configRef, history],
  )

  const addGroupNode = useCallback(
    (at?: { x: number; y: number }) => {
      history.record()
      setNodes(current => [...current, buildGroupNode(at ?? createPosition())])
    },
    [createPosition, setNodes, history],
  )

  /* ---------------- 组织 ---------------- */
  const autoConnectAll = useCallback(() => {
    setEdges(autoConnect(nodesRef.current, edgesRef.current as WorkflowEdge[]) as Edge[])
    flash(t('flash.autoConnect.done'))
  }, [setEdges, flash])

  /** 只补选中节点之间的边（选中栏的「自动连线」，与顶栏那个全局的不一样）。 */
  const autoConnectSelected = useCallback(() => {
    const ids = new Set(selectedIds)
    if (!ids.size) {
      flash(t('flash.autoConnect.noneSelected'))
      return
    }
    history.record()
    setEdges(autoConnectSelection(nodesRef.current, edgesRef.current as WorkflowEdge[], ids) as Edge[])
    flash(t('flash.autoConnect.selection'))
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
    flash(target ? t('flash.outputDir.set', { dir: target }) : t('flash.outputDir.cleared'))
  }, [selectedIds, setNodes, flash, history])

  /** 聚焦：有选中就只看选中的，否则看全图（原版 Controls 里那一行）。 */
  const focusSelected = useCallback(() => {
    const instance = instanceRef.current
    if (!instance) return
    const selected = nodesRef.current.filter(node => selectedIds.includes(node.id))
    const targets = selected.length ? selected : nodesRef.current
    if (!targets.length) {
      flash(t('flash.noNodes'))
      return
    }
    void instance.fitView({ nodes: targets, padding: FOCUS_PADDING, duration: FIT_ANIM_MS, maxZoom: FOCUS_MAX_ZOOM })
  }, [selectedIds, flash])

  const arrangeSelected = useCallback(() => {
    const ids = new Set(selectedIds)
    if (!ids.size) {
      flash(t('flash.layout.noneSelected'))
      return
    }
    // 派生重算（只改布局、不改用户意图）：不清重做栈，与 Imagora 的
    // `recordHistory({ preserveRedo: true })` 同一语义。
    history.record({ preserveRedo: true })
    // 走 Imagora 的分层布局（lib/layout.ts 与上游逐字节相同）：
    // 提示词卡、结果图、图片组**一起**参与，未选中的邻居当只读锚点。
    // 曾经这里是个简化版：只把选中的图片节点横排（baseX + index * 172），
    // 提示词卡直接跳过 —— 于是「全选后整理」看着像没反应。
    setNodes(current => layoutSelection(current, edgesRef.current as WorkflowEdge[], ids))
  }, [selectedIds, setNodes, flash, history, edgesRef])

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
      // add* 自己记历史（单点记录，避免调用点各记一遍而漏），这里不再重复
      if (kind === 'prompt') addPromptNode(point)
      else addGroupNode(point)
    },
    // 拖进来的东西里没有图片：必须说一句。上游同一处 pushLog，静默等于「点了没反应」。
    onRejectFiles: () => flash(t('flash.drop.noImage')),
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
        flash(t('flash.image.noFile'))
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
      flash(t('flash.mask.cleared'))
    },
    [setNodes, history, flash],
  )

  /* ---------------- 右键：框选 + 节点菜单 ---------------- */
  // 手势与菜单渲染的语义都照搬 Imagora；屏蔽原生菜单的范围收到面板根节点。
  const { nodeMenu, boxRect, closeMenu, setNodeMenu } = useCanvasContextMenu({
    rootRef,
    canvasRef: flowRef,
    instanceRef,
    setNodes,
    modalOpen: Boolean(dialog) || Boolean(preview),
  })

  /** 菜单内容：按目标节点类型 + 当前选中数 + 图片是否已就绪现算。
   *  不缓存 —— 缓存会让「图片上传完成后菜单仍显示禁用」这类问题只有关掉重开才刷新。
   *
   *  **文案在这里换掉，不动 lib/**：上游 `contextMenu.ts` 是 A 档移植文件，它产出的
   *  `label` 是中文写死的。上游自己在文件头写明了「接线方按 id 分派，不要按 label 匹配
   * —— label 是给人看的，会改」，所以按 `id` 换文案正是它留的那个缝。
   *  `menuHeight()` 只按条数算、不看 label，替换后高度不变。 */
  const menuNode = nodeMenu ? nodes.find(node => node.id === nodeMenu.nodeId) : undefined
  const menuItems = menuNode
    ? buildNodeMenu(menuNode.type ?? 'image', {
        hasUrl: menuNode.type === 'image' ? Boolean(menuNode.data.url) : false,
        selectedCount: selectedIds.length,
      }).map(item =>
        item.kind === 'action'
          ? { ...item, action: { ...item.action, label: menuLabel(item.action.id, selectedIds.length, t) } }
          : item,
      )
    : []

  /** 菜单动作分派：按 action id（不是 label —— label 是给人看的，随时会改文案）。 */
  const handleMenuPick = useCallback(
    (actionId: string) => {
      const target = nodeMenu
      setNodeMenu(null)
      if (!target) return
      const nodeId = target.nodeId
      switch (actionId) {
        case 'delete-selection':
          removeNodes(selectedIds)
          setSelectedIds([])
          break
        case 'preview':
          openPreview(nodeId)
          break
        case 'crop':
          imageOps.cropImage(nodeId)
          break
        case 'upscale':
          imageOps.upscaleImage(nodeId)
          break
        case 'split':
          imageOps.splitImage(nodeId)
          break
        case 'mask':
          imageOps.maskImage(nodeId)
          break
        case 'replace':
          replaceImage(nodeId)
          break
        case 'run':
          void runPrompt(nodeId)
          break
        case 'copy-prompt': {
          const node = nodesRef.current.find(row => row.id === nodeId)
          if (node?.type !== 'prompt') break
          void navigator.clipboard
            .writeText(node.data.prompt)
            .then(() => flash(t('flash.prompt.copied')))
            .catch(() => flash(t('flash.prompt.copyFailed')))
          break
        }
        case 'delete':
          deleteNode(nodeId)
          break
        default:
          break
      }
    },
    [
      nodeMenu,
      setNodeMenu,
      removeNodes,
      openPreview,
      imageOps,
      replaceImage,
      runPrompt,
      deleteNode,
      selectedIds,
      flash,
    ],
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
      <div className="im-root" ref={rootRef}>
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
          // 直接接 history.undo。之前这里多包了一层 history.record()，
          // 等于「先把当前状态压栈再撤销」—— 弹出来的正是刚压进去的当前态，
          // 看起来就是「点了撤销没反应」，还会把真正的上一步挤掉。
          onUndo={history.undo}
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
              flash(t('flash.readFailed', { reason: errMessage(error) }))
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
                {t('canvas.goSettings')}
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
          {/* LOD 标志只包住 ReactFlow：节点是它渲染的，包在外面那一层唯一的区别
              就是把整块 JSX 重新缩进一遍（diff 变成几百行噪音）。
              用 context 而不是 prop 的原因见 nodes.tsx 的 LodContext 注释。 */}
          <LodContext.Provider value={lod}>
            {/* 画布整体的兜底：节点级边界（node-types.tsx）拦不到 React Flow 内部
                抛的错（比如它自己读 `node.position.x`），这一层接住，
                把「整页消失」降级成「画布区一句话 + 重试 / 清空」。
                出错时通知 workflow hook 停掉自动快照 —— 别把坏状态写回磁盘，
                那正是上次「一次事故变成永久打不开」的成因。 */}
            <CanvasBoundary
              onCrash={error => {
                crashedRef.current = true
                log(t('flash.renderError', { reason: error.message }))
              }}
              onClear={() => {
                setNodes([])
                setEdges([])
                setSelectedIds([])
              }}
            >
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
                  // 按**初始视口**定一次 LOD（与上游 handleInit 同一做法）。
                  // 少了这一步，恢复出来的画布若本来就在很小的缩放下，首帧仍按完整卡片
                  // 渲染一次再抖成抽象模式；也正因为这一处，LOD_IN_ZOOM 不只是 nextLod 的私有常量。
                  setLod(instance.getViewport().zoom < LOD_IN_ZOOM)
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
                    current.map(row =>
                      row.id === node.id ? { ...row, position: { x: snapped.x, y: snapped.y } } : row,
                    ),
                  )
                }}
                onMove={(_, viewport) => {
                  setZoom(viewport.zoom)
                  // LOD 状态机跟着视口走（原版 handleViewportMove 在同一位置）。
                  // 函数式更新 + 纯函数 nextLod：迟滞判定不需要知道上一帧 zoom，
                  // 只知道自己现在在哪个档，所以快速拖动合并帧也不会把它卡反。
                  setLod(current => nextLod(current, viewport.zoom))
                }}
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
                fitViewOptions={{ padding: FIT_PADDING, minZoom: MIN_FIT_ZOOM, maxZoom: INITIAL_FIT_MAX_ZOOM }}
                minZoom={MIN_ZOOM}
                maxZoom={MAX_ZOOM}
                proOptions={{ hideAttribution: true }}
                /* 连线外观：原版 defaultEdgeOptions 只有 { animated: !lod }，
               **没有 markerEnd**。我们以前加了 ArrowClosed 箭头，于是每条连线
               末端挂一个实心三角 —— 原版根本没有这个元素，是纯粹多出来的。
               现在按原版来：不设 marker；animated 随 LOD 走（抽象模式下静止，
               省掉每帧重算 dashoffset 的开销）。
               对象必须 useMemo：React Flow 的 StoreUpdater 对 defaultEdgeOptions 做
               浅比较，内联对象每次新建都会写一次 store，edge = {...default, ...edge}
               全量新建 → 每条边的 EdgeWrapper memo 全部失效。 */
                defaultEdgeOptions={defaultEdgeOptions}
                /* 视口虚拟化：只渲染可视区域内的节点（原版同一条）。
               节点几百个时，屏幕外的卡片不参与渲染，平移才不掉帧。 */
                onlyRenderVisibleElements
                deleteKeyCode={null}
                // 滚轮 = 缩放。之前打开了 panOnScroll，滚轮被当成上下平移，
                // 与 Imagora（只设 panOnDrag，滚轮保持缩放）不一致。
                panOnScroll={false}
                zoomOnScroll
                zoomOnPinch
                // 与 Imagora 同一套手势：左键拖空白 = 平移（panOnDrag）、
                // 右键拖拽 = 框选、右键单击节点 = 菜单（两者在
                // use-canvas-context-menu.ts 里自己接管，所以下面的
                // selectionKeyCode 必须为 null —— 原生 Shift+框选会和它抢同一个手势）。
                // 与 Imagora 的「锁定画布」同语义：一次性关掉拖动/连线/选中/平移，
                // 只看不动（缩放仍留着，方便凑近看细节）
                nodesDraggable={!canvasLocked}
                nodesConnectable={!canvasLocked}
                elementsSelectable={!canvasLocked}
                panOnDrag={!canvasLocked}
                selectionOnDrag={false}
                selectionKeyCode={null}
                multiSelectionKeyCode={['Meta', 'Control']}
              >
                <Background variant={BackgroundVariant.Dots} gap={18} size={1.4} />
                {/* 缩放控件栈由 CanvasDock 接管（React Flow 自带的那套图标不带文字，认不出） */}
                {/* 小地图放左上（Imagora 的位置）：右下角留给日志，那是「刚刚发生了什么」的即时反馈，
                被小地图压住就读不到了；左下角是缩放控件栈，右上角是选中操作栏。 */}
                {minimapOpen ? (
                  <MiniMap
                    ariaLabel={t('canvas.minimap')}
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
            </CanvasBoundary>
          </LodContext.Provider>
          <CanvasDock
            zoom={zoom}
            snapEnabled={snapEnabled}
            canvasLocked={canvasLocked}
            minimapOpen={minimapOpen}
            onZoomIn={() => void instanceRef.current?.zoomIn({ duration: ZOOM_ANIM_MS })}
            onZoomOut={() => void instanceRef.current?.zoomOut({ duration: ZOOM_ANIM_MS })}
            onFitView={() =>
              instanceRef.current?.fitView({
                padding: FIT_PADDING,
                duration: FIT_ANIM_MS,
                minZoom: MIN_FIT_ZOOM,
                maxZoom: FIT_MAX_ZOOM,
              })
            }
            onFocusSelected={focusSelected}
            onToggleSnap={() =>
              setSnapEnabled(value => {
                const next = !value
                saveSnapEnabled(next)
                if (!next) setGuides([])
                flash(next ? t('flash.snap.on') : t('flash.snap.off'))
                return next
              })
            }
            onToggleLock={() =>
              setCanvasLocked(value => {
                const next = !value
                flash(next ? t('flash.lock.on') : t('flash.lock.off'))
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
          {/* 右键拖拽框选的选框：flow 坐标经 flowToScreenPosition 换算回画布内位置。
              pointer-events-none + 不参与 React Flow 的节点表，纯粹是视觉反馈。 */}
          {boxRect && instanceRef.current && flowRef.current
            ? (() => {
                const p1 = instanceRef.current.flowToScreenPosition({ x: boxRect.x, y: boxRect.y })
                const p2 = instanceRef.current.flowToScreenPosition({
                  x: boxRect.x + boxRect.width,
                  y: boxRect.y + boxRect.height,
                })
                const rect = flowRef.current.getBoundingClientRect()
                return (
                  <div
                    className="im-marquee"
                    style={{
                      left: p1.x - rect.left,
                      top: p1.y - rect.top,
                      width: p2.x - p1.x,
                      height: p2.y - p1.y,
                    }}
                  />
                )
              })()
            : null}
          {nodes.length === 0 ? <EmptyState /> : null}
          <LogPanel logs={logs} />
          <Toast text={toast} />
          {dropChip}
        </div>
        {/* 节点右键菜单：坐标是视口坐标（组件内部 createPortal + fixed）。
            挂在这里而不是 React Flow 内部，避免被画布的 transform/overflow 裁切。 */}
        {nodeMenu && menuItems.length > 0 ? (
          <NodeContextMenu
            x={nodeMenu.x}
            y={nodeMenu.y}
            items={menuItems}
            onPick={handleMenuPick}
            onClose={closeMenu}
          />
        ) : null}
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
            name={dialog.target.name}
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
              flash(t('flash.split.done', { count: parts.length }))
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
              // **不关窗**：原版导入后历史继续开着，方便接着挑下一张；
              // 关掉会让「挑图-导入-再挑」变成反复重开弹窗、每次重拉一遍账本。
              flash(t('flash.drop.images', { count: created.length }))
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
              flash(t('flash.import.prompts', { count: created.length }))
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
