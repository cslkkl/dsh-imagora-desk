// 内联图标：不引入图标库，只把画布用到的几个画出来。
import type { CSSProperties } from 'react'

const PATHS: Record<string, string> = {
  plus: 'M12 5v14M5 12h14',
  image: 'M4 5h16v14H4zM4 15l4.5-4.5 3 3L15 10l5 5',
  play: 'M8 5.5v13l11-6.5z',
  stop: 'M7 7h10v10H7z',
  trash: 'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',
  eye: 'M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z',
  link: 'M9.5 14.5l5-5M8 12l-2 2a3.5 3.5 0 005 5l2-2M16 12l2-2a3.5 3.5 0 00-5-5l-2 2',
  save: 'M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6',
  folder: 'M3 6h6l2 2h10v11H3z',
  clock: 'M12 7v5l3.5 2M12 3a9 9 0 100 18 9 9 0 000-18z',
  maximize: 'M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5',
  map: 'M9 4l6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v14M15 6v14',
  help: 'M12 17h.01M9.2 9a2.8 2.8 0 015.6.6c0 1.9-2.8 2.2-2.8 3.9',
  copy: 'M8 8h11v11H8zM5 16V5h11',
  close: 'M6 6l12 12M18 6L6 18',
  wand: 'M5 19l9-9M14 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z',
  layers: 'M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4',
}

export function Icon({ name, size = 14, style }: { name: keyof typeof PATHS | string; size?: number; style?: CSSProperties }) {
  const d = PATHS[name] || PATHS.help
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: 'block', flex: 'none', ...style }}
    >
      <path d={d} />
    </svg>
  )
}
