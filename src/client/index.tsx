// client 半端入口：向侧边栏与主区域注册「imagora」面板。
// 侧边栏那一行由 sidebar.panellist 渲染；点开后主区域用同名 key 渲染画布。
//
// 文案层在这里接上宿主：`ctx.locale.register` 交出中英两份词典，slot 注册项声明
// `locale: NS` 让框架把 `t` 座位注入组件 props。侧栏标签用 thunk 形态，
// 于是**切语言时宿主自己会重取**（`resolveSlotLabel` 读一次 thunk），无需重挂载。
import { CanvasApp } from './canvas/index'
import { CanvasBoundary, ErrorBoundary, NodeBoundary } from './canvas/error-boundary'
import { BrandLogo } from './brand'
import { NS, en, zh, type Translate } from './locales'
import xyflowCss from '@xyflow/react/dist/style.css'

/**
 * 依赖两项服务。
 *
 * `locale` 是硬依赖：注册词典与注入 `t` 都靠它，DSH 的 web 端必装
 * （`bundle/web-app` 依赖 `dsh-client-locale`）。少写它不会立刻报错，
 * 而是 `ctx.locale` 为 undefined —— 那时 `register` 才炸，报错位置离真因很远。
 */
export const inject = ['slots', 'locale']

const KEY = 'imagora'

/** Cordis 上下文的最小形状：只声明本插件用到的三件事。 */
interface SlotsContext {
  slots: {
    inject: (name: string, fn: () => unknown) => () => void
    register: (options: Record<string, unknown>, component: unknown) => { dispose: () => void }
  }
  locale: {
    /**
     * 注册命名空间词典。带类型的形式要求基线的两种语言都给全
     * （`zh` 与 `en`），与 dsh-client-locale 的契约一致。
     */
    register: (ns: string, dicts: Record<string, Record<string, string>>) => () => void
    /**
     * 绑定命名空间，拿到翻译函数。**同一命名空间多次 bind 返回同一个函数**
     * （引用稳定），所以可以安全地放进 `ctx.effect` 与依赖数组。
     * 它读的是**调用时刻**的语言 —— 这就是侧栏标签能跟着切语言的原因。
     */
    bind: (ns: string) => Translate
  }
  effect: (fn: () => (() => void) | undefined, label: string) => void
}

declare global {
  /** 验收台用来直接挂载画布组件；正式运行时不参与渲染。 */
  var __dshImagoraCanvas: typeof CanvasApp | undefined
  /** 验收台用来单独挂错误边界（塞一个必炸的子树进去，验替代界面与「崩了不写快照」）。 */
  var __dshImagoraBoundary: typeof boundaryProbe | undefined
}

globalThis.__dshImagoraCanvas = CanvasApp

/**
 * 错误边界的验收入口。
 *
 * 为什么要专门开一个口子：边界只在该触发的时候才渲染替代界面，正常路径永远看不到。
 * 靠「制造一份能把画布搞崩的数据」来验收是不可靠的 —— 数据侧现在有形状校验，
 * 脏数据会被跳过，根本走不到渲染异常那一步。所以把边界本身交出去，
 * 让验收台直接挂一个「render 里必定 throw」的子树进去。
 * 与 `__dshImagoraCanvas` 同一性质：只有验收台会用，正式运行不参与渲染。
 */
const boundaryProbe = { ErrorBoundary, NodeBoundary, CanvasBoundary }
globalThis.__dshImagoraBoundary = boundaryProbe

/**
 * 侧边栏那一行的图标：用原版 Imagora 的 logo 形状。
 *
 * 直接按同一个 size 渲染即可，不用额外留边距 —— 量过两边的墨迹占比：
 * 原版 logo 在 1024 视图框里墨迹是 785×764（占比 0.766），
 * 本项目其它图标是 24 视图框 + 1.7 描边（占比约 0.76），光学大小本来就一致。
 *
 * ## 颜色一律 `currentColor`（维护者 2026-11-07 定）
 *
 * 侧栏那一列是宿主与所有插件共用的一列，相邻图标（Plugins / 自动任务 / 用量统计…）
 * 全是 `currentColor` 单色线条，颜色由宿主那套 class 决定：常态三级文字色、悬停提一档、
 * 当前打开的那一行高亮、暗色主题整体翻转。这里若烘死品牌色，会出现
 * 「别的图标都灰、只有我们这一枚是蓝的」，而且暗色主题下品牌色那点对比度也不够。
 *
 * 所以：**形状用自家的（与插件页 `icon.svg` 同一母题），上色交给宿主**。
 * 参考实现见同级项目 `dsh-cpa-switch` 的 `src/client/PanelGlyph.tsx` —— 它同样把
 * 「插件页一枚图标、侧栏一枚图标」画成同一个母题，颜色一律 `currentColor`。
 * 区别只在那里侧栏用 16 格 outline、插件页用实心盘；本项目两处都是同一枚实心 logo，
 * 因为 logo 在 16px 下实心比 outline 更认得出。
 */
function PanelIcon({ size = 16 }: { size?: number }) {
  return <BrandLogo size={size} fill="currentColor" />
}

export function apply(ctx: SlotsContext) {
  // 词典先注册：晚于出口注册也不会丢（注册会推进修订号，已挂载的出口自动重取），
  // 但先注册能少一次无用渲染。
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-imagora-desk: 文案词典')

  // 侧栏标签走 `bind` 而不是让框架注入：`sidebar.panellist` 的 `label` 是个 thunk，
  // 宿主调它时并不会递 `t` 进来（`t` 座位只注入组件 props）。`bind` 返回的函数
  // 读调用时刻的语言，所以 thunk 里调它，切语言就自动跟着变。
  const t = ctx.locale.bind(NS)

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

  // `locale: NS` 让框架把类型化的 `t` 注入 CanvasApp 的 props（本插件唯一的文案入口）。
  ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: KEY, locale: NS }, CanvasApp))

  ctx.effect(
    () =>
      ctx.slots.inject('sidebar.panellist', () =>
        ctx.slots.register(
          {
            name: 'sidebar.panellist',
            id: KEY,
            order: 6,
            locale: NS,
            // thunk 形态：宿主每次读标签都重新求值，所以切语言时侧栏那一行跟着变。
            label: () => t('panel.entry'),
          },
          PanelIcon,
        ),
      ),
    'dsh-imagora-desk: 侧边栏入口',
  )
}
