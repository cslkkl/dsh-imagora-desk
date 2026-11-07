// 工具栏：照搬 Imagora 顶栏的排布 —— 左侧新建类、中间运行类、右侧视图类，
// 组间用细分隔线；次要行动走 ghost（胶囊 + 主体色文字），主行动只有一个。
//
// 按钮与下拉仍用宿主组件库（主题、暗色、焦点环跟着宿主走，不必自己维护一套）；
// 层级靠组件库自己的 variant 区分，不覆写颜色。
import { primitives } from '../ui'
import { CostBadge, type CostSummary } from './cost'
import type { ImagoraConfig } from '../api'

export interface ToolbarProps {
  config: ImagoraConfig | null
  promptCount: number
  runnableIds: string[]
  selectedIds: string[]
  busyIds: string[]
  minimapOpen: boolean
  snapEnabled: boolean
  canvasLocked: boolean
  canUndo: boolean
  canRestore: boolean
  cost: CostSummary
  zoom: number
  onAddPrompt: () => void
  /** 把「新建提示词卡片 / 新建图片组」拖到画布上，在落点建节点（与 Imagora 一致） */
  onDragCreateNode: (event: import('react').DragEvent<HTMLButtonElement>, kind: 'prompt' | 'group') => void
  onPickFiles: () => void
  onAddGroup: () => void
  onPasteImport: () => void
  onRun: (ids: string[]) => void
  onCancelAll: () => void
  onAutoConnect: () => void
  onArrangeSelected: () => void
  onUndo: () => void
  onRestore: () => void
  onSwitchProfile: (name: string) => void
  onSwitchModel: (model: string) => void
  onToggleMinimap: () => void
  onToggleSnap: () => void
  onToggleLock: () => void
  onFitView: () => void
  onOpenSave: () => void
  onOpenLoad: () => void
  onOpenHistory: () => void
  onOpenSettings: () => void
  onOpenHelp: () => void
}

export function CanvasToolbar(props: ToolbarProps) {
  const ui = primitives()
  const { config, promptCount, runnableIds, busyIds, canUndo, canRestore, zoom } = props

  /**
   * 顶栏的次要行动：照搬 Imagora 的 .btn-ghost —— 胶囊、无边框、主体色文字，
   * hover 时涟漪从中心向左右展开并反白。不用宿主 Button 的 toolbar 变体：
   * 那是带边框的小方块，形状与原版差得远。
   * 提示框仍用宿主的 Tooltip，位置与延迟跟 DSH 其它面板一致。
   */
  const tool = (label: string, onClick: () => void, extra?: Record<string, unknown>) => (
    <ui.Tooltip label={label} side="bottom">
      <button type="button" className="im-btn-ghost im-btn-sm nodrag" aria-label={label} onClick={onClick} {...extra}>
        {label}
      </button>
    </ui.Tooltip>
  )

  return (
    <div className="im-toolbar">
      {/* 左：创建类（按使用顺序：先有素材） */}
      <div className="im-toolbar-group">
        {tool('上传图片', props.onPickFiles)}
        {tool('粘贴导入', props.onPasteImport)}
        {/* 这两个按钮可以拖进画布：松开的位置就是新节点的位置（原版置顶了一条说明） */}
        <ui.Tooltip label="新建提示词卡片（也可拖到画布上，松开处即新卡位置）" side="bottom">
          <button
            type="button"
            className="im-btn-ghost im-btn-sm nodrag im-drag-source"
            draggable
            onDragStart={event => props.onDragCreateNode(event, 'prompt')}
            onClick={props.onAddPrompt}
          >
            新建提示词卡片
          </button>
        </ui.Tooltip>
        <ui.Tooltip label="新建图片组（也可拖到画布上）" side="bottom">
          <button
            type="button"
            className="im-btn-ghost im-btn-sm nodrag im-drag-source"
            draggable
            onDragStart={event => props.onDragCreateNode(event, 'group')}
            onClick={props.onAddGroup}
          >
            新建图片组
          </button>
        </ui.Tooltip>
      </div>

      {/* 右：按「信息 → 设置 → 编辑 → 执行」排，主行动（全部运行）压最右。
          这一组吃满剩余宽度并右对齐，与 Imagora 的 justify-end 同构。 */}
      <div className="im-toolbar-group im-toolbar-group--end">
        <CostBadge summary={props.cost} budget={config?.budget ?? 0} />

        {config && (config.profiles?.length ?? 0) > 1 ? (
          <select
            className="im-select"
            style={{ maxWidth: 140 }}
            value={config.profile}
            title="来源（profile）：决定接口地址与密钥"
            onChange={event => props.onSwitchProfile(event.target.value)}
          >
            {(config.profiles ?? []).map(row => (
              <option key={row.name} value={row.name}>
                {row.label}
              </option>
            ))}
            <option value="">跟随 imagora 的 .env</option>
          </select>
        ) : null}

        {config && (config.models?.length ?? 0) > 1 ? (
          <select
            className="im-select"
            style={{ maxWidth: 170 }}
            value={config.model}
            title={`${config.profileLabel || config.profile} · 当前模型`}
            onChange={event => props.onSwitchModel(event.target.value)}
          >
            {config.models.map(row => (
              <option key={row.id} value={row.id}>
                {row.label}
              </option>
            ))}
          </select>
        ) : null}

        <span className="im-zoom" title="当前缩放">
          {Math.round(zoom * 100)}%
        </span>

        {tool('保存工作流', props.onOpenSave)}
        {tool('加载工作流', props.onOpenLoad)}
        {tool('生成历史', props.onOpenHistory)}
        {tool('撤销', props.onUndo, { disabled: !canUndo })}
        {tool('恢复', props.onRestore, { disabled: !canRestore })}
        {tool('自动连线', props.onAutoConnect)}
        {tool('设置', props.onOpenSettings)}

        <ui.Tooltip label="运行所有提示词卡" side="bottom">
          <button
            type="button"
            className="im-btn-primary im-btn-sm nodrag"
            aria-label="全部运行"
            disabled={!promptCount}
            onClick={() => props.onRun(runnableIds)}
          >
            ▶ 全部运行
          </button>
        </ui.Tooltip>
        {busyIds.length ? (
          <button type="button" className="im-btn-ghost im-btn-sm nodrag" onClick={props.onCancelAll}>
            取消全部 ({busyIds.length})
          </button>
        ) : null}
      </div>
    </div>
  )
}
