# dsh-imagora-desk

[![ci](https://github.com/cslkkl/dsh-imagora-desk/actions/workflows/ci.yml/badge.svg)](https://github.com/cslkkl/dsh-imagora-desk/actions/workflows/ci.yml)
[![license](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)
[![node](https://img.shields.io/badge/node-24.15.0-3776AB.svg)](.node-version)

把 [Imagora](https://github.com/Cogniform/imagora) 的**自由画布**搬进 DeepSeek。
提示词卡与图片摊在一张无限画布上，**连线就是参考关系**；跑完的图自动回流成新节点。

## 能做什么

- 无限画布：提示词卡、图片、图片组三类节点，拖拽、缩放、框选、小地图。
- 连线即参考：图片（或图片组）连到提示词就是它的参考图；提示词连到图片表示产出。
- 出图回流：单卡运行 / 全部运行 / 运行所选，结果自动变成提示词下方的新节点并连线。
- 点名引用：提示词里写 `@图片名` 只挑指定的图，不写就用入边上的全部图片。
- 工作流：手动命名保存与加载；画布改动还会自动落一份恢复快照。
- 配置沿用：来源、模型、尺寸、价目与密钥直接读你本机 Imagora，不在插件里再存一份。

只做画布，不带 Imagora 的表单页、批量页、配置页。

## 装法

```powershell
# 从本仓库装进当前 profile（会写 package.json + cordis.patch.yml，并建 Junction 链接）
dsh plugin --profile web install <本仓库路径>
```

装完刷新页面，左侧面板列表出现「自由画布」。
若刷新后没出现，重启一次 `dsh web`——页面的 client 清单 rev 在启动时计算。

前置：本机有一份可用的 Imagora，至少配好一个来源的密钥。
否则画布顶部会提示「当前 profile 没有配置密钥」，用工具栏的来源下拉切一个即可。

| 操作        | 说明                                                                       |
| ----------- | -------------------------------------------------------------------------- |
| 提示词卡    | 画布中间新建一张卡，提示词 / 尺寸 / 质量 / 输出路径都在这张卡上            |
| 导入图片    | 或直接把图拖进画布、在画布上 `Ctrl+V` 粘贴                                 |
| 运行        | 单卡「运行」、工具栏「全部运行」「运行所选」；「取消全部」停掉排队中的任务 |
| 保存 / 加载 | 手动命名存工作流；画布改动另有一份自动恢复快照（留最近 5 份）              |

键盘：`Del` 删除选中节点；滚轮缩放；右键或中键拖拽平移；空白处拖拽框选；双击图片看大图。

## 数据去哪了

请求直连你自己配置的接口，密钥只从本机 Imagora 的 `.env` 读进内存拼请求头。
图片与工作流全部落在本地 `~/.dsh/imagora/`，没有任何中转服务。

## 开发

需要 Node 24.15.0（见 [.node-version](.node-version)）与 pnpm。

```powershell
pnpm install
pnpm run build        # 打 dist/client.js；改完源码必须重跑
pnpm run test         # 两套冒烟：host 接口 22 项 + bundle/包名/插槽 13 项
pnpm run harness      # 渲染验收台 http://127.0.0.1:4319/（mock 数据，不花钱）
```

完整命令与检查选择见 [AGENTS.md](AGENTS.md)；设计不变量与接口契约见 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)。

## 许可

MIT。`src/client/lib/` 移植自 Imagora（MIT），画布交互层用 React Flow（MIT），
详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

问题与建议走 [Issues](https://github.com/cslkkl/dsh-imagora-desk/issues)。
