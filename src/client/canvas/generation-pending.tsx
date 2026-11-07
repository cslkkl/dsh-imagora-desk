// 生成中占位卡：给「已经提交、结果还没回来」的提示词卡占住结果位。
// 结构移植自 Imagora 的 GenerationPending.tsx。
//
// 两处刻意与上游一致：
// 1. 计时从挂载那一刻算 0s —— 所以调用方必须**只在生成中**挂载它，
//    常驻挂载会让秒数从页面打开就开始跑。
// 2. 进度条只动 transform:scaleX()，不给 width 做动画（宽度动画触发布局、会卡）。
import { useEffect, useRef, useState } from 'react'
import { pendingLabel, pendingMessage, pendingProgressScale } from '../lib/generationPending'

export function GenerationPending({ className }: { className?: string }) {
  const [seconds, setSeconds] = useState(0)
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    const timer = window.setInterval(() => {
      if (mounted.current) setSeconds(value => value + 1)
    }, 1000)
    return () => {
      mounted.current = false
      window.clearInterval(timer)
    }
  }, [])

  const text = pendingLabel(seconds)
  const scale = pendingProgressScale(seconds)

  return (
    <div
      className={`im-pending${className ? ` ${className}` : ''}`}
      // 无角色的「进展」区域：读屏读一次整行文案即可，不该被每秒 tick 打断
      role="status"
      aria-live="polite"
      aria-label={text}
    >
      <div className="im-pending-label" title={text}>
        {text}
      </div>
      <div className="im-pending-track" aria-hidden>
        <div className="im-pending-bar" style={{ transform: `scaleX(${scale.toFixed(4)})` }} />
      </div>
      {/* 读屏文本与轮播文案分开：轮播只影响视觉，无障碍读的是整行 */}
      <span className="visually-hidden">{pendingMessage(seconds)}</span>
    </div>
  )
}
