import React from 'react'
import styles from './style.module.scss'

const Hall = () => {
  return (
    <div className={styles['hall']}>
      <div className={styles['light-bar']}>
        <div className={styles['paint-area']}>
          <div className={styles['light']}>
            <div></div>
          </div>
          <div className={styles['paint']}>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hall