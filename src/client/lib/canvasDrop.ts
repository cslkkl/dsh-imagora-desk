// 画布拖拽的纯逻辑：意图解析、文案、命中判定。
// 照搬 Imagora 的 frontend/src/canvasDrop.ts（无副作用，可独立单测）。
//
// 这里有一条很容易踩错的事实：**dragover 阶段读不到 dataTransfer.getData**
// （浏览器只在 drop 时才允许读自定义类型）。所以判定必须同时接受一个
// dragstart 时登记的 fallback，否则 dragover 里永远判不出意图 ——
// 不 preventDefault 浏览器就不认这个 drop，松手什么都不会发生。
//
// 与上游的两处差异（都记在这里，别再漂）：
//   1. MIME 名带插件前缀 `application/x-dsh-imagora-canvas`。它只在**本页内部**
//      从工具栏按钮传到画布 drop 处理，不跨页面，改名不影响行为。
//   2. `extractImageFiles` 一度缺失（过滤被挪到下游 addImages），代价是拖进非图片
//      完全没有反馈；已按上游补回，见该函数注释。
import { isImageFile } from './workflow'

/** 工具栏按钮拖出的自定义类型（值 = prompt | group） */
export const CANVAS_DRAG_MIME = 'application/x-dsh-imagora-canvas'

/** 落画布拖拽意图：images = 文件拖入；prompt/group = 工具栏按钮拖出 */
export type CanvasDropIntent = 'images' | 'prompt' | 'group'

/** 工具栏按钮的落点示意文案（文件拖入按数量动态生成，见 dropChipLabel） */
export const TOOLBAR_DROP_LABELS: Record<'prompt' | 'group', string> = {
  prompt: '松开新建提示词卡片',
  group: '松开新建图片组',
}

/** 落在画布外时的文案（松手 = 取消） */
export const TOOLBAR_DROP_LABEL_CANCEL = '松开取消'

interface DragDataLike {
  types: readonly string[]
  getData: (type: string) => string
}

/** 这次拖拽是否携带文件（文本拖拽/内部拖拽一律放行，不拦） */
export function dragCarriesFiles(event: { dataTransfer: DragDataLike | null }): boolean {
  return event.dataTransfer?.types.includes('Files') ?? false
}

/**
 * 当前拖拽意图。文件拖入 = images；工具栏拖出 = prompt / group；其他 = null 放行。
 * @param fallback dragstart 时登记的意图，兜住 dragover 读不到 getData 的浏览器行为
 */
export function resolveDropIntent(
  event: { dataTransfer: DragDataLike | null },
  fallback: CanvasDropIntent | null,
): CanvasDropIntent | null {
  if (dragCarriesFiles(event)) return 'images'
  const kind = event.dataTransfer?.getData(CANVAS_DRAG_MIME)
  if (kind === 'prompt' || kind === 'group') return kind
  return fallback
}

/** dragover 阶段 dataTransfer.files 是空的（浏览器延迟到 drop 才填），数量只能从 items 数 */
export function countDraggedFiles(dataTransfer: { items: ArrayLike<{ kind: string }> } | null): number {
  return dataTransfer ? Array.from(dataTransfer.items).filter(item => item.kind === 'file').length : 0
}

/** drop 阶段：从 dataTransfer.files 里挑出图片。
 *
 * 上游 `canvasDrop.ts` 有同名同签名的函数，这里补回来是为了两件事：
 * ① 与上传 / 粘贴 / 新建共用同一个 `isImageFile` 判定，各入口的「什么算图片」不会漂；
 * ② 过滤**在 drop 处**做，才能知道「一个图片都没有」，从而给用户一句话 ——
 *    过滤挪到下游 `addImages` 里时，拖进一个 .txt 是彻底静默的（界面毫无反应）。
 *    维护者报过「拖进去没反应，以为卡住了」。 */
export function extractImageFiles(dataTransfer: { files: ArrayLike<File> } | null): File[] {
  return Array.from(dataTransfer?.files ?? []).filter(isImageFile)
}

/** 落点示意文案 */
export function dropChipLabel(intent: CanvasDropIntent, draggedFileCount: number): string {
  if (intent === 'images') {
    return draggedFileCount >= 1 ? `松开添加 ${draggedFileCount} 张图片` : '未检测到图片'
  }
  return TOOLBAR_DROP_LABELS[intent]
}

/** 屏幕坐标是否落在矩形内 */
export function isInsideRect(
  clientX: number,
  clientY: number,
  rect: Pick<DOMRect, 'left' | 'right' | 'top' | 'bottom'>,
): boolean {
  return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom
}
