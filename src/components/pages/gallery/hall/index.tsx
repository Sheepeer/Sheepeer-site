import React from 'react'
import styles from './style.module.scss'
import Space from '@/components/basic/space'
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Paint from './paint';
interface Paint {
  url: string,
  width: number,
  // top: number,
  // border: 'single' | 'default'
}

const PAINTINGS: Array<Paint> = [
  {
    url: 'xxx',
    width: 130
  },
  {
    url: 'xxx',
    width: 130
  },
  {
    url: 'xxx',
    width: 130
  }
]

const Hall = () => {
  return (
    <div className={styles['hall']}>
      <div className={styles['light-bar']} />
      <div className={styles['wall__center']}>
        {
          PAINTINGS.map(item => (
            <div key={item.url} className={styles['paint-area']}>
              <div className={styles['light']}>
                <div className={styles['light-line']}></div>
              </div>
              <Paint/>
              <div className={styles['card']}>

              </div>
            </div>
          ))
        }
      </div>

      <Space className={styles['direct-btns']}>
        <div className={styles['left']}>
          <ChevronLeft className={styles['icon']} />
        </div>
        <div className={styles['right']}>
          <ChevronRight className={styles['icon']} />
        </div>
      </Space>
    </div>
  )
}

export default Hall