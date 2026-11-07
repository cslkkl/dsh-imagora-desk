// 生成历史：把 assets 里所有图片摊出来，挑几张放回画布。
//
// 对应 Imagora 工具栏的「生成历史」。数据直接来自 host 的 /imagora/assets——
// 那里是真实落盘的文件清单，不是画布上的节点，所以已经删掉的节点也能在这里找回。
import { useEffect, useMemo, useState } from 'react'
import { listAssets, type AssetEntry } from '../api'
import { errMessage } from '../lib/format'
import { primitives } from '../ui'

export interface HistoryDialogProps {
  onClose: () => void
  onImport: (entries: AssetEntry[]) => void
}

const GRID = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(132px, 1fr))',
  gap: 10,
  maxHeight: 420,
  overflowY: 'auto' as const,
  padding: 2,
}

export function HistoryDialog({ onClose, onImport }: HistoryDialogProps) {
  const ui = primitives()
  const [images, setImages] = useState<AssetEntry[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [picked, setPicked] = useState<string[]>([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    let cancelled = false
    listAssets()
      .then(data => {
        if (cancelled) return
        // 新的在前：找图时基本都在找刚出的那张
        const sorted = [...data.images].sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
        setImages(sorted)
      })
      .catch(err => {
        if (!cancelled) setError(errMessage(err))
      })
    return () => {
      cancelled = true
    }
  }, [])

  const shown = useMemo(() => {
    if (!images) return []
    const needle = filter.trim().toLowerCase()
    if (!needle) return images
    return images.filter(row => row.name.toLowerCase().includes(needle))
  }, [images, filter])

  const toggle = (id: string) => {
    setPicked(current => (current.includes(id) ? current.filter(row => row !== id) : [...current, id]))
  }

  return (
    <ui.Modal open onClose={onClose} title="生成历史">
      <div style={{ display: 'grid', gap: 12, width: 620, maxWidth: '82vw' }}>
        <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.7, color: 'var(--im-ink-3)' }}>
          这里是磁盘上真实存在的图片，删掉画布节点也能找回。选中的图会作为独立图片节点放进画布。
        </p>

        <ui.Input
          type="search"
          value={filter}
          placeholder="按文件名筛选"
          aria-label="按文件名筛选"
          onChange={(event: { target: { value: string } }) => setFilter(event.target.value)}
        />

        {error ? <p style={{ margin: 0, fontSize: 12, color: 'var(--im-danger)' }}>读取失败：{error}</p> : null}

        {images === null && !error ? (
          <p style={{ margin: 0, fontSize: 12, color: 'var(--im-ink-3)' }}>读取中…</p>
        ) : null}

        {images && images.length === 0 ? (
          <p style={{ margin: 0, fontSize: 12, color: 'var(--im-ink-3)' }}>还没有生成过图片。</p>
        ) : null}

        {shown.length ? (
          <div style={GRID}>
            {shown.map(row => {
              const on = picked.includes(row.id)
              return (
                <button
                  key={row.id}
                  type="button"
                  onClick={() => toggle(row.id)}
                  title={`${row.name}\n${row.createdAt}`}
                  style={{
                    position: 'relative',
                    padding: 0,
                    border: `2px solid ${on ? 'var(--im-prompt)' : 'var(--im-line)'}`,
                    borderRadius: 8,
                    overflow: 'hidden',
                    background: 'var(--im-layer-2)',
                    cursor: 'pointer',
                    aspectRatio: '1 / 1',
                  }}
                >
                  <img
                    src={row.url}
                    alt={row.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      padding: '3px 5px',
                      fontSize: 10,
                      lineHeight: 1.4,
                      textAlign: 'left',
                      color: '#fff',
                      background: 'linear-gradient(transparent, rgba(0,0,0,.72))',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {row.name}
                  </span>
                </button>
              )
            })}
          </div>
        ) : null}

        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', alignItems: 'center' }}>
          <span style={{ marginRight: 'auto', fontSize: 11.5, color: 'var(--im-ink-3)' }}>
            共 {shown.length} 张{filter.trim() ? `（已筛选）` : ''}
            {picked.length ? ` · 选中 ${picked.length}` : ''}
          </span>
          <ui.Button type="button" size="sm" variant="toolbar" onClick={onClose}>
            关闭
          </ui.Button>
          <ui.Button
            type="button"
            size="sm"
            disabled={!picked.length}
            onClick={() => onImport((images ?? []).filter(row => picked.includes(row.id)))}
          >
            放入画布
          </ui.Button>
        </div>
      </div>
    </ui.Modal>
  )
}
