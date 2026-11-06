# dsh-imagora-desk

把 [Imagora](https://github.com/Cogniform/imagora) 的**自由画布**搬进 DeepSeek Harness：
提示词卡与图片摊在一张无限画布上，**连线就是参考关系**；跑完的图自动回流成新节点。

> 仓库名 `dsh-imagora-desk`，插件包名 `dsh-imagora`（`package.json` 的 `name`；安装与 Cordis patch 认这个名字）。

只做画布，不带 Imagora 的表单页、批量页、配置页。模型、尺寸、价目与密钥直接读你本机
Imagora 的 `config.json` / `.env`，所以两边不会各存一份配置。

## 装法

```powershell
# 从仓库装进 profile（会自动写 package.json + cordis.patch.yml，并建 Junction 链接）
dsh plugin --profile web install <本仓库路径>
```

装完刷新页面：左侧面板列表出现「自由画布」。**若刷新后没出现，重启一次 `dsh web`**
（页面的 client 清单 rev 在启动时计算）。

## 用法

| 操作 | 说明 |
| --- | --- |
| 提示词卡 | 画布中间新建一张卡；提示词、尺寸、质量、输出路径都在这张卡上 |
| 导入图片 | 或直接把图**拖进画布**、在画布上 `Ctrl+V` 粘贴 |
| 连线 | 图片（或图片组）→ 提示词 = 参考图；提示词 → 图片 = 产出，出图后自动连 |
| `@图片名` | 在提示词里点名引用：只挑指定的图，不写就用入边上的全部图片 |
| 运行 | 单卡「运行」、工具栏「全部运行」「运行所选」；「取消全部」停掉排队中的任务 |
| 保存 / 加载 | 手动命名存工作流；画布改动另有一份自动恢复快照（留最近 5 份） |
| 来源 / 模型 | 工具栏右上两个下拉：来源（profile）决定接口地址与密钥，模型决定尺寸与价目 |

键盘：`Del` 删除选中节点；滚轮缩放；右键或中键拖拽平移；空白处拖拽框选；双击图片看大图。

## 状态落在哪

```
~/.dsh/imagora/
  assets/     画布图片（上传、粘贴、生成结果）
  output/     生成结果的默认落盘目录（提示词卡里填了路径就再另存一份）
  workflows/  手动保存的工作流 JSON
  recovery/   自动恢复快照（最近 5 份）
  registry.json / settings.json
```

`settings.json` 只存插件自己的选择（来源、模型、Imagora 目录），**不改 Imagora 的配置**。

## 配置从哪来

按 Imagora 的规则解析，优先级一致：

1. 插件设置里的 `profile`（工具栏切的那一项）→ 否则 `.env` 的 `ACTIVE_PROFILE` → 否则 `config.json` 的 `default_profile`
2. 接口地址：`BASE_URL_<PROFILE>` → profile 的 `base_url`；路径：`PATH_GENERATIONS_<PROFILE>` / `api_paths`
3. 密钥：`API_KEY_<PROFILE>` → `API_KEY` → `AIWANWU_API_KEY`
4. 模型：插件设置 → `MODEL_<PROFILE>` → profile 的 `default_model`
5. 尺寸/价目：优先取模型自带的 `size_options`，没有就退到 profile 级的

Imagora 目录默认找 `~/Desktop/imagora/imagora`，也可用 `DSH_IMAGORA_ROOT` 或插件设置改。

## 开发

```powershell
# 构建依赖复用 Imagora 前端的 node_modules（esbuild、@xyflow/react），
# 本插件目录刻意不装依赖：克隆下来就能构建、装完就能用。
$env:DSH_IMAGORA_FRONTEND = "C:\path\to\imagora\frontend"   # 也可直接用默认的 ~/Desktop/imagora/imagora/frontend

node build.mjs                  # 打 dist/client.js（esbuild，react 由宿主提供）
node scripts/smoke-host.mjs     # host 半端 17 项接口冒烟（临时目录，不会真的生图）
node scripts/smoke-client.mjs   # bundle 能否加载 + 插槽注册
node scripts/build-harness-vendor.mjs
node scripts/harness-server.mjs # 渲染验收台 http://127.0.0.1:4319/（mock 数据，不花钱）
```

## 目录

```
src/host/    config.js（读 Imagora 配置）generate.js（上游请求）tasks.js（排队）
             store.js（资产/工作流/恢复快照）routes.js（/imagora/*）index.js（插件入口）
src/client/  index.tsx（插槽注册）canvas.tsx（画布）nodes.tsx（三类节点）
             styles.ts（主题样式）api.ts（host 契约）lib/（移植 Imagora 的纯逻辑模块）
```

## 许可

MIT。`src/client/lib/` 移植自 Imagora（MIT），画布交互层用 React Flow（MIT），
详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
