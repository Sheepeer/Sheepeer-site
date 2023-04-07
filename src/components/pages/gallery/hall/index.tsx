import React, { useEffect, useRef, useState } from 'react'
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
  const hall = useRef<HTMLElement | null>(null)
  const [marginVal, setMarginVal] = useState<number>(0)
  useEffect(() => {
    if (!hall.current) {
      hall.current = window.document.getElementById('hall')
    }
    if (hall.current) {
      hall.current.style.marginLeft = `${marginVal}px`
    }
  }, [marginVal])

  const walkBack = () => {
    if (marginVal < 0) {
      setMarginVal(v => v + 200)
    }
  }
  const walkForword = () => {
    setMarginVal(v => v - 200)
  }
  const walkPrevPart = () => {

  }
  const walkNextPart = () => {

  }

  return (
    <div className={styles['hall']} id='hall'>
      <Introduce title='part1 blank'
        content='this part is not finished yet'
        bgColor='green'
      />
      <DisplayBlock bgColor='dark'>
        {
          PAINTINGS.map((item, index) => (
            <div key={item.url} className={styles['paint-area']}>
              <div className={styles['light']}>
                <div className={styles['light-line']}></div>
              </div>
              <div className={styles['_light']} />
              <Paint code={index} />
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
          PAINTINGS.map((item, index) => (
            <div key={item.url} className={styles['paint-area']}>
              <div className={styles['light']}>
                <div className={styles['light-line']}></div>
              </div>
              <div className={styles['_light']} />
              <Paint code={index} />
            </div>
          ))
        }
      </DisplayBlock>

      <Space className={styles['direct-btns']}>
        <div onClick={walkPrevPart}>Prev Part</div>
        <div onClick={walkBack}>
          <ChevronLeft className={styles['icon']} />
        </div>
        <div onClick={walkForword}>
          <ChevronRight className={styles['icon']} />
        </div>
        <div onClick={walkNextPart}>Next Part</div>
      </Space>
    </div>
  )
}

export default Hall