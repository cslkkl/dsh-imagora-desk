// 画布左下角的控件坞：照搬 Imagora 的 Controls 位置、行序与**图标+文字**形态。
//
// 原版把 React Flow 自带的三个图标按钮（+ / − / ⛶）全关掉，换成带文字的一列，
// 行序固定为：缩放读数 → 放大 → 缩小 → 适应 → 聚焦 → 吸附 → 地图 → 锁定 → 帮助。
// 原生图标按钮没有任何说明，混在一列里最难认；行序也别随手调，用户是靠位置记的。
//
// 每行都有 14px 图标（原版 DockRow 的 icon 属性，9 行全带）：
// 原版注释说的是「文字是语义来源，别删」，不是「不要图标」——只留文字会比原版单薄一档。
import { Icon } from '../icons'

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
  icon,
  label,
  title,
  active,
  onClick,
}: {
  icon: string
  label: string
  /** 完整的解释性文案（原生 title，延迟弹出） */
  title: string
  active?: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      className={`im-dock-row nodrag${active ? ' is-on' : ''}`}
      title={title}
      aria-label={label}
      aria-pressed={active === undefined ? undefined : active}
      onClick={onClick}
    >
      <Icon name={icon} size={14} />
      <span className="im-dock-row-label">{label}</span>
    </button>
  )
}

export function CanvasDock(props: DockProps) {
  const { zoom, snapEnabled, canvasLocked, minimapOpen } = props
  return (
    <div className="im-dock nodrag">
      <div className="im-dock-row im-dock-row--readout">
        <span className="im-dock-row-label im-dock-row-value">{Math.round(zoom * 100)}%</span>
      </div>
      <DockRow icon="zoomIn" label="放大" title="放大画布（滚轮同样可以缩放）" onClick={props.onZoomIn} />
      <DockRow icon="zoomOut" label="缩小" title="缩小画布（滚轮同样可以缩放）" onClick={props.onZoomOut} />
      <DockRow icon="maximize" label="适应" title="适应视图：把所有节点缩放到一屏可见" onClick={props.onFitView} />
      <DockRow
        icon="focus"
        label="聚焦"
        title="聚焦（有选中时只看选中的，否则看全图）"
        onClick={props.onFocusSelected}
      />
      <DockRow
        icon="magnet"
        label="吸附"
        title={snapEnabled ? '关闭拖拽吸附' : '开启拖拽吸附'}
        active={snapEnabled}
        onClick={props.onToggleSnap}
      />
      <DockRow
        icon="map"
        label="地图"
        title={minimapOpen ? '隐藏小地图' : '显示小地图'}
        active={minimapOpen}
        onClick={props.onToggleMinimap}
      />
      <DockRow
        icon={canvasLocked ? 'lock' : 'unlock'}
        label={canvasLocked ? '已锁' : '锁定'}
        title={canvasLocked ? '解锁画布' : '锁定画布：防止误拖节点（滚轮缩放与「适应」仍然可用）'}
        active={canvasLocked}
        onClick={props.onToggleLock}
      />
      <DockRow icon="help" label="帮助" title="操作帮助与快捷键" onClick={props.onOpenHelp} />
    </div>
  )
}
