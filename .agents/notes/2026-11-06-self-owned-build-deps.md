# 决策：构建依赖自装，不再借用 Imagora 前端（2026-11-06）

状态：生效

## 问题

插件最初刻意不装 `node_modules`：`build.mjs` 去 Imagora 前端的 `node_modules` 里找 esbuild 与 `@xyflow/react`。

好处是克隆即用。代价是没有锁文件、类型检查依赖别处的 `@types`、CI 无依赖可跑。

## 决策

插件自装 devDependencies 并持有唯一锁文件。

- 构建与检查工具进 `devDependencies`，`pnpm-lock.yaml` 锁定版本。
- `build.mjs` 的依赖搜索顺序仍是「本地优先」，但本地已经具备全部依赖。
- 运行期依然零依赖：`src/host/` 与 `src/client/lib/` 不 import 任何第三方包。

## 替代方案（强制）

- 继续借用 Imagora 前端：CI 里没有那个目录，typecheck 与 build 都跑不了；版本随对方升级漂移。
- 只锁构建工具、运行期另建包：两套清单，维护成本翻倍，收益只是「目录更干净」。
- 把 React 也打进 bundle：宿主已通过模块表提供 React，打进去会出现两份 React，hooks 立刻失效。

## 影响

- 得到：`pnpm install --frozen-lockfile` 在干净机器与 CI 上可复现；类型检查用本项目锁定的 `@types/react`。
- 代价：克隆后要装一次依赖才能构建（用发布产物则不需要）。
- 约束：`react` / `react-dom` / `react/jsx-runtime` 必须保持 external，由宿主的模块表提供。
