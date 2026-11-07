// 设置弹窗：填接口地址、API Key、模型，或切回 Imagora 的配置。
//
// 用官方的 SettingsValueField / SettingsSecretField：密钥框只报「已配置 / 未配置」，
// 明文只在提交那一次离开输入框，不上屏、不回显。
import { useState } from 'react'
import { probeProvider, saveProvider, type ImagoraConfig } from '../api'
import { errMessage } from '../lib/format'
import { primitives } from '../ui'
import { OutputDirRow } from './output-dir-row'

export interface SettingsDialogProps {
  config: ImagoraConfig | null
  onClose: () => void
  onSaved: (next: ImagoraConfig) => void
  onFlash: (line: string) => void
}

export function SettingsDialog({ config, onClose, onSaved, onFlash }: SettingsDialogProps) {
  const ui = primitives()
  const provider = config?.provider
  const usingPlugin = config?.source === 'plugin'

  const [baseUrl, setBaseUrl] = useState(provider?.baseUrl ?? '')
  const [model, setModel] = useState(provider?.model ?? '')
  const [apiKey, setApiKey] = useState('')
  const [busy, setBusy] = useState(false)
  const [probeResult, setProbeResult] = useState<string | null>(null)
  const [probeModels, setProbeModels] = useState<string[]>([])

  const save = async () => {
    setBusy(true)
    try {
      const next = await saveProvider({
        baseUrl: baseUrl.trim(),
        model: model.trim(),
        apiKey: apiKey.trim(),
      })
      onSaved(next)
      setApiKey('')
      onFlash('已保存设置')
      // 接口配置落盘后可以关掉；输出路径那段自己会即时生效，不需要重开弹窗
      onClose()
    } catch (error) {
      onFlash(`保存失败：${errMessage(error)}`)
    } finally {
      setBusy(false)
    }
  }

  const reset = async () => {
    setBusy(true)
    try {
      const next = await saveProvider({ reset: true })
      onSaved(next)
      onFlash('已清空插件内配置，回到本机 Imagora 的配置')
      onClose()
    } catch (error) {
      onFlash(`操作失败：${errMessage(error)}`)
    } finally {
      setBusy(false)
    }
  }

  const probe = async () => {
    setBusy(true)
    setProbeResult(null)
    try {
      const result = await probeProvider({ baseUrl: baseUrl.trim(), apiKey: apiKey.trim() })
      setProbeModels(result.models ?? [])
      setProbeResult(
        result.models?.length ? `连通，读到 ${result.models.length} 个模型` : '连通，但这个地址没报模型清单（可手填）',
      )
    } catch (error) {
      setProbeModels([])
      setProbeResult(`连不通：${errMessage(error)}`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <ui.Modal open onClose={onClose} title="画布设置">
      <div style={{ display: 'grid', gap: 14, minWidth: 420 }}>
        <p style={{ margin: 0, fontSize: 12.5, color: 'var(--im-ink-3)', lineHeight: 1.7 }}>
          填一次接口地址和 API Key 就能用，不需要本机装 Imagora。
          {usingPlugin ? '当前用的是插件内配置。' : '当前用的是本机 Imagora 的配置。'}
        </p>

        <ui.SettingsValueField
          id="imagora-provider-base-url"
          label="接口地址"
          hint="OpenAI 兼容的图片接口根地址，通常以 /v1 结尾，例如 https://api.example.com/v1"
          text={baseUrl}
          placeholder="https://api.example.com/v1"
          disabled={busy}
          onEdit={(text: string) => setBaseUrl(text)}
        />

        <ui.SettingsSecretField
          id="imagora-provider-api-key"
          label="API Key"
          hint="只存在本机 ~/.dsh/imagora/settings.json，不会回传页面，也不会进日志"
          text={apiKey}
          configured={Boolean(provider?.apiKeyConfigured)}
          stateLabel={provider?.apiKeyConfigured ? '已配置（留空则保持不变）' : '未配置'}
          disabled={busy}
          onEdit={(text: string) => setApiKey(text)}
        />

        <ui.SettingsValueField
          id="imagora-provider-model"
          label="模型名"
          hint="上游要求的模型 id，例如 gpt-image-2.5-flare 或 doubao-seedream-5-0-pro-260628"
          text={model}
          placeholder="gpt-image-2.5-flare"
          disabled={busy}
          onEdit={(text: string) => setModel(text)}
        />

        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <ui.Button
            type="button"
            size="sm"
            variant="toolbar"

            disabled={busy}
            onClick={() => void probe()}
          >
            测试连通
          </ui.Button>
          {probeResult ? <span style={{ fontSize: 12, color: 'var(--im-ink-2)' }}>{probeResult}</span> : null}
        </div>

        {probeModels.length ? (
          <div style={{ fontSize: 12, color: 'var(--im-ink-2)', maxHeight: 96, overflow: 'auto' }}>
            {probeModels.slice(0, 40).map(id => (
              <button
                key={id}
                type="button"
                onClick={() => setModel(id)}
                style={{
                  display: 'block',
                  border: 'none',
                  background: 'none',
                  padding: '2px 0',
                  cursor: 'pointer',
                  color: id === model ? 'var(--im-prompt)' : 'var(--im-ink-2)',
                  font: 'inherit',
                  textAlign: 'left',
                }}
              >
                {id}
              </button>
            ))}
          </div>
        ) : null}

        <OutputDirRow config={config} onSaved={onSaved} onFlash={onFlash} />

        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          {usingPlugin ? (
            <ui.Button
              type="button"
              size="sm"
              variant="toolbar"

              disabled={busy}
              onClick={() => void reset()}
            >
              清空并回到 Imagora 配置
            </ui.Button>
          ) : null}
          <ui.Button
            type="button"
            size="sm"
            variant="toolbar"

            disabled={busy}
            onClick={onClose}
          >
            取消
          </ui.Button>
          <ui.Button
            type="button"
            size="sm"

            disabled={busy || !baseUrl.trim()}
            onClick={() => void save()}
          >
            保存
          </ui.Button>
        </div>
      </div>
    </ui.Modal>
  )
}
