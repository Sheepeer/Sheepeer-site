import React from 'react'
import styles from './style.module.scss'
import { TagColor } from '@/components/basic/tag'
import classNames from 'classnames'

interface Props {
  title: string,
  content: string,
  bgColor: TagColor
}

const Introduce = ({ title, content, bgColor }: Props) => {
  return (
    <div className={classNames(styles['root'], styles[`root-${bgColor}`])}>
      <div className={styles['title']}>{title}</div>
      <div className={styles['content']}>{content}</div>
    </div>
  )
}

export default Introduce