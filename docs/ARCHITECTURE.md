# dsh-imagora-desk 架构说明

## 目标

把 Imagora 的自由画布作为 DSH 插件提供，只做画布。

- 不做：Imagora 的表单页、批量页、配置页、成本看板。
- 不做：要求本机跑 Python 服务。
- 约束：装上即用，配置与密钥直接沿用本机 Imagora。

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

```
~/.dsh/imagora/
  assets/      画布图片（上传、粘贴、生成结果）
  output/      生成结果默认落盘
  workflows/   命名工作流
  recovery/    自动恢复快照
  registry.json / settings.json
```

`DSH_IMAGORA_HOME` 可整体改道，测试用它指到临时目录。

## 样式

- 只用 `--dsw-*` 主题 token，配一个兜底值；暗色主题跟随宿主，不需要额外分支。
- 类名前缀 `im-`，避免与宿主样式冲突。
- xyflow 自带样式在 `apply` 里以 `<style>` 注入，随 effect 清理。

## 防错清单

- 改包名：`package.json` / `cordis.patch.yml` / `build.mjs` 的 loader id / host 导出名，四处一起改。
- 改插槽名或 key：`src/client/index.tsx` 常量与宿主插槽文档一起核对。
- 改路由：同步 `src/client/api.ts`、host 冒烟用例、本文件的契约表。
- 动 `src/client/lib/`：按上游语义判断，不要按本项目风格改；格式检查已排除该目录。
- 装依赖后忘了重建：CI 的 `dist` 同步检查会红，本地钩子也跑构建相关的冒烟。

## 相关

- 决策记录 → [.agents/notes/](../.agents/notes/README.md)
- 维护索引 → [../AGENTS.md](../AGENTS.md)
