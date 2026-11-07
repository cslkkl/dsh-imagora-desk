// 切分对话框：按行列把一张图切成多张。
//
// 用 canvas 按格切，逐块导出成 data URL。切割是纯像素操作，不改内容，
// 所以预览直接用 CSS 的背景定位画网格，不必提前生成 N 张图。
// 外壳与底部按钮走 ModalShell：宽度交给 size 档，预览高度按视口比例收，
// 所以也不再套一层「内部滚动容器」。
import { useEffect, useMemo, useState } from 'react'
import { readImageSize, type ImageSize } from '../lib/imageOps'
import { errMessage } from '../lib/format'
import { ModalShell } from './modal-shell'

export interface SplitDialogProps {
  src: string
  onClose: () => void
  onConfirm: (parts: { dataUrl: string; note: string }[]) => void | Promise<void>
}

/** 按行列切一张图，返回每一块的 data URL。 */
async function splitImage(src: string, cols: number, rows: number, size: ImageSize): Promise<string[]> {
  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const el = new Image()
    el.onload = () => resolve(el)
    el.onerror = () => reject(new Error('图片加载失败'))
    el.src = src
  })
  const cellW = Math.floor(size.width / cols)
  const cellH = Math.floor(size.height / rows)
  const out: string[] = []
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const canvas = document.createElement('canvas')
      canvas.width = cellW
      canvas.height = cellH
      const context = canvas.getContext('2d')
      if (!context) throw new Error('画布不可用')
      context.drawImage(image, col * cellW, row * cellH, cellW, cellH, 0, 0, cellW, cellH)
      out.push(canvas.toDataURL('image/png'))
    }
  }
  return out
}

/** 预览最大高度（与 crop / mask 的 stage 同档，别让竖图把弹窗撑到两屏） */
const PREVIEW_MAX_HEIGHT = '52vh'

export function SplitDialog({ src, onClose, onConfirm }: SplitDialogProps) {
  const [size, setSize] = useState<ImageSize | null>(null)
  const [cols, setCols] = useState(2)
  const [rows, setRows] = useState(2)
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

  const cell = useMemo(() => {
    if (!size) return { w: 0, h: 0 }
    return { w: Math.floor(size.width / cols), h: Math.floor(size.height / rows) }
  }, [size, cols, rows])

  const confirm = async () => {
    if (!size) return
    setBusy(true)
    setError(null)
    try {
      const parts = await splitImage(src, cols, rows, size)
      await onConfirm(parts.map((dataUrl, index) => ({ dataUrl, note: `切分 ${index + 1}/${parts.length}` })))
    } catch (err) {
      setError(`切分失败：${errMessage(err)}`)
    } finally {
      setBusy(false)
    }
  }

  const total = cols * rows

  return (
    <ModalShell
      title="切分图片"
      subtitle="按行 × 列把这张图切成多张，每块单独放进画布。"
      size="lg"
      onClose={onClose}
      footer={
        <>
          <button type="button" className="im-btn-ghost im-btn-sm" onClick={onClose}>
            取消
          </button>
          <button
            type="button"
            className="im-btn-primary im-btn-sm"
            disabled={busy || !size || total < 2}
            onClick={() => void confirm()}
          >
            {busy ? '处理中…' : `切成 ${total} 张`}
          </button>
        </>
      }
    >
      <div style={{ display: 'grid', gap: 12 }}>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
          <label style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 12 }}>
            列
            <input
              type="range"
              min={1}
              max={6}
              value={cols}
              onChange={event => setCols(Number(event.target.value))}
              className="im-range"
            />
            <b style={{ minWidth: 14, textAlign: 'right' }}>{cols}</b>
          </label>
          <label style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 12 }}>
            行
            <input
              type="range"
              min={1}
              max={6}
              value={rows}
              onChange={event => setRows(Number(event.target.value))}
              className="im-range"
            />
            <b style={{ minWidth: 14, textAlign: 'right' }}>{rows}</b>
          </label>
          <span style={{ fontSize: 12, color: 'var(--im-ink-3)' }}>
            {total} 张 · 每张 {cell.w} × {cell.h}
            {size ? ` · 原图 ${size.width} × ${size.height}` : ''}
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* 预览按视口高度收窄宽度：宽固定 100% 时竖图会撑到两屏高，而内容区不该再套一层滚动。
              高度为 0 的坏图不能进 calc()/aspect-ratio（非法值会让整条声明被丢掉、预览塌成 0 宽）。 */}
          <div
            style={{
              position: 'relative',
              width:
                size && size.height > 0
                  ? `min(100%, calc(${PREVIEW_MAX_HEIGHT} * ${(size.width / size.height).toFixed(4)}))`
                  : '100%',
              aspectRatio: size && size.height > 0 ? `${size.width} / ${size.height}` : '1 / 1',
              backgroundImage: `url(${src})`,
              backgroundSize: '100% 100%',
              borderRadius: 6,
              overflow: 'hidden',
            }}
          >
            {/* 网格线：只画线，不提前切图 */}
            {Array.from({ length: cols - 1 }, (_, index) => (
              <span
                key={`v${index}`}
                style={{
                  position: 'absolute',
                  left: `${((index + 1) / cols) * 100}%`,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: 'rgba(255,255,255,.9)',
                  boxShadow: '0 0 6px rgba(0,0,0,.5)',
                }}
              />
            ))}
            {Array.from({ length: rows - 1 }, (_, index) => (
              <span
                key={`h${index}`}
                style={{
                  position: 'absolute',
                  top: `${((index + 1) / rows) * 100}%`,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: 'rgba(255,255,255,.9)',
                  boxShadow: '0 0 6px rgba(0,0,0,.5)',
                }}
              />
            ))}
          </div>
        </div>

        <p style={{ margin: 0, fontSize: 11.5, lineHeight: 1.6, color: 'var(--im-ink-3)' }}>
          切出来的每一块都会作为独立图片节点放入画布。
        </p>

        {error ? <p style={{ margin: 0, fontSize: 12, color: 'var(--im-danger)' }}>{error}</p> : null}
      </div>
    </ModalShell>
  )
}
