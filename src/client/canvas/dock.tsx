// 画布左下角的控件坞：照搬 Imagora 的 Controls 位置与内容。
//
// 原版把 React Flow 自带的三个图标按钮（+ / − / ⛶）全关掉，换成带文字的一列：
// 「缩放读数 / 放大 / 缩小 / 适应 / 锁定 / 帮助」——原生图标按钮没有任何说明，
// 混在一列里最难认。小地图与吸附开关也收到这里，不占顶栏。
import { primitives } from '../ui'

export interface DockProps {
  zoom: number
  snapEnabled: boolean
  canvasLocked: boolean
  minimapOpen: boolean
  onZoomIn: () => void
  onZoomOut: () => void
  onFitView: () => void
  onToggleSnap: () => void
  onToggleLock: () => void
  onToggleMinimap: () => void
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
      <DockRow
        label="锁定"
        title={canvasLocked ? '已锁定：只可缩放，拖动/连线/选中/平移都停了' : '锁定画布，防手抖'}
        active={canvasLocked}
        onClick={props.onToggleLock}
      />
      <DockRow label="吸附" title="拖拽时按邻居对齐并画参考线" active={snapEnabled} onClick={props.onToggleSnap} />
      <DockRow label="小地图" title="显示/隐藏左上角小地图" active={minimapOpen} onClick={props.onToggleMinimap} />
      <DockRow label="帮助" title="操作帮助：画布 / 节点 / 连线 / 快捷键" onClick={props.onOpenHelp} />
    </div>
  )
}
