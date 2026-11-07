# dsh-imagora-desk 架构说明

## 目标

把 Imagora 的自由画布作为 DSH 插件提供，只做画布。

- 不做：Imagora 的表单页、批量页、配置页、成本看板。
- 不做：要求本机跑 Python 服务。
- 约束：装上即用，配置与密钥直接沿用本机 Imagora。

## 分层

一个 npm 包同时提供两个半端。

```
src/host/      Node 侧：HTTP 路由、资产登记、任务队列、上游请求
src/client/    浏览器侧：插槽注册、画布、节点、样式
src/client/lib/   从 Imagora 移植的纯逻辑（外来源码区）
dist/client.js    构建产物，随仓库提交
```

host 半端向 DSH 的 Web 服务注册 `/imagora` 前缀路由。
client 半端通过 `window.__ModuleLoader__.load` 注册进宿主的模块表，再向两个插槽注册。

## 不变量

违反任一条都会导致「页面上什么都不出现」。

- 模块加载器 id 必须等于 `package.json` 的 `name`。
- `cordis.patch.yml` 的 `name` 必须等于同一个包名。
- `dsh.client.inject` 至少要含 `@deepseek-ai/dsh-client-runtime`。
- `dist/client.js` 必须随源码一起提交；CI 有一条 `git diff --exit-code -- dist/client.js` 守着。
- `react` / `react-dom` / `react/jsx-runtime` 必须 external；打进 bundle 会出现两份 React。

## 插槽契约

| 插槽                | 用途       | 关键参数                                                       |
| ------------------- | ---------- | -------------------------------------------------------------- |
| `main`              | 画布主区域 | `key: 'imagora'`，与侧边栏项的 `id` 同名，点面板时宿主据此渲染 |
| `sidebar.panellist` | 侧边栏入口 | `id: 'imagora'`、`order: 6`、`label()` 返回「自由画布」        |

两个插槽用同一个字符串常量 `KEY`，改名要一起改。

## HTTP 契约

前缀 `/imagora`，全部走 `connection.requestRejection` 鉴权，拿不到鉴权服务时一律 403。

| 方法 | 路径                                                           | 说明                                                                |
| ---- | -------------------------------------------------------------- | ------------------------------------------------------------------- |
| GET  | `/config`                                                      | 来源、模型、尺寸表、质量档、默认输出目录、issues                    |
| GET  | `/health`                                                      | 同上，附 `ok`                                                       |
| POST | `/settings`                                                    | 写插件设置：`profile`（空串 = 跟随 `.env`）、`model`、`imagoraRoot` |
| GET  | `/assets`                                                      | 已登记图片列表                                                      |
| POST | `/upload`                                                      | 请求体是原始字节，`?name=` 给文件名                                 |
| POST | `/asset/delete`                                                | 删登记与文件                                                        |
| GET  | `/file?id=`                                                    | 按登记 id 出图，路径限定在 `assets/` 与 `output/`                   |
| POST | `/generate`                                                    | 建任务，返回 `taskId`                                               |
| GET  | `/task?id=`                                                    | 任务快照                                                            |
| POST | `/task/cancel`                                                 | 排队中就地取消；运行中等当前这张结束                                |
| POST | `/workflow/save` / GET `/workflow/list` / GET `/workflow/load` | 命名工作流                                                          |
| POST | `/recovery/save` / GET `/recovery/latest`                      | 自动恢复快照，只留最近 5 份                                         |
| POST | `/reveal`                                                      | 在资源管理器打开路径                                                |

响应约定：成功返回对象本体，失败返回 `{ error: string }` 且带状态码。

## 数据流

1. 画布改动 → 2.5 秒防抖写一份恢复快照。
2. 点「运行」→ 从节点的入边解析参考图（图片组递归展开，`@名` 过滤）→ 提交任务。
3. host 取 `task.refs` 与配置 → 调上游（有参考图走 `edits`，否则 `generations`）。
4. 结果二进制写进 `assets/` 并登记，按需再复制一份到提示词卡指定的输出路径。
5. 前端轮询到 `done` → 建图片节点摆在提示词卡正下方 → 连一条产出边。

## 配置解析顺序

与 Imagora 保持一致，改这里要同步改两边。

1. 来源：插件设置 `profile` → `.env` 的 `ACTIVE_PROFILE` → `config.json` 的 `default_profile`
2. 地址：`BASE_URL_<PROFILE>` → profile 的 `base_url`
3. 密钥：`API_KEY_<PROFILE>` → `API_KEY` → `AIWANWU_API_KEY`
4. 模型：插件设置 `model` → `MODEL_<PROFILE>` → profile 的 `default_model`
5. 尺寸与价目：模型自带的 `size_options` → profile 级

模型 ID 里的全角连字符会折叠成半角再匹配。

## 状态目录

```
~/.dsh/imagora/
  assets/      画布图片（上传、粘贴、生成结果）
  output/      生成结果默认落盘
  workflows/   命名工作流
  recovery/    自动恢复快照
  registry.json / settings.json
```

`DSH_IMAGORA_HOME` 可整体改道，测试用它指到临时目录。

## 样式

设计层照搬 Imagora 的 `frontend/src/index.css`（`panel-card` / `field-control` / `btn-primary` / `btn-ghost` / `chip` 与尺寸阶梯），只换一处：**颜色从宿主 token 取**。

- 颜色一律用 `--dsw-*` alias token，配一个兜底值；暗色主题跟随宿主，不需要额外分支。
- `--im-*` 是这层 token 的语义别名（`--im-brand` / `--im-surface` / `--im-field` 等），**定义在 `body` 上**，不放在 `.im-root`：宿主 Modal 把内容 portal 到 `body` 下，挂在 `.im-root` 上的自定义属性它继承不到。
- 类名前缀 `im-`，避免与宿主样式冲突。
- 主次层级用宿主组件库自己的 `variant` 表达，不覆写它的颜色（CSS Modules 类名要压就得 `!important`，那是最后手段）。
- xyflow 自带样式在 `apply` 里以 `<style>` 注入，随 effect 清理。

三条取错就出问题的 token 映射（踩过）：

| 用途               | 用                                                                              | 不用                  | 为什么                                                         |
| ------------------ | ------------------------------------------------------------------------------- | --------------------- | -------------------------------------------------------------- |
| 强调色             | `alias-brand-primary-new-colorprimary-new-color`（浅 `#4176e6` / 深 `#4d93f8`） | `alias-brand-primary` | 后者是主体**文字**色，浅色近黑、深色近白，取它整套强调色变黑白 |
| 浮层底             | `bg-layer-1` + `elevation-panel`                                                | `bg-overlay`          | 后者浅色 `#e9ecf2` 比卡片还灰，层次方向反了                    |
| 品牌色实底上的前景 | `alias-label-primary-foreground`                                                | 写死 `#fff`           | 深色主题下品牌色近白，白涟漪配白字直接消失                     |

内嵌一档（缩略图底、图片组底、输入框底）用 `bg-module-platform`：`bg-layer-1/2` 在浅色主题下都是纯白，只有深色才分档。

节点不靠色相区分类型（这与 Imagora 一致）：三类共用同一块面板，靠内容与图标分辨。图片组因为是一组东西的集合，给一层内嵌底。

### 尺寸阶

原版把尺寸集中定义在 `:root`，插件照抄并扩了两档（原版有些值写在未分层规则里，不在 token 表里，直接从 `:root` 抄会抄错）：

| 档               | 值    | 用在哪                                                            |
| ---------------- | ----- | ----------------------------------------------------------------- |
| `--im-h-ctl`     | 28px  | 页头控件（按钮 / 徽章 / 下拉）等高                                |
| `--im-h-field`   | 38px  | 表单控件                                                          |
| `--im-r-pill`    | 999px | 胶囊（页头那一行的按钮）                                          |
| `--im-r-card`    | 16px  | 页头卡片 / 弹窗面板                                               |
| `--im-r-surface` | 18px  | 节点卡面 / 画布（原版 `.panel-card`、`.studio-canvas` 实际是 18） |
| `--im-r-float`   | 11px  | 浮层（控件坞 / 小地图 / xyflow controls）                         |
| `--im-r-sm`      | 8px   | 输入控件 / 节点右侧操作栏                                         |
| `--im-r-control` | 10px  | 一般按钮（ghost 10 / primary 11）                                 |

按钮圆角按上下文分档，不是一个值走天下：页头那一行是胶囊（原版 `.studio-header .btn-ghost` 才 999px），工具栏与弹窗是 10/11px。

输入控件有两档：弹窗/表单是 14px 字号 + `8px 20px` 内边距；节点内是 12px + `8px` 横向内边距——14px 在 7fr 列里会把「1024x1024 (1:1) (0…」截在数字中间。

## 提示

**全站提示只用原生 `title`**，不引入自定义气泡。原版 25 处提示全是 `title`；两种机制并存会让同一界面出现「有的秒出黑框、有的等 1~2 秒」，用户判断不出哪种是对的。决策与替代方案见 [原生 title 决策](../.agents/notes/2026-11-07-native-title-only.md)。

`title` 只写补充信息：按钮上已经写着的字再重复一遍是噪音，原版对这类按钮不挂 `title`。图标按钮（节点右侧操作栏）必须有 `title` + `aria-label`。

## 画布的四个角

位置照 `CanvasPage.tsx` 的注释分配，别自己发明：

| 角   | 放什么                         | 约束                                                |
| ---- | ------------------------------ | --------------------------------------------------- |
| 左上 | 小地图（默认关）               | 右下要留给日志                                      |
| 右上 | 选中操作栏（选中 ≥1 个才出现） | 依赖选区的动作都在这儿，不进顶栏                    |
| 左下 | 缩放控件坞                     | 带文字的一列，不用 React Flow 原生图标              |
| 右下 | 日志轮播                       | 最多 5 条、`pointer-events: none`，否则挡住画布拖拽 |

顶栏只放全局动作。**依赖当前选区的动作进顶栏会被误读成「对整张画布生效」**——「全部运行」和「运行所选」就是最容易被混的一对。

顶栏按原版分成两行：页头行（来源 / 模型 / 成本 / 设置）与工具栏行（左创建类、右工作流类）。控件坞行序固定为 缩放读数 → 放大 → 缩小 → 适应 → 聚焦 → 吸附 → 地图 → 锁定 → 帮助，**别调**：用户靠位置记。

层叠：`.im-canvas` 自带 `isolation: isolate`；节点 `:hover` 抬到 `z-index: 1001`（否则右侧操作栏被相邻节点盖住）；连线层 `1200`；浮条与日志 `40`。

## 拖拽与弹窗

这两块各有一条「不照搬就一定错」的事实，与 `docs/ARCHITECTURE.md` 其余部分同样是硬约束：

- **`dragover` 阶段读不到 `dataTransfer.getData`**，浏览器只在 `drop` 时才允许读自定义类型。所以落画布的意图必须同时接受 `dragstart` 时登记的 ref 作 fallback（见 `lib/canvasDrop.ts` 的 `resolveDropIntent`）。只靠 `getData` 判意图会永远返回 null，于是不 `preventDefault`，浏览器不认这个 drop——表现是「能拖、松手没反应」。
- **弹窗要自带基座**（`canvas/modal-shell.tsx`）。宿主 `ui.Modal` 的面板宽度按它自己的内容定，弹窗里再写死 `minWidth` 必然溢出，被裁掉的是右边那一块。基座的 `.im-modal-body` 必须 `flex: 1 1 auto; min-height: 0; overflow-y: auto`——只写 `overflow` 不给高度约束的话 `scrollHeight` 永远等于 `clientHeight`，底部几行会被静默裁掉。

`.im-root` 需要 `flex: 1 1 auto; width: 100%`：宿主插槽容器是 flex，没有 `flex` 的伸缩项会按内容收缩，画布右侧会留出一条空白，看着也像「被裁掉」。

## 防错清单

- 改包名：`package.json` / `cordis.patch.yml` / `build.mjs` 的 loader id / host 导出名，四处一起改。
- 改插槽名或 key：`src/client/index.tsx` 常量与宿主插槽文档一起核对。
- 改路由：同步 `src/client/api.ts`、host 冒烟用例、本文件的契约表。
- 动 `src/client/lib/`：按上游语义判断，不要按本项目风格改；格式检查已排除该目录。
- 装依赖后忘了重建：CI 的 `dist` 同步检查会红，本地钩子也跑构建相关的冒烟。

## 相关

- 决策记录 → [.agents/notes/](../.agents/notes/README.md)
- 维护索引 → [../AGENTS.md](../AGENTS.md)
