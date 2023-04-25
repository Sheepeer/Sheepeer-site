import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import Space from "../../basic/space"
import styles from './style.module.scss'
import LanguageBtn from "./language-btn"
import { ReactNode, useState } from "react"
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { useHeaderContent } from "src/context/headerContent"
import React from "react"

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
  const { isHeaderHidden, setIsHeaderHidden } = useHeaderContent()

  const [suffix, setSuffix] = useState(false)

  const clickSuffixHandler = () => {
    if (isHeaderHidden === false) {
      setIsHeaderHidden(true)
      setSuffix(true)
    } else {
      setIsHeaderHidden(false)
      setSuffix(false)
    }
  }

  return (
    <div className={styles['root']} style={style}>
      <div
        className={styles['header-wrapper']}
        style={isHeaderHidden ? { height: 0, border: 'none' } : {}}
      >
        <div
          className={styles['header']}
          style={{ visibility: isHeaderHidden ? 'hidden' : 'visible' }}
        >
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
      </div>

      <div
        className={styles['suffix']}
        onClick={clickSuffixHandler}
      >
        {
          suffix 
          ? <React.Fragment><KeyboardArrowDown className={styles['icon']} /> </React.Fragment>
          : <React.Fragment><KeyboardArrowUp className={styles['icon']} /></React.Fragment>
        }
        {/* {
          suffix ? 'show' : 'hide'
        } */}
      </div>
    </div>
  )
}

export default Header