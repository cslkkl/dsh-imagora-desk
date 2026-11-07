// client 半端入口：向侧边栏与主区域注册「imagora」面板。
// 侧边栏那一行由 sidebar.panellist 渲染；点开后主区域用同名 key 渲染画布。
import { CanvasApp } from './canvas/index'
import { BrandLogo } from './brand'
import xyflowCss from '@xyflow/react/dist/style.css'

export const inject = ['slots']

const KEY = 'imagora'

/** Cordis 上下文的最小形状：只声明本插件用到的两件事。 */
interface SlotsContext {
  slots: {
    inject: (name: string, fn: () => unknown) => () => void
    register: (options: Record<string, unknown>, component: unknown) => { dispose: () => void }
  }
  effect: (fn: () => (() => void) | undefined, label: string) => void
}

declare global {
  /** 验收台用来直接挂载画布组件；正式运行时不参与渲染。 */
  var __dshImagoraCanvas: typeof CanvasApp | undefined
}

globalThis.__dshImagoraCanvas = CanvasApp

/**
 * 侧边栏那一行的图标：用原版 Imagora 的 logo 形状。
 *
 * 直接按同一个 size 渲染即可，不用额外留边距 —— 量过两边的墨迹占比：
 * 原版 logo 在 1024 视图框里墨迹是 785×764（占比 0.766），
 * 本项目其它图标是 24 视图框 + 1.7 描边（占比约 0.76），光学大小本来就一致。
 */
function PanelIcon({ size = 16 }: { size?: number }) {
  return <BrandLogo size={size} />
}

export function apply(ctx: SlotsContext) {
  ctx.effect(() => {
    const style = document.createElement('style')
    style.setAttribute('data-dsh-imagora-desk', 'xyflow')
    style.textContent = xyflowCss
    document.head.appendChild(style)
    return () => style.remove()
  }, 'dsh-imagora-desk: xyflow 基础样式')

  // 尽早探一次组件库：宿主没提供时在控制台说清楚，而不是等用户点开画布才炸
  void import('./ui').then(({ primitives }) => {
    try {
      primitives()
    } catch (error) {
      console.error('[dsh-imagora-desk]', error)
    }
  })

  ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: KEY }, CanvasApp))

  ctx.effect(
    () =>
      ctx.slots.inject('sidebar.panellist', () =>
        ctx.slots.register(
          {
            name: 'sidebar.panellist',
            id: KEY,
            order: 6,
            label: () => '自由画布',
          },
          PanelIcon,
        ),
      ),
    'dsh-imagora-desk: 侧边栏入口',
  )
}
