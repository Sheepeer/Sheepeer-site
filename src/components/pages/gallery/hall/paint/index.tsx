import React, { ReactNode, useState } from 'react'
import styles from './style.module.scss'
import Detail from '../detail'

interface Props {
  // children: ReactNode
  code: number
}

const Paint = ({ code }: Props) => {
  const [showDetail, setShowDetail] = useState(false)
  const stepForward = () => {
    // const paint = document.getElementById(`root${code}`)
    // const card = document.getElementById(`card${code}`)
    // const shadow = document.createElement('div')

    // if (paint && card) {
    //   paint.style.width = '300px'
    //   card.style.width = '200px'
    //   card.style.height = '160px'
    // }
    setShowDetail(true)
  }

  return (
    <>
      <div className={styles['root']} id={`root${code}`} onClick={stepForward}>
        <div className={styles['paint']} id={`paint${code}`}></div>
        <div className={styles['card']} id={`card${code}`}>

        </div>
      </div>

      <Detail
        bgColor={'blue'}
        style={
          showDetail
            ? { height: '100vh', width: '100vw' }
            : { height: 0, width: 0, visibility: 'hidden' }
        }
        onClose={() => setShowDetail(false)}
      />
    </>
  )
}

export default Paint