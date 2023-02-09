import classNames from 'classnames'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'
import styles from './style.module.scss'
import { useSession } from 'next-auth/react'

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
    title: 'Drafts',
    label: 'drafts'
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
  const userInfo = localStorage.getItem('USER_INFO')
  console.log('userInfo in ls:', userInfo)

  const router = useRouter()
  const pathname = router.pathname.split('/')[2]

  const [active, setActive] = useState(activeLabel)

  const clickHandler = (label: string) => {
    setActive(label)
    router.replace(`/backstage/${label}`)
  }

  return (
    <div className={styles['root']}>
      <div className={styles['menu']}>
        {
          MENU_LIST.map(({ title, label }) => (
            <div
              key={label}
              className={classNames(styles['menu-item'], { [styles['menu-item__active']]: label == active })}
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