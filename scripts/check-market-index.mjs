// 用**官方校验器**验 market/index.json 是不是合法的 format 1。
//
// 不能用「看着像」来验：format 1 的规则（版本降序、git commit 必须 40 位小写 hex、
// source 只能是 npm 或 git、metadata 里引用的 category/label 必须在索引里声明过）
// 全都在 @deepseek-ai/dsh-plugin-market-index 的 parseMarketIndex 里，
// 自己写一份等于验证自己的理解，不是验证格式。
//
// 校验器来自 dsh 安装目录；本仓库不自带它对 dsh 的依赖，所以按需解析路径。
import { execFileSync } from 'node:child_process'
import { createRequire } from 'node:module'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const require = createRequire(import.meta.url)

/** 按顺序试几个可能装着 dsh-plugin-market-index 的位置。 */
function loadValidator() {
  const candidates = ['@deepseek-ai/dsh-plugin-market-index']
  // 本机全局装的 dsh 里带着校验器：直接按它的安装位置找，不用本项目装依赖
  if (process.env.DSH_MARKET_INDEX_ROOT) candidates.push(process.env.DSH_MARKET_INDEX_ROOT)
  try {
    // Windows 上 npm 是 .cmd，不走 shell 会 ENOENT
    const globalRoot = execFileSync('npm', ['root', '-g'], { encoding: 'utf8', shell: true }).trim()
    if (globalRoot) {
      candidates.push(
        join(globalRoot, '@deepseek-ai', 'dsh', 'node_modules', '@deepseek-ai', 'dsh-plugin-market-index'),
      )
    }
  } catch {
    // 没有 npm 就只试前两个
  }
  candidates.push(join(ROOT, 'node_modules', '@deepseek-ai', 'dsh-plugin-market-index'))

  for (const id of candidates) {
    try {
      return require(id)
    } catch {
      // 继续试下一个
    }
  }
  return null
}

const validator = loadValidator()
if (!validator || typeof validator.parseMarketIndex !== 'function') {
  console.log('SKIP 找不到 @deepseek-ai/dsh-plugin-market-index，跳过官方校验')
  console.log('     （装了 dsh 的机器上会自动跑；CI 里没有 dsh 就跳过）')
  process.exit(0)
}

const file = join(ROOT, 'market', 'index.json')
const raw = readFileSync(file, 'utf8')

let parsed
try {
  parsed = JSON.parse(raw)
} catch (error) {
  console.error(`FAIL market/index.json 不是合法 JSON：${error.message}`)
  process.exit(1)
}

const indexUrl = 'https://cdn.jsdelivr.net/gh/cslkkl/dsh-imagora-desk@main/market/index.json'

try {
  const market = validator.parseMarketIndex(parsed, indexUrl)
  const plugin = market.plugins[0]
  const version = plugin?.versions?.[0]
  const target = version ? validator.marketInstallTarget(plugin.name, version) : null

  console.log(`PASS 官方校验通过：format ${market.format}，${market.plugins.length} 个插件`)
  console.log(`     ${plugin.name}@${version.version}`)
  console.log(
    `     source: ${version.source.type} ${version.source.url ?? ''}#${(version.source.commit ?? '').slice(0, 10)}`,
  )
  console.log(`     安装参数: ${target?.spec ?? '(无)'}`)

  // 版本号必须与 package.json 一致，否则别人装到的是旧提交
  const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'))
  if (pkg.version !== version.version) {
    console.error(`FAIL package.json 版本 ${pkg.version} 与索引里的 ${version.version} 不一致，重跑 build-market-index`)
    process.exit(1)
  }
  console.log(`PASS 版本号与 package.json 一致：${pkg.version}`)
} catch (error) {
  console.error(`FAIL 官方校验不通过：${error.message}`)
  if (error.path) console.error(`     位置：${error.path}`)
  process.exit(1)
}
