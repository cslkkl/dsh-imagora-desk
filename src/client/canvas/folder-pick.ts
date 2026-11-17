// 系统目录选择器的**唯一**调用点（卡片 / 选中栏 / 工具栏三处共用）。
//
// 为什么要有这一层：三处都需要同一套善后 —— 取消要静默、不支持要明说、
// 失败要带原因。抄三遍必然有一处漏掉「取消」那一支，表现为「点了取消，
// 结果把路径清空了」。
//
// 语义与上游 Imagora 的 `selectFolder` 一致：**取消时返回 null，调用方原值不动**。
// 上游服务端为此专门在响应里带 `canceled` 字段，注释写着「只比 path 会把取消当成
// 确认」——同一类错误在这里用返回值区分，调用方一律 `if (!path) return`。
import { pickFolder } from '../api'
import type { Translate } from '../locales'

export interface PickFolderOptions {
  /** 对话框标题（不同入口说法不同：选输出目录 / 选 imagora 目录） */
  title: string
  /** 打开时停在哪：通常是当前值，空串则由系统决定 */
  startAt?: string
}

/**
 * 弹目录选择器。成功返回绝对路径；取消 / 不可用 / 失败一律返回 null。
 *
 * @param t 翻译函数（错误文案走词典，组件与 hook 里都能取到）
 * @param onFlash 失败时用来提示；不传就静默（调用方自己有 loading 态的情况）
 */
export async function pickFolderOrNull(
  t: Translate,
  options: PickFolderOptions,
  onFlash?: (line: string) => void,
): Promise<string | null> {
  try {
    const picked = await pickFolder({ title: options.title, startAt: options.startAt ?? '' })
    if (picked.ok) return picked.path ?? null
    // 取消是**正常操作**，不是错误：用户看了一圈决定不改，不该弹提示。
    if (picked.reason === 'cancelled') return null
    onFlash?.(
      picked.reason === 'unsupported'
        ? t('settings.pick.unsupported')
        : t('settings.pick.failed', { reason: picked.reason || t('settings.pick.unknown') }),
    )
    return null
  } catch (error) {
    onFlash?.(t('settings.pick.failed', { reason: (error as Error)?.message || t('settings.pick.unknown') }))
    return null
  }
}
