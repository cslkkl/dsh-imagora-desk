// 吸附对齐线：拖拽中把命中的那条对齐线画出来。
//
// 只在真有位移的轴上才会出现（见 lib/snapGuide 的语义），所以这里不做任何判断，
// 拿到几条画几条。线要压在节点之上、交互层之下，因此 pointerEvents 关掉。
import type { SnapGuide } from '../lib/snapGuide'

export function SnapGuideLayer({ guides }: { guides: SnapGuide[] }) {
  if (!guides.length) return null
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 5,
      }}
      aria-hidden
    >
      {guides.map(guide => (
        <div
          key={`${guide.axis}-${guide.position}-${guide.targetId}`}
          data-snap-axis={guide.axis}
          style={
            guide.axis === 'x'
              ? {
                  position: 'absolute',
                  left: guide.position,
                  top: 0,
                  bottom: 0,
                  width: 1,
                  background: 'var(--im-snap, #4c8dff)',
                  opacity: 0.9,
                }
              : {
                  position: 'absolute',
                  top: guide.position,
                  left: 0,
                  right: 0,
                  height: 1,
                  background: 'var(--im-snap, #4c8dff)',
                  opacity: 0.9,
                }
          }
        />
      ))}
    </div>
  )
}
