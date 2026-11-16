# 缩略图与恢复快照：与上游同构的两处

状态：生效

## 问题

两件事，一起做的：

1. **画布吃内存**。原图 12 MP，一张解码约 48 MB，而卡片只显示 128×160。
   十几张卡就是几百 MB —— 维护者报「开十几张大图很吃内存」。
2. **快照会把蒙版写进磁盘**。`maskDataUrl` 是原图尺寸的 PNG data URL（MB 级），
   而快照每 2.5s 重写、留 5 份。

## 决策

**都按上游做法对齐，代码逐字节相同。**

- `src/client/lib/thumbnails.ts`、`lib/useThumbnail.ts` 从上游同名文件原样移植
  （属 `client/AGENTS.md` 说的第一档：逐字节相同，改则两边同改）。
  卡片只用缩略图；双击预览 / 裁剪 / 放大 / 蒙版仍拿 `data.url`。
- `lib/recovery.ts` 同步上游：图片节点剥掉 `maskDataUrl`。

**顺手接上了一条断了很久的线**：插件里 `buildRecoverySnapshot` 原本**没有任何调用点**
——保存路径（`api.ts:saveRecovery`）直接把内存里的节点发给宿主。于是运行期字段
（`status: running` / `startedAtMs`）和蒙版一起写进了磁盘。现在与上游
`useCanvasRecovery` 同构：先过筛子再发。

## 替代方案

- **让 host 出缩略图**（`/imagora/file?id=&w=256`）：效果最彻底，但 host 要引入图像库，
  与「运行期零依赖」那条既有决策冲突（[2026-11-06-self-owned-build-deps.md](2026-11-06-self-owned-build-deps.md)）。
- **只加载可见卡片、滑走就卸载**：`onlyRenderVisibleElements` 已经在用，但滚动会闪、
  来回重新加载，体验更差。
- **保留蒙版进快照**（现状）：等于接受「用过一次蒙版，之后每次自动保存都在写 MB 级文件」。

## 影响

- 卡片位图约 48 MB → 约 0.4 MB/张；UI 冒烟实测缩略图 `naturalWidth=512`，
  双击预览仍是原图（1600×1200 的验收台样例）。
- 恢复快照不再包含蒙版；代价是刷新后涂抹痕迹不恢复（图、位置、引用关系不受影响）。
- 顺手修掉的那条断线还带来一个副作用：恢复出来的卡片不会再带 `status: running`，
  与「不假装在跑」的既有语义一致（认领仍靠 `taskId`，已在 UI 冒烟里验过）。
