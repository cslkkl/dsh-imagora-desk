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
- 冒烟数字：host 45 项、client 16 项（含设计层 CSS 括号平衡一条）。
- 验收台示例图是仓库里的 `harness/sample.png`（1600×1200）：内嵌兜底只有 64×64，会让所有尺寸相关验收失去意义。
- 渲染验收台：`scripts/harness-server.mjs` + 真实浏览器，实测建卡→运行→回流、四个对话框、Del 删除、粘贴导入、生成历史、滚轮缩放、左键平移、拖拽吸附与对齐线、锁定画布、成本徽章与预算闸门、裁剪/切分/放大/蒙版四个对话框。
- 真实出图链路验证过两次（火山 Seedream 5.0 pro，1024x1024，单张 0.20 元）：一次走 imagora 配置，一次走插件内配置。

## 待办

- [x] 市场可搜索：自托管索引 + GitHub Pages，实测搜到并安装成功。发 npm 只是可选增强（`dsh plugin add dsh-imagora-desk` 直接装）
- [ ] 未做自动化 UI 测试，验收台靠手工脚本驱动

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
- 布局里写 `flex: 1` 的占位元素，选择器**不能带父级作用域**：`.im-toolbar .im-spacer` 管不到页头里的同名 span，表现为「按钮全挤左边、右侧空着」。`width` 与 `padding` 同时写时别忘了 `box-sizing: border-box`，否则宽度会多出两倍内边距。

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
