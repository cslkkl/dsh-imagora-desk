# client/ — 规则层

继承根规则，见 [../../AGENTS.md](../../AGENTS.md)。

## 本目录特有约束

- 只通过插槽注册渲染，不替换应用根节点，不往 `document.body` 追加第二个应用。
- 不 import 宿主的 Client 包（如 `@deepseek-ai/dsh-client-ui-primitives`）；宿主只提供模块表里的 baseline。
- `react` / `react-dom` / `react/jsx-runtime` 必须 external，由宿主模块表提供。
- 样式只用 `--dsw-*` 主题 token 并给兜底值；类名一律 `im-` 前缀。
- 注入到 `document.head` 的资源必须在 `ctx.effect` 里注册并在清理函数里移除。
- 派生数据在渲染时计算，不写回节点状态；写回会与 React Flow 的节点同步互相触发。
- 节点组件只认 `NodeProps`，动作走 `NodeActionContext`，不要把画布状态直接传进组件。
- `lib/` 是移植区：不改风格、不加本项目格式规则、改动按上游语义判断。

## 本目录特有的坑

- 弹窗内容挂在宿主 Modal 的 portal 里，不在 `.im-root` 子树内：`.im-root` 上定义的自定义属性它继承不到。所以 `--im-*` 一律在 `body` 上定义（`styles.ts` 顶部），弹窗与画布共用同一套，两边都不要另写固定色值。
- 宿主 `Button` 的 variant 类走 CSS Modules（`_button_1ulci_2` 这类）。主次层级用组件库自己的 `variant`（默认 / `toolbar`）表达，不覆写它的颜色；确实要压时才知道得用 `!important`。

## 测试

- 改本目录必跑：`pnpm run typecheck`、`pnpm run lint`、`pnpm run build`、`pnpm run test`。
- 动到画布交互时再跑 `pnpm run harness`，用真实浏览器确认渲染与交互（mock 数据，不花钱）。
- 改完源码必须重建 `dist/client.js`，它与源码同一个提交。
