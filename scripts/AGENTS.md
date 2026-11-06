# scripts/ — 规则层

继承根规则，见 [../AGENTS.md](../AGENTS.md)。

## 本目录特有约束

- 脚本一律可直接 `node scripts/<name>.mjs` 运行，不依赖 ts-node 之类的转译层。
- 冒烟与验收台绝不发真实生图请求：花钱的动作只在人工验证时做。
- 需要磁盘状态时必须用临时目录（`mkdtempSync` + 结束删除），不写 `~/.dsh/imagora`。
- 需要 imagora 配置时用自带夹具，不读本机 Desktop 上的真实配置。
- 检查脚本默认只读；要写盘必须显式 `--fix`。
- 失败时以退出码表达（0 通过 / 1 有问题），输出里逐条 PASS / FAIL，便于 CI 与钩子判断。
