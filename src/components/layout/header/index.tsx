import { Button } from "@mui/material"
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import Space from "../../basic/space"
import styles from './style.module.scss'
import LanguageBtn from "./language-btn"
import { ReactNode, useState, useContext } from "react"
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import MyContext from "src/context"

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

interface Props {
  style?: object
}

const Header = ({ style = {} }: Props) => {
  const { isHeaderHidden, setIsHeaderHidden } = useContext(MyContext)

  // const [display, setDisplay] = useState<'flex' | 'none'>('flex')
  const [suffix, setSuffix] = useState<ReactNode>(<KeyboardArrowUp className={styles['icon']} />)

  const clickSuffixHandler = () => {
    // if (display === 'flex') {
    //   setDisplay('none')
    //   setSuffix(<KeyboardArrowDown className={styles['icon']} />)
    // } else {
    //   setDisplay('flex')
    //   setSuffix(<KeyboardArrowUp className={styles['icon']} />)
    // }
    if (isHeaderHidden === false) {
      setIsHeaderHidden(true)
      setSuffix(<KeyboardArrowDown className={styles['icon']} />)
    } else {
      setIsHeaderHidden(false)
      setSuffix(<KeyboardArrowUp className={styles['icon']} />)
    }
  }

  return (
    <div className={styles['root']} style={style}>
      <div className={styles['header']} style={{ display: isHeaderHidden ? 'none':'flex' }}>
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
      <div className={styles['suffix']} onClick={clickSuffixHandler}>
        {suffix}
      </div>
    </div>
  )
}

export default Header