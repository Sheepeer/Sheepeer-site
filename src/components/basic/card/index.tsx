import { ReactNode } from 'react'
import styles from './style.module.scss'

interface Props {
  children: ReactNode
}

const Card = ({ children }: Props) => {
  return (
    <div className={styles['card-root']}>
      {children}
    </div>
  )
}

export default Card