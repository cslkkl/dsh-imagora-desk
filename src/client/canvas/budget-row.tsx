// 设置弹窗里的「本画布预算上限」一段。
//
// 这里**只有预算**：输出目录已由 imagora-root-row.tsx 负责（「图片输出目录」那一项，
// 与「Imagora 目录」成组，因为二者是同一个决定的两半——要不要跟着 imagora 走）。
// 早先这个文件同时管着输出路径与预算，于是设置弹窗里同一个 outputDir 出现了两个输入框，
// 各写各的按钮，用户不知道改哪个才算数。现在按「一件事一个入口」拆开。
//
// 注意这里管的是**本画布累计**上限（硬拦，工具栏 ¥ 徽章的进度条就是它），
// 与生成历史成本条里的「日预算 / 单次上限」不是一回事（那两个落 .budget.json、需确认）。
import { useState } from 'react'
import { setBudget, type ImagoraConfig } from '../api'
import { errMessage } from '../lib/format'

export interface BudgetRowProps {
  config: ImagoraConfig | null
  onSaved: (next: ImagoraConfig) => void
  onFlash: (line: string) => void
}

export function BudgetRow({ config, onSaved, onFlash }: BudgetRowProps) {
  /** null = 用户还没动过（显示当前生效值）；字符串 = 编辑中的原样内容。
   *
   * 不能写成 `draft === '' ? current : draft`：那样把框删空会立刻回弹成当前值，
   * 用户永远清不掉，只能全选覆盖。也不能在 onChange 里 Number()：打「1.」会被
   * 归一成 1，小数点当场消失，0.5 这类金额根本输不进去。 */
  const [draft, setDraft] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const current = Number(config?.budget ?? 0)

  const apply = async (value: number) => {
    setBusy(true)
    try {
      const next = await setBudget(value)
      onSaved(next)
      setDraft(null)
      onFlash(value > 0 ? `本画布预算上限已设为 ¥${value.toFixed(2)}` : '已取消预算上限')
    } catch (error) {
      onFlash(`设置失败：${errMessage(error)}`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="im-fieldset">
      <div>
        <label className="im-label" htmlFor="imagora-budget">
          本画布预算上限
        </label>
        <input
          id="imagora-budget"
          className="im-field"
          inputMode="decimal"
          value={draft ?? (current ? String(current) : '')}
          placeholder="留空 = 不设上限"
          disabled={busy}
          onChange={event => setDraft(event.target.value)}
        />
        <p className="im-field-hint">
          {current
            ? `当前上限 ¥${current.toFixed(2)}；本画布花到上限就拒绝新任务（硬拦，不经确认）`
            : '留空 = 不设上限。这个上限管的是这个画布累计花了多少；要管「今天 / 单次花多少」，去生成历史的成本条设。'}
        </p>
        <div className="im-field-actions">
          <button
            type="button"
            className="im-btn-primary im-btn-sm"
            disabled={busy || !draft?.trim()}
            onClick={() => void apply(Math.max(0, Number(draft) || 0))}
          >
            保存上限
          </button>
          <button
            type="button"
            className="im-btn-ghost im-btn-sm"
            disabled={busy || !current}
            onClick={() => void apply(0)}
          >
            取消上限
          </button>
        </div>
      </div>
    </div>
  )
}
