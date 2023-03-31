import React,{ReactNode} from 'react'
import styles from './style.module.scss'
import { TagColor } from '@/components/basic/tag'
import classNames from 'classnames'

interface Props {
  children: ReactNode
  bgColor: 'dark' | 'light'
}

const DisplayBlock = ({ children, bgColor }: Props) => {
  return (
    <div className={classNames(styles['root'], styles[`root-${bgColor}`])}>
      <div className={styles['light-bar']} />
      <div className={styles['wall__center']}>
        {children}
      </div>
    </div>
  )
}

export default DisplayBlock