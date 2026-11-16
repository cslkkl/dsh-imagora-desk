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

  /* 表面材质：**按宿主的三层逐一映射，不要全用同一档**。
   *
   * 浅色主题下 layer-1/2 都是纯白（只有深色才分档），所以"全都用 layer-1"在浅色里
   * 看不出错；一到暗色就暴露：卡片、弹窗、下拉、操作栏全是 #232324 一个颜色，
   * 浮层完全浮不起来，整块界面糊成一团。这正是维护者说的「深色模式感觉有差异」。
   *
   *   卡片    → bg-layer-1（暗 #232324）
   *   台面    → bg-layer-2（暗 #2c2c2e，比卡片亮一档）
   *   浮层    → bg-layer-2（同上）＋ elevation-prominent 阴影
   *   内嵌    → bg-module-platform（暗 #353638，最亮的一档，用作缩略图/输入框底）
   *
   * 别用 bg-layer-3：它在宿主暗色里是 #1b1b1c，比 layer-1 还深，方向是反的。
   * 也别用 bg-overlay：浅色下是 #e9ecf2，比卡片还灰。 */
  --im-surface: var(--dsw-alias-bg-layer-1, #fff);
  --im-surface-panel: var(--dsw-alias-bg-layer-2, var(--dsw-alias-bg-layer-1, #fff));
  --im-surface-inset: var(--dsw-alias-bg-module-platform, #f9fafb);
  --im-surface-float: var(--dsw-alias-bg-layer-2, var(--dsw-alias-bg-layer-1, #fff));
  /* 页面底（.im-root）：浅色要比卡片**暗**一档（#f9fafb vs 白），暗色要比卡片**更暗**
     （#151517 vs 卡片 #232324）—— 两个方向都是「页面在最后面」。
     单靠一个 token 做不到：bg-module-platform 浅色是灰（对）、暗色是 #353638（比卡片还亮，反了）。
     所以这一档用 dark 块单独改写，见下面 body[data-ds-dark-theme]。 */
  --im-surface-page: var(--dsw-alias-bg-module-platform, #f9fafb);

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

  /* —— 原版旧名的兼容别名（**不是**给本项目代码用的，别在这里取色）——
   *
   * 原版 Imagora 从 edgeStyle 那次提交起，保存工作流时会把连线外观**内联进 JSON**：
   *     "style": { "stroke": "var(--edge-stroke-idle)", ... }
   * 这些是原版的变量名。var() 写了但变量不存在、又没有兜底值时，浏览器判该声明
   * 「计算值无效」→ stroke 回到 initial 的 none → **整条连线消失**。
   *
   * 主要的修法在 lib/workflow.ts 的 sanitizeEdges（加载时丢掉存档里的表现层字段），
   * 这里补一条别名作为第二道闸：万一还有别处（节点内联样式、旧快照、用户手改的 JSON）
   * 引用到这几个名字，也能解析出颜色，而不是让元素无声消失。
   * 让「引用了未定义变量」这种数据问题演变成「画面空白」，代价太大。 */
  --edge-stroke-idle: var(--im-edge-idle);
  --edge-stroke-hovered: var(--im-edge-hovered);
  --edge-stroke-selected: var(--im-edge-selected);

  /* 尺寸阶梯（**控件高度只有这两档，见下**）：紧凑 28 → 表单 38。
   *
   * ⚠️ 这两行的纪律：任何「可点/可输入」的控件都必须二选一，不许自己用
   * padding + line-height 撑高。实测过一遍全项目，各写各的会漂成 10 种：
   *   13.8 / 17.2 / 18 / 21.2 / 22.4 / 23.1 / 28 / 36.4 / 40.4 / 87.5
   * 其中 40.4 是 .im-field 靠 padding: 8px 20px + 14px/1.6 算出来的，
   * 而紧挨着它的下拉触发器写死 --im-h-ctl(28) —— 同一行差 12.4px，
   * 就是维护者报的「下拉框又是一个高度、跟输入框对不齐」。
   *
   * 分两档而不是一档，是因为两处场景本来就不同：
   *   紧凑档 28：顶栏、工具栏、节点卡内部、生成历史那两条带子
   *   表单档 38：设置 / 保存 / 加载 / 粘贴导入这些表单弹窗
   * 弹窗里要并排的按钮跟输入框同档（「.im-field-control」 那条规则）。
   *
   * 例外（不算进阶梯）：textarea 高度自适应、.im-chip 是角标不是控件（18）、
   * .im-icon-btn 是正方形图标按钮（宽=高=紧凑档）。 */
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
  --im-r-xs: 4px;
  /* 这两个是原版里专属的档：工具栏 13、品牌区 hover 12 */
  --im-r-toolbar: 13px;
  --im-r-brand: 12px;

  /* 阴影走宿主 elevation：写死 rgba 在深色主题下等于没有阴影 */
  --im-shadow-card: var(--dsw-elevation-soft, 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 12px rgba(0, 0, 0, 0.04));
  --im-shadow-float: var(--dsw-elevation-panel, 0 6px 22px rgba(0, 0, 0, 0.12));

  /* —— 弹窗的两条「提亮」边：描边 + 顶部内高光 ——
   *
   * 原版弹窗的立体感来自**两处往白里提亮**，不是来自投影：
   *   border:   1px solid rgba(255,255,255,.68)   （index.css:749）
   *   box-shadow: …, inset 0 1px 0 rgba(255,255,255,.8) （index.css:754）
   * 它们表达的是「光从左上来」，所以边框比底色**更白**。
   *
   * ⚠️ 这两条是**唯一无法用语义 token 表达**的取值：--im-line 是「分隔线」语义
   * （暗色白 12%），拿它当描边会让弹窗失去「浮起来」的观感（亮色下尤其明显，白底上
   * 一条灰线看着像分隔而不是边缘）。所以照 --im-scrim 的同一套处理：写死原版值，
   * 再在暗色块里单独压淡（见下面 body[data-ds-dark-theme]）——
   * 白 68% 压在白 12% 的界面上一道亮边会发光，必须两套。 */
  --im-modal-edge: color-mix(in srgb, #fff 68%, transparent);
  --im-modal-glow: inset 0 1px color-mix(in srgb, #fff 80%, transparent);

  --im-shadow-modal: var(--dsw-elevation-prominent, 0 24px 70px rgba(15, 20, 25, 0.26)),
    var(--im-modal-glow);
  /* 画布节点卡专用的一档：原版 .node-pop 是「12/26 的大投影 + 顶部 1px 内高光」，
     比普通卡片重一档（节点要浮在点阵画布之上）。
     ⚠️ 那道内高光必须**往亮里派生**：写成「surface 90%」在浅色下是白（对），
     到暗色下就成了近黑的 rgb(0.137 0.137 0.141)，等于给每张卡顶边压一道阴影（错）。
     掺 10% 白就两头都对：浅色几乎看不出（原版本来就几乎看不出），暗色是一道细亮边。 */
  --im-shadow-node: var(--dsw-elevation-panel, 0 12px 26px rgba(33, 44, 53, 0.12)),
    inset 0 1px color-mix(in srgb, var(--im-surface) 90%, #fff);
  /* 画布台面：原版实测 0 18px 45px rgba(31,41,55,.09) + 顶部 1px 内高光 */
  --im-shadow-canvas: var(--dsw-elevation-prominent, 0 18px 45px rgba(31, 41, 55, 0.09)),
    inset 0 1px color-mix(in srgb, var(--im-surface) 90%, #fff);
  /* 弹窗 / 预览遮罩：**不跟主题翻转、也不取宿主的 mask token**。
   *
   * 原版是固定值 rgba(20,26,31,.62)，弹窗与放大预览共用这一个（index.css 的
   * --scrim-bg）。宿主 bg-mask-1 浅色只有 24%（#0000003d），比原版淡一大截 ——
   * 整屏预览时底下界面还看得清清楚楚，图和背景抢注意力。
   * 遮罩的语义是「把底下的界面推远」，两种主题下都该压暗，所以写死这档深色：
   * 暗色下它同样只是压暗（不会像从 ink 派生那样变成白纱）。 */
  --im-scrim: color-mix(in srgb, #141a1f 62%, transparent);
  /* 嵌套弹窗（弹窗里再开一个弹窗）的遮罩：原版 --scrim-bg-nested 是 44%，
     比外面那层淡 —— 两层都 62% 会把下层弹窗糊成一片、看不出还有东西在下面。 */
  --im-scrim-nested: color-mix(in srgb, #141a1f 44%, transparent);
}

/* 暗色主题下**必须单独覆盖的几条**（其余 token 都会随宿主自动翻转）。
 *
 * 1. 页面底：浅色里 bg-module-platform 是比卡片暗的灰（对），暗色里却比卡片**亮**
 *    （#353638 vs #232324），页面会比卡片还突出、层次整个翻过来。这里改指向
 *    bg-base（暗 #151517），于是"页面 < 画布 < 卡片 < 浮层"由深到浅，方向正确。
 * 2. 节点/画布卡的内高光：inset 那一层在浅色是"白色提亮"，暗色若还从表面色派生
 *    就会变成一道暗边。暗色下改成极淡的白色（8%），只是一条能看出边界的细线。
 * 3. 弹窗的描边与内高光（--im-modal-edge / --im-modal-glow）：原版白 68% 与白 80%
 *    是给白底准备的；暗色底上原样照搬就是一圈发光边框。压到 14% / 10% —— 参照宿主
 *    自己的 border-l3（暗 #ffffff29 ≈ 16%）与节点内高光那条 8%，落在同一档。
 *    判据：暗色下面板边缘应「能看出边界」，不是「在发光」。
 *
 * 只写这几条是有意的：能用「宿主 token 自动翻转」解决的，就不要写第二个主题块。 */
body[data-ds-dark-theme] {
  --im-surface-page: var(--dsw-alias-bg-base, #151517);
  --im-shadow-node: var(--dsw-elevation-panel, 0 12px 26px rgba(0, 0, 0, 0.4)),
    inset 0 1px color-mix(in srgb, #fff 8%, transparent);
  --im-shadow-canvas: var(--dsw-elevation-prominent, 0 18px 45px rgba(0, 0, 0, 0.4)),
    inset 0 1px color-mix(in srgb, #fff 8%, transparent);
  --im-modal-edge: color-mix(in srgb, #fff 14%, transparent);
  --im-modal-glow: inset 0 1px color-mix(in srgb, #fff 10%, transparent);
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
  background: var(--im-surface-page);
  color: var(--im-ink);
  /* 三层（页头 / 工具栏 / 画布）之间的间距由 gap 统一提供，
     不靠各自的 margin 相加 —— 原版就是 flex flex-col gap-2（8px）。 */
  gap: 8px;
  padding: 8px 12px 12px;
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
  border-radius: var(--im-r-brand);
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
  padding: 10px 14px;
  /* 原版实测：边框 rgba(31,41,55,.08) —— 比通用 --im-line(.12) 更淡一档，
     所以用「墨色掺 8%」而不是直接拿 --im-line，否则页头两行看着比卡片还硬。 */
  border: 1px solid color-mix(in srgb, var(--im-ink) 8%, transparent);
  border-radius: var(--im-r-card);
  background: var(--im-surface);
  box-shadow: var(--im-shadow-card);
}
.im-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  /* 与页头同为卡片容器，但圆角略小（原版 .studio-toolbar 13px）、
     边框再淡一点点（实测 rgba(31,41,55,.09)） */
  padding: 9px 10px;
  position: relative;
  border: 1px solid color-mix(in srgb, var(--im-ink) 9%, transparent);
  border-radius: var(--im-r-toolbar);
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
  /* 高度走 token，不用 padding 撑。默认动作按钮（不带 -sm / -xs）是表单档 38，
     与同屏的输入框等高；-sm 才是紧凑档 28。早先靠 padding: 8px 16px 撑，
     算出来 33.6px —— 又一个「跟谁都不相等」的高度。 */
  height: var(--im-h-field);
  padding: 0 16px;
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
  border-radius: var(--im-r-float);
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
  border-radius: var(--im-r-control);
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
/* 小按钮：紧凑档 28（顶栏、工具栏、节点操作栏、历史行）。高度走 token 而不是
 * padding —— 4px 12px 撑出来是 22.4px，与旁边 28px 的下拉/输入永远差半档。 */
.im-btn-sm { height: var(--im-h-ctl); padding: 0 12px; font-size: 12px; }
/* 极小档：只给「行内附属动作」用（历史条目里那几个、错误边界里的重试）。
 * 24px 是紧凑档与 18px 角标之间的中间档，不是随手取的数：再小点击区域就不够了。 */
.im-btn-xs { height: 24px; padding: 0 8px; font-size: 11px; }
/* 危险修饰：文字与涟漪同为红色，配合 ghost 使用 */
.im-btn-danger { color: var(--im-danger); --im-btn-fill: var(--im-danger); }

.im-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* 原版 .btn-icon--sm 声明 30×30 / 圆角 8，但真机实测圆角是 **10**：
     .btn-ghost { border-radius: 10px } 写在未分层规则里，压过了 @layer 里的
     btn-icon--sm。两处叠用时的实际值以实测为准。
     尺寸取紧凑档（28×28）：它同时带 .im-btn-ghost，而那条基础规则现在把高度
     钉在表单档 38 —— 不在这里显式覆盖，图标按钮会比同一栏的文字按钮高一圈。 */
  width: var(--im-h-ctl);
  min-width: var(--im-h-ctl);
  height: var(--im-h-ctl);
  min-height: var(--im-h-ctl);
  padding: 0;
  border: 0;
  border-radius: var(--im-r-control);
  background: transparent;
  /* 颜色与 hover 涟漪交给同时挂上的 .im-btn-ghost / .im-btn-danger：
     原版这里就是 btn-ghost btn-icon btn-icon--sm 三个类叠出来的，
     不再另写一套中性灰。两套并存会让节点图标和工具栏按钮变成两种观感。 */
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
  /* 与顶栏那排按钮同高（紧凑档）。写 22 时它夹在 28 高的按钮中间矮一截，
     而它本来是「一眼扫到花销」的东西，矮下去反而不显眼。 */
  height: var(--im-h-ctl);
  padding: 0 10px;
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

/* ---------------- 控件面：输入框与下拉触发器 ----------------
 *
 * **两者共用一组声明**，这是照上游的结构来的：上游 Select 的触发器是
 * 「className="field-control select-trigger …"」 —— 它同时带输入控件的类，所以高度、
 * 左右内边距、边框、圆角、底色、字号、聚焦环**天生同源**，不存在「各写一份然后对不齐」。
 *
 * 插件此前把 「.im-select-trigger」 写成独立类、自己给 「padding: 0 10px」，而 「.im-field」
 * 是 20px —— 同一行里输入框的字从 20px 起、下拉的字从 10px 起，维护者一眼看出的
 * 「左边距没统一」就是这个。现在改成一个规则块，以后要调内边距只改这一处。
 *
 * transition 只含 border/box-shadow：含尺寸会让 textarea 拖拽 resize 卡顿。 */
.im-field,
.im-select-trigger {
  width: 100%;
  height: var(--im-h-field);
  /* 20px 对齐上游 .field-control 的 px-5；紧凑档（顶栏 / 节点卡 / 历史两条带子）
     在各自容器上覆写成 10px，与上游 .compact-controls 的 padding-inline: 10px 同值。 */
  padding: 0 20px;
  box-sizing: border-box;
  border: 1px solid var(--im-line-strong);
  /* 原版 .field-control = rounded-lg（8px），不是 --r-control(10) */
  border-radius: var(--im-r-sm);
  background: var(--im-surface);
  color: var(--im-ink);
  font-family: inherit;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.im-field {
  line-height: 1.6;
  resize: vertical;
}
/* textarea 不受高度 token 约束：它要跟着内容长、还要能拖右下角拉高。
   min-height 用表单档兜住「空着时只剩一条线」。 */
textarea.im-field {
  height: auto;
  min-height: var(--im-h-field);
  padding: 8px 20px;
}
.im-field:hover { border-color: var(--im-ink-3); }
/* 聚焦：**只加一圈柔和光环，边框颜色不变、也没有 outline**。
 *
 * 以下都是原版真机实测（Chromium 计算值，不是读源码推的）：
 *   未聚焦 box-shadow: none            border-color: rgba(31,41,55,.14)
 *   已聚焦 box-shadow: 0 0 0 4px 品牌色 13%   border-color: rgba(31,41,55,.14)  ← 没变
 * 也就是说原版聚焦时**不动边框**：.field-control:focus 里那条 border-brand 在
 * @layer components 里，被未分层的 .field-control { border-color: rgba(31,41,55,.14) }
 * 压掉了。插件此前既改边框色、又补了一条 .im-field:focus-visible { outline: 2px 实线 }，
 * 于是点一下同时出现「变色边框 + 4px 光环 + 2px 实线框」三层，看着像重影。
 * 现在只剩那一圈光环。 */
.im-field:focus {
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--im-brand) 13%, transparent);
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
/* 字段下面那排按钮：按钮多时自动换行，不挤成一条。
 * 设置弹窗改造后已无调用点（它从「每个字段自带提交按钮」改成「footer 一次提交」），
 * 保留是因为节点卡与后续表单仍可能需要；真不需要时再删。 */
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

/* ---------------- 切分弹窗（canvas/split-dialog.tsx） ----------------
 * 切图算法来自 lib/imageSplit.ts（A 档逐字移植），这里只负责排版：
 * 预设 chip → 行列输入 → 预览网格 → 输出文件名预览。
 * 旧的版本是两个 1~6 的滑杆 + 组件内手写的切图循环。 */
.im-split {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.im-split-presets {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.im-split-controls {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}
/* 行列输入：label + 一个窄输入框并排。输入框宽度固定 4rem —— 只有一位数，
   铺满整行会让人以为要填很长的东西。 */
.im-split-axis {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--im-ink-2);
}
.im-split-axis-input {
  width: 4rem;
  /* 高度走表单档：它旁边就是预设 chip 与「确认切分」按钮，自己用 padding 撑会
     多出第四种高度（实测是 36.4px）。 */
  height: var(--im-h-field);
  padding: 0 8px;
  text-align: center;
}
.im-split-summary {
  font-size: 12px;
  color: var(--im-ink-3);
}
.im-split-stage-wrap {
  display: flex;
  justify-content: center;
}
.im-split-stage {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  /* 图当底色铺满：只做参考，不参与切换；网格线叠在上面 */
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.im-split-line {
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
}
.im-split-names {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 11.5px;
  color: var(--im-ink-3);
}
.im-split-name {
  padding: 2px 6px;
  border-radius: var(--im-r-sm);
  background: var(--im-surface-inset, rgba(15, 17, 21, 0.05));
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}
.im-split-note {
  margin: 0;
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--im-ink-3);
}
.im-split-error {
  margin: 0;
  font-size: 12px;
  color: var(--im-danger);
}

/* ---------------- 设置弹窗（canvas/settings-dialog.tsx） ----------------
 *
 * 这一块是 2026-11-16 重写的。旧版把六个块平铺（两个下拉 / 插件内接口 / 生效中规格表 /
 * 目录 / 输出目录 / 预算），七个字段全竖排，内容高 1080px 而可视区只有 622px；
 * 组标题与字段 label 的**字号、字重、颜色完全相同**（只有 margin 差 3px），
 * 四条一模一样的 1px 分隔线不表达任何层级。
 *
 * 现在：两列栅格（左 label / 右控件）+ 三级层级（组标题 13/600/主文字色、
 * 字段 label 12/500/二级色、提示 11.5/三级色）+ 分隔只出现在组之间。
 *
 * 为什么 label 走左列而不是在控件上方：七个字段各省约 20px，叠加「生效中」从三行表
 * 收成一行状态句省掉的约 175px，整屏才进得了可视区（不用滚 458px 才看到预算）。 */
.im-settings {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
/* 「生效中」：一行事实。它回答「现在实际在用什么」，只在保存后变 ——
   做成输入框会让人以为能在那儿改（上游同一判断）。 */
.im-settings-status {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin: 0;
  font-size: 12px;
  line-height: 1.6;
  color: var(--im-ink-3);
}
.im-settings-status b {
  font-weight: 600;
  color: var(--im-ink-2);
}
.im-settings-chip {
  margin-left: 2px;
}
/* 一组决定：组标题比字段 label 大一档，靠字重与颜色再拉开一次 */
.im-settings-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--im-line);
}
.im-settings-group-title {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--im-ink);
}
/* 两列栅格：label 右对齐、与输入框首行对齐（输入框 40px 高、14px 字，
   首行中点约 12px，故 padding-top 取 9px 视觉最齐）。
   列宽 9.5rem 是量出来的：「图片输出目录」7 个汉字在 12px 下约 84px，
   8.5rem(=136px) 时它被折成两行、把行高撑高一倍。 */
.im-field-row {
  display: grid;
  grid-template-columns: 9.5rem minmax(0, 1fr);
  column-gap: 16px;
  align-items: start;
}
.im-field-label {
  padding-top: 9px;
  font-size: 12px;
  font-weight: 500;
  color: var(--im-ink-2);
  text-align: right;
  line-height: 1.4;
}
.im-field-main {
  min-width: 0;
}
/* 控件 + 它右侧的动作按钮（选择… / 测试连通 / 打开）。按钮在这一行而**不在**
   label 列：label 列只有 9.5rem，塞进去会把「API Key」挤成两行。 */
.im-field-control {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  min-width: 0;
}
.im-field-control > .im-field,
.im-field-control > .im-select-root {
  flex: 1;
  min-width: 0;
}
/* 表单行里的动作按钮（选择… / 测试连通 / 打开 / 日预算在哪设）：提到表单档，
 * 与同行输入框等高。否则会出现截图里那种「输入框很高、旁边按钮一截」。
 * 判据挂在容器上而不是让每个调用点写内联 style —— 一处维护。 */
.im-field-control > .im-btn-ghost,
.im-field-control > .im-btn-primary {
  height: var(--im-h-field);
}
.im-field-control > .im-btn-ghost {
  flex: none;
}
/* 窄屏（宿主侧栏拉宽、或面板被挤到很窄时）栅格塌成一列：
   label 回到控件上方、左对齐。8.5rem 的固定列在 360px 以下会吃掉三分之一宽度。 */
@media (max-width: 620px) {
  .im-field-row {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 4px;
  }
  .im-field-label {
    padding-top: 0;
    text-align: left;
  }
}
/* 「这组字段收起时」那一行说明：与 hint 同档，但整行缩进对齐到控件列，
   读起来像「这一栏的补充」，而不是一个新的字段标题。 */
.im-settings-hint-line {
  margin: 0;
  padding-left: calc(9.5rem + 16px);
  font-size: 12px;
  line-height: 1.6;
  color: var(--im-ink-3);
}
@media (max-width: 620px) {
  .im-settings-hint-line {
    padding-left: 0;
  }
}
.im-settings-probe {
  margin-top: -4px;}
.im-settings-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: -4px;
}
/* 危险动作（清空插件内配置）：放在组内、二次确认后才出现按钮。
   旧版它是 footer 的第一个按钮，紧挨「取消」，ghost 样式、点了立刻写盘关窗。 */
.im-settings-danger {
  padding: 10px 12px;
  border-radius: var(--im-r-sm);
  background: color-mix(in srgb, var(--im-danger) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--im-danger) 24%, transparent);
}
.im-settings-danger-text {
  margin: 0 0 8px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--im-ink-2);
}
.im-settings-danger-actions {
  display: flex;
  gap: 8px;
}
.im-settings-danger-link {
  align-self: flex-start;
  padding: 0;
  border: 0;
  background: none;
  color: var(--im-danger);
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.im-settings-danger-link:disabled {
  opacity: 0.5;
  cursor: default;
}

/* 只读「键 → 值」规格表：照搬原版 .spec-list（index.css:1226）。
   用在设置弹窗的「生效中」一段 —— 那几条是**事实**不是输入项（改文件才能动它），
   做成输入框会让用户以为能改。 */
.im-spec-list {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.im-spec-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}
.im-spec-key {
  flex: none;
  font-size: 12px;
  color: var(--im-ink-3);
}
.im-spec-val {
  flex: 1;
  min-width: 0;
  text-align: right;
  font-size: 12px;
  color: var(--im-ink-2);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 带分割线的宽松档（原版 .spec-list--roomy）：整段读起来像一份清单 */
.im-spec-list.is-roomy .im-spec-row {
  padding: 8px 0;
  border-bottom: 1px solid var(--im-line);
}
.im-spec-list.is-roomy .im-spec-row:last-child { border-bottom: 0; }
.im-spec-list.is-roomy .im-spec-key { font-size: 13px; }
.im-spec-list.is-roomy .im-spec-val { font-size: 13px; }
/* 值里的等宽段（接口地址那一条） */
.im-spec-mono { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11.5px; }

/* 设置弹窗里的分节：原版用 mt-5 border-t pt-4 划开「输入区」与「只读事实」 */
.im-section {
  padding-top: 16px;
  border-top: 1px solid var(--im-line);
}
.im-section-label {
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 500;
  color: var(--im-ink-2);
}
/* 待生效提示行：图标角标 + 一句说明（原版 pending 那条） */
.im-pending-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin: 0;
  font-size: 12px;
  color: var(--im-ink-3);
}

/* ---------------- 粘贴导入的预览区（照搬原版 .prompt-import-*） ----------------
   原版 index.css:792-801。预览卡与「识别到 N 张」是同一条信息链：
   上面报数量，下面逐张列出解析结果，问题单独一条红底。 */
.im-import-preview {
  max-height: 260px;
  overflow-y: auto;
  padding-right: 2px;
}
.im-import-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
  color: var(--im-ink-3);
}
.im-import-summary-error { color: var(--im-danger); }
/* 一张卡：外观与画布上的提示词卡同源（浮层档底 + 细边框 + 控件圆角），
   让用户看到的预览就是他将要得到的东西 */
.im-import-card {
  margin-top: 8px;
  padding: 10px 12px;
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-control);
  background: var(--im-surface-float);
}
.im-import-card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 11px;
  color: var(--im-ink-3);
}
.im-import-card-meta strong { color: var(--im-ink); font-weight: 600; }
.im-import-card-fallback { color: var(--im-warn); }
/* 预览里只给一行：这里的作用是「认得出是哪张」，完整正文要回卡片里看 */
.im-import-card-text {
  margin: 5px 0 0;
  overflow: hidden;
  font-size: 12px;
  line-height: 1.5;
  color: var(--im-ink-2);
  text-overflow: ellipsis;
  white-space: nowrap;
}
.im-import-issue {
  margin-top: 8px;
  padding: 8px 10px;
  border-radius: var(--im-r-sm);
  background: color-mix(in srgb, var(--im-danger) 6%, transparent);
  font-size: 12px;
  color: var(--im-danger);
}
.im-row { display: flex; align-items: center; gap: 6px; }
.im-muted { color: var(--im-ink-3); }
.im-node-title { font-size: 12px; font-weight: 600; color: var(--im-brand-dark); }

/* ---------------- 自绘下拉（照搬 Imagora 的 .select-* 16 条规则） ----------------
   原版用 Tailwind @apply 写，这里全部展开成普通声明；颜色一律走 --im-* 语义 token。
   背景与文字成对取自同一套 token —— 混用两套会出「黑底黑字」。 */
.im-select-root {
  position: relative;
  display: inline-block;
  /* 宽度交给触发器自己的内容：写死 max-width 会把「火山方舟官方」这种中文名
     截成「火山方舟官...」。上限只作兜底，防止超长模型 ID 把整行撑破。 */
  min-width: 0;
  max-width: 320px;
}
/* 表单里占满一行（设置弹窗的两个下拉）：弹窗里的下拉该和输入框同宽，
   工具栏里那几颗才是按内容自适应。 */
.im-select-root.is-block {
  display: block;
  width: 100%;
  max-width: none;
}

/* 触发器：外形**来自上面那个共用规则块**（与 .im-field 同源：等高、同内边距、
 * 同边框、同圆角、同底色、同字号、同聚焦环）。这里只补它独有的三件事：
 * 横向排布、光标、文字对齐。
 *
 * ⚠️ 不许在这里重写 height / padding / font-size —— 一旦重写就又变成「两份值」，
 * 那正是维护者看到的「下拉和输入框左边距不一样」。紧凑场景在容器上覆写
 * （见 .im-canvas .im-select-trigger 与 .im-history-bar 那两条）。 */
.im-select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  text-align: left;
  cursor: pointer;
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
  border-radius: var(--im-r-sm);
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

/* 右键拖拽框选的选框：与 Imagora 同观感（品牌色描边 + 淡填充）。
   只做视觉反馈，所以 pointer-events:none，绝不能挡住框选自身的鼠标事件。 */
.im-marquee {
  position: absolute;
  z-index: 1002;
  pointer-events: none;
  border: 1px solid color-mix(in srgb, var(--im-brand) 80%, transparent);
  border-radius: 2px;
  background: color-mix(in srgb, var(--im-brand) 10%, transparent);
}

/* 菜单专用三态：危险项（删除）与禁用项（如「这张图还没有文件」）。
   浮层容器复用 .im-select-list，只为菜单补这三个类，不另造一套外观。 */
.im-select-option.is-danger { color: var(--im-danger); }
.im-select-option.is-disabled {
  color: var(--im-ink-3);
  cursor: default;
}
/* 分隔线：1px 线 + 上下各 4px，与 lib/contextMenu.ts 的 SEPARATOR_HEIGHT 严格对应
   （菜单高度靠常量推算，两边不一致时贴底弹出的菜单会被裁掉最后一项）。 */
.im-menu-separator {
  flex: none;
  height: 1px;
  margin: 4px 6px;
  background: var(--im-line);
}

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
  /* 紧凑档 + 与其它控件同一个左右内边距。原先是 30 / 9px —— 两个都是阶梯外的手写值，
     于是下拉展开后浮层里的输入框与画布上的控件又不是一个高度。 */
  height: var(--im-h-ctl);
  padding: 0 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: var(--im-r-sm);
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
  /* 画布内的下拉（节点卡里的尺寸/质量、顶栏那两个）取紧凑档。
     与同容器的 .im-field 用同一组内边距（见下一条注释），否则同一张卡里
     输入框的字与下拉的字又是两个起点。 */
  height: var(--im-h-ctl);
  padding: 0 10px;
  font-size: 12px;
}

/* 顶栏那两个下拉（来源 / 模型）：**紧凑档**。
 *
 * 基础规则给的是表单档（38 / 20px，与输入框同源），而顶栏是 28 高的一排，
 * 所以这里覆写成紧凑档 —— 与上游 .compact-controls 的
 * 「height: var(--row-h); padding-inline: 10px; font-size: 12px」 同一组值。 */
.im-select-profile .im-select-trigger,
.im-select-model .im-select-trigger {
  height: var(--im-h-ctl);
  padding: 0 10px;
  font-size: 12px;
}

/* 顶栏那两个下拉（来源 / 模型）**固定宽度**。
 *
 * 为什么不交给内容自适应：这一行是「品牌 + 来源 + 模型 + 成本 + 弹性占位 + 设置」，
 * 每个控件都按内容撑开时，切换来源（profile 名长度不同）会让后面整排按钮左右横跳；
 * 而内容自适应还有另一个副作用 —— 收起时按当前值的宽度缩，换一个短名字整行又变一次。
 * 固定宽度后位置稳定，长名字在触发器里省略号截断（完整值仍在 title 与展开列表里）。
 *
 * 宽度的取法：来源名最长见「火山方舟官方」（6 个汉字 ≈ 72px），模型名最长见
 * doubao-seedream-5-0-pro-260628（28 字符）。200 / 230 是「字号 12px 下能放下
 * 常见取值、又不至于把「设置」挤出顶栏」的实测值，别再按单个名字调窄。 */
.im-select-profile { width: 200px; max-width: none; }
.im-select-profile .im-select-trigger { width: 100%; }
.im-select-model { width: 230px; max-width: none; }
.im-select-model .im-select-trigger { width: 100%; }

/* 节点内的输入/下拉用紧凑档：字号压到 12px、内边距收到 10px（与同卡内的下拉同一组值）。
 * 原版节点里的 textarea 实测是 padding: 8px 20px —— 那是**多行**控件，左右留白更宽
 * 才不显得字贴边；单行的输入框与下拉在卡里只有一行的宽度，20px 会把
 * 「1024x1024 (1:1)」这类标签挤成省略号（上游 index.css 里为此专门写过一段）。 */
.im-field--compact,
.im-canvas .im-field {
  height: var(--im-h-ctl);
  padding: 0 10px;
  font-size: 12px;
}
.im-canvas textarea.im-field {
  height: auto;
  min-height: 64px;
  padding: 8px 16px;
}

/* ---------------- 节点卡片（照搬 .panel-card + .node-pop） ----------------
   三类节点共用同一块面板，靠内容区分，不靠色相——与 Imagora 一致。

   原版节点根元素同时挂 .panel-card 与 .node-pop 两个类，后者是**未分层 + !important**
   的覆盖：底色走浮层档、边框更浅、阴影是「12/26 的大投影 + 顶部 1px 内高光」。
   那个内高光是原版卡面看上去「有厚度」的来源，别省。 */
.im-panel-card {
  position: relative;
  /* 节点卡里「width + padding」是常态，没这一步会按 content-box 算 →
     宽度多出两倍内边距，右侧凭空出现一条死区（见 nodes.tsx 的 146 那条注释）。 */
  box-sizing: border-box;
  border: 1px solid var(--im-line);
  /* 原版 .panel-card 的 18px 写在未分层规则里，压过 @layer 的 rounded-xl(12) */
  border-radius: var(--im-r-surface);
  background: var(--im-surface-float);
  box-shadow: var(--im-shadow-node);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}
/* 选中态：原版是 outline 2px + offset 1px，不是 box-shadow 环 ——
   outline 不占布局、也不被圆角裁，卡片密集时不会互相挤。 */
.im-panel-card.is-selected {
  outline: 2px solid var(--im-brand);
  outline-offset: 1px;
}
.im-panel-card.is-missing { border-color: var(--im-danger); }

.im-thumb {
  /* 原版 h-40 w-32：宽 128、高 160 —— 竖构图也放得下，不会把卡面压扁 */
  width: 128px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* 原版缩略图是 .rounded（4px），不是 8 */
  border-radius: var(--im-r-xs);
  background: var(--im-surface-inset);
  cursor: zoom-in;
}
.im-thumb img { width: 100%; height: 100%; object-fit: contain; display: block; }
/* 缩略图占位：还在生成时先占住格子（尺寸由 .im-thumb 固定，不会有布局跳动）。
   底色从品牌色极淡掺出来，与卡片面同族；不加动画——它通常只存在几十毫秒。 */
.im-thumb-placeholder {
  width: 100%;
  height: 100%;
  display: block;
  background: color-mix(in srgb, var(--im-brand) 6%, transparent);
}
.im-thumb-label { margin-top: 4px; max-width: 128px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11px; color: var(--im-ink-2); }

/* ---------------- LOD 抽象模式（缩到 10% 以下） ----------------
 * 照搬原版 PromptNode 的 lod 分支：卡面尺寸不变，只把内容换成
 * 「标题大字 + 状态居中」。原版实测：
 *   标题  text-3xl (30px) / font-semibold / leading-tight / text-brand-dark
 *   状态  text-xl  (20px) / font-medium / 四态各一档色
 *   布局  居中列 / gap-3 / 卡面 min-h-[320px] !w-[380px] !p-3
 * 尺寸与内边距由 JSX 的行内样式给（跟着 380/320 一起读，改一处就够），这里只管排版与字色。 */
.im-node-lod {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
}
.im-lod-title {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.15;
  /* 原版 text-brand-dark。我们的 --im-brand-dark 就是宿主 label-primary（近黑），
     暗色下自动翻成近白，与完整模式标题同色，两种模式不会一深一浅。 */
  color: var(--im-brand-dark);
}
.im-lod-status {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 500;
}
/* 状态四色：与完整模式的圆点同源（排队琥珀 / 生成中品牌 / 完成绿 / 失败红），
   这样缩远了也能从颜色认出「哪几张还在跑」。 */
.im-lod-status.is-idle { color: var(--im-ink-3); }
.im-lod-status.is-queued { color: var(--im-warn); }
.im-lod-status.is-running {
  color: var(--im-brand);
  /* 原版 animate-pulse：整行呼吸。抽象模式下没有进度条也没有秒数的位置，
     只能靠这一下一下的明暗表达「还在动」。 */
  animation: im-lod-pulse 1.6s ease-in-out infinite;
}
.im-lod-status.is-done { color: var(--im-ok); }
.im-lod-status.is-failed { color: var(--im-danger); }
@keyframes im-lod-pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.45; }
}
/* 无障碍：系统开了「减少动态效果」就别让整张卡呼吸 */
@media (prefers-reduced-motion: reduce) {
  .im-lod-status.is-running { animation: none; }
}

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
  border-radius: var(--im-r-sm);
  background: var(--im-surface-float);
  /* 原版 .node-actions 实测 rgba(32,43,51,.13)，与 .node-pop 边框同值 ——
     比通用 --im-line 略深一点点，操作栏才从画布底上「浮」得出来。 */
  border: 1px solid color-mix(in srgb, var(--im-ink) 13%, transparent);
  box-shadow: var(--im-shadow-float);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.12s ease;
}
/* 两个根节点各有一条 hover 规则。图片组（.im-group-node）原先**漏了**这一条，
 * 于是组右侧的「删除图片组」永远是 opacity:0 + pointer-events:none ——
 * 鼠标扫过去什么都不出现，只能靠右键菜单删。上游没有这个问题：它的 NodeActions
 * 挂在 Tailwind 的 group-hover: 上，靠根节点的 group 类无条件生效。
 *
 * TODO（下一轮）：两行重复选择器换成共享根类（如 .im-node-shell:hover .im-rail），
 * 由 panel-card 与 group-node 各自挂上。现在先按「一行止血」处理，避免为了整齐
 * 同时动两个组件的 className 与它们的冒烟断言。 */
.im-panel-card:hover .im-rail,
.im-group-node:hover .im-rail { opacity: 1; pointer-events: auto; }

/* ---------------- 图片组节点（照搬 Imagora 的 GroupNode 叠卡） ----------------
 * 结构是**三块**：外层是节点根（.node-pop，浮面 + 大投影，**方角、无边框**）、
 * 中间是错位的叠卡、最里面是带主体色的卡面。
 *
 * ⚠️ 两个必须按实测来的点（原版真机计算值，别按"看起来该圆角"自己发挥）：
 *   1. **外层根节点没有圆角也没有边框**：原版根元素只挂 .node-pop，**没挂
 *      .panel-card**（那是图片卡与提示词卡才有的），所以 border-radius: 0、
 *      border-width: 0，只留 --surface-float 的渐变底与那圈 12/26 的投影。
 *      看到的那道圆角边其实是**内层卡面**的 8px。
 *   2. **叠卡在内层卡面之下**（DOM 里写在卡面之前），所以错位露出来的那几道边是
 *      8 圆角的浅色卡，而不是根节点的方角。
 *
 * 根节点用 padding 给叠卡预留错开空间，所以叠卡永远不会伸出节点边界。
 * 宽 224（原版 w-56）、错开步长 4px 由 nodes.tsx 的 STACK_STEP_PX 控制。 */
.im-group-node {
  /* 原版 w-56 = 224px 且全局 border-box，所以 padding 算在 224 里；
     不写 box-sizing 的话内容 224 + padding 12 会撑到 236，
     外壳与卡面就"尺寸对不上"了。 */
  box-sizing: border-box;
  width: 224px;
  padding: 12px 0 0 12px;
  /* 方角、无边框：与原版 .node-pop（未挂 panel-card）一致 */
  border: 0;
  border-radius: 0;
  background: var(--im-surface-float);
  box-shadow: var(--im-shadow-node);
  transition: box-shadow 0.15s ease;
}
/* 选中态打在外层（原版是 .react-flow__node .node-pop.node-selected）：
   outline 不占布局，密集画布上不会把相邻卡片挤开。 */
.im-group-node.is-selected {
  outline: 2px solid var(--im-brand);
  outline-offset: 1px;
}
.im-group-stack { position: relative; }
.im-group-stack-card {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: var(--im-r-sm);
  border: 1px solid color-mix(in srgb, var(--im-brand) 10%, transparent);
  background: color-mix(in srgb, var(--im-brand) 5%, transparent);
}
.im-group-face {
  position: relative;
  padding: 16px;
  text-align: center;
  border-radius: var(--im-r-sm);
  border: 1px solid color-mix(in srgb, var(--im-brand) 15%, transparent);
  /* 原版 bg-brand/5：卡面本身带一层极浅的主体色，与叠卡同族 */
  background: color-mix(in srgb, var(--im-brand) 5%, transparent);
}
.im-group-count {
  /* 原版 text-xl font-semibold leading-tight + text-brand-dark */
  font-size: 20px;
  font-weight: 600;
  line-height: 1.25;
  color: var(--im-brand-dark);
}
.im-group-size { margin-top: 4px; font-size: 16px; color: var(--im-ink-3); }
.im-group-dup { margin-top: 4px; }

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
  /* 间距由 .im-root 的 gap 提供，这里不自留边距 */
  margin: 0;
  border: 1px solid var(--im-line);
  /* 原版 .studio-canvas 是 18px（不是 --r-card 的 16） */
  border-radius: var(--im-r-surface);
  /* 画布是**最里面那层台面**（卡片要浮在它上面），所以取卡片那档再往下一级：
     浅色 #fff（比页面底 #f9fafb 更白）、暗色 #232324（比页面底 #353638 更暗）。
     两个方向都成立：四周是"墙"、画布是"台面"、卡片浮在台面上。 */
  background: var(--im-surface);
  /* 画布台面比普通卡片重一档：原版实测 0 18px 45px rgba(31,41,55,.09) +
     顶部 1px 内高光。整块台面要「浮」在页面之上，用 card 那档会显得贴平。 */
  box-shadow: var(--im-shadow-canvas);
  overflow: hidden;
  /* 自成一个层叠上下文：画布里的 z-index 不许跟宿主面板抢层 */
  isolation: isolate;
}
.im-canvas .react-flow__attribution { display: none; }
.im-canvas .react-flow__background pattern circle { fill: color-mix(in srgb, var(--im-ink) 20%, transparent); }
/* ⚠️ 这里**不许**给节点卡加 will-change（维护者报过「缩小再放大后文字一直是糊的、
   点一下才清晰」）。原因不是"性能调优"，而是合成层的栅格倍率：
   will-change: transform 把每张卡提升成独立合成层，浏览器按**提升那一刻**的倍率
   栅格化它；画布缩放是改 .react-flow__viewport 的 scale，合成层不会跟着重栅格，
   于是放大后看到的是被拉大的旧位图 → 文字发虚，直到某次重绘（点击/悬停失效）才刷新。
   卡片一多还等于几百个层，内存与合成开销一起上来（「加载很慢」）。
   原版 Imagora 全文件 0 处 will-change（grep 过），我们这条是自造的，删掉即与上游一致。
   真正需要拖动流畅时应只让 React Flow 自己管 —— 它在拖动期间本来就走合成。 */
/* 悬停的节点整体抬高，否则右侧那条操作栏会被相邻节点盖住（原版同一条规则） */
.react-flow__node:hover { z-index: 1001 !important; }
.react-flow__edges { z-index: 1200 !important; }

/* 吸附对齐线（canvas/snap-guides.tsx 渲染，走 ViewportPortal 挂进 .react-flow__viewport）。
 *
 * 类名与属性是**上游契约**，别改名：上游的 .snap-guide + data-axis +
 * data-testid="snap-guide" 被它自己的 E2E 与基线测试引用，改成 im- 前缀能让
 * 本仓看着统一，但两边就没法共用同一批断言了。
 *
 * 取色走 --im-snap（=品牌色），不写死；opacity 0.55 与上游 index.css 同值，
 * 压过节点但让底下的卡片仍可辨认 —— 对齐线是辅助，不该盖住内容。 */
.snap-guide {
  position: absolute;
  pointer-events: none;
  background: var(--im-snap, #4c8dff);
  opacity: 0.55;
  z-index: 5;
}

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
/* ⚠️ 这里**故意不写** stroke-dasharray：原版也没写，流动虚线的画法与节奏全交给
   @xyflow/react 自带的 .react-flow__edge.animated path 规则（dasharray 5 +
   dashdraw .5s linear infinite）。
   我们以前写过 stroke-dasharray: 6 4（选择器三个类，压过库里的两个类 + 元素），
   结果虚线段比原版长 20%，跑起来节奏也不一样 —— 看着"有动画"就以为对了。
   这条注释反过来是防回归：谁再往这里加 dasharray，两边就又对不上。 */
.react-flow__connection-path { stroke: var(--im-brand); stroke-width: 1.8; stroke-dasharray: 5 4; }

/* 连线把手：照原版做成横条，常态隐藏、悬停节点或正在连线时才显形。
   常显的小圆点会在密集画布上糊成一片。 */
.react-flow__handle.im-handle {
  width: 32px;
  height: 12px;
  /* 原版连接点是 4px 圆角 + 白色外环，没有边框 */
  border-radius: var(--im-r-xs);
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
  background: var(--im-scrim);
  /* 原版 --scrim-blur 是 blur(10px) saturate(.9)（index.css:201）。
     插件此前写 3px —— 背景里的卡片标题、节点文字全都清晰可读，和浮在上面的弹窗
     抢注意力。遮罩的职责是「把底下的界面推到看不清」，10px 才是那一档。
     saturate(.9) 一起抄：只压暗不降饱和会让底下的彩色缩略图仍然跳出来。 */
  -webkit-backdrop-filter: blur(10px) saturate(0.9);
  backdrop-filter: blur(10px) saturate(0.9);
}
/* 嵌套弹窗（弹窗里再开一个）：z 抬到 60，遮罩换淡一档。
 * 原版 .modal-shell--nested（index.css:726）就是这么做的，但**当前生产代码没有调用点**
 * （原版 grep 只命中 ModalShell.tsx 自身与它的单测）—— 保留是能力预留，
 * 语义（Esc / Tab / 点遮罩关最上层）已经在 modal-shell.tsx 的 modalStack 里实现了，
 * 缺的只是这一档视觉。真要用时不必再改基座。 */
.im-modal-shell--nested {
  z-index: 60;
  background: var(--im-scrim-nested);
}
.im-modal-panel {
  display: flex;
  flex-direction: column;
  /* width + padding + border 三样都写了，必须是 border-box —— 否则四档宽度
     每档都多出 42px（20×2 内边距 + 1×2 边框），看起来就是"我们的弹窗比原版宽一圈"。
     原版靠 Tailwind preflight 的全局 border-box 拿到这个行为，插件里没有那个 reset。 */
  box-sizing: border-box;
  width: min(100%, 42rem);
  max-height: min(86dvh, 760px);
  overflow: hidden;
  padding: 20px;
  /* 原版是**白色描边** rgba(255,255,255,.68)（index.css:749），不是灰色分隔线。
     理由与暗色处理见 --im-modal-edge 的注释。 */
  border: 1px solid var(--im-modal-edge);
  border-radius: var(--im-r-card);
  outline: none;
  /* 弹窗是**高卡片一档**的台面（原版用 --surface-panel）：浅色下两者都是白，
     暗色下卡片 #232324、弹窗 #2c2c2e，窗口才浮得出来。 */
  background: var(--im-surface-panel);
  /* 投影 + 顶部 1px 内高光（inset 那层在 --im-shadow-modal 里，随主题两套值） */
  box-shadow: var(--im-shadow-modal);
}
.im-modal-panel--sm { width: min(100%, 26rem); }
.im-modal-panel--md { width: min(100%, 35rem); }
.im-modal-panel--lg { width: min(100%, 42rem); }
/* 历史弹窗档（原版 .modal-panel--history，index.css:759-766）：
   **定高**而不是「最大高」。列表要占满剩余空间自己滚，头与成本看板钉在上下；
   写成 max-height 时面板会被内容撑到内容高度，列表就没得滚、底部按钮位置也乱跳。
   padding: 0 是因为这一档的内容自带分段（header / 看板 / 列表各占一条通栏），
   面板再留 20px 内边距会让通栏背景离边缘悬空。 */
.im-modal-panel--wide {
  width: min(1100px, 96vw);
  height: min(86dvh, 880px);
  max-height: none;
  padding: 0;
}
/* 历史弹窗档：内容**按通栏分段**排（标题带 / 成本条 / 列表各占一条），
   所以面板自己不留内边距，滚动也交给列表 —— 标题带与成本条要钉在顶上不跟着滚。 */
.im-modal-panel--wide > .im-modal-body {
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 0;
  overflow: hidden;
}
.im-modal-header { margin-bottom: 16px; }
.im-modal-title {
  margin: 0;
  /* 原版写死 #17202b（index.css:772），我们走 --im-ink：亮色=#0f1115（比原版深一点，
     在同一档），暗色自动翻成近白。写死会在暗色下变成黑字压深底。 */
  color: var(--im-ink);
  font-size: 15px;
  font-weight: 650;
  letter-spacing: -0.02em;
}
.im-modal-subtitle {
  margin: 4px 0 0;
  max-width: 58ch;
  /* 原版 rgba(23,32,43,.6)（index.css:773）。从 ink 派生而不是取 --im-ink-3：
     ink-3 是「三级文字」语义（暗色偏亮），原版这行是「主文字的 60%」，
     两者在暗色下差一档。派生能自动得到亮色≈原值、暗色=白 60%。
     为什么不用 --im-ink-2：亮色下它 (#61666b) 比原版那行更深，副标题会抢标题的份量。 */
  color: color-mix(in srgb, var(--im-ink) 60%, transparent);
  font-size: 12px;
  line-height: 1.55;
}
/* flex:1 + min-height:0 是「能滚」的前提。只写 overflow-y:auto 而高度不受约束的话，
   scrollHeight 永远等于 clientHeight，底部几行会被面板静默裁掉。
 *
 * padding-inline: 6px 与 scrollbar-gutter 照原版（index.css:813-826），**不是**随便留白：
 * 滚动容器只裁到 padding box，而 button:focus-visible 是 outline 2px + offset 3px = 5px
 * （见本文件末尾那段键盘可达性）。内边距为 0 时，文本框/下拉左侧的焦点环会被整条切掉，
 * 右边却正常 —— 看着像「焦点环只画了一半」。两侧同值才不会左右不对称。 */
.im-modal-body {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding-inline: 6px;
  /* 滚动条出现时预留占位：否则一出现滚动条，内容整体左移几 px，弹窗像在抖 */
  scrollbar-gutter: stable;
}
/* 弹窗里的空态（暂无工作流等）：原版 .modal-empty（index.css:775）。
   原版色值是 rgba(23,32,43,.38)，这里取 --im-ink-3 而不是照 .38 派生：
   .38 在暗色下是「38% 白」，对深底只有 2.6:1，低于可读线；ink-3 是宿主已经调过的
   三级文字（亮 #81858c / 暗 #adb2b8），两种主题都在 4:1 上下。
   这是「照搬语义、不照搬数字」的一处 —— 空态本来就没有「必须这么淡」的设计意图。 */
.im-modal-empty {
  padding: 24px 12px;
  color: var(--im-ink-3);
  font-size: 12px;
  text-align: center;
}

/* ---------------- 错误边界的替代界面（见 canvas/error-boundary.tsx） ----------------
 * 两种场景、两种尺寸：
 *   .im-node-error    单张卡坏掉，替代它自己的卡片（按节点卡的宽度，紧凑三行）
 *   .im-canvas-error  整块画布坏掉，替代画布区（居中一句话 + 两个按钮）
 * 都用 danger 色系，但**不是纯红警报**：它表达的是「这块坏了，别处还能用」，
 * 不该比真正的危险提示（预算超限、参考图丢失）更刺眼。 */
.im-node-error {
  width: 260px;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid color-mix(in srgb, var(--im-danger) 28%, var(--im-line));
  border-radius: var(--im-r-control);
  background: color-mix(in srgb, var(--im-danger) 6%, var(--im-surface));
  color: var(--im-ink);
}
.im-node-error-title { font-size: 12px; font-weight: 600; color: var(--im-danger); }
.im-node-error-msg {
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.5;
  color: var(--im-ink-2);
  /* 长错误只留两行：卡片里塞不下整段堆栈，完整内容在 title 与控制台 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.im-node-error-hint { margin: 4px 0 8px; font-size: 10px; color: var(--im-ink-3); }

.im-canvas-error {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px;
  text-align: center;
}
.im-canvas-error-title { margin: 0; font-size: 14px; font-weight: 600; color: var(--im-danger); }
.im-canvas-error-msg {
  margin: 0;
  max-width: 52ch;
  font-size: 12px;
  line-height: 1.6;
  color: var(--im-ink-2);
}
.im-canvas-error-hint {
  margin: 0;
  max-width: 52ch;
  font-size: 11px;
  line-height: 1.7;
  color: var(--im-ink-3);
}
.im-canvas-error-actions { display: flex; gap: 8px; margin-top: 4px; }

/* ---------------- 生成历史（照搬 Imagora 的 .history-modal，index.css:869-874 + 928-933） ----------------
 * 三段通栏：标题带（搜索/筛选/关闭钉在顶上）→ 成本条 → 列表（只有它滚）。
 * 原版这套的分段背景读 --surface-float，壳体读 --surface-panel ——
 * 于是标题带看起来是「壳体上浮起来的一条」，不是纯白平铺。 */
.im-history {
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
}
/* 两条带子（标题带 / 成本条）里的控件**同高、同字号**：高度由带子定死，
 * 子控件填满，而不是让每个控件带着自己的 padding 各自算。
 *
 * 各写各的必然参差，实测就是这么四档挤在一行里：
 *   .im-field 默认 padding 8px 20px + 14px → 38、
 *   搜索框自己写 4px → 31、金额框写死 26、.im-btn-sm → 22。
 * 统一取 --im-h-ctl（顶栏那一档，与 .im-header 里那排同一套写法）。
 * 见 .agents/notes/2026-11-16-history-row-controls.md */
.im-history-bar,
.im-history-budget {
  --im-row-h: var(--im-h-ctl);
}
.im-history-bar .im-field,
.im-history-bar .im-select-trigger,
.im-history-bar .im-btn-ghost,
.im-history-bar .im-btn-primary,
.im-history-stats .im-field,
.im-history-stats .im-btn-ghost,
.im-history-stats .im-btn-primary {
  height: var(--im-row-h, var(--im-h-ctl));
  /* 内边距也要一起收：只统一高度的话，输入框的字从 20px 起、下拉的字从 10px 起，
     同一行里左端还是参差（上游 .compact-controls 就是这么写的：
     height + padding-block: 0 + padding-inline: 10px + font-size 12px 四件一起）。 */
  padding-block: 0;
  padding-inline: 10px;
  box-sizing: border-box;
  font-size: 12px;
}

.im-history-bar {
  display: flex;
  flex: none;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--im-line);
  background: var(--im-surface-float);
}
/* 原版 .history-modal h2 是 16px / -.025em（比普通弹窗的 15px 大一档：
   这条带子里标题要和搜索框、按钮并排竞争注意力） */
.im-history-title {
  margin: 0 8px 0 0;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: var(--im-ink);
  white-space: nowrap;
}
/* 搜索框：宽一档（原版 !w-72），高度与圆角都并入上面那条「标题带控件同高」。 */
.im-history-search {
  width: 18rem;
  max-width: 100%;
  padding-inline: 12px;
  border-radius: 9px;
}
/* 状态筛选：与原版 w-28 不同 —— 那个宽度会把「全部状态」省略成「全部…」，
   9rem 才放得下四字标签（原版 640px 那档也是收到 9rem）。 */
.im-history-status { flex: none; width: 9rem; max-width: none; }
.im-history-status .im-select-trigger { width: 100%; }
.im-history-bar-end { margin-left: auto; display: flex; align-items: center; gap: 8px; min-width: 0; }
.im-history-warn {
  font-size: 11px;
  color: var(--im-warn);
  white-space: nowrap;
}
/* 成本条：上排「指标 | 预算设置」，下面「按尺寸」独立一条 —— 与原版 CostBoard 同构：
 *   <section>
 *     <div flex>  <div grid 指标 5 格>  <div compact-controls 预算>  </div>
 *     <div 按尺寸>
 *   </section>
 * 「按尺寸」**必须**独立成行，不能挤进指标网格：
 * 原版指标正好 5 格（2/3/5 列三档），多塞一格会让整行换行 ——
 * 预算设置就被顶到第二排去了（插件此前正是这样，成本条因此高 130px）。
 * 网格外这一行还带得下金额，指标格里只放得下 "尺寸 ×数量"。 */
.im-history-stats {
  display: flex;
  flex: none;
  flex-direction: column;
  gap: 8px;
  padding: 10px 16px;
  border-bottom: 1px solid var(--im-line);
  background: var(--im-surface-float);
}
/* 第一排：指标随宽度摊开，预算设置固定靠右（原版 flex-1 | 竖线 | shrink-0） */
.im-history-stat-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 16px;
}
/* 指标网格：2 列 / 窄屏，3 列 / 中屏，5 列 / 宽屏（原版 sm:3 lg:5）。
 * 列宽 minmax(max-content, 1fr)：等宽列只有在每格都装得下时才成立，
 * 成功率带括号（549/649）是五格里最长的一格，按等宽分会差 2px 被截成
 * 「84.6%（549/64…」。max-content 保证每列放得下自己的字，富余宽度均分。 */
.im-history-stat-grid {
  display: grid;
  flex: 1 1 auto;
  min-width: 0;
  grid-template-columns: repeat(2, minmax(max-content, 1fr));
  gap: 8px 16px;
}
@media (min-width: 720px) { .im-history-stat-grid { grid-template-columns: repeat(3, minmax(max-content, 1fr)); } }
@media (min-width: 1040px) { .im-history-stat-grid { grid-template-columns: repeat(5, minmax(max-content, 1fr)); } }
.im-history-stat { min-width: 0; }
.im-history-stat-label {
  font-size: 10px;
  line-height: 1.4;
  color: var(--im-ink-3);
  white-space: nowrap;
}
.im-history-stat-value {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--im-ink);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
/* 预算设置区：与指标之间一条竖线分区（原版 sm:border-l sm:pl-4） */
.im-history-budget {
  display: flex;
  flex: none;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding-left: 16px;
  border-left: 1px solid var(--im-line);
}
.im-history-budget-field { display: flex; align-items: center; gap: 4px; }
.im-history-budget-label { font-size: 11px; color: var(--im-ink-3); white-space: nowrap; }
/* 输入框收窄并右对齐数字：金额列不用宽，右对齐才好横向比较。
 * 高度不在这里写死 —— 归上面那条「成本条控件同高」，否则又会比旁边的按钮矮一截。 */
.im-history-budget-input {
  /* 宽度补偿到 88px：内边距从 6 提到整行统一的 10，不补宽度数字会被挤。
     内边距必须与同行其它控件一致，否则这一行的字又从两个起点开始。 */
  width: 88px;
  padding-inline: 10px;
  text-align: right;
  font-variant-numeric: tabular-nums;
}
.im-history-budget-tip { font-size: 11px; color: var(--im-ink-3); }
/* 按尺寸：次要信息，独立一行、与指标同一色阶（原版 mt-2 border-t pt-2 text-[11px]） */
.im-history-sizes {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 16px;
  padding-top: 8px;
  border-top: 1px solid var(--im-line);
  font-size: 11px;
  color: var(--im-ink-2);
}
.im-history-sizes-label { font-size: 10px; color: var(--im-ink-3); }
.im-history-sizes-row { white-space: nowrap; }
@media (max-width: 719px) {
  /* 窄屏：设置区换行后不再拉一条竖线（左边没有内容可分隔了） */
  .im-history-budget { padding-left: 0; border-left: 0; }
}
/* 列表：整屏**只有这里滚** */
.im-history-list {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding: 16px;
  scrollbar-gutter: stable;
}
/* 两列卡片（原版 ul.grid grid-cols-2 gap-3）。窄屏退一列 —— 原版 900px 那条。 */
.im-history-rows {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}
/* 行：左 160px 结果图占满行高，右侧内容自己排（原版 li + w-40 min-h-36 self-stretch） */
.im-history-row {
  display: flex;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--im-line);
  /* 原版历史行的圆角是 12（比通用卡片的 16 小一档：行更密） */
  border-radius: 12px;
  background: var(--im-surface-float);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
/* 悬停抬升：原版 li:hover / li:focus-within 同一条。
   :focus-within 是必需的 —— 键盘用户 Tab 到行内按钮时要看到「我现在在这一行」。 */
.im-history-row:hover,
.im-history-row:focus-within {
  transform: translateY(-2px);
  box-shadow: var(--dsw-elevation-panel, 0 10px 22px rgba(31, 41, 55, 0.08));
}
.im-history-thumb {
  display: flex;
  flex: none;
  align-self: stretch;
  width: 160px;
  min-height: 144px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  background: var(--im-surface-inset);
}
.im-history-thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.im-history-thumb-empty {
  padding: 4px;
  font-size: 11px;
  line-height: 1.35;
  text-align: center;
  color: var(--im-ink-3);
}
.im-history-main {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}
/* 提示词：2 行截断（原版 line-clamp-2）。完整内容走 .im-prompt-tip 浮层
   （真被截断才出，见 prompt-cell.tsx）——正文补全不能用原生 title：
   它显示不了换行排版的长提示词，这一处原版本来就是自绘浮层。 */
.im-history-prompt {
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  font-size: 12px;
  line-height: 16px;
  color: var(--im-ink-2);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}
/* 提示词浮层：深色底白字（原版 bg-neutral-800 / text-white）。
   位置与宽度由组件内联给（跟随鼠标 Y、水平居中、占屏 80%），这里只管外观。
   颜色**不跟主题翻转**：它压在白底或深底之上都要能读，而浅色字只能配深色底。
   暗色主题下页面本身就深，所以靠一圈描边 + 大投影把浮层从背景里拉出来，
   不加描边会糊成一整块。 */
.im-prompt-tip {
  position: fixed;
  z-index: 60;
  max-height: calc(100vh - 16px);
  overflow-y: auto;
  box-sizing: border-box;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--im-r-sm);
  background: #262626;
  color: #fff;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.36);
  font-size: 12px;
  line-height: 20px;
  white-space: pre-wrap;
  word-break: break-word;
  /* 纯展示：不能挡住底下行的悬浮与点击 */
  pointer-events: none;
}
/* 时间 / 质量 / 尺寸：原版 text-[10px] tabular-nums */
.im-history-meta {
  margin: 0;
  font-size: 10px;
  color: var(--im-ink-3);
  font-variant-numeric: tabular-nums;
}
.im-history-refs { display: flex; flex-wrap: wrap; gap: 6px; }
.im-history-ref {
  width: 56px;
  height: 56px;
  overflow: hidden;
  border: 1px solid var(--im-line);
  border-radius: 6px;
  background: var(--im-surface-inset);
}
.im-history-ref img { width: 100%; height: 100%; object-fit: cover; }
.im-history-ref-missing { font-size: 10px; color: var(--im-warn); }
/* 行内动作：三颗等宽（原版 min-w-0 flex-1） */
.im-history-actions { display: flex; gap: 6px; margin-top: auto; }
.im-history-actions > * { flex: 1 1 0; min-width: 0; }
/* 原版历史里的按钮圆角 8、输入框 9（index.css:932-933），比通用档紧一档 */
.im-history-actions .im-btn-ghost,
.im-history-actions .im-btn-primary { border-radius: var(--im-r-sm); padding-inline: 8px; }
.im-history-empty {
  padding: 64px 0;
  text-align: center;
  font-size: 13px;
  color: var(--im-ink-3);
}
.im-history-note {
  margin: 8px 0 0;
  font-size: 11px;
  line-height: 1.6;
  color: var(--im-ink-3);
}
.im-history-pager {
  padding: 12px 0;
  text-align: center;
  font-size: 12px;
  color: var(--im-ink-3);
}
.im-history-error {
  margin-bottom: 12px;
  padding: 8px 12px;
  border: 1px solid color-mix(in srgb, var(--im-danger) 32%, transparent);
  border-radius: var(--im-r-sm);
  background: color-mix(in srgb, var(--im-danger) 8%, transparent);
  font-size: 12px;
  color: var(--im-danger);
}
@media (max-width: 900px) {
  /* 原版同一条：窄屏两列挤成一条，行内 160px 的图会让提示词只剩一两字宽 */
  .im-history-rows { grid-template-columns: 1fr; }
}
@media (hover: none), (pointer: coarse) {
  /* 触摸设备没有悬停：抬升会变成"点一下跳一下" */
  .im-history-row:hover { transform: none; box-shadow: none; }
}
/* 可选列表（保存弹窗里的已有工作流）：点一行就把名字填进去。
   注意这是原版**保存**弹窗那套（内联 Tailwind：px-3 py-1.5 / 12px / meta 10px），
   与下面加载弹窗用的 .im-workflow-list 是两个不同的档 —— 原版自己就没统一，
   照各自原样来，别为了「统一」把它们合成一套。 */
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

/* ---------------- 加载工作流的列表（照搬原版 .workflow-list，index.css:776-780） ----------------
 * 逐值对照：容器 1px rgba(31,41,55,.12) + radius var(--r-control) + --surface-float；
 * 行 9px 12px / 12px / #3f4953；meta 11px / rgba(23,32,43,.42) / 等宽数字。
 * 它比保存弹窗那套（.im-pick-*，6px 12px / meta 10px）松一档 —— 这是原版自己的
 * 两套值，不是我们漂移。 */
.im-workflow-list {
  border: 1px solid var(--im-line);
  border-radius: var(--im-r-control);
  background: var(--im-surface-float);
  /* 原版 max-h-72（=288px）：工作流多到几十份时列表自己滚，别把弹窗撑长 */
  max-height: 288px;
  overflow-y: auto;
}
.im-workflow-list__item {
  display: flex;
  /* 行是 <button>：没有 Tailwind preflight 抹平，浏览器默认的灰底/边框/居中/字体
     都得自己清掉，漏一条就是「系统默认按钮」混在列表里 */
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 9px 12px;
  border: 0;
  background: transparent;
  color: var(--im-ink-2);
  font: inherit;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  transition: color 0.18s ease, background-color 0.18s ease;
}
.im-workflow-list__item:hover,
.im-workflow-list__item:focus-visible {
  color: var(--im-brand);
  background: color-mix(in srgb, var(--im-brand) 7%, transparent);
}
.im-workflow-list__name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.im-workflow-list__meta {
  flex: none;
  font-size: 11px;
  color: var(--im-ink-3);
  font-variant-numeric: tabular-nums;
}

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
  /* 取紧凑档，不再单写 30：整条阶梯只有 28 / 38 两档控件高度，
     多一个 30 就是「看起来都差不多、但就是对不齐」的来源。 */
  height: var(--im-h-ctl);
  min-height: var(--im-h-ctl);
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
  /* 读数那行在原版里也是 #52606f（和其余行同一个 .dock-row 色），不是更深的墨色。
     用 ink-2 而不是 ink：ink 在浅色下是近黑 #0f1115，比原版那档灰深一大截。 */
  color: var(--im-ink-2);
  color: var(--im-ink);
  border-bottom: 1px solid var(--im-line);
  border-radius: 0;
  margin-bottom: 2px;
}
.im-dock-row--readout:hover { background: transparent; color: var(--im-ink-2); }

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
  border-radius: var(--im-r-pill);
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

/* ============ 可拖出按钮（工具栏：新建提示词卡片 / 新建图片组） ============
   悬浮时暗示「这个能拖到画布」：**grab 光标 + 品牌色呼吸光晕 + 右侧六点把手淡入上浮**。
   光标与两个关键帧照搬原版 .btn-draggable / .btn-drag-grip（1.8s 呼吸、光晕 5px/16%、
   入场 0.25s cubic-bezier(0.22, 1, 0.36, 1) 从 translateY(2px) scale(.8) 浮上来）。

   ⚠️ 与原文的一处**有意偏离**（维护者 2026-11-07 定）：原版把把手放在 -right-1
   （右缘外 4px），而按钮本身是 overflow: hidden（涟漪层要用），那 4px 会被裁掉 ——
   实测只剩半枚圆，看着像贴了个豁口。这里改成**在按钮右侧留出空隙、把手放在空隙里**：
   右内边距加到 22px，把手 right: 3px，文字与把手之间还剩约 3px。
   想改回"贴边缘"就把这两条数值换回来，但先确认 overflow 不再裁它。 */
.im-drag-source {
  padding-right: 22px;
  cursor: grab;
}
.im-drag-source:active { cursor: grabbing; }
.im-drag-source:hover:not(:disabled) { animation: im-drag-hint-glow 1.8s ease-in-out infinite; }
/* 六点把手：16px 圆、品牌 30% 描边、浮层底、居中并占满按钮高度 */
.im-drag-grip {
  position: absolute;
  right: 3px;
  top: 0;
  bottom: 0;
  margin-block: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 1px solid color-mix(in srgb, var(--im-brand) 30%, transparent);
  border-radius: var(--im-r-pill);
  /* 原版 bg-white：这里是浮层档表面（浅色=白、深色=深一档），别写死 #fff */
  background: var(--im-surface-float);
  box-shadow: var(--im-shadow-card);
  color: var(--im-brand);
  opacity: 0;
  pointer-events: none;
}
.im-drag-source:hover .im-drag-grip {
  animation: im-drag-grip-in 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes im-drag-hint-glow {
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--im-brand) 0%, transparent); }
  50%      { box-shadow: 0 0 0 5px color-mix(in srgb, var(--im-brand) 16%, transparent); }
}
@keyframes im-drag-grip-in {
  from { opacity: 0; transform: translateY(2px) scale(0.8); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
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

/* 只给读屏的文本：不能 display:none（会被移出无障碍树）。
   由 modal-shell 的对话框标题复用——标题视觉上隐藏，但仍是 dialog 的可访问名。 */
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

/* ---------------- 大图预览（移植 ZoomModal） ----------------
   遮罩与坞上的控件都压在图片上，颜色必须与图片内容形成对比、又与主题自洽。
   做法：一律从 --im-ink 与 --im-surface 派生（浅色主题 → 深底浅字，暗色主题 → 浅底深字），
   不写死颜色、也不混用宿主的 --dsw-* token。

   注意这一组控件**故意**跟随主题翻转，而原版是恒定深底浅字：原版是独立应用、
   预览永远在深色胶片上；插件要跟宿主明暗一起走，所以这里让对比方向跟着主题。
   两种做法都能保证可读，跨体系混色才会出现「黑底黑字」。 */
.im-zoom-overlay {
  /* 遮罩层里那几块「压在照片上」的控件台。它们必须与照片内容形成对比，
     所以要在暗遮罩上浮浅色、在浅遮罩上浮深色 —— 也就是**和遮罩反着来**，
     不能跟主题走。因此这里一律从 #fff / #000 直接派生，不用 --im-ink。 */
  --im-chrome-bg: rgba(0, 0, 0, 0.42);
  --im-chrome-bg-hover: rgba(255, 255, 255, 0.2);
  --im-chrome-ink: #fff;
  --im-chrome-line: rgba(255, 255, 255, 0.2);

  position: fixed;
  inset: 0;
  z-index: 60;
  user-select: none;
  /* ⚠️ 遮罩只负责**压暗**，永远不跟主题翻转。
   *
   * 之前这里写的是 color-mix(in srgb, var(--im-ink) 62%, transparent) —— 想"跟随主题"，
   * 结果 --im-ink 在暗色下是近白（#f9fafb），62% 的白直接糊成一层亮纱：
   * 维护者报「放大图片后背景变亮了很多，是不是加了个白色图层」。就是这个。
   *
   * 遮罩的语义是"把底下的界面推远"，两种主题下都该更黑，所以用蒙版 token：
   * 浅色 #0000003d、暗色 #00000080（暗色本来就压得更狠，符合直觉）。 */
  background: var(--im-scrim);
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
   原版 index.css 也是这么补的 —— 但它**只给 button / a / [role=button] /
   [role=option] / input[type=range]** 加，输入类控件（input/textarea/select）不在名单里：
   它们靠 .field-control:focus 那圈 4px 光环表示焦点（见上面 .im-field:focus）。
   这里严格照这个分工，别给 .im-field 再补 outline —— 两条叠加就是「重影双环」。 */
button:focus-visible,
[role='button']:focus-visible,
[role='option']:focus-visible,
input[type='range']:focus-visible {
  outline: 2px solid var(--im-brand);
  outline-offset: 3px;
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
   .react-flow__node —— 那层是 React Flow 的定位 transform，动它节点会甩飞。

   ⚠️⚠️ 入场动画**必须挂在 node-enter 类上**，绝不能无条件下在 .im-panel-card 上。
   这条是本次「文字永久模糊 + 加载很慢」的直接根因（维护者报的），成因写清楚免得
   又被"简化"回去：

   1) 无条件写 animation + both 等于**每张卡永远带着一个动画**。浏览器对带
      动画的元素按动画图层处理并按当时倍率栅格化 —— 而画布缩放改的是
      .react-flow__viewport 的 scale，动画图层不跟着重栅格 → 放大后就是拉大的旧
      位图，文字一直发虚，要等某次重绘（点击/悬停）才刷新。
   2) both 还会把最终帧锁住，和 hover 的 transform/transition 抢同一组属性。
   3) 叠加 onlyRenderVisibleElements：平移/缩放时节点反复挂载，动画反复从头播，
      每帧都在重启合成 → 「加载很慢」的体感就来自这里。

   原版的写法就是**按类门控**：.enter-up 只在带该类的元素上生效，
   节点的 node-enter 类由 CanvasPage 在动画结束后摘掉（见其"入场动画收尾"注释）。
   我们照同一结构，但**默认不给节点加这个类** —— 也就是默认不动画。
   要恢复入场动效，就在节点刚创建时加 node-enter（配 enter-delay-1..3 交错），
   并在 animationend 里摘掉；lib/workflow.ts 的 withEnterAnim / stripAnimClasses
   就是为此准备的现成工具。加之前先想清楚：这是 0.5s 的观感，
   代价是每张卡多一个合成层。 */
.react-flow__node.node-enter .im-panel-card { animation: im-enter-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both; }
.react-flow__node.node-enter.enter-delay-1 .im-panel-card { animation-delay: 70ms; }
.react-flow__node.node-enter.enter-delay-2 .im-panel-card { animation-delay: 140ms; }
.react-flow__node.node-enter.enter-delay-3 .im-panel-card { animation-delay: 210ms; }
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
