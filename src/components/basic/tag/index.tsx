import classNames from 'classnames'
import styles from './style.module.scss'

export type TagColor = 'blue' | 'green' | 'orange' | 'yellow' | 'red'
export const COLOR_MAP: {[key:string]:string} = {
  'blue': '#588c7e',
  'green': '#acbc8a',
  'yellow': '#ecd189',
  'orange': '#e99469',
  'red': '#bc5952'
}
export type TagProps = {
  id: number,
  name: string,
  color: TagColor
}
interface Props {
  children: string
  color: TagColor
  onClick?: (value: string) => void
  isChoosed?: boolean
}

const Tag = ({ children, color, onClick, isChoosed = false }: Props) => {
  return (
    <p
      className={classNames(
        styles['tag'],
        styles[`tag-${color}`],
        { [styles['tag-clickable']]: !!onClick },
        { [styles['tag-choosed']]: isChoosed }
      )}
      onClick={() => onClick?.(children)}
    >{children}</p>
  )
}

export default Tag