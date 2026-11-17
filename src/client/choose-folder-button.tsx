// 「选一个目录」的那枚图标按钮：提示词卡与设置弹窗共用**同一个**组件。
//
// 为什么必须共用而不是各写一份：这个图形（folder）在前一版里有两个意思 ——
// 卡片上是「弹目录框选路径」，设置弹窗里是「在文件管理器中打开」。同一个符号
// 两处指向不同动作，用户只能靠试（维护者报的正是「能不能换一下」）。
// 现在把符号与动作绑死在一个组件里，谁再想给这个图标换个含义，得先改这里。
//
// 为什么用图标而不是「选择文件夹」文字：卡片只有 380px 宽，五个汉字加上输入框会把
// 路径挤成一截；英文 `Choose folder` 更宽。设置里那行同样要跟输入框并排。
// 文字没有丢 —— 它在 title 与 aria-label 里，鼠标停一下就看得见，读屏也读得到。
import { Icon } from './icons'

export function ChooseFolderButton({
  label,
  disabled,
  onClick,
}: {
  /** 无障碍名与 hover 文案（调用方传已翻译的「选择文件夹」） */
  label: string
  disabled?: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      className="im-btn-ghost im-icon-btn nodrag"
      title={label}
      aria-label={label}
      disabled={disabled}
      onClick={event => {
        // 卡片挂在 React Flow 节点里：不拦住冒泡，点按钮会顺带选中/拖动画布
        event.stopPropagation()
        onClick()
      }}
    >
      <Icon name="folder" size={14} />
    </button>
  )
}
