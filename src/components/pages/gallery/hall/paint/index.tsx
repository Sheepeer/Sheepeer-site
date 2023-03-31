import React, { ReactNode } from 'react'
import styles from './style.module.scss'

interface Props {
  // children: ReactNode
}

const Paint = () => {
  return (
    <div className={styles['root']}>
      <div className={styles['paint']}></div>
    </div>
  )
}

export default Paint