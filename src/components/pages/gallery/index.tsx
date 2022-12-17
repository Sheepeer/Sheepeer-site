import type { NextPage } from 'next'
import Container from '@/components/layout/container'
import styles from './style.module.scss'
import Building from '../../layout/building'

const GalleryPage: NextPage = () => {
  return (
    <Container pageTitle='Gallery'>
      <Building/>
    </Container>
  )
}

export default GalleryPage
