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

## 本目录特有的坑

- 目录被 `dsh web` 通过 Junction 持有时改不了名：先移除插件解锁，改名后再装回去。
- `.env` 里 `ACTIVE_PROFILE` 指向的来源没有密钥时，画布顶部会提示；切来源即可，配置不需重填（`config.js` 的两层解析按 profile 回退）。
- `hydrate` 判文件是否存在时要回退查 registry 的 `absPath`：只认节点上的字段，会把没存路径的好文件误判「缺失」并抹掉 `url`，图片节点的操作全哑。

## 测试

改本目录必跑 `pnpm run test`（含 host 冒烟 45 项）。
冒烟用临时目录与自带配置夹具，不碰真实画布目录，也不发真实生图请求。
