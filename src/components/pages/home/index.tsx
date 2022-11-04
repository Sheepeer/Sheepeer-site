import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'
import { aloha } from '../../../utils/time'
import Container from '../../layout/container'
import styles from './style.module.scss'

const Home: NextPage = () => {
  return (
    <Container pageTitle={`Sheepeer's site`}>
      <div className={styles.main}>
        <div className={styles['text-wrapper']}>
          <div className={styles.title}>
            <div>{`Hi! ${aloha()}`}</div>
            <div>{`Here is Sheepeer's Space`}</div>
          </div>

          <div className={styles['btns']}>
            <Link href={'/blogs'}><Button variant="outlined">Blogs</Button></Link>
            <Link href={'/gallery'}><Button variant="outlined">Gallery</Button></Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home
