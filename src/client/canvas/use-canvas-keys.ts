// 画布键盘：与 Imagora 的按键保持一致。
//
//   Ctrl/Cmd + A      全选节点
//   Ctrl/Cmd + Z      撤销
//   Ctrl/Cmd + Y      恢复
//   Ctrl/Cmd + Shift+Z 恢复（与 Imagora 同义）
//   Ctrl/Cmd + S      保存工作流
//   Delete            删除选中节点；没有选中节点时删除选中的连线
//   Backspace         同上（连线没有退场动画，退格更顺手）
//   Escape            关掉大图预览
//
// 输入框里的一切按键都交回浏览器原生行为：在提示词里按 Ctrl+A 应该是「全选文字」。
import { useEffect, type MutableRefObject } from 'react'
import type { Edge } from '@xyflow/react'
import type { WorkflowEdge, WorkflowNode } from '../lib/types'

export interface CanvasKeysOptions {
  nodesRef: MutableRefObject<WorkflowNode[]>
  edgesRef: MutableRefObject<Edge[]>
  setNodes: (updater: (current: WorkflowNode[]) => WorkflowNode[]) => void
  setEdges: (updater: (current: Edge[]) => Edge[]) => void
  selectedIds: string[]
  selectedEdgeId: string | null
  onDeleteNodes: (ids: string[]) => void
  onDeleteEdge: (id: string) => void
  onUndo: () => void
  onRestore: () => void
  onSave: () => void
  onClosePreview: () => void
  hasPreview: boolean
}

/** 焦点在输入类元素上时，快捷键一律不接管。 */
function isEditable(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  return target.closest('input, textarea, select, [contenteditable]') !== null
}

export function useCanvasKeys(options: CanvasKeysOptions) {
  const {
    nodesRef,
    selectedIds,
    selectedEdgeId,
    onDeleteNodes,
    onDeleteEdge,
    onUndo,
    onRestore,
    onSave,
    onClosePreview,
    hasPreview,
  } = options

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && hasPreview) {
        onClosePreview()
        return
      }
      if (isEditable(event.target)) return
      const mod = event.ctrlKey || event.metaKey
      const key = event.key.toLowerCase()

      if (mod && key === 'a') {
        event.preventDefault()
        const total = nodesRef.current.length
        if (!total) return
        options.setNodes(current =>
          current.some(node => !node.selected) ? current.map(node => ({ ...node, selected: true })) : current,
        )
        return
      }
      if (mod && key === 'z') {
        event.preventDefault()
        if (event.shiftKey) onRestore()
        else onUndo()
        return
      }
      if (mod && key === 'y') {
        event.preventDefault()
        onRestore()
        return
      }
      if (mod && key === 's') {
        event.preventDefault()
        onSave()
        return
      }
      // 删除优先级：有选中节点就删节点，否则删那一条选中的连线，两者互斥
      if (event.key === 'Delete' && selectedIds.length) {
        event.preventDefault()
        onDeleteNodes(selectedIds)
        return
      }
      if ((event.key === 'Delete' || event.key === 'Backspace') && selectedEdgeId) {
        event.preventDefault()
        onDeleteEdge(selectedEdgeId)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [
    nodesRef,
    selectedIds,
    selectedEdgeId,
    onDeleteNodes,
    onDeleteEdge,
    onUndo,
    onRestore,
    onSave,
    onClosePreview,
    hasPreview,
    options,
  ])
}

export type { WorkflowEdge, WorkflowNode }
