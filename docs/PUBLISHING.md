# 发布与收录

三条相互独立的路径，按「别人多久能用上」排序。

## 一、自托管索引（已就绪，不依赖任何账号）

DSH 的 Discover 支持**自定义插件索引**：用户加一个 URL 就能搜到并安装。
本仓库自带一份 format 1 的索引，随代码一起提交、走 jsDelivr 分发。

**索引地址**

```text
https://cdn.jsdelivr.net/gh/cslkkl/dsh-imagora-desk@main/market/index.json
```

**给别人用的步骤**

1. 插件 → 打开「自定义插件索引」
2. 插件 → 发现 → 「添加索引源」→ 粘贴上面的地址
3. 搜 `imagora` → 选中 → 安装

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

发 npm 的唯一好处是「`dsh plugin add dsh-imagora-desk` 能直接装」和
「市场默认索引能自动收录」。本机目前 `npm whoami` 是 `ENEEDAUTH`，这步要你自己跑：

```powershell
npm login --registry=https://registry.npmjs.org
cd C:\Users\11965\Desktop\dsh-imagora-desk
npm publish --registry=https://registry.npmjs.org --access public
```

发布前检查：

- `package.json` 的 `name` / `version` / `files` / `repository` 与实际一致
- `dist/client.js` 是最新构建（CI 有 `git diff --exit-code -- dist/client.js` 守着）
- 版本按语义升：功能升 minor，修 bug 升 patch
- 发完重跑 `pnpm run market:index`，把索引的 `source` 从 `git` 换成 `npm`（可选）

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
