import { Skeleton as _Skeleton } from '@mui/material'
import styles from './style.module.scss'
import { ReactNode } from 'react'
import classNames from 'classnames'

type Type = 'list' | 'single-list'

interface Props {
  type: Type
  count?: number
  className?: string
}

const render = (type: Type, count: number) => {
  const resNode: Array<ReactNode> = []
  switch (type) {
    case 'list':
      for (let i = 0; i < count; i++) {
        resNode.push(
          <div className={styles['skeleton-item__list']} key={i}>
            <_Skeleton width={'70%'} height={36} />
            <_Skeleton height={24} />
            <_Skeleton height={24} />
          </div>
        )
      }
      break
    case 'single-list':
      for (let i = 0; i < count; i++) {
        resNode.push(
          <div className={styles['skeleton-item__singlelist']}>
            <_Skeleton height={36} />
          </div>
        )
      }
      break
  }

  return resNode
}

const Skeleton = ({ type, count = 1, className }: Props) => {
  return (
    <div className={classNames(styles['skeleton'], className)}>
      {render(type, count)}
    </div>
  )
}

export default Skeleton