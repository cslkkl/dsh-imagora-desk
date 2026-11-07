// 放大对话框：按长边目标把图放大。
//
// 纯前端重采样（canvas drawImage），不花调用费。三种算法由 imageOps 决定：
// nearest 保像素点、bilinear 平滑、high 走高质量插值。
import { useEffect, useMemo, useState } from 'react'
import {
  MAX_UPSCALE_LONG_EDGE,
  readImageSize,
  resolveUpscaleSize,
  upscaleDataUrl,
  type ImageSize,
  type UpscaleAlgorithm,
} from '../lib/imageOps'
import { errMessage } from '../lib/format'
import { primitives } from '../ui'

export interface UpscaleDialogProps {
  src: string
  onClose: () => void
  onConfirm: (dataUrl: string, note: string) => void | Promise<void>
}

const ALGOS: { value: UpscaleAlgorithm; label: string }[] = [
  { value: 'high', label: '高质量' },
  { value: 'bilinear', label: '平滑' },
  { value: 'nearest', label: '保像素' },
]

const PRESETS = [1024, 1536, 2048, 3072, MAX_UPSCALE_LONG_EDGE]

export function UpscaleDialog({ src, onClose, onConfirm }: UpscaleDialogProps) {
  const ui = primitives()
  const [size, setSize] = useState<ImageSize | null>(null)
  const [target, setTarget] = useState(2048)
  const [algo, setAlgo] = useState<UpscaleAlgorithm>('high')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let alive = true
    readImageSize(src)
      .then(next => {
        if (!alive) return
        setSize(next)
        // 默认给「下一档」：当前长边之上最小的预设
        const longest = Math.max(next.width, next.height)
        const nextPreset = PRESETS.find(edge => edge > longest) ?? MAX_UPSCALE_LONG_EDGE
        setTarget(nextPreset)
      })
      .catch(err => {
        if (alive) setError(`读不到这张图：${errMessage(err)}`)
      })
    return () => {
      alive = false
    }
  }, [src])

  const out = useMemo(() => {
    if (!size) return { width: 0, height: 0 }
    return resolveUpscaleSize(size.width, size.height, target)
  }, [size, target])

  const scale = size && size.width > 0 ? out.width / size.width : 0
  const shrink = Boolean(size) && out.width < size!.width

  const confirm = async () => {
    setBusy(true)
    setError(null)
    try {
      const dataUrl = await upscaleDataUrl(src, { targetLongEdge: target, algorithm: algo })
      await onConfirm(dataUrl, `放大 ${out.width}×${out.height} · ${ALGOS.find(a => a.value === algo)?.label}`)
    } catch (err) {
      setError(`放大失败：${errMessage(err)}`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <ui.Modal open onClose={onClose} title="放大图片">
      <div style={{ display: 'grid', gap: 12, width: 520, maxWidth: '82vw' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--im-ink-3)' }}>长边目标</span>
          {PRESETS.map(edge => (
            <ui.Button
              key={edge}
              type="button"
              size="sm"
              variant={edge === target ? 'primary' : 'toolbar'}
              onClick={() => setTarget(edge)}
            >
              {edge}
            </ui.Button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--im-ink-3)' }}>算法</span>
          {ALGOS.map(row => (
            <ui.Button
              key={row.value}
              type="button"
              size="sm"
              variant={row.value === algo ? 'primary' : 'toolbar'}
              onClick={() => setAlgo(row.value)}
            >
              {row.label}
            </ui.Button>
          ))}
        </div>

        <div style={{ fontSize: 12, lineHeight: 1.8, color: 'var(--im-ink-2)' }}>
          {size ? (
            <>
              原图 {size.width} × {size.height}
              {' → '}
              <b style={{ color: shrink ? 'var(--im-warn)' : 'var(--im-image)' }}>
                {out.width} × {out.height}
              </b>
              {scale ? ` · ${scale.toFixed(2)}×` : ''}
              {shrink ? ' · 目标比原图小，等于缩小' : ''}
            </>
          ) : (
            '读取中…'
          )}
        </div>

        <p style={{ margin: 0, fontSize: 11.5, lineHeight: 1.7, color: 'var(--im-ink-3)' }}>
          放大是本地重采样，不调用接口、不花钱；细节不会凭空长出来， 要「更清晰的另一张」应该改提示词重画。
        </p>

        {error ? <p style={{ margin: 0, fontSize: 12, color: 'var(--im-danger)' }}>{error}</p> : null}

        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <ui.Button type="button" size="sm" variant="toolbar" onClick={onClose}>
            取消
          </ui.Button>
          <ui.Button
            type="button"
            size="sm"

            disabled={busy || !size || out.width < 8 || out.height < 8}
            onClick={() => void confirm()}
          >
            {busy ? '处理中…' : '放大并放入画布'}
          </ui.Button>
        </div>
      </div>
    </ui.Modal>
  )
}
