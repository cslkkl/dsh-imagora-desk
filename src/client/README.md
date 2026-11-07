# client/ — 浏览器半端手册

## 职责

向宿主的插槽注册画布，并实现画布的渲染与交互。

## 文件

| 文件                    | 职责                                                                | 关键导出                                                      |
| ----------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------- |
| `index.tsx`             | 入口：注册 `main` 与 `sidebar.panellist` 两个插槽，注入 xyflow 样式 | `apply`、`inject`                                             |
| `api.ts`                | `/imagora/*` 的浏览器侧封装                                         | `getConfig`、`submitGenerate`、`fetchTask`、`saveWorkflow` 等 |
| `nodes.tsx`             | 三类节点组件与节点上下文                                            | `ImageNode`、`PromptNode`、`GroupNode`、`NodeActionContext`   |
| `icons.tsx`             | 内联 SVG 图标，不引图标库                                           | `Icon`                                                        |
| `select.tsx`            | 自绘下拉框（listbox）：分组 / 搜索 / 键盘导航，浮层 portal 到 body  | `Select`、`SelectOption`                                      |
| `brand.tsx`             | 品牌区：Imagora 字形与标题                                          | `BrandLogo`、`BrandHeader`                                    |
| `canvas/zoom-modal.tsx` | 大图预览：缩放 / 平移 / 复制 / 新标签，portal 到 body               | `ZoomModal`                                                   |
| `styles.ts`             | 设计层（`--im-*` 语义 token 为主，`im-` 前缀类名）                  | `CANVAS_CSS`                                                  |
| `env.d.ts`              | 声明 `*.css` 走 esbuild 的文本插件                                  | —                                                             |
| `lib/`                  | 从 Imagora 移植的纯逻辑，见下                                       | —                                                             |

## canvas/ 子目录

画布按职责拆分，`index.tsx` 只做装配。

| 文件                     | 职责                                           |
| ------------------------ | ---------------------------------------------- |
| `index.tsx`              | 状态与 refs、派生量、动作装配、ReactFlow 挂载  |
| `toolbar.tsx`            | 顶栏，只放全局动作；动作全部由 props 上抛      |
| `inspector.tsx`          | 右上角选中操作栏（选中 ≥1 个节点才出现）       |
| `dock.tsx`               | 左下角缩放控件坞（带文字的一列）               |
| `overlays.tsx`           | 空态、日志轮播、toast、大图预览、顶部提示条    |
| `dialogs.tsx`            | 保存 / 加载 / 帮助三个对话框                   |
| `modal-shell.tsx`        | 弹窗基座：四档宽度、头/身/脚三段、内容区自己滚 |
| `generation-pending.tsx` | 生成中占位卡（渐近假进度 + 文案轮播）          |
| `imagora-root-row.tsx`   | 设置里的 Imagora 目录与输出目录指针            |
| `output-dir-row.tsx`     | 设置里的输出路径与预算上限                     |
| `use-canvas-drop.tsx`    | 拖入建节点：落点胶囊、工具栏拖出、文件拖放     |
| `node-types.ts`          | React Flow 的节点类型表                        |
| `use-canvas-config.ts`   | 配置读取与来源、模型切换                       |
| `use-canvas-images.ts`   | 上传、换图、大图预览、连线桥                   |
| `use-canvas-tasks.ts`    | 提交、轮询、结果回流、取消                     |
| `use-canvas-workflow.ts` | 保存、加载、自动恢复快照                       |

## lib/ 移植区

来自 Imagora 的无副作用模块，保持原实现与注释。

- 许可与清单 → [THIRD_PARTY_NOTICES.md](../../THIRD_PARTY_NOTICES.md)
- 格式检查已排除该目录；改它要按上游语义判断。
- 关键规则都在这里：连线方向约束、`@` 引用解析、组递归聚合、引用计数溯源、落点错开、工作流归一化。
- 下拉框相关：`optionGroups`（分组）、`popupLayer`（浮层栈，Esc 让位）、`rankByName`（搜索排序）、`apiCatalog`、`customValue`（自由输入归一化）。
- 生成中占位的进度曲线与文案轮播：`generationPending`。
- 大图预览的缩放与平移换算：`previewZoom`；剪贴板写入：`imageCopy`。

## 被谁依赖

只有 DSH 宿主加载 `index.tsx`；`api.ts` 被 `canvas/` 下的 hook 使用；`nodes.tsx` 被 `canvas/node-types.ts` 引用。

## 变更影响路由

- 改插槽名或 key → 同步 [host 无关]，但要核对 `src/client/index.tsx` 的 `KEY` 与架构文档的「插槽契约」。
- 改接口调用 → 同步 [host/routes.js](../host/README.md) 与架构文档契约表。
- 改样式 → 只能新增 `im-` 前缀类；颜色走 `--im-*` 语义 token（它本身由 `--dsw-*` 映射而来）。
- 加新控件 → 先查 [架构文档的尺寸阶](../../docs/ARCHITECTURE.md)，落不进任何一档就说明在发明新值，停下来确认。
- 加提示 → 只用原生 `title`，见 [决策](../../.agents/notes/2026-11-07-native-title-only.md)。
- 改 `lib/` → 见上；改完必跑 `pnpm run test` 与 `pnpm run harness`。
- 改包名 → 见根 [AGENTS.md](../../AGENTS.md) 活跃坑，四处一起改。

## 工作约束

见 [AGENTS.md](AGENTS.md)。
