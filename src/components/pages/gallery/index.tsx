import useDidMount from '@/hooks/useDidMount'
import type { NextPage } from 'next'
import Head from 'next/head'
import { buildGallery } from './build'
import styles from './style.module.scss'
import Link from 'next/link'
import { Button } from '@mui/material'
import Hall from './hall'

const GalleryPage: NextPage = () => {

  // useDidMount(() => {
  //   buildGallery()
  // })

  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <Link href={'/'}>
        <Button variant='outlined' className={styles['btn-back']}>Back</Button>
      </Link>
      <div className={styles['hall-container']}>
      <Hall/>
      </div>
    </>
  )
}

export default GalleryPage
