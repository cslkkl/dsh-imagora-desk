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
import { useT } from '../i18n'

export interface PromptImportDialogProps {
  sizes: SizeOption[]
  onCancel: () => void
  onConfirm: (cards: PromptCardSpec[]) => void
}

export function PromptImportDialog({ sizes, onCancel, onConfirm }: PromptImportDialogProps) {
  const t = useT()
  const [text, setText] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const parsed = useMemo(() => parsePromptImportFormat(text), [text])
  const hasInput = text.trim().length > 0
  const cards = parsed.cards
  const issues = parsed.issues ?? []

  return (
    <ModalShell
      title={t('import.title')}
      subtitle={t('import.subtitle')}
      size="lg"
      onClose={onCancel}
      initialFocusRef={inputRef}
      footer={
        <>
          <button type="button" className="im-btn-ghost im-btn-sm" onClick={onCancel}>
            {t('common.cancel')}
          </button>
          <button
            type="button"
            className="im-btn-primary im-btn-sm"
            disabled={!cards.length || issues.length > 0}
            onClick={() => onConfirm(cards)}
          >
            {t('import.confirm', { count: cards.length })}
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
          aria-label={t('import.aria')}
          className="im-field nodrag nowheel"
          style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 12 }}
          placeholder={t('import.placeholder')}
        />

        <div className="im-import-preview" role="status" aria-live="polite">
          {hasInput ? (
            <>
              <div className="im-import-summary">
                <span>{t('import.summary', { count: cards.length })}</span>
                {issues.length ? (
                  <span className="im-import-summary-error">{t('import.summaryIssues', { count: issues.length })}</span>
                ) : null}
              </div>
              {cards.map((card, index) => {
                // 与建卡时同一套解析：预览里显示的就是这张卡最终会拿到的尺寸
                const size = resolveCardSize(card.ratio ?? '1:1', sizes)
                return (
                  <article key={`${index}-${card.title ?? ''}`} className="im-import-card">
                    <div className="im-import-card-meta">
                      <strong>{card.title || t('import.card.untitled', { index: index + 1 })}</strong>
                      <span>{card.ratio ? card.ratio : t('import.card.defaultRatio')}</span>
                      <span>{size.value}</span>
                      {size.fallback ? (
                        <span className="im-import-card-fallback">{t('import.card.fallback')}</span>
                      ) : null}
                    </div>
                    <p className="im-import-card-text" title={card.prompt || ''}>
                      {card.prompt || t('import.card.empty')}
                    </p>
                  </article>
                )
              })}
              {issues.map((issue, index) => (
                // 不在这里补「标题」前缀：lib/promptImportFormat 的 message 已经把标题写进去了
                // （例如「坏卡」提示词正文为空）。再包一层会变成「坏卡」：「坏卡」…
                <div key={`issue-${index}`} className="im-import-issue">
                  {issue.message}
                </div>
              ))}
            </>
          ) : (
            <div className="im-import-summary">{t('import.waiting')}</div>
          )}
        </div>

        <p className="im-field-hint">{t('import.hint', { count: sizes.length })}</p>
      </div>
    </ModalShell>
  )
}
