// 蒙版笔刷：在原图上涂出「要重绘的区域」，导出一张与原图同尺寸的 PNG 蒙版。
//
// 导出约定 `transparent-is-editable`（与后端 core/api.py 的 images/edits 口径一致）：
// **透明像素 = 要重绘，不透明像素 = 保持原样**。所以导出时先铺满不透明白，
// 再把涂过的笔画抠成透明。用户涂到哪，哪就会被重绘——界面文案与产物语义因此自洽。
//
// 三个坐标空间（混了就必错）：
// - 归一化 0..1（BrushPoint）：唯一的状态真相；
// - 预览 canvas 像素：只用于画在屏幕上，按 PREVIEW_MAX_EDGE 等比缩小；
// - 原图像素：只在导出时出现一次。预览与导出共用 brushRadiusPx，
//   所以「屏幕上看到的粗细」与「导出图里的粗细」同构。
//
// 预览 canvas 用 CSS opacity 半透明：全不透明白会把底图盖死，用户看不见在遮哪里；
// 导出 canvas 不吃这个 opacity，仍是纯不透明。
//
// 外壳与底部按钮走 ModalShell；画笔与 canvas 逻辑原样保留（只换壳不动笔）。
import { useEffect, useMemo, useRef, useState } from 'react'
import { readImageSize, type ImageSize } from '../lib/imageOps'
import {
  MASK_BRUSH_DEFAULT,
  MASK_BRUSH_MAX,
  MASK_BRUSH_MIN,
  appendPoint,
  brushRadiusPx,
  clampBrushSize,
  interpolatePoints,
  isMaskEmpty,
  type BrushMode,
  type BrushPoint,
  type MaskStroke,
} from '../lib/maskBrush'
import { errMessage } from '../lib/format'
import { ModalShell } from './modal-shell'

export interface MaskDialogProps {
  src: string
  name?: string
  onClose: () => void
  /** 交出与原图同尺寸的蒙版 data URL；笔刷一笔没涂时不会调用 */
  onConfirm: (maskDataUrl: string, note: string) => void | Promise<void>
}

const PREVIEW_MAX_EDGE = 640

export function MaskDialog({ src, name, onClose, onConfirm }: MaskDialogProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const drawingRef = useRef(false)
  const [size, setSize] = useState<ImageSize | null>(null)
  /** 底图本体放 state 而不是 ref：它加载完成是**异步**的，只用 ref 存的话
   *  「图到了」不会触发重渲染，重画 effect 永远等不到 base，画布会停在默认 300×150 ——
   *  表现为打开蒙版弹窗看到一片空白，得先拖一下笔刷滑杆才出图。 */
  const [base, setBase] = useState<HTMLImageElement | null>(null)
  const [strokes, setStrokes] = useState<MaskStroke[]>([])
  const [mode, setMode] = useState<BrushMode>('paint')
  const [brush, setBrush] = useState(MASK_BRUSH_DEFAULT)
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
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      if (alive) setBase(img)
    }
    img.src = src
    return () => {
      alive = false
      setBase(null)
    }
  }, [src])

  const preview = useMemo(() => {
    if (!size) return { width: 0, height: 0 }
    if (size.width >= size.height) {
      return { width: PREVIEW_MAX_EDGE, height: Math.round((size.height / size.width) * PREVIEW_MAX_EDGE) }
    }
    return { width: Math.round((size.width / size.height) * PREVIEW_MAX_EDGE), height: PREVIEW_MAX_EDGE }
  }, [size])

  /** 重画预览：底图 + 所有笔画（半透明白）。 */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !base || !preview.width) return
    const context = canvas.getContext('2d')
    if (!context) return
    canvas.width = preview.width
    canvas.height = preview.height
    context.clearRect(0, 0, preview.width, preview.height)
    context.drawImage(base, 0, 0, preview.width, preview.height)
    if (!size) return
    const radius = brushRadiusPx(brush, { width: preview.width, height: preview.height })
    context.save()
    context.globalAlpha = 0.55
    context.fillStyle = '#ffffff'
    context.strokeStyle = '#ffffff'
    context.lineWidth = radius * 2
    context.lineCap = 'round'
    context.lineJoin = 'round'
    for (const stroke of strokes) {
      if (stroke.mode === 'erase') {
        context.globalCompositeOperation = 'destination-out'
        context.strokeStyle = '#000'
        context.fillStyle = '#000'
      } else {
        context.globalCompositeOperation = 'source-over'
        context.strokeStyle = '#ffffff'
        context.fillStyle = '#ffffff'
      }
      const pts = stroke.points
      if (!pts.length) continue
      context.beginPath()
      context.arc(pts[0]!.x * preview.width, pts[0]!.y * preview.height, radius, 0, Math.PI * 2)
      context.fill()
      if (pts.length > 1) {
        context.beginPath()
        context.moveTo(pts[0]!.x * preview.width, pts[0]!.y * preview.height)
        for (const point of pts.slice(1)) {
          context.lineTo(point.x * preview.width, point.y * preview.height)
        }
        context.stroke()
      }
    }
    context.restore()
  }, [preview, strokes, brush, size, base])

  const pointOf = (event: React.PointerEvent): BrushPoint | null => {
    const canvas = canvasRef.current
    if (!canvas) return null
    const box = canvas.getBoundingClientRect()
    if (!box.width || !box.height) return null
    return {
      x: Math.min(1, Math.max(0, (event.clientX - box.left) / box.width)),
      y: Math.min(1, Math.max(0, (event.clientY - box.top) / box.height)),
    }
  }

  const start = (event: React.PointerEvent) => {
    const point = pointOf(event)
    if (!point) return
    event.currentTarget.setPointerCapture?.(event.pointerId)
    drawingRef.current = true
    setStrokes(current => [...current, { mode, size: brush, points: [point] }])
  }

  const move = (event: React.PointerEvent) => {
    if (!drawingRef.current) return
    const point = pointOf(event)
    if (!point) return
    setStrokes(current => {
      const last = current[current.length - 1]
      if (!last) return current
      // appendPoint 命中节流时返回原引用：用引用相等跳过 setState，
      // pointermove 每秒上百次也不会把 React 拖垮
      const nextPoints = appendPoint(last.points, point)
      if (nextPoints === last.points) return current
      return [...current.slice(0, -1), { ...last, points: nextPoints }]
    })
  }

  const end = () => {
    drawingRef.current = false
  }

  const exportMask = async (): Promise<string> => {
    if (!base || !size) throw new Error('原图还没加载好')
    const canvas = document.createElement('canvas')
    canvas.width = size.width
    canvas.height = size.height
    const context = canvas.getContext('2d')
    if (!context) throw new Error('画布不可用')

    // 先铺满不透明白 = 全图保留
    context.fillStyle = '#ffffff'
    context.fillRect(0, 0, size.width, size.height)

    const radius = brushRadiusPx(brush, { width: size.width, height: size.height })
    context.globalCompositeOperation = 'destination-out'
    context.lineWidth = radius * 2
    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.strokeStyle = '#000'
    context.fillStyle = '#000'
    for (const stroke of strokes) {
      if (stroke.mode !== 'paint') continue
      const pts = interpolatePoints(stroke.points[0]!, stroke.points[stroke.points.length - 1]!, radius / 4, {
        width: size.width,
        height: size.height,
      })
      if (!pts.length) continue
      context.beginPath()
      context.arc(pts[0]!.x * size.width, pts[0]!.y * size.height, radius, 0, Math.PI * 2)
      context.fill()
      if (pts.length > 1) {
        context.beginPath()
        context.moveTo(pts[0]!.x * size.width, pts[0]!.y * size.height)
        for (const point of pts.slice(1)) {
          context.lineTo(point.x * size.width, point.y * size.height)
        }
        context.stroke()
      }
    }
    return canvas.toDataURL('image/png')
  }

  const confirm = async () => {
    setBusy(true)
    setError(null)
    try {
      const dataUrl = await exportMask()
      await onConfirm(dataUrl, '已挂上蒙版：涂过的地方会被重绘')
    } catch (err) {
      setError(`导出蒙版失败：${errMessage(err)}`)
    } finally {
      setBusy(false)
    }
  }

  const empty = isMaskEmpty(strokes)

  return (
    <ModalShell
      title="蒙版重绘"
      subtitle="涂出要重绘的区域，导出与原图同尺寸的 PNG 蒙版。"
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
            disabled={busy || empty}
            onClick={() => void confirm()}
          >
            {busy ? '导出中…' : '挂上蒙版'}
          </button>
        </>
      }
    >
      <div style={{ display: 'grid', gap: 12 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          {/* 涂 / 擦 是**模式**不是行动：原版这一类互斥开关用 chip chip--sm，
              点中那枚走 chip--brand。用 btn-primary 会把模式渲染成「主操作」。 */}
          {[
            { mode: 'paint' as BrushMode, label: '涂（要重绘）' },
            { mode: 'erase' as BrushMode, label: '擦' },
          ].map(row => (
            <button
              key={row.mode}
              type="button"
              aria-pressed={mode === row.mode}
              className={`im-chip im-chip--sm im-chip--action${mode === row.mode ? ' is-brand' : ''}`}
              onClick={() => setMode(row.mode)}
            >
              {row.label}
            </button>
          ))}
          <label style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 12 }}>
            笔刷
            <input
              type="range"
              min={MASK_BRUSH_MIN * 100}
              max={MASK_BRUSH_MAX * 100}
              value={Math.round(brush * 100)}
              onChange={event => setBrush(clampBrushSize(Number(event.target.value) / 100))}
              className="im-range"
            />
            <b style={{ minWidth: 34, textAlign: 'right' }}>{Math.round(brush * 100)}%</b>
          </label>
          <button
            type="button"
            className="im-btn-ghost im-btn-sm"
            disabled={!strokes.length}
            onClick={() => setStrokes([])}
          >
            清空
          </button>
          <span style={{ marginLeft: 'auto', fontSize: 11.5, color: 'var(--im-ink-3)' }}>
            {strokes.length ? `${strokes.length} 笔` : '还没涂'}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            background: 'var(--im-surface-inset)',
            borderRadius: 10,
            padding: 8,
          }}
        >
          <canvas
            ref={canvasRef}
            onPointerDown={start}
            onPointerMove={move}
            onPointerUp={end}
            onPointerCancel={end}
            style={{
              width: preview.width,
              maxWidth: '100%',
              height: 'auto',
              borderRadius: 6,
              cursor: 'crosshair',
              touchAction: 'none',
            }}
          />
        </div>

        <p style={{ margin: 0, fontSize: 11.5, lineHeight: 1.7, color: 'var(--im-ink-3)' }}>
          涂过的地方会被重绘，没涂的保持原样（导出的是与原图同尺寸的 PNG 蒙版）。
          {name ? ` · ${name}` : ''}
          {size ? ` · 原图 ${size.width} × ${size.height}` : ''}
        </p>

        {error ? <p style={{ margin: 0, fontSize: 12, color: 'var(--im-danger)' }}>{error}</p> : null}
      </div>
    </ModalShell>
  )
}
