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
      <div className={styles['main']}>
        <div className={styles['text-wrapper']}>
          <div className={styles['title']}>
            <div>{`Hi! ${aloha()}`}</div>
            <div>Here is <span>{` Sheepeer's site`}</span></div>
            <p className={styles['sub-title']}>{`A space to store my notes and inspirations`}</p>
          </div>

          <div className={styles['btns']}>
            <Link href={'/blogs'}>
              <Button
                variant="contained"
                size='large'
                className={styles['btn']}>Blogs</Button>
            </Link>
            <Link href={'/gallery'}>
              <Button
                variant="contained"
                size='large'
                className={styles['btn']}>Gallery</Button>
            </Link>
          </div>
        </div>
        <div className={styles['img-wrapper']} />
      </div>
    </Container>
  )
}

export default Home
