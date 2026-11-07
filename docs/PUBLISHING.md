# 发布与收录

三条相互独立的路径，按「别人多久能用上」排序。
维护者操作细节（npm 登录、发版清单）见 [docs/RELEASE.md](RELEASE.md)。

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

### 关于 dsh-plugin-lab 的默认索引

`dsh-plugin-lab/market` 的收录规则是：**只索引 dsh-plugin-lab 组织下的仓库**，
从组织的公开仓库自动发现，不手工收录。我们不在那个组织里，所以发到 npm
也进不了那份索引。想进就只能进那个组织，或者等我们这份自托管索引被加进
其他聚合源。

## 二、npm（可选，需维护者账号）

发 npm 的唯一好处是「`dsh plugin add dsh-imagora-desk` 能直接装」。
市场搜索**不依赖它**（走的是上面那份自托管索引）。

发布前有个本机 registry 陷阱：用户级 `.npmrc` 指向淘宝镜像，
镜像只能下载不能发布。仓库已用 `publishConfig` 把发布源钉在官方源。
完整操作见 [docs/RELEASE.md](RELEASE.md)。

## 三、awesome 列表（可选，需 PR）

`awesome-dsh-plugin` 收录方式是**一个文件**：`data/plugins/<owner>__<repo>.yml`。
本仓库已备好内容：[.github/awesome-entry.yml](../.github/awesome-entry.yml)。

```powershell
# 该仓库在我们账号下是 fork，上游是 awesome-dsh-plugin/awesome-dsh-plugin
gh repo sync cslkkl/awesome-dsh-plugin --source awesome-dsh-plugin/awesome-dsh-plugin --force
```

然后在上游仓库的 `data/plugins/` 下新增 `cslkkl__dsh-imagora-desk.yml` 并发 PR。
PR 只加这一个文件，两个 README 由他们的脚本生成，不要手改。

## 安装方式（给使用者）

```powershell
# 方式一：市场索引（推荐，带搜索与一键安装）
#   插件 → 发现 → 切换插件索引 → 管理索引源 → 添加上面那个 index.json 地址

# 方式二：npm（发布之后）
dsh plugin --profile web add dsh-imagora-desk

# 方式三：GitHub Release 的 tarball
dsh plugin --profile web add https://github.com/cslkkl/dsh-imagora-desk/releases/download/v<version>/dsh-imagora-desk-<version>.tgz

# 方式四：从仓库源码（开发用）
dsh plugin --profile web add git+https://github.com/cslkkl/dsh-imagora-desk.git
```

装完刷新页面，左侧面板出现「自由画布」。首次打开会自动弹设置，填接口地址与 API Key 即可。
