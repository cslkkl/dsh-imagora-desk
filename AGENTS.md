# dsh-imagora-desk — 维护索引

## 全局规则

- 每完成一处修改就单独提交并推送一次，不攒批。
- 提交信息用 `<type>(<scope>): <subject>`；scope 取目录名（`host` / `client` / `deps` / `docs` / `hooks` / `tooling`）。
- 改代码前先查 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) 的不变量与防错清单。
- 构建产物 `dist/client.js` 必须与源码在同一个提交里更新。
- `src/client/lib/` 是移植区，不按本项目风格改写；格式检查已排除。

## 常用命令

```powershell
pnpm install              # 首次、或改了依赖之后
pnpm run build            # 打 dist/client.js（改完源码必须重跑）
pnpm run dev              # 同上的 watch 模式
pnpm run lint             # eslint
pnpm run format           # prettier --write
pnpm run format:check     # prettier --check（CI 用）
pnpm run typecheck        # tsc --noEmit
pnpm run test             # 两套冒烟：host 接口 + bundle/包名/插槽
pnpm run harness          # 渲染验收台 http://127.0.0.1:4319/（mock 数据，不花钱）
uv tool run pre-commit run --all-files   # 手动跑一遍全部本地钩子
```

检查选择：

- 改 `src/host/` → `pnpm run test`（内含 host 冒烟）、`pnpm run lint`
- 改 `src/client/` → `typecheck` + `lint` + `build` + `test`，必要时 `pnpm run harness`
- 改文档 → 链接校验（见下）
- 装插件或改包名 → 重装后刷新页面，确认侧边栏出现「自由画布」

## 验证快照

- 本地钩子（commit 前）：文本卫生、prettier、eslint、tsc、host 冒烟、bundle 冒烟，全绿。
- CI：`.github/workflows/ci.yml`，只读；末段 `git diff --exit-code -- dist/client.js` 守住产物同步。
- CI 状态以 Actions 徽章为准，不在这里抄结论；最近一次 main 的 push 为绿。
- 冒烟数字：host 77 项、client 22 项（含设计层 CSS 括号平衡、旧连线 token 别名、animated 不许自写 dasharray、LOD 样式在位；host 侧含预算两层的 13 项）。
- 验收台示例图是仓库里的 `harness/sample.png`（1600×1200）：内嵌兜底只有 64×64，会让所有尺寸相关验收失去意义。
- 渲染验收台：`scripts/harness-server.mjs` + 真实浏览器，实测建卡→运行→回流、四个对话框、Del 删除、粘贴导入、生成历史、滚轮缩放、左键平移、拖拽吸附与对齐线、锁定画布、成本徽章与预算闸门、裁剪/切分/放大/蒙版四个对话框。
- 真实出图链路验证过两次（火山 Seedream 5.0 pro，1024x1024，单张 0.20 元）：一次走 imagora 配置，一次走插件内配置。

## 待办

- [x] 市场可搜索：自托管索引 + GitHub Pages，实测搜到并安装成功。发 npm 只是可选增强（`dsh plugin add dsh-imagora-desk` 直接装）
- [ ] 未做自动化 UI 测试，验收台靠手工脚本驱动
- [ ] 生成历史「双源并存」：列表读原版账本，插件自己出的图只在资产注册表里，两边不合流（合流要改 `tasks.js` 追加账本 + 跨进程写互斥，故意没做）。见 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- [x] 生成历史成本条的「日预算 / 单次上限」输入框（原版 CostBoard）：落在 `<输出目录>/.budget.json`，与原版共读一份；语义是「超限需确认」，见 [决策](.agents/notes/2026-11-08-budget-two-layers.md)
- [x] 生成历史里提示词的鼠标悬浮：改用原版 `PromptCell`（2 行截断，真被截断才出跟随鼠标的深色浮层）
- [x] 设置弹窗改原版结构：两个下拉 +「生效中」只读表（照 `ConfigEditorModal`，未恢复三页签）
- [x] 其余弹窗收口：比例与涂/擦模式用原版 `chip--sm`、粘贴导入换原版预览卡、帮助弹窗照原版文案

功能对照全表 → [docs/FEATURE-PARITY.md](docs/FEATURE-PARITY.md)

## 活跃坑

只留跨模块、致命的那几条；局部坑写进对应子目录的 `AGENTS.md`（进入即自动注入）。

- 包名改了一处没改全 → 页面静默不出现插件。四处一起改：`package.json`、`cordis.patch.yml`、`build.mjs` 的 loader id、host 导出名。
- 把 React 打进 bundle → 两份 React，hooks 直接报错。`react` / `react-dom` / `react/jsx-runtime` 必须 external。
- 本机 pre-commit 装远端 hook 环境会失败（setuptools 取不到），钩子只用 `language: system`。
- 设计层 CSS 少一个 `}` 会**静默**让它之后的所有规则失效，页面只是变丑、没有任何报错。冒烟里有一条括号平衡断言兜住；改完样式块一定要跑 `pnpm run test`。
- 提示统一用原生 `title`，不要引入宿主气泡组件：两种并存会出现「有的秒出黑框、有的等 1~2 秒」。见 [决策](.agents/notes/2026-11-07-native-title-only.md)。
- 索引别用 jsDelivr：JSON 请求实测 4 次挂 1 次（ECONNRESET），宿主读不到就在界面报「Could not fetch」。用 GitHub Pages（`pages.yml`），同一份文件连测 4 次全通。
- 索引里的 commit 不能写「刚提交的 HEAD」：索引文件本身是提交的一部分，写进去那次提交又产生新 HEAD，永远落后一格。现在指向 v<version> tag 指向的提交，`market:fresh` 兜住存在性。
- 全局事件监听（点外部关闭、快捷键）如果目标区域可能是**画布**，必须用**捕获阶段**：React Flow 在 `mousedown` 上会 `stopPropagation`，冒泡阶段的 `document` 监听收不到。表现为「点画布空白关不掉下拉/浮层」。
- 布局里写 `flex: 1` 的占位元素，选择器**不能带父级作用域**：`.im-toolbar .im-spacer` 管不到页头里的同名 span，表现为「按钮全挤左边、右侧空着」。`width` 与 `padding` 同时写时别忘了 `box-sizing: border-box`，否则宽度会多出两倍内边距。
- **改了 `src/host/` 后「界面上没变化」不等于改漏了**：插件是软链装的，但宿主进程**只在启动时加载 host 模块**，软链只省掉重装、不省掉重载。判据是「这个产物在什么时候被读」——host 代码**启动时读一次**，client 代码按指纹在浏览器里换。所以改完 host 要 `dsh_hot_reload`（entryId 是 `include:imagora`；热重载失败会回滚）或重启宿主，改完 client 要重建 `dist/client.js` 再刷新页面。用户报过「你改了吗？为什么还是没有」——那次就是只改了文件、进程还拿着旧模块。**验证 host 侧的改动要用真实数据走一遍完整 HTTP 路径**（假 ctx 挂起 host 半端，像 `scripts/smoke-host.mjs` 那样），别只看源码。
- **不要把 Markdown 正文塞进 PowerShell 变量再交给 `gh`**：反引号在 pwsh 里是转义符（`` `b `` → 退格、`` `0 `` → NUL），正文会被吃掉或变成乱码，GitHub 收到的是一条残缺评论/PR 描述（踩过两次：一次评论只剩一句、一次 `border-box` 变成 `\order-box` 且中文变 `图��`）。**一律用 `write` 工具写成 UTF-8 文件再 `gh pr create/edit --body-file <路径>`**。另外本机 `gh` 2.96.0 没有 `--attach`，别用它挂图。
- **CSS 里引用不存在的 `var()` 会让整条声明作废，且不报错**：`stroke: var(--x)` 在 `--x` 未定义时计算值是 `none`，元素直接消失，控制台一片安静。用户报过「新存的工作流加载后看不见线、旧的却能看见」—— 根因就是从原版存档里读进来的 `stroke: var(--edge-stroke-idle)`，而插件早把变量名收口成了 `--im-*`。所以：每条 `var()` 要么给兜底值，要么保证变量存在；从上游读进来的表现层字段一律在加载时清掉。见 [ARCHITECTURE](docs/ARCHITECTURE.md#存档与本层的边界)。
- **`CANVAS_CSS` 是模板字面量，注释里不能出现反引号**：一个反引号就等于提前结束字符串，之后整个文件语法崩掉，报错还会指到别处（TS1005 / TS1351 / TS1443 一串）。写 CSS 注释时把代码片段的反引号换成普通引号或全角引号。

## 文档地图

- 设计圣经（不变量、契约、数据流）→ [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- 与 Imagora 的功能对照 → [docs/FEATURE-PARITY.md](docs/FEATURE-PARITY.md)
- 市场收录与安装方式（对外）→ [docs/PUBLISHING.md](docs/PUBLISHING.md)
- 发版操作与回滚（维护者）→ [docs/RELEASE.md](docs/RELEASE.md)
- 决策与依据 → [.agents/notes/](.agents/notes/README.md)
- host 半端手册 → [src/host/README.md](src/host/README.md)
- client 半端手册 → [src/client/README.md](src/client/README.md)
- 脚本与验收台 → [scripts/README.md](scripts/README.md)
- 渲染验收台 → [harness/README.md](harness/README.md)
- 第三方声明 → [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)
- 对外门面 → [README.md](README.md)
