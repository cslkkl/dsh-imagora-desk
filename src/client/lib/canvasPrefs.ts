// 画布偏好的本机持久化：小地图开关。
// 语义照搬 Imagora 的 minimapVisible.ts：非法 / 空白一律当未设置，
// localStorage 不可用（隐私模式）时静默降级、不影响本次会话。
//
// 吸附开关不走这里：它已经在 lib/snapDrag.ts 里（那批移植代码自带的 read/saveSnapEnabled），
// 不要再写第二份。
//
// 键名带 dsh- 前缀：这是插件，不该和原版应用共用同一个键，
// 否则装过原版的人第一次打开会被原版的偏好带跑。

const MINIMAP_KEY = 'dsh-imagora.canvas-minimap.v1'

/** 小地图默认关（与 Imagora 一致：卡片铺开了才需要它，平时白占地方） */
export function readMinimapVisible(): boolean {
  try {
    const raw = localStorage.getItem(MINIMAP_KEY)
    if (raw === null || raw.trim() === '') return false
    return raw.trim() !== '0' && raw.trim() !== 'false'
  } catch {
    return false
  }
}

export function saveMinimapVisible(visible: boolean): void {
  try {
    localStorage.setItem(MINIMAP_KEY, visible ? '1' : '0')
  } catch {
    // 隐私模式等场景下 localStorage 不可用：不持久化，不影响本次会话
  }
}
