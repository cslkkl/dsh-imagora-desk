// 右上角选中操作栏：与 Imagora 的 .studio-inspector 同构。
//
// 位置与出现条件照原版：`absolute right-3 top-3`、选中 ≥1 个节点才出现。
// 语义也照原版——「运行所选 / 设置输出路径」只作用于提示词卡，图片与图片组自动忽略
// （混合选区不误伤）；「自动整理 / 自动连线」只对选中节点生效；「删除所选」作用于全部。
//
// 为什么不放顶栏：这些动作都依赖「当前选了什么」，放进顶栏会让人以为对整张画布生效，
// 而顶栏的「全部运行」「自动连线」确实是全局的。原版就是这样分开放的。
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

export function SelectionInspector(props: InspectorProps) {
  const { selectedCount, selectedPromptCount, selectedRunnableIds, pickingOutputDir } = props
  if (selectedCount < 1) return null
  const suffix = (count: number) => (count > 1 ? ` (${count})` : '')
  return (
    <div className="im-inspector nodrag">
      {selectedPromptCount > 0 ? (
        <button
          type="button"
          className="im-btn-primary im-btn-sm nodrag"
          disabled={!selectedRunnableIds.length}
          title={`运行 ${selectedRunnableIds.length} 张选中的提示词卡片（只运行提示词，图片/图片组忽略）`}
          onClick={props.onRunSelected}
        >
          运行所选{suffix(selectedRunnableIds.length)}
        </button>
      ) : null}
      <button
        type="button"
        className="im-btn-ghost im-btn-sm nodrag"
        title="局部整理选中的节点，其余保持原位"
        onClick={props.onAutoLayout}
      >
        自动整理{suffix(selectedCount)}
      </button>
      <button
        type="button"
        className="im-btn-ghost im-btn-sm nodrag"
        title="只对选中的节点自动补齐明显连线，未选中节点不受影响"
        onClick={props.onAutoConnectSelected}
      >
        自动连线{suffix(selectedCount)}
      </button>
      {selectedPromptCount > 0 ? (
        <button
          type="button"
          className="im-btn-ghost im-btn-sm nodrag"
          disabled={pickingOutputDir}
          title={`设置 ${selectedPromptCount} 张提示词卡片的输出路径`}
          onClick={props.onSetOutputDir}
        >
          {pickingOutputDir ? '选择中…' : `设置输出路径${suffix(selectedPromptCount)}`}
        </button>
      ) : null}
      <button
        type="button"
        className="im-btn-ghost im-btn-danger im-btn-sm nodrag"
        title="删除选中的所有节点（含图片、图片组）"
        onClick={props.onDeleteSelected}
      >
        删除所选{suffix(selectedCount)}
      </button>
    </div>
  )
}
