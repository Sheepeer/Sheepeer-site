import { useState, useEffect } from 'react'
import styles from './style.module.scss'
import { Blog } from '../../blogs'
import axios from 'axios'
import Link from 'next/link'
import moment from 'moment'
import Skeleton from '@/components/basic/skeleton'
import { List, ListItem } from '@mui/material'
import Tag from '@/components/basic/tag'

const ListItemLayout = ({ item }: { item: Blog }) => (
  <Link href={`/backstage/workspace?id=${item.id}`}>
    <div className={styles['list-item']}>
      <div className={styles['text']}>
        <div className={styles['info']}>
          <Tag>{item.tag}</Tag>
          <div className={styles['date']}>{moment((+item.date) * 1000).format('YYYY-MM-DD HH:mm')}</div>
        </div>
        <div className={styles['title']}>{item.title}</div>
      </div>
    </div>
  </Link>
)

const Posts = () => {

  const [blogList, setBlogList] = useState<Array<Blog>>([])

  const getPosts = () => {
    axios.get('/api/blogs/all')
      .then(res => {
        if (res.data.result) {
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
    <div className={styles['root']}>
      {
        blogList.length === 0
          ? <div>
            <Skeleton type='single-list' count={3} />
          </div>
          : <List className={styles['list']}>
            {
              blogList.map((item: any) => (
                <ListItem key={item.id} className={styles['list-item-wrapper']}>
                  <ListItemLayout item={item} />
                </ListItem>
              ))
            }
          </List>
      }
    </div>
  )
}

export default Posts