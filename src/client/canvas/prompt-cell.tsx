// 提示词行：移植自 Imagora 的 HistoryGallery 里的 PromptCell。
//
// 行为（与原版逐条一致）：
//   - 常态 2 行截断（CSS line-clamp:2）；
//   - **只有真的被截断**才出浮层：命中判定是 scrollHeight > clientHeight。
//     短提示词悬浮不弹浮层 —— 弹一个和正文一模一样的东西是纯噪音。
//   - 浮层是深色底 + 白字，**单轴跟随鼠标 Y**、水平居中、宽度固定占屏幕 80%，
//     所以再长的提示词也不会横向出屏。
//   - 上下夹进视口：下面放不下就往上挪，实在太高就顶到 8px 并由 max-height 自己滚。
//
// 为什么要 createPortal 到 body（这是原版踩过的坑，抄注释一起抄过来）：
// 弹窗面板自带 overflow:hidden，入场动画还会留下 transform；fixed 定位在带 transform
// 的祖先里会以**那个祖先**作为包含块而不是视口。不 Portal 就会被面板裁掉，
// 而且 window.innerHeight 的夹取也在错误坐标系里量 —— 表现为浮层飘到面板底部、
// 下半截看不见。
//
// 与本项目全局约定的关系：根 AGENTS 说「提示统一用原生 title」，那条约束针对的是
// **按钮等控件的一行说明**（两种气泡延迟打架的问题）。这里是正文补全：原生 title
// 显示不了换行排版的长提示词，而且原版这一处本来就是自绘浮层，属于「照搬原版」的范围。
import { useLayoutEffect, useRef, useState, type MouseEvent } from 'react'
import { createPortal } from 'react-dom'

export interface PromptCellProps {
  text: string
}

export function PromptCell({ text }: PromptCellProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const tipRef = useRef<HTMLDivElement>(null)
  /** null = 不显示浮层 */
  const [tipY, setTipY] = useState<number | null>(null)
  const [top, setTop] = useState(0)

  const onEnter = (event: MouseEvent<HTMLParagraphElement>) => {
    const el = ref.current
    // scrollHeight > clientHeight 即发生了 2 行截断，才需要浮层补全
    if (el && el.scrollHeight > el.clientHeight) setTipY(event.clientY)
  }

  const onMove = (event: MouseEvent<HTMLParagraphElement>) => {
    setTipY(current => (current !== null ? event.clientY : current))
  }

  const onLeave = () => {
    setTipY(null)
    setTop(0)
  }

  // 跟随鼠标 y 并整体夹进视口（下边溢出靠挪位，而不是让它被切掉）。
  useLayoutEffect(() => {
    if (tipY !== null && tipRef.current) {
      const rect = tipRef.current.getBoundingClientRect()
      setTop(Math.max(8, Math.min(tipY + 16, window.innerHeight - rect.height - 8)))
    }
  }, [tipY, text])

  return (
    <>
      <p ref={ref} className="im-history-prompt" onMouseEnter={onEnter} onMouseMove={onMove} onMouseLeave={onLeave}>
        {text}
      </p>
      {tipY !== null
        ? createPortal(
            <div
              ref={tipRef}
              className="im-prompt-tip"
              data-testid="prompt-tip"
              style={{ left: '10vw', width: '80vw', top }}
            >
              {text}
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
