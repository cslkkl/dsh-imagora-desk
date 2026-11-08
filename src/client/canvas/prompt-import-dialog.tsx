// 粘贴导入：把一整段提示词清单解析成多张提示词卡。
//
// 解析规则来自移植过来的 lib/promptImportFormat.ts（与 Imagora 同一套格式）：
// 按空行/标题切分，`--ar 16:9` 之类的比例标记绑定到同一张卡。
// 这里只做界面：先预览「识别出几张、每张什么比例」，确认后才建卡。
//
// 版面照搬原版 PromptImportModal：正文 textarea 在上，下面一条**可滚的预览区**
// （识别汇总 → 逐张卡片 → 问题），预览卡与画布上的提示词卡同源。
import { useMemo, useRef, useState } from 'react'
import { parsePromptImportFormat, resolveCardSize, type PromptCardSpec } from '../lib/promptImportFormat'
import type { SizeOption } from '../lib/types'
import { ModalShell } from './modal-shell'

export interface PromptImportDialogProps {
  sizes: SizeOption[]
  onCancel: () => void
  onConfirm: (cards: PromptCardSpec[]) => void
}

export function PromptImportDialog({ sizes, onCancel, onConfirm }: PromptImportDialogProps) {
  const [text, setText] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const parsed = useMemo(() => parsePromptImportFormat(text), [text])
  const hasInput = text.trim().length > 0
  const cards = parsed.cards
  const issues = parsed.issues ?? []

  return (
    <ModalShell
      title="粘贴导入提示词卡片"
      subtitle="粘贴模型回复。每张卡片由标题、文本围栏与首行比例组成。"
      size="lg"
      onClose={onCancel}
      initialFocusRef={inputRef}
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
            确认建卡（{cards.length}）
          </button>
        </>
      }
    >
      <div style={{ display: 'grid', gap: 10 }}>
        <textarea
          ref={inputRef}
          value={text}
          onChange={event => setText(event.target.value)}
          rows={10}
          spellCheck={false}
          aria-label="待导入的提示词文本"
          className="im-field nodrag nowheel"
          style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 12 }}
          placeholder={
            '=== 秋日通勤包 ===\n```text\nratio: 3:2\n\nlinen tote bag on warm concrete, soft top light\n```\n\n=== 冬日围巾 ===\n```text\nratio: 2:3\n\nwool scarf on linen, morning window light\n```'
          }
        />

        <div className="im-import-preview" role="status" aria-live="polite">
          {hasInput ? (
            <>
              <div className="im-import-summary">
                <span>识别 {cards.length} 张卡片</span>
                {issues.length ? <span className="im-import-summary-error">发现 {issues.length} 个问题</span> : null}
              </div>
              {cards.map((card, index) => {
                // 与建卡时同一套解析：预览里显示的就是这张卡最终会拿到的尺寸
                const size = resolveCardSize(card.ratio ?? '1:1', sizes)
                return (
                  <article key={`${index}-${card.title ?? ''}`} className="im-import-card">
                    <div className="im-import-card-meta">
                      <strong>{card.title || `第 ${index + 1} 张`}</strong>
                      <span>{card.ratio ? card.ratio : '默认比例'}</span>
                      <span>{size.value}</span>
                      {size.fallback ? <span className="im-import-card-fallback">尺寸回退</span> : null}
                    </div>
                    <p className="im-import-card-text" title={card.prompt || ''}>
                      {card.prompt || '（提示词为空）'}
                    </p>
                  </article>
                )
              })}
              {issues.map((issue, index) => (
                <div key={`issue-${index}`} className="im-import-issue">
                  {issue.title ? `「${issue.title}」：` : '当前内容：'}
                  {issue.message}
                </div>
              ))}
            </>
          ) : (
            <div className="im-import-summary">粘贴内容后将在这里实时预览</div>
          )}
        </div>

        <p className="im-field-hint">
          一张卡一块：标题行 <code>=== 名字 ===</code>，围栏里第一行写 <code>ratio: 3:2</code>，空行之后是提示词正文。
          尺寸表来自当前配置（{sizes.length} 档）；解析不出比例时用第一档。
        </p>
      </div>
    </ModalShell>
  )
}
