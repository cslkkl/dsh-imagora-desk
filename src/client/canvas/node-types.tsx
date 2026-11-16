// React Flow 的节点类型表：image / prompt / group 三类。
// 与 lib/types.ts 的 WorkflowNode 一一对应，改类型名时两处一起改。
//
// 每个类型都套一层 NodeBoundary：节点数据来自外部（工作流文件 / 恢复快照），
// 一个想不到的渲染异常不该让整页消失。边界包在**节点组件外面**而不是里面 ——
// 组件自己 render 里抛的错，只有它外层的边界才接得住。
import type { ComponentType } from 'react'
import { GroupNode, ImageNode, PromptNode } from '../nodes'
import { NodeBoundary } from './error-boundary'

/**
 * 给节点组件套上错误边界。
 *
 * props 放宽成 `any` 是有意的：三个节点组件的 props 各不相同
 * （`NodeProps<ImageFlowNode>` / `GroupFlowNode` / `PromptFlowNode`），
 * 写成一个具体类型会让另两个对不上。边界的职责只是「转发 props 并在外面兜错」，
 * 不看 props 的内容，所以这里不需要类型精确 —— 精确性由各节点组件自己保证。
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyNode = ComponentType<any>

function withBoundary(Inner: AnyNode) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function Bounded(props: any) {
    return (
      <NodeBoundary nodeId={props?.id}>
        <Inner {...props} />
      </NodeBoundary>
    )
  }
  Bounded.displayName = `Bounded(${Inner.displayName || Inner.name || 'Node'})`
  return Bounded
}

/** 模块级常量，引用恒定（React Flow 对 nodeTypes 做浅比较，引用变了会重挂载全部节点） */
export const NODE_TYPES = {
  image: withBoundary(ImageNode),
  prompt: withBoundary(PromptNode),
  group: withBoundary(GroupNode),
}
