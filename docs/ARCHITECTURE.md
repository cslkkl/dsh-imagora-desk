# dsh-imagora-desk 架构说明

## 目标

把 [Imagora](https://github.com/Cogniform/imagora) 的自由画布作为 DSH 插件提供，只做画布。

- 不做：Imagora 的表单页、批量页、配置页、成本看板。
- 不做：要求本机跑 Python 服务。
- 约束：装上即用；配置、密钥、工作流与生成历史都可以直接沿用本机 Imagora 那一份（见「状态目录」）。

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

### 与上游 Imagora 的关系分三档

「照搬原版」不是一句口号，落到具体文件上是三种不同强度的约定。改任何一处之前先认它是哪一档，
**越往上越不许按本项目风格改写**：

| 档                 | 位置                                 | 约定                                                                     | 现状                                                                                                                                           |
| ------------------ | ------------------------------------ | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **A 规范化后相同** | `src/client/lib/` 里与上游同名的模块 | 只允许改注释/引号/分号（所以不是「逐字节」，见下）；改一个必须同时改上游 | 逐字节相同 **19** 个；仅格式差异 **3** 个；另有 **4** 个必须不同（见 C 档行）。完整清单见下                                                    |
| **B 同构改写**     | `canvas/` 下的渲染件与 hook          | 结构、可访问性属性、语义、类名层级对齐上游，样式走自己的 `--im-*` token  | `generation` 类已退场；`node-context-menu` / `use-canvas-context-menu` / `crop-dialog` 等                                                      |
| **C 各自适配**     | 手势、宿主边界、构建                 | 允许与上游不同，但**必须就地写明差异和理由**                             | 屏蔽原生右键菜单只到 `.im-root`（上游是 `window`）；LOD 走 context 不走 nodeTypes 工厂；`workflow.ts` 多出 `sanitizeEdges` / `pendingTaskRefs` |

A 档是这套东西还能维护的原因：`layout.ts`（405 行分层布局）、`contextMenu.ts`（166 行菜单算术）
这类「改了只有靠用例才发现错了」的代码，两边共享同一份实现和同一批注释里的历史坑。
C 档的每一条差异都在代码注释与 [FEATURE-PARITY](FEATURE-PARITY.md) 里各写一遍——
前者给改代码的人，后者给判断「功能是否对齐」的人。

**A 档的清单（2026-11-16 逐对比对，`git diff --no-index` 量出来的，不是估的）**

文档此前只列了 11 个「逐字节相同」，实际是 19 个；这类清单靠人记必然会漂，所以写全：

- **逐字节相同（19）**：`apiCatalog` `canvasGeometry` `canvasHistory` `contextMenu` `customValue`
  `edgeStyle` `format` `imageOps` `layout` `maskBrush` `minimapColor` `optionGroups` `popupLayer`
  `promptRefs` `rankByName` `recovery` `snapDrag` `snapGuide` `thumbnails`
- **仅格式/注释差异（3）**：`previewZoom`（插件去分号）、`promptImportFormat`（末尾换行）、
  `useThumbnail`（注释写法）。**它们与上游语义相同**，修改时仍按 A 档对待。
- **必须不同（4，归 C 档）**：
  | 文件            | 为什么不能一样                                                                                                                                                                                   |
  | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `workflow.ts`   | 多 `sanitizeEdges` / `pendingTaskRefs`。插件把变量收口成 `--im-*`，上游存档里内联的 `var(--edge-stroke-idle)` 在插件里计算值是 `none` → 连线整条消失且不报错。上游**没有**这两个函数，也不需要。 |
  | `imageCopy.ts`  | 上游有第二条路：服务端 `POST /api/clipboard/image` 同步写系统剪贴板。插件 host 没有这个接口，只保留浏览器路径（并因此不能承诺「已经能粘贴」）。                                                  |
  | `types.ts`      | 多一个 `cost?: number`（画布成本徽章用，上游无此徽章）。                                                                                                                                         |
  | `canvasDrop.ts` | MIME 名带插件前缀（只在页内传递，不影响行为）；`extractImageFiles` 已按上游补回。                                                                                                                |
- **插件独有（1）**：`canvasPrefs.ts`。

> **「A 逐字节相同」这个名字本身就是错的**：同一行约定又写着「只允许改注释/引号/分号」，
> 两者不可能同时成立（插件无分号单引号、上游有分号双引号，一次格式化就会全红）。
> 真判据是**规范化后相同**，已按此改名。
>
> 也因此，**不要**在 CI 里加「与上游 SHA256 相等」的断言：CI 看不到兄弟仓库，
> 而且上游在活跃开发，它一动插件就红。要做漂移检查就在本机手动跑，比的是
> 仓库里提交的一份锁（记录「上次对齐时」的哈希），而不是 live 的上游目录。

## 不变量

违反任一条都会导致「页面上什么都不出现」。

- 模块加载器 id 必须等于 `package.json` 的 `name`。
- `cordis.patch.yml` 的 `name` 必须等于同一个包名。
- `dsh.client.inject` **不要**写 `@deepseek-ai/dsh-client-runtime`：那个包在 DSH 0.1.1-rc.2 之后就没了
  （0.2.2 线里由 `dsh-client-modules` + `dsh-client-connection` 取代）。`inject` 只是加载顺序提示，
  指向一个不在启动图里的 id 会被静默跳过 —— 不报错，但也永远不会生效，只留下一句误导后来人的声明。
  本插件不 import 任何宿主 Client 包（组件走模块表 `require`，见 `src/client/ui.ts`），所以这一项直接不写。
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
| POST | `/asset/delete`                                                | 删登记与文件（**画布不调它**，见「删节点不删文件」）                |
| GET  | `/file?id=`                                                    | 按登记 id 出图，路径限定在 `assets/` 与 `output/`                   |
| POST | `/generate`                                                    | 建任务，返回 `taskId`；两道预算闸门见下                             |
| GET  | `/task?id=`                                                    | 任务快照                                                            |
| POST | `/task/cancel`                                                 | 排队中就地取消；运行中等当前这张结束                                |
| POST | `/workflow/save` / GET `/workflow/list` / GET `/workflow/load` | 命名工作流                                                          |
| POST | `/recovery/save` / GET `/recovery/latest`                      | 自动恢复快照，只留最近 5 份                                         |
| GET  | `/history` / `/history/stats`                                  | 读账本分页 / 成本看板（附本机预算）                                 |
| GET  | `/budget` / POST `/budget`                                     | 本机上限设置（`<输出目录>/.budget.json`，0 = 不限）                 |
| POST | `/reveal`                                                      | 在资源管理器打开路径                                                |
| POST | `/pick-folder`                                                 | 弹宿主的系统文件夹对话框，拿绝对路径                                |

响应约定：成功返回对象本体，失败返回 `{ error: string }` 且带状态码。

### 两道预算闸门

`/generate` 上并排两道，**语义不同，不能合并**（详见 [决策](../.agents/notes/2026-11-08-budget-two-layers.md)）：

| 闸门           | 存哪                             | 超限后                                                                 | 怎么区分            |
| -------------- | -------------------------------- | ---------------------------------------------------------------------- | ------------------- |
| 本画布累计上限 | 插件 `settings.json` 的 `budget` | 409，**硬拦**，不放过                                                  | 响应无 `overBudget` |
| 本机日 / 单次  | `<输出目录>/.budget.json`        | 409，带 `overBudget.reason`，前端确认后带 `allowOverBudget` 重发即放行 | 响应有 `overBudget` |

前端只看状态码会分不清这两种，必须读响应体。

## 数据流

1. 画布改动 → 2.5 秒防抖写一份恢复快照。
2. 点「运行」→ 从节点的入边解析参考图（图片组递归展开，`@名` 过滤）→ 提交任务。
3. host 取 `task.refs` 与配置 → 调上游（有参考图走 `edits`，否则 `generations`）。
4. 结果二进制写进 `assets/` 并登记，再按「卡片上的输出文件夹 → 配置里的默认输出文件夹」落一份到磁盘（**留空 = 用默认**，与原版同一条规则；目录不存在就先建）。
5. 前端轮询到 `done` → 建图片节点摆在提示词卡正下方 → 连一条产出边。

## 配置解析顺序

与 Imagora 保持一致，改这里要同步改两边。

1. 来源：插件设置 `profile` → `.env` 的 `ACTIVE_PROFILE` → `config.json` 的 `default_profile`
2. 地址：`BASE_URL_<PROFILE>` → profile 的 `base_url`
3. 密钥：`API_KEY_<PROFILE>` → `API_KEY` → `AIWANWU_API_KEY`
4. 模型：插件设置 `model` → `MODEL_<PROFILE>` → profile 的 `default_model`
5. 尺寸与价目：模型自带的 `size_options` → profile 级

模型 ID 里的全角连字符会折叠成半角再匹配。

### 请求体不硬编码

发出去的请求体 = **产品基线**（`model`/`prompt`/`size`/`quality`/`n`，代码给）+ **渠道字段**（`transport.request`，profile 级）+ **模型字段**（`models[].params`）。

理由一句话：**上游差异分两堆** —— 换模型仍成立的是渠道属性（如 `response_format`），
换服务器仍成立的是模型能力（如 `background: transparent`）。混在一层，换个模型或换个网关就失效。

规则真源在 Imagora 的 `core/payload.py`，插件 [src/host/payload.js](../src/host/payload.js) 逐条同语义，
两边靠同名断言防漂移（`scripts/smoke-host.mjs` 的 `payload:` 段）。
坏块**整体丢弃并降级**（记进 `issues`），不半截生效。写法见 [provider-config.md](provider-config.md)。

**不判断「谁认什么」**：同一字段在不同渠道上可能一个认一个不认，还会随时间变。
哪家渠道要什么由写配置的人实测后填，代码只回答「最终发了什么」。这条同样管界面 ——
控件的去留读同一个判据（见下节）。

## 状态目录

存储有两套落点，**由「有没有设置 imagora 目录」决定**（`src/host/store.js`）：

```
未设置 imagora 目录（插件独用）—— ~/.dsh/imagora/
  assets/      画布图片（上传、粘贴、生成结果）
  output/      生成结果默认落盘
  workflows/   命名工作流
  recovery/    自动恢复快照
  registry.json / settings.json

设置了 imagora 目录（与原版共用一份）—— <imagoraRoot>/
  output/.assets/registry.json      原版的资产注册表（v2，relPath 相对 output/）
  output/.assets/canv_<sha1>.png
  output/workflows/<名字>.json      原版的工作流
  output/workflows/.recovery/       原版的恢复快照
```

共用那条路是**指针，不是副本**：填上目录之后读的就是原版那份注册表与工作流目录，插件新出的图也注册进同一张表、落在同一个 `.assets`，两边都不需要同步脚本。`settings.json` 永远留在 `~/.dsh/imagora`（插件自己的偏好不写进别人的仓库）。

三条必须守住的兼容规则：

- **注册表两种格式都读**：v2（原版，`{schemaVersion, images:{id:entry}}`，绝对路径由 `relPath` 现算）与 v1（插件旧格式，条目带 `absPath`）。**写哪种由当前目录决定** —— 共用模式必须写 v2，否则原版读不到。
- **共用模式下资产按内容 sha1 去重**，文件名 `canv_<sha1[:12]>`，与原版同一个 id 算法：插件新出的图与原版已有的同一张图不会存两遍。
- **工作流落盘剥掉派生的 `url` / `absPath` / `missing`**（原版 `_strip_derived_node_paths` 的做法）。派生路径写进文件后目录一搬家就失效；加载时按 `registryId` 从注册表重建 —— 原版工作流只存 `registryId`，这条回退是读它的唯一通路。

`DSH_IMAGORA_HOME` 可整体改道插件自己那套目录，测试用它指到临时目录（不影响共用模式的用例：那些自己造 `<imagoraRoot>/output`）。

## 样式

设计层照搬 [Imagora](https://github.com/Cogniform/imagora) 的 `frontend/src/index.css`（`panel-card` / `field-control` / `btn-primary` / `btn-ghost` / `btn-draggable` / `chip` 与尺寸阶梯），只换一处：**颜色从宿主 token 取**。

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

聚焦态只有**一圈 4px / 13% 的品牌色光环 + 品牌色描边**，没有 outline。原版那两条规则（`@layer` 里的 `ring-2 ring-brand/20` 与后面未分层的 `.field-control:focus`）叠出来的最终值就是 4px / 13%；而它的 `:focus-visible` 名单里只有 `button` / `a` / `[role=button]` / `[role=option]` / `input[type=range]`，**输入类控件不在内**。两边都补 outline 会变成「光环 + 实线框」双重影。

节点卡比普通卡片重一档阴影（`--im-shadow-node`）：原版 `.node-pop` 是「12/26 大投影 + 顶部 1px 内高光」，节点要浮在点阵画布之上。内高光从表面色派生，不写死白色——暗色主题下写死白色会发光。

图片组节点是**两层纸**：外层是节点卡片本身（白底 + 边框 + 18 圆角），内层才是 `brand 5%` 底 / `brand 15%` 描边的卡面，叠卡夹在中间错位露出。只留内层会变成一块淡蓝方块，与图片卡、提示词卡不是一个族。选中态的 outline 打在外层。

### 下拉框

下拉是自绘 listbox（`src/client/select.tsx`），不是原生 `<select>`：原生展开后的列表由操作系统绘制，样式不受控。

三条照搬上游的硬约束：

- 列表 `createPortal` 到 `body` + `fixed` 定位。祖先里到处是 `overflow:hidden` 的滚动容器（弹窗、节点卡），就地绝对定位会把底部几项裁掉。
- 搜索框放在列表**内部顶部**，不替换触发器——触发器要保持「显示当前值」的职责。是否出搜索框按选项数自动决定（阈值 4）。
- 分组只影响渲染，不参与键盘导航：`activeIndex` 始终是扁平可见列表的下标，上下键跨组连续。

浮层打开时弹窗的 Esc 要让位（`lib/popupLayer.ts` 的 `hasOpenPopup()`）：先收下拉，再关弹窗。

顶栏那两个下拉（来源 / 模型）**固定宽度**（200 / 230），不按内容自适应：否则换一个长短不同的来源名，后面整排按钮会跟着左右横跳。长名字在触发器里省略号截断，完整值走 `title` 与展开列表。

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

层叠：`.im-canvas` 自带 `isolation: isolate`；节点 `:hover` 抬到 `z-index: 1001`（否则右侧操作栏被相邻节点盖住）；连线层 `1200`；右键选框 `1002`；浮条与日志 `40`；下拉与右键菜单 `70`（portal 到 body，跳出画布的层叠上下文）。

## 拖拽与弹窗

这两块各有一条「不照搬就一定错」的事实，与 `docs/ARCHITECTURE.md` 其余部分同样是硬约束：

- **`dragover` 阶段读不到 `dataTransfer.getData`**，浏览器只在 `drop` 时才允许读自定义类型。所以落画布的意图必须同时接受 `dragstart` 时登记的 ref 作 fallback（见 `lib/canvasDrop.ts` 的 `resolveDropIntent`）。只靠 `getData` 判意图会永远返回 null，于是不 `preventDefault`，浏览器不认这个 drop——表现是「能拖、松手没反应」。
- **弹窗要自带基座**（`canvas/modal-shell.tsx`）。宿主 `ui.Modal` 的面板宽度按它自己的内容定，弹窗里再写死 `minWidth` 必然溢出，被裁掉的是右边那一块。基座的 `.im-modal-body` 必须 `flex: 1 1 auto; min-height: 0; overflow-y: auto`——只写 `overflow` 不给高度约束的话 `scrollHeight` 永远等于 `clientHeight`，底部几行会被静默裁掉。

`.im-root` 需要 `flex: 1 1 auto; width: 100%`：宿主插槽容器是 flex，没有 `flex` 的伸缩项会按内容收缩，画布右侧会留出一条空白，看着也像「被裁掉」。

### 右键：一套手势，两个结果

右键在画布上同时承担「框选」与「节点菜单」，靠**松开时的移动距离**区分（< 2px 算单击）：

| 落点             | 动作                                   |
| ---------------- | -------------------------------------- |
| 节点上，几乎没动 | 弹该节点的菜单（菜单项按节点类型裁剪） |
| 空白处，几乎没动 | 只关掉已有菜单，不动选中               |
| 任意位置，拖动过 | 框选：按「节点完全包含于选框」落定选中 |

**不能靠 `contextmenu` 事件分派**：Windows 上它在右键**松开后**才触发，那时已经分辨不出是拖还是点。因此手势在 `canvas/use-canvas-context-menu.ts` 里用 `mousedown`/`mousemove`/`mouseup` 自己接管，`selectionKeyCode={null}`（原生 Shift+框选会和它抢同一个手势）。

两处与上游**必须不同**：

- **屏蔽原生菜单的监听挂在 `.im-root` 上，不是 `window`。** 上游是整页应用，`window` 捕获层全吞没问题；插件活在宿主界面里，照抄会把宿主的会话区、链接、按钮的原生右键一起吞掉。
- **弹窗打开时不接管右键**：对话框里的输入框要能正常用原生复制/粘贴菜单。

菜单的内容与位置算术在 `lib/contextMenu.ts`（纯函数，与上游逐字节相同）：按类型排项、`clampMenuPosition` 两侧都夹、`menuHeight` 由条目推高度。渲染在 `canvas/node-context-menu.tsx`，portal 到 body 用 `position: fixed`——节点卡是 `overflow: hidden` 容器，就地 absolute 会被裁掉一半；挂载即 `pushPopup()`，否则一次 Esc 会连外层弹窗一起关掉。

### 弹窗基座：原版写死值 → 我们的 token

原版只有亮色外观（它自己的 `index.css` 开头就写着「目前产品只有亮色外观」），所以它那一套弹窗值是**按白底调的**。插件必须明暗两套，逐条映射如下——改弹窗前先看这张表，别直接抄原版的数字：

| 原版（`frontend/src/index.css`）         | 语义               | 我们用什么                                            | 暗色怎么处理                                                                    |
| ---------------------------------------- | ------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------- |
| `rgba(255,255,255,.68)` 描边             | **往白提亮**的边   | `--im-modal-edge` = 白 68%                            | 覆盖成白 14%。白 68% 在暗底上是一道发光边框                                     |
| `inset 0 1px 0 rgba(255,255,255,.8)`     | 顶部 1px 内高光    | `--im-modal-glow`，并进 `--im-shadow-modal`           | 覆盖成白 10%，与节点/画布内高光那档（8%）同源                                   |
| `--surface-panel` 台面                   | 比卡片高一档       | `--im-surface-panel`（`bg-layer-2`）                  | 自动翻转（暗 `#2c2c2e` > 卡片 `#232324`）                                       |
| `--scrim-bg` `rgba(20,26,31,.62)`        | 遮罩               | `--im-scrim` = 同值，**不跟主题翻转**                 | 两种主题都压暗，不翻转（翻转会变白纱）                                          |
| `--scrim-bg-nested` 44%                  | 嵌套弹窗遮罩       | `--im-scrim-nested`                                   | 同上                                                                            |
| `--scrim-blur` `blur(10px) saturate(.9)` | 遮罩模糊           | 直接写这两个值                                        | 与主题无关                                                                      |
| `rgba(23,32,43,.6)` 副标题               | 主文字的 60%       | `color-mix(in srgb, var(--im-ink) 60%, transparent)`  | **自动成立**：ink 暗色是近白，派生即「白 60%」                                  |
| `#17202b` 标题                           | 主文字             | `--im-ink`                                            | 自动翻转                                                                        |
| `rgba(23,32,43,.38)` 空态                | 三级文字           | `--im-ink-3`（**不**照 .38 派生）                     | .38 在暗色只有 2.6:1，低于可读线；ink-3 是宿主调过的三级文字，两头都在 4:1 上下 |
| `#3f4953` 列表项                         | 正文（略浅于标题） | `color-mix(in srgb, var(--im-ink) 82%, transparent)`  | 自动翻转                                                                        |
| `rgba(31,41,55,.12)` 分隔线              | 分隔               | `--im-line`                                           | 自动翻转                                                                        |
| `0 24px 70px rgba(25,25,22,.22)`         | 投影               | `--dsw-elevation-prominent`                           | 写死 rgba 在暗色等于没有阴影                                                    |
| `color-mix(brand 7%)` hover 底           | 品牌淡底           | `color-mix(in srgb, var(--im-brand) 7%, transparent)` | 自动翻转                                                                        |

三条判据（改弹窗样式时自检）：

1. **只有「往白提亮」和「遮罩」这两类**需要 `body[data-ds-dark-theme]` 单独覆盖，其余一律靠宿主 token 自动翻转。能自动翻转就别写第二个主题块（写多了两套会漂移）。
2. **`padding-inline: 6px` 不是留白，是给焦点环留的位置**：滚动容器只裁到 padding box，而 `button:focus-visible` 是 `outline 2px + offset 3px = 5px`。内边距为 0 时左侧的环被整条切掉、右边正常——看着像「焦点环只画了一半」。两侧同值才不会左右不对称。
3. **`--wide` 档（历史弹窗）是定高不是最大高**（`height: min(86dvh,880px)`、`max-height: none`、`padding: 0`）。列表要占满剩余空间自己滚，头与看板钉在上下；写成 `max-height` 时面板会被内容撑到内容高度，列表就没得滚、底部按钮也乱跳。`padding: 0` 是因为这一档的内容按「通栏分段」排，面板再留内边距会让分段背景离边缘悬空。

### 生成历史读的是账本，不是资产注册表

这两张表**不是一回事**，历史列表只能读前者：

|                               | `logs/generation.jsonl`（账本）       | `output/.assets/registry.json`（注册表） |
| ----------------------------- | ------------------------------------- | ---------------------------------------- |
| 一条 =                        | 一次生成**尝试**（含失败）            | 一个**存在的图片文件**                   |
| 有提示词 / 成本 / 耗时 / 状态 | 有                                    | 没有                                     |
| 有失败记录                    | 有（失败不出图，但账本有行）          | 没有                                     |
| 文件没了记录还在              | 有（旧行 `output` 指向已挪走的路径）  | 没有                                     |
| 插件自己出的图                | 在（`src/host/ledger.js` 追加，见下） | 在                                       |

`GET /imagora/history` 的语义逐条照原版 `core/history.py`，别"简化"：

- **坏行跳过**：账本 append-only，写到一半断电会留半行，一条坏行不能毁掉整个历史。
- **同参数的失败只留最新一条**（判别键 `mode/prompt/size/quality/refs/inputAssetIds`，
  时间不算参数）；**成功行一条都不合并** —— 同卡片连点两次会真出两张图，
  折叠会导致「两张图都在、历史里只有一张」。
- **搜索要先折叠空白**：账本里的 prompt 存 Windows CRLF，浏览器把换行归一之后
  整串子串匹配会失败。
- **`offset` 是聚合后的偏移**，筛选发生在聚合**之前**，两者才对得上。
- **图片存在性按注册表判**：有 `outputAssetIds` 的行走 `registry`（`.assets` 里是永久副本，
  原文件挪走也还看得见）；没有它的旧行才回退 `output` 路径。
  反过来按「节点上有没有路径」判会把好图整批报成「文件已移动」。
- **相对 `output` 路径的基准是个已知近似**：原版用 `WORK_ROOT = Path.cwd()`，插件不知道
  原版进程当时的 cwd，只能用 imagora 目录近似。影响面被上一条压得很小。

**插件自己的产出也写进同一份账本**（`src/host/ledger.js`），格式逐字段照
`core/logging.py` 的 `log_generation`：`time / mode / refs / prompt / size / quality /
status / cost / seconds / output`（+ 有资产副本时的 `outputAssetIds`，+ 有参考图时的
`inputAssetIds`，顺序与 Python 侧一致：输入在前、输出在后）。
于是共用模式下，历史里既能看到原版出的图，也能看到插件出的图 —— 这正是「双源并存」
那条待办要解决的事。

四条硬约束（改之前先读）：

1. **字段名与取值口径必须一模一样**：`mode` 由 `refs > 0` 推导（img2img / txt2img），
   `cost` 两位小数、`seconds` 一位，`time` 是本地时区 `YYYY-MM-DD HH:mm:ss`。
   任一侧写偏，另一侧的成本看板就会读出 NaN 或空行。
2. **`output` 要相对化成相对 imagora 目录、正斜杠**（原版 `_display_path`）：
   绝对路径换台机器就失效，而账本是要跨机器读的历史。落在目录外的（用户另存到别处）
   保留绝对路径 —— 原版也是这个行为。
3. **写入闸门**：显式设了 `imagoraRoot` 就写；只有自动探测到的 `root` 时，
   必须该目录里真有 `config.json` 才写。否则就是往用户没确认过的路径里 append 日志。
4. **参考图必须连带 `inputAssetIds` 一起写**，光记 `refs` 计数不够。
   历史行的参考图缩略图是拿这个字段去注册表解析的（`presentRecord` 的 `inputRefs`），
   少了它，一条 img2img 记录在界面上永远显示「参考图缺失」——计数还在，图对不上。

   id 从哪来：`/generate` 收的 `refIds` 本来就是登记 id，解析成绝对路径发上游的同时
   把 id 一起交给任务池（`tasks.js` 的 `refAssetIds`），跑完写账本时用。
   **顺序是有意为之**：任务对象而不是收尾时再查，因为排队期间用户可能已经把那张图
   从画布上摘掉，而"这次到底用了哪几张"只有提交那一刻知道。

   同一个接口还带一条**缺图守卫**：`refIds` 解析不出文件时直接 400，不静默退化成
   文生图 —— 那会花一次钱、出一张完全不相干的图，账本却记着 img2img（原版同一条守卫）。

并发：同进程内用一条串行队列（`appendGeneration` 的 `tail`），跨进程（原版 Python
同时也在写）靠**整行一次 write** 的 `O_APPEND` 原子性兜住 —— 一次系统调用写整行，
不拆包，就不会和 Python 那边交错成半行。写失败不影响生成主流程（原版同样是
try/except 静默），所以 `appendGeneration` 只回 `boolean`，不抛错。

### 删节点不删文件

**从画布上删掉一个节点，只是删掉一个视图。** 图片文件与注册表条目必须留着。

这不是洁癖，是账本与注册表的关系逼出来的：历史一条记录只存 `outputAssetIds`（一个 id），
图片本体在 `.assets` 里。登记一删，那条历史就永远只剩「文件已移动」，连「导入画布」
都点不动 —— 而账本是 append-only 的，那行记录还在，只是再也解析不出图。

实测代价：插件早期版本这样永久丢过两张图（`canv_5d47ade2f6cf`、`canv_e2c71b68aa06`），
`unlink` 不进回收站，救不回来。当时还有一个更隐蔽的后果 —— 同一个「删除」动作有两条路：
操作栏 / 右键「删除」走 `deleteNode`（删文件），`Delete` 键 / 「删除所选」走 `removeNodes`
（不删文件），删一张和删一批的后果不同。

规范（三条一起成立才算对）：

1. 画布上**任何**删除入口都只改 `nodes` / `edges`，不发 `/asset/delete`；
2. 要清盘上的图走「生成历史 → 打开目录」手动删 —— 那是显式操作，不是画布副作用；
3. 删完给一句提示（`flash.deleted.kept`）：图还在磁盘上、历史里能找回。少了这句，
   用户只会以为记录丢了。

原版同一条契约：「删节点仅断连线不删文件；删文件是图片节点显式操作」
（`handleDeleteNode` 里打的是「已删除节点（文件保留）」，`delete_asset` 在前端没有调用点）。
`POST /asset/delete` 这个接口保留着，但**画布不该调它** —— `src/client/api.ts` 里刻意
没有对应的封装。

### 弹窗为什么不是「三页签设置」

上游原版的设置弹窗**曾经**是三页签（使用中 / 个人配置 / 我的接口，`9ff25eb` 引入），后来被原版作者自己删掉了（`b4831b4`，2026-10-08），改成「两个下拉 + 生效中只读表」的选择器。留下的决策记录（`config-dialog-is-a-selector-not-an-editor`）理由有两条：

- 「选」（从已知清单挑来源/模型）和「写」（填地址/路径/密钥）是两种交互，混在一屏就都别扭；
- 密钥**永远不回显**，所以密钥输入框是个「只能覆盖、不能查看」的黑盒，比文本编辑器更差。

**所以「照搬原版」的目标是现在的那个单表单选择器，不是把三页签装回来。** 三页签的 `.api-settings-modal` 样式在上游 `index.css` 里还留着，但那是**死代码**（没有组件再用它），不要照它写。

对应到插件：插件没有 `config.json` / `.env` 可编（配置在 `~/.dsh/imagora/settings.json`），所以「写」的那半不得不留在弹窗里——这是**数据模型不同导致的必要偏差**，不是抄漏了。只读事实那一段（生效来源 / 模型 / 密钥是否配置 / 接口地址）已经补上，见 `canvas/settings-dialog.tsx` 的「生效中」规格表。

## 图片卡片只加载缩略图

正文图是 12 MP（3072×4096 这类），浏览器显示一张就要摊开一份 RGBA，约 **48 MB**；
而卡片只显示 128×160。十几张卡同时可见时，光位图就吃掉几百 MB —— 拖动画布发涩、
切面板回来顿一下，主要都是它。

所以卡片一律走 `lib/useThumbnail`（生成与缓存都在 `lib/thumbnails.ts`，与上游同一份）：
`createImageBitmap` 解码到长边 512 → 画到 canvas → `toBlob('image/webp')` → `blob:` URL。

三条不许破的约定：

- **原图地址不缩**：双击预览 / 裁剪 / 放大 / 蒙版拿的都是 `data.url`。那些地方要真实像素，
  拿缩略图凑数等于把「放大看细节」变成「放大看马赛克」。
- **缓存挂在模块上，不挂组件 state**：宿主插槽是 keyed 单条渲染，切走面板时组件会被
  卸载、模块还活着。缓存跟着模块活，切回来不必重新解码；挂 state 就等于每次切面板
  重新摊开一遍，把要解决的问题请回来。
- **失败必须退回原图**：缩略图是优化，任何一步出错（取图失败 / 没有 `createImageBitmap` /
  `toBlob` 返回 null）都返回原图地址，绝不让图变成空白。

为什么在浏览器里缩、而不是让 host 出缩略图：host 要缩图就得引入图像库，而插件有一条
「运行期零依赖」的既有决策（[决策](../.agents/notes/2026-11-06-self-owned-build-deps.md)），
为缩图破例不划算；且这是显示层问题，不该压给存储层。

## 恢复快照要过的筛子

自动保存（防抖 2.5s、留最近 5 份）落盘前必须走 `lib/recovery.ts:buildRecoverySnapshot`，
**不许直接把内存里的节点发出去**。它剥三样东西：

| 剥什么                                                                                          | 为什么                                                                                                                                              |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 动画类（`node-enter` 等）                                                                       | 运行时视觉标记，存下来会让加载后集体重播入场动画                                                                                                    |
| 运行期字段（`startedAtMs` / `resultCount` / `message` / `cancelRequested`，`status` 归 `idle`） | 恢复出来的卡片该从就绪起步，随后由认领改成真实状态                                                                                                  |
| 图片节点的 `maskDataUrl`                                                                        | **原图尺寸的 PNG data URL，MB 级**。快照每 2.5s 重写、留 5 份，一旦用过蒙版就会把磁盘写穿。代价是刷新后涂抹痕迹不恢复（图、位置、引用关系不受影响） |

`taskId` 则**刻意保留**：它是「任务还在宿主里活着」的唯一线索，剥掉就没法在重挂载后认领。

> 这条筛子原先在插件里根本没被调用过——`lib/recovery.ts` 存在，但保存路径直接发原始节点，
> 于是蒙版、运行期字段一起写进了磁盘。2026-11-16 接上（`api.ts:saveRecovery`），
> 与上游 `useCanvasRecovery` 同构。

## 存档与本层的边界

**存档只存「有什么」，不存「长什么样」。** 加载时 `workflowToCanvas` 会调用
`lib/workflow.ts` 的 `sanitizeEdges`，把连线上的 `style` / `className` / `animated` /
`markerEnd` / `markerStart` 全部丢掉。

这条不是洁癖，是被一次真事故定下来的：原版 Imagora 从 `edgeStyle` 那次提交起，保存
工作流时把连线外观**内联进 JSON**（`"stroke": "var(--edge-stroke-idle)"`）。插件把设计层
收口到 `--im-*` 之后没有这组变量名，而 `var()` 引用不存在的变量**又没有兜底值**时，
浏览器判该声明「计算值无效」→ `stroke` 回到 initial 的 `none` → **连线整条消失**，
控制台一个字都不报。用户看到的症状是「新存的工作流没有线，旧的工作流却有」——
差别只在于 10 月之后那几份存档里带了这个内联值。

丢掉而不是翻译，理由是职责划分：

- 连线四态由本层 CSS 统一驱动，存档里那份是**保存那一刻的快照**（可能恰好停在
  hovered 上），照搬等于把「保存时鼠标停在哪儿」变成「这条线的永久颜色」；
- `animated` 必须跟着 LOD 走（缩远时停流动动画），存档里的 `true` 会把它钉死。

配套的第二道闸：`styles.ts` 里给 `--edge-stroke-idle/hovered/selected` 留了指向
`--im-edge-*` 的别名。目的是让「引用了未定义变量」这种数据问题**不至于演变成画面空白**，
代价只有三行。

> 通则在 `AGENTS.md` 的活跃坑里：**CSS 里任何 `var()` 都必须有兜底值或保证存在**。
> 它失效时是静默的，与「少一个花括号」是同一类事故。

## 账本从尾部读，任务池有终态 TTL

两处都是「随使用时间线性增长」的东西。

**账本**（`logs/generation.jsonl`，与上游 Imagora 共用同一份）早先是
`readFile(utf8)` 整体 `split` + `reverse`：文件多大就吃多大内存，每次打开历史都把历史
全解析一遍。现在 `history.js:ledgerLinesReversed` 从文件尾部按 64KB 块往回读，块边界切开
的行留作 carry 拼回去（切的是 `Buffer` 而不是字符串，多字节字符跨块不会被切坏）；
`readLedger(root, { query, status, rawLimit })` 把**过滤与上限下沉到读取层**，凑够
`RAW_LIMIT`（500）条匹配就停，不再碰文件更早的部分。统计（`/history/stats`）要全量原始行，
走同一个迭代器但不给 `rawLimit` —— 内存只与块大小有关。

`source: 'none'` 的判据是**文件在不在**（`ledgerExists`），不是「有没有记录」：
搜索无结果时文件明明在，报「没有账本」是撒谎。

**任务池**（`tasks.js`）补齐上游的保留策略：`MAX_TASKS = 500` + `TERMINAL_TTL_MS = 600s`。
`trim()` 先清超 TTL 的终态、仍超上限再清最旧的终态；`snapshot()` 里做一次惰性清理
（轮询是唯一高频入口，因此不需要后台定时器）。删任务时显式 `task.mask = null` ——
那个 MB 级 Buffer 在进程里只有任务对象引用它。

## 缩远抽象（LOD）

缩放的**所有数字**（行程、fitView、LOD 阈值）集中在 `canvas/zoom.ts`：`MIN_ZOOM = 0.05` / `MAX_ZOOM = 2` / `LOD_IN_ZOOM = 0.15` / `LOD_OUT_ZOOM = 0.2`，与上游 `frontend/src/zoom.ts` 同构。百分比读数由倍率算出来，不写第二份字面量。
两个阈值之间是**保持现状的死区**：用同一个阈值进出，缩放停在临界点上会反复翻转，
每次翻转都重建全部节点渲染，画面持续闪烁。

`lod` 通过 `LodContext` 传进节点，**不塞进 `NODE_TYPES`**。节点类型一旦变化，
React Flow 会把所有节点重挂载 —— 入场动画重播、输入框失焦、正在敲的提示词丢掉。
原版用工厂函数每帧重建 nodeTypes，是因为他们的节点是纯展示的；我们节点里有 textarea
与自绘下拉，重挂载的代价肉眼可见。

同一条纪律也适用于 `defaultEdgeOptions`：它必须 `useMemo`（只随 `lod` 变）。
内联对象每次新建都会让 React Flow 的 StoreUpdater 写一次 store，`edge = {...default, ...edge}`
全量新建，每条边的 memo 全部失效。

## 画布节点不许提升成合成层

**这条是硬的：节点卡上不许写 `will-change`，入场动画必须按类门控。**

维护者报过「缩小再放大后文字一直是糊的，点一下才清晰」「加载很慢」。在真实宿主页面里
逐张量了 22 个节点卡，现场是：

| 指标                    | 改前                     | 改后       |
| ----------------------- | ------------------------ | ---------- |
| `willChange: transform` | 22 / 22                  | **0 / 22** |
| `animationName` 非 none | 22 / 22（`im-enter-up`） | **0 / 22** |

成因有两层，都会把卡变成独立合成层：

1. `will-change: transform` 直接把元素提升成合成层。合成层按**提升那一刻**的倍率
   栅格化，而画布缩放改的是 `.react-flow__viewport` 的 `scale` —— 合成层不会跟着重栅格，
   于是放大后看到的是被拉大的旧位图，文字发虚，要等某次重绘（点击/悬停失效）才刷新。
2. 入场动画被写成了 `.react-flow__node .im-panel-card { animation: … both }`——
   **无条件作用在每一张卡上**，等于每张卡永久带着一个动画，永远走动画图层这条路。
   叠加 `onlyRenderVisibleElements`（平移缩放时节点反复挂载、动画反复从头播），
   「加载很慢」的体感就来自这里。

上游 Imagora 全文件 **0 处 `will-change`**，入场动画也只写在 `.enter-up` / `.node-enter`
这两类**按类生效**的选择器上，并由 `CanvasPage` 在动画结束后摘掉类 —— 所以那边不出
这个现象。我们照它的结构：动画挂在 `.react-flow__node.node-enter .im-panel-card` 上，
**默认不给节点加这个类**（即默认不动画）；要恢复入场动效就在节点创建时加 `node-enter`
并在 `animationend` 摘掉，`lib/workflow.ts` 的 `withEnterAnim` / `stripAnimClasses`
是现成工具。

`smoke-client` 里有三条断言锁住它：卡上不许有 `will-change`、入场动画必须门控在
`node-enter` 上、没有任何选择器给 `.im-panel-card` 无条件挂 `animation`。

> 教训的通用形式：**任何按元素持续存在的 `animation` / `will-change` 都会让该元素脱离
> 正常重栅格路径**。要动效就在需要动画的那一段挂类，结束后摘掉。

## 防错清单

- 改包名：`package.json` / `cordis.patch.yml` / `build.mjs` 的 loader id / host 导出名，四处一起改。
- 改插槽名或 key：`src/client/index.tsx` 常量与宿主插槽文档一起核对。
- 改路由：同步 `src/client/api.ts`、host 冒烟用例、本文件的契约表。
- 动 `src/client/lib/`：按上游语义判断，不要按本项目风格改；格式检查已排除该目录。
- 装依赖后忘了重建：CI 的 `dist` 同步检查会红，本地钩子也跑构建相关的冒烟。
- 改存储路径：`store.js` 的路径全是 **getter**（`assetsDir` / `workflowsDir` / `registryPath` …），因为它们要跟着 `setSharedRoot` 变。别把它们改回构造函数里赋值的字段——那样切目录不会生效，表现是「设置里填了 imagora 目录，工作流和生成历史还是空的」。
- 量聚焦态要用 CDP 的 `Emulation.setFocusEmulationEnabled`：headless Chrome 默认没有窗口焦点，`:focus` 永远不匹配，直接量会得到「border 还是灰的、没有光环」，那是假象。
- 丢进 CSS 的每个 `var()` 都要有兜底或者保证存在。引用不存在的变量会让**整条声明**作废，浏览器不报错 —— 连线消失那次就是这么来的（见「存档与本层的边界」）。
- 从上游存档读进来的表现层字段（`style` / `className` / `animated` / `marker*`）必须在加载时清掉，别指望「照搬上游的存法」：上游的 CSS 变量名与我们不同，存进去的是状态快照而不是样式定义。
- 往 `CANVAS_CSS` 的模板字面量里写注释时**不能用反引号**：它就是模板字面量的结束符，一个反引号会让之后整个文件语法崩掉（TS1005/TS1351/TS1443 一串），而错误位置报在别处。

## 文案与语言

界面文字**全部**在 [`src/client/locales.ts`](../src/client/locales.ts) 里，分 `zh` / `en` 两份。语言跟随宿主的设置（设置 → 通用 → 语言），本插件不提供自己的语言开关。

三层结构：

| 层   | 在哪                    | 做什么                                                                                                  |
| ---- | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| 词典 | `src/client/locales.ts` | 唯一的文案住所。`zh` 是键集真源，`en` 声明成 `Record<LocaleKey, string>`                                |
| 接线 | `src/client/i18n.tsx`   | `LocaleProvider` + `useT()`。宿主注入的 `t` 只到 `CanvasApp` 一层，靠 Context 送到 40 多个子组件与 hook |
| 入口 | `src/client/index.tsx`  | `ctx.locale.register(NS, { zh, en })`；slot 注册项声明 `locale: NS`，框架据此注入 `t`                   |

**漏译与拼错都是编译错误**：`LocaleKey` 从 `zh` 推出联合类型，`en` 少一个键、`t()` 拼错一个键名都过不了 `tsc`。这是这套结构存在的理由 —— 靠自觉保持双语平衡在 400 多条文案上不成立。

### 两种语言各自写，不做逐字直译

中文短、信息密度高，英文要显式主语与冠词；中文的「（未设置）」在英文里是 `Not set`，不是 `(Not set)`。**同一个键的两句话可以结构完全不同**，只要说的是同一件事。带数量的按钮尤其如此：中文用全角括号「（3）」，英文用半角加空格「 (3)」，所以是**两个键**（单数 / 复数）而不是「文案 + 拼接括号」。

英文按钮标签比中文长得多，会实际影响版面：`Generation history` 压成 `History`、`New prompt card` 压成 `Prompt card`，就是因为整行排不下（维护者 2026-11-17 定）。改英文短标签时**先在验收台里看它是否还放得下**，别只看字符串长度。

### A 档移植件与文案层之间只有一道缝

`src/client/lib/` 里有些模块**产出用户可见的文字**：`contextMenu.ts` 的菜单项 label、`customValue.ts` 的「自定义」分组、`canvasDrop.ts` 的落点胶囊、`cost.ts` 的金额与指标标签。它们是 A 档（规范化后与上游相同），不能为了 i18n 往里塞 `t()` —— 那会把 19 个 A 档文件改成 C 档，而上游不做 i18n。

所以在**消费边界**换文案，这也是上游自己留的缝：

| 移植件           | 缝在哪                                                                     | 怎么换                                                                                                               |
| ---------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `contextMenu.ts` | [`canvas/menu-labels.ts`](../src/client/canvas/menu-labels.ts)             | 按 `action.id` 换 label。上游文件头写着「接线方按 id 分派，**不要按 label 匹配**」                                   |
| `customValue.ts` | `select.tsx` 渲染分组标题处                                                | 按 `group.id === '__custom'` 换                                                                                      |
| `canvasDrop.ts`  | [`canvas/use-canvas-drop.tsx`](../src/client/canvas/use-canvas-drop.tsx)   | 只用它的判定函数，文案自己按意图与张数取                                                                             |
| `cost.ts`        | [`canvas/cost.tsx`](../src/client/canvas/cost.tsx) 与 `history-dialog.tsx` | `formatMoney` 把「元」烘在返回值里 → 金额格式改由显示层给；`formatRate` / `formatSeconds` 语言无关，继续用移植区那份 |

判据是：**纯逻辑留在移植区，文字在消费处取**。往 `lib/` 里加文案，等于把 A 档改成 C 档。

### 宿主侧

`locale/` 目录里的 `en.json` / `zh.json` 是**插件页上的标题与一句话说明**，与界面文案是两条独立的路：宿主直读那两个 JSON，本仓代码一个字节都不读（详见 [locale/](../locale/README.md)）。

host 半端（Node）拿不到 `ctx.locale` —— 那是 client 服务。所以 host 的中文错误文案只能作为**数据**返回，前端原样显示。要让它也跟随语言，得改成「host 回稳定错误码 + 前端词典翻译」，目前**没做**（34 处，记在这里免得下次误以为已经覆盖）。

## 凭证状态只有一个出口

「能不能出图」与「插件内那个输入框填了没」是**两个问题**，共用一个字段就会互相撒谎：
用户用 imagora 的 profile 时密钥在 `.env` 里，插件内是空的 —— 拿后者当状态会报
「未配置」而图照常能出（真实反馈过）。

- `credential = { configured, from }`：**当前生效来源**能不能出图，以及密钥从哪来
  （`plugin` / `imagora` / `''`）。状态行、首次使用弹设置都读它。
- `provider.apiKeyConfigured`：只回答「插件内那个输入框填了没」，供该字段自己的
  placeholder 用（「留空则不修改」还是「粘贴密钥」）。

上游 `core/config.py` 的 `build_profile_view` 早就这么分了（`configured` +
`source: env_where(key)`）；插件这边少的是同样的分工，不是缺字段。
插件有中英双语，所以只给枚举、文案留在词典里，不照搬上游那句人话。

## 相关

- 决策记录 → [.agents/notes/](../.agents/notes/README.md)
- 维护索引 → [../AGENTS.md](../AGENTS.md)
