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
import { useT } from '../i18n'

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
  const t = useT()

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
              { value: '', label: t('toolbar.profile.follow') },
            ]}
            value={config.profile}
            title={t('toolbar.profile.title')}
            onChange={value => props.onSwitchProfile(value)}
          />
        ) : null}

        {config && (config.models?.length ?? 0) > 1 ? (
          <Select
            className="im-select-model"
            options={config.models.map(row => ({ value: row.id, label: row.label }))}
            value={config.model}
            title={t('toolbar.model.title', { profile: config.profileLabel || config.profile })}
            onChange={value => props.onSwitchModel(value)}
          />
        ) : null}

        <CostBadge summary={props.cost} budget={config?.budget ?? 0} />

        <span className="im-spacer" />

        {tool(t('toolbar.settings'), props.onOpenSettings, { title: t('toolbar.settings.title') })}
      </div>

      {/* ---------- 第二行：画布工具栏（左创建 / 右工作流，与 Imagora 同序） ---------- */}
      <div className="im-toolbar">
        <div className="im-toolbar-group">
          {/* 原版这里只有「上传图片」是主行动（btn-primary），其余都是次要的 ghost。
              之前把它做成 ghost、反而把「全部运行」做成 primary，视觉重心落在了错误的一侧。 */}
          {tool(t('toolbar.upload'), props.onPickFiles, {
            title: t('toolbar.upload.title'),
            primary: true,
          })}
          {tool(t('toolbar.paste'), props.onPasteImport, { title: t('toolbar.paste.title') })}
          {/* 这两个可以拖进画布：松开的位置就是新节点的位置。
              右侧那枚圆形徽标是原版 `.btn-drag-grip` 的完整形态（16px 圆 + 品牌色描边 +
              白色底 + 6 点抓手），只是常态透明、hover 才 `drag-grip-in` 浮上来。
              光有 grab 光标不够：旁边几个按钮也是 pointer，用户看不出差别。 */}
          <button
            type="button"
            className="im-btn-ghost im-btn-sm nodrag im-drag-source"
            title={t('toolbar.newPrompt.title')}
            draggable
            onDragStart={event => props.onDragCreateNode(event, 'prompt')}
            onClick={props.onAddPrompt}
          >
            {t('toolbar.newPrompt')}
            <span className="im-drag-grip">
              <Icon name="grip" size={10} strokeWidth={2.5} />
            </span>
          </button>
          <button
            type="button"
            className="im-btn-ghost im-btn-sm nodrag im-drag-source"
            title={t('toolbar.newGroup.title')}
            draggable
            onDragStart={event => props.onDragCreateNode(event, 'group')}
            onClick={props.onAddGroup}
          >
            {t('toolbar.newGroup')}
            <span className="im-drag-grip">
              <Icon name="grip" size={10} strokeWidth={2.5} />
            </span>
          </button>
        </div>

        <div className="im-toolbar-group im-toolbar-group--end">
          {tool(t('toolbar.save'), props.onOpenSave, { title: t('toolbar.save.title') })}
          {tool(t('toolbar.load'), props.onOpenLoad, { title: t('toolbar.load.title') })}
          {tool(t('toolbar.history'), props.onOpenHistory, { title: t('toolbar.history.title') })}
          {tool(t('toolbar.outputDir'), props.onOpenDefaultOutputDir, {
            title: t('toolbar.outputDir.title', { dir: config?.defaultOutputDir || t('common.notSet') }),
          })}
          {tool(t('toolbar.undo'), props.onUndo, { disabled: !canUndo, title: t('toolbar.undo.title') })}
          {tool(t('toolbar.redo'), props.onRestore, { disabled: !canRestore, title: t('toolbar.redo.title') })}
          {tool(t('toolbar.autoConnect'), props.onAutoConnect, {
            title: t('toolbar.autoConnect.title'),
          })}

          {/* 全部运行是次要行动（原版走 ToolbarButton = btn-ghost btn-sm）：
              主行动的位置留给「上传图片」，否则工具栏的重心会落在错误的一侧。 */}
          {tool(t('toolbar.runAll'), () => props.onRun(runnableIds), {
            title: t('toolbar.runAll.title'),
            disabled: !promptCount,
          })}
          {busyIds > 0 ? (
            <button
              type="button"
              className="im-btn-ghost im-btn-sm nodrag"
              title={t('toolbar.cancelAll.title')}
              onClick={props.onCancelAll}
            >
              {t('toolbar.cancelAll', { count: busyIds })}
            </button>
          ) : null}
        </div>
      </div>
    </>
  )
}
