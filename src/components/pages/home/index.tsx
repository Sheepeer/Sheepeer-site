import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { aloha } from '@/utils/time'
import Container from '@/components/layout/container'
import styles from './style.module.scss'

const Home: NextPage = () => {
  return (
    <Container pageTitle={`Sheepeer's site`}>
      <div className={styles.main}>
        <div className={styles['text-wrapper']}>
          <div className={styles.title}>
            <div>{`Hi! ${aloha()}`}</div>
            <div>Here is <span>{` Sheepeer's space`}</span></div>
          </div>

          <div className={styles['btns']}>
            <Link href={'/blogs'}><Button variant="outlined">Blogs</Button></Link>
            <Link href={'/gallery'}><Button variant="outlined">Gallery</Button></Link>
          </div>
        </div>
        <div className={styles['img-wrapper']} />
      </div>
    </Container>
  )
}

export default Home
