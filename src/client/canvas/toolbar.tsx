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
  cost: CostSummary
  zoom: number
  onAddPrompt: () => void
  onPickFiles: () => void
  onAddGroup: () => void
  onPasteImport: () => void
  onRun: (ids: string[]) => void
  onCancelAll: () => void
  onAutoConnect: () => void
  onArrangeSelected: () => void
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
  const { config, promptCount, runnableIds, selectedIds, busyIds, minimapOpen, zoom } = props

  /** 工具栏里的次要行动：宿主 toolbar 变体（轻量、无实底）+ 悬浮提示。 */
  const tool = (label: string, onClick: () => void, extra?: Record<string, unknown>) => (
    <ui.Tooltip label={label} side="bottom">
      <ui.Button type="button" size="sm" variant="toolbar" aria-label={label} onClick={onClick} {...extra}>
        {label}
      </ui.Button>
    </ui.Tooltip>
  )

  return (
    <div className="im-toolbar">
      {/* 新建类 */}
      {tool('＋ 提示词卡', props.onAddPrompt)}
      {tool('导入图片', props.onPickFiles)}
      {tool('图片组', props.onAddGroup)}
      {tool('粘贴导入', props.onPasteImport)}

      <span className="im-toolbar-divider" />

      {/* 运行类：全部运行是这里唯一的主行动 */}
      <ui.Tooltip label="运行所有提示词卡" side="bottom">
        <ui.Button
          type="button"
          size="sm"
          aria-label="全部运行"
          disabled={!promptCount}
          onClick={() => props.onRun(runnableIds)}
        >
          ▶ 全部运行
        </ui.Button>
      </ui.Tooltip>
      {tool('运行所选', () => props.onRun(runnableIds.filter(id => selectedIds.includes(id))), {
        disabled: !selectedIds.length,
      })}
      {tool('取消全部', props.onCancelAll, { disabled: !busyIds.length })}

      <span className="im-toolbar-divider" />

      {/* 视图与整理类 */}
      {tool('自动连线', props.onAutoConnect)}
      {tool('整理所选', props.onArrangeSelected, { disabled: !selectedIds.length })}
      {tool(minimapOpen ? '小地图·开' : '小地图·关', props.onToggleMinimap)}
      {tool(props.snapEnabled ? '吸附·开' : '吸附·关', props.onToggleSnap)}
      {tool(props.canvasLocked ? '已锁' : '锁定', props.onToggleLock)}
      {tool('全览', props.onFitView)}

      <span className="im-spacer" />

      <CostBadge summary={props.cost} budget={config?.budget ?? 0} />

      {config && (config.profiles?.length ?? 0) > 1 ? (
        <select
          className="im-select"
          style={{ maxWidth: 150 }}
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

      <span className="im-toolbar-divider" />

      {/* 文件与设置类 */}
      {tool('保存', props.onOpenSave)}
      {tool('加载', props.onOpenLoad)}
      {tool('生成历史', props.onOpenHistory)}
      {tool('设置', props.onOpenSettings)}
      {tool('帮助', props.onOpenHelp)}
    </div>
  )
}
