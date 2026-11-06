// 工具栏：只负责把按钮和下拉渲染出来，动作一律由 props 回调上抛。
// 这里不直接调接口、不碰画布状态，切换来源/模型失败时也只把错误交给上层 flash。
import { Icon } from '../icons'
import type { ImagoraConfig } from '../api'

export interface ToolbarProps {
  config: ImagoraConfig | null
  promptCount: number
  runnableIds: string[]
  selectedIds: string[]
  busyIds: string[]
  minimapOpen: boolean
  zoom: number
  onAddPrompt: () => void
  onPickFiles: () => void
  onAddGroup: () => void
  onRun: (ids: string[]) => void
  onCancelAll: () => void
  onAutoConnect: () => void
  onArrangeSelected: () => void
  onSwitchProfile: (name: string) => void
  onSwitchModel: (model: string) => void
  onToggleMinimap: () => void
  onFitView: () => void
  onOpenSave: () => void
  onOpenLoad: () => void
  onOpenHelp: () => void
}

const DIVIDER = { width: 1, height: 18, background: 'var(--im-line)', margin: '0 2px' } as const

export function CanvasToolbar(props: ToolbarProps) {
  const { config, promptCount, runnableIds, selectedIds, busyIds, minimapOpen, zoom } = props
  return (
    <div className="im-toolbar">
      <button type="button" className="im-btn is-primary" onClick={props.onAddPrompt}>
        <Icon name="plus" />
        提示词卡
      </button>
      <button type="button" className="im-btn" onClick={props.onPickFiles}>
        <Icon name="image" />
        导入图片
      </button>
      <button type="button" className="im-btn" onClick={props.onAddGroup}>
        <Icon name="layers" />
        图片组
      </button>
      <span style={DIVIDER} />
      <button type="button" className="im-btn" disabled={!promptCount} onClick={() => props.onRun(runnableIds)}>
        <Icon name="play" />
        全部运行
      </button>
      <button
        type="button"
        className="im-btn"
        disabled={!selectedIds.length}
        onClick={() => props.onRun(runnableIds.filter(id => selectedIds.includes(id)))}
      >
        运行所选
      </button>
      <button type="button" className="im-btn is-danger" disabled={!busyIds.length} onClick={props.onCancelAll}>
        <Icon name="stop" />
        取消全部
      </button>
      <span style={DIVIDER} />
      <button type="button" className="im-btn" onClick={props.onAutoConnect}>
        <Icon name="link" />
        自动连线
      </button>
      <button type="button" className="im-btn" disabled={!selectedIds.length} onClick={props.onArrangeSelected}>
        <Icon name="wand" />
        整理所选
      </button>
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

      {config ? (
        <select
          className="im-select"
          value={config.model}
          title={`${config.profileLabel || config.profile} · 当前模型`}
          onChange={event => props.onSwitchModel(event.target.value)}
        >
          {config.models.length ? (
            config.models.map(row => (
              <option key={row.id} value={row.id}>
                {row.label}
              </option>
            ))
          ) : (
            <option value={config.model}>{config.modelLabel}</option>
          )}
        </select>
      ) : null}

      <button
        type="button"
        className={`im-btn${minimapOpen ? ' is-on' : ''}`}
        title="小地图"
        onClick={props.onToggleMinimap}
      >
        <Icon name="map" />
      </button>
      <span className="im-zoom" title="当前缩放">
        {Math.round(zoom * 100)}%
      </span>
      <button type="button" className="im-btn" onClick={props.onFitView}>
        <Icon name="maximize" />
        全览
      </button>
      <button type="button" className="im-btn" onClick={props.onOpenSave}>
        <Icon name="save" />
        保存
      </button>
      <button type="button" className="im-btn" onClick={props.onOpenLoad}>
        <Icon name="folder" />
        加载
      </button>
      <button type="button" className="im-btn is-ghost" title="帮助" onClick={props.onOpenHelp}>
        <Icon name="help" />
      </button>
    </div>
  )
}
