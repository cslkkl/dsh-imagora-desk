// 工具栏：只负责把按钮和下拉渲染出来，动作一律由 props 回调上抛。
//
// 按钮与提示用官方组件库（宿主提供），保证外观与 DSH 其它面板一致：
// 主题、暗色、键盘焦点环都跟着宿主走，不必自己维护一套。
import { primitives } from '../ui'
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

const DIVIDER = { width: 1, height: 18, background: 'var(--im-line)', margin: '0 2px' } as const

export function CanvasToolbar(props: ToolbarProps) {
  const ui = primitives()
  const { config, promptCount, runnableIds, selectedIds, busyIds, minimapOpen, zoom } = props
  const toolButton = (label: string, onClick: () => void, extra?: Record<string, unknown>) => (
    <ui.Tooltip label={label} side="bottom">
      <ui.Button type="button" size="sm" variant="toolbar" aria-label={label} onClick={onClick} {...extra}>
        {label}
      </ui.Button>
    </ui.Tooltip>
  )

  return (
    <div className="im-toolbar">
      <ui.Button type="button" size="sm" onClick={props.onAddPrompt}>
        提示词卡
      </ui.Button>
      {toolButton('导入图片', props.onPickFiles)}
      {toolButton('图片组', props.onAddGroup)}
      {toolButton('粘贴导入', props.onPasteImport)}
      <span style={DIVIDER} />
      {toolButton('全部运行', () => props.onRun(runnableIds), { disabled: !promptCount })}
      {toolButton('运行所选', () => props.onRun(runnableIds.filter(id => selectedIds.includes(id))), {
        disabled: !selectedIds.length,
      })}
      {toolButton('取消全部', props.onCancelAll, { disabled: !busyIds.length })}
      <span style={DIVIDER} />
      {toolButton('自动连线', props.onAutoConnect)}
      {toolButton('整理所选', props.onArrangeSelected, { disabled: !selectedIds.length })}
      <span className="im-spacer" />

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

      {toolButton(minimapOpen ? '小地图·开' : '小地图·关', props.onToggleMinimap)}
      {toolButton(props.snapEnabled ? '吸附·开' : '吸附·关', props.onToggleSnap)}
      {toolButton(props.canvasLocked ? '已锁' : '锁定', props.onToggleLock)}
      <span className="im-zoom" title="当前缩放">
        {Math.round(zoom * 100)}%
      </span>
      {toolButton('全览', props.onFitView)}
      {toolButton('保存', props.onOpenSave)}
      {toolButton('加载', props.onOpenLoad)}
      {toolButton('生成历史', props.onOpenHistory)}
      {toolButton('设置', props.onOpenSettings)}
      {toolButton('帮助', props.onOpenHelp)}
    </div>
  )
}
