import classNames from 'classnames'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'
import DashBoard from '../../pages/backstage/dashboard'
import Pictures from '../../pages/backstage/pictures'
import Posts from '../../pages/backstage/posts'
import WorkSpace from '../../pages/backstage/workspace'

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
  activeLabel: string
  children: ReactNode
}

const BsContainer = ({ activeLabel, children }: Props) => {
  const router = useRouter()
  console.log(router)

  const [active, setActive] = useState(activeLabel)

  const clickHandler = (label: string) => {
    setActive(label)
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