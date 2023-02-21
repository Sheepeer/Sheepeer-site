import { useState, useEffect } from 'react'
import styles from './style.module.scss'
import { Blog } from '../../blogs'
import axios from 'axios'
import Link from 'next/link'
import moment from 'moment'
import Skeleton from '@/components/basic/skeleton'
import { List, ListItem } from '@mui/material'
import Tag from '@/components/basic/tag'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'

const ListItemLayout = ({ item, deletePost }: { item: Blog, deletePost: (id: number) => void }) => (
  <div className={styles['list-item']}>
    <div className={styles['text']}>
      <div className={styles['info']}>
        <Tag>{item.tag}</Tag>
        <div className={styles['date']}>{moment((+item.date)).format('YYYY-MM-DD HH:mm')}</div>
      </div>
      <div className={styles['title']}>{item.title}</div>
    </div>
    <div className={styles['actions']}>
      <div
        className={styles['edit']}
        onClick={() => window.location.href = `/backstage/workspace?id=${item.id}`}
      >Edit</div>
      <div
        className={styles['delete']}
        onClick={() => deletePost(parseInt(item.id))}
      >Delete</div>
    </div>
  </div>
)

const Posts = () => {

  const { data, error, mutate } = useSWR({
    url: '/api/blogs/all',
  }, fetcher)
  const { result: blogList = [] } = data ?? {}

  const deletePost = (id: number) => {
    axios.delete(`/api/blogs/delete?id=${id}`)
      .then(res => {
        if (res.data && res.data.msg === 'success') {
          alert('删除成功')
          mutate()
        } else {
          alert('删除失败')
        }
      })
      .catch(e => alert('删除异常'))
  }

  return (
    <div className={styles['root']}>
      {
        !data && !error
          ? <div>
            <Skeleton type='single-list' count={3} />
          </div>
          : <List className={styles['list']}>
            {
              blogList.map((item: any) => (
                <Link href={`/backstage/workspace?id=${item.id}`} key={item.id}>
                  <ListItem className={styles['list-item-wrapper']}>
                    <ListItemLayout item={item} deletePost={deletePost} />
                  </ListItem>
                </Link>
              ))
            }
          </List>
      }
    </div>
  )
}

export default Posts