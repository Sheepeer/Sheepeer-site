import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.scss'
import { MENU } from '../header';

const GITHUB_SRC = 'https://github.com/Sheepeer'
const INS_SRC = ''
const TWITTER_SRC = ''

const FRIEND_LINKS = [
  'xxx.com',
  'xxxxx.com.cn',
  'xxxx.com.cn'
]

const Footer = () => {
  return (
    <div className={styles['footer-root']}>
      <div className={styles['main']}>
        <div className={styles['title']}>Menu</div>
        {
          MENU.map(({ path, label }) => (
            <Link href={path} key={label}>
              <div className={styles['item']}>{label}</div>
            </Link>
          ))
        }
      </div>
      <div className={styles['main']}>
        <div className={styles['title']}>Friend Links</div>
        {
          FRIEND_LINKS.map(item => (
            <Link href={item} key={item}>
              <div className={styles['item']}>{item}</div>
            </Link>
          ))
        }
      </div>
      <div className={styles['contact']}>
        <div className={styles['board']}>
          <Image
            className={styles['wechat']}
            src={'/wechat.jpg'}
            width={150}
            height={150}
            alt='wechat QR code' />
        </div>
        <div className={styles['social']}>
          <Link href={GITHUB_SRC}><GitHubIcon /></Link>
          <Link href={INS_SRC}><InstagramIcon /></Link>
          <Link href={TWITTER_SRC}><TwitterIcon /></Link>
          <span>zhihu</span>
        </div>
      </div>
    </div>
  )
}

export default Footer