// 切分对话框：按行 × 列把一张图切成多张。
//
// ## 切图算法从 `lib/imageSplit.ts` 取（A 档逐字移植），不在组件里手写
//
// 原先是组件内联一个 `splitImage()`：`Math.floor(w/cols)` 逐格 `drawImage`。
// 上游把这件事抽成了独立纯模块（`imageSplit.ts`，206 行 + 10.5KB 单测），
// 好处不只是「少写点代码」：
//
// - 格子用**归一化坐标** `index / total` 算，且每行/每列最后一格用 `1 - 起点` 收尾，
//   保证「起点 + 长度」恰好落在 1 —— 不能被整除的尺寸不会漏掉右侧/底部的余数像素；
// - 行列有上限（`SPLIT_MAX_ROWS/COLS` = 8）与预设（`SPLIT_PRESETS`），
//   上限只在模块里定义一次，改不散；
// - 导出走 `cropDataUrl`，与裁剪共用同一段转码路径。
//
// ## 两处与上游对齐的交互约束
//
// - 行列输入框存的是**字符串**：清空输入框是打字过程的中间态，必须放行；
//   手填时即时夹紧（99 → 8）。
// - 确认按钮**不**因「原图尺寸还没读到」而禁用（上游 `ImageSplitDialog` 注释原话）。
//   原先这里写了 `disabled={... || !size}`，正好是上游明令禁止的那条：
//   读尺寸慢一点，按钮就一直点不动，用户不知道在等什么。
import { useEffect, useMemo, useState } from 'react'
import { clampGrid, splitCellCount, splitDataUrl, splitOutputName, SPLIT_PRESETS } from '../lib/imageSplit'
import { readImageSize, type ImageSize } from '../lib/imageOps'
import { errMessage } from '../lib/format'
import { ModalShell } from './modal-shell'

export interface SplitDialogProps {
  src: string
  /** 原文件名：只用于「将切成的文件名」预览，缺省时用 image */
  name?: string
  onClose: () => void
  onConfirm: (parts: { dataUrl: string; note: string }[]) => void | Promise<void>
}

/** 预览最大高度（与 crop / mask 的 stage 同档，别让竖图把弹窗撑到两屏） */
const PREVIEW_MAX_HEIGHT = '52vh'

/** 行列输入框：字符串草稿 + 失焦/回车时夹紧。
 *
 *  为什么不是 `type="number"` 直接存 number：那样清空输入框会立刻变回 1，
 *  用户永远删不掉中间那位数字（与预算框同一个坑，见 styles.ts 里预算那段注释）。 */
function GridInput({
  id,
  label,
  value,
  max,
  onChange,
}: {
  id: string
  label: string
  value: string
  max: number
  onChange: (next: string) => void
}) {
  return (
    <label className="im-split-axis" htmlFor={id}>
      <span className="im-split-axis-label">{label}</span>
      <input
        id={id}
        className="im-field im-split-axis-input"
        inputMode="numeric"
        value={value}
        placeholder="1"
        onChange={event => onChange(event.target.value)}
        onBlur={() => {
          // 手填即时夹紧到 [1, max]；空串按 1 收口
          const parsed = Number(value)
          onChange(String(Number.isFinite(parsed) ? Math.min(max, Math.max(1, Math.round(parsed))) : 1))
        }}
      />
    </label>
  )
}

export function SplitDialog({ src, name, onClose, onConfirm }: SplitDialogProps) {
  const [size, setSize] = useState<ImageSize | null>(null)
  /** 行列存字符串：允许打字的中间态（空、超出上限的「9」） */
  const [colsDraft, setColsDraft] = useState('2')
  const [rowsDraft, setRowsDraft] = useState('2')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let alive = true
    readImageSize(src)
      .then(next => {
        if (alive) setSize(next)
      })
      .catch(err => {
        if (alive) setError(`读不到这张图：${errMessage(err)}`)
      })
    return () => {
      alive = false
    }
  }, [src])

  /** 归一化后的网格：所有算术都以它为准（输入框里的原始字符串只在打字时存在） */
  const grid = useMemo(() => clampGrid(Number(rowsDraft) || 1, Number(colsDraft) || 1), [rowsDraft, colsDraft])
  const total = splitCellCount(grid)
  /** 1×1 是合法的「不切」输入：不拦输入，只禁用确认并给出提示（上游同一判断） */
  const canSplit = total >= 2

  const cell = useMemo(() => {
    if (!size) return { w: 0, h: 0 }
    return { w: Math.floor(size.width / grid.cols), h: Math.floor(size.height / grid.rows) }
  }, [size, grid])

  /** 输出文件名预览：只列前三个 +「…等 N 个」，避免 8×8 时刷屏 */
  const previewNames = useMemo(() => {
    const base = (name ?? 'image').replace(/\.[^.]+$/, '')
    return Array.from({ length: Math.min(3, total) }, (_, index) =>
      splitOutputName(base, index + 1, total, grid.rows, grid.cols),
    )
  }, [name, total, grid])

  const confirm = async () => {
    if (!canSplit) return
    setBusy(true)
    setError(null)
    try {
      const parts = await splitDataUrl(src, grid)
      await onConfirm(parts.map((dataUrl, index) => ({ dataUrl, note: `切分 ${index + 1}/${parts.length}` })))
    } catch (err) {
      setError(`切分失败：${errMessage(err)}`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <ModalShell
      title="切分图片"
      subtitle="按行 × 列把这张图切成多张，每块单独放进画布。"
      size="lg"
      onClose={onClose}
      footer={
        <>
          {/* 原图尺寸 / 比例放在 footer 左侧：它属于「这次操作的参数」，与确认按钮同一条带 */}
          <p className="im-modal-note">{size ? `原图 ${size.width} × ${size.height}` : '正在读取原图尺寸…'}</p>
          <button type="button" className="im-btn-ghost im-btn-sm" onClick={onClose}>
            取消
          </button>
          <button
            type="button"
            className="im-btn-primary im-btn-sm"
            disabled={busy || !canSplit}
            onClick={() => void confirm()}
          >
            {busy ? '处理中…' : canSplit ? `确认切分（${total} 张）` : '至少 2 张'}
          </button>
        </>
      }
    >
      <div className="im-split">
        {/* 预设网格：上游 SPLIT_PRESETS 原样呈现，比两个滑杆更容易命中「我想要 3×3」 */}
        <div className="im-split-presets">
          {SPLIT_PRESETS.map(preset => (
            <button
              key={preset.label}
              type="button"
              className={`im-chip im-chip--sm im-chip--action${
                preset.cols === grid.cols && preset.rows === grid.rows ? ' is-brand' : ''
              }`}
              onClick={() => {
                setColsDraft(String(preset.cols))
                setRowsDraft(String(preset.rows))
              }}
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className="im-split-controls">
          <GridInput id="split-cols" label="列" value={colsDraft} max={8} onChange={setColsDraft} />
          <GridInput id="split-rows" label="行" value={rowsDraft} max={8} onChange={setRowsDraft} />
          <span className="im-split-summary">
            {total} 张{cell.w > 0 ? ` · 每张 ${cell.w} × ${cell.h}` : ''}
          </span>
        </div>

        <div className="im-split-stage-wrap">
          {/* 预览按视口高度收窄宽度：宽固定 100% 时竖图会撑到两屏高，而内容区不该再套一层滚动。
              高度为 0 的坏图不能进 calc()/aspect-ratio（非法值会让整条声明被丢掉、预览塌成 0 宽）。 */}
          <div
            className="im-split-stage"
            style={{
              width:
                size && size.height > 0
                  ? `min(100%, calc(${PREVIEW_MAX_HEIGHT} * ${(size.width / size.height).toFixed(4)}))`
                  : '100%',
              aspectRatio: size && size.height > 0 ? `${size.width} / ${size.height}` : '1 / 1',
              backgroundImage: `url(${src})`,
            }}
          >
            {/* 网格线：只画线，不提前切图 */}
            {Array.from({ length: grid.cols - 1 }, (_, index) => (
              <span
                key={`v${index}`}
                className="im-split-line"
                style={{ left: `${((index + 1) / grid.cols) * 100}%`, top: 0, bottom: 0, width: 2 }}
              />
            ))}
            {Array.from({ length: grid.rows - 1 }, (_, index) => (
              <span
                key={`h${index}`}
                className="im-split-line"
                style={{ top: `${((index + 1) / grid.rows) * 100}%`, left: 0, right: 0, height: 2 }}
              />
            ))}
          </div>
        </div>

        {/* 输出文件名预览：让人在点确认之前就知道会得到什么名字（上游同一做法） */}
        {canSplit ? (
          <div className="im-split-names">
            {previewNames.map(row => (
              <span key={row} className="im-split-name">
                {row}
              </span>
            ))}
            {total > previewNames.length ? <span className="im-muted">…等 {total} 个</span> : null}
          </div>
        ) : (
          <p className="im-split-note">1 × 1 等于不切。把行或列调大一点。</p>
        )}

        <p className="im-split-note">切出来的每一块都会作为独立图片节点放入画布。</p>

        {error ? (
          <p className="im-split-error" role="status">
            {error}
          </p>
        ) : null}
      </div>
    </ModalShell>
  )
}
