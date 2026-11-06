// Imagora 配置：读取、切换来源、切换模型。
// host 半端每次请求都重读 imagora 的配置文件，所以这里切换后拿到的就是最新值。
import { useCallback, useEffect, useRef, useState } from 'react'
import { getConfig, setModel, setProfile, type ImagoraConfig } from '../api'
import { errMessage } from '../lib/format'

export function useCanvasConfig(flash: (line: string) => void) {
  const [config, setConfig] = useState<ImagoraConfig | null>(null)
  const [configError, setConfigError] = useState<string | null>(null)
  const configRef = useRef<ImagoraConfig | null>(null)

  const apply = useCallback((next: ImagoraConfig) => {
    setConfig(next)
    configRef.current = next
    setConfigError(next.issues.length ? next.issues.join('　') : null)
  }, [])

  const reload = useCallback(async () => {
    try {
      apply(await getConfig())
    } catch (error) {
      setConfigError(errMessage(error))
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

  return { config, configError, configRef, switchProfile, switchModel }
}
