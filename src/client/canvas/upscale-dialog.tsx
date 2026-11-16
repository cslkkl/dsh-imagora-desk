// 放大对话框：按长边目标把图放大。
//
// 纯前端重采样（canvas drawImage），不花调用费。三种算法由 imageOps 决定：
// nearest 保像素点、bilinear 平滑、high 走高质量插值。
// 外壳与底部按钮走 ModalShell：表单类内容用 md 档，不再写死 width。
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
import { ModalShell } from './modal-shell'
import { useT } from '../i18n'
import type { LocaleKey } from '../locales'

export interface UpscaleDialogProps {
  src: string
  onClose: () => void
  onConfirm: (dataUrl: string, note: string) => void | Promise<void>
}

/** 算法 id → 文案键（`UpscaleAlgorithm` 是 lib 的稳定契约，按它取文案）。 */
const ALGOS: { value: UpscaleAlgorithm; key: LocaleKey }[] = [
  { value: 'high', key: 'upscale.algo.high' },
  { value: 'bilinear', key: 'upscale.algo.bilinear' },
  { value: 'nearest', key: 'upscale.algo.nearest' },
]

const PRESETS = [1024, 1536, 2048, 3072, MAX_UPSCALE_LONG_EDGE]

export function UpscaleDialog({ src, onClose, onConfirm }: UpscaleDialogProps) {
  const t = useT()
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
        if (alive) setError(t('dialog.readImageFailed', { reason: errMessage(err) }))
      })
    return () => {
      alive = false
    }
    // t 不在依赖里：它读调用时刻的语言，引用稳定（见 i18n.tsx 的说明）
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
      // 结果图的名字：上游用同样形状（尺寸 + 算法），这样历史里两边的命名一致
      const algoLabel = t(ALGOS.find(a => a.value === algo)!.key)
      await onConfirm(dataUrl, t('upscale.resultName', { width: out.width, height: out.height, algorithm: algoLabel }))
    } catch (err) {
      setError(t('upscale.failed', { reason: errMessage(err) }))
    } finally {
      setBusy(false)
    }
  }

  return (
    <ModalShell
      title={t('upscale.title')}
      subtitle={t('upscale.subtitle')}
      size="md"
      onClose={onClose}
      footer={
        <>
          <button type="button" className="im-btn-ghost im-btn-sm" onClick={onClose}>
            {t('common.cancel')}
          </button>
          <button
            type="button"
            className="im-btn-primary im-btn-sm"
            disabled={busy || !size || out.width < 8 || out.height < 8}
            onClick={() => void confirm()}
          >
            {busy ? t('upscale.busy') : t('upscale.confirm')}
          </button>
        </>
      }
    >
      <div style={{ display: 'grid', gap: 14 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--im-ink-3)' }}>{t('upscale.longEdge')}</span>
          {PRESETS.map(edge => (
            <button
              key={edge}
              type="button"
              aria-pressed={edge === target}
              className={`im-btn-sm ${edge === target ? 'im-btn-primary' : 'im-btn-ghost'}`}
              onClick={() => setTarget(edge)}
            >
              {edge}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--im-ink-3)' }}>{t('upscale.algorithm')}</span>
          {ALGOS.map(row => (
            <button
              key={row.value}
              type="button"
              aria-pressed={row.value === algo}
              className={`im-btn-sm ${row.value === algo ? 'im-btn-primary' : 'im-btn-ghost'}`}
              onClick={() => setAlgo(row.value)}
            >
              {t(row.key)}
            </button>
          ))}
        </div>

        <div style={{ fontSize: 12, lineHeight: 1.8, color: 'var(--im-ink-2)' }}>
          {size ? (
            <>
              {t('upscale.original', { width: size.width, height: size.height })}
              {' → '}
              <b style={{ color: shrink ? 'var(--im-warn)' : 'var(--im-brand)' }}>
                {out.width} × {out.height}
              </b>
              {scale ? ` · ${t('upscale.scale', { ratio: scale.toFixed(2) })}` : ''}
              {shrink ? ` · ${t('upscale.shrink')}` : ''}
            </>
          ) : (
            t('upscale.reading')
          )}
        </div>

        <p style={{ margin: 0, fontSize: 11.5, lineHeight: 1.7, color: 'var(--im-ink-3)' }}>{t('upscale.note')}</p>

        {error ? <p style={{ margin: 0, fontSize: 12, color: 'var(--im-danger)' }}>{error}</p> : null}
      </div>
    </ModalShell>
  )
}
