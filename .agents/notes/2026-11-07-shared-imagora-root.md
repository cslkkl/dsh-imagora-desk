# 决策：与原版共用一份数据用指针，不复制（2026-11-07）

状态：生效

## 问题

设置弹窗里填了 Imagora 目录之后，插件仍然读不到原版的东西：

- 「加载工作流」永远是空列表，而 `D:\ProjectSomething\imagora\output\workflows\` 下有十几个。
- 「生成历史」永远是 0 张，而原版 `.assets/registry.json` 里有两千多条。

原因是 `Store` 的路径在构造那一刻就钉死在 `~/.dsh/imagora` 下，`imagoraRoot` 只参与了**配置解析**（读 `config.json` / `.env` 找来源与密钥），没参与**存储取数**。用户看到的界面是「设置明明填了、列表却空的」，看起来像设置没保存。

维护者给的要求是「都用指针，包括秘钥和配置和工作流和历史图片那些」——即不要做一次性导入/复制。

## 决策

`Store` 的路径改成 **getter**，跟着 `setSharedRoot()` 变；设置了 imagora 目录就整份切到原版那套位置，没设置就还是插件自己的目录。

```
<imagoraRoot>/output/.assets/registry.json      原版资产注册表（v2，relPath 相对 output/）
<imagoraRoot>/output/.assets/canv_<sha1>.<ext>  原版的图片文件
<imagoraRoot>/output/workflows/<名字>.json      原版工作流
<imagoraRoot>/output/workflows/.recovery/       原版恢复快照
```

`settings.json` 例外，永远留在 `~/.dsh/imagora`：插件自己的偏好（模型选择、预算、目录指针）不该写进别人的仓库目录。

三条兼容规则（都是原版已经在用的，不遵守就写坏它的文件）：

1. **注册表两种格式都读**。v2 是原版格式（`{schemaVersion, images:{id:entry}}`，条目只有 `relPath`），v1 是插件旧格式（`{version, assets:[]}`，条目带 `absPath`）。**写哪种由当前目录决定**——共用模式必须写 v2。
2. **共用模式按内容 sha1 去重**，文件名 `canv_<sha1[:12]>`，与原版同一个 id 算法。这样插件新出的图与原版已有的同一张图不会存两遍。
3. **工作流落盘剥掉派生的 `url` / `absPath` / `missing`**（原版 `core/graphstore.py` 的 `_strip_derived_node_paths`）。加载时按 `registryId` 从注册表重建——原版工作流**只存 `registryId`**，这条回退路径是读它的唯一通路，删了就等于读不了原版存档。

## 替代方案（强制）

- **一次性导入（cp 原版数据到插件目录）**：维护者明确否掉（「都用指针」）。而且历史图片是持续增长的，导一次就过期，等于引入一个「该不该重新导」的新问题。
- **共用模式下继续写插件自己的目录，只「额外读一次」原版**：能看见旧东西，但插件新出的图原版看不见，两边会慢慢分叉，最终还是两个库。
- **软链接 / Junction 把插件目录指到原版**：Windows 上要管理员权限或开发者模式，安装插件的人未必有；而且 `settings.json` 也会跟着被指走，插件的偏好就写进了别人的仓库目录。getter 方案零权限、零副作用。
- **在原版那份 registry 里写入时保留 `absPath`**：原版读 v2 只认 `relPath`，多写的字段它不认，反而让文件出现两套路径来源，将来对不上时更难查。

## 影响

- 得到：填入目录后立刻看得到原版的工作流与全部历史图片；插件新出的图登记进同一张表、落在同一个 `.assets`；两边无需同步脚本。
- 代价：共用模式下写盘要守原版的格式约束（上面三条），改动存储层时必须同时想「原版读不读得懂」。
- 代价：`store.js` 的路径全是 getter，不能在构造函数里赋值。这条已写进 [ARCHITECTURE 防错清单](../../docs/ARCHITECTURE.md)。
- 顺带：保存 / 加载 / 历史三个弹窗都补上「读的是哪个目录」。空列表时最需要这条信息——用户此前只能猜。

## 支撑

- host 冒烟从 45 项加到 58 项，新增一组用例造出**原版磁盘布局**（v2 注册表 + `relPath`、只存 `registryId` 的工作流），锁住六件事：列表读得到、加载补得出 url、文件服务放行、sha1 去重、落盘归一化、切回插件独用不再看见原版那份。
- 原版格式取自 `core/registry.py`（`ASSET_DIR = output/.assets`、`REGISTRY_FILE = .assets/registry.json`、`img_id = sha1[:12]`）与 `core/graphstore.py`（`WORKFLOWS_DIR = output/workflows`、`RECOVERY_DIR = workflows/.recovery`、`_strip_derived_node_paths`）。
