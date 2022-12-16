import { List, ListItem } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'
import Tag from '../../basic/tag'
import Container from '../../layout/container'
import ForwardIcon from '@mui/icons-material/Forward';
import styles from './style.module.scss'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Space from '../../basic/space'
import fetchData from '../../../hooks/fetch'
import useFetch from '../../../hooks/fetch'
import SubNav from './sub-nav'

type Blog = {
  id: string,
  tag: string,
  title: string,
  content: string,
  date: string,
  watcher_count: number
}


const list: Array<Blog> = [
  {
    id: 'qr34wrtrwr',
    tag: 'Node',
    title: '假装是一个标题1',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    date: '2022-01-01',
    watcher_count: 12
  },
  {
    id: 'qr34wrtrww',
    tag: '设计模式',
    title: '假装是一个标题2',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    date: '2022-01-01',
    watcher_count: 12
  },
  {
    id: 'qr34wrtr3r',
    tag: 'Javascript',
    title: '假装是一个标题3',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    date: '2022-01-01',
    watcher_count: 12
  },
]

const ListItemLayout = ({ item }: { item: Blog }) => (
  <Link href={`/blog/${item.id}`}>
    <div className={styles['list-item']}>
      <div className={styles['text']}>
        <div className={styles['info']}>
          <Tag>{item.tag}</Tag>
          <div className={styles['date']}>{item.date}</div>
        </div>
        <div className={styles['title']}>{item.title}</div>
        <div className={styles['content']}>{item.content}</div>
        <div className={styles['record']}>
          <Space>
            <VisibilityOutlinedIcon fontSize='small' />
            <div className={styles['watcher-count']}>{item.watcher_count}</div>
          </Space>
        </div>
      </div>
      <div className={styles['img']}>

      </div>
    </div>
  </Link>
)

const BlogsPage: NextPage = () => {
  // const res = useFetch('/api/blogs')

  return (
    <Container pageTitle='Blogs'>
      <div className={styles['root']}>
        <div className={styles['main']}>
          <SubNav />
          <List className={styles['list']}>
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
