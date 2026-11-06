// 官方组件库的桥接层。
//
// 这些组件由宿主通过模块表提供（`@deepseek-ai/dsh-client-ui-primitives` 在 baseline 里），
// 因此这里用 CommonJS 的 require 拿，而不是 import —— 打包时保持 external。
//
// 为什么不用 `require(...).Button` 直接取：宿主的模块表把 baseline 模块作为
// **模块命名空间**注入（可能是 ES module 包装），命名空间上直接取不到成员时
// 还要再试一次 `.default`。这里把两种形态都兜住，并在都失败时给出可定位的错误。
type AnyProps = Record<string, unknown>

export interface PrimitivesModule {
  Button: (props: AnyProps) => JSX.Element
  Input: (props: AnyProps) => JSX.Element
  Modal: (props: AnyProps) => JSX.Element | null
  Tooltip: (props: AnyProps) => JSX.Element
  Toast: (props: AnyProps) => JSX.Element
  Switch: (props: AnyProps) => JSX.Element
  Checkbox: (props: AnyProps) => JSX.Element
  SegmentedControl: (props: AnyProps) => JSX.Element
  Tag: (props: AnyProps) => JSX.Element
  Pill: (props: AnyProps) => JSX.Element
  StateDot: (props: AnyProps) => JSX.Element
  SettingsValueField: (props: AnyProps) => JSX.Element
  SettingsSecretField: (props: AnyProps) => JSX.Element
  ShortcutKeys: (props: AnyProps) => JSX.Element
}

declare const require: (id: string) => unknown

const MODULE_ID = '@deepseek-ai/dsh-client-ui-primitives'

let cached: PrimitivesModule | null = null

function unwrap(value: unknown): Record<string, unknown> | null {
  if (!value || (typeof value !== 'object' && typeof value !== 'function')) return null
  const record = value as Record<string, unknown>
  // 注意：不能判 typeof === 'function'。这些组件由 React 的 forwardRef / memo 包装，
  // 是「对象」而不是函数；按 typeof 判会误判成「宿主没提供」。
  if (record.Button) return record
  const fallback = record.default
  if (fallback && typeof fallback === 'object' && (fallback as Record<string, unknown>).Button) {
    return fallback as Record<string, unknown>
  }
  return null
}

/**
 * 拿组件库。宿主没提供时抛错，而不是静默降级成自绘按钮 ——
 * 静默降级会让界面在没装组件库的宿主上看起来「能用但不对」，排查成本更高。
 */
export function primitives(): PrimitivesModule {
  if (cached) return cached
  const loaded = require(MODULE_ID)
  const resolved = unwrap(loaded)
  if (!resolved) {
    const keys = loaded && typeof loaded === 'object' ? Object.keys(loaded).slice(0, 8).join(', ') : String(loaded)
    throw new Error(`宿主没有提供 ${MODULE_ID}（拿到的成员：${keys || '空'}）`)
  }
  cached = resolved as unknown as PrimitivesModule
  return cached
}
