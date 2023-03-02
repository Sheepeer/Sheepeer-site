import { Pagination } from '@mui/material'
import type { NextPage } from 'next'
import Link from 'next/link'
import Tag from '@/components/basic/tag'
import Container from '@/components/layout/container'
import styles from './style.module.scss'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Space from '../../basic/space'
import SubNav from './sub-nav'
import moment from 'moment'
import Skeleton from '@/components/basic/skeleton'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import { useRouter } from 'next/router'
import Image from 'next/image'
import List from '@/components/basic/list'

const PAGE_SIZE = 3

export type Blog = {
  id: string,
  tag: string,
  title: string,
  content: string,
  content_html: string,
  date: string,
  watcher_count: number
}

const BlogsPage: NextPage = () => {
  const router = useRouter()
  const { tag, page = 0 } = router.query

  const { data, error } = useSWR({
    url: '/api/blogs/all',
    query: { tag }
  }, fetcher)
  const { result: blogList = [] } = data ?? {}

  const changePage = (e: any, page: number) => {
    console.log(page)
  }

  return (
    <Container pageTitle='Blogs'>
      <div className={styles['root']}>
        <div className={styles['main']}>
          <SubNav />
          <div className={styles['main-content']}>
            <List
              dataList={blogList.slice()}
              type='list'
              loading={!data && !error}
            />
            <Pagination
              count={blogList.length}
              variant='outlined'
              onChange={changePage}
              className={styles['pagination']}
            />
          </div>
        </div>
        <div className={styles['sider']}>
          aaa
        </div>
      </div>
    </Container>
  )
}

export default BlogsPage
