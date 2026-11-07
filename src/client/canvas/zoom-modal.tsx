// 大图预览：照搬 Imagora 的 ZoomModal（WorkflowModals.tsx 里的那个）。
//
// 滚轮缩放（锚定指针位置）+ 放大后拖拽平移 + 双击回到适应窗口 + 顶部身份条 +
// 底部三组控制坞（缩放 / 视图 / 动作）。缩放与夹紧的数学在 lib/previewZoom.ts。
//
// ## 为什么不用 modal-shell
//
// `modal-shell` 是「四档宽度 + max-height: min(86dvh,760px) + 头/身/脚三段」的卡片面板，
// 而预览要的是一张几乎占满窗口的图、控制条悬浮在图上不占图片空间。塞进基座会得到一个
// 760px 高的卡片，图被夹在中间——正是原版刻意改掉的那种「90vw×calc(100vh-9rem) 容器内布局」。
// 所以这里和原版一样自己 portal 到 body。
//
// ## zoom 的含义
//
// `zoom` 是**叠在「已按窗口缩好的布局盒」之上的倍率**，不等于「相对原图」的比例。
// 百分比读数与「实际大小」都要经 `layoutScale` 换算，否则一张被缩到 68% 的图会显示 100%，
// 而「1:1」也只是回到刚打开时的大小（原版为这个坑写过一大段注释）。
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { copyImageToClipboard, copyTextToClipboard } from '../lib/imageCopy'
import { actualZoomPercent, clampPreviewPan, clampZoom, zoomForActualPixels } from '../lib/previewZoom'

/** 滚轮缩放步进 */
const ZOOM_STEP = 1.2
/** 按下未移动视为「点击」的位移阈值（px），超过才算拖拽平移 */
const CLICK_TOLERANCE = 5

interface PreviewView {
  zoom: number
  pan: { x: number; y: number }
}

export interface ZoomModalProps {
  /** 可直接显示的完整图片 URL */
  imageUrl: string
  /** 顶部身份条文案（文件名）；不给就整条不渲染，只留右上角关闭 */
  name?: string | undefined
  /** 本机绝对路径：给了才显示「复制路径」（外链 / blob 没有可复制路径） */
  copyPath?: string | undefined
  onClose: () => void
}

export function ZoomModal({ imageUrl, name, copyPath, onClose }: ZoomModalProps) {
  const [view, setView] = useState<PreviewView>({ zoom: 1, pan: { x: 0, y: 0 } })
  /** 拖拽平移进行中：驱动光标样式与过渡开关 */
  const [dragging, setDragging] = useState(false)
  /** 复制反馈三态。「已复制」只在写定的那一刻出现，期间不消失。 */
  const [copyState, setCopyState] = useState<{ kind: 'copying' | 'copied' | 'failed'; text: string } | null>(null)
  const copyTimerRef = useRef<number | null>(null)
  /** 在飞行标记：连点会并发发起多次写剪贴板，最后落地的是哪一次不确定 */
  const copyingRef = useRef(false)
  const copying = copyState?.kind === 'copying'

  /** 图片自然尺寸：ref 给算法用，state 给读数用（ref 变了不触发渲染） */
  const naturalRef = useRef<{ width: number; height: number } | null>(null)
  const [natural, setNatural] = useState<{ width: number; height: number } | null>(null)
  /** 图片布局盒（fit 到容器后的实际尺寸，缩放基准） */
  const imageBoxRef = useRef<{ width: number; height: number }>({ width: 0, height: 0 })
  /** 拖拽状态：起点、起始平移、是否已位移、按下位置是否在图片本体上 */
  const dragRef = useRef<{
    startX: number
    startY: number
    panX: number
    panY: number
    moved: boolean
    onImage: boolean
  } | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  /** 限制平移范围：数学在 lib/previewZoom.ts */
  const clampPan = useCallback((next: PreviewView): PreviewView => {
    const viewport = viewportRef.current
    if (!viewport) return next
    return {
      zoom: next.zoom,
      pan: clampPreviewPan(next.pan, next.zoom, imageBoxRef.current, {
        width: viewport.clientWidth,
        height: viewport.clientHeight,
      }),
    }
  }, [])

  const reset = useCallback(() => setView({ zoom: 1, pan: { x: 0, y: 0 } }), [])

  /** 测量图片布局盒：onLoad 与窗口尺寸变化后都要重测，否则「实际大小」按旧盒子算 */
  const measureImage = useCallback(() => {
    const img = imageRef.current
    if (!img) return
    imageBoxRef.current = { width: img.clientWidth, height: img.clientHeight }
    const next = { width: img.naturalWidth, height: img.naturalHeight }
    naturalRef.current = next
    setNatural(prev => (prev && prev.width === next.width && prev.height === next.height ? prev : next))
  }, [])

  useEffect(() => {
    const onResize = () => measureImage()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [measureImage])

  /** 「实际大小（1:1）」：1 图像像素 = 1 屏幕像素。不能写成 zoom=1。 */
  const actualSize = useCallback(() => {
    const zoom = zoomForActualPixels(naturalRef.current, imageBoxRef.current)
    setView(prev => clampPan({ zoom, pan: prev.pan }))
  }, [clampPan])

  /** 适应窗口：按自然尺寸缩放到当前视口，留 2% 呼吸 */
  const fitToWindow = useCallback(() => {
    const natural = naturalRef.current
    const wrap = wrapRef.current
    if (!natural || !wrap) return
    const availW = wrap.clientWidth * 0.98
    const availH = wrap.clientHeight * 0.98
    const zoom = clampZoom(Math.min(1, availW / natural.width, availH / natural.height))
    setView({ zoom, pan: { x: 0, y: 0 } })
  }, [])

  /** 滚轮缩放：以指针位置为锚点（非被动监听，保证能 preventDefault 拦掉页面滚动） */
  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      event.stopPropagation()
      const rect = viewport.getBoundingClientRect()
      // 指针相对图片中心的偏移（缩放锚点）
      const cursorX = event.clientX - rect.left - rect.width / 2
      const cursorY = event.clientY - rect.top - rect.height / 2
      setView(prev => {
        const zoom = clampZoom(event.deltaY < 0 ? prev.zoom * ZOOM_STEP : prev.zoom / ZOOM_STEP)
        if (zoom === prev.zoom) return prev
        // 保持指针下的图像内容不动：pan' = p - (p - pan) * (zoom'/zoom)
        const k = zoom / prev.zoom
        return clampPan({
          zoom,
          pan: { x: cursorX - (cursorX - prev.pan.x) * k, y: cursorY - (cursorY - prev.pan.y) * k },
        })
      })
    }
    viewport.addEventListener('wheel', onWheel, { passive: false })
    return () => viewport.removeEventListener('wheel', onWheel)
  }, [clampPan])

  /** Esc 关闭 */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  /** 复制反馈 1.2s 后自动消失；卸载时清定时器（否则关掉预览还在 setState） */
  useEffect(
    () => () => {
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current)
    },
    [],
  )

  const showCopyState = (kind: 'copying' | 'copied' | 'failed', text: string) => {
    setCopyState({ kind, text })
    if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current)
    // 「复制中…」不自己消失：它的结束由随后到达的 copied / failed 决定
    copyTimerRef.current = kind === 'copying' ? null : window.setTimeout(() => setCopyState(null), 1200)
  }

  /** 统一入口：防连点 + 三态反馈 */
  const runCopy = async (action: () => Promise<void>, done: string) => {
    if (copyingRef.current) return
    copyingRef.current = true
    showCopyState('copying', '复制中…')
    try {
      await action()
      showCopyState('copied', done)
    } catch (err) {
      showCopyState('failed', err instanceof Error ? err.message : '复制失败')
    } finally {
      copyingRef.current = false
    }
  }

  const onPointerDown = (event: React.PointerEvent) => {
    // 未放大：不拦截，交给遮罩判定（点空白关闭 / 点图片本体不关）
    if (view.zoom <= 1) return
    event.preventDefault()
    event.stopPropagation()
    if (event.currentTarget instanceof Element) event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      panX: view.pan.x,
      panY: view.pan.y,
      moved: false,
      onImage: event.target === imageRef.current,
    }
    setDragging(true)
  }

  const onPointerMove = (event: React.PointerEvent) => {
    const drag = dragRef.current
    if (!drag) return
    // 位移超过阈值才进入平移，避免「点击」被误判为拖拽
    const dx = event.clientX - drag.startX
    const dy = event.clientY - drag.startY
    if (!drag.moved && Math.hypot(dx, dy) <= CLICK_TOLERANCE) return
    drag.moved = true
    setView(prev => clampPan({ ...prev, pan: { x: drag.panX + dx, y: drag.panY + dy } }))
  }

  const endDrag = () => {
    const drag = dragRef.current
    dragRef.current = null
    setDragging(false)
    // 放大态下「按下未拖动」= 点击：点在空白（非图片本体）则关闭
    if (drag && !drag.moved && !drag.onImage) onClose()
  }

  /** 点击关闭判定：图片本体与按钮不关闭，其余区域算空白处。
   *  用 pointerdown 而非 click —— 放大后拖拽的 pointer capture 会把 click 目标重定向到容器，
   *  按 target 判断会误关；pointerdown 始终派发到真实按下的元素。 */
  const onOverlayPointerDown = (event: React.PointerEvent) => {
    const target = event.target instanceof Element ? event.target : null
    if (!target) return
    if (target.closest('button, a, [data-zoom-image], [data-zoom-controls]')) return
    onClose()
  }

  const zoomBy = (factor: number) => setView(prev => clampPan({ ...prev, zoom: clampZoom(prev.zoom * factor) }))

  return createPortal(
    <div
      ref={wrapRef}
      className="im-zoom-overlay"
      onPointerDown={onOverlayPointerDown}
      // Portal 的合成事件沿 React 组件树冒泡（不是 DOM 树）：不在这里截停 click，
      // 外层容器上的点击处理会被预览里的点击误触发，表现为「点图片中间却退出了」。
      onClick={event => event.stopPropagation()}
    >
      {/* 图片可视区：占满整个窗口，contain 不裁切 */}
      <div
        ref={viewportRef}
        className="im-zoom-viewport"
        style={{ cursor: dragging ? 'grabbing' : view.zoom > 1 ? 'grab' : 'zoom-in' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDoubleClick={event => {
          event.stopPropagation()
          reset()
        }}
      >
        <img
          ref={imageRef}
          data-zoom-image
          src={imageUrl}
          alt={name ?? '预览'}
          draggable={false}
          onLoad={() => {
            const img = imageRef.current
            if (!img) return
            naturalRef.current = { width: img.naturalWidth, height: img.naturalHeight }
            imageBoxRef.current = { width: img.clientWidth, height: img.clientHeight }
            measureImage()
          }}
          className="im-zoom-image"
          style={{
            transform: `translate(${view.pan.x}px, ${view.pan.y}px) scale(${view.zoom})`,
            // 拖拽中禁用过渡，保证平移跟手；缩放/按钮操作保留轻微过渡
            transition: dragging ? 'none' : 'transform 0.1s ease-out',
          }}
        />
      </div>

      {/* 顶部：左侧身份（文件名），右侧关闭。身份条可选 —— 没给 name 就整条不渲染。
          用 padding 分开压住两角，中间整块留给图片。 */}
      <div className="im-zoom-top" data-zoom-controls>
        {name ? (
          <div className="im-zoom-name" title={copyPath || name}>
            {name}
          </div>
        ) : (
          // 占位保持「关闭按钮贴右」的布局，不因为少了左侧而让按钮漂到中间
          <div aria-hidden />
        )}
        <button type="button" className="im-zoom-close" aria-label="关闭预览" title="关闭（Esc）" onClick={onClose}>
          <svg
            viewBox="0 0 16 16"
            aria-hidden
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>
      </div>

      {/* 底部控制坞：单行三组（缩放 / 视图 / 动作），组间一条细分隔线。
          提示语不常驻显示（四段说明挤在灰字里最乱），改挂 title —— 交互本身一用就会。 */}
      <div className="im-zoom-dock-wrap" data-zoom-controls>
        <div className="im-zoom-dock" title="滚轮缩放 · 放大后拖拽平移 · 双击回到适应窗口 · 点击空白处或 Esc 关闭">
          <div className="im-zoom-group">
            <button
              type="button"
              className="im-zoom-btn im-zoom-btn--icon"
              aria-label="缩小"
              title="缩小"
              onClick={() => zoomBy(1 / ZOOM_STEP)}
            >
              <svg
                viewBox="0 0 16 16"
                aria-hidden
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M3.5 8h9" />
              </svg>
            </button>
            {/* 读数按**原始像素**算（zoom × 布局缩放比），不是 zoom 本身 */}
            <span
              className="im-zoom-readout"
              title={`${natural ? `${natural.width}×${natural.height} · ` : ''}相对原图的实际显示比例`}
            >
              {actualZoomPercent(view.zoom, natural, imageBoxRef.current)}%
            </span>
            <button
              type="button"
              className="im-zoom-btn im-zoom-btn--icon"
              aria-label="放大"
              title="放大"
              onClick={() => zoomBy(ZOOM_STEP)}
            >
              <svg
                viewBox="0 0 16 16"
                aria-hidden
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M3.5 8h9M8 3.5v9" />
              </svg>
            </button>
          </div>

          <span className="im-zoom-divider" aria-hidden />

          <div className="im-zoom-group">
            <button type="button" className="im-zoom-btn" onClick={fitToWindow}>
              适应窗口
            </button>
            <button
              type="button"
              className="im-zoom-btn"
              onClick={actualSize}
              title="实际大小：1 个图像像素 = 1 个屏幕像素（大图会超出窗口，可拖拽查看）"
            >
              实际大小
            </button>
          </div>

          <span className="im-zoom-divider" aria-hidden />

          {/* 反馈做成坞上方的浮标（绝对定位），不进布局 —— 否则一变宽窄按钮就挪位。
              复制进行中把按钮禁掉：连点会并发写剪贴板。 */}
          <div className="im-zoom-group">
            <button
              type="button"
              className="im-zoom-btn"
              disabled={copying}
              onClick={() => void runCopy(() => copyImageToClipboard(imageUrl), '已复制图片')}
            >
              复制图片
            </button>
            {copyPath ? (
              <button
                type="button"
                className="im-zoom-btn"
                title={copyPath}
                disabled={copying}
                onClick={() => void runCopy(() => copyTextToClipboard(copyPath), '已复制路径')}
              >
                复制路径
              </button>
            ) : null}
            <a href={imageUrl} target="_blank" rel="noreferrer" className="im-zoom-btn">
              新标签打开
            </a>
          </div>

          {copyState ? (
            <span
              role="status"
              aria-live="polite"
              className={`im-zoom-toast${copyState.kind === 'failed' ? ' is-failed' : copyState.kind === 'copied' ? ' is-copied' : ''}`}
            >
              {copyState.text}
            </span>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  )
}
