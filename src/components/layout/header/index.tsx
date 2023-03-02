import { Button } from "@mui/material"
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import Space from "../../basic/space"
import styles from './style.module.scss'
import LanguageBtn from "./language-btn"

type HeaderMenu = Array<{ label: string, path: string }>
export const MENU: HeaderMenu = [
  { label: 'BLOGS', path: '/blogs' },
  { label: 'GALLERY', path: '/gallery' },
]

const HeaderMenu = () => {
  const { pathname } = useRouter()

  return (
    <div className={styles['menu']}>
      {
        MENU.map(({ label, path }) => (
          <Link key={label} href={path}>
            <div className={classNames(
              styles['menu-item'],
              { [styles['menu-item__active']]: pathname === path }
            )}>{label}</div>
          </Link>)
        )
      }
    </div >
  )
}

const I18N_MENU = [
  {
    label: '中文',
    value: 'CN'
  },
  {
    label: 'English',
    value: 'EN'
  }
]

const Header = () => {

  return (
    <div className={styles['root']}>
      <Link href={'/'}>
        <Image
          className={styles['logo']}
          src={'/logo-final.jpg'}
          width={40}
          height={40}
          alt="Sheepeer's site"
        />
      </Link>
      <HeaderMenu />
      <Space>
        <LanguageBtn />
      </Space>
    </div>
  )
}

export default Header