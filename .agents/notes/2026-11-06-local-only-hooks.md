# 裁决：本地钩子只用 language: system（2026-11-06）

状态：生效

## 问题

`pre-commit` 的常规用法是引用远端 hook 仓库（`pre-commit-hooks`、`mirrors-prettier` 等），由它建 Python 环境。

本机实测：建 `pre-commit-hooks` 环境时 `pip` 装不上 `setuptools`，报「no matching distribution」，整条钩子链断掉。

## 决策

`.pre-commit-config.yaml` 只用 `repo: local` + `language: system`。

- 每个钩子直接调 `node` 与项目 `node_modules` 里的可执行文件。
- 文本卫生检查用自写脚本 `scripts/check-text-hygiene.mjs`，不依赖远端 hook 包。

## 替代方案（强制）

- 修本机 pip 镜像再装远端 hook：把开发环境绑死在网络与镜像可用性上；换机器还要再来一次。
- 改用 husky / lefthook：可行，但要为「一个 Windows 项目」再引一个 JS 依赖与一套配置方言；pre-commit 已经装好且生效。
- 干脆不要本地钩子：等于把「提交前自动修」推后到 CI，CI 只能拦不能修。

## 影响

- 得到：钩子不需要联网、不建额外环境，Windows 与 CI 行为一致。
- 代价：文本卫生这类规则得自己维护脚本（约 70 行）。
- 约束：新增钩子时必须能用现有 `node_modules` 里的工具实现，否则先评估是否值得再引一个工具。
