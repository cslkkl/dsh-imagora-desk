# scripts/ — 脚本手册

## 职责

验证与验收工具。全部是只读或写临时目录的一次性脚本，不参与插件运行。

## 文件

| 脚本                       | 作用                                                                          | 何时跑                       | 副作用                       |
| -------------------------- | ----------------------------------------------------------------------------- | ---------------------------- | ---------------------------- |
| `smoke-host.mjs`           | 用假 Cordis 上下文起 host 半端，真实 HTTP 打 22 项接口                        | `pnpm run test`              | 只写临时目录，用完删除       |
| `smoke-client.mjs`         | 模拟 `__ModuleLoader__` 执行 bundle，断言导出、插槽注册、bundle id 与包名一致 | `pnpm run test`              | 无                           |
| `check-text-hygiene.mjs`   | 行尾统一 LF、去行尾空白、补末尾换行；不加 `--fix` 只报不改                    | 本地钩子、手动               | 加 `--fix` 才写盘            |
| `build-harness-vendor.mjs` | 把 React 打成浏览器全局，供验收台加载真实 bundle                              | `pnpm run harness`           | 写 `harness/dist/`（已忽略） |
| `harness-server.mjs`       | 静态服务 + `/imagora/*` mock，供浏览器渲染验收                                | `pnpm run harness`           | 端口 4319，不发真实请求      |
| `mock-data.mjs`            | 验收台的配置与恢复快照夹具，含一次完整的生成回流模拟                          | 由 `harness-server.mjs` 引入 | 无                           |

## 验收台怎么用

```powershell
pnpm run harness     # 起在 http://127.0.0.1:4319/
```

打开后用浏览器点：建提示词卡 → 输入 → 运行，能看到「排队中 → 生成中 → 完成」并多出一个图片节点与连线。
数据全是 mock，不花额度。

## 不建双件的地方

`harness/` 只有一个 `index.html` 与生成物，按档位不建双件。
测试不单独建 `tests/`：验证职责由本目录的两套冒烟承担。

## 变更影响路由

- 改 host 路由 → 同步 `smoke-host.mjs` 的用例。
- 改包名或 loader id → `smoke-client.mjs` 会自动断言不一致，先修代码再看用例。
- 改 mock 形状 → 对照 [src/client/api.ts](../src/client/README.md) 的类型。

## 工作约束

见 [AGENTS.md](AGENTS.md)。
