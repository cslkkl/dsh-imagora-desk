/**
 * 图片写进剪贴板（预览弹窗的「复制图片」用）。
 *
 * ## 与原版的差异（重要）
 *
 * 原版有**两条路**且优先走服务端：有本机绝对路径时调 `POST /api/clipboard/image`，
 * 后端直接 `SetClipboardData(CF_DIB)`，接口返回即代表别的程序已经能粘到。
 *
 * 本插件的 host **没有这个接口**（只有 `/imagora/reveal` 能打开目录），
 * 所以这里只有浏览器那一条路。这带来一个原版注释里点明的现实差别：
 * 浏览器写图片是**异步投递**，Promise resolve 时系统剪贴板里还没有位图，
 * 要 100~300ms 后才读得到（大图更久，偶发整次丢弃）。所以本模块的 Promise
 * resolve 只代表「已提交给浏览器」，不代表「别的程序已经能粘」——
 * 调用方的成功提示措辞要按这个事实写，不能承诺「已经能粘贴」。
 *
 * 其余（PNG 转码、用户手势要求、失败必须抛错）与原版一致：
 * - `ClipboardItem` 只接受 **PNG**，生成结果可能是 jpeg / webp，非 PNG 一律先经 canvas 转码
 * - 必须在**用户手势**里调用（否则浏览器直接拒绝）
 * - 失败一律抛错，由调用方给用户一句人话 —— 静默失败会让人以为图已经复制了
 */

/** 把任意图片 URL 读成 PNG Blob */
async function readAsPngBlob(url: string): Promise<Blob> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`读取图片失败（HTTP ${response.status}）`)
  const blob = await response.blob()
  if (blob.type === 'image/png') return blob

  // 非 PNG：解码 → 画到 canvas → 导出 PNG。用 createImageBitmap 优先（不阻塞主线程解码）
  const bitmap = await createImageBitmap(blob)
  try {
    const canvas = document.createElement('canvas')
    canvas.width = bitmap.width
    canvas.height = bitmap.height
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('浏览器不支持 canvas，无法转换图片格式')
    ctx.drawImage(bitmap, 0, 0)
    const png = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/png'))
    if (!png) throw new Error('图片格式转换失败')
    return png
  } finally {
    bitmap.close()
  }
}

/** 把图片复制到系统剪贴板；失败抛 Error（调用方负责提示） */
export async function copyImageToClipboard(url: string): Promise<void> {
  if (typeof ClipboardItem === 'undefined' || !navigator.clipboard?.write) {
    throw new Error('当前浏览器不支持复制图片，请改用「复制路径」')
  }
  const png = await readAsPngBlob(url)
  await navigator.clipboard.write([new ClipboardItem({ 'image/png': png })])
}

/** 复制一段文本（路径 / 提示词）；剪贴板不可用时抛错，让调用方给出提示 */
export async function copyTextToClipboard(text: string): Promise<void> {
  if (!navigator.clipboard?.writeText) throw new Error('浏览器不允许访问剪贴板')
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    // 浏览器的原始拒绝理由（NotAllowedError: denied …）对用户没有信息量，
    // 统一换成「该怎么办」的说法：这里失败会让用户以为已经复制走了。
    throw new Error('复制失败：浏览器拒绝了剪贴板访问')
  }
}
