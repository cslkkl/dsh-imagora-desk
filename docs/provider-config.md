# 渠道与模型 — 插件侧

**定位**：插件不定义适配规则，它读 Imagora 的同一份配置、走同一套拼装。
**上游原版（真源）**：[imagora · docs/provider-config.md](https://github.com/Cogniform/imagora/blob/main/docs/provider-config.md) —— 判据、可抄示例、边界、`b64_json` 与透明底的实测都在那里。
这份只补插件侧独有的部分，不复制上游内容。

## 插件侧的两个落点

| 环节                                                              | 文件                                          |
| ----------------------------------------------------------------- | --------------------------------------------- |
| 读配置（归一化 `transport` / `models[].params`，坏块进 `issues`） | [src/host/config.js](../src/host/config.js)   |
| 拼请求体（与上游 `core/payload.py` 同语义）                       | [src/host/payload.js](../src/host/payload.js) |

发请求的 [src/host/generate.js](../src/host/generate.js) 只调 `buildPayload`，不再自己拼字典。

插件内配置（设置弹窗里填地址 / 密钥 / 模型）不承载渠道差异——它面向「下载后填 key 就能用」。
要用差异，就把来源切到 Imagora 那份配置。

## 唯一的纪律

规则没有插件特有版本，所以只有一条：**改一边必须让两边的同名断言同时通过**。
Imagora 的 `tests/test_core_payload.py` 与这里的 `scripts/smoke-host.mjs`（`payload:` 段）是同一组断言。

## 界面控件也走这条规则

卡上的「质量」等控件显不显示，判据与请求体同一条：这个东西最终会不会被发出去。
插件读同一份 `transport.drop` 算 `qualityEffective`，前端只消费结论、不自己判断——
所以不会出现「界面还摆着、其实早就没发」这种两套说法。

## 最小示例

`providers.local.json` 里某个 profile：

```json
"transport": { "request": { "response_format": "b64_json" }, "drop": ["output_format", "watermark"] }
```

含义：每次请求多带 `response_format: b64_json`（要原始 PNG 字节），并摘掉它不认的
`output_format` / `watermark`。

自检不发请求、不要密钥：

```powershell
python scripts/check_provider.py --profile <名字>   # 在 Imagora 仓库根目录跑
```
