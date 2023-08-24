import './badge.css'

interface Props {
  children: React.ReactNode
  style: React.CSSProperties
}

export function Badge ({ children, style }: Props) {
  return (
    <span className='badge' style={style}>
      {children}
    </span>
  )
}
