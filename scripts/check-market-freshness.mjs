// pre-commit：market/index.json 必须指向「这次要提交的代码」，否则别人从市场装到的是旧提交。
//
// 做法：先按当前暂存内容重新生成（HEAD 是父提交，commit 字段会是父提交的 sha，
// 这在语义上不对），所以这里不重生成，只**校验**：
//   - 索引里的 version 与 package.json 一致；
//   - 索引里的 commit 是仓库里真实存在的提交；
//   - 如果本次提交改了 src/host 或 package.json 却没更新索引，就提示重跑 market:index。
//
// 为什么不在钩子里自动生成：索引里要写的是「这次提交的 sha」，而提交时的 HEAD
// 还是父提交——自动写进去必然是错的。发版流程是「先 commit，再 market:index + amend」，
// 见 docs/PUBLISHING.md。
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'))
const index = JSON.parse(readFileSync(join(ROOT, 'market', 'index.json'), 'utf8'))

const version = index.plugins?.[0]?.versions?.[0]
if (!version) {
  console.error('FAIL market/index.json 里没有版本记录')
  process.exit(1)
}

if (version.version !== pkg.version) {
  console.error(`FAIL 索引版本 ${version.version} ≠ package.json ${pkg.version}，跑 pnpm run market:index`)
  process.exit(1)
}

const commit = version.source?.commit ?? ''
if (!/^[0-9a-f]{40}$/.test(commit)) {
  console.error(`FAIL 索引里的 commit 不是 40 位小写 hex：${commit}`)
  process.exit(1)
}

// commit 必须是仓库里真实存在的提交（不能是手写的占位）
try {
  execFileSync('git', ['cat-file', '-e', `${commit}^{commit}`], { cwd: ROOT, stdio: 'ignore' })
} catch {
  console.error(`FAIL 索引里的 commit ${commit.slice(0, 10)} 不存在于本仓库`)
  process.exit(1)
}

// 改了会影响安装内容的文件却没动索引 → 提示
const staged = execFileSync('git', ['diff', '--cached', '--name-only'], { cwd: ROOT, encoding: 'utf8' })
  .split('\n')
  .filter(Boolean)
const touching = staged.filter(
  file =>
    file === 'package.json' ||
    file === 'cordis.patch.yml' ||
    file === 'dist/client.js' ||
    file.startsWith('src/host/') ||
    file.startsWith('src/client/'),
)
const indexStaged = staged.includes('market/index.json')
if (touching.length && !indexStaged) {
  console.warn(`WARN 本次改动 ${touching.length} 个运行时文件但没更新 market/index.json`)
  console.warn('     发布前记得：git commit → pnpm run market:index → git commit --amend')
}

console.log(`PASS market/index.json 指向 ${commit.slice(0, 10)}（${pkg.name}@${version.version}）`)
