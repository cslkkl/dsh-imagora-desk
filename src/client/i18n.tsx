// 文案的 React 侧接线：把宿主注入的 `t` 送到任意深度的组件里。
//
// ## 为什么要自建一层 Context，而不是让每个组件都从 props 拿 `t`
//
// 宿主的 `t` 座位只注入给**注册进 slot 的那一个组件**（本插件是 `CanvasApp`）。
// 而实际写字的是 40 多个子组件和十几个 hook —— 逐层透传 `t` 会污染每一层的签名，
// 而且 hook 里（flash 提示、错误文案）根本没有 props 可透。Context 是唯一干净的路。
//
// ## 为什么不直接用 `ctx.locale.bind(NS)`
//
// `bind` 返回的函数**读调用时刻的语言**，但它的引用是稳定的；问题不在它，在于
// 组件拿不到 `ctx`。真要拿就得把 ctx 也做成 Context 传下去，那是把整个 Cordis 上下文
// 暴露进纯展示层，比传一个函数脏得多。所以入口处二选一：宿主给了 `t` 就用宿主的，
// 没给（验收台 / 冒烟）就用 `fallbackTranslate`。
import { createContext, useContext, type ReactNode } from 'react'
import { fallbackTranslate, type Translate } from './locales'

const LocaleContext = createContext<Translate | null>(null)

export interface LocaleProviderProps {
  /** 宿主注入的翻译函数；缺省时用兜底（见 fallbackTranslate 的说明）。 */
  translate?: Translate
  children: ReactNode
}

/** 提供翻译函数。整个画布只需在 `CanvasApp` 根部包一次。 */
export function LocaleProvider({ translate, children }: LocaleProviderProps) {
  // 不做 useMemo：translate 由宿主注入、引用本就稳定（`bind` 保证每命名空间同一个函数），
  // 宿主切语言时是「函数内部读到新语言」而不是「换一个新函数」，所以无需重新提供。
  return <LocaleContext.Provider value={translate ?? fallbackTranslate}>{children}</LocaleContext.Provider>
}

/**
 * 取翻译函数。
 *
 * 在 `LocaleProvider` 之外调用不会炸 —— 退回兜底的中文翻译。
 * 这是刻意的：验收台与冒烟脚本直接挂子组件（例如只挂错误边界）时不要求补 Provider，
 * 而正式运行永远在 Provider 之内，两者的差别只在「用的是不是宿主那份词典」。
 */
export function useT(): Translate {
  return useContext(LocaleContext) ?? fallbackTranslate
}
