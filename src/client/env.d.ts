// esbuild 的 css-as-text 插件把样式文件变成「默认导出一段 CSS 文本」的模块。
declare module '*.css' {
  const text: string
  export default text
}
