import useDidMount from '@/hooks/useDidMount'
import type { NextPage } from 'next'
import Head from 'next/head'
import { buildGallery } from './hall/build'
import styles from './style.module.scss'
import Link from 'next/link'
import { Button } from '@mui/material'

const GalleryPage: NextPage = () => {

  useDidMount(() => {
    buildGallery()
  })

  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <Link href={'/'}>
        <Button variant='contained' className={styles['btn-back']}>Back</Button>
      </Link>
    </>
  )
}

export default GalleryPage
