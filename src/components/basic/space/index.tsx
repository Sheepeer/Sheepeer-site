import { ReactNode } from 'react'
import styles from './style.module.scss'

interface Props {
  children: ReactNode | Array<ReactNode>
}

const Space = ({children}: Props) => {
  return (
    <div className={styles['space']}>{children}</div>
  )
}

export default Space