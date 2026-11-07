// 画布左下角的控件坞：照搬 Imagora 的 Controls 位置与**行序**。
//
// 原版把 React Flow 自带的三个图标按钮（+ / − / ⛶）全关掉，换成带文字的一列，
// 行序固定为：缩放读数 → 放大 → 缩小 → 适应 → 聚焦 → 吸附 → 地图 → 锁定 → 帮助。
// 原生图标按钮没有任何说明，混在一列里最难认；行序也别随手调，用户是靠位置记的。
import { primitives } from '../ui'

export interface DockProps {
  zoom: number
  snapEnabled: boolean
  canvasLocked: boolean
  minimapOpen: boolean
  onZoomIn: () => void
  onZoomOut: () => void
  onFitView: () => void
  /** 有选中就只看选中的，否则看全图 */
  onFocusSelected: () => void
  onToggleSnap: () => void
  onToggleMinimap: () => void
  onToggleLock: () => void
  onOpenHelp: () => void
}

function DockRow({
  label,
  title,
  active,
  onClick,
}: {
  label: string
  title: string
  active?: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      className={`im-dock-row nodrag${active ? ' is-on' : ''}`}
      title={title}
      aria-label={title}
      aria-pressed={active === undefined ? undefined : active}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export function CanvasDock(props: DockProps) {
  const ui = primitives()
  void ui
  const { zoom, snapEnabled, canvasLocked, minimapOpen } = props
  return (
    <div className="im-dock nodrag">
      <div className="im-dock-row im-dock-row--readout" title="当前缩放">
        {Math.round(zoom * 100)}%
      </div>
      <DockRow label="放大" title="放大画布（滚轮同样可以缩放）" onClick={props.onZoomIn} />
      <DockRow label="缩小" title="缩小画布（滚轮同样可以缩放）" onClick={props.onZoomOut} />
      <DockRow label="适应" title="适应视图：把所有节点缩放到一屏可见" onClick={props.onFitView} />
      <DockRow label="聚焦" title="聚焦（有选中时只看选中的，否则看全图）" onClick={props.onFocusSelected} />
      <DockRow
        label="吸附"
        title={snapEnabled ? '关闭拖拽吸附' : '开启拖拽吸附'}
        active={snapEnabled}
        onClick={props.onToggleSnap}
      />
      <DockRow
        label="地图"
        title={minimapOpen ? '隐藏小地图' : '显示小地图'}
        active={minimapOpen}
        onClick={props.onToggleMinimap}
      />
      <DockRow
        label={canvasLocked ? '已锁' : '锁定'}
        title={canvasLocked ? '解锁画布' : '锁定画布：防止误拖节点（滚轮缩放与「适应」仍然可用）'}
        active={canvasLocked}
        onClick={props.onToggleLock}
      />
      <DockRow label="帮助" title="操作帮助与快捷键" onClick={props.onOpenHelp} />
    </div>
  )
}
