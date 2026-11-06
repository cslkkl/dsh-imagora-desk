# 发布与收录

## 为什么必须发到 npm

DSH 的插件市场（`dsh-plugin-lab/market`）**不手工收录插件**：它读 npm 元数据生成格式 1 的
`index.json`，再按 `keywordRules` 归类。也就是说：

- 不发到 npm → 市场里搜不到，只能靠仓库地址手工装。
- 发到 npm → 下一次索引构建后自动出现，分类与标签按仓库 `keywords` 推导。

`awesome-dsh-plugin` 是另一条独立的清单（人手维护，收 PR），它只影响「精选列表」，
不影响市场搜索。两条都做才完整。

## 一、发 npm（需要维护者账号）

```powershell
# 1. 登录（交互式，需一次性密码）
npm login --registry=https://registry.npmjs.org

# 2. 确认登录的是发布者
npm whoami --registry=https://registry.npmjs.org

# 3. 打包预览：确认 dist/client.js 在里面
pnpm pack
tar -tzf dsh-imagora-desk-<version>.tgz | Select-String "dist/client.js|package.json|cordis.patch.yml"

# 4. 发布（正式源；本机默认 registry 是镜像，必须显式指定）
npm publish --registry=https://registry.npmjs.org --access public
```

发布前检查：

- `package.json` 的 `name` / `version` / `files` / `repository` 与实际一致。
- `dist/client.js` 是最新构建（CI 有 `git diff --exit-code -- dist/client.js` 守着）。
- 版本按语义升：功能升 minor，修 bug 升 patch。

## 二、市场索引收录

发布后无需 PR。索引由 `dsh-plugin-lab/market` 的流水线按 npm 元数据生成，分类规则：

| keyword 命中                    | 分类 |
| ------------------------------- | ---- |
| `ui` / `sidebar` / `balance`    | 界面 |
| `search` / `tool` / `debugging` | 工具 |
| `llm` / `models`                | 模型 |
| `reasoning` / `auto-continue`   | 行为 |

本插件 `keywords` 含 `ui`（另有 `canvas`、`image-generation`），因此归到「界面」。
索引构建有周期，发布后不是立即出现；`refresh` 可绕过缓存重读。

自检：索引可读后，用 `plugin_market` 工具或插件市场页面搜索 `imagora` 应能命中。

## 三、awesome 列表（可选，需 PR）

`awesome-dsh-plugin` 收录方式是**一个文件**：`data/plugins/<owner>__<repo>.yml`。
本仓库已备好内容：[.github/awesome-entry.yml](../.github/awesome-entry.yml)。

```powershell
# 该仓库在我们账号下是 fork，上游是 awesome-dsh-plugin/awesome-dsh-plugin
# fork 落后上游较多，提交前先同步，避免 PR 里夹带无关差异
gh repo sync cslkkl/awesome-dsh-plugin --source awesome-dsh-plugin/awesome-dsh-plugin --force
```

然后在上游仓库的 `data/plugins/` 下新增 `cslkkl__dsh-imagora-desk.yml` 并发 PR。
PR 只加这一个文件，两个 README 由他们的脚本生成，不要手改。

## 四、发版检查清单

- [ ] `pnpm install` → `pnpm run build` → `pnpm run test` 全绿
- [ ] `git push` 后 CI 绿（含 dist 同步检查）
- [ ] `pnpm pack` 产物含 `dist/client.js`、`src/host/index.js`、`cordis.patch.yml`
- [ ] `npm publish` 成功，`npm view dsh-imagora-desk version` 能查到
- [ ] GitHub Release 附带同一份 tgz（给不能用 npm 的人直接装）
- [ ] 装进干净 profile 冒烟：`dsh plugin --profile <name> add dsh-imagora-desk@<version>`

## 安装方式（给使用者）

```powershell
# 方式一：npm（市场里点安装等价于这条）
dsh plugin --profile web add dsh-imagora-desk

# 方式二：GitHub Release 的 tarball（没配 npm 源时）
dsh plugin --profile web add https://github.com/cslkkl/dsh-imagora-desk/releases/download/v<version>/dsh-imagora-desk-<version>.tgz

# 方式三：从仓库源码（开发用）
dsh plugin --profile web add git+https://github.com/cslkkl/dsh-imagora-desk.git
```

装完刷新页面，左侧面板出现「自由画布」。首次打开会自动弹设置，填接口地址与 API Key 即可。
