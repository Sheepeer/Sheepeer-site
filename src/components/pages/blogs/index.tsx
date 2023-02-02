import { List, ListItem } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'
import Tag from '@/components/basic/tag'
import Container from '@/components/layout/container'
import ForwardIcon from '@mui/icons-material/Forward';
import styles from './style.module.scss'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Space from '../../basic/space'
import fetchData from '../../../hooks/fetch'
import useFetch from '../../../hooks/fetch'
import SubNav from './sub-nav'
import axios from 'axios'
import { useEffect, useState } from 'react'
import moment from 'moment'

type Blog = {
  id: string,
  tag: string,
  title: string,
  content: string,
  date: string,
  watcher_count: number
}

const ListItemLayout = ({ item }: { item: Blog }) => (
  <Link href={`/blog/${item.id}`}>
    <div className={styles['list-item']}>
      <div className={styles['text']}>
        <div className={styles['info']}>
          <Tag>{item.tag}</Tag>
          <div className={styles['date']}>{moment((+item.date)*1000).format('YYYY-MM-DD HH:mm')}</div>
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
  const [blogList, setBlogList] = useState<Array<Blog>>([])

  const getPosts = () => {
    axios.get('/api/blogs/all')
      .then(res => {
        if(res.data.result) {
          setBlogList(res.data.result)
        }
      })
      .catch(e => {
        console.error(e)
      })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Container pageTitle='Blogs'>
      <div className={styles['root']}>
        <div className={styles['main']}>
          <SubNav />
          <List className={styles['list']}>
            {
              blogList.map((item: any) => (
                <ListItem key={item.title}>
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
