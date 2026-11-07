// 画布样式：照搬 Imagora 的设计层（frontend/src/index.css 的公共组件类），
// 只把「颜色从哪来」换成宿主 token —— 这是在本插件里跑必须改的一处：
// 宿主在 body[data-ds-dark-theme] 上把 alias token 整体翻转，所以用 token 就有了暗色，
// 不需要像独立应用那样再写一套暗色样式。
//
// 与 Imagora 的对应关系（改这里前先看上游同名类，别各写一份）：
//   .im-toolbar      ← 顶栏：胶囊按钮一行，次要行动是 brand 文字 + hover 涟漪
//   .im-panel-card   ← .panel-card：白底、细边框、圆角 16、柔和双层阴影
//   .im-btn-primary  ← .btn-primary：胶囊实底白字，hover 白色涟漪从中心向左右展开
//   .im-btn-ghost    ← .btn-ghost：无边框胶囊、brand 文字，hover 涟漪填充 + 反白
//   .im-field        ← .field-control：输入控件基底，transition 只动 border/box-shadow
//   .im-chip         ← .chip：小胶囊标签
//
// 变量定义在 body 上（不是 .im-root）：宿主 Modal 把内容 portal 到 body 下，
// 挂在 .im-root 上的自定义属性它解析不到。前缀 im- 保证不和宿主样式打架。
export const CANVAS_CSS = `
/* 设计 token：与 Imagora 的 index.css 同一套阶梯，改观感只动这张表 */
body {
  /* 品牌色：宿主有两条，必须取彩色那条。
     alias-brand-primary 是「主体文字色」（浅色近黑 #0f1115 / 深色近白 #f9fafb），
     拿它当强调色的话涟漪、选中框、连线、状态灯全变黑白，与原版的可调色相完全不同；
     brand-primary-new-colorprimary-new-color 才是彩色主色（浅 #4176e6 / 深 #4d93f8）。 */
  --im-brand: var(--dsw-alias-brand-primary-new-colorprimary-new-color, #4176e6);
  --im-brand-dark: var(--dsw-alias-label-primary, #17202b);
  /* 叠在品牌色实底上的前景色：浅色主题是白，深色主题是近黑 —— 不能写死 #fff */
  --im-on-brand: var(--dsw-alias-label-primary-foreground, #fff);

  /* 表面材质：外层最浅，内嵌控件次之，浮层最高一档。
     layer-1/2 在浅色主题下都是纯白（只有深色才分档），所以「内嵌一档」要用
     bg-module-platform；「浮层」不能拿 bg-overlay —— 那一档浅色是 #e9ecf2，
     比卡片还灰，方向是反的。 */
  --im-surface: var(--dsw-alias-bg-layer-1, #fff);
  --im-surface-inset: var(--dsw-alias-bg-module-platform, #f9fafb);
  --im-surface-float: var(--dsw-alias-bg-layer-1, #fff);

  --im-ink: var(--dsw-alias-label-primary, #17202b);
  --im-ink-2: var(--dsw-alias-label-secondary, #556);
  --im-ink-3: var(--dsw-alias-label-tertiary, #8a8a8a);
  --im-line: var(--dsw-alias-border-l2, rgba(31, 41, 55, 0.12));
  --im-line-strong: var(--dsw-alias-border-l3, rgba(31, 41, 55, 0.2));
  --im-hover: var(--dsw-alias-interactive-bg-hover, rgba(31, 41, 55, 0.05));

  --im-danger: var(--dsw-alias-state-error-primary, #dc2626);
  --im-warn: var(--dsw-alias-state-warn-primary, #d78a00);
  --im-ok: var(--dsw-alias-state-success-primary, #19a45a);

  /* 连线三态：与 Imagora 同构。idle 中性、hovered 品牌色、selected 再深一档
     （用 label-primary 而不是 brand-dark：后者就是 ink，两态会几乎同色） */
  --im-edge-idle: var(--im-ink-3);
  --im-edge-hovered: var(--im-brand);
  --im-edge-selected: var(--im-ink);
  --im-snap: var(--im-brand);

  /* 尺寸阶梯：顶栏控件 28 → 表单控件 38 → 主行动 46；圆角 胶囊 / 卡片 16 / 控件 10 */
  --im-h-ctl: 28px;
  --im-h-field: 38px;
  --im-r-pill: 999px;
  --im-r-card: 16px;
  --im-r-control: 10px;

  /* 阴影走宿主 elevation：写死 rgba 在深色主题下等于没有阴影 */
  --im-shadow-card: var(--dsw-elevation-soft, 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 12px rgba(0, 0, 0, 0.04));
  --im-shadow-float: var(--dsw-elevation-panel, 0 6px 22px rgba(0, 0, 0, 0.12));
}

.im-root {
  position: relative;
  display: flex;
  flex-direction: column;
  /* 撑满父容器：宿主的插槽容器是 flex，不给 width/flex 的话这里会按内容收缩，
     画布右侧就会留出一条"被裁掉"的空带 */
  flex: 1 1 auto;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  min-height: 0;
  background: var(--im-surface-inset);
  color: var(--im-ink);
  padding-top: 8px;
  font-family: var(--dsw-font-family, system-ui, sans-serif);
  font-size: 13px;
  letter-spacing: -0.01em;
}

/* ---------------- 顶栏 ----------------
   与 Imagora 一样两行：上面一行页头（来源 / 模型 / 成本 / 设置），下面一行画布动作。
   行间距 2px、按钮间距 8px 都照原版（gap-2 / flex-col gap-2）。 */
.im-header {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 8px 12px 0;
  background: var(--im-surface-inset);
}
.im-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 6px 12px 8px;
  position: relative;
  border-bottom: 1px solid var(--im-line);
  background: var(--im-surface);
  z-index: 5;
}
.im-toolbar .im-spacer { flex: 1; }
/* 顶栏分左右两组（与 Imagora 同一分区）：左侧创建、右侧工作流，右侧组靠右对齐 */
.im-toolbar-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}
.im-toolbar-group--end { flex: 1; min-width: 0; justify-content: flex-end; }


/* ---------------- 行动按钮体系（照搬 btn-primary / btn-ghost 两档） ----------------
   两档同源：胶囊圆角 + 主体色 + hover 涟漪反转。
   涟漪层是同形 ::before，从中心向左右横向展开（scaleX 0→1），任意宽度都完整覆盖。 */
.im-btn-primary,
.im-btn-ghost {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 0;
  border-radius: var(--im-r-pill);
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease;
}
.im-btn-primary::before,
.im-btn-ghost::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-color: var(--im-btn-fill);
  transform: scaleX(0);
  transform-origin: 50% 50%;
  z-index: -1;
  transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
}
.im-btn-primary:hover:not(:disabled)::before,
.im-btn-ghost:hover:not(:disabled)::before { transform: scaleX(1); }

.im-btn-primary {
  background: var(--im-brand);
  color: var(--im-on-brand);
  /* 涟漪层 = 品牌底上的前景色：浅色主题白、深色主题近黑。
     写死 #fff 的话，深色主题下是「近白涟漪 + 近白字」，字直接消失。 */
  --im-btn-fill: var(--im-on-brand);
}
.im-btn-primary:hover:not(:disabled) {
  color: var(--im-brand);
  box-shadow: 0 0 20px color-mix(in srgb, var(--im-brand) 40%, transparent);
}
.im-btn-ghost {
  background: transparent;
  color: var(--im-brand);
  --im-btn-fill: var(--im-brand);
}
.im-btn-ghost:hover:not(:disabled) {
  /* 涟漪是品牌色实底，反白同样要用前景色 */
  color: var(--im-on-brand);
  box-shadow: 0 0 20px color-mix(in srgb, var(--im-btn-fill) 40%, transparent);
}
.im-btn-primary:active:not(:disabled),
.im-btn-ghost:active:not(:disabled) { transform: scale(0.98); }
.im-btn-primary:disabled,
.im-btn-ghost:disabled { cursor: not-allowed; opacity: 0.5; }
/* 尺寸档：工具栏 / 模态 / 行内小按钮 */
.im-btn-sm { padding: 5px 12px; font-size: 12px; }
.im-btn-xs { padding: 3px 8px; font-size: 11px; }
/* 危险修饰：文字与涟漪同为红色，配合 ghost 使用 */
.im-btn-danger { color: var(--im-danger); --im-btn-fill: var(--im-danger); }

.im-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  min-height: 30px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--im-ink-2);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}
.im-icon-btn:hover { background: var(--im-hover); color: var(--im-ink); }
.im-icon-btn.is-danger { color: var(--im-danger); }
.im-icon-btn.is-danger:hover {
  background: var(--dsw-alias-interactive-bg-hover-danger, rgba(220, 38, 38, 0.12));
}

.im-zoom {
  font-variant-numeric: tabular-nums;
  font-size: 12px;
  font-weight: 600;
  color: var(--im-brand);
  min-width: 42px;
  text-align: right;
}

/* 成本看板：中性胶囊，超预算才转红 */
.im-cost {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 22px;
  padding: 0 9px;
  border-radius: var(--im-r-pill);
  background: var(--im-hover);
  color: var(--im-ink-2);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  white-space: nowrap;
}
.im-cost.is-over { background: color-mix(in srgb, var(--im-danger) 14%, transparent); color: var(--im-danger); }
.im-cost-num { line-height: 1; }
.im-cost-bar { width: 44px; height: 5px; border-radius: var(--im-r-pill); background: var(--im-line); overflow: hidden; }
.im-cost.is-over .im-cost-bar { background: color-mix(in srgb, var(--im-danger) 24%, transparent); }
.im-cost-fill { display: block; height: 100%; border-radius: var(--im-r-pill); background: var(--im-brand); }
.im-cost.is-over .im-cost-fill { background: var(--im-danger); }
.im-cost-flag { font-size: 10.5px; font-weight: 600; }

/* ---------------- 输入控件（照搬 .field-control） ----------------
   transition 只含 border/box-shadow：含尺寸会让 textarea 拖拽 resize 卡顿。 */
.im-field {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--im-line-strong);
  border-radius: var(--im-r-control);
  background: var(--im-surface);
  color: var(--im-ink);
  font-size: 12px;
  line-height: 1.6;
  padding: 7px 10px;
  resize: vertical;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.im-field:hover { border-color: var(--im-ink-3); }
.im-field:focus {
  border-color: var(--im-brand);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--im-brand) 20%, transparent);
}
.im-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 500;
  color: var(--im-ink-2);
  margin-bottom: 5px;
}
/* 字段级说明小字：与原版配置弹窗同一档（11px / 三级文字色） */
.im-field-hint {
  margin: 5px 0 0;
  font-size: 11px;
  line-height: 1.6;
  color: var(--im-ink-3);
}
/* 密钥框的状态标记：已配置绿、未配置琥珀，都只着色文字 */
.im-field-state {
  font-size: 11px;
  font-weight: 400;
}
.im-field-state.is-ok { color: var(--im-ok); }
.im-field-state.is-warn { color: var(--im-warn); }
.im-row { display: flex; align-items: center; gap: 6px; }
.im-muted { color: var(--im-ink-3); }
.im-node-title { font-size: 12px; font-weight: 600; color: var(--im-brand-dark); }

.im-select {
  height: var(--im-h-ctl);
  max-width: 260px;
  padding: 0 8px;
  border-radius: var(--im-r-control);
  border: 1px solid var(--im-line-strong);
  background: var(--im-surface);
  color: var(--im-ink);
  font-size: 12.5px;
  transition: border-color 0.2s ease;
}
.im-select:hover { border-color: var(--im-ink-3); }

/* ---------------- 节点卡片（照搬 .panel-card） ----------------
   三类节点共用同一块面板，靠内容区分，不靠色相——与 Imagora 一致。 */
.im-panel-card {
  position: relative;
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-card);
  background: var(--im-surface);
  box-shadow: var(--im-shadow-card);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
/* 选中态：原版是 outline 2px + offset 1px，不是 box-shadow 环 ——
   outline 不占布局、也不被圆角裁，卡片密集时不会互相挤。 */
.im-panel-card.is-selected {
  outline: 2px solid var(--im-brand);
  outline-offset: 1px;
}
.im-panel-card.is-missing { border-color: var(--im-danger); }
/* 图片组卡面：原版是 bg-brand/5 + border-brand/15，不是纯中性底 */

.im-thumb {
  /* 原版 h-40 w-32：宽 128、高 160 —— 竖构图也放得下，不会把卡面压扁 */
  width: 128px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  background: var(--im-surface-inset);
  cursor: zoom-in;
}
.im-thumb img { width: 100%; height: 100%; object-fit: contain; display: block; }
.im-thumb-label { margin-top: 4px; max-width: 128px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; color: var(--im-ink-2); }

/* 右侧操作栏：hover 显示。容器不留外边距，靠 padding 撑出视觉间隙，
   否则鼠标移向按钮的途中会短暂离开 .im-panel-card 导致 hover 闪断。 */
.im-rail {
  position: absolute;
  left: 100%;
  top: 8px;
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 4px 4px 4px 8px;
  border-radius: 8px;
  background: var(--im-surface-float);
  border: 1px solid var(--im-line);
  box-shadow: var(--im-shadow-float);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.12s ease;
}
.im-panel-card:hover .im-rail { opacity: 1; pointer-events: auto; }

/* ---------------- 图片组节点（照搬 Imagora 的 GroupNode 叠卡） ----------------
   根节点用 padding 给叠卡预留错开空间，所以叠卡永远不会伸出节点边界。
   宽 224（原版 w-56）、错开步长 4px 由 nodes.tsx 的 STACK_STEP_PX 控制。 */
.im-group-node {
  position: relative;
  /* 原版 w-56 = 224px 且全局 border-box，所以 padding 算在 224 里；
     不写 box-sizing 的话内容 224 + padding 12 会撑到 236，
     外壳与卡面就"尺寸对不上"了。 */
  box-sizing: border-box;
  width: 224px;
  padding: 12px 0 0 12px;
}
.im-group-stack { position: relative; }
.im-group-stack-card {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--im-brand) 10%, transparent);
  background: color-mix(in srgb, var(--im-brand) 5%, transparent);
}
.im-group-face {
  position: relative;
  padding: 16px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--im-brand) 15%, transparent);
  /* 原版 bg-brand/5：卡面本身带一层极浅的主体色，与叠卡同族 */
  background: color-mix(in srgb, var(--im-brand) 5%, transparent);
}
.im-group-count {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.15;
  color: var(--im-ink);
}
.im-group-size { margin-top: 4px; font-size: 16px; color: var(--im-ink-3); }
.im-group-dup { margin-top: 4px; }
.im-group-node.is-selected .im-group-face {
  outline: 2px solid var(--im-brand);
  outline-offset: 1px;
}

/* ---------------- 小标签（照搬 .chip） ---------------- */
.im-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 20px;
  padding: 0 8px;
  border-radius: var(--im-r-pill);
  font-size: 11px;
  line-height: 1;
  white-space: nowrap;
  background: var(--im-hover);
  color: var(--im-ink-2);
}
.im-chip.is-brand { background: color-mix(in srgb, var(--im-brand) 12%, transparent); color: var(--im-brand); }
.im-chip.is-danger { background: color-mix(in srgb, var(--im-danger) 14%, transparent); color: var(--im-danger); }
.im-chip.is-ok { background: color-mix(in srgb, var(--im-ok) 14%, transparent); color: var(--im-ok); }
.im-chip.is-running { background: color-mix(in srgb, var(--im-brand) 12%, transparent); color: var(--im-brand); }
.im-chip--sm { height: 18px; padding: 0 6px; font-size: 10.5px; }

/* ---------------- 画布本体 ---------------- */
/* 画布本身是一块 panel-card：与 Imagora 的 .studio-canvas panel-card 同构，
   四周留出内边距，圆角裁切内容。 */
.im-canvas {
  position: relative;
  flex: 1;
  min-height: 0;
  margin: 0 12px 12px;
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-card);
  background: var(--im-surface);
  box-shadow: var(--im-shadow-card);
  overflow: hidden;
  /* 自成一个层叠上下文：画布里的 z-index 不许跟宿主面板抢层 */
  isolation: isolate;
}
.im-canvas .react-flow__attribution { display: none; }
.im-canvas .react-flow__background pattern circle { fill: color-mix(in srgb, var(--im-ink) 20%, transparent); }
.react-flow__node .im-panel-card { will-change: transform; }
/* 悬停的节点整体抬高，否则右侧那条操作栏会被相邻节点盖住（原版同一条规则） */
.react-flow__node:hover { z-index: 1001 !important; }
.react-flow__edges { z-index: 1200 !important; }

/* 连线三态。用 CSS :hover 而非 JS 内联：插件没有移植 edgeStyle 的四态驱动，
   这里就是唯一取色处，别再叠一层 JS 内联（内联优先级更高，会变成死规则）。
   transition 只含 stroke/stroke-width/opacity，与 Imagora 的 index.css 一致。 */
.react-flow__edge-path {
  stroke: var(--im-edge-idle);
  stroke-width: 1.5;
  transition: stroke 120ms ease, stroke-width 120ms ease, opacity 120ms ease;
}
.react-flow__edge:hover .react-flow__edge-path { stroke: var(--im-edge-hovered); stroke-width: 2.5; }
.react-flow__edge.selected .react-flow__edge-path { stroke: var(--im-edge-selected); stroke-width: 2.5; }
.react-flow__edge.animated .react-flow__edge-path { stroke-dasharray: 6 4; }
.react-flow__connection-path { stroke: var(--im-brand); stroke-width: 1.8; stroke-dasharray: 5 4; }

/* 连线把手：照原版做成横条，常态隐藏、悬停节点或正在连线时才显形。
   常显的小圆点会在密集画布上糊成一片。 */
.react-flow__handle.im-handle {
  width: 32px;
  height: 12px;
  border-radius: 6px;
  background: var(--im-brand);
  border: 1.5px solid var(--im-surface);
  opacity: 0;
  transition: opacity 0.15s ease;
}
.react-flow__node:hover .react-flow__handle.im-handle,
.react-flow__handle.im-handle.connectingfrom { opacity: 0.7; }
.react-flow__handle.im-handle.connectingto {
  opacity: 1;
  outline: 2px solid var(--im-brand);
  outline-offset: 2px;
}
.react-flow__attribution { display: none; }

.im-canvas .react-flow__minimap {
  background: var(--im-surface);
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-control);
}
/* 右上角选中操作栏：半透明浮层 + 一排按钮（Imagora 的 .studio-inspector） */
.im-inspector {
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: var(--im-r-control);
  background: var(--im-surface-float);
  border: 1px solid var(--im-line);
  box-shadow: var(--im-shadow-float);
}

/* ---------------- 弹窗（照搬 Imagora 的 modal-shell / modal-panel） ----------------
   全屏 grid 居中 + 四档宽度 + 头/身/脚三段。内容是「挤」还是「装得下」全看这套：
   宿主 Modal 的面板宽度按它自己的内容定，塞我们这种表单必然溢出被裁。 */
.im-modal-shell {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  padding: clamp(12px, 2vw, 24px);
  background: var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.32));
  backdrop-filter: blur(3px);
}
.im-modal-panel {
  display: flex;
  flex-direction: column;
  width: min(100%, 42rem);
  max-height: min(86dvh, 760px);
  overflow: hidden;
  padding: 20px;
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-card);
  outline: none;
  background: var(--im-surface);
  box-shadow: var(--dsw-elevation-prominent, 0 24px 70px rgba(15, 20, 25, 0.26));
}
.im-modal-panel--sm { width: min(100%, 26rem); }
.im-modal-panel--md { width: min(100%, 35rem); }
.im-modal-panel--lg { width: min(100%, 42rem); }
.im-modal-panel--wide { width: min(1100px, 96vw); max-height: min(86dvh, 880px); }
.im-modal-header { margin-bottom: 16px; }
.im-modal-title {
  margin: 0;
  color: var(--im-ink);
  font-size: 15px;
  font-weight: 650;
  letter-spacing: -0.02em;
}
.im-modal-subtitle {
  margin: 4px 0 0;
  max-width: 58ch;
  color: var(--im-ink-3);
  font-size: 12px;
  line-height: 1.55;
}
/* flex:1 + min-height:0 是「能滚」的前提。只写 overflow-y:auto 而高度不受约束的话，
   scrollHeight 永远等于 clientHeight，底部几行会被面板静默裁掉。 */
.im-modal-body {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
}
.im-modal-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
}

/* 左下角控件坞：带文字的一列，与 Imagora 的 DockRow 同构 */
.im-dock {
  position: absolute;
  left: 12px;
  bottom: 12px;
  z-index: 6;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 76px;
  padding: 3px;
  border-radius: var(--im-r-control);
  background: var(--im-surface);
  border: 1px solid var(--im-line);
  box-shadow: var(--im-shadow-card);
}
.im-dock-row {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 26px;
  padding: 0 8px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--im-ink-2);
  font-size: 12px;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}
.im-dock-row:hover { background: var(--im-hover); color: var(--im-ink); }
.im-dock-row.is-on { color: var(--im-brand); font-weight: 600; }
.im-dock-row--readout {
  cursor: default;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: var(--im-ink);
  border-bottom: 1px solid var(--im-line);
  border-radius: 0;
  margin-bottom: 2px;
}
.im-dock-row--readout:hover { background: transparent; color: var(--im-ink); }

.im-canvas .react-flow__controls {
  box-shadow: var(--im-shadow-card);
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-control);
  overflow: hidden;
}
.im-canvas .react-flow__controls-button {
  background: var(--im-surface);
  border-bottom: 1px solid var(--im-line);
  color: var(--im-ink-2);
  fill: currentColor;
}
.im-canvas .react-flow__controls-button:hover { background: var(--im-hover); }

/* React Flow 会给自定义节点类型套内置默认样式（固定 width:150px + 深色边框），
   导致外壳比内部卡片小、黑框错位割裂。我们的节点自带尺寸与样式，覆盖掉库默认。
   原版 index.css 也是这么做的，且是 width/min-width/border/background 四条一起覆盖。 */
.react-flow__node-image,
.react-flow__node-group,
.react-flow__node-prompt {
  width: auto !important;
  min-width: 0 !important;
  border: none !important;
  background: transparent !important;
}

/* 状态灯：排队琥珀 / 生成中主体色呼吸 / 完成绿 / 失败红 —— 与 Imagora 的 StatusLight 同族 */
/* 状态灯的居中容器（原版 flex justify-center py-0.5）：
   有了它，圆点在操作栏里才不会被视为可拉伸的 flex 项。 */
.im-rail-dot {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 0;
  line-height: 0;
}
/* 状态指示灯：原版就是一个 10px 圆点，**没有**光晕环 —— 环会在密集画布上糊成一片。
   就绪灰 / 排队琥珀 / 生成中品牌色呼吸 / 完成绿 / 失败红。 */
.im-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--im-ink) 22%, transparent);
  flex: none;
}
.im-dot.is-queued { background: var(--im-warn); }
.im-dot.is-running { background: var(--im-brand); animation: im-pulse 1.5s ease-in-out infinite; }
.im-dot.is-done { background: var(--im-ok); }
.im-dot.is-failed { background: var(--im-danger); }
@keyframes im-pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.35 } }

/* ---------------- 浮层 ---------------- */
/* 提示条：中性表面 + 只有图标着色。整块色底在暗色主题下很脏，也像报错页。 */
.im-banner {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 1.6;
  background: var(--im-surface-inset);
  color: var(--im-ink-2);
  border-bottom: 1px solid var(--im-line);
}
.im-banner-icon { flex: none; display: inline-flex; margin-top: 1px; color: var(--im-warn); }
.im-banner.is-error .im-banner-icon { color: var(--im-warn); }
.im-banner-text { min-width: 0; }
.im-banner-list { margin: 0; padding-left: 16px; display: grid; gap: 2px; }

/* 可拖到画布上的工具栏按钮：光标提示「能拖」，悬停时轻微抬起 */
.im-drag-source { cursor: grab; }
.im-drag-source:active { cursor: grabbing; }

/* 落点胶囊：外层只负责定位（transform 由 JS 直接写，跟着光标走），内层负责外观。
   外壳 portal 到 body 且 pointer-events:none —— 它绝不能挡住 dragover 的命中判定，
   否则胶囊自己会把 drop 事件吃掉。 */
.im-drop-chip-host {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  pointer-events: none;
  will-change: transform;
}
.im-drop-chip {
  display: none;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--im-r-pill);
  border: 1px solid color-mix(in srgb, var(--im-brand) 45%, transparent);
  background: var(--im-surface-float);
  color: var(--im-ink);
  font-size: 12.5px;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: var(--im-shadow-float);
}
.im-drop-chip.show { display: inline-flex; }
/* 两个图标互斥：拖到画布外时只剩红色 X，文案由 JS 改成「松开取消」 */
.im-drop-chip-icon { display: inline-flex; color: var(--im-brand); }
.im-drop-chip-icon--cancel { display: none; color: var(--im-danger); }
.im-drop-chip.is-outside {
  border-color: color-mix(in srgb, var(--im-danger) 45%, transparent);
  color: var(--im-danger);
}
.im-drop-chip.is-outside .im-drop-chip-icon--create { display: none; }
.im-drop-chip.is-outside .im-drop-chip-icon--cancel { display: inline-flex; }

.im-log {
  /* 原版形态：右下角一列纯文字，不可交互 —— 面板会挡住画布的拖拽与框选 */
  position: absolute;
  right: 12px;
  bottom: 12px;
  z-index: 40;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  max-width: 320px;
  pointer-events: none;
}
.im-log-line {
  font-size: 11px;
  line-height: 1.6;
  color: var(--im-ink-3);
  text-align: right;
  word-break: break-all;
  animation: im-log-in 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes im-log-in {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.im-modal-mask {
  position: absolute;
  inset: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.28));
}

.im-empty {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  pointer-events: none;
  color: var(--im-ink-3);
  font-size: 13px;
}
.im-empty strong { font-size: 15px; color: var(--im-ink-2); font-weight: 600; }

/* 画布内的字面按钮（弹窗走宿主组件库，不用这套） */
.im-range { accent-color: var(--im-brand); }

/* ---------------- 键盘可达性 ----------------
   宿主在 pointer 模态下把 :focus-visible 的 outline 关了，插件自绘的按钮
   （primary / ghost / icon / dock-row）如果不补焦点环，键盘用户完全看不出焦点在哪。
   原版 index.css 也是这么补的。 */
button:focus-visible,
[role='button']:focus-visible,
[role='option']:focus-visible,
input[type='range']:focus-visible {
  outline: 2px solid var(--im-brand);
  outline-offset: 3px;
}
/* .im-field 自己关掉了 outline，焦点环改用 box-shadow 补 */
.im-field:focus-visible {
  outline: 2px solid var(--im-brand);
  outline-offset: 1px;
}

/* ---------------- 减少动态效果 ----------------
   原版有一条全局兜底；插件原来只在 .im-dot.is-running 上无限脉冲，
   开了「减少动态效果」也照跳。 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ---------------- 动效层 ----------------
   与 Imagora 的 index.css 同一套：节点入场只动内层卡片，不动外层
   .react-flow__node —— 那层是 React Flow 的定位 transform，动它节点会甩飞。 */
.react-flow__node .im-panel-card { animation: im-enter-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes im-enter-up {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* 生成中按钮的呼吸光晕：原来只有状态灯在跳，卡片上的运行按钮完全静止 */
.im-btn-busy { animation: im-pulse-glow 1.6s ease-in-out infinite; }
@keyframes im-pulse-glow {
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--im-brand) 0%, transparent); }
  50%      { box-shadow: 0 0 0 6px color-mix(in srgb, var(--im-brand) 14%, transparent); }
}
`
