import { ReactNode } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'

interface Props {
  children: ReactNode | Array<ReactNode>
  className?: string
}

const Space = ({ children, className }: Props) => {
  return (
    <div className={classNames(styles['space'], className)}>{children}</div>
  )
}

export default Space