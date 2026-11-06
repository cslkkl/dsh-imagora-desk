# host/ — 规则层

继承根规则，见 [../../AGENTS.md](../../AGENTS.md)。

## 本目录特有约束

- 每个请求都要先走 `requestRejection`；拿不到 `connection` 服务时按 403 处理，不降级放行。
- 文件服务只放行 `assets/` 与 `output/` 下的路径，路径穿越一律拒绝。
- 上游请求是唯一出网点，全部集中在 `generate.js`；其余文件不直接发网络请求。
- 密钥只在内存里拼进请求头，不写日志、不回传前端。
- 错误返回 `{ error: string }` 并带状态码；给用户看的文案要能读懂，原始异常留在 `message` 里。
- 状态写入走 `Store.serialize`，避免并发生成把 `registry.json` 写坏。
- 不写「有什么文件 / 怎么改」，那是 [README.md](README.md) 的职责。

## 测试

改本目录必跑 `pnpm run test`（含 host 冒烟 22 项）。
冒烟用临时目录与自带配置夹具，不碰真实画布目录，也不发真实生图请求。
