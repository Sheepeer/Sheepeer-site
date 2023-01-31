import classNames from 'classnames'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'
import styles from './style.module.scss'

type MenuList = Array<{
  title: string,
  label: string,
}>

const MENU_LIST: MenuList = [
  {
    title: 'Dashboard',
    label: 'dashboard',
  },
  {
    title: 'Work Space',
    label: 'workspace',
  },
  {
    title: 'Posts',
    label: 'posts',
  },
  {
    title: 'Pictures',
    label: 'pictures',
  }
]

interface Props {
  children: ReactNode
}

const BsContainer = ({ children }: Props) => {
  const router = useRouter()
  const active = router.pathname.split('/')[2]

  const clickHandler = (label: string) => {
    router.push(`/backstage/${label}`)
  }

  return (
    <div className={styles['root']}>
      <div className={styles['menu']}>
        {
          MENU_LIST.map(({ title, label }) => (
            <div
              key={label}
              className={classNames(styles['menu-item'], {[styles['menu-item__active']]: label == active})}
              onClick={() => clickHandler(label)}
            >{title}</div>
          ))
        }
      </div>
      <div className={styles['content']}>
        {children}
      </div>
    </div>
  )
}

export default BsContainer