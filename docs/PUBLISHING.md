# 发布与收录

三条相互独立的路径，按「别人多久能用上」排序。

## 一、自托管索引（已就绪，不依赖任何账号）

DSH 的 Discover 支持**自定义插件索引**：用户加一个 URL 就能搜到并安装。
本仓库自带一份 format 1 的索引，推送后由 GitHub Pages 发布到站点根目录。

**索引地址**

```text
https://toolboxonline.online/dsh-imagora-desk/index.json
```

为什么不用 jsDelivr：实测 `@v0.1.0` 的 JSON 请求 4 次挂 1 次（`ECONNRESET`），
宿主读不到索引就直接在界面上报「Could not fetch …」，别人加索引源会失败。
同一份文件改由 Pages 托管后连测 4 次全通。索引是「能不能找到插件」的唯一入口，
不能容忍这种失败率。

**给别人用的步骤**（已在真实实例上走通）

1. 插件 → 发现 → 右侧「切换插件索引」→「管理索引源…」
2. 粘贴上面的地址 → 添加
3. 搜索 `imagora` → 卡片出现「Imagora 自由画布」+ 版本 + 作者 + 描述
4. 点安装

安装参数由索引里写死：

```text
git+https://github.com/cslkkl/dsh-imagora-desk.git#<commit>
```

`source` 用的是 `git` 而不是 `npm`——format 1 的 `MarketSource` 允许
`{ type: 'git', url, commit }`，pnpm 会解析成上面那条 spec。所以这条路
**不需要 npm 账号**，commit 又保证了可复现（同一份索引装到的永远是同一份代码）。

### 索引怎么更新

索引里的 `commit` 必须指向「你希望别人装到的那次提交」。提交时 HEAD 还是父提交，
所以不能靠钩子自动写。发版流程：

```powershell
git commit -m "..."          # 正常提交代码
pnpm run market:index        # 按新 HEAD 重新生成索引
git commit --amend --no-edit # 把索引并进同一次提交
git push
```

忘了这一步会怎样：`pnpm run market:fresh` 会提示「改了运行时文件但没更新索引」，
CI 也会拦（它校验 commit 存在于仓库里）。

## 二、发 npm（需要维护者账号）

发 npm 的唯一好处是「`dsh plugin add dsh-imagora-desk` 能直接装」。
市场搜索**不依赖它**（走的是第一节那份自托管索引）。

### 先搞清楚本机的 registry 陷阱

本机用户级 `.npmrc` 是：

```text
registry=https://registry.npmmirror.com
```

淘宝镜像**只能下载、不能发布**。直接 `npm publish` 会打到镜像上然后失败。
仓库已经用 `publishConfig` 把发布源钉死在官方源，所以**不用加 `--registry`**：

```jsonc
"publishConfig": { "registry": "https://registry.npmjs.org/", "access": "public" }
```

`publishConfig` 只管发布，日常 `pnpm install` 仍然走镜像（不受影响）。

### 登录（三种方式，选一种）

**A. 自动化令牌（推荐：无交互，适合脚本/远程环境）**

1. 打开 https://www.npmjs.com/settings/~/tokens → Generate New Token → **Granular Access Token**
2. 权限选 **Read and write**，勾选 _Automation_（跳过 2FA 交互）
3. 把令牌写进用户级 `.npmrc`：

```powershell
npm config set //registry.npmjs.org/:_authToken=<粘贴令牌>
npm whoami --registry=https://registry.npmjs.org
```

期望输出你的 npm 用户名。

**B. 浏览器登录（需要能开浏览器的真实终端）**

```powershell
npm login --registry=https://registry.npmjs.org --auth-type=web
```

会在本机开浏览器授权，回调后自动写入凭据。**注意**：这条必须在真实终端里跑，
在捕获输出的非交互 shell 里会卡住。

**C. 经典用户名密码（如果账号没开强制 2FA）**

```powershell
npm login --registry=https://registry.npmjs.org
```

### 发布

```powershell
cd C:\Users\11965\Desktop\dsh-imagora-desk
pnpm install --frozen-lockfile
pnpm run test                 # 45 + 13 + 索引校验，全绿再往下
npm publish                   # registry 与 access 已在 publishConfig 里
```

`prepublishOnly` 会自动跑 `build` + client 冒烟：**npm publish 不跑 CI**，
仓库里的 `dist` 可能是旧的，这一步防止把过期产物发出去。

### 发布后核验

```powershell
npm view dsh-imagora-desk version --registry=https://registry.npmjs.org
npm view dsh-imagora-desk dist.tarball --registry=https://registry.npmjs.org
```

再装一遍确认：

```powershell
dsh plugin --profile pubcheck add dsh-imagora-desk
```

### 发布前检查清单

- [ ] 包名未被占用：`https://registry.npmjs.org/<name>` 返回 404
- [ ] `package.json` 的 `name` / `version` / `files` / `repository` 与实际一致
- [ ] `npm publish --dry-run` 的文件清单里没有多余文件，体积合理
- [ ] `dist/client.js` 是最新构建（CI 与 `prepublishOnly` 双重把关）
- [ ] 版本按语义升：功能升 minor，修 bug 升 patch
- [ ] `engines.dsh` 与实际兼容的 DSH 版本一致

### 已发 npm 之后（可选）

把索引的 `source` 从 `git` 换成 `npm`，让安装走 registry 而不是 git clone：
改 `scripts/build-market-index.mjs` 里的 `source` 字段，然后 `pnpm run market:release`。
当前保持 `git` 也能正常工作，且不依赖分发渠道。

### 关于 dsh-plugin-lab 的默认索引

`dsh-plugin-lab/market` 的收录规则是：**只索引 dsh-plugin-lab 组织下的仓库**，
从组织的公开仓库自动发现，不手工收录。我们不在那个组织里，所以发到 npm
也进不了那份索引。想进就只能进那个组织，或者等我们这份自托管索引被加进
其他聚合源。

## 三、awesome 列表（可选，需 PR）

`awesome-dsh-plugin` 收录方式是**一个文件**：`data/plugins/<owner>__<repo>.yml`。
本仓库已备好内容：[.github/awesome-entry.yml](../.github/awesome-entry.yml)。

```powershell
# 该仓库在我们账号下是 fork，上游是 awesome-dsh-plugin/awesome-dsh-plugin
gh repo sync cslkkl/awesome-dsh-plugin --source awesome-dsh-plugin/awesome-dsh-plugin --force
```

然后在上游仓库的 `data/plugins/` 下新增 `cslkkl__dsh-imagora-desk.yml` 并发 PR。
PR 只加这一个文件，两个 README 由他们的脚本生成，不要手改。

## 四、发版检查清单

- [ ] `pnpm install` → `pnpm run build` → `pnpm run test` 全绿
- [ ] `pnpm run market:index` 重新生成，`pnpm run market:check` 官方校验通过
- [ ] `git push` 后 CI 绿（含 dist 同步与索引新鲜度检查）
- [ ] `pnpm pack` 产物含 `dist/client.js`、`src/host/index.js`、`cordis.patch.yml`
- [ ] 可选：`npm publish` 成功，`npm view dsh-imagora-desk version` 能查到
- [ ] GitHub Release 附带同一份 tgz
- [ ] 装进干净 profile 冒烟：`dsh plugin --profile <name> add dsh-imagora-desk@<version>`

## 安装方式（给使用者）

```powershell
# 方式一：市场索引（推荐，带搜索与一键安装）
#   插件 → 自定义插件索引 → 添加上面那个 index.json 地址

# 方式二：npm（发布之后）
dsh plugin --profile web add dsh-imagora-desk

# 方式三：GitHub Release 的 tarball
dsh plugin --profile web add https://github.com/cslkkl/dsh-imagora-desk/releases/download/v<version>/dsh-imagora-desk-<version>.tgz

# 方式四：从仓库源码（开发用）
dsh plugin --profile web add git+https://github.com/cslkkl/dsh-imagora-desk.git
```

装完刷新页面，左侧面板出现「自由画布」。首次打开会自动弹设置，填接口地址与 API Key 即可。
