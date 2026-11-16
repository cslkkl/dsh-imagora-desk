// 画布左下角的控件坞：照搬 Imagora 的 Controls 位置、行序与**图标+文字**形态。
//
// 原版把 React Flow 自带的三个图标按钮（+ / − / ⛶）全关掉，换成带文字的一列，
// 行序固定为：缩放读数 → 放大 → 缩小 → 适应 → 聚焦 → 吸附 → 地图 → 锁定 → 帮助。
// 原生图标按钮没有任何说明，混在一列里最难认；行序也别随手调，用户是靠位置记的。
//
// 每行都有 14px 图标（原版 DockRow 的 icon 属性，9 行全带）：
// 原版注释说的是「文字是语义来源，别删」，不是「不要图标」——只留文字会比原版单薄一档。
import { Icon } from '../icons'
import { zoomToPercent } from './zoom'
import { useT } from '../i18n'

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
  const t = useT()
  return (
    <div className="im-dock nodrag">
      <div className="im-dock-row im-dock-row--readout">
        <span className="im-dock-row-label im-dock-row-value">{zoomToPercent(zoom)}%</span>
      </div>
      <DockRow icon="zoomIn" label={t('dock.zoomIn')} title={t('dock.zoomIn.title')} onClick={props.onZoomIn} />
      <DockRow icon="zoomOut" label={t('dock.zoomOut')} title={t('dock.zoomOut.title')} onClick={props.onZoomOut} />
      <DockRow icon="maximize" label={t('dock.fit')} title={t('dock.fit.title')} onClick={props.onFitView} />
      <DockRow
        icon="focus"
        label={t('dock.focus')}
        title={t('dock.focus.title')}
        onClick={props.onFocusSelected}
      />
      <DockRow
        icon="magnet"
        label={t('dock.snap')}
        title={snapEnabled ? t('dock.snap.on') : t('dock.snap.off')}
        active={snapEnabled}
        onClick={props.onToggleSnap}
      />
      <DockRow
        icon="map"
        label={t('dock.minimap')}
        title={minimapOpen ? t('dock.minimap.on') : t('dock.minimap.off')}
        active={minimapOpen}
        onClick={props.onToggleMinimap}
      />
      <DockRow
        icon={canvasLocked ? 'lock' : 'unlock'}
        label={canvasLocked ? t('dock.locked') : t('dock.lock')}
        title={canvasLocked ? t('dock.lock.unlock') : t('dock.lock.lock')}
        active={canvasLocked}
        onClick={props.onToggleLock}
      />
      <DockRow icon="help" label={t('dock.help')} title={t('dock.help.title')} onClick={props.onOpenHelp} />
    </div>
  )
}
