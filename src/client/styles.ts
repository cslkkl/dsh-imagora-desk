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
  /* 圆角分成四档，都对应原版的实测值：
     pill 胶囊 → card 页头/弹窗 16 → surface 卡片与画布 18 → control 输入控件 10
     另有 float 11（原版 minimap / controls）与 sm 8（原版 rounded-lg 一族）。 */
  --im-r-card: 16px;
  --im-r-surface: 18px;
  --im-r-float: 11px;
  --im-r-sm: 8px;
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
/* 品牌区：logo + 标题并排，与原版 studio-header 左端一致 */
.im-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  height: var(--im-h-ctl);
  padding: 0 2px 0 0;
  border: 0;
  background: transparent;
  color: var(--im-ink);
  cursor: pointer;
  flex: none;
}
.im-brand-title {
  /* 原版 .brand-swing__face h1 是 1.05rem + 负字距，不是整数 16px */
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.035em;
  color: var(--im-ink);
}
.im-brand {
  border-radius: 12px;
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), filter 0.28s ease;
}
/* 原版 hover：整块抬起 1px、放大 1.5%，光晕落在 logo 与标题上 */
.im-brand:hover {
  transform: translateY(-1px) scale(1.015);
}
.im-brand:hover svg {
  filter: drop-shadow(0 0 5px color-mix(in srgb, var(--im-brand) 28%, transparent));
}
.im-brand:hover .im-brand-title {
  color: var(--im-brand);
  filter: drop-shadow(0 5px 12px color-mix(in srgb, var(--im-brand) 18%, transparent));
}

/* 顶栏两行各是一块卡片容器（原版 .studio-header / .studio-toolbar）：
   细边框 + 卡片圆角 + 柔和阴影 + 卡片表面。做成贴边的裸条就会显得"毛坯"。
   控件等高 28px，共用一条水平基线。 */
/* 页头行里的按钮是胶囊形（原版只有 .studio-header 上下文才这样） */
.im-header .im-btn-ghost,
.im-header .im-btn-primary {
  border-radius: var(--im-r-pill);
}
.im-header {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin: 12px 12px 0;
  padding: 10px 14px;
  border: 1px solid var(--im-edge-idle);
  border-radius: var(--im-r-card);
  background: var(--im-surface);
  box-shadow: var(--im-shadow-card);
}
.im-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  /* 与页头同为卡片容器，但圆角略小（原版 .studio-toolbar 13px） */
  margin: 8px 12px 0;
  padding: 9px 10px;
  position: relative;
  border: 1px solid var(--im-edge-idle);
  border-radius: 13px;
  background: var(--im-surface);
  box-shadow: var(--im-shadow-card);
  z-index: 5;
}
/* 弹性占位：把后面那组按钮推到行尾。必须是不带父选择器的全局规则 ——
   只在 .im-toolbar 下定义的话，页头里用同一个类名不会生效，
   表现为「右侧没有按钮、全挤在左边」。 */
.im-spacer { flex: 1 1 auto; }
/* 工具栏里的次要按钮是深灰文字，不是品牌色 —— 原版 .studio-toolbar .btn-ghost 就是
   rgba(23,32,43,.72)。品牌色只在页头那一行与主行动上，否则整条工具栏都在发光。 */
.im-toolbar .im-btn-ghost {
  color: var(--im-ink-2);
}
/* 顶栏分左右两组（与 Imagora 同一分区）：左侧创建、右侧工作流，右侧组靠右对齐 */
.im-toolbar-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}
/* 左侧创建组右侧一条分隔线：两组动作性质不同，靠线分开比靠间距可靠（原版做法） */
.im-toolbar-group:not(.im-toolbar-group--end) {
  padding-right: 10px;
  border-right: 1px solid var(--im-edge-idle);
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
  gap: 4px;
  border: 0;
  /* 圆角按原版分档：一般场景 ghost 10 / primary 11，只有页头那一行是胶囊。
     见下面 .im-btn-ghost / .im-btn-primary / .is-pill 三条。 */
  border-radius: var(--im-r-control);
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease;
}
/* 页头里的按钮才是胶囊（原版 .studio-header .btn-ghost 才有 999px） */
.im-btn-primary.is-pill,
.im-btn-ghost.is-pill {
  border-radius: var(--im-r-pill);
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
  border-radius: 11px;
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
  border-radius: 10px;
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
.im-btn-sm { padding: 4px 12px; font-size: 12px; }
.im-btn-xs { padding: 4px 8px; font-size: 11px; }
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
  /* 原版 .field-control = rounded-lg（8px），不是 --r-control(10) */
  border-radius: 8px;
  background: var(--im-surface);
  color: var(--im-ink);
  font-size: 14px;
  line-height: 1.6;
  padding: 8px 20px;
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
/* 一组同类字段的容器：参数说明里成组出现（接口三项、目录两项） */
.im-fieldset {
  display: grid;
  gap: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--im-line);
}
/* 字段下面那排按钮：按钮多时自动换行，不挤成一条 */
.im-field-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
}
.im-field-hint {
  margin: 5px 0 0;
  font-size: 12px;
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

/* ---------------- 自绘下拉（照搬 Imagora 的 .select-* 16 条规则） ----------------
   原版用 Tailwind @apply 写，这里全部展开成普通声明；颜色一律走 --im-* 语义 token。
   背景与文字成对取自同一套 token —— 混用两套会出「黑底黑字」。 */
.im-select-root {
  position: relative;
  display: inline-block;
  min-width: 0;
  max-width: 260px;
}

/* 触发器：外形沿用输入控件（等高、同边框、同底色），加上图标与省略号 */
.im-select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  height: var(--im-h-ctl);
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid var(--im-line-strong);
  border-radius: 8px;
  background: var(--im-surface);
  color: var(--im-ink);
  font-family: inherit;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease;
}
.im-select-trigger:hover { border-color: var(--im-ink-3); }
.im-select-trigger:disabled { cursor: not-allowed; opacity: 0.55; }
.im-select-value {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.im-select-label {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 箭头：展开时翻 180°（原版用 Tailwind 的 rotate-180 + transition） */
.im-select-caret {
  flex: none;
  color: var(--im-ink-3);
  transition: transform 0.2s ease;
}
.im-select-trigger.is-open .im-select-caret { transform: rotate(180deg); }

/* 浮层：portal 到 body + fixed 定位，不受任何祖先的 overflow 裁切 */
.im-select-list {
  position: fixed;
  z-index: 70;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-control);
  background: var(--im-surface-float);
  box-shadow: var(--im-shadow-float);
}

/* 选项行 */
.im-select-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 34px;
  padding: 7px 10px;
  box-sizing: border-box;
  border-radius: 7px;
  background: transparent;
  color: var(--im-ink-2);
  font-family: inherit;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
}
.im-select-option.is-active {
  color: var(--im-brand);
  background: color-mix(in srgb, var(--im-brand) 7%, transparent);
}
.im-select-option.is-selected {
  color: var(--im-brand);
  font-weight: 600;
}
.im-select-check { flex: none; }

/* 搜索框：贴在列表顶部，与选项区用一条细线分开。
   输入框本身不要 field 的边框，否则「框里套框」，在已经带边框的浮层里显得脏。 */
.im-select-search {
  flex: none;
  margin-bottom: 4px;
  padding: 2px 2px 6px;
  border-bottom: 1px solid var(--im-line);
}
.im-select-search-input {
  width: 100%;
  height: 30px;
  padding: 0 9px;
  box-sizing: border-box;
  border: 0;
  border-radius: 7px;
  background: color-mix(in srgb, var(--im-brand) 5%, transparent);
  color: var(--im-ink);
  font-family: inherit;
  font-size: 13px;
}
.im-select-search-input::placeholder { color: var(--im-ink-3); }

.im-select-empty {
  padding: 14px 10px;
  color: var(--im-ink-3);
  font-size: 12px;
  text-align: center;
}

/* 可滚动区：min-height:0 才能让 flex 子项真的滚动（否则内容把容器撑开） */
.im-select-rows {
  min-height: 0;
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: auto;
}

/* 分组标题：粘在滚动容器顶部，长列表滚到中段也知道自己在哪一组 */
.im-select-group-title {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 6px 10px 4px;
  background: var(--im-surface-float);
  color: var(--im-ink-3);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
.im-select-group-rows { margin: 0; padding: 0; list-style: none; }
.im-select-group + .im-select-group { margin-top: 2px; }

/* 自由输入行：固定在滚动区之外，列表很长时也看得见，不用滚到底才能手填 */
.im-select-custom {
  flex: none;
  margin-top: 4px;
  padding-top: 4px;
  border-top: 1px dashed var(--im-line);
}

/* 节点内的下拉要更紧凑：14px 在 7fr 列里会被截成「1024x1024 (1:1) (0…」 */
.im-canvas .im-select-root { max-width: none; }
/* 撑满所在列（节点里的尺寸/质量是两列网格，各自吃满一格） */
.im-select-fill { display: block; width: 100%; max-width: none; }
.im-select-fill .im-select-trigger { width: 100%; }
.im-canvas .im-select-trigger {
  height: 30px;
  padding: 0 8px;
  font-size: 12px;
}

/* 节点内的输入/下拉用紧凑档：原版 .studio-canvas .node-pop 把字号压到 12px、
   横向内边距收成 8px —— 14px 在 7fr 列里会被截成「1024x1024 (1:1) (0…」。 */
.im-field--compact,
.im-canvas .im-field {
  height: 30px;
  padding: 4px 8px;
  font-size: 12px;
}
.im-canvas textarea.im-field {
  height: auto;
  padding: 8px;
}

/* ---------------- 节点卡片（照搬 .panel-card） ----------------
   三类节点共用同一块面板，靠内容区分，不靠色相——与 Imagora 一致。 */
.im-panel-card {
  position: relative;
  border: 1px solid var(--im-line);
  /* 原版 .panel-card 的 18px 写在未分层规则里，压过 @layer 的 rounded-xl(12) */
  border-radius: var(--im-r-surface);
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
  /* 原版缩略图是 .rounded（4px），不是 8 */
  border-radius: 4px;
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
  /* 插件里的 chip 全部用作节点角标，对应原版 .chip--sm（18px），不是 .chip（28px） */
  height: 18px;
  padding: 0 8px;
  border-radius: var(--im-r-pill);
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  background: var(--im-hover);
  color: var(--im-ink-2);
}
/* 可点的角标（蒙版）：看起来是标签，实际是按钮 —— 所以要有 pointer 与 hover 反馈，
   否则用户永远不知道它能点。 */
.im-chip--action {
  border: 0;
  font: inherit;
  font-size: inherit;
  cursor: pointer;
  transition: filter 0.15s ease;
}
.im-chip--action:hover { filter: brightness(0.94); }
.im-chip.is-brand { background: color-mix(in srgb, var(--im-brand) 12%, transparent); color: var(--im-brand); }
.im-chip.is-danger { background: color-mix(in srgb, var(--im-danger) 14%, transparent); color: var(--im-danger); }
.im-chip.is-ok { background: color-mix(in srgb, var(--im-ok) 14%, transparent); color: var(--im-ok); }
.im-chip.is-running { background: color-mix(in srgb, var(--im-brand) 12%, transparent); color: var(--im-brand); }
.im-chip--sm { height: 18px; padding: 0 6px; font-size: 10px; }

/* ---------------- 画布本体 ---------------- */
/* 画布本身是一块 panel-card：与 Imagora 的 .studio-canvas panel-card 同构，
   四周留出内边距，圆角裁切内容。 */
.im-canvas {
  position: relative;
  flex: 1;
  min-height: 0;
  margin: 0 12px 12px;
  border: 1px solid var(--im-line);
  /* 原版 .studio-canvas 是 18px（不是 --r-card 的 16） */
  border-radius: var(--im-r-surface);
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
  /* 原版连接点是 4px 圆角 + 白色外环，没有边框 */
  border-radius: 4px;
  background: var(--im-brand);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--im-surface) 85%, transparent);
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
  /* 原版 .studio-inspector 是 rounded-lg(8) + max-width + 横向可滚：
     选中节点很多时按钮会顶出画布，靠这两条兜住 */
  max-width: calc(100% - 24px);
  overflow-x: auto;
  scrollbar-width: none;
  right: 12px;
  top: 12px;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: var(--im-r-sm);
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
/* 可选列表（保存弹窗里的已有工作流）：点一行就把名字填进去 */
.im-pick-list {
  margin-top: 6px;
  max-height: 144px;
  overflow-y: auto;
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-sm);
}
.im-pick-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 6px 12px;
  border: 0;
  background: transparent;
  color: var(--im-ink-2);
  font: inherit;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.im-pick-row:hover { background: color-mix(in srgb, var(--im-brand) 5%, transparent); color: var(--im-brand); }
.im-pick-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.im-pick-meta { flex: none; font-size: 10px; color: var(--im-ink-3); }

/* 弹窗里的说明/计数小字：footer 左侧或内容顶部都用它 */
.im-modal-note {
  margin: 0;
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--im-ink-3);
}
.im-modal-note:first-child:not(:only-child) { margin-right: auto; }
.im-modal-footer .im-modal-note { margin-right: auto; }

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
  /* 宽度交给行自己（行是固定 64px）：这里再写 min-width 会多出一条右侧空白 */
  min-width: 0;
  padding: 0;
  /* 原版 .react-flow__controls 是 11px；内边距由行自己带，容器不留 */
  border-radius: var(--im-r-float);
  background: var(--im-surface);
  border: 1px solid var(--im-line);
  box-shadow: var(--im-shadow-card);
}
.im-dock-row {
  display: flex;
  align-items: center;
  /* 有图标之后必须左对齐：居中会让 9 行的图标与文字各自错开，看着参差 */
  justify-content: flex-start;
  gap: 4px;
  /* 原版 .dock-row 固定 64×30：四位数百分比与两字标签都放得下，列宽也不会被撑开。
     box-sizing 必须写：不写的话 64 是内容宽，加上左右各 8px 内边距实际变成 80，
     整列右侧就多出一条空白。 */
  box-sizing: border-box;
  width: 64px;
  min-height: 30px;
  padding: 0 8px;
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.02em;
  border: 0;
  /* 原版 dock-row 不设圆角：圆角由容器 overflow:hidden 裁出来 */
  border-radius: 0;
  background: transparent;
  color: var(--im-ink-2);
  font-size: 12px;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}
.im-dock-row-label {
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.02em;
  white-space: nowrap;
}
/* 缩放读数：等宽数字 + 居中，百分比变化时列宽不跳 */
.im-dock-row-value {
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
}
/* hover 用品牌色淡底（原版 .react-flow__controls-button:hover 的做法） */
.im-dock-row:hover {
  background: color-mix(in srgb, var(--im-brand) 10%, transparent);
  color: var(--im-brand);
}
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

/* ============ 画布自定义鼠标指针（一套四态，原样照搬 Imagora） ============
 * 无限画布底色浅、节点稀疏时系统箭头容易"视觉丢失"，这里把画布内所有状态都换成
 * 自定义高对比光标：深灰（#1e293b）图形 + 白色外描边，品牌蓝点缀——
 * 空白画布 = 十字准星（中心品牌色加号，与拖拽落点示意同款图形）；
 * 节点悬浮 = 四向移动（可拖拽）；节点拖拽中 / 画布平移 = 四向 + 实心中心（按下态）；
 * 连线悬浮 = 经典箭头（可点选/双击删除/端点接线）。
 * data URI 无法引用 CSS 变量，点缀色用固定蓝；节点内输入框/按钮保留各自光标。
 * 文件拖拽悬停在画布上时（.canvas-drop-active）切系统 copy 光标，比准星更明确"可以放进来"。
 * !important 保证覆盖 @xyflow/react 自带样式（依赖注入顺序不受 import 位置控制）。 */
.react-flow__pane {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 2v6M12 16v6M2 12h6M16 12h6' stroke='%23ffffff' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M12 2v6M12 16v6M2 12h6M16 12h6' stroke='%231e293b' stroke-width='2.2' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='12' r='4.6' fill='%23ffffff' stroke='%231e293b' stroke-width='1'/%3E%3Cpath d='M12 10.2v3.6M10.2 12h3.6' stroke='%233b82f6' stroke-width='1.8' stroke-linecap='round'/%3E%3C/svg%3E")
      12 12,
    crosshair !important;
}
/* 节点悬浮：四向移动（图片/图片组/提示词卡片均可拖拽） */
.react-flow__node {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5' stroke='%23ffffff' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5' stroke='%231e293b' stroke-width='2.2' stroke-linecap='round'/%3E%3Cpath d='M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3' stroke='%231e293b' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")
      12 12,
    grab !important;
}
/* 节点拖拽中 / 左键拖拽平移中：四向 + 实心中心（按下状态） */
.react-flow__node.dragging,
.react-flow__pane.dragging {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5' stroke='%23ffffff' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5' stroke='%231e293b' stroke-width='2.2' stroke-linecap='round'/%3E%3Cpath d='M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3' stroke='%231e293b' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3Ccircle cx='12' cy='12' r='3.6' fill='%23ffffff' stroke='%231e293b' stroke-width='1.4'/%3E%3Ccircle cx='12' cy='12' r='1.8' fill='%233b82f6'/%3E%3C/svg%3E")
      12 12,
    grabbing !important;
}
/* 连线悬浮：经典箭头（可点选/双击删除/端点接线） */
.react-flow__edge {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M4.5 2.5 20 12l-7.2 1.5 3.1 7.3-3.6 1.5-3.1-7.3-4.7 4.6z' stroke='%23ffffff' stroke-width='4' stroke-linejoin='round' fill='none'/%3E%3Cpath d='M4.5 2.5 20 12l-7.2 1.5 3.1 7.3-3.6 1.5-3.1-7.3-4.7 4.6z' fill='%231e293b' stroke='%231e293b' stroke-width='1.4' stroke-linejoin='round'/%3E%3C/svg%3E")
      4 3,
    pointer !important;
}
/* 节点内交互元素保留各自光标：输入类 = 文本，按钮 = 手型（不被节点移动光标覆盖） */
.react-flow__node :is(input, textarea, select, [contenteditable]) {
  cursor: text;
}
.react-flow__node button {
  cursor: pointer;
}
/* 文件拖拽悬停在画布上：系统 copy 光标（!important 需压过上面的准星规则） */
.im-canvas.is-drop-active .react-flow__pane {
  cursor: copy !important;
}

/* ---------------- 浮层 ---------------- */
/* 提示条：中性表面 + 只有图标着色。整块色底在暗色主题下很脏，也像报错页。 */
.im-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 30px;
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
/* 把手：平时几乎透明，hover 才浮现（原版 .btn-drag-grip 的做法）。
   没有它，用户看不出这个按钮和旁边那几个的区别。 */
.im-drag-source > svg {
  opacity: 0;
  transform: translateX(-3px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  color: var(--im-ink-3);
}
.im-drag-source:hover > svg {
  opacity: 1;
  transform: translateX(0);
}

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
/* 原版日志行带白色 text-shadow：点阵浅底上直接压灰字会糊，加一圈白晕才读得清 */
.im-log-line {
  text-shadow: 0 1px 3px color-mix(in srgb, var(--im-surface) 90%, transparent);
  font-size: 11px;
  line-height: 1.6;
  color: var(--im-ink-3);
  text-align: right;
  word-break: break-all;
  animation: im-log-in 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes im-log-in {
  from { opacity: 0; transform: translateY(8px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* ---------------- 生成中占位卡（移植 GenerationPending） ----------------
   渐近假进度 + 文案轮播。进度条只动 transform，不给 width 做动画。 */
/* 只给读屏的文本：不能 display:none（会被移出无障碍树） */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
.im-pending {
  margin-top: 8px;
  padding: 8px 10px;
  border-radius: var(--im-r-sm);
  background: var(--im-surface-inset);
  border: 1px solid var(--im-line);
}
.im-pending-label {
  font-size: 11px;
  line-height: 1.5;
  color: var(--im-ink-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.im-pending-track {
  margin-top: 6px;
  height: 3px;
  border-radius: var(--im-r-pill);
  background: var(--im-hover);
  overflow: hidden;
}
.im-pending-bar {
  height: 100%;
  border-radius: inherit;
  background: var(--im-brand);
  transform-origin: left center;
  transition: transform 0.9s linear;
}

/* ---------------- 大图预览（移植 ZoomModal） ----------------
   遮罩与坞上的控件都压在图片上，颜色必须与图片内容形成对比、又与主题自洽。
   做法：一律从 --im-ink 与 --im-surface 派生（浅色主题 → 深底浅字，暗色主题 → 浅底深字），
   不写死颜色、也不混用宿主的 --dsw-* token。

   注意这一组控件**故意**跟随主题翻转，而原版是恒定深底浅字：原版是独立应用、
   预览永远在深色胶片上；插件要跟宿主明暗一起走，所以这里让对比方向跟着主题。
   两种做法都能保证可读，跨体系混色才会出现「黑底黑字」。 */
.im-zoom-overlay {
  --im-chrome-bg: color-mix(in srgb, var(--im-ink) 58%, transparent);
  --im-chrome-bg-hover: color-mix(in srgb, var(--im-ink) 76%, transparent);
  --im-chrome-ink: var(--im-surface);
  --im-chrome-line: color-mix(in srgb, var(--im-surface) 24%, transparent);

  position: fixed;
  inset: 0;
  z-index: 60;
  user-select: none;
  background: color-mix(in srgb, var(--im-ink) 62%, transparent);
  /* 比弹窗那档更轻的模糊：预览是「看这张图」，背景只需退到看不清字 */
  backdrop-filter: blur(4px) saturate(0.96);
  -webkit-backdrop-filter: blur(4px) saturate(0.96);
}
.im-zoom-viewport {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
}
.im-zoom-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transform-origin: center center;
  user-select: none;
  -webkit-user-drag: none;
}
/* 顶部身份条：只压住两个角，中间整块留给图片 */
.im-zoom-top {
  position: absolute;
  inset: 0 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px;
  pointer-events: none;
}
.im-zoom-name {
  pointer-events: auto;
  display: flex;
  align-items: center;
  height: var(--im-h-ctl);
  max-width: 62vw;
  padding: 0 10px;
  border-radius: var(--im-r-sm);
  background: var(--im-chrome-bg);
  color: var(--im-chrome-ink);
  box-shadow: var(--im-shadow-float);
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.im-zoom-close {
  pointer-events: auto;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--im-h-ctl);
  height: var(--im-h-ctl);
  padding: 0;
  border: 0;
  border-radius: var(--im-r-pill);
  background: var(--im-chrome-bg);
  color: var(--im-chrome-ink);
  box-shadow: var(--im-shadow-float);
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.im-zoom-close:hover { background: var(--im-chrome-bg-hover); }
.im-zoom-close > svg { width: 14px; height: 14px; }

/* 底部控制坞：单行三组，组间一条细分隔线；不占图片空间 */
.im-zoom-dock-wrap {
  position: absolute;
  inset: auto 0 12px;
  display: flex;
  justify-content: center;
  padding: 0 12px;
}
.im-zoom-dock {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  border-radius: var(--im-r-float);
  background: var(--im-chrome-bg);
  color: var(--im-chrome-ink);
  box-shadow: var(--im-shadow-float);
  font-size: 12px;
}
.im-zoom-group {
  display: flex;
  align-items: center;
  gap: 4px;
}
/* 高度统一钉在 --im-h-ctl：只按 padding 撑高时，图标按钮会比文字按钮高一圈，
   一行里出现两种基线（原版为这个坑写过注释）。 */
.im-zoom-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--im-h-ctl);
  padding: 0 10px;
  border: 0;
  border-radius: var(--im-r-sm);
  background: var(--im-chrome-line);
  color: var(--im-chrome-ink);
  font: inherit;
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.im-zoom-btn:hover:not(:disabled) { background: var(--im-chrome-bg-hover); }
.im-zoom-btn:disabled { opacity: 0.5; cursor: default; }
.im-zoom-btn--icon {
  width: var(--im-h-ctl);
  padding: 0;
}
.im-zoom-btn--icon > svg { width: 12px; height: 12px; }
.im-zoom-readout {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: var(--im-h-ctl);
  font-variant-numeric: tabular-nums;
}
.im-zoom-divider {
  flex: none;
  width: 1px;
  height: 16px;
  margin: 0 2px;
  background: var(--im-chrome-line);
}
/* 复制反馈：绝对定位在坞上方，不进布局（一变宽窄按钮就会挪位置） */
.im-zoom-toast {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  max-width: 60vw;
  padding: 4px 8px;
  border-radius: var(--im-r-sm);
  background: var(--im-chrome-bg);
  color: var(--im-chrome-ink);
  box-shadow: var(--im-shadow-float);
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
}
.im-zoom-toast.is-copied { background: var(--im-ok); }
.im-zoom-toast.is-failed { background: var(--im-warn); }

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
