// 右上角选中操作栏：与 Imagora 的 .studio-inspector 同构。
//
// 位置与出现条件照原版：`absolute right-3 top-3`、选中 ≥1 个节点才出现。
// 语义也照原版——「运行所选 / 设置输出路径」只作用于提示词卡，图片与图片组自动忽略
// （混合选区不误伤）；「自动整理 / 自动连线」只对选中节点生效；「删除所选」作用于全部。
//
// 为什么不放顶栏：这些动作都依赖「当前选了什么」，放进顶栏会让人以为对整张画布生效，
// 而顶栏的「全部运行」「自动连线」确实是全局的。原版就是这样分开放的。
//
// 带数量的按钮**按单复数各给一个键**，而不是「文案 + 拼接括号」：
// 中文的 `（3）` 是全角括号，英文的 ` (3)` 是半角加空格，拼接出来的必然有一边不对。
import { useT } from '../i18n'
import type { LocaleKey, Translate } from '../locales'

export interface InspectorProps {
  selectedCount: number
  selectedPromptCount: number
  /** 选中且可运行的提示词卡（有提示词、当前不在跑） */
  selectedRunnableIds: string[]
  pickingOutputDir: boolean
  onRunSelected: () => void
  onAutoLayout: () => void
  onAutoConnectSelected: () => void
  onSetOutputDir: () => void
  onDeleteSelected: () => void
}

/** 数量后缀：只有多选时才有意义（单选时不显示括号，与上游一致）。 */
function suffix(t: Translate, count: number): string {
  return count > 1 ? t('inspector.countSuffix', { count }) : ''
}

/** 取「单数键 / 复数键」里对得上的那一条。数量 ≤ 1 走单数，其余走复数。 */
function counted(
  t: Translate,
  count: number,
  one: LocaleKey,
  many: LocaleKey,
  params: Record<string, string | number> = {},
): string {
  return t(count > 1 ? many : one, { count, ...params })
}

export function SelectionInspector(props: InspectorProps) {
  const { selectedCount, selectedPromptCount, selectedRunnableIds, pickingOutputDir } = props
  const t = useT()
  if (selectedCount < 1) return null
  return (
    <div className="im-inspector nodrag">
      {selectedPromptCount > 0 ? (
        <button
          type="button"
          className="im-btn-primary im-btn-sm nodrag"
          disabled={!selectedRunnableIds.length}
          title={counted(t, selectedRunnableIds.length, 'inspector.run.title.one', 'inspector.run.title.many')}
          onClick={props.onRunSelected}
        >
          {counted(t, selectedRunnableIds.length, 'inspector.runOne', 'inspector.runMany')}
        </button>
      ) : null}
      <button
        type="button"
        className="im-btn-ghost im-btn-sm nodrag"
        title={t('inspector.layout.title')}
        onClick={props.onAutoLayout}
      >
        {t('inspector.layout')}
        {suffix(t, selectedCount)}
      </button>
      <button
        type="button"
        className="im-btn-ghost im-btn-sm nodrag"
        title={t('inspector.connect.title')}
        onClick={props.onAutoConnectSelected}
      >
        {t('inspector.connect')}
        {suffix(t, selectedCount)}
      </button>
      {selectedPromptCount > 0 ? (
        <button
          type="button"
          className="im-btn-ghost im-btn-sm nodrag"
          disabled={pickingOutputDir}
          title={counted(
            t,
            selectedPromptCount,
            'inspector.outputDir.title.one',
            'inspector.outputDir.title.many',
          )}
          onClick={props.onSetOutputDir}
        >
          {pickingOutputDir
            ? t('inspector.picking')
            : `${t('inspector.outputDir')}${suffix(t, selectedPromptCount)}`}
        </button>
      ) : null}
      <button type="button" className="im-btn-ghost im-btn-danger im-btn-sm nodrag" onClick={props.onDeleteSelected}>
        {t('inspector.delete')}
        {suffix(t, selectedCount)}
      </button>
    </div>
  )
}
