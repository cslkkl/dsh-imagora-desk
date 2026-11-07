// 粘贴导入：把一整段提示词清单解析成多张提示词卡。
//
// 解析规则来自移植过来的 lib/promptImportFormat.ts（与 Imagora 同一套格式）：
// 按空行/标题切分，`--ar 16:9` 之类的比例标记绑定到同一张卡。
// 这里只做界面：先预览「识别出几张、每张什么比例」，确认后才建卡。
// 外壳与底部行动走 ModalShell（原版是 modal-panel--lg）。
import { useMemo, useState } from 'react'
import { parsePromptImportFormat, type PromptCardSpec } from '../lib/promptImportFormat'
import type { SizeOption } from '../lib/types'
import { ModalShell } from './modal-shell'

export interface PromptImportDialogProps {
  sizes: SizeOption[]
  onCancel: () => void
  onConfirm: (cards: PromptCardSpec[]) => void
}

export function PromptImportDialog({ sizes, onCancel, onConfirm }: PromptImportDialogProps) {
  const [text, setText] = useState('')
  const parsed = useMemo(() => parsePromptImportFormat(text), [text])
  const hasInput = text.trim().length > 0
  const cards = parsed.cards
  const issues = parsed.issues ?? []

  return (
    <ModalShell
      title="粘贴导入提示词"
      subtitle="粘贴模型回复，实时解析成多张提示词卡。"
      size="lg"
      onClose={onCancel}
      footer={
        <>
          <button type="button" className="im-btn-ghost im-btn-sm" onClick={onCancel}>
            取消
          </button>
          <button
            type="button"
            className="im-btn-primary im-btn-sm"
            disabled={!cards.length || issues.length > 0}
            onClick={() => onConfirm(cards)}
          >
            建 {cards.length} 张卡
          </button>
        </>
      }
    >
      <div style={{ display: 'grid', gap: 12 }}>
        <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.7, color: 'var(--im-ink-3)' }}>
          一张卡一块：标题行 <code>=== 名字 ===</code>，围栏里第一行写 <code>ratio: 3:2</code>，空行之后是提示词正文。
          格式不对的块不会建卡，会在下面标出来。
        </p>

        <textarea
          value={text}
          onChange={event => setText(event.target.value)}
          rows={10}
          spellCheck={false}
          aria-label="待导入的提示词文本"
          className="im-field"
          style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
          placeholder={
            '=== 秋日通勤包 ===\n```text\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n```\n\n=== 冬日围巾 ===\n```text\nratio: 2:3\n\nwool scarf on linen, morning window light\n```'
          }
        />

        {hasInput ? (
          <div style={{ fontSize: 12, display: 'grid', gap: 4 }}>
            <strong style={{ fontWeight: 600 }}>
              识别到 {cards.length} 张卡{issues.length ? `，${issues.length} 处需要修正` : ''}
            </strong>
            {cards.slice(0, 8).map((card, index) => (
              <div key={`${index}-${card.title ?? ''}`} style={{ color: 'var(--im-ink-2)' }}>
                {index + 1}. {card.title ? `${card.title} · ` : ''}
                {card.ratio ? `比例 ${card.ratio}` : '比例按默认'}
                {card.prompt ? ` · ${card.prompt.slice(0, 46)}${card.prompt.length > 46 ? '…' : ''}` : ' · 提示词为空'}
              </div>
            ))}
            {cards.length > 8 ? <div style={{ color: 'var(--im-ink-3)' }}>…还有 {cards.length - 8} 张</div> : null}
            {issues.slice(0, 5).map((issue, index) => (
              <div key={`issue-${index}`} style={{ color: 'var(--im-danger)' }}>
                {issue.title ? `「${issue.title}」：` : ''}
                {issue.message}
              </div>
            ))}
          </div>
        ) : null}

        <span style={{ fontSize: 11, color: 'var(--im-ink-3)' }}>
          尺寸表来自当前配置（{sizes.length} 档）；解析不出比例时用第一档。
        </span>
      </div>
    </ModalShell>
  )
}
