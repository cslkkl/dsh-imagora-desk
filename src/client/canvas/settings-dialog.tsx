// 设置弹窗：照搬 Imagora 的 ConfigEditorModal（frontend/src/App.tsx 里的 ApiSettingsModal）。
//
// 原版的结构是**两个下拉 + 一张只读事实表**，不是一堆输入框：
//   配置来源（Select）→ 默认模型（Select）→「生效中」规格表（只读）
// 「生效中」那几条（来源 / 模型 / 密钥有没有 / 接口地址）是**事实**，改文件才动它，
// 列在这里只用来对照「保存之后会不会变」—— 做成输入框会让人以为能在那儿改。
//
// 与本项目的必要差异（数据模型不同，不是抄漏）：
//   - 原版的来源与模型都写进 imagora 的 config.json；插件还有一层**自己的 provider**
//     （settings.json 里的 baseUrl/apiKey），它优先级高于 imagora 来源。
//     所以多出一段「插件内接口」：那是「下载后填 key 即可用」那条路的入口，
//     原版没有这个需求。
//   - 插件里没有「待重启」这个概念：写入即生效（host 每次请求都重读配置），
//     所以原版那条 chip--pending 在这里换成一句「保存后立即生效」。
//   - 原版不恢复三页签（使用中 / 个人配置 / 我的接口）—— 维护者明确要求。
import { useState } from 'react'
import { probeProvider, saveProvider, setProfile, type ImagoraConfig } from '../api'
import { errMessage } from '../lib/format'
import { Select } from '../select'
import { ModalShell } from './modal-shell'
import { OutputDirRow } from './output-dir-row'
import { ImagoraRootRow } from './imagora-root-row'

export interface SettingsDialogProps {
  config: ImagoraConfig | null
  onClose: () => void
  onSaved: (next: ImagoraConfig) => void
  onFlash: (line: string) => void
}

/** 只读「键 → 值」一行（原版 .spec-list__row） */
function SpecRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="im-spec-row">
      <span className="im-spec-key">{label}</span>
      <span className={`im-spec-val${mono ? ' im-spec-mono' : ''}`} title={value}>
        {value}
      </span>
    </div>
  )
}

export function SettingsDialog({ config, onClose, onSaved, onFlash }: SettingsDialogProps) {
  const provider = config?.provider
  const usingPlugin = config?.source === 'plugin'

  const [baseUrl, setBaseUrl] = useState(provider?.baseUrl ?? '')
  const [model, setModel] = useState(provider?.model ?? config?.model ?? '')
  const [apiKey, setApiKey] = useState('')
  const [profileDraft, setProfileDraft] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [probeResult, setProbeResult] = useState<string | null>(null)
  const [probeModels, setProbeModels] = useState<string[]>([])

  const profiles = config?.profiles ?? []
  const activeProfile = usingPlugin ? 'plugin' : (config?.profile ?? '')

  const profileOptions = [
    // 「插件内配置」永远可选：它是本插件自己的那一层，填好下面两项就接管
    { value: 'plugin', label: '插件内配置' },
    ...profiles.map(row => ({ value: row.name, label: row.label || row.name })),
  ]

  /** 模型清单：插件内配置时上游一般不报模型，允许自由输入 */
  const modelOptions = (config?.models ?? []).map(row => ({ value: row.id, label: row.label || row.id }))

  const picked = profileDraft ?? activeProfile
  /** 选了 Imagora 来源、但插件内接口正压着它 —— 保存也不会生效，得先说清楚 */
  const blockedByProvider = usingPlugin && picked !== 'plugin'

  const save = async () => {
    setBusy(true)
    try {
      let next: ImagoraConfig | null = null

      // 1) 来源：只有选的是 imagora 的 profile、且没被插件内配置压住时才切
      if (!blockedByProvider && !usingPlugin && picked && picked !== config?.profile) {
        next = await setProfile(picked)
      }

      // 2) 插件内接口：三个字段任一有值才写（空串在 host 侧表示「不修改」）
      const wantProvider =
        baseUrl.trim() !== (provider?.baseUrl ?? '') || model.trim() !== (provider?.model ?? '') || apiKey.trim()
      if (wantProvider) {
        next = await saveProvider({
          baseUrl: baseUrl.trim(),
          model: model.trim(),
          apiKey: apiKey.trim(),
        })
      }

      if (next) onSaved(next)
      setApiKey('')
      setProfileDraft(null)
      onFlash(wantProvider ? '已保存，立即生效' : '已保存设置')
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
      setProfileDraft(null)
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

  const canSave = !busy && (baseUrl.trim().length > 0 || (!usingPlugin && picked !== activeProfile))

  return (
    <ModalShell
      title="画布设置"
      subtitle="选一套来源与模型。接口地址与密钥只留在本机，不上屏、也不进日志。"
      size="lg"
      onClose={onClose}
      footer={
        <>
          {usingPlugin ? (
            <button type="button" className="im-btn-ghost im-btn-sm" disabled={busy} onClick={() => void reset()}>
              清空插件内配置
            </button>
          ) : null}
          <button type="button" className="im-btn-ghost im-btn-sm" disabled={busy} onClick={onClose}>
            取消
          </button>
          <button type="button" className="im-btn-primary im-btn-sm" disabled={!canSave} onClick={() => void save()}>
            保存
          </button>
        </>
      }
    >
      <div style={{ display: 'grid', gap: 16 }}>
        {/* ---------- 两个下拉（原版前两段） ---------- */}
        <div>
          <label className="im-label" htmlFor="imagora-profile">
            配置来源
          </label>
          <Select
            id="imagora-profile"
            className="is-block"
            options={profileOptions}
            value={picked}
            searchable="auto"
            onChange={value => setProfileDraft(value)}
            title="换来源 = 换接口地址、模型与尺寸价目表"
          />
          <p className="im-field-hint">
            {picked === 'plugin'
              ? '用插件自己的接口与密钥，不依赖本机 Imagora。填好下面两项即可。'
              : (profiles.find(row => row.name === picked)?.label ?? '') || '换来源 = 换地址、模型与尺寸价目表'}
          </p>
        </div>

        <div>
          <label className="im-label" htmlFor="imagora-model-select">
            默认模型
          </label>
          <Select
            id="imagora-model-select"
            className="is-block"
            options={modelOptions}
            value={model}
            searchable
            allowCustom
            emptyLabel="这个来源没报模型清单，直接打字填模型 id"
            onChange={value => setModel(value)}
            onCreateCustom={value => setModel(value)}
            title="上游要求的模型 id，例如 gpt-image-2.5-flare 或 doubao-seedream-5-0-pro-260628"
          />
          <p className="im-field-hint">
            {(config?.models ?? []).find(row => row.id === model)?.note || '该来源下的可选模型'}
          </p>
        </div>

        {/* ---------- 插件内接口：本项目独有的一段（原版没有 provider 这层） ---------- */}
        <div className="im-section">
          <span className="im-section-label">插件内接口</span>
          <div style={{ display: 'grid', gap: 12 }}>
            <div>
              <label className="im-label" htmlFor="imagora-provider-base-url">
                接口地址
              </label>
              <input
                id="imagora-provider-base-url"
                className="im-field"
                value={baseUrl}
                placeholder="https://api.example.com/v1"
                disabled={busy}
                onChange={event => setBaseUrl(event.target.value)}
              />
              <p className="im-field-hint">
                OpenAI 兼容的图片接口根地址，通常以 /v1 结尾。填了它就优先于上面的 Imagora 来源。
              </p>
            </div>

            <div>
              <label className="im-label" htmlFor="imagora-provider-api-key">
                API Key
                <span className={`im-field-state is-${provider?.apiKeyConfigured ? 'ok' : 'warn'}`}>
                  {provider?.apiKeyConfigured ? '已配置（留空则保持不变）' : '未配置'}
                </span>
              </label>
              <input
                id="imagora-provider-api-key"
                className="im-field"
                type="password"
                value={apiKey}
                autoComplete="off"
                placeholder={provider?.apiKeyConfigured ? '留空则不修改' : '粘贴 API Key'}
                disabled={busy}
                onChange={event => setApiKey(event.target.value)}
              />
              <p className="im-field-hint">只存在本机 settings.json，不会回传页面，也不会进日志。</p>
            </div>

            <div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <button type="button" className="im-btn-ghost im-btn-sm" disabled={busy} onClick={() => void probe()}>
                  测试连通
                </button>
                {probeResult ? <span style={{ fontSize: 12, color: 'var(--im-ink-2)' }}>{probeResult}</span> : null}
              </div>
              {probeModels.length ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
                  {probeModels.slice(0, 24).map(id => (
                    <button
                      key={id}
                      type="button"
                      className={`im-chip im-chip--action${id === model ? ' is-brand' : ''}`}
                      onClick={() => setModel(id)}
                    >
                      {id}
                    </button>
                  ))}
                  {probeModels.length > 24 ? (
                    <span className="im-muted">…还有 {probeModels.length - 24} 个</span>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* ---------- 生效中：只读事实（原版第三段） ---------- */}
        <div className="im-section">
          <span className="im-section-label">生效中</span>
          <div className="im-spec-list is-roomy">
            <SpecRow label="来源" value={config?.profileLabel || (usingPlugin ? '插件内配置' : '—')} />
            <SpecRow label="模型" value={config?.modelLabel || config?.model || '—'} />
            <SpecRow label="API Key" value={provider?.apiKeyConfigured ? '● 已设置' : '○ 未配置'} />
            {provider?.baseUrl ? <SpecRow label="接口地址" value={provider.baseUrl} mono /> : null}
            {config?.imagoraRoot ? <SpecRow label="Imagora 目录" value={config.imagoraRoot} mono /> : null}
          </div>
          <p className="im-pending-line" style={{ marginTop: 8 }}>
            保存后立即生效（host 每次请求都重读配置，不像原版要重启工作台）。
          </p>
          {blockedByProvider ? (
            <p className="im-pending-line" style={{ marginTop: 6 }}>
              <span className="im-chip is-brand">被压住</span>
              当前生效的是插件内接口；要让「{profiles.find(row => row.name === picked)?.label ?? picked}
              」生效，先清空插件内配置。
            </p>
          ) : null}
        </div>

        <ImagoraRootRow config={config} onSaved={onSaved} onFlash={onFlash} />
        <OutputDirRow config={config} onSaved={onSaved} onFlash={onFlash} />
      </div>
    </ModalShell>
  )
}
