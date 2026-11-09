// Imagora 配置：读取、切换来源、切换模型。
// host 半端每次请求都重读 imagora 的配置文件，所以这里切换后拿到的就是最新值。
import { useCallback, useEffect, useRef, useState } from 'react'
import { getConfig, setModel, setProfile, type ImagoraConfig } from '../api'
import { errMessage } from '../lib/format'

export function useCanvasConfig(flash: (line: string) => void) {
  const [config, setConfig] = useState<ImagoraConfig | null>(null)
  /** 配置缺失的原因，逐条列（不是拼成一句话）。顶栏按条目渲染，读起来才不像报错页。 */
  const [configIssues, setConfigIssues] = useState<string[]>([])
  const configRef = useRef<ImagoraConfig | null>(null)

  /**
   * 收一份配置进状态。
   *
   * **必须先补默认值再用**：`/settings`、`/provider` 这类「写」接口回的是完整配置，
   * 但它们一旦回得残缺（旧版 host、代理改写、中间件塞了个 `{ok:true}`），
   * `next.issues` 就是 undefined，紧接着 `setConfigIssues(next.issues)` 会让
   * `issues.length` 在任何读它的组件里当场抛 TypeError —— 整个画布白屏。
   * 一次字段缺失不该让界面崩掉，所以这里把数组类字段兜成空数组。
   */
  const apply = useCallback((raw: ImagoraConfig) => {
    const next: ImagoraConfig = {
      ...raw,
      profiles: Array.isArray(raw?.profiles) ? raw.profiles : [],
      models: Array.isArray(raw?.models) ? raw.models : [],
      sizes: Array.isArray(raw?.sizes) ? raw.sizes : [],
      qualities: Array.isArray(raw?.qualities) ? raw.qualities : [],
      issues: Array.isArray(raw?.issues) ? raw.issues : [],
    }
    setConfig(next)
    configRef.current = next
    setConfigIssues(next.issues)
  }, [])

  const reload = useCallback(async () => {
    try {
      apply(await getConfig())
    } catch (error) {
      setConfigIssues([errMessage(error)])
    }
  }, [apply])

  useEffect(() => {
    void reload()
  }, [reload])

  const switchProfile = useCallback(
    async (name: string) => {
      try {
        const next = await setProfile(name)
        apply(next)
        flash(`已切到 ${next.profileLabel || next.profile}`)
      } catch (error) {
        flash(`切换失败：${errMessage(error)}`)
      }
    },
    [apply, flash],
  )

  const switchModel = useCallback(
    async (model: string) => {
      try {
        const next = await setModel(model)
        apply(next)
        flash(`已切换到 ${next.modelLabel}`)
      } catch (error) {
        flash(`切换失败：${errMessage(error)}`)
      }
    },
    [apply, flash],
  )

  return { config, configIssues, configRef, switchProfile, switchModel, replaceConfig: apply }
}
