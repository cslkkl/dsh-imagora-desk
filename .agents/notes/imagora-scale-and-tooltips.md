# 依据：Imagora 尺寸阶与提示机制的实测对照（2026-11-07）

状态：生效

## 背景

界面对齐原版时接连出现「间隙不一致」「边框粗细不一」「提示有时快有时慢」这类问题，需要一份可直接对照的实测数据，而不是凭印象调数字。

调查对象：上游 Imagora 的 `frontend/src/index.css` 与 `components/*.tsx`（路径相对[上游仓库](https://github.com/Cogniform/imagora)根），对照本仓库的 `src/client/styles.ts` 与各 `*.tsx`。

## 结论

### 原版的尺寸阶集中定义在 `:root`

| token         | 值    | 用途                                     |
| ------------- | ----- | ---------------------------------------- |
| `--h-ctl`     | 28px  | 顶栏控件（按钮、徽章、分段切换统一等高） |
| `--h-field`   | 38px  | 表单控件                                 |
| `--h-cta`     | 46px  | 主行动按钮                               |
| `--r-pill`    | 999px | 胶囊（顶栏控件）                         |
| `--r-card`    | 16px  | 卡片                                     |
| `--r-control` | 10px  | 输入控件                                 |
| `--pad-card`  | 20px  | 卡片内边距                               |

按钮尺寸档用 Tailwind 定义：`.btn-sm` = `px-3 py-1 text-xs`（12 / 4 / 12px 字号）；`.btn-xs` = `px-2 py-1 text-[11px]`；`.btn-icon` 36×36 圆角 10、`.btn-icon--sm` 30×30 圆角 8。

### 线宽

原版通篇 `1px`：21 处 `border: 1px`、2 处 `border-bottom: 1px`、1 处 `border-right: 1px`。唯一的非 1px 是滚动条滑块的 `border: 3px solid transparent`（内缩手法，不是描边）。

插件侧同样是 1px 为主，但存在一处 `border: 1.5px`（滑块手柄）—— 原版滑块没有这类描边。

### 圆角实测（插件侧偏离项）

插件侧共出现 `8px`（5 次）、`7px`、`6px`、`13px`、`999px` 等未走 token 的值。原版同类元素走 `--r-control`(10) 或 `--r-card`(16)。

### 提示机制

原版全仓 25 处提示**全部**是原生 `title`，分布在 `App.tsx`(8)、`CanvasNodes.tsx`(8)、`CanvasPage.tsx`(17) 等文件，没有任何自定义气泡组件、没有任何 tooltip CSS。

结论写入 [原生 title 决策](2026-11-07-native-title-only.md)。

### 间隙实测

原版：`.dock-row` `gap: 4px`、`.studio-header` `gap-x-3 gap-y-2`（12/8）、`.studio-toolbar` 容器内 `gap`、`.chip` 无 `gap`（单色块）、模态 `gap` 多为 8。

插件侧 `gap` 现值为 2 / 4 / 5 / 6 / 8 / 14px 六档并存，其中 `5px`（按钮内图标与文字）与 `2px`（日志行、提示条列表）没有对应原版档位。

## 支撑的决策

- [提示一律用原生 title](2026-11-07-native-title-only.md)

## 影响

尺寸阶的收编依据本表执行；后续若上游 Imagora 改动 token，本表数值需同步。

长期用途：新增控件时先查本表能落到哪一档，落不进任何档就说明是在发明新值，应当停下来确认。
