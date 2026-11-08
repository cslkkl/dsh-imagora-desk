# host/ — 插件服务端手册

## 职责

向 DSH 的 Web 服务注册 `/imagora` 前缀，提供配置、资产、任务、工作流、生成历史五组接口，并真正去请求上游生图。

## 文件

| 文件          | 职责                                                                                         | 关键导出                                                                      | 改后必测                   |
| ------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------- |
| `index.js`    | 插件入口：注册路由、鉴权、状态目录                                                           | `default.apply`、`name`、`requestRejection`                                   | `pnpm run test`            |
| `routes.js`   | 全部 HTTP 路由与请求整形                                                                     | `createRouter`                                                                | host 冒烟                  |
| `history.js`  | 读 `<imagora>/logs/generation.jsonl`：容错、聚合去重、分页、成本聚合（照 `core/history.py`） | `readLedger`、`collectAll`、`dedupeGenerationHistory`、`readRaw`、`summarize` | host 冒烟（历史 8 条）     |
| `budget.js`   | 本机预算设置 `<输出目录>/.budget.json` 的读写与「单次 / 当日」超限判定（照 `core/cost.py`）  | `loadBudget`、`saveBudget`、`normalizeBudget`、`checkBudget`、`budgetPath`    | host 冒烟（预算 13 条）    |
| `ledger.js`   | 生成账本的读路径判定与追加写入（照 `core/logging.py`）；插件出的图也进同一份                 | `ledgerRoot`、`buildRecord`、`appendGeneration`、`displayPath`                | host 冒烟（账本 14 条）    |
| `errors.js`   | 异常 → 响应体：4xx 原样，**5xx 只回错误码**（不回显本机绝对路径）                            | `publicErrorBody`、`clientErrorBody`                                          | host 冒烟（5xx 脱敏 2 条） |
| `config.js`   | 读 Imagora 的 `config.json` / `providers.local.json` / `.env`，解析来源、模型、尺寸、密钥    | `loadImagoraConfig`、`foldId`、`costOfSize`、`readSettings`、`writeSettings`  | host 冒烟（配置解析用例）  |
| `generate.js` | 上游请求：`generations` 文生图 / `edits` 图生图，兼容三种响应口径                            | `generateImage`、`extractImageItem`、`humanizeError`                          | 真机跑一张                 |
| `tasks.js`    | 任务池：排队、并发上限、取消语义                                                             | `TaskPool`                                                                    | host 冒烟（取消分支）      |
| `store.js`    | 状态目录、资产登记、工作流与恢复快照、路径白名单                                             | `Store`、`MIME`、`extOf`                                                      | host 冒烟                  |

## 被谁依赖

只有 `index.js` 会被 DSH 加载，其余是本目录内部模块。

## 变更影响路由

- 改路由路径或响应形状 → 同一次改动里更新 [client/api.ts](../client/README.md)、[docs/ARCHITECTURE.md](../../docs/ARCHITECTURE.md) 的契约表、host 冒烟用例。
- 改配置解析 → 同步 [docs/ARCHITECTURE.md](../../docs/ARCHITECTURE.md) 的「配置解析顺序」，并与 Imagora 的 `core/config.py` 对齐。
- 改状态目录结构 → 同步架构文档的「状态目录」，并在根 [AGENTS.md](../../AGENTS.md) 待办里评估迁移。
- 改任务语义 → 画布上的「取消」文案与 `use-canvas-tasks.ts` 的注释要一起改。

## 工作约束

见 [AGENTS.md](AGENTS.md)。
