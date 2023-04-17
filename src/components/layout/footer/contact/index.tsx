import React, { ReactNode } from 'react'
import styles from './style.module.scss'

interface Props {
  list: Array<{
    icon: ReactNode,
    link: string
  }>
}

const Contact = ({ list }: Props) => {
  return (
    <div className={styles['root']}>
      {
        list.map(({ icon, link }, index) => (
          <div
            key={link}
            id={`item-${index}`}
            className={styles['item']}
          >
            <span>{link}</span>
            {icon}
          </div>
        ))
      }
    </div>
  )
}

export default Contact