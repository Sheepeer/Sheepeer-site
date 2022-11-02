import { List, ListItem } from '@mui/material'
import type { NextPage } from 'next'
import Container from '../../layout/container'
import styles from './style.module.css'

const list = [
  {
    title: 'xxxx',
    content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  },
  {
    title: 'xxxx',
    content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  },
  {
    title: 'xxxx',
    content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  },
]

const BlogsPage: NextPage = () => {
  return (
    <Container pageTitle='Blogs'>
      <div className={styles['root']}>
        <div className={styles['main']}>
        <List>
        {
          list.map((item: any) => (
            <ListItem key={item.title}>
              <div className={styles['list-item']}>
                <div>{item.title}</div>
                <div>{item.content}</div>
              </div>
            </ListItem>
          ))
        }
      </List>
        </div>
        <div className={styles['sider']}>

        </div>
      </div>
    </Container>
  )
}

export default BlogsPage
