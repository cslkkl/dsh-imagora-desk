// dsh-imagora-desk host 半片：/imagora/* 接口、画布资产、工作流，以及真正去打上游的生图请求。
import { homedir } from 'node:os'
import { join } from 'node:path'
import { loadImagoraConfig, readSettings, writeSettings } from './config.js'
import { clientErrorBody, publicErrorBody } from './errors.js'
import { createRouter } from './routes.js'
import { Store } from './store.js'
import { TaskPool } from './tasks.js'

// 状态目录：默认 ~/.dsh/imagora；测试可用 DSH_IMAGORA_HOME 指到临时目录，别脏了真实画布。
const ROOT = process.env.DSH_IMAGORA_HOME || join(homedir(), '.dsh', 'imagora')

export const name = 'dsh-imagora-desk'

/**
 * Web 服务不替插件路由鉴权，每个请求自己走一遍 Host/Origin 与登录凭证检查；
 * 拿不到鉴权服务时一律拒绝。
 * @param {object} ctx - Cordis 上下文。
 * @param {{headers: object}} req - HTTP 请求。
 * @returns {number|undefined} 拒绝时的状态码；可以继续时为 undefined。
 */
export function requestRejection(ctx, req) {
  const connection = ctx.get('connection')
  if (typeof connection?.requestRejection !== 'function') return 403
  return connection.requestRejection({ headers: req.headers })
}

export default {
  inject: ['webServer', 'connection'],
  apply(ctx) {
    const store = new Store(ROOT)
    let settings = readSettings(ROOT)
    // 一开始就按设置里的 imagora 目录切过去：这样打开插件看到的就是原版那份
    // 工作流 / 生成历史，不是空列表（用户反馈的正是「点开里面什么都没有」）。
    store.setSharedRoot(settings.imagoraRoot)

    const getConfig = () => loadImagoraConfig(settings)
    const getSettings = () => settings
    const applySettings = patch => {
      settings = writeSettings(ROOT, patch)
      // 目录指针可能刚被改过：立刻同步给 store，否则要重启插件才生效
      store.setSharedRoot(settings.imagoraRoot)
      return settings
    }
    const pool = new TaskPool({ getConfig, store, concurrency: 3 })
    const route = createRouter({ store, pool, getConfig, getSettings, applySettings })

    const ready = store.init().catch(error => {
      ctx.logger?.warn?.(`dsh-imagora-desk: 初始化目录失败 ${error.message}`)
    })

    ctx.effect(
      () =>
        ctx.webServer.register({
          kind: 'prefix',
          path: '/imagora',
          handler: async (req, res) => {
            try {
              const rejection = requestRejection(ctx, req)
              if (rejection) {
                res.statusCode = rejection
                res.setHeader('content-type', 'application/json; charset=utf-8')
                res.end(JSON.stringify({ error: '未授权' }))
                return
              }
              await ready
              await route(req, res)
            } catch (error) {
              if (res.headersSent) {
                res.end()
                return
              }
              const status = Number(error?.status) || 500
              // 4xx 是我们自己 throw 的、文案写给用户看，原样返回；
              // 5xx 一律脱敏 —— Node 的 fs 错误 message 里带着绝对路径，
              // 回给前端等于把本机用户名与目录结构交出去（见 errors.js）。
              const body = status >= 500 ? publicErrorBody(error) : clientErrorBody(error)
              if (status >= 500) {
                // 完整信息只进宿主日志：排查靠它，浏览器不该看到
                ctx.logger?.error?.(
                  `dsh-imagora-desk: ${req.method} ${req.url} → ${status} ${error?.stack || error?.message || error}`,
                )
              }
              res.statusCode = status
              res.setHeader('content-type', 'application/json; charset=utf-8')
              res.end(JSON.stringify(body))
            }
          },
        }),
      'dsh-imagora-desk: /imagora routes',
    )
  },
}
