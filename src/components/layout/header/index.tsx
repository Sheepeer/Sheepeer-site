import { Button } from "@mui/material"
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from './style.module.scss'

type Menu = Array<{ label: string, path: string }>
const menu: Menu = [
  { label: 'BLOGS', path: '/blogs' },
  { label: 'GALLERY', path: '/gallery' },
]

const Menu = () => {
  const { pathname } = useRouter()

  return (
    <div className={styles['menu']}>
      {
        menu.map(({ label, path }) => (
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

const Header = () => {

  return (
    <div className={styles['root']}>
      <Link href={'/'}>
        <Image
          className={styles['logo']}
          src={'/logo-1.png'}
          width={40}
          height={40}
          alt="Sheepeer's site" />
      </Link>
      <Menu />
      <div>
        <Button variant="contained" >Contact</Button>
      </div>
    </div>
  )
}

export default Header