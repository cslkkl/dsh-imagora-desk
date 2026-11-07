// 图片进出画布：上传（拖拽 / 粘贴 / 文件选择）、换一张、打开大图。
// 只负责「把文件变成资产节点」与「把节点指向新资产」，生成与保存不在这里。
import { useCallback, type MutableRefObject } from 'react'
import type { Edge } from '@xyflow/react'
import { uploadImage } from '../api'
import { buildImageNode, isImageFile } from '../lib/workflow'
import type { WorkflowNode } from '../lib/types'
import { errMessage } from '../lib/format'

interface Options {
  nodesRef: MutableRefObject<WorkflowNode[]>
  setNodes: (updater: (current: WorkflowNode[]) => WorkflowNode[]) => void
  createPosition: () => { x: number; y: number }
  log: (line: string) => void
  flash: (line: string) => void
  setPreview: (preview: { url: string; name: string; path?: string } | null) => void
}

export function useCanvasImages({ nodesRef, setNodes, createPosition, log, flash, setPreview }: Options) {
  /** 批量落图：一张一张上传，失败只记日志不中断其余文件。 */
  const addImages = useCallback(
    async (files: File[], position: { x: number; y: number }) => {
      const images = files.filter(isImageFile)
      if (!images.length) {
        flash('只认图片文件')
        return
      }
      for (const [index, file] of images.entries()) {
        try {
          log(`上传 ${file.name || '剪贴板图片'} …`)
          const entry = await uploadImage(file, file.name || `pasted-${Date.now()}.png`)
          const node = buildImageNode(
            {
              ...entry,
              relPath: entry.name,
              createdAt: entry.createdAt ?? new Date().toISOString(),
            },
            { x: position.x + index * 172, y: position.y },
          )
          setNodes(current => [...current, node])
          log(`已添加 ${entry.name}`)
        } catch (error) {
          log(`上传失败：${errMessage(error)}`)
        }
      }
    },
    [setNodes, log, flash],
  )

  /** 拖进画布：落点用屏幕坐标换算，换算失败时退回「视口中心 + 阶梯错开」。 */
  const dropFiles = useCallback(
    (
      files: File[],
      screen: { x: number; y: number } | null,
      toFlow: (point: { x: number; y: number }) => { x: number; y: number },
    ) => {
      const position = screen ? toFlow(screen) : createPosition()
      void addImages(files, position)
    },
    [addImages, createPosition],
  )

  /** 换一张：只换指向的资产，节点 id 与位置不动，连线不受影响。 */
  const replaceImage = useCallback(
    (nodeId: string) => {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = 'image/*'
      input.onchange = async () => {
        const file = input.files?.[0]
        if (!file) return
        try {
          const entry = await uploadImage(file, file.name)
          setNodes(current =>
            current.map(node =>
              node.id === nodeId && node.type === 'image'
                ? {
                    ...node,
                    data: {
                      ...node.data,
                      registryId: entry.id,
                      name: entry.name,
                      url: entry.url,
                      size: entry.size,
                      ext: entry.ext,
                      absPath: entry.absPath,
                      missing: false,
                    },
                  }
                : node,
            ),
          )
          log(`已替换为 ${entry.name}`)
        } catch (error) {
          log(`替换失败：${errMessage(error)}`)
        }
      }
      input.click()
    },
    [setNodes, log],
  )

  const openPreview = useCallback(
    (nodeId: string) => {
      const node = nodesRef.current.find(row => row.id === nodeId)
      if (!node || node.type !== 'image' || !node.data.url) return
      // absPath 是本机绝对路径：预览里的「复制路径」用它；缺失时那个按钮不渲染
      setPreview({ url: node.data.url, name: node.data.name, path: node.data.absPath })
    },
    [nodesRef, setPreview],
  )

  /**
   * 把一段 data URL（裁剪 / 切分 / 放大的产物）落成资产并加节点。
   * 走的是和上传同一条路：先转成 Blob 存进 assets，再建节点——
   * 这样它和别的图一样有 registry 记录、能在生成历史里找回、也能被 @ 引用。
   */
  const addDataUrl = useCallback(
    async (dataUrl: string, name: string, position?: { x: number; y: number }) => {
      const blob = await fetch(dataUrl).then(res => res.blob())
      const fileName = name.endsWith('.png') ? name : `${name}.png`
      const entry = await uploadImage(blob, fileName)
      const at = position ?? createPosition()
      const node = buildImageNode(
        { ...entry, relPath: entry.name, createdAt: entry.createdAt ?? new Date().toISOString() },
        at,
      )
      setNodes(current => [...current, node])
      log(`已添加 ${entry.name}`)
      return entry
    },
    [setNodes, log, createPosition],
  )

  return { addImages, dropFiles, replaceImage, openPreview, addDataUrl }
}

/** 连线：source→target 合法时补一条边（id 固定，重复连接不会叠多条）。 */
export function connectEdge(setEdges: (updater: (current: Edge[]) => Edge[]) => void) {
  return (connection: { source?: string | null; target?: string | null }) => {
    const source = String(connection.source ?? '')
    const target = String(connection.target ?? '')
    if (!source || !target) return
    setEdges(current => {
      const id = `${source}->${target}`
      if (current.some(edge => edge.id === id)) return current
      return [...current, { id, source, target, animated: true }]
    })
  }
}
