// 画布上的三个对话框：保存工作流 / 加载工作流 / 帮助。
// 都是纯展示 + 回调，不碰画布状态。
//
// 外壳用自家的 ModalShell（canvas/modal-shell.tsx）：四档宽度、头/身/脚三段、
// 内容区自己滚。宿主 ui.Modal 的面板宽度按它自己的内容定，装不下我们这种表单
// （表现是弹窗右边被裁），所以这里全部换成 ModalShell，尺寸交给 size 档。
import { Fragment, useState } from 'react'
import type { ImagoraConfig } from '../api'
import { ModalShell } from './modal-shell'

export function SaveDialog({
  workflows = [],
  onCancel,
  onSubmit,
  imagoraRoot,
}: {
  /** 已有工作流：原版保存弹窗会列出来，点一下就把名字填进去（同名 = 覆盖） */
  workflows?: { name: string; modified: string }[]
  onCancel: () => void
  onSubmit: (name: string) => void
  /** 已配置的 imagora 目录：存到哪儿要写清楚，别让人猜 */
  imagoraRoot?: string
}) {
  const [name, setName] = useState(`画布 ${new Date().toISOString().slice(5, 16).replace('T', ' ')}`)
  /** 待确认覆盖的名字：原版是同名覆盖前先确认一次，避免手滑盖掉别人的画布 */
  const [overwrite, setOverwrite] = useState<string | null>(null)

  const trimmed = name.trim()
  const collides = workflows.some(row => row.name === trimmed)

  const submit = () => {
    if (!trimmed) return
    if (collides && overwrite !== trimmed) {
      setOverwrite(trimmed)
      return
    }
    onSubmit(trimmed)
  }

  if (overwrite) {
    return (
      <ModalShell
        title="覆盖已存在的工作流？"
        subtitle={`「${overwrite}」已经存在，保存会覆盖掉它。`}
        size="sm"
        onClose={() => setOverwrite(null)}
        footer={
          <>
            <button type="button" className="im-btn-ghost im-btn-sm" onClick={() => setOverwrite(null)}>
              返回改名
            </button>
            <button type="button" className="im-btn-danger im-btn-sm" onClick={() => onSubmit(overwrite)}>
              覆盖保存
            </button>
          </>
        }
      >
        <p className="im-modal-note">覆盖后旧的那份就找不回来了；想保留就先返回改个名字。</p>
      </ModalShell>
    )
  }

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
          <button type="button" className="im-btn-primary im-btn-sm" disabled={!trimmed} onClick={submit}>
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
        onKeyDown={event => {
          if (event.key === 'Enter') submit()
        }}
      />
      {/* 存到哪儿：原版的占位符里就写着「存到 output/workflows/」。
          插件这边的落点会随「有没有设 imagora 目录」变，所以不能写死一句。 */}
      <p className="im-modal-note" style={{ marginTop: 8 }}>
        存到 {imagoraRoot ? `${imagoraRoot}\\output\\workflows` : '插件自己的数据目录（未设置 imagora 目录）'}
        {imagoraRoot ? '（与原版共用一份）' : ''}
      </p>
      {/* 已有工作流：点一下填名字。原版保存弹窗就是这块列表（WorkflowModals.tsx:46-60） */}
      {workflows.length ? (
        <>
          <p className="im-modal-note" style={{ marginTop: 12 }}>
            或者覆盖一个已有的（点一下填名字）
          </p>
          <div className="im-pick-list">
            {workflows.map(row => (
              <button key={row.name} type="button" className="im-pick-row" onClick={() => setName(row.name)}>
                <span className="im-pick-name">{row.name}</span>
                <span className="im-pick-meta">{row.modified}</span>
              </button>
            ))}
          </div>
        </>
      ) : null}
    </ModalShell>
  )
}

export function LoadDialog({
  workflows,
  onCancel,
  onPick,
  imagoraRoot,
}: {
  workflows: { name: string; modified: string }[]
  onCancel: () => void
  onPick: (name: string) => void
  /** 已配置的 imagora 目录：列表为空时要说清楚「去哪个目录找过了」 */
  imagoraRoot?: string
}) {
  const where = imagoraRoot ? `${imagoraRoot}\\output\\workflows` : '插件自己的数据目录（未设置 imagora 目录）'
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
        // 空列表必须自证「读过哪里」：用户报过「点开里面什么都没有」，
        // 真正的原因是读错了目录（没跟着设置里的 imagora 根走），不是真没有。
        <>
          <p style={{ margin: 0, fontSize: 12 }}>这个目录里还没有工作流。</p>
          <p className="im-modal-note">读的是 {where}</p>
        </>
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
      {/* 两列 grid，不 用 table：表格的 key 列宽度随内容变，几行之间的冒号对不齐。
          原版是 grid-cols-[3.25rem_1fr] gap-3，这里同理。 */}
      <div style={{ display: 'grid', gap: 12 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '3.25rem 1fr', gap: 12, fontSize: 12 }}>
          {HELP_ROWS.map(([key, value]) => (
            <Fragment key={key}>
              <span style={{ color: 'var(--im-ink-3)', fontWeight: 600 }}>{key}</span>
              <span style={{ lineHeight: 1.6 }}>{value}</span>
            </Fragment>
          ))}
        </div>
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
