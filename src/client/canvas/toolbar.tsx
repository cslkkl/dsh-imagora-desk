// 顶栏：照搬 Imagora 的**两行**结构。
//
// 原版页面上是两行：
//   第一行 = 页头：品牌 / 窗口号 / 来源（profile）· 模型 / 模式页签 / 新窗口 / 生图 API
//   第二行 = 画布工具栏：左「创建类」、右「工作流类」，右侧一组吃满剩余宽度并右对齐
// 插件没有页面外壳，所以第一行只留跟「出图配置」有关的那几项（来源、模型、成本、设置）。
//
// 这一行里绝不能混进依赖选区的动作（运行所选 / 自动整理 /……）——那些在右上角
// 选中操作栏里（inspector.tsx），混进来会被误读成「对整张画布生效」。
//
// **提示一律用原生 title，不用宿主气泡**：原版全仓 25 处提示都是 title
// （工具栏 ControlButton、控件坞 DockRow、节点操作按钮都一样）。混用会出现
// 「有的秒出黑框、有的等 1~2 秒」——气泡是宿主组件（即时、有样式），title 是系统
// 提示（延迟、黑框）。同一处界面必须只用一种，所以这里全部退回 title。
import { BrandHeader } from '../brand'
import { Icon } from '../icons'
import { Select } from '../select'
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
  onOpenHelp: () => void
}

export function CanvasToolbar(props: ToolbarProps) {
  const { config, promptCount, runnableIds, busyIds, canUndo, canRestore } = props

  /** 次要行动：原版的 .btn-ghost（胶囊 + 主体色文字 + hover 涟漪反白） */
  /**
   * 次要行动：原版的 `.btn-ghost`（胶囊 + 主体色文字 + hover 涟漪反白）。
   *
   * 提示文案必传、且必须是「补充信息」：原版只给语义不明的控件挂 title，
   * 按钮上已经写着的字再重复一遍是噪音。所以这里没有 `title={label}` 的默认值——
   * 有默认值就一定会有人漏传，然后退回成噪音。
   */
  const tool = (label: string, onClick: () => void, opts: { title: string; disabled?: boolean; primary?: boolean }) => (
    <button
      type="button"
      className={`${opts.primary ? 'im-btn-primary' : 'im-btn-ghost'} im-btn-sm nodrag`}
      title={opts.title}
      disabled={opts.disabled}
      onClick={onClick}
    >
      {label}
    </button>
  )

  return (
    <>
      {/* ---------- 第一行：出图配置（原版页头那一排里与本插件相关的部分） ---------- */}
      <div className="im-header">
        {/* 品牌区：logo + 标题（原版页头左侧就是这两件，点开是帮助） */}
        <BrandHeader onClick={props.onOpenHelp} />

        {config && (config.profiles?.length ?? 0) > 1 ? (
          <Select
            className="im-select-profile"
            options={[
              ...(config.profiles ?? []).map(row => ({ value: row.name, label: row.label })),
              // 空值选项 = 不覆盖，跟随 imagora 的 .env。放在最后，与原生 select 里的位置一致。
              { value: '', label: '跟随 imagora 的 .env' },
            ]}
            value={config.profile}
            title="来源（profile）：决定接口地址与密钥"
            onChange={value => props.onSwitchProfile(value)}
          />
        ) : null}

        {config && (config.models?.length ?? 0) > 1 ? (
          <Select
            className="im-select-model"
            options={config.models.map(row => ({ value: row.id, label: row.label }))}
            value={config.model}
            title={`${config.profileLabel || config.profile} · 当前模型`}
            onChange={value => props.onSwitchModel(value)}
          />
        ) : null}

        <CostBadge summary={props.cost} budget={config?.budget ?? 0} />

        <span className="im-spacer" />

        {tool('设置', props.onOpenSettings, { title: '接口地址、API Key、模型与目录设置' })}
      </div>

      {/* ---------- 第二行：画布工具栏（左创建 / 右工作流，与 Imagora 同序） ---------- */}
      <div className="im-toolbar">
        <div className="im-toolbar-group">
          {/* 原版这里只有「上传图片」是主行动（btn-primary），其余都是次要的 ghost。
              之前把它做成 ghost、反而把「全部运行」做成 primary，视觉重心落在了错误的一侧。 */}
          {tool('上传图片', props.onPickFiles, {
            title: '从本机选图片放上画布（也可直接拖入或粘贴）',
            primary: true,
          })}
          {tool('粘贴导入', props.onPasteImport, { title: '粘贴模型回复，按行解析成多张提示词卡片' })}
          {/* 这两个可以拖进画布：松开的位置就是新节点的位置 */}
          <button
            type="button"
            className="im-btn-ghost im-btn-sm nodrag im-drag-source"
            title="新建提示词卡片（也可拖到画布上，松开处即新卡位置）"
            draggable
            onDragStart={event => props.onDragCreateNode(event, 'prompt')}
            onClick={props.onAddPrompt}
          >
            新建提示词卡片
            <Icon name="grip" size={12} />
          </button>
          <button
            type="button"
            className="im-btn-ghost im-btn-sm nodrag im-drag-source"
            title="新建图片组（也可拖到画布上，松开处即新组位置）"
            draggable
            onDragStart={event => props.onDragCreateNode(event, 'group')}
            onClick={props.onAddGroup}
          >
            新建图片组
            <Icon name="grip" size={12} />
          </button>
        </div>

        <div className="im-toolbar-group im-toolbar-group--end">
          {tool('保存工作流', props.onOpenSave, { title: '给这个画布起个名字存下来，之后可以再加载' })}
          {tool('加载工作流', props.onOpenLoad, { title: '选一份已保存的画布继续工作' })}
          {tool('生成历史', props.onOpenHistory, { title: '磁盘上真实存在的图片，删掉画布节点也能找回' })}
          {tool('默认输出路径', props.onOpenDefaultOutputDir, {
            title: `默认输出路径（新建卡片用这个值）：${config?.defaultOutputDir || '（未设置）'}`,
          })}
          {tool('撤销', props.onUndo, { disabled: !canUndo, title: '撤销上一步（Ctrl+Z）' })}
          {tool('恢复', props.onRestore, { disabled: !canRestore, title: '恢复被撤销的一步（Ctrl+Y）' })}
          {tool('自动连线', props.onAutoConnect, {
            title: '按位置补齐明显的连线：图片/图片组 → 提示词，提示词 → 图片',
          })}

          {/* 全部运行是次要行动（原版走 ToolbarButton = btn-ghost btn-sm）：
              主行动的位置留给「上传图片」，否则工具栏的重心会落在错误的一侧。 */}
          {tool('全部运行', () => props.onRun(runnableIds), {
            title: '运行所有提示词卡片',
            disabled: !promptCount,
          })}
          {busyIds > 0 ? (
            <button
              type="button"
              className="im-btn-ghost im-btn-sm nodrag"
              title="取消所有在跑的任务：排队中的不再发出去；生成中的等当前这张完成后作废（图仍落盘并计费）"
              onClick={props.onCancelAll}
            >
              取消全部 ({busyIds})
            </button>
          ) : null}
        </div>
      </div>
    </>
  )
}
