// LOD（level of detail）抽象模式：缩得很小时，节点降级成轻量卡片。
//
// 照搬 Imagora 的 CanvasPage.tsx（LOD_IN_ZOOM / LOD_OUT_ZOOM / handleViewportMove）。
//
// 为什么需要它：画布上几十上百张图时，每张卡都带右侧操作栏（7 个按钮）、
// 入场动画、`will-change: transform` 的合成层。缩到 10% 以下时这些小控件在屏幕上
// 只有一两个像素，谁也点不到、看不清，却照样参与布局与合成 —— 平移和缩放就掉帧。
// 抽象模式下图片卡只留缩略图 + 名称/引用行，提示词卡只留标题 + 状态大字，
// 图片组卡去掉悬停删除栏，连线也停止流动动画（每帧重算 dashoffset 是逐帧开销）。
//
// **迟滞（hysteresis）是这里唯一容易写错的地方**：进/出用两个不同阈值
// （0.1 进、0.2 出）。用同一个阈值时，缩放停在临界点上会反复翻转 —— 每次翻转
// 都重建全部节点，画面持续闪烁。两个阈值之间那一段是「保持现状」的死区。

/** 缩小到这个倍率**以下**进入抽象模式 */
export const LOD_IN_ZOOM = 0.1

/** 放大到这个倍率**以上**退出抽象模式（与 LOD_IN_ZOOM 之间是防抖死区） */
export const LOD_OUT_ZOOM = 0.2

/**
 * 由「当前是否抽象」与「新的缩放倍率」算出「新的是否抽象」。
 *
 * 纯函数：不读 DOM、不碰 React，方便单测覆盖临界与死区。
 * 注意入参是**当前状态**而不是上一帧的 zoom —— 状态机只看自己现在在哪个档，
 * 这样即便某次 onMove 丢了（快速拖动时的合并帧），下一次也能自愈。
 */
export function nextLod(current: boolean, zoom: number): boolean {
  if (!current && zoom < LOD_IN_ZOOM) return true
  if (current && zoom > LOD_OUT_ZOOM) return false
  return current
}
