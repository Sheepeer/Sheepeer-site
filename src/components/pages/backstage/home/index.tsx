import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'
import BsContainer from '../../../layout/bs-container'
import Container from '../../../layout/container'
import DashBoard from '../dashboard'
import Pictures from '../pictures'
import Posts from '../posts'
import WorkSpace from '../workspace'
import styles from './style.module.scss'

type MenuList = Array<{
  title: string,
  label: string,
  component: ReactNode
}>

const MENU_LIST: MenuList = [
  {
    title: 'Dashboard',
    label: 'dashboard',
    component: <DashBoard/>
  },
  {
    title: 'Work Space',
    label: 'workspace',
    component: <WorkSpace/>
  },
  {
    title: 'Posts',
    label: 'posts',
    component: <Posts/>
  },
  {
    title: 'Pictures',
    label: 'pictures',
    component: <Pictures/>
  }
]

const renderComponent = (label: string) => {
  return MENU_LIST.find(item => item.label == label)?.component
}

const BackstageHome = () => {
  const router = useRouter()
  console.log(router)
  const [active, setActive] = useState('dashboard')

  return (
    <Container pageTitle='backstage'>
      <BsContainer activeLabel='home'>
        home
      </BsContainer>
    </Container>
  )
}

export default BackstageHome