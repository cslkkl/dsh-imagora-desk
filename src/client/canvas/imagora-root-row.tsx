// 设置里的「目录指针」一段：把 imagora 目录与输出目录都指到现有的那个文件夹，
// 一份数据两边共用 —— 不复制、不建 junction。
//
// 两个路径都靠宿主弹系统文件夹对话框来选：浏览器侧的 <input webkitdirectory>
// 只能拿到相对名，拿不到 `D:\ProjectSomething\imagora` 这种绝对路径。
// 手填也保留：远程/无桌面会话时对话框弹不出来，这时仍能粘贴路径。
import { useState } from 'react'
import { pickFolder, revealPath, setImagoraRoot, setOutputDir, type ImagoraConfig } from '../api'
import { errMessage } from '../lib/format'

export interface ImagoraRootRowProps {
  config: ImagoraConfig | null
  onSaved: (next: ImagoraConfig) => void
  onFlash: (line: string) => void
}

export function ImagoraRootRow({ config, onSaved, onFlash }: ImagoraRootRowProps) {
  const [rootDraft, setRootDraft] = useState('')
  const [outDraft, setOutDraft] = useState('')
  const [busy, setBusy] = useState(false)

  const currentRoot = config?.imagoraRoot ?? ''
  const currentOut = config?.outputDirOverride ?? ''
  const effectiveOut = config?.defaultOutputDir ?? ''

  /** 共用一套「先弹框、拿到路径就直接保存」的流程：少一次点击。 */
  const chooseAndSave = async (kind: 'root' | 'output') => {
    setBusy(true)
    try {
      const picked = await pickFolder({
        title: kind === 'root' ? '选择 Imagora 目录（含 config.json）' : '选择图片输出目录',
        startAt: kind === 'root' ? currentRoot : effectiveOut,
      })
      if (!picked.ok) {
        if (picked.reason === 'cancelled') return
        onFlash(
          picked.reason === 'unsupported'
            ? '这台机器不支持弹目录对话框，直接填路径'
            : `没弹出目录对话框：${picked.reason || '未知原因'}`,
        )
        return
      }
      const next = kind === 'root' ? await setImagoraRoot(picked.path || '') : await setOutputDir(picked.path || '')
      onSaved(next)
      if (kind === 'root') setRootDraft('')
      else setOutDraft('')
      onFlash(kind === 'root' ? '已指向该 Imagora 目录' : '默认输出路径已更新')
    } catch (error) {
      onFlash(`设置失败：${errMessage(error)}`)
    } finally {
      setBusy(false)
    }
  }

  const saveManual = async (kind: 'root' | 'output', value: string) => {
    setBusy(true)
    try {
      const next = kind === 'root' ? await setImagoraRoot(value) : await setOutputDir(value)
      onSaved(next)
      if (kind === 'root') setRootDraft('')
      else setOutDraft('')
      onFlash(value ? '已保存' : '已清空，回到默认')
    } catch (error) {
      onFlash(`设置失败：${errMessage(error)}`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="im-fieldset">
      <div>
        <label className="im-label" htmlFor="imagora-root">
          Imagora 目录
        </label>
        <input
          id="imagora-root"
          className="im-field"
          value={rootDraft === '' ? currentRoot : rootDraft}
          placeholder="例如 D:\ProjectSomething\imagora（含 config.json 与 .env）"
          disabled={busy}
          onChange={event => setRootDraft(event.target.value)}
        />
        <p className="im-field-hint">
          指向本机 Imagora 目录后，接口地址、密钥、工作流、生成历史都直接用那一份，不复制。
          留空则只用插件自己的数据目录。
        </p>
        <div className="im-field-actions">
          <button
            type="button"
            className="im-btn-primary im-btn-sm"
            disabled={busy}
            onClick={() => void chooseAndSave('root')}
          >
            选择目录…
          </button>
          <button
            type="button"
            className="im-btn-ghost im-btn-sm"
            disabled={busy || !rootDraft.trim() || rootDraft.trim() === currentRoot}
            onClick={() => void saveManual('root', rootDraft.trim())}
          >
            保存手填路径
          </button>
          <button
            type="button"
            className="im-btn-ghost im-btn-sm"
            disabled={busy || !currentRoot}
            onClick={() => void saveManual('root', '')}
          >
            不共享
          </button>
        </div>
      </div>

      <div>
        <label className="im-label" htmlFor="imagora-output-override">
          图片输出目录
        </label>
        <input
          id="imagora-output-override"
          className="im-field"
          value={outDraft === '' ? currentOut : outDraft}
          placeholder="留空 = 跟随上面的 Imagora 目录（<该目录>/output）"
          disabled={busy}
          onChange={event => setOutDraft(event.target.value)}
        />
        <p className="im-field-hint">
          当前生效：{effectiveOut || '（未确定）'}
          {currentOut ? '' : '（来自上面那个 Imagora 目录）'}
        </p>
        <div className="im-field-actions">
          <button
            type="button"
            className="im-btn-primary im-btn-sm"
            disabled={busy}
            onClick={() => void chooseAndSave('output')}
          >
            选择目录…
          </button>
          <button
            type="button"
            className="im-btn-ghost im-btn-sm"
            disabled={busy || !outDraft.trim() || outDraft.trim() === currentOut}
            onClick={() => void saveManual('output', outDraft.trim())}
          >
            保存手填路径
          </button>
          <button
            type="button"
            className="im-btn-ghost im-btn-sm"
            disabled={busy}
            onClick={() => void revealPath(effectiveOut)}
          >
            打开目录
          </button>
          <button
            type="button"
            className="im-btn-ghost im-btn-sm"
            disabled={busy || !currentOut}
            onClick={() => void saveManual('output', '')}
          >
            跟随 Imagora 目录
          </button>
        </div>
      </div>
    </div>
  )
}
