# 发版操作手册

维护者视角的发布步骤。对外说明（索引地址、安装方式）见 [docs/PUBLISHING.md](PUBLISHING.md)。

## 索引怎么更新

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

## 本机的 registry 陷阱

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

## 登录 npm（三种方式，选一种）

**A. 自动化令牌（推荐：无交互，适合脚本/远程环境）**

1. 打开 https://www.npmjs.com/settings/~/tokens → Generate New Token → **Granular Access Token**
2. Permissions 选 **Read and write (publish and stage)**；Packages 选 All packages（新包选不到自己）
3. 把令牌写进用户级 `.npmrc`：

```powershell
npm config set //registry.npmjs.org/:_authToken=<粘贴令牌>
npm whoami --registry=https://registry.npmjs.org
```

期望输出你的 npm 用户名。这条配置按域名绑定，不影响 `pnpm install` 走镜像。

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

## 发布

```powershell
cd <本仓库根目录>
pnpm install --frozen-lockfile
pnpm run test                 # host 58 + client 16 + 索引校验，全绿再往下
npm publish                   # registry 与 access 已在 publishConfig 里
```

`prepublishOnly` 会自动跑 `build` + client 冒烟：**npm publish 不跑 CI**，
仓库里的 `dist` 可能是旧的，这一步防止把过期产物发出去。

## 发布后核验

```powershell
npm view dsh-imagora-desk version --registry=https://registry.npmjs.org
npm view dsh-imagora-desk dist.tarball --registry=https://registry.npmjs.org
```

再装一遍确认：

```powershell
dsh plugin --profile pubcheck add dsh-imagora-desk
```

## 发版检查清单

- [ ] 包名未被占用：`https://registry.npmjs.org/<name>` 返回 404
- [ ] `package.json` 的 `name` / `version` / `files` / `repository` 与实际一致
- [ ] `npm publish --dry-run` 的文件清单里没有多余文件，体积合理
- [ ] `dist/client.js` 是最新构建（CI 与 `prepublishOnly` 双重把关）
- [ ] 版本按语义升：功能升 minor，修 bug 升 patch
- [ ] `engines.dsh` 与实际兼容的 DSH 版本一致
- [ ] `pnpm run market:index` 重新生成，`pnpm run market:check` 官方校验通过
- [ ] `git push` 后 CI 绿（含 dist 同步与索引新鲜度检查）
- [ ] `pnpm pack` 产物含 `dist/client.js`、`src/host/index.js`、`cordis.patch.yml`
- [ ] GitHub Release 附带同一份 tgz
- [ ] 装进干净 profile 冒烟：`dsh plugin --profile <name> add dsh-imagora-desk@<version>`

## 已发 npm 之后（可选）

把索引的 `source` 从 `git` 换成 `npm`，让安装走 registry 而不是 git clone：
改 `scripts/build-market-index.mjs` 里的 `source` 字段，然后 `pnpm run market:release`。
当前保持 `git` 也能正常工作，且不依赖分发渠道。

## 回滚

发布出问题时按「谁先受影响」倒序处理：

- **索引指错了提交**：`pnpm run market:index` 重新生成 → `git commit --amend` → 推送，Pages 会自动重新部署。
- **npm 版本有问题**：`npm deprecate dsh-imagora-desk@<version> "<原因>"` 标记废弃，再发一个 patch 修。npm 不允许重发同版本号。
- **Release 附件错了**：删掉附件重传，或用 `gh release upload --clobber`。
- **tag 指向错了**：`git tag -d v<version>` → 重新 `git tag -a` → `git push --force origin v<version>`。索引随后要重新生成。
