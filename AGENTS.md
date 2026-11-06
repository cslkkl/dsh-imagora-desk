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
- 冒烟数字：host 22 项、client 13 项。
- 渲染验收台：`scripts/harness-server.mjs` + 真实浏览器，实测建卡→运行→回流、三个对话框、Del 删除。
- 真实出图链路验证过一次（火山 Seedream 5.0 pro，单张 0.20 元）。

## 待办

- [ ] 画布增强功能未移植：裁剪、切分、蒙版重绘、放大
- [ ] 成本看板与预算闸门未移植
- [ ] 提示词粘贴批量导入（`lib/promptImportFormat.ts` 已在，界面未接）
- [ ] 未做自动化 UI 测试，验收台靠手工脚本驱动

## 活跃坑

- 包名改了一处没改全 → 页面静默不出现插件。四处一起改：`package.json`、`cordis.patch.yml`、`build.mjs` 的 loader id、host 导出名。
- 把 React 打进 bundle → 两份 React，hooks 直接报错。`react` / `react-dom` / `react/jsx-runtime` 必须 external。
- 派生数据写回会被同步的节点状态 → React 无限更新。引用计数与组聚合在渲染时算，不 setState。
- 本机 pre-commit 装远端 hook 环境会失败（setuptools 取不到），钩子只用 `language: system`。
- `.env` 里 `ACTIVE_PROFILE` 指向的来源没有密钥时，画布顶部会提示；切来源即可，配置不需重填。

## 文档地图

- 设计圣经（不变量、契约、数据流）→ [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- 决策与依据 → [.agents/notes/](.agents/notes/README.md)
- host 半端手册 → [src/host/README.md](src/host/README.md)
- client 半端手册 → [src/client/README.md](src/client/README.md)
- 脚本与验收台 → [scripts/README.md](scripts/README.md)
- 第三方声明 → [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)
- 对外门面 → [README.md](README.md)
