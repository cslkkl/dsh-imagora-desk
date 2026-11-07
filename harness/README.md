# harness/ — 渲染验收台

## 职责

用真实浏览器渲染插件的浏览器半端，验证「装进 DSH 后长什么样、交互对不对」。
它不生产插件产物，只做验收。

## 文件

| 文件                      | 职责                                                                              | 改后必测                       |
| ------------------------- | --------------------------------------------------------------------------------- | ------------------------------ |
| `index.html`              | 验收台页面：左侧画布宿主、右侧控件面板；加载 `dist/client.js` 与 `dist/vendor.js` | `pnpm run harness` 用浏览器看  |
| `dist/vendor.js`（生成）  | React 等依赖打成的浏览器全局，让 bundle 里的 `require` 能解析                     | `pnpm run harness`（会先重建） |
| `dist/sample.png`（生成） | mock 图片占位，缺失时 `harness-server.mjs` 退回内嵌 PNG                           | 同上                           |

生成物都在 `dist/` 下，已被 `.gitignore` 忽略。

## 谁驱动它

- 页面由 `scripts/harness-server.mjs` 提供：静态文件 + `/imagora/*` 全套 mock。
- vendor 由 `scripts/build-harness-vendor.mjs` 生成，`pnpm run harness` 会先跑它。
- mock 数据来自 `scripts/mock-data.mjs`（配置与恢复快照夹具，含一次完整的生成回流模拟）。

## 能验什么

- 画布渲染：三类节点配色、连线、工具栏 18 个按钮、缩放与平移
- 交互：滚轮缩放、左键平移、拖拽吸附与对齐线、锁定画布、Del 删除
- 对话框：保存 / 加载 / 帮助 / 设置 / 粘贴导入 / 生成历史 / 裁剪 / 切分 / 放大 / 蒙版
- 运行链路：建卡 → 运行 → 结果回流成节点（走 mock，不花钱）
- 成本徽章与预算闸门

## 不能验什么

- 真实生图请求与真实计费（验收台绝不发真请求）
- 真实宿主 Modal / 组件的全部行为：这里用桩，桩与宿主有差异时结论以真实实例为准
- 安装链路：那要在真实 DSH profile 里装插件后刷新页面

## 用法

```powershell
pnpm run harness      # http://127.0.0.1:4319/
```

## 约束与偏好

→ 见 [AGENTS.md](AGENTS.md)。
