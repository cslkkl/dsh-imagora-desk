// 设置弹窗里的「默认输出路径」一段：与接口地址/密钥分开一块，
// 因为它改的是文件落点，跟出图能不能成没关系。
import { useState } from 'react'
import { revealPath, setOutputDir, type ImagoraConfig } from '../api'
import { errMessage } from '../lib/format'
import { primitives } from '../ui'

export interface OutputDirRowProps {
  config: ImagoraConfig | null
  onSaved: (next: ImagoraConfig) => void
  onFlash: (line: string) => void
}

export function OutputDirRow({ config, onSaved, onFlash }: OutputDirRowProps) {
  const ui = primitives()
  const [draft, setDraft] = useState('')
  const [busy, setBusy] = useState(false)
  const current = config?.defaultOutputDir ?? ''

  const apply = async (value: string) => {
    setBusy(true)
    try {
      const next = await setOutputDir(value)
      onSaved(next)
      setDraft('')
      onFlash(value ? '默认输出路径已更新' : '已回到默认输出目录')
    } catch (error) {
      onFlash(`设置失败：${errMessage(error)}`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div style={{ display: 'grid', gap: 8, paddingTop: 4, borderTop: '1px solid var(--im-line)' }}>
      <span style={{ fontSize: 12, fontWeight: 600 }}>默认输出路径</span>
      <ui.SettingsValueField
        id="imagora-output-dir"
        label="图片落盘目录"
        hint={`留空则用 ${current || '来源根目录下的 output'}；已保存的值会一直生效`}
        text={draft === '' ? current : draft}
        placeholder="留空 = 用来源根目录下的 output"
        disabled={busy}
        onEdit={(text: string) => setDraft(text)}
      />
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <ui.Button type="button" size="sm" variant="toolbar" disabled={busy} onClick={() => void revealPath(current)}>
          打开目录
        </ui.Button>
        <ui.Button
          type="button"
          size="sm"
          disabled={busy || !draft.trim() || draft.trim() === current}
          onClick={() => void apply(draft.trim())}
        >
          设为默认
        </ui.Button>
        <ui.Button type="button" size="sm" variant="toolbar" disabled={busy} onClick={() => void apply('')}>
          回到默认
        </ui.Button>
      </div>
    </div>
  )
}
