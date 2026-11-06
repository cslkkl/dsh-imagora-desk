# 第三方声明

本仓库的 `src/client/lib/` 目录是从 [Imagora](https://github.com/Cogniform/imagora)
的前端源码移植而来的纯逻辑模块，按 MIT 许可使用。原项目版权归其作者所有。

移植的文件（保持原实现与注释，仅去掉与画布无关的依赖）：

```
src/client/lib/types.ts
src/client/lib/workflow.ts
src/client/lib/layout.ts
src/client/lib/canvasGeometry.ts
src/client/lib/promptRefs.ts
src/client/lib/promptImportFormat.ts
src/client/lib/edgeStyle.ts
src/client/lib/minimapColor.ts
src/client/lib/format.ts
src/client/lib/recovery.ts
src/client/lib/canvasHistory.ts
src/client/lib/snapGuide.ts
src/client/lib/snapDrag.ts
src/client/lib/customValue.ts
```

## Imagora

```
MIT License

Copyright (c) Cogniform

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## React Flow（`@xyflow/react`）

画布的交互层由 [React Flow](https://github.com/xyflow/xyflow) 提供，MIT 许可。
它以打包形式进入 `dist/client.js`，随插件一起分发；其自带样式在运行时注入。
