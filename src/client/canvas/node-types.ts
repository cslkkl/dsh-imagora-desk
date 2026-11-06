// React Flow 的节点类型表：image / prompt / group 三类。
// 与 lib/types.ts 的 WorkflowNode 一一对应，改类型名时两处一起改。
import { GroupNode, ImageNode, PromptNode } from '../nodes'

export const NODE_TYPES = {
  image: ImageNode,
  prompt: PromptNode,
  group: GroupNode,
}
