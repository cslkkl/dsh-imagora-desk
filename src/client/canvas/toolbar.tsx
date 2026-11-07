// 顶栏：照搬 Imagora 的**两行**结构。
//
// 原版页面上是两行：
//   第一行 = 页头：品牌 / 窗口号 / 来源（profile）· 模型 / 模式页签 / 新窗口 / 生图 API
//   第二行 = 画布工具栏：左「创建类」、右「工作流类」，右侧一组吃满剩余宽度并右对齐
// 插件没有页面外壳，所以第一行只留跟「出图配置」有关的那几项（来源、模型、成本、设置）。
//
// 这一行里绝不能混进依赖选区的动作（运行所选 / 自动整理 /……）——那些在右上角
// 选中操作栏里（inspector.tsx），混进来会被误读成「对整张画布生效」。
import { primitives } from '../ui'
import { CostBadge, type CostSummary } from './cost'
import type { ImagoraConfig } from '../api'

export interface ToolbarProps {
  config: ImagoraConfig | null
  promptCount: number
  runnableIds: string[]
  busyIds: number
  snapEnabled: boolean
  canvasLocked: boolean
  canUndo: boolean
  canRestore: boolean
  cost: CostSummary
  onAddPrompt: () => void
  onPickFiles: () => void
  onAddGroup: () => void
  onPasteImport: () => void
  /** 把「新建提示词卡片 / 新建图片组」拖到画布上，在落点建节点 */
  onDragCreateNode: (event: import('react').DragEvent<HTMLButtonElement>, kind: 'prompt' | 'group') => void
  onRun: (ids: string[]) => void
  onCancelAll: () => void
  onAutoConnect: () => void
  onUndo: () => void
  onRestore: () => void
  onOpenDefaultOutputDir: () => void
  onSwitchProfile: (name: string) => void
  onSwitchModel: (model: string) => void
  onOpenSave: () => void
  onOpenLoad: () => void
  onOpenHistory: () => void
  onOpenSettings: () => void
}

export function CanvasToolbar(props: ToolbarProps) {
  const ui = primitives()
  const { config, promptCount, runnableIds, busyIds, canUndo, canRestore } = props

  /** 次要行动：原版的 .btn-ghost（胶囊 + 主体色文字 + hover 涟漪反白） */
  const tool = (label: string, onClick: () => void, extra?: Record<string, unknown>) => (
    <ui.Tooltip label={label} side="bottom">
      <button type="button" className="im-btn-ghost im-btn-sm nodrag" aria-label={label} onClick={onClick} {...extra}>
        {label}
      </button>
    </ui.Tooltip>
  )

  return (
    <>
      {/* ---------- 第一行：出图配置（原版页头那一排里与本插件相关的部分） ---------- */}
      <div className="im-header">
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
            style={{ maxWidth: 190 }}
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

        <CostBadge summary={props.cost} budget={config?.budget ?? 0} />

        <span className="im-spacer" />

        {tool('设置', props.onOpenSettings)}
      </div>

      {/* ---------- 第二行：画布工具栏（左创建 / 右工作流，与 Imagora 同序） ---------- */}
      <div className="im-toolbar">
        <div className="im-toolbar-group">
          {tool('上传图片', props.onPickFiles)}
          {tool('粘贴导入', props.onPasteImport)}
          {/* 这两个可以拖进画布：松开的位置就是新节点的位置 */}
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

        <div className="im-toolbar-group im-toolbar-group--end">
          {tool('保存工作流', props.onOpenSave)}
          {tool('加载工作流', props.onOpenLoad)}
          {tool('生成历史', props.onOpenHistory)}
          {tool('默认输出路径', props.onOpenDefaultOutputDir, {
            title: `新建卡片默认保存到：${config?.defaultOutputDir || '（未设置）'}`,
          })}
          {tool('撤销', props.onUndo, { disabled: !canUndo })}
          {tool('恢复', props.onRestore, { disabled: !canRestore })}
          {tool('自动连线', props.onAutoConnect)}

          <ui.Tooltip label="运行所有提示词卡" side="bottom">
            <button
              type="button"
              className="im-btn-primary im-btn-sm nodrag"
              aria-label="全部运行"
              disabled={!promptCount}
              onClick={() => props.onRun(runnableIds)}
            >
              全部运行
            </button>
          </ui.Tooltip>
          {busyIds > 0 ? (
            <button type="button" className="im-btn-ghost im-btn-sm nodrag" onClick={props.onCancelAll}>
              取消全部 ({busyIds})
            </button>
          ) : null}
        </div>
      </div>
    </>
  )
}
