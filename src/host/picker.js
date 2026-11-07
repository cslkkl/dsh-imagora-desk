// 原生目录选择：在宿主机上弹一个系统文件夹对话框，把绝对值返回给页面。
//
// 为什么只能这么做：浏览器侧的 <input webkitdirectory> 拿不到绝对路径（只给相对名），
// 而这里要的正是 `D:\ProjectSomething\imagora` 这种绝对路径去当设置值。
// 宿主是普通 Node 进程，跑在用户的桌面会话里，所以由它调系统对话框是最直接的路。
//
// Windows 用 Windows PowerShell 5.1（powershell.exe）+ .NET Framework 的
// Windows.Forms.FolderBrowserDialog：这个程序集在 5.1 上恒可用，不用装模块。
// 非 Windows 直接回 unsupported —— 宁可明确说不支持，也不要静默返回一个假路径。
import { execFile } from 'node:child_process'

/** 对话框脚本：对话框要有 owner 才不会被其它窗口压在后面（隐形 topmost 的 Form）。 */
const WINDOWS_SCRIPT = `
Add-Type -AssemblyName System.Windows.Forms | Out-Null
$owner = New-Object System.Windows.Forms.Form
$owner.TopMost = $true
$owner.ShowInTaskbar = $false
$owner.Opacity = 0
$owner.Width = 1
$owner.Height = 1
$owner.StartPosition = 'CenterScreen'
$owner.Show()
$dialog = New-Object System.Windows.Forms.FolderBrowserDialog
$dialog.Description = $env:DSH_PICK_TITLE
$dialog.ShowNewFolderButton = $true
if ($dialog.SelectedPath) { $dialog.SelectedPath = $env:DSH_PICK_START }
$result = $dialog.ShowDialog($owner)
if ($result -eq [System.Windows.Forms.DialogResult]::OK) { [Console]::Out.Write($dialog.SelectedPath) }
$owner.Close()
`

/**
 * 弹系统文件夹选择框。用户取消时返回 `{ ok: false, reason: 'cancelled' }`。
 * @param {{title?: string, startAt?: string, timeoutMs?: number}} options
 * @returns {Promise<{ok: true, path: string} | {ok: false, reason: string, message?: string}>}
 */
export function pickDirectory(options = {}) {
  const { title = '选择文件夹', startAt = '', timeoutMs = 300000 } = options
  if (process.platform !== 'win32') {
    return Promise.resolve({ ok: false, reason: 'unsupported' })
  }
  return new Promise(resolve => {
    execFile(
      'powershell.exe',
      ['-NoProfile', '-NonInteractive', '-STA', '-Command', WINDOWS_SCRIPT],
      {
        env: { ...process.env, DSH_PICK_TITLE: title, DSH_PICK_START: startAt },
        timeout: timeoutMs,
        windowsHide: true,
        // 对话框在桌面上，stderr 只用来判定失败原因
        maxBuffer: 1024 * 1024,
      },
      (error, stdout) => {
        if (error) {
          // timeout 会被 execFile 杀掉，这里与真正的失败分开报
          const killed = error.killed || error.signal
          resolve({ ok: false, reason: killed ? 'timeout' : 'failed', message: error.message })
          return
        }
        const picked = String(stdout || '').trim()
        resolve(picked ? { ok: true, path: picked } : { ok: false, reason: 'cancelled' })
      },
    )
  })
}
