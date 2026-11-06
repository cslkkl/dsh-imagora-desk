// 文本卫生检查：行尾空白、文件末尾换行、行尾风格（LF）。
// 只读不改，供本地钩子与 CI 复用；需要自动修时用 prettier --write。
//
// 用法：node scripts/check-text-hygiene.mjs [--fix]
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'

const fix = process.argv.includes('--fix')
const SKIP = [/^dist\//, /^harness\/dist\//, /^node_modules\//, /^pnpm-lock\.yaml$/, /\.png$/, /\.jpg$/, /\.ico$/]

const files = execFileSync('git', ['ls-files'], { encoding: 'utf8' })
  .split('\n')
  .map(line => line.trim())
  .filter(Boolean)
  .filter(file => !SKIP.some(pattern => pattern.test(file)))

const problems = []

for (const file of files) {
  let buffer
  try {
    buffer = readFileSync(file)
  } catch {
    continue
  }
  // 二进制（含 NUL）与 UTF-16 跳过
  if (buffer.includes(0)) continue
  const text = buffer.toString('utf8')
  if (text.includes('\uFFFD')) continue

  const original = text
  let next = text

  if (next.includes('\r\n') || next.includes('\r')) {
    problems.push(`${file}: 含 CRLF / CR 行尾`)
    next = next.replace(/\r\n?/g, '\n')
  }

  const trimmedLines = next
    .split('\n')
    .map(line => line.replace(/[ \t]+$/, ''))
    .join('\n')
  if (trimmedLines !== next) {
    problems.push(`${file}: 存在行尾空白`)
    next = trimmedLines
  }

  if (next.length && !next.endsWith('\n')) {
    problems.push(`${file}: 文件末尾缺少换行`)
    next = `${next}\n`
  }

  if (fix && next !== original) writeFileSync(file, next, 'utf8')
}

if (!problems.length) {
  console.log(`文本卫生检查通过（${files.length} 个文件）`)
  process.exit(0)
}

for (const line of problems) console.error(`${fix ? 'FIXED' : 'FAIL '} ${line}`)
if (!fix) {
  console.error(`\n${problems.length} 处问题；跑 node scripts/check-text-hygiene.mjs --fix 可自动修复`)
  process.exit(1)
}
console.log(`\n已修复 ${problems.length} 处`)
