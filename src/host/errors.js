// 异常 → 回给浏览器的响应体。
//
// 为什么要有这个模块：Node 的文件系统错误，`message` 里**自带绝对路径**：
//   ENOENT: no such file or directory, open 'C:\Users\<用户名>\AppData\Roaming\...\config.json'
// 原样回给前端等于把本机用户名与目录结构交出去 —— 它会出现在浏览器网络面板、
// 用户截图、录屏和工单里。
//
// 对照同包的 /file 路由：那里失败只回 `{ error: '图片不存在' }`，从不带路径。
// 这条规矩要覆盖到**所有** 5xx，不能只照顾自己手写文案的那几处。
//
// 保留可诊断性的做法：只回**错误码**（ENOENT / EACCES / ENOTDIR…），
// 完整 message 与堆栈进宿主日志（见 index.js 的 catch）。
// 错误码足够判断「是没权限还是文件不在」，而它不含任何路径。

/** 只放行真正的 errno 风格错误码，避免把任意字符串当码回显。 */
function errnoCode(error) {
  const code = error && typeof error.code === 'string' ? error.code : ''
  return /^E[A-Z]{2,}$/.test(code) ? code : ''
}

/**
 * 5xx 的响应体：一句人话 + 错误码，**不含路径、不含原始 message**。
 *
 * @param {unknown} error 抛出来的东西（不保证是 Error）
 * @returns {{ error: string }} 可直接 JSON.stringify 的对象
 */
export function publicErrorBody(error) {
  const code = errnoCode(error)
  return { error: code ? `服务端内部错误（${code}）` : '服务端内部错误' }
}

/**
 * 4xx 的响应体：这类是我们自己 `throw` 出来的、文案本来就写给用户看
 * （「提示词为空」「请求不是有效的 JSON」「内容太大」），原样返回。
 *
 * 兜底给一句通用的，避免 `error.message` 为空时前端显示空白。
 */
export function clientErrorBody(error) {
  const message = error && typeof error.message === 'string' ? error.message.trim() : ''
  return { error: message || '请求不合法' }
}
