# 生成中占位卡退场：插件与上游同步

状态：生效

## 问题

画布提示词卡 running 时，除运行按钮上的 `Elapsed`（读节点 `startedAtMs`）之外，卡里还挂着一张
「渐近假进度 + 文案轮播」的占位卡。维护者报：切走标签页再回来，下面（按钮）的数字接着数，上面
（卡片）的从 0 重新开始 —— 两个计时器对不上。

根因在**卡片没有真实锚点可用**：`GenerationPending` 自带 1s interval，从挂载那刻算 0s。切走再回来、
或卡片因 `status` 变化重挂载，起点就丢了。上游 Imagora 有同样的问题（他们那边包了一层
`PendingSeconds` 读 `startedAtMs`，但卡片自身的 `elapsed` 只是显示父组件给的值）。

## 决策

**两边一起整块删掉**（上游同一天做，见 imagora 的
`.agents/notes/2026-11-16-drop-generation-pending-card.md`）：

- 删 `src/client/canvas/generation-pending.tsx`、`src/client/lib/generationPending.ts`；
- `nodes.tsx` 去掉导入与挂载点；
- `styles.ts` 删 `.im-pending*`（**保留 `.visually-hidden`**：它挨着这组规则，但被 `modal-shell`
  的对话框标题复用，误删会让 dialog 失去可访问名）；
- 「运行中」只剩状态点 + 运行按钮文字（LOD 抽象模式只有状态大字）。

## 替代方案

- **给卡片喂真实锚点**（把 `GenerationPending` 改成受控、父组件按 `startedAtMs` 算）：否决。两个数字
  对齐了，但同一张卡上同一个量写两遍没有新信息，还多一条「两处必须同步」的维护契约。
- **只删秒数、留动效**：否决。维护者判定动效本身没有价值；卡片进出仍会改一次卡片高度。
- **只在 LOD 模式保留**：否决。那个倍率下已有状态大字，再挂细进度条更碎。
- **换成真进度**：不可行。生图接口不回报百分比。

## 影响

- 插件 `dist/client.js` 462 KB → 459 KB；`smoke-client` 25 条、UI 冒烟 34 条均不变（占位卡本来没有断言）。
- 移植区少一个文件后，`src/client/lib/` 与上游保持一一对应这件事更容易核对：这条改动之后，
  「同名同语义」的清单里不再有需要解释差异的项。
- 与上游的一致性：这次是**先删两边、再各自补文档**，所以不存在「一边留一边删」的中间态。
