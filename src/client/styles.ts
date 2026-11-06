// 画布样式：只用 DSH 的主题 token，跟着亮/暗色一起走。
// 前缀 im- 保证不和宿主样式打架；xyflow 自带样式在 index.tsx 里一并注入。
export const CANVAS_CSS = `
.im-root {
  --im-line: var(--dsw-alias-border-l2, rgba(0,0,0,.12));
  --im-line-strong: var(--dsw-alias-border-l3, rgba(0,0,0,.2));
  --im-bg: var(--dsw-alias-bg-base, #fff);
  --im-layer: var(--dsw-alias-bg-layer-1, #fff);
  --im-layer-2: var(--dsw-alias-bg-layer-2, #f6f7f9);
  --im-ink: var(--dsw-alias-label-primary, #1b1b1b);
  --im-ink-2: var(--dsw-alias-label-secondary, #555);
  --im-ink-3: var(--dsw-alias-label-tertiary, #8a8a8a);
  --im-brand: var(--dsw-alias-brand-primary, #4d6bfe);
  --im-danger: var(--dsw-alias-state-error-primary, #d93a3a);
  --im-warn: var(--dsw-alias-state-warn-primary, #d78a00);
  --im-ok: var(--dsw-alias-state-success-primary, #19a45a);
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background: var(--im-bg);
  color: var(--im-ink);
  font-family: var(--dsw-font-family, system-ui, sans-serif);
  font-size: 13px;
}
.im-toolbar {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  padding: 8px 12px;
  border-bottom: 1px solid var(--im-line);
  background: var(--im-layer);
  z-index: 5;
}
.im-toolbar .im-spacer { flex: 1; }
.im-canvas { position: relative; flex: 1; min-height: 0; }
.im-canvas .react-flow__attribution { display: none; }
.im-canvas .react-flow__minimap {
  background: var(--im-layer);
  border: 1px solid var(--im-line);
  border-radius: 8px;
}
.im-canvas .react-flow__controls {
  box-shadow: var(--dsw-elevation-soft, 0 2px 8px rgba(0,0,0,.08));
  border: 1px solid var(--im-line);
  border-radius: 8px;
  overflow: hidden;
}
.im-canvas .react-flow__controls-button {
  background: var(--im-layer);
  border-bottom: 1px solid var(--im-line);
  color: var(--im-ink-2);
  fill: currentColor;
}
.im-canvas .react-flow__controls-button:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(0,0,0,.05)); }

.im-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 28px;
  padding: 0 10px;
  border-radius: 7px;
  border: 1px solid var(--im-line);
  background: var(--im-layer);
  color: var(--im-ink);
  font-size: 12.5px;
  line-height: 1;
  cursor: pointer;
  transition: background .15s, border-color .15s, opacity .15s;
  white-space: nowrap;
}
.im-btn:hover:not(:disabled) { background: var(--dsw-alias-interactive-bg-hover, rgba(0,0,0,.05)); }
.im-btn:disabled { opacity: .45; cursor: not-allowed; }
.im-btn.is-primary {
  background: var(--dsw-alias-button-primary-fill, var(--im-brand));
  border-color: transparent;
  color: #fff;
}
.im-btn.is-primary:hover:not(:disabled) { background: var(--dsw-alias-button-primary-hover, var(--im-brand)); filter: brightness(1.06); }
.im-btn.is-danger { color: var(--im-danger); }
.im-btn.is-ghost { border-color: transparent; background: transparent; }
.im-btn.is-on { border-color: var(--im-brand); color: var(--im-brand); }
.im-icon-btn {
  display: inline-flex; align-items: center; justify-content: center;
  width: 26px; height: 26px; padding: 0; border-radius: 7px;
  border: 1px solid transparent; background: transparent; color: var(--im-ink-2);
  cursor: pointer;
}
.im-icon-btn:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(0,0,0,.06)); color: var(--im-ink); }
.im-icon-btn.is-danger:hover { background: var(--dsw-alias-interactive-bg-hover-danger, rgba(217,58,58,.12)); color: var(--im-danger); }

.im-select {
  height: 28px; max-width: 260px; padding: 0 6px;
  border-radius: 7px; border: 1px solid var(--im-line);
  background: var(--im-layer); color: var(--im-ink); font-size: 12.5px;
}

.im-card {
  position: relative;
  background: var(--im-layer);
  border: 1px solid var(--im-line);
  border-radius: 12px;
  box-shadow: var(--dsw-elevation-soft, 0 2px 10px rgba(0,0,0,.06));
  transition: border-color .15s, box-shadow .15s;
}
.im-card.is-selected { border-color: var(--im-brand); box-shadow: 0 0 0 2px color-mix(in srgb, var(--im-brand) 22%, transparent); }
.im-card.is-missing { border-color: var(--im-danger); }

.im-node-title { font-size: 12px; font-weight: 600; color: var(--im-ink-2); }
.im-muted { color: var(--im-ink-3); }

.im-field {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--im-line);
  border-radius: 8px;
  background: var(--im-layer-2);
  color: var(--im-ink);
  font-size: 12px;
  line-height: 1.55;
  padding: 7px 8px;
  resize: vertical;
  font-family: inherit;
  outline: none;
}
.im-field:focus { border-color: var(--im-brand); background: var(--im-layer); }
.im-label { display: block; font-size: 11px; color: var(--im-ink-3); margin-bottom: 3px; }
.im-row { display: flex; align-items: center; gap: 6px; }

.im-thumb {
  width: 132px; height: 132px;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; border-radius: 8px;
  background: color-mix(in srgb, var(--im-ink) 6%, transparent);
  cursor: zoom-in;
}
.im-thumb img { width: 100%; height: 100%; object-fit: contain; display: block; }

.im-rail {
  position: absolute; left: 100%; top: 6px; z-index: 20;
  display: flex; flex-direction: column; gap: 2px;
  padding: 3px 3px 3px 7px;
  border-radius: 9px;
  background: var(--im-layer);
  border: 1px solid var(--im-line);
  box-shadow: var(--dsw-elevation-soft, 0 2px 10px rgba(0,0,0,.1));
  opacity: 0; pointer-events: none; transition: opacity .12s;
}
.im-card:hover .im-rail { opacity: 1; pointer-events: auto; }

.im-chip {
  display: inline-flex; align-items: center; height: 18px;
  padding: 0 6px; border-radius: 999px;
  font-size: 10.5px; line-height: 1;
  background: color-mix(in srgb, var(--im-ink) 8%, transparent);
  color: var(--im-ink-2);
}
.im-chip.is-brand { background: color-mix(in srgb, var(--im-brand) 16%, transparent); color: var(--im-brand); }
.im-chip.is-danger { background: color-mix(in srgb, var(--im-danger) 16%, transparent); color: var(--im-danger); }

.im-dot { width: 8px; height: 8px; border-radius: 999px; background: var(--im-ink-3); }
.im-dot.is-queued { background: var(--im-warn); }
.im-dot.is-running { background: var(--im-brand); animation: im-pulse 1.2s ease-in-out infinite; }
.im-dot.is-done { background: var(--im-ok); }
.im-dot.is-failed { background: var(--im-danger); }
@keyframes im-pulse { 0%,100% { opacity: 1 } 50% { opacity: .35 } }

.im-banner {
  display: flex; align-items: center; gap: 8px;
  padding: 7px 12px; font-size: 12px;
  background: color-mix(in srgb, var(--im-warn) 12%, transparent);
  color: var(--im-ink);
  border-bottom: 1px solid var(--im-line);
}
.im-banner.is-error { background: color-mix(in srgb, var(--im-danger) 12%, transparent); }

.im-log {
  position: absolute; right: 12px; bottom: 12px; z-index: 6;
  width: 320px; max-height: 150px; overflow: auto;
  padding: 8px 10px;
  border-radius: 10px;
  background: var(--dsw-alias-toast-bg, var(--im-layer));
  border: 1px solid var(--im-line);
  box-shadow: var(--dsw-elevation-panel, 0 6px 22px rgba(0,0,0,.12));
  font-size: 11.5px; line-height: 1.7; color: var(--im-ink-2);
  white-space: pre-wrap; word-break: break-all;
}
.im-log-head { display: flex; align-items: center; justify-content: space-between; font-weight: 600; color: var(--im-ink); margin-bottom: 4px; }

.im-modal-mask {
  position: absolute; inset: 0; z-index: 40;
  display: flex; align-items: center; justify-content: center;
  background: var(--dsw-alias-bg-mask-1, rgba(0,0,0,.28));
}
.im-modal {
  width: 420px; max-width: calc(100% - 40px);
  background: var(--im-layer); border: 1px solid var(--im-line);
  border-radius: 14px; box-shadow: var(--dsw-elevation-prompt, 0 18px 48px rgba(0,0,0,.24));
  padding: 16px;
}
.im-modal h3 { margin: 0 0 10px; font-size: 14px; }
.im-modal-list { max-height: 260px; overflow: auto; margin: 0 -4px 10px; }
.im-modal-row {
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
  padding: 7px 8px; border-radius: 8px; cursor: pointer;
  border: 1px solid transparent;
}
.im-modal-row:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(0,0,0,.05)); border-color: var(--im-line); }
.im-modal-actions { display: flex; justify-content: flex-end; gap: 8px; }

.im-empty {
  position: absolute; inset: 0; z-index: 2;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 8px; pointer-events: none; color: var(--im-ink-3); font-size: 13px;
}
.im-empty strong { font-size: 15px; color: var(--im-ink-2); font-weight: 600; }
.im-zoom { font-variant-numeric: tabular-nums; font-size: 12px; color: var(--im-ink-3); min-width: 42px; text-align: right; }
`
