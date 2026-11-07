// 生成插件市场索引（format 1）。
//
// 为什么自己托管一份：`dsh-plugin-lab/market` 只索引 dsh-plugin-lab 组织下的仓库，
// 我们不在那个组织里，发到 npm 也进不了那份默认索引。而 DSH 的 Discover 支持
// **用户自行添加索引源**（Plugins → Custom plugin indexes → Add index source），
// 所以正确做法是我们自己产出一份 format 1 的 index.json。
//
// source 用 `git` 而不是 `npm`：format 1 的 MarketSource 允许
// `{ type: 'git', url, commit }`，装的时候 pnpm 会解析 `git+https://…#<commit>`。
// 这样别人不需要等我们发 npm 也能一键装，commit 又保证了可复现。
//
// 用法：node scripts/build-market-index.mjs
// 输出：market/index.json（提交进仓库，jsDelivr 直接可读，不用开 Pages）
import { execFileSync } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'))

/** 仓库地址：优先用 package.json 里的，取不到再从 origin 推。 */
function repoUrl() {
  const fromPkg = typeof pkg.repository === 'string' ? pkg.repository : pkg.repository?.url
  if (fromPkg) return fromPkg.replace(/^git\+/, '').replace(/\.git$/, '')
  try {
    const remote = execFileSync('git', ['remote', 'get-url', 'origin'], { cwd: ROOT, encoding: 'utf8' }).trim()
    return remote
      .replace(/^git\+/, '')
      .replace(/^git@([^:]+):/, 'https://$1/')
      .replace(/\.git$/, '')
  } catch {
    return ''
  }
}

/**
 * 索引该指向哪个提交？
 *
 * 不能是「刚提交的 HEAD」——索引文件本身也是提交的一部分，写进 HEAD 之后
 * 那次提交又产生了新的 HEAD，索引永远落后一格（第一版就踩了这个循环）。
 *
 * 所以指向**发布 tag**：tag 指向的提交已经定死，不再随索引更新而移动。
 * 取 tag 的顺序：`v<package.json version>` → 最近一个 tag → HEAD（开发期兜底）。
 */
function indexCommit() {
  const wanted = `v${pkg.version}`
  const tryRev = rev => {
    try {
      return execFileSync('git', ['rev-parse', '--verify', `${rev}^{commit}`], { cwd: ROOT, encoding: 'utf8' })
        .trim()
        .toLowerCase()
    } catch {
      return ''
    }
  }
  const fromTag = tryRev(wanted) || tryRev('v1')
  if (fromTag) return { commit: fromTag, ref: wanted }
  // 没有 tag 时退回 HEAD，并在输出里说明——这样开发期也能生成一份能装的东西
  return { commit: tryRev('HEAD'), ref: 'HEAD' }
}

/** 提交时间（Unix 秒）：format 1 的 publishTimestamp 口径。 */
function commitTimestamp(rev) {
  const raw = execFileSync('git', ['show', '-s', '--format=%ct', rev], { cwd: ROOT, encoding: 'utf8' }).trim()
  return Number(raw) || Math.floor(Date.now() / 1000)
}

const REPO = repoUrl()
if (!REPO) {
  console.error('build-market-index: 找不到仓库地址，先配 package.json 的 repository')
  process.exit(1)
}

const { commit: COMMIT, ref: COMMIT_REF } = indexCommit()
const STAMP = commitTimestamp(COMMIT)

/**
 * 图标：format 1 接受 base64 data URL 或绝对 URL。要控制体积，
 * 这里用相对路径，读取方会按索引 URL 解析成绝对地址。
 */
const ICON = './icon.svg'

const index = {
  format: 1,
  title: { en: 'Imagora Desk', zh: 'Imagora 画布' },
  description: {
    en: 'A curated index hosted by the plugin author. Add it under Plugins → Custom plugin indexes.',
    zh: '插件作者自托管的索引。在「插件 → 自定义插件索引」里添加即可。',
  },
  metadata: {
    categories: {
      ui: { title: { en: 'Interface', zh: '界面' } },
    },
    labels: {
      local: { title: { en: 'Local', zh: '本地' } },
      byok: { title: { en: 'BYOK', zh: '自备密钥' } },
    },
    sortKeys: {},
  },
  plugins: [
    {
      name: pkg.name,
      title: { en: 'Imagora Desk', zh: 'Imagora 自由画布' },
      description: {
        en: "Imagora's free-form canvas inside DSH: prompt cards and images on one infinite canvas where an edge means a reference. Fill in the endpoint and API Key on first open.",
        zh: '把 Imagora 的自由画布搬进 DSH：提示词卡与图片摊在一张无限画布上，连线即参考关系。首次打开填接口地址与 API Key 即可用。',
      },
      icon: ICON,
      author: 'cslkkl',
      homepage: REPO,
      repository: { url: REPO },
      metadata: {
        category: 'ui',
        keywords: Array.isArray(pkg.keywords) ? pkg.keywords.filter(word => typeof word === 'string') : [],
        labels: ['byok'],
        sortKeys: {},
      },
      versions: [
        {
          version: pkg.version,
          publishTimestamp: STAMP,
          source: { type: 'git', url: REPO, commit: COMMIT },
          engines: pkg.engines?.dsh ? { dsh: pkg.engines.dsh } : {},
        },
      ],
    },
  ],
}

const outDir = join(ROOT, 'market')
mkdirSync(outDir, { recursive: true })
const outFile = join(outDir, 'index.json')
writeFileSync(outFile, `${JSON.stringify(index, null, 2)}\n`, 'utf8')

console.log(`[market] ${pkg.name}@${pkg.version} → market/index.json`)
console.log(
  `[market] git source ${REPO}#${COMMIT.slice(0, 10)}（指向 ${COMMIT_REF}，${new Date(STAMP * 1000).toISOString()}）`,
)
