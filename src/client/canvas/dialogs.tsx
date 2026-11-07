// 画布上的三个对话框：保存工作流 / 加载工作流 / 帮助。
// 都是纯展示 + 回调，不碰画布状态。
//
// 外壳用官方 Modal（宿主提供）：焦点陷阱、Esc 关闭、遮罩层顺序都与 DSH 其它面板一致，
// 不要再自己写一层 mask。
import { useState } from 'react'
import { primitives } from '../ui'
import type { ImagoraConfig } from '../api'

export function SaveDialog({ onCancel, onSubmit }: { onCancel: () => void; onSubmit: (name: string) => void }) {
  const ui = primitives()
  const [name, setName] = useState(`画布 ${new Date().toISOString().slice(5, 16).replace('T', ' ')}`)
  return (
    <ui.Modal open onClose={onCancel} title="保存工作流">
      <div style={{ display: 'grid', gap: 12, minWidth: 360 }}>
        <ui.Input
          autoFocus
          value={name}
          aria-label="工作流名称"
          placeholder="给这个画布起个名字"
          onChange={(event: { target: { value: string } }) => setName(event.target.value)}
        />
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <ui.Button type="button" size="sm" variant="toolbar" onClick={onCancel}>
            取消
          </ui.Button>
          <ui.Button
            type="button"
            size="sm"

            disabled={!name.trim()}
            onClick={() => onSubmit(name.trim())}
          >
            保存
          </ui.Button>
        </div>
      </div>
    </ui.Modal>
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
  const ui = primitives()
  return (
    <ui.Modal open onClose={onCancel} title="加载工作流">
      <div style={{ display: 'grid', gap: 10, minWidth: 400 }}>
        {workflows.length ? (
          <div style={{ maxHeight: 300, overflow: 'auto', display: 'grid', gap: 2 }}>
            {workflows.map(row => (
              <ui.Button
                key={row.name}
                type="button"
                size="sm"
                variant="toolbar"
                style={{ justifyContent: 'space-between', display: 'flex' }}
                onClick={() => onPick(row.name)}
              >
                <span>{row.name}</span>
                <span style={{ color: 'var(--im-ink-3)', fontSize: 11 }}>
                  {new Date(row.modified).toLocaleString()}
                </span>
              </ui.Button>
            ))}
          </div>
        ) : (
          <p style={{ margin: 0, fontSize: 12, color: 'var(--im-ink-3)' }}>还没有保存过的工作流。</p>
        )}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ui.Button type="button" size="sm" variant="toolbar" onClick={onCancel}>
            关闭
          </ui.Button>
        </div>
      </div>
    </ui.Modal>
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
  const ui = primitives()
  return (
    <ui.Modal open onClose={onClose} title="自由画布">
      <div style={{ display: 'grid', gap: 12, minWidth: 480 }}>
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
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ui.Button type="button" size="sm" variant="toolbar" onClick={onClose}>
            关闭
          </ui.Button>
        </div>
      </div>
    </ui.Modal>
  )
}
