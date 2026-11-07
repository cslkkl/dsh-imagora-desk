// 画布上的三个对话框：保存工作流 / 加载工作流 / 帮助。
// 都是纯展示 + 回调，不碰画布状态。
//
// 外壳用自家的 ModalShell（canvas/modal-shell.tsx）：四档宽度、头/身/脚三段、
// 内容区自己滚。宿主 ui.Modal 的面板宽度按它自己的内容定，装不下我们这种表单
// （表现是弹窗右边被裁），所以这里全部换成 ModalShell，尺寸交给 size 档。
import { useState } from 'react'
import type { ImagoraConfig } from '../api'
import { ModalShell } from './modal-shell'

export function SaveDialog({ onCancel, onSubmit }: { onCancel: () => void; onSubmit: (name: string) => void }) {
  const [name, setName] = useState(`画布 ${new Date().toISOString().slice(5, 16).replace('T', ' ')}`)
  return (
    <ModalShell
      title="保存工作流"
      subtitle="给这个画布起个名字，之后可以再加载回来。"
      size="sm"
      onClose={onCancel}
      footer={
        <>
          <button type="button" className="im-btn-ghost im-btn-sm" onClick={onCancel}>
            取消
          </button>
          <button
            type="button"
            className="im-btn-primary im-btn-sm"
            disabled={!name.trim()}
            onClick={() => onSubmit(name.trim())}
          >
            保存
          </button>
        </>
      }
    >
      <input
        autoFocus
        value={name}
        aria-label="工作流名称"
        placeholder="给这个画布起个名字"
        className="im-field"
        onChange={event => setName(event.target.value)}
      />
    </ModalShell>
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
    <ModalShell
      title="加载工作流"
      subtitle="选一份已保存的画布继续工作。"
      size="sm"
      onClose={onCancel}
      footer={
        <button type="button" className="im-btn-ghost im-btn-sm" onClick={onCancel}>
          关闭
        </button>
      }
    >
      {workflows.length ? (
        <div style={{ display: 'grid', gap: 2 }}>
          {workflows.map(row => (
            <button
              key={row.name}
              type="button"
              className="im-btn-ghost im-btn-sm"
              style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
              onClick={() => onPick(row.name)}
            >
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.name}</span>
              <span style={{ color: 'var(--im-ink-3)', fontSize: 11, flex: 'none' }}>
                {new Date(row.modified).toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <p style={{ margin: 0, fontSize: 12, color: 'var(--im-ink-3)' }}>还没有保存过的工作流。</p>
      )}
    </ModalShell>
  )
}

const HELP_ROWS: [string, string][] = [
  ['画布', '滚轮缩放 · 左键拖空白平移 · Shift+拖拽框选 · Ctrl/Cmd+点击加选 · 双击图片放大'],
  ['节点', '悬停右侧操作栏 · Del 删除选中'],
  ['连线', '图片/图片组 → 提示词（参考图）；提示词 → 图片（产出）'],
  ['引用', '提示词里写 @图片名 只挑指定图；不写就用全部入边图片'],
  ['运行', '单卡「运行」· 工具栏「全部运行」「运行所选」「取消全部」'],
  ['快捷键', 'Ctrl+A 全选 · Ctrl+Z/Y 撤销恢复 · Ctrl+S 保存 · Delete 删除'],
  ['保存', '命名保存进工作流；画布改动会自动落恢复快照'],
]

export function HelpDialog({ onClose, config }: { onClose: () => void; config: ImagoraConfig | null }) {
  return (
    <ModalShell
      title="操作帮助"
      subtitle="画布、节点、连线与快捷键速查。"
      size="lg"
      onClose={onClose}
      footer={
        <button type="button" className="im-btn-ghost im-btn-sm" onClick={onClose}>
          关闭
        </button>
      }
    >
      <div style={{ display: 'grid', gap: 12 }}>
        <table style={{ width: '100%', fontSize: 12, borderCollapse: 'collapse' }}>
          <tbody>
            {HELP_ROWS.map(([key, value]) => (
              <tr key={key}>
                <td
                  style={{
                    padding: '5px 8px 5px 0',
                    color: 'var(--im-ink-3)',
                    whiteSpace: 'nowrap',
                    verticalAlign: 'top',
                  }}
                >
                  {key}
                </td>
                <td style={{ padding: '5px 0', lineHeight: 1.6 }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {config ? (
          <p style={{ margin: 0, fontSize: 11.5, lineHeight: 1.7, color: 'var(--im-ink-3)' }}>
            配置来源：{config.source === 'plugin' ? '插件内配置' : config.root || '未找到'} · 模型 {config.modelLabel}
            <br />
            结果默认落在 {config.defaultOutputDir}
          </p>
        ) : null}
      </div>
    </ModalShell>
  )
}
