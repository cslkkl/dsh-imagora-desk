# 节点数据缺字段：加载时补全，而不是只在渲染时兜住

日期：2026-11-16

## 事故

一份手改过的工作流，提示词卡只有 `{ prompt }`、没有 `size`。打开它时整页全白：

```
TypeError: Cannot read properties of undefined (reading 'trim')
    at normalizeCustomValue
    at mergeCustomOption
```

## 为什么白屏

`mergeCustomOption` 把 `data.size` 传给 `normalizeCustomValue`，后者直接 `raw.trim()`。
声明成 `string` 只是说「正常情况该是字符串」，**运行期挡不住外部数据里的 `undefined`**。
而画布没有错误边界，一次渲染异常等于整棵 React 树被卸载 —— 界面上什么都不剩。

## 改法：三层

**① 渲染层免疫。** `normalizeCustomValue` 收 `undefined` / `null`，非字符串一律当空串。
空串在本模块里本来就有明确语义（不追加自定义项），不需要另一条分支。
同类裸写法另有 7 处 `data.prompt.trim()`（插件 3 / 原版 4），一并改成 `(data.prompt ?? "")`。

> 只改 `size` 那一处是不够的：实测缺 `prompt` 同样白屏。这是**一类**问题，不是一处。

**② 加载时补全。** `workflowToCanvas` 把 `prompt` / `size` / `quality` / `outputDir`
补成合法值，新增可选 `defaults` 参数。

为什么不能只做 ①：卡片是活下来了，但尺寸框是空的，点运行不知道用什么尺寸 ——
**不白屏 ≠ 能用**。补的是「配置里的第一档」，与新建卡片完全同源：插件把
`addPromptNode` 里那句 `config.sizes[0]?.value ?? '1024x1024'` 提成 `configDefaultsRef`，
新建与修复共用一份；原版直接传 `config.sizes[0]?.value`。所以修出来的卡和手动新建的一模一样。

**③ 落盘前压形状。** `buildRecoverySnapshot` 把必需字段压成字符串。

这条治的是**自锁**：快照是下次启动的唯一来源，留着 `undefined` 写回磁盘，
下次打开又读回同一份坏数据 —— 一次事故变成「每次打开都崩、界面里还没法自救」。
实测确认过：崩溃后的卸载 flush 真的把坏节点写回了 `.recovery/*.json`。

这里**只补空串、不补默认尺寸**：空串是诚实的「还不知道」，加载侧才按当前配置补齐；
在保存侧写死 1024x1024 等于把猜测永久钉进存档，换模型后就成了错的值。

## 顺带修掉一个真 bug：预算框吞掉用户输入

`CostBoard` 那句「stats 变了就同步草稿」没区分用户动过没有。stats 是网络请求，
它晚到时会把用户刚敲的字重置回旧值 —— 「我打进去的 5 自己变回 0」。

它一直以**测试抖动**的形式存在：干净 main 上连跑两次 `vitest run` 就能红一次。
最后用 **ref**（不是 state）做闸：那个晚到的 effect 闭包里读到的是它被创建时的状态，
用 state 挡不住它，ref 写入即生效。
