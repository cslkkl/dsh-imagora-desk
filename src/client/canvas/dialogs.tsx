// 画布上的三个对话框：保存工作流 / 加载工作流 / 帮助。
// 都是纯展示 + 回调，不碰画布状态。
import { useState } from 'react'
import { Icon } from '../icons'
import type { ImagoraConfig } from '../api'

export function SaveDialog({ onCancel, onSubmit }: { onCancel: () => void; onSubmit: (name: string) => void }) {
  const [name, setName] = useState(`画布 ${new Date().toISOString().slice(5, 16).replace('T', ' ')}`)
  return (
    <div className="im-modal-mask" onClick={onCancel}>
      <div className="im-modal" onClick={event => event.stopPropagation()}>
        <h3>保存工作流</h3>
        <input className="im-field" autoFocus value={name} onChange={event => setName(event.target.value)} />
        <div className="im-modal-actions" style={{ marginTop: 12 }}>
          <button type="button" className="im-btn" onClick={onCancel}>
            取消
          </button>
          <button type="button" className="im-btn is-primary" disabled={!name.trim()} onClick={() => onSubmit(name.trim())}>
            保存
          </button>
        </div>
      </div>
    </div>
  )
}

export function LoadDialog({
  workflows,
  onCancel,
  onPick,
}: {
  workflows: { name: string; modified: string }[]
  onCancel: () => void
  onPick: (name: string) => void
}) {
  return (
    <div className="im-modal-mask" onClick={onCancel}>
      <div className="im-modal" onClick={event => event.stopPropagation()}>
        <h3>加载工作流</h3>
        {workflows.length ? (
          <div className="im-modal-list">
            {workflows.map(row => (
              <div key={row.name} className="im-modal-row" onClick={() => onPick(row.name)}>
                <span>{row.name}</span>
                <span className="im-muted" style={{ fontSize: 11 }}>
                  {new Date(row.modified).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="im-muted" style={{ fontSize: 12 }}>
            还没有保存过的工作流。
          </p>
        )}
        <div className="im-modal-actions">
          <button type="button" className="im-btn" onClick={onCancel}>
            关闭
          </button>
        </div>
      </div>
    </div>
  )
}

const HELP_ROWS: [string, string][] = [
  ['画布', '滚轮缩放 · 右键或中键拖拽平移 · 空白拖拽框选 · 双击图片放大'],
  ['节点', '悬停右侧操作栏 · Del 删除选中'],
  ['连线', '图片/图片组 → 提示词（参考图）；提示词 → 图片（产出）'],
  ['引用', '提示词里写 @图片名 只挑指定图；不写就用全部入边图片'],
  ['运行', '单卡「运行」· 工具栏「全部运行」「运行所选」「取消全部」'],
  ['保存', '命名保存进工作流；画布改动会自动落恢复快照'],
]

export function HelpDialog({ onClose, config }: { onClose: () => void; config: ImagoraConfig | null }) {
  return (
    <div className="im-modal-mask" onClick={onClose}>
      <div className="im-modal" style={{ width: 520 }} onClick={event => event.stopPropagation()}>
        <h3>自由画布</h3>
        <table style={{ width: '100%', fontSize: 12, borderCollapse: 'collapse' }}>
          <tbody>
            {HELP_ROWS.map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '5px 8px 5px 0', color: 'var(--im-ink-3)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>{key}</td>
                <td style={{ padding: '5px 0', lineHeight: 1.6 }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {config ? (
          <p className="im-muted" style={{ fontSize: 11.5, marginTop: 10, lineHeight: 1.7 }}>
            配置来源：{config.root || '未找到'} · profile「{config.profileLabel || config.profile}」· 模型 {config.modelLabel}
            <br />
            结果默认落在 {config.defaultOutputDir}
          </p>
        ) : null}
        <div className="im-modal-actions" style={{ marginTop: 12 }}>
          <button type="button" className="im-btn" onClick={onClose}>
            关闭
          </button>
        </div>
      </div>
    </div>
  )
}

export function CloseIcon() {
  return <Icon name="close" size={12} />
}
