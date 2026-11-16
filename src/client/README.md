# client/ — 浏览器半端手册

## 职责

向宿主的插槽注册画布，并实现画布的渲染与交互。

## 文件

| 文件                    | 职责                                                                          | 关键导出                                                      |
| ----------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `index.tsx`             | 入口：注册 `main` 与 `sidebar.panellist` 两个插槽，注入 xyflow 样式与文案词典 | `apply`、`inject`                                             |
| `locales.ts`            | **全部界面文案**：中英两份词典 + `interpolate`。`zh` 是键集真源               | `NS`、`zh`、`en`、`LocaleKey`、`Translate`、`interpolate`     |
| `i18n.tsx`              | 文案接线：`LocaleProvider` / `useT()`，无宿主时退回中文兜底                   | `LocaleProvider`、`useT`                                      |
| `api.ts`                | `/imagora/*` 的浏览器侧封装                                                   | `getConfig`、`submitGenerate`、`fetchTask`、`saveWorkflow` 等 |
| `nodes.tsx`             | 三类节点组件与节点上下文                                                      | `ImageNode`、`PromptNode`、`GroupNode`、`NodeActionContext`   |
| `icons.tsx`             | 内联 SVG 图标，不引图标库                                                     | `Icon`                                                        |
| `select.tsx`            | 自绘下拉框（listbox）：分组 / 搜索 / 键盘导航，浮层 portal 到 body            | `Select`、`SelectOption`                                      |
| `brand.tsx`             | 品牌区：Imagora 字形与标题                                                    | `BrandLogo`、`BrandHeader`                                    |
| `canvas/zoom-modal.tsx` | 大图预览：缩放 / 平移 / 复制 / 新标签，portal 到 body                         | `ZoomModal`                                                   |
| `styles.ts`             | 设计层（`--im-*` 语义 token 为主，`im-` 前缀类名）                            | `CANVAS_CSS`                                                  |
| `env.d.ts`              | 声明 `*.css` 走 esbuild 的文本插件                                            | —                                                             |
| `lib/`                  | 从 Imagora 移植的纯逻辑，见下                                                 | —                                                             |

## canvas/ 子目录

画布按职责拆分，`index.tsx` 只做装配。

| 文件                         | 职责                                                  |
| ---------------------------- | ----------------------------------------------------- |
| `index.tsx`                  | 状态与 refs、派生量、动作装配、ReactFlow 挂载         |
| `toolbar.tsx`                | 顶栏，只放全局动作；动作全部由 props 上抛             |
| `inspector.tsx`              | 右上角选中操作栏（选中 ≥1 个节点才出现）              |
| `node-context-menu.tsx`      | 节点右键菜单：portal 到 body、贴边夹取、Esc 让位浮层  |
| `dock.tsx`                   | 左下角缩放控件坞（带文字的一列）                      |
| `overlays.tsx`               | 空态、日志轮播、toast、大图预览、顶部提示条           |
| `dialogs.tsx`                | 保存 / 加载 / 帮助三个对话框                          |
| `modal-shell.tsx`            | 弹窗基座：四档宽度、头/身/脚三段、内容区自己滚        |
| `imagora-root-row.tsx`       | 设置里的 Imagora 目录与输出目录指针                   |
| `budget-row.tsx`             | 设置里的「本画布预算上限」（硬拦那一层）              |
| `use-canvas-drop.tsx`        | 拖入建节点：落点胶囊、工具栏拖出、文件拖放            |
| `use-canvas-context-menu.ts` | 右键手势：单击节点弹菜单 / 拖拽框选 / 屏蔽原生菜单    |
| `node-types.tsx`             | React Flow 的节点类型表（每类外面套一层错误边界）     |
| `error-boundary.tsx`         | 两层兜底：`NodeBoundary` 单卡 / `CanvasBoundary` 整块 |
| `use-canvas-config.ts`       | 配置读取与来源、模型切换                              |
| `use-canvas-images.ts`       | 上传、换图、大图预览、连线桥                          |
| `use-canvas-tasks.ts`        | 提交、轮询、结果回流、取消                            |
| `use-canvas-workflow.ts`     | 保存、加载、自动恢复快照                              |

## lib/ 移植区

来自 Imagora 的无副作用模块，保持原实现与注释。

- 许可与清单 → [THIRD_PARTY_NOTICES.md](../../THIRD_PARTY_NOTICES.md)
- 格式检查已排除该目录；改它要按上游语义判断。
- 关键规则都在这里：连线方向约束、`@` 引用解析、组递归聚合、引用计数溯源、落点错开、工作流归一化。
- 右键菜单的内容与位置算术：`contextMenu`（`buildNodeMenu` 按节点类型排项、`clampMenuPosition` 贴边夹取、`menuHeight` 推高度；纯函数，渲染在 `canvas/node-context-menu.tsx`）。
- 下拉框相关：`optionGroups`（分组）、`popupLayer`（浮层栈，Esc 让位）、`rankByName`（搜索排序）、`apiCatalog`、`customValue`（自由输入归一化）。
- 画布卡片的缩略图：`thumbnails`（长边 512、模块级会话缓存、LRU + `revokeObjectURL`）与 `useThumbnail`（取数 hook）。**卡片只用缩略图，原图留给预览 / 裁剪 / 放大 / 蒙版**——原图 12 MP，摊开一次约 48 MB，而卡片只显示 128×160。
- 成本看板的显示口径：`cost`（`formatMoney` / `formatRate` / `formatSeconds` / `statRows`）。**金额、百分比、耗时的格式只在这里改**——历史弹窗曾经自己拼 `avgSeconds.toFixed(1)+"s"`，于是同一个数在原版显示 `2m36s`、插件显示 `156.3s`。
- 大图预览的缩放与平移换算：`previewZoom`；剪贴板写入：`imageCopy`。

## 文案与语言

界面文字**全部**在 [`locales.ts`](locales.ts)，组件里不写中文。

- 语言跟随宿主的设置，本插件不提供自己的开关。宿主注入的 `t` 只到 `CanvasApp` 一层，靠 [`i18n.tsx`](i18n.tsx) 的 Context 送到子组件与 hook。
- `zh` 是键集真源，`en` 声明成 `Record<LocaleKey, string>`：**漏译、拼错键名都是编译错误**。
- 两种语言各自写，不做逐字直译；带数量的按钮给「单数 / 复数」两个键，不拼接括号。
- `lib/` 里**不许**出现 `t()`：它是 A 档移植区，产出的界面文字在消费处换（菜单按 `id`、分组按 `group.id`）。四道缝见 [架构文档](../../docs/ARCHITECTURE.md#a-档移植件与文案层之间只有一道缝)。
- 冒烟里两条断言守着退化：组件里漏回中文字面量、词典里出现孤儿键。
- 插件页的标题与说明是**另一条路**（[locale/](../../locale/README.md)，宿主直读 JSON）。

## 被谁依赖

只有 DSH 宿主加载 `index.tsx`；`api.ts` 被 `canvas/` 下的 hook 使用；`nodes.tsx` 被 `canvas/node-types.tsx` 引用。

## 变更影响路由

- 改插槽名或 key → 同步 [host 无关]，但要核对 `src/client/index.tsx` 的 `KEY` 与架构文档的「插槽契约」。
- 改接口调用 → 同步 [host/routes.js](../host/README.md) 与架构文档契约表。
- 改样式 → 只能新增 `im-` 前缀类；颜色走 `--im-*` 语义 token（它本身由 `--dsw-*` 映射而来）。
- 加新控件 → 先查 [架构文档的尺寸阶](../../docs/ARCHITECTURE.md)，落不进任何一档就说明在发明新值，停下来确认。
- 加提示 → 只用原生 `title`，见 [决策](../../.agents/notes/2026-11-07-native-title-only.md)。
- 改文字 → 只动 [`locales.ts`](locales.ts)，中英两份一起；英文比中文长，改完去验收台看版面是否还放得下。
- 改 `lib/` → 见上；改完必跑 `pnpm run test` 与 `pnpm run harness`。
- 改包名 → 见根 [AGENTS.md](../../AGENTS.md) 活跃坑，四处一起改。

## 工作约束

见 [AGENTS.md](AGENTS.md)。
