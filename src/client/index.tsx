// client 半端入口：向侧边栏与主区域注册「imagora」面板。
// 侧边栏那一行由 sidebar.panellist 渲染；点开后主区域用同名 key 渲染画布。
import { CanvasApp } from './canvas'
import { Icon } from './icons'
import xyflowCss from '@xyflow/react/dist/style.css'

export const inject = ['slots']

const KEY = 'imagora'

// 验收台需要拿到画布组件本体；正式运行时这里只是多挂一个全局引用，不参与渲染。
;(globalThis as any).__dshImagoraCanvas = CanvasApp

function PanelIcon({ size = 16 }: { size?: number; active?: boolean }) {
  return <Icon name="layers" size={size} />
}

export function apply(ctx: any) {
  ctx.effect(() => {
    const style = document.createElement('style')
    style.setAttribute('data-dsh-imagora-desk', 'xyflow')
    style.textContent = xyflowCss
    document.head.appendChild(style)
    return () => style.remove()
  }, 'dsh-imagora-desk: xyflow 基础样式')

  ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: KEY }, CanvasApp))

  ctx.effect(() => ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
    name: 'sidebar.panellist',
    id: KEY,
    order: 6,
    label: () => '自由画布',
  }, PanelIcon)), 'dsh-imagora-desk: 侧边栏入口')
}
