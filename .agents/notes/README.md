# notes/ — 记录层

决策与依据都放这里，两类同目录、同状态行规则。

## 文件

- 结构、命名、状态行的写法 → [AGENTS.md](AGENTS.md)
- 没有索引文件，按文件名日期排序即时间线

## 已有记录

- [2026-11-06-native-canvas.md](2026-11-06-native-canvas.md)：画布为什么原生实现
- [2026-11-06-reuse-imagora-logic.md](2026-11-06-reuse-imagora-logic.md)：`src/client/lib/` 为什么原样移植
- [2026-11-06-self-owned-build-deps.md](2026-11-06-self-owned-build-deps.md)：为什么自装构建依赖
- [2026-11-06-local-only-hooks.md](2026-11-06-local-only-hooks.md)：本地钩子为什么只用 `language: system`
- [2026-11-07-imagora-visual-parity.md](2026-11-07-imagora-visual-parity.md)：观感为什么照搬 Imagora、配色为什么走宿主 token
- [2026-11-07-shared-imagora-root.md](2026-11-07-shared-imagora-root.md)：与原版共用工作流 / 历史图片为什么用指针不用复制
- [2026-11-08-budget-two-layers.md](2026-11-08-budget-two-layers.md)：本画布上限（硬拦）与本机日预算（需确认）为什么分两层
- [2026-11-16-drop-generation-pending-card.md](2026-11-16-drop-generation-pending-card.md)：生成中占位卡为什么整块删掉、运行中的秒数为什么只留一处
- [2026-11-16-thumbnail-and-recovery-parity.md](2026-11-16-thumbnail-and-recovery-parity.md)：缩略图为什么交给浏览器生成、恢复快照为什么不写蒙版
- [2026-11-16-task-pool-ttl.md](2026-11-16-task-pool-ttl.md)：任务池为什么补终态 TTL、为什么用惰性清理而不是后台定时器
- [2026-11-16-missing-node-fields.md](2026-11-16-missing-node-fields.md)：节点缺字段为什么要在加载时补全，而不是只在渲染时兜住
- [2026-11-16-skip-invalid-nodes.md](2026-11-16-skip-invalid-nodes.md)：节点骨架不成立时为什么跳过并回报，而不是猜着补齐
- [2026-11-16-error-boundaries.md](2026-11-16-error-boundaries.md)：错误边界为什么分两层、崩溃时为什么不再写快照
- [2026-11-17-delete-keeps-file.md](2026-11-17-delete-keeps-file.md)：删节点为什么只删视图、不删文件与登记

## 回引

- 项目规则与仪表盘 → [根 AGENTS.md](../../AGENTS.md)
- 设计圣经 → [docs/ARCHITECTURE.md](../../docs/ARCHITECTURE.md)
