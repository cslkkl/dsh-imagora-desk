# 决策：画布观感照搬 Imagora，配色走宿主 token（2026-11-07）

状态：生效

## 问题

插件第一版把画布配色做成了自制的一套：三类节点各占一个色相（提示词卡紫 `#7c5cff`、图片青 `#12a4b8`、图片组琥珀 `#e08a1e`），工具栏底加紫→青彩条，主按钮走渐变，弹窗按钮为了压过宿主 `Button` 的 CSS Modules 还上了 28 处 `!important`。

`7d96458` 引入这套的理由是「宿主 token 全是黑白灰，看不出主次」。装上以后的实际反馈是**丑**：和原版 Imagora 摆在一起不像同一个产品。

## 决策

设计层照搬 Imagora，配色源换成宿主 token。

- 结构、类名、尺寸阶梯全部对齐 `frontend/src/index.css`：`panel-card`、`field-control`、`btn-primary` / `btn-ghost`（胶囊 + hover 涟漪反转）、`chip`，控件 28 / 表单 38 / 圆角 胶囊·卡片 16·控件 10。
- 节点标记对齐 `components/CanvasNodes.tsx`：右侧 hover 竖排操作栏、128px 固定缩略图、提示词卡 380px 宽与 7fr/3fr 字段栏、状态灯四态。
- 顶栏补回常驻操作提示条，按钮分组与分隔线按 Imagora 排布，主行动只留「全部运行」。
- 三类节点**不再各占色相**——Imagora 本来就是单主体色 + 中性面板，靠内容区分。
- 主次层级用宿主组件库自己的 `variant` 表达，删掉全部 `!important` 覆写。

只在必须改的地方动手：取数与动作走 `NodeActionContext`，弹窗外壳用宿主 `Modal`（焦点陷阱、Esc、遮罩顺序都与 DSH 其它面板一致）。

## 替代方案（强制）

- **继续用自制三色，只把色值调柔和**：方向错。问题不是色值难不难看，是「自制一套配色」本身就和宿主、和原版都不一致；调色只是把偏差缩小一点。
- **引入 Tailwind 照搬整套（含 preflight）**：Imagora 前端是 Tailwind v4，标记里全是工具类。但 preflight 是全局重置（`*{margin:0;padding:0}`、边框与字体基线全改），插件把 CSS 注入宿主页面 `<head>`，会打坏整个 DSH 界面。关掉 preflight 就只剩工具类，而 Tailwind 的颜色工具类（`bg-white` / `text-neutral-600`）是写死色值，暗色下不会翻转，等于搬进来再逐个改一遍。
- **另写一套暗色样式**：不需要。宿主在 `body[data-ds-dark-theme]` 上把 alias token 整体翻转，只要颜色取自 token 就有暗色。写第二套反而会与宿主主题脱钩。

## 影响

- 得到：观感与原版 Imagora 一致；暗色主题零成本跟随；`styles.ts` 从 429 行的自制配色表变成一层「设计层 + token 别名」，去掉 28 处 `!important`。
- 代价：Imagora 前端升级不会自动带过来，设计层要人工对照（与「复用纯逻辑」的代价同源）。
- 代价：弹窗里的输入控件仍用原生 `select` / `input`，没有搬 Imagora 的 `Select`（那个组件自带选项分组、搜索与自定义值，23KB，属于后续可选项）。
