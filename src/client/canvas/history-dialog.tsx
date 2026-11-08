// 生成历史：**照搬 Imagora 的 HistoryGallery**（components/HistoryGallery.tsx）。
//
// 数据源与原版一致：读**账本** `logs/generation.jsonl`（host 的 /imagora/history），
// 不是资产注册表。两者不是一回事 ——
//   账本一条 = 一次生成尝试：有提示词、质量、尺寸、成本、耗时、状态，含失败行；
//   注册表一条 = 一个存在的图片文件：没有提示词，也不会有失败。
// 历史列表要显示提示词与参考图，只能走账本。
//
// 版面也是原版那三段（原版 .history-modal）：
//   标题带（标题 + 搜索 + 状态筛选 + 关闭，钉在顶上）
//   → 成本条（今日/累计/成功率/失败/平均耗时 + 按尺寸）
//   → 列表（两列卡片：左 160px 结果图，右提示词 2 行 + meta + 参考图 + 三颗按钮）
// 只有列表滚，上面两条不跟着滚。
//
// 与原版的**必要差异**（数据模型不同，不是抄漏）：
//   - 原版「打开目录 / 导入画布」按账本行里的白名单路径走；我们只有拿到资产副本
//     （registryId）才能建档（画布节点只存 registryId），所以只有路径的旧行
//     「导入」按钮是禁用的，并说明原因。
//   - 原版成本条带「日预算 / 单次上限」两个输入框 —— 那要写接口，本步未做；
//     预算仍是设置里那一个上限值。
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  generationHistory,
  generationStats,
  listAssets,
  revealPath,
  saveBudget,
  type AssetEntry,
  type GenerationHistoryItem,
  type HistoryStats,
  type LocalBudget,
} from '../api'
import { errMessage } from '../lib/format'
import { ModalShell } from './modal-shell'
import { PromptCell } from './prompt-cell'
import { ZoomModal } from './zoom-modal'

export interface HistoryDialogProps {
  onClose: () => void
  /** 把账本行导入画布：只传建得了档的（有资产副本的）条目 */
  onImport: (entries: AssetEntry[]) => void
  /** 已配置的 imagora 目录：账本在它下面的 logs/ 里 */
  imagoraRoot?: string
}

/** 一页多少条（原版 PAGE_SIZE 60）：DOM 总量控制在单页数量级，滚动才顺 */
const PAGE_SIZE = 60

/** 金额（元，两位小数）；与原版 cost.ts 的 formatMoney 同款 */
function money(value: number): string {
  return Number.isFinite(value) ? `${value.toFixed(2)} 元` : '-'
}

/** 成本条要显示的指标（原版 cost.ts 的 statRows 同款五条） */
function statRows(stats: HistoryStats): { label: string; value: string }[] {
  const rate = stats.total ? `${stats.successRate.toFixed(1)}%` : '-'
  return [
    { label: '今日花费', value: money(stats.todayCost) },
    { label: '累计花费', value: money(stats.cost) },
    { label: '成功率', value: `${rate}（${stats.ok}/${stats.total}）` },
    { label: '失败', value: String(stats.error) },
    { label: '成功平均耗时', value: stats.avgSeconds > 0 ? `${stats.avgSeconds.toFixed(1)}s` : '-' },
  ]
}

/** 父目录：原版「打开目录」开的是这张图所在的文件夹，不是图本身 */
function parentDirectory(path: string): string {
  return path.replace(/[\\/][^\\/]+$/, '')
}

export function HistoryDialog({ onClose, onImport, imagoraRoot }: HistoryDialogProps) {
  const [items, setItems] = useState<GenerationHistoryItem[]>([])
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('')
  const [hasMore, setHasMore] = useState(false)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState('')
  /** 读到的是账本还是没有账本（没设 imagora 目录 / 原版还没生成过图） */
  const [source, setSource] = useState<'ledger' | 'none'>('ledger')
  const [ledgerPath, setLedgerPath] = useState('')
  const [stats, setStats] = useState<HistoryStats | null>(null)
  /** 注册表：账本行只有 registryId，导入画布要拿它换完整的资产条目 */
  const [registry, setRegistry] = useState<Map<string, AssetEntry>>(new Map())
  const [zoomed, setZoomed] = useState<{ url: string; path?: string } | null>(null)
  /** 本机预算设置的草稿（成本条那两个输入框，0 = 不限）。
   *
   * 存**字符串**而不是 number：这两个框是受控的金额输入，用户打「0.」或清空时
   * 中间态必须能留在框里。之前直接 `Number(e.target.value) || 0`，于是
   *   - 打小数点：`Number('1.')` = 1 → 回写 "1"，小数点被吞，永远打不出 0.5
   *   - 清空：回写 0，框里立刻弹回 "0"，只能全选覆盖不能先删再打
   * 保存时才 Number() 归一。 */
  const [draftBudget, setDraftBudget] = useState<{ dailyLimit: string; singleRunLimit: string }>({
    dailyLimit: '',
    singleRunLimit: '',
  })
  const [savingBudget, setSavingBudget] = useState(false)
  const [budgetTip, setBudgetTip] = useState('')

  const listRef = useRef<HTMLDivElement>(null)
  /** 请求代次：搜索/状态变化自增，旧响应（竞态）丢弃 */
  const seqRef = useRef(0)
  const itemsRef = useRef<GenerationHistoryItem[]>([])
  const queryRef = useRef(query)
  const statusRef = useRef(status)
  queryRef.current = query
  statusRef.current = status

  const load = useCallback(async (overrides?: { query?: string; status?: string }) => {
    const seq = ++seqRef.current
    setLoading(true)
    setError('')
    try {
      const page = await generationHistory({
        limit: PAGE_SIZE,
        offset: 0,
        query: overrides?.query ?? queryRef.current,
        status: overrides?.status ?? statusRef.current,
      })
      if (seq !== seqRef.current) return
      // 防御：形状不对（旧版 host / 代理返回了别的东西）时按空列表处理。
      // 直接 setItems(page.items) 会在 items 为 undefined 时让下面那个 useMemo 崩掉，
      // 整个弹窗白屏 —— 一条字段缺失不该让「看历史」这个只读功能挂掉。
      const rows = Array.isArray(page.items) ? page.items : []
      setSource(page.source === 'ledger' ? 'ledger' : 'none')
      setLedgerPath(typeof page.ledgerPath === 'string' ? page.ledgerPath : '')
      setItems(rows)
      itemsRef.current = rows
      setHasMore(page.hasMore === true)
      setTotal(Number(page.total) || rows.length)
    } catch (err) {
      if (seq === seqRef.current) setError(errMessage(err))
    } finally {
      if (seq === seqRef.current) setLoading(false)
    }
  }, [])

  const loadMore = useCallback(async () => {
    if (loadingMore || !hasMore) return
    const seq = seqRef.current
    setLoadingMore(true)
    try {
      const page = await generationHistory({
        limit: PAGE_SIZE,
        offset: itemsRef.current.length,
        query: queryRef.current,
        status: statusRef.current,
      })
      if (seq !== seqRef.current) return
      const more = Array.isArray(page.items) ? page.items : []
      setItems(prev => [...prev, ...more])
      itemsRef.current = [...itemsRef.current, ...more]
      setHasMore(page.hasMore === true)
      setTotal(Number(page.total) || itemsRef.current.length)
    } catch (err) {
      if (seq === seqRef.current) setError(errMessage(err))
    } finally {
      if (seq === seqRef.current) setLoadingMore(false)
    }
  }, [hasMore, loadingMore])

  // 打开时：拉首页 + 成本条 + 注册表（三个互不依赖，并行发）
  useEffect(() => {
    void load()
    void generationStats()
      .then(setStats)
      .catch(() => setStats(null)) // 成本条读不到不影响列表，静默降级为不显示
    void listAssets()
      .then(data => setRegistry(new Map((data?.images ?? []).map(entry => [entry.id, entry]))))
      .catch(() => setRegistry(new Map()))
  }, [load])

  // 预算草稿：成本条那两个输入框。stats 回来时同步一次（原版 CostBoard 同一套做法）——
  // 用户没编辑时显示后端已保存的值，编辑过就以草稿为准，直到点保存。
  useEffect(() => {
    if (!stats?.localBudget) return
    setDraftBudget({
      dailyLimit: stats.localBudget.dailyLimit ? String(stats.localBudget.dailyLimit) : '0',
      singleRunLimit: stats.localBudget.singleRunLimit ? String(stats.localBudget.singleRunLimit) : '0',
    })
  }, [stats])

  const saveLocalBudget = async () => {
    setSavingBudget(true)
    setBudgetTip('')
    const payload: LocalBudget = {
      dailyLimit: Math.max(0, Number(draftBudget.dailyLimit) || 0),
      singleRunLimit: Math.max(0, Number(draftBudget.singleRunLimit) || 0),
    }
    try {
      await saveBudget(payload)
      const next = await generationStats()
      setStats(next)
      setBudgetTip('预算已保存')
    } catch (err) {
      setBudgetTip(`保存失败：${errMessage(err)}`)
    } finally {
      setSavingBudget(false)
    }
  }

  /** 滚动接近底部自动翻页（原版同样行为；按钮只作手动兜底） */
  const NEAR_BOTTOM_PX = 600
  const handleScroll = useCallback(() => {
    const list = listRef.current
    if (!list) return
    if (list.scrollHeight - list.scrollTop - list.clientHeight < NEAR_BOTTOM_PX) void loadMore()
  }, [loadMore])

  /** 图生图失败且参考图已找不回：只提示，无法重跑（原版同一条） */
  const lostRefCount = useMemo(
    () => items.filter(item => item.status === 'error' && item.inputRefMissing).length,
    [items],
  )

  const rows = stats ? statRows(stats) : []
  const topSizes = stats?.bySize.slice(0, 3) ?? []

  const where = ledgerPath || (imagoraRoot ? `${imagoraRoot}\\logs\\generation.jsonl` : '（未设置 imagora 目录）')

  return (
    <>
      <ModalShell title="生成历史" size="wide" headerless onClose={onClose}>
        <div className="im-history">
          {/* 标题带：标题 / 搜索 / 状态筛选 / 关闭 —— 原版全在一条通栏 header 里 */}
          <div className="im-history-bar">
            <h2 className="im-history-title">生成历史</h2>
            <input
              className="im-field im-history-search"
              value={query}
              placeholder="搜索提示词、质量或文件名"
              aria-label="搜索提示词、质量或文件名"
              onChange={event => setQuery(event.target.value)}
              onKeyDown={event => {
                if (event.key === 'Enter') void load()
              }}
            />
            <select
              className="im-field im-history-status"
              value={status}
              aria-label="按状态筛选"
              onChange={event => {
                setStatus(event.target.value)
                void load({ status: event.target.value })
              }}
            >
              <option value="">全部状态</option>
              <option value="ok">成功</option>
              <option value="error">失败</option>
            </select>
            <button type="button" className="im-btn-ghost im-btn-sm" onClick={() => void load()}>
              搜索
            </button>
            <div className="im-history-bar-end">
              {lostRefCount > 0 ? (
                <span className="im-history-warn" title="图生图记录但参考图已从资产库找不回，无法还原">
                  {lostRefCount} 条参考图已丢失
                </span>
              ) : null}
              <button type="button" className="im-btn-ghost im-btn-sm" onClick={onClose}>
                关闭
              </button>
            </div>
          </div>

          {/* 成本条：原版 CostBoard —— 左边指标，右边本机预算设置（日预算 / 单次上限 + 保存） */}
          {rows.length ? (
            <div className="im-history-stats">
              <div className="im-history-stat-grid">
                {rows.map(row => (
                  <div key={row.label} className="im-history-stat">
                    <div className="im-history-stat-label">{row.label}</div>
                    <div className="im-history-stat-value">{row.value}</div>
                  </div>
                ))}
                {topSizes.length ? (
                  <div className="im-history-stat">
                    <div className="im-history-stat-label">按尺寸</div>
                    <div className="im-history-stat-value">
                      {topSizes.map(row => `${row.size} ×${row.count}`).join(' · ')}
                    </div>
                  </div>
                ) : null}
              </div>

              {/* 本机预算设置：写 <输出目录>/.budget.json，与原版同一份文件。
                  语义是「超限需确认」不是硬拦（见 src/host/budget.js 文件头）。 */}
              <div className="im-history-budget">
                <label className="im-history-budget-field">
                  <span className="im-history-budget-label">日预算</span>
                  {/* type="text" + inputMode="decimal"，**不是** type="number"：
                      后者在用户打「0.」这种中间态时 `.value` 直接返回空串（Chromium 判 badInput），
                      受控组件拿不到用户真正敲的字，小数点永远打不进去、也清不空。
                      金额框只需要「弹数字键盘 + 原样回显」，校验留到保存那一刻。 */}
                  <input
                    type="text"
                    inputMode="decimal"
                    className="im-field im-history-budget-input"
                    value={draftBudget.dailyLimit}
                    title="当日累计费用上限（元），0 = 不限；超限提交前会要求确认"
                    onChange={event => setDraftBudget(prev => ({ ...prev, dailyLimit: event.target.value }))}
                  />
                </label>
                <label className="im-history-budget-field">
                  <span className="im-history-budget-label">单次上限</span>
                  <input
                    type="text"
                    inputMode="decimal"
                    className="im-field im-history-budget-input"
                    value={draftBudget.singleRunLimit}
                    title="单次提交的预估上限（元），0 = 不限"
                    onChange={event => setDraftBudget(prev => ({ ...prev, singleRunLimit: event.target.value }))}
                  />
                </label>
                <button
                  type="button"
                  className="im-btn-ghost im-btn-sm"
                  disabled={savingBudget || loading}
                  onClick={() => void saveLocalBudget()}
                >
                  {savingBudget ? '保存中…' : '保存预算'}
                </button>
                <button
                  type="button"
                  className="im-btn-ghost im-btn-sm"
                  disabled={loading}
                  onClick={() =>
                    void generationStats()
                      .then(setStats)
                      .catch(() => undefined)
                  }
                >
                  刷新
                </button>
                {budgetTip ? <span className="im-history-budget-tip">{budgetTip}</span> : null}
              </div>
            </div>
          ) : null}

          <div ref={listRef} className="im-history-list" onScroll={handleScroll} data-testid="history-list">
            {error ? <div className="im-history-error">{error}</div> : null}

            {loading ? (
              <div className="im-history-empty">正在读取历史…</div>
            ) : items.length ? (
              <>
                <ul className="im-history-rows">
                  {items.map((item, index) => {
                    const entry = item.assetId ? registry.get(item.assetId) : undefined
                    const canImport = Boolean(entry)
                    return (
                      <li key={`${item.time}-${item.output}-${index}`} className="im-history-row">
                        <div className="im-history-thumb">
                          {item.url ? (
                            <img
                              src={item.url}
                              alt={item.prompt || '生成结果'}
                              loading="lazy"
                              decoding="async"
                              style={{ cursor: 'zoom-in' }}
                              title="双击放大预览"
                              onDoubleClick={() => setZoomed({ url: item.url, path: item.path })}
                            />
                          ) : (
                            <span className="im-history-thumb-empty">
                              {item.status === 'error' ? '生成失败' : '文件已移动'}
                            </span>
                          )}
                        </div>
                        <div className="im-history-main">
                          <PromptCell text={item.prompt || '无提示词'} />
                          <p className="im-history-meta">
                            {item.time || '-'} · {item.quality || '-'} · {item.size || '-'}
                          </p>
                          {item.inputRefs.length ? (
                            <div className="im-history-refs">
                              {item.inputRefs.map(ref => (
                                <div key={ref.id} className="im-history-ref" title="参考图 · 双击放大">
                                  <img
                                    src={ref.url}
                                    alt="参考图"
                                    loading="lazy"
                                    decoding="async"
                                    style={{ cursor: 'zoom-in' }}
                                    onDoubleClick={() => setZoomed({ url: ref.url, path: ref.path })}
                                  />
                                </div>
                              ))}
                            </div>
                          ) : null}
                          {item.inputRefMissing ? <span className="im-history-ref-missing">参考图缺失</span> : null}
                          <div className="im-history-actions">
                            <button
                              type="button"
                              className="im-btn-ghost im-btn-xs"
                              disabled={!item.prompt}
                              onClick={() => void navigator.clipboard.writeText(item.prompt || '')}
                            >
                              复制提示词
                            </button>
                            <button
                              type="button"
                              className="im-btn-ghost im-btn-xs"
                              disabled={!item.path}
                              onClick={() => void revealPath(parentDirectory(item.path))}
                            >
                              打开目录
                            </button>
                            <button
                              type="button"
                              className="im-btn-primary im-btn-xs"
                              disabled={!canImport}
                              // 只有路径没有资产副本的行导不进画布：画布节点只存 registryId，
                              // 没有 id 就建不了档（硬导会在下次打开时变成「缺失」）
                              title={canImport ? '作为图片节点放进画布' : '这条只有路径、没有资产副本，导入会失去引用'}
                              onClick={() => {
                                if (!entry) return
                                onImport([entry])
                              }}
                            >
                              导入画布
                            </button>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                <div className="im-history-pager">
                  {loadingMore ? (
                    '正在加载更多…'
                  ) : hasMore ? (
                    <button type="button" className="im-btn-ghost im-btn-sm" onClick={() => void loadMore()}>
                      加载更多（已显示 {items.length} / {total}）
                    </button>
                  ) : (
                    `已显示全部 ${total} 条记录`
                  )}
                </div>
              </>
            ) : source === 'none' ? (
              // 没有账本：说清读的是哪儿。用户报过「点开里面什么都没有」，
              // 真正原因往往是没设 imagora 目录 —— 把位置印出来就不用猜。
              <>
                <div className="im-history-empty">还没有生成历史</div>
                <p className="im-history-note">
                  历史读的是 Imagora 的账本 <code>{where}</code>。 在「设置」里填上本机 Imagora 目录就能读到它那份；
                  插件自己出的图记在资产库里，不写这个账本。
                </p>
              </>
            ) : (
              <div className="im-history-empty">没有匹配的生成记录</div>
            )}
          </div>
        </div>
      </ModalShell>
      {zoomed ? (
        <ZoomModal
          imageUrl={zoomed.url}
          {...(zoomed.path ? { copyPath: zoomed.path } : {})}
          onClose={() => setZoomed(null)}
        />
      ) : null}
    </>
  )
}
