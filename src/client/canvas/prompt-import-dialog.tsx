// 粘贴导入：把一整段提示词清单解析成多张提示词卡。
//
// 解析规则来自移植过来的 lib/promptImportFormat.ts（与 Imagora 同一套格式）：
// 按空行/标题切分，`--ar 16:9` 之类的比例标记绑定到同一张卡。
// 这里只做界面：先预览「识别出几张、每张什么比例」，确认后才建卡。
import { useMemo, useState } from 'react'
import { primitives } from '../ui'
import { parsePromptImportFormat, type PromptCardSpec } from '../lib/promptImportFormat'
import type { SizeOption } from '../lib/types'

export interface PromptImportDialogProps {
  sizes: SizeOption[]
  onCancel: () => void
  onConfirm: (cards: PromptCardSpec[]) => void
}

export function PromptImportDialog({ sizes, onCancel, onConfirm }: PromptImportDialogProps) {
  const ui = primitives()
  const [text, setText] = useState('')
  const parsed = useMemo(() => parsePromptImportFormat(text), [text])
  const hasInput = text.trim().length > 0
  const cards = parsed.cards
  const issues = parsed.issues ?? []

  return (
    <ui.Modal open onClose={onCancel} title="粘贴导入提示词">
      <div style={{ display: 'grid', gap: 12, width: 560, maxWidth: '80vw' }}>
        <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.7, color: 'var(--im-ink-3)' }}>
          一张卡一块：标题行 <code>=== 名字 ===</code>，围栏里第一行写 <code>ratio: 3:2</code>，空行之后是提示词正文。
          格式不对的块不会建卡，会在下面标出来。
        </p>

        <textarea
          value={text}
          onChange={event => setText(event.target.value)}
          rows={10}
          spellCheck={false}
          placeholder={
            '=== 秋日通勤包 ===\n```text\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n```\n\n=== 冬日围巾 ===\n```text\nratio: 2:3\n\nwool scarf on linen, morning window light\n```'
          }
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '8px 10px',
            borderRadius: 8,
            border: '1px solid var(--im-line)',
            background: 'var(--im-surface-inset)',
            color: 'var(--im-ink)',
            font: 'inherit',
            fontSize: 12,
            lineHeight: 1.6,
            resize: 'vertical',
          }}
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

        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <ui.Button type="button" size="sm" variant="toolbar" onClick={onCancel}>
            取消
          </ui.Button>
          <ui.Button
            type="button"
            size="sm"

            disabled={!cards.length || issues.length > 0}
            onClick={() => onConfirm(cards)}
          >
            建 {cards.length} 张卡
          </ui.Button>
        </div>
        <span style={{ fontSize: 11, color: 'var(--im-ink-3)' }}>
          尺寸表来自当前配置（{sizes.length} 档）；解析不出比例时用第一档。
        </span>
      </div>
    </ui.Modal>
  )
}
