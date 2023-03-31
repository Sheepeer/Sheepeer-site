import React from 'react'
import styles from './style.module.scss'
import Space from '@/components/basic/space'
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Paint from './paint';
import Introduce from './introduce';
import DisplayBlock from './display-block';
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
      <Introduce title='part1 blank'
        content='this part is not finished yet'
        bgColor='green'
      />
      <DisplayBlock bgColor='dark'>
        {
          PAINTINGS.map(item => (
            <div key={item.url} className={styles['paint-area']}>
              <div className={styles['light']}>
                <div className={styles['light-line']}></div>
              </div>
              <div className={styles['_light']}/>
              <Paint />
              <div className={styles['card']}>

              </div>
            </div>
          ))
        }
      </DisplayBlock>

      <Introduce title='part2 blank'
        content='this part is not finished yet'
        bgColor='red'
      />
      <DisplayBlock bgColor='light'>
        {
          PAINTINGS.map(item => (
            <div key={item.url} className={styles['paint-area']}>
              <div className={styles['light']}>
                <div className={styles['light-line']}></div>
              </div>
              <div className={styles['_light']}/>
              <Paint />
              <div className={styles['card']}>

              </div>
            </div>
          ))
        }
      </DisplayBlock>

      <Space className={styles['direct-btns']}>
        <div>Prev Part</div>
        <div>
          <ChevronLeft className={styles['icon']} />
        </div>
        <div>
          <ChevronRight className={styles['icon']} />
        </div>
        <div>Next Part</div>
      </Space>
    </div>
  )
}

export default Hall