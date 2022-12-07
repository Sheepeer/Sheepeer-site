import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import styles from './style.module.scss'

const GITHUB_SRC = 'https://github.com/Sheepeer'
const INS_SRC = ''
const TWITTER_SRC = ''

const Footer = () => {
  return (
    <div className={styles['footer-root']}>
      <div className={styles['main']}>
        All by sheepeer
      </div>
      <div className={styles['contact']}>
        <div className={styles['board']}>
          sheepeer@163.com
        </div>
        <div className={styles['social']}>
          <Link href={GITHUB_SRC}><GitHubIcon /></Link>
          <Link href={INS_SRC}><InstagramIcon/></Link>
          <Link href={TWITTER_SRC}><TwitterIcon/></Link>
          <span>zhihu</span>
        </div>
      </div>
    </div>
  )
}

export default Footer