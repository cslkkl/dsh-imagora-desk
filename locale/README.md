# locale/ — 包展示元数据

这里放**宿主直读的包展示元数据**：插件页上那个标题与那一句话说明。**不是**插件界面的文案 —— 界面文案在 [../src/client/locales.ts](../src/client/locales.ts)，运行时经 `ctx.locale` 注册。两者是两条独立的路，别混。

## 两份文件

- `en.json`：**发现入口**。宿主先解析这一份，它不在，其余语言文件根本不会被读。
- `zh.json`：同一键集的中文。
- 文件名就是语言 id。字段只有 `meta.title` 与 `meta.description`，值必须是非空字符串。

## 谁在读它

宿主读，本仓代码**一个字节都不读**。所以：

- 读不到或读坏了，信号是**静默**的 —— 宿主按「缺字段」回落，界面照常渲染，只是显示成了 `package.json` 的 `name` / `description`。
- 想改插件页上显示什么，只有这两处可改。
- 必须随包发布：`package.json` 的 `files` 里要有 `locale/*.json`，否则装上去等于没有。

## 回落链（逐字段独立）

- **标题**：本目录的 `meta.title` → `package.json` 的 `name` → 完整 Cordis 名。
- **描述**：本目录的 `meta.description` → `package.json` 的 `description` → 不显示。
- **图标**：`package.json` 的 `icon`（见包根的 [icon.svg](../icon.svg)），与这里无关。

## 改这里的文案要顺带查

- [market/index.json](../market/index.json) 里同一个插件的 `title` / `description` —— 市场列表与插件页是两处，**名字要一致**，否则同一件东西在两个页面叫两个名字。
- [README.md](../README.md) 里点名插件的地方。
