# 生成历史：一行控件同高 + 成本条对齐上游

日期：2026-11-16

## 问题

三处，用户一眼看出来的：

1. 标题带里搜索框、状态下拉、按钮**四种高度**并排：`.
im-field` 38、搜索框自写 4px padding 得 31、按钮 `.im-btn-sm` 22。
2. 状态筛选是**原生 `<select>`**，圆角、字号、箭头全由浏览器决定，和旁边的输入框永远不同高；
   宽度 7rem 还把「全部状态」截成「全部…」。
3. 成本条没对齐上游：`按尺寸` 被塞进指标网格当第 6 格 → 整行换行 → 预算设置被顶到第二排，
   成本条因此 130px 高；指标格里也放不下金额，只剩「尺寸 ×数量」。
   另外耗时自己拼 `avgSeconds.toFixed(1)+"s"`，上游是 `2m36s`，同一个数两边长得不一样。

## 做法

### 高度：由容器定，不由控件自己算

```css
.im-history-bar,
.im-history-budget {
  --im-row-h: var(--im-h-ctl);
}
.im-history-bar .im-field,
.im-history-bar .im-select-trigger,
.im-history-bar .im-btn-*,
.im-history-stats .im-field,
.im-history-stats .im-btn-* {
  height: var(--im-row-h);
  padding-block: 0;
  font-size: 12px;
}
```

上游同一套：`.studio-header` 早就写着 `height: var(--h-ctl)` + `padding: 0 12px`，
这次只是把同一条规矩用到历史弹窗那两条带子上，并收成 `.compact-controls` 一个类。

**为什么不给每个控件写自己的 `!py-*`**：那样每加一个控件就要再补一条覆盖，
补漏一个就参差——本次就是这么攒出四档的。容器定高之后，谁进这行都自动对齐。

### 状态下拉换成自绘 `Select`

`src/client/select.tsx` 本来就有（工具栏、设置弹窗都在用），历史里却写了个裸 `<select>`。
换成 `Select` 后高度走 `--im-row-h`，宽度 9rem 放得下「全部状态」四字。

### 成本条按上游 CostBoard 重排

```
<section class="im-history-stats">           ← 列方向
  <div class="im-history-stat-row">          ← 第一排：指标 flex-1 | 竖线 | 预算 shrink-0
    <div class="im-history-stat-grid">       ← 5 格，2/3/5 列三档
    <div class="im-history-budget">
  <div class="im-history-sizes">             ← 第二排：按尺寸，带金额
```

「按尺寸」**必须**独立成行：上游指标正好 5 格，多塞一格就整行换行、把预算顶下去。

### 格式化收进 `lib/cost.ts`（A 档移植）

上游 `frontend/src/cost.ts` 原样搬进 `src/client/lib/cost.ts`（仅 import 路径不同），
`history-dialog.tsx` 删掉自己那两份 `money()` / `statRows()`。

## 一处连带修的坑

指标列原是 `repeat(5, minmax(0, 1fr))`——等宽列看着齐，但成功率带括号（`84.6%（549/649）`）
是五格里最长的一格，预算区因控件变高变宽 8px 后，它只差 2px 就被截成 `84.6%（549/64…`。
改成 `minmax(max-content, 1fr)`：每列至少放得下自己的字，富余宽度均分，列依然成列。
**两边同改**（上游 `.cost-board-grid`、插件 `.im-history-stat-grid`）。

列数写进类里而不是调用点的 `grid-cols-*`：Tailwind 的 utilities 层会压过 `@layer components`，
两处同时写只会剩下 utilities 那份，`minmax` 白写。

## 验证

|                               | 原版                        | 插件              |
| ----------------------------- | --------------------------- | ----------------- |
| 搜索框 / 下拉 / 按钮 / 金额框 | 28 / 28 / 28 / 28           | 28 / 28 / 28 / 28 |
| 下拉标签                      | 「全部状态」完整            | 「全部状态」完整  |
| 成功率                        | `84.6%（549/649）` 不截断   | 同左              |
| 按尺寸                        | `1024x1024 ×330 · 10.30 元` | 同左              |
| 成本条高度                    | 119px（原 119，未变）       | 130 → 86px        |

插件 UI 冒烟新增 5 条锁住：指标 5 格与预算同排、按尺寸独立一行且带金额、
五行控件同高、状态筛选不是原生 `select`、下拉标签没被截断。
