// 右键菜单的文案映射 —— **按 action id 换 label，不改 lib/**。
//
// 上游 `lib/contextMenu.ts` 是 A 档移植文件（规范化后与上游相同），它给每项写的中文
// `label` 直接烘在 `buildNodeMenu()` 的返回值里。要让那些文案跟着宿主语言走，只有两条路：
//
// 1. 往 `lib/contextMenu.ts` 里塞 `t()` —— 那就把 A 档文件改成 C 档，且要与上游同步，
//    而上游目前不做 i18n（维护者 2026-11-17 定：上游先不动）。**不可行**。
// 2. 在消费处按 `id` 换掉 `label` —— 上游自己在 `contextMenu.ts:93` 就写着
//    「动作 id（接线方按 id 分派，**不要按 label 匹配 —— label 是给人看的，会改**）」。
//    换文案正是它留的那个缝，且 `menuHeight()` 只按条数算、不看 label，高度不受影响。
//
// 所以本文件就是「A 档移植件与文案层之间唯一的一道缝」，新增菜单项时两边都要补。
import type { LocaleKey, Translate } from '../locales'

/** id → 文案键。`delete` 单独处理：多选时文案不同（见 menuLabel）。 */
const MENU_KEY: Record<string, LocaleKey> = {
  'delete-selection': 'menu.deleteSelection',
  preview: 'menu.preview',
  crop: 'menu.crop',
  upscale: 'menu.upscale',
  split: 'menu.split',
  mask: 'menu.mask',
  replace: 'menu.replace',
  run: 'menu.run',
  'copy-prompt': 'menu.copyPrompt',
  delete: 'menu.delete',
}

/**
 * 取一条菜单项的文案。
 *
 * @param id 动作 id（上游契约里的稳定标识）
 * @param selectedCount 当前选中数：`delete` 在多选时改叫「仅删除此项」，
 *   与顶部批量删除区分开 —— 两个范围不同的动作字面几乎一样时用户很容易点错。
 * @param t 翻译函数
 * @returns 该动作的显示文案；未知 id 原样返回（新动作忘了补键时看得见，而不是变成空白）
 */
export function menuLabel(id: string, selectedCount: number, t: Translate): string {
  if (id === 'delete') return t(selectedCount > 1 ? 'menu.deleteOnly' : 'menu.delete')
  if (id === 'delete-selection') return t('menu.deleteSelection', { count: selectedCount })
  const key = MENU_KEY[id]
  return key ? t(key) : id
}
