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

层叠：`.im-canvas` 自带 `isolation: isolate`；节点 `:hover` 抬到 `z-index: 1001`（否则右侧操作栏被相邻节点盖住）；连线层 `1200`；浮条与日志 `40`。

## 拖拽与弹窗

这两块各有一条「不照搬就一定错」的事实，与 `docs/ARCHITECTURE.md` 其余部分同样是硬约束：

- **`dragover` 阶段读不到 `dataTransfer.getData`**，浏览器只在 `drop` 时才允许读自定义类型。所以落画布的意图必须同时接受 `dragstart` 时登记的 ref 作 fallback（见 `lib/canvasDrop.ts` 的 `resolveDropIntent`）。只靠 `getData` 判意图会永远返回 null，于是不 `preventDefault`，浏览器不认这个 drop——表现是「能拖、松手没反应」。
- **弹窗要自带基座**（`canvas/modal-shell.tsx`）。宿主 `ui.Modal` 的面板宽度按它自己的内容定，弹窗里再写死 `minWidth` 必然溢出，被裁掉的是右边那一块。基座的 `.im-modal-body` 必须 `flex: 1 1 auto; min-height: 0; overflow-y: auto`——只写 `overflow` 不给高度约束的话 `scrollHeight` 永远等于 `clientHeight`，底部几行会被静默裁掉。

`.im-root` 需要 `flex: 1 1 auto; width: 100%`：宿主插槽容器是 flex，没有 `flex` 的伸缩项会按内容收缩，画布右侧会留出一条空白，看着也像「被裁掉」。

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

|                               | `logs/generation.jsonl`（账本）          | `output/.assets/registry.json`（注册表） |
| ----------------------------- | ---------------------------------------- | ---------------------------------------- |
| 一条 =                        | 一次生成**尝试**（含失败）               | 一个**存在的图片文件**                   |
| 有提示词 / 成本 / 耗时 / 状态 | 有                                       | 没有                                     |
| 有失败记录                    | 有（失败不出图，但账本有行）             | 没有                                     |
| 文件没了记录还在              | 有（旧行 `output` 指向已挪走的路径）     | 没有                                     |
| 插件自己出的图                | **不在**（`src/host/tasks.js` 不写账本） | 在                                       |

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

**插件自己的产出不进账本**，所以共用模式下历史里看到的是「原版出的图」；
插件出的图在资产注册表里（画布上、以及 `GET /imagora/assets`）。要两边合流，
得先让 `tasks.js` 按原版 schema 追加账本 —— 那是跨应用写别人的日志（还要处理
Python 与 Node 同时写的互斥），**当前明确不做**，已在待办里记着。

### 弹窗为什么不是「三页签设置」

上游原版的设置弹窗**曾经**是三页签（使用中 / 个人配置 / 我的接口，`9ff25eb` 引入），后来被原版作者自己删掉了（`b4831b4`，2026-10-08），改成「两个下拉 + 生效中只读表」的选择器。留下的决策记录（`config-dialog-is-a-selector-not-an-editor`）理由有两条：

- 「选」（从已知清单挑来源/模型）和「写」（填地址/路径/密钥）是两种交互，混在一屏就都别扭；
- 密钥**永远不回显**，所以密钥输入框是个「只能覆盖、不能查看」的黑盒，比文本编辑器更差。

**所以「照搬原版」的目标是现在的那个单表单选择器，不是把三页签装回来。** 三页签的 `.api-settings-modal` 样式在上游 `index.css` 里还留着，但那是**死代码**（没有组件再用它），不要照它写。

对应到插件：插件没有 `config.json` / `.env` 可编（配置在 `~/.dsh/imagora/settings.json`），所以「写」的那半不得不留在弹窗里——这是**数据模型不同导致的必要偏差**，不是抄漏了。真正该补的是「使用中」那页的只读事实（生效来源/地址/模型/密钥是否配置）。

> > > > > > > origin/main

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

## 缩远抽象（LOD）

`canvas/lod.ts` 是纯函数状态机，`LOD_IN_ZOOM = 0.1` / `LOD_OUT_ZOOM = 0.2`（照抄原版）。
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

## 相关

- 决策记录 → [.agents/notes/](../.agents/notes/README.md)
- 维护索引 → [../AGENTS.md](../AGENTS.md)
