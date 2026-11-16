// 吸附对齐线：拖拽中把命中的那条对齐线画出来。
//
// 只在真有位移的轴上才会出现（见 lib/snapGuide 的语义），所以这里不做任何判断，
// 拿到几条画几条。
//
// ## 必须画在 ViewportPortal 里（这条是坐标正确性的前提）
//
// `lib/snapGuide.ts` 的 `position` 是**画布坐标**（"吸附后该轴应对齐到的画布坐标"）。
// 而 `<ReactFlow>` 的 children 在渲染树里是 GraphView 的**兄弟**节点（见
// @xyflow/react dist 里 ReactFlow 根组件的 children 顺序：StoreUpdater / GraphView /
// SelectionListener / children / …），也就是落在 `.react-flow` 包裹层里、带
// `transform: translate(...) scale(...)` 的 `.react-flow__viewport` **外面**。
// 在那里用 absolute 画，拿到的是「未缩放的屏幕坐标」，一旦平移或缩放过，线就落在错误位置。
//
// `ViewportPortal` 把子树 portal 到 `.react-flow__viewport-portal`（实测其父级正是
// `.react-flow__viewport`），于是画布坐标可以直接用，平移缩放自动跟随 —— 与上游
// `components/SnapGuides.tsx` 同一做法。
//
// ## DOM 契约（与上游逐字一致，改之前先看 frontend/e2e）
//
// - `className="snap-guide"`（样式在 styles.ts 的 `.im-snap-guide` 别名之外，另有
//   `.snap-guide` 直接命中）
// - `data-axis="x" | "y"`
// - `data-testid="snap-guide"`
// - 横向线（axis="x"）是竖直的一条，纵向线（axis="y"）是水平的一条
//
// ## 已知取舍：线宽随缩放变化
//
// 画在 viewport 内就继承了 scale：1px 的线缩到 5% 时只有 0.05px（几乎看不见），
// 放到 200% 时变 2px（变粗）。上游接受这个代价，这里与它保持一致。
// 要「恒定 1px」就得留在 viewport 外并用 `flowToScreenPosition` 每帧换算，
// 那要订阅 viewport 变化、多一层重渲染 —— 两条路都正确，选了与上游相同的那条。
import { ViewportPortal } from '@xyflow/react'
import type { SnapGuide } from '../lib/snapGuide'

/** 线的长度：画到很远而不是 0~100%，这样任何平移量下线都还在视口里横贯而过。
 *  上游用同样的 ±10000 / 20000 取值（`components/SnapGuides.tsx`），照搬。 */
const GUIDE_SPAN = 20000

export function SnapGuideLayer({ guides }: { guides: SnapGuide[] }) {
  if (!guides.length) return null
  return (
    <ViewportPortal>
      {guides.map(guide => (
        <div
          key={`${guide.axis}-${guide.position}-${guide.targetId}`}
          className="snap-guide"
          data-axis={guide.axis}
          data-testid="snap-guide"
          style={
            guide.axis === 'x'
              ? { left: guide.position, top: -GUIDE_SPAN / 2, width: 1, height: GUIDE_SPAN }
              : { left: -GUIDE_SPAN / 2, top: guide.position, width: GUIDE_SPAN, height: 1 }
          }
        />
      ))}
    </ViewportPortal>
  )
}
