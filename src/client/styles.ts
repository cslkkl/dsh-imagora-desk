// 画布样式：底色与文字仍跟 DSH 主题 token 走（亮/暗色都能活），
// 但画布自己有一套**带彩**的强调色：三类节点各一个色相，连线与状态另有色。
// 只靠黑白灰会让画布分不清主次，这里用紫 / 青 / 琥珀三色分工：
//   提示词卡 = 紫（思考）· 图片 = 青（素材）· 图片组 = 琥珀（集合）
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
  /* 画布内的强调色统一走紫/青，不再引用宿主的 brand（亮色下近黑） */

  /* 三类节点各自的主色与浅底 */
  --im-prompt: #7c5cff;
  --im-prompt-soft: color-mix(in srgb, #7c5cff 10%, transparent);
  --im-prompt-ring: color-mix(in srgb, #7c5cff 34%, transparent);
  --im-image: #12a4b8;
  --im-image-soft: color-mix(in srgb, #12a4b8 10%, transparent);
  --im-image-ring: color-mix(in srgb, #12a4b8 34%, transparent);
  --im-group: #e08a1e;
  --im-group-soft: color-mix(in srgb, #e08a1e 12%, transparent);
  --im-group-ring: color-mix(in srgb, #e08a1e 34%, transparent);

  /* 状态与连线 */
  --im-danger: var(--dsw-alias-state-error-primary, #d93a3a);
  --im-warn: var(--dsw-alias-state-warn-primary, #d78a00);
  --im-ok: var(--dsw-alias-state-success-primary, #19a45a);
  --im-running: #2f7cf6;
  --im-edge: #8b9bff;
  --im-edge-active: #7c5cff;

  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  /* 极浅的双色斜向底：比纯白有层次，又不抢内容的对比度 */
  background:
    radial-gradient(1100px 460px at 8% -8%, color-mix(in srgb, #7c5cff 9%, transparent), transparent 62%),
    radial-gradient(900px 420px at 100% 0%, color-mix(in srgb, #12a4b8 8%, transparent), transparent 58%),
    var(--im-bg);
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
  position: relative;
  border-bottom: 1px solid var(--im-line);
  background: var(--im-layer);
  z-index: 5;
}
/* 工具栏底部的紫→青细彩条：把「这里是画布」和宿主的灰面板区分开 */
.im-toolbar::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: linear-gradient(90deg, var(--im-prompt), var(--im-image));
  opacity: 0.85;
  pointer-events: none;
}
.im-toolbar .im-spacer { flex: 1; }
/* 工具栏按钮按职能上色：创建类跟随节点色相，运行类是运行蓝，取消是红。
   宿主 Button 的配色是灰的，这里用 !important 压过它的 CSS Modules 类。 */
.im-toolbar button.im-tone-prompt {
  background: var(--im-prompt-soft) !important;
  color: var(--im-prompt) !important;
  border-color: color-mix(in srgb, var(--im-prompt) 30%, transparent) !important;
}
.im-toolbar button.im-tone-image {
  background: var(--im-image-soft) !important;
  color: var(--im-image) !important;
  border-color: color-mix(in srgb, var(--im-image) 30%, transparent) !important;
}
.im-toolbar button.im-tone-group {
  background: var(--im-group-soft) !important;
  color: var(--im-group) !important;
  border-color: color-mix(in srgb, var(--im-group) 30%, transparent) !important;
}
.im-toolbar button.im-tone-run {
  background: linear-gradient(135deg, var(--im-prompt), var(--im-image)) !important;
  color: #fff !important;
  border-color: transparent !important;
}
.im-toolbar button.im-tone-run:disabled { opacity: .4; }
.im-toolbar button.im-tone-stop {
  background: color-mix(in srgb, var(--im-danger) 12%, transparent) !important;
  color: var(--im-danger) !important;
  border-color: color-mix(in srgb, var(--im-danger) 32%, transparent) !important;
}
.im-toolbar button.im-tone-view {
  background: var(--im-image-soft) !important;
  color: var(--im-image) !important;
  border-color: color-mix(in srgb, var(--im-image) 24%, transparent) !important;
}
.im-toolbar button.im-tone-prompt:hover:not(:disabled),
.im-toolbar button.im-tone-image:hover:not(:disabled),
.im-toolbar button.im-tone-group:hover:not(:disabled),
.im-toolbar button.im-tone-stop:hover:not(:disabled),
.im-toolbar button.im-tone-view:hover:not(:disabled) {
  filter: brightness(0.97) saturate(1.15);
}
.im-toolbar button.im-tone-run:hover:not(:disabled) {
  filter: brightness(1.08) saturate(1.05);
}
.im-zoom {
  font-variant-numeric: tabular-nums;
  font-size: 12px;
  font-weight: 600;
  color: var(--im-image);
  min-width: 42px;
  text-align: right;
}
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
  /* 主操作按钮走紫→青渐变：宿主的主按钮在亮色主题下接近纯黑，
     放在画布里像一块墨点，和「颜色靓丽」的诉求正好相反 */
  background: linear-gradient(135deg, var(--im-prompt), var(--im-image));
  border-color: transparent;
  color: #fff;
  box-shadow: 0 2px 10px color-mix(in srgb, var(--im-prompt) 30%, transparent);
}
.im-btn.is-primary:hover:not(:disabled) {
  filter: brightness(1.08) saturate(1.05);
  box-shadow: 0 3px 14px color-mix(in srgb, var(--im-prompt) 40%, transparent);
}
.im-btn.is-danger { color: var(--im-danger); }
.im-btn.is-ghost { border-color: transparent; background: transparent; }
.im-btn.is-on { border-color: var(--im-prompt); color: var(--im-prompt); }
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
  /* 顶部一条 3px 的类型色：一眼分清这是提示词卡、图片还是图片组 */
  border-top-width: 3px;
}
/* 整圈描边也用类型的浅色，别让默认灰边框把彩色压掉 */
.im-card--prompt {
  border-top-color: var(--im-prompt);
  border-color: var(--im-prompt-ring);
  border-top-color: var(--im-prompt);
  box-shadow: 0 -1px 0 var(--im-prompt) inset, var(--dsw-elevation-soft, 0 2px 10px rgba(0,0,0,.06));
}
.im-card--image {
  border-top-color: var(--im-image);
  border-color: var(--im-image-ring);
  border-top-color: var(--im-image);
  box-shadow: 0 -1px 0 var(--im-image) inset, var(--dsw-elevation-soft, 0 2px 10px rgba(0,0,0,.06));
}
.im-card--group {
  border-top-color: var(--im-group);
  border-color: var(--im-group-ring);
  border-top-color: var(--im-group);
  box-shadow: 0 -1px 0 var(--im-group) inset, var(--dsw-elevation-soft, 0 2px 10px rgba(0,0,0,.06));
}
.im-card.is-selected {
  border-color: var(--im-prompt);
  /* 选中态只加强外发光，不动顶部那条类型色——否则一选中就看不出是哪种卡 */
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--im-prompt) 30%, transparent), var(--dsw-elevation-soft, 0 2px 10px rgba(0,0,0,.06));
}
.im-card--prompt.is-selected { border-top-color: var(--im-prompt); }
.im-card--image.is-selected { border-top-color: var(--im-image); }
.im-card--group.is-selected { border-top-color: var(--im-group); }
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
.im-field:focus { border-color: var(--im-prompt); background: var(--im-layer); }
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
.im-chip--prompt { background: var(--im-prompt-soft); color: var(--im-prompt); }
.im-chip--image { background: var(--im-image-soft); color: var(--im-image); }
.im-chip--group { background: var(--im-group-soft); color: var(--im-group); }
.im-chip--ok { background: color-mix(in srgb, var(--im-ok) 14%, transparent); color: var(--im-ok); }
.im-chip--running { background: color-mix(in srgb, var(--im-running) 16%, transparent); color: var(--im-running); }
.im-chip--danger { background: color-mix(in srgb, var(--im-danger) 14%, transparent); color: var(--im-danger); }

/* 画布底：点阵用品牌紫的浅色，比纯灰点更有生气 */
.im-canvas .react-flow__background pattern circle { fill: color-mix(in srgb, var(--im-prompt) 30%, transparent); }
.react-flow__node .im-card { will-change: transform; }
.react-flow__edge-path { stroke: var(--im-edge); stroke-width: 1.6; }
.react-flow__edge.selected .react-flow__edge-path,
.react-flow__edge:hover .react-flow__edge-path { stroke: var(--im-edge-active); stroke-width: 2.2; }
.react-flow__connection-path { stroke: var(--im-prompt); stroke-width: 1.8; stroke-dasharray: 5 4; }
.react-flow__edge.animated .react-flow__edge-path { stroke-dasharray: 6 4; }
.react-flow__handle { background: var(--im-prompt); border: 1.5px solid var(--im-layer); width: 8px; height: 8px; }
.react-flow__handle:hover { background: var(--im-edge-active); transform: scale(1.25); }
.react-flow__attribution { display: none; }
/* 图片组节点外层由 xyflow 画了一圈深灰边框，跟琥珀主色打架，改成同色系 */
.react-flow__node-group {
  border: 1px dashed var(--im-group);
  border-radius: 14px;
  background: color-mix(in srgb, var(--im-group) 6%, transparent);
  padding: 10px;
}
.react-flow__node-group.selected { outline: 2px solid color-mix(in srgb, var(--im-group) 45%, transparent); }
.im-chip.is-brand { background: var(--im-prompt-soft); color: var(--im-prompt); }
.im-chip.is-danger { background: color-mix(in srgb, var(--im-danger) 16%, transparent); color: var(--im-danger); }

.im-dot { width: 8px; height: 8px; border-radius: 999px; background: var(--im-ink-3); }
.im-dot.is-queued { background: var(--im-warn); box-shadow: 0 0 0 3px color-mix(in srgb, var(--im-warn) 22%, transparent); }
.im-dot.is-running { background: var(--im-running); animation: im-pulse 1.2s ease-in-out infinite; box-shadow: 0 0 0 3px color-mix(in srgb, var(--im-running) 24%, transparent); }
.im-dot.is-done { background: var(--im-ok); box-shadow: 0 0 0 3px color-mix(in srgb, var(--im-ok) 20%, transparent); }
.im-dot.is-failed { background: var(--im-danger); box-shadow: 0 0 0 3px color-mix(in srgb, var(--im-danger) 22%, transparent); }
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
`
