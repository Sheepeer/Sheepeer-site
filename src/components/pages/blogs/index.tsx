import { List, ListItem } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'
import Tag from '../../basic/tag'
import Container from '../../layout/container'
import styles from './style.module.css'

type Blog = {
  id: string,
  tag: string,
  title: string,
  content: string
  date: string,
}


const list: Array<Blog> = [
  {
    id: 'qr34wrtrwr',
    tag: 'Node',
    title: '假装是一个标题1',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    date: '2022-01-01'
  },
  {
    id: 'qr34wrtrww',
    tag: '设计模式',
    title: '假装是一个标题2',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    date: '2022-01-01'
  },
  {
    id: 'qr34wrtr3r',
    tag: 'Javascript',
    title: '假装是一个标题3',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    date: '2022-01-01'
  },
]

const ListItemLayout = ({ item }: { item: Blog }) => (
  <Link href={`/blog/${item.id}`}>
    <div className={styles['list-item']}>
      <div className={styles['list-item-text']}>
        <div className={styles['list-item-info']}>
          <Tag>{item.tag}</Tag>
          <div className={styles['date']}>{item.date}</div>
        </div>
        <div className={styles['title']}>{item.title}</div>
        <div className={styles['content']}>{item.content}</div>
      </div>
      <div className={styles['list-item-img']}>

      </div>
    </div>
  </Link>
)

const BlogsPage: NextPage = () => {
  return (
    <Container pageTitle='Blogs'>
      <div className={styles['root']}>
        <div className={styles['main']}>
          <List>
            {
              list.map((item: any) => (
                <ListItem key={item.id}>
                  <ListItemLayout item={item} />
                </ListItem>
              ))
            }
          </List>
        </div>
        <div className={styles['sider']}>
          aaa
        </div>
      </div>
    </Container>
  )
}

export default BlogsPage
