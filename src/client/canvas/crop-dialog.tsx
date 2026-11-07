// 裁剪对话框：在图上拖一个裁剪框，确认后导出新图。
//
// 三个坐标空间，混了就必错（与 Imagora 的 ImageCropDialog 同一套分工）：
// - 原图像素：cropDataUrl 落盘时用；
// - CropRect：归一化 0~1，**唯一的状态真相**，跨缩放不丢精度；
// - stage 像素：框画在这一层，left/top/width/height 由 crop 乘 stage 尺寸得来。
//   指针位移也先归一化再交给 moveCrop / resizeCrop，否则放大后拖一下会位移过头。
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  CROP_MIN_SIZE,
  clampCrop,
  cropDataUrl,
  fitCropToRatio,
  gcdRatio,
  moveCrop,
  readImageSize,
  resizeCrop,
  type CropHandle,
  type CropRect,
  type ImageSize,
} from '../lib/imageOps'
import { errMessage } from '../lib/format'
import { primitives } from '../ui'

export interface CropDialogProps {
  src: string
  name?: string
  onClose: () => void
  onConfirm: (dataUrl: string, note: string) => void | Promise<void>
}

/** 比例预设：null = 自由 */
const RATIOS: { label: string; ratio: number | null }[] = [
  { label: '自由', ratio: null },
  { label: '1:1', ratio: 1 },
  { label: '4:3', ratio: 4 / 3 },
  { label: '3:2', ratio: 3 / 2 },
  { label: '16:9', ratio: 16 / 9 },
  { label: '2:3', ratio: 2 / 3 },
  { label: '9:16', ratio: 9 / 16 },
]

const HANDLES: CropHandle[] = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']

const HANDLE_POS: Record<CropHandle, { left: string; top: string; cursor: string }> = {
  nw: { left: '0%', top: '0%', cursor: 'nwse-resize' },
  n: { left: '50%', top: '0%', cursor: 'ns-resize' },
  ne: { left: '100%', top: '0%', cursor: 'nesw-resize' },
  e: { left: '100%', top: '50%', cursor: 'ew-resize' },
  se: { left: '100%', top: '100%', cursor: 'nwse-resize' },
  s: { left: '50%', top: '100%', cursor: 'ns-resize' },
  sw: { left: '0%', top: '100%', cursor: 'nesw-resize' },
  w: { left: '0%', top: '50%', cursor: 'ew-resize' },
}

export function CropDialog({ src, name, onClose, onConfirm }: CropDialogProps) {
  const ui = primitives()
  const stageRef = useRef<HTMLDivElement | null>(null)
  const [size, setSize] = useState<ImageSize | null>(null)
  const [crop, setCrop] = useState<CropRect>({ x: 0.08, y: 0.08, width: 0.84, height: 0.84 })
  const [ratio, setRatio] = useState<number | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const dragRef = useRef<{ mode: 'move' | CropHandle; startX: number; startY: number; base: CropRect } | null>(null)

  useEffect(() => {
    let alive = true
    readImageSize(src)
      .then(next => {
        if (!alive) return
        setSize(next)
        setCrop(clampCrop({ x: 0.06, y: 0.06, width: 0.88, height: 0.88 }))
      })
      .catch(err => {
        if (alive) setError(`读不到这张图：${errMessage(err)}`)
      })
    return () => {
      alive = false
    }
  }, [src])

  const applyRatio = (next: number | null) => {
    setRatio(next)
    if (!size) return
    if (next === null) return
    setCrop(current => fitCropToRatio(current, next, size))
  }

  const beginDrag = (event: React.PointerEvent, mode: 'move' | CropHandle) => {
    event.stopPropagation()
    ;(event.target as HTMLElement).setPointerCapture?.(event.pointerId)
    dragRef.current = { mode, startX: event.clientX, startY: event.clientY, base: crop }
  }

  const onPointerMove = useCallback(
    (event: React.PointerEvent) => {
      const drag = dragRef.current
      const stage = stageRef.current
      if (!drag || !stage) return
      const box = stage.getBoundingClientRect()
      if (!box.width || !box.height) return
      // 指针位移先归一化，再交给纯函数；直接拿像素算会随缩放放大误差
      const dx = (event.clientX - drag.startX) / box.width
      const dy = (event.clientY - drag.startY) / box.height
      setCrop(
        drag.mode === 'move'
          ? moveCrop(drag.base, dx, dy)
          : resizeCrop(drag.base, dx, dy, drag.mode, ratio, size ?? { width: 1, height: 1 }),
      )
    },
    [ratio, size],
  )

  const endDrag = () => {
    dragRef.current = null
  }

  const confirm = async () => {
    setBusy(true)
    setError(null)
    try {
      const dataUrl = await cropDataUrl(src, crop)
      const px = Math.round(crop.width * (size?.width ?? 0))
      const py = Math.round(crop.height * (size?.height ?? 0))
      await onConfirm(dataUrl, `裁剪 ${px}×${py}${ratio ? ` · ${RATIOS.find(r => r.ratio === ratio)?.label}` : ''}`)
    } catch (err) {
      setError(`裁剪失败：${errMessage(err)}`)
    } finally {
      setBusy(false)
    }
  }

  const pxW = size ? Math.round(crop.width * size.width) : 0
  const pxH = size ? Math.round(crop.height * size.height) : 0

  return (
    <ui.Modal open onClose={onClose} title="裁剪图片" className="im-modal">
      <div style={{ display: 'grid', gap: 12, width: 720, maxWidth: '86vw' }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--im-ink-3)' }}>比例</span>
          {RATIOS.map(row => (
            <ui.Button
              key={row.label}
              type="button"
              size="sm"
              variant="toolbar"
              className={row.ratio === ratio ? 'im-primary' : 'im-secondary'}
              onClick={() => applyRatio(row.ratio)}
            >
              {row.label}
            </ui.Button>
          ))}
        </div>

        <div
          ref={stageRef}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          style={{
            position: 'relative',
            width: '100%',
            height: 'min(56vh, 460px)',
            borderRadius: 10,
            overflow: 'hidden',
            background: 'var(--im-layer-2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            touchAction: 'none',
            userSelect: 'none',
          }}
        >
          <img src={src} alt={name ?? '待裁剪'} style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }} />
          <div
            onPointerDown={event => beginDrag(event, 'move')}
            style={{
              position: 'absolute',
              left: `${crop.x * 100}%`,
              top: `${crop.y * 100}%`,
              width: `${crop.width * 100}%`,
              height: `${crop.height * 100}%`,
              border: '2px solid #fff',
              boxShadow: '0 0 0 9999px rgba(10, 12, 30, .55)',
              cursor: 'move',
              boxSizing: 'border-box',
            }}
          >
            {HANDLES.map(handle => (
              <span
                key={handle}
                onPointerDown={event => beginDrag(event, handle)}
                style={{
                  position: 'absolute',
                  left: HANDLE_POS[handle].left,
                  top: HANDLE_POS[handle].top,
                  width: 12,
                  height: 12,
                  marginLeft: -6,
                  marginTop: -6,
                  borderRadius: 3,
                  background: '#fff',
                  boxShadow: '0 1px 4px rgba(0,0,0,.35)',
                  cursor: HANDLE_POS[handle].cursor,
                }}
              />
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 12, color: 'var(--im-ink-3)' }}>
          <span>
            裁剪后 {pxW} × {pxH}
            {size ? ` · 原图 ${size.width} × ${size.height}` : ''}
            {size ? ` · 原比例 ${gcdRatio(size.width, size.height)}` : ''}
          </span>
          <span style={{ marginLeft: 'auto' }}>
            拖框内平移 · 拖八个手柄改尺寸 · 最小 {Math.round(CROP_MIN_SIZE * 100)}%
          </span>
        </div>

        {error ? <p style={{ margin: 0, fontSize: 12, color: 'var(--im-danger)' }}>{error}</p> : null}

        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <ui.Button type="button" size="sm" variant="toolbar" className="im-secondary" onClick={onClose}>
            取消
          </ui.Button>
          <ui.Button
            type="button"
            size="sm"
            className="im-primary"
            disabled={busy || !size || pxW < 8 || pxH < 8}
            onClick={() => void confirm()}
          >
            {busy ? '处理中…' : '裁剪并放入画布'}
          </ui.Button>
        </div>
      </div>
    </ui.Modal>
  )
}
