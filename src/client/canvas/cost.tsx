// 成本看板：把每张提示词卡累计的 cost 加起来，显示「这张画布花了多少」。
//
// 数不加到别的地方去：卡上记多少，这里就加多少。删掉卡，账自然跟着减——
// 不存在「节点没了账还在」的错位。
//
// 预算闸门：设一个上限，花到上限就不再放行新任务。上限存在本机设置里
// （~/.dsh/imagora/settings.json），刷新页面仍然生效。
import { useMemo } from 'react'
import type { WorkflowNode } from '../lib/types'
import { useT } from '../i18n'
import type { Translate } from '../locales'

export interface CostSummary {
  /** 本画布累计花费（元） */
  total: number
  /** 已出图张数 */
  images: number
  /** 花过钱的卡片数 */
  cards: number
}

export function summarizeCost(nodes: readonly WorkflowNode[]): CostSummary {
  let total = 0
  let images = 0
  let cards = 0
  for (const node of nodes) {
    if (node.type !== 'prompt') continue
    const cost = Number(node.data?.cost ?? 0)
    if (cost > 0) {
      total += cost
      cards += 1
    }
    images += Number(node.data?.resultCount ?? 0)
  }
  return { total, images, cards }
}

/** 预算是否已经用尽。budget <= 0 表示没设上限。 */
export function budgetExhausted(summary: CostSummary, budget: number): boolean {
  if (!Number.isFinite(budget) || budget <= 0) return false
  return summary.total >= budget
}

export function useCostSummary(nodes: readonly WorkflowNode[]): CostSummary {
  return useMemo(() => summarizeCost(nodes), [nodes])
}

/**
 * 金额文案：中文「12.34 元」、英文「¥12.34」。
 *
 * **为什么不用 `lib/cost.ts` 的 `formatMoney`**：它是 A 档移植件，返回值把「元」
 * 烘在字符串里，英文界面下会冒出中文单位。货币单位的写法本身就是语言相关的，
 * 所以显示层的金额格式留在本文件；`lib/cost.ts` 的纯数值口径一个字不动。
 */
function money(t: Translate, value: number): string {
  return t('cost.money', { value: value.toFixed(2) })
}

export function CostBadge({ summary, budget }: { summary: CostSummary; budget: number }) {
  const t = useT()
  const spent = summary.total
  const hasBudget = Number.isFinite(budget) && budget > 0
  const ratio = hasBudget ? Math.min(1, spent / budget) : 0
  const over = hasBudget && spent >= budget
  const label = money(t, spent)
  return (
    <span
      className={`im-cost${over ? ' is-over' : ''}`}
      title={
        hasBudget
          ? t('cost.title.withBudget', {
              spent: label,
              budget: money(t, budget),
              cards: summary.cards,
              images: summary.images,
            })
          : t('cost.title', { spent: label, cards: summary.cards, images: summary.images })
      }
    >
      <span className="im-cost-num">{label}</span>
      {hasBudget ? (
        <span className="im-cost-bar" aria-hidden>
          <span className="im-cost-fill" style={{ width: `${Math.round(ratio * 100)}%` }} />
        </span>
      ) : null}
      {over ? <span className="im-cost-flag">{t('cost.over')}</span> : null}
    </span>
  )
}
