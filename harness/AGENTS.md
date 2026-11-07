# harness/ — 规则层

继承根规则，见 [../AGENTS.md](../AGENTS.md)。

## 本目录特有约束

- 这里的 HTML 只给**浏览器渲染验收**用，不是插件产物：不进 `dist/`，不进 npm 包（`package.json` 的 `files` 不含它）。
- 验收台一律用 mock 数据：`/imagora/*` 全部由 `scripts/harness-server.mjs` 拦下并回夹具，**不碰真实接口、不花钱**。
- `harness/dist/` 是本地现生成的 vendor（React 打成浏览器全局）与占位图，已在 `.gitignore` 里；不要提交。
- 改 `index.html` 后要跑 `pnpm run harness` 用真实浏览器看效果，不能只靠 `pnpm run test`（冒烟只验 bundle 结构，不验渲染）。
- 宿主模块表里的 baseline（`@deepseek-ai/dsh-client-ui-primitives` 等）由验收台自己搭桩；桩的行为必须与宿主一致，否则验收结论不可信。

## 测试

- 起验收台：`pnpm run harness` → http://127.0.0.1:4319/
- 端口被占用时用 `HARNESS_PORT` 覆盖。
- 验收结论写进根 [AGENTS.md](../AGENTS.md) 的「验证快照」，不在这里重复。
