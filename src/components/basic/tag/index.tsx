import classNames from 'classnames'
import styles from './style.module.scss'

interface Props {
  children: string 
  onClick?: (value: string) => void
  isChoosed?: boolean
}

const Tag = ({ children, onClick, isChoosed = false }: Props) => {
  return (
    <div
      className={classNames(
        styles['tag'],
        { [styles['tag-clickable']]: !!onClick },
        { [styles['tag-choosed']]: isChoosed }
      )}
      onClick={() => onClick?.(children)}
    >{children}</div>
  )
}

export default Tag