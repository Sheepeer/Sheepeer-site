import { Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import styles from './style.module.css'

type Menu = Array<{ label: string, path: string }>
const menu: Menu = [
  { label: 'BLOGS', path: '/blogs' },
  { label: 'GALLERY', path: '/gallery' },
]

const Header = () => {

  return (
    <div className={styles['root']}>
      <div>
        <Image src={'/logo-1.png'} width={40} height={40} alt='logo' />
      </div>
      <div className={styles['menu']}>
        {
          menu.map(({ label, path }) => (
            <Link key={label} href={path}>
              <div>{label}</div>
            </Link>)
          )
        }
      </div>
      <div>
        <Button variant="contained" >Contact</Button>
      </div>
    </div>
  )
}

export default Header