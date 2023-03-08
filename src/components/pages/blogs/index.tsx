import { Divider, Pagination, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Container from '@/components/layout/container'
import styles from './style.module.scss'
import SubNav from './sub-nav'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import { useRouter } from 'next/router'
import List from '@/components/basic/list'
import Image from 'next/image'
import Space from '@/components/basic/space'
import { TagColor } from '@/components/basic/tag'

const PAGE_SIZE = 7

export type Blog = {
  id: string,
  tag: string,
  title: string,
  content: string,
  content_html: string,
  date: string,
  watcher_count: number,
  color: TagColor
}

const BlogsPage: NextPage = () => {
  const router = useRouter()
  const { tag, page = 1 } = router.query

  const { data, error } = useSWR({
    url: '/api/blogs/all',
    query: { tag }
  }, fetcher)
  const { result: blogList = [] } = data ?? {}

  const changePage = (e: any, page: number) => {
    console.log(page)
    router.push({ query: { ...router.query, page } })
  }

  return (
    <Container pageTitle='Blogs'>
      <div className={styles['root']}>
        <div className={styles['main']}>
          <SubNav />
          <div className={styles['main-content']}>
            <List
              dataList={blogList.slice((+page - 1)*PAGE_SIZE, (+page)*PAGE_SIZE)}
              type='list'
              loading={!data && !error}
            />
            <Pagination
              count={Math.ceil(blogList.length / PAGE_SIZE)}
              variant='outlined'
              onChange={changePage}
              className={styles['pagination']}
            />
          </div>
        </div>
        <div className={styles['sider']}>
          {/* <TextField
            size='small'
            variant='outlined'
            placeholder='search post about ...'
          /> */}
          <div className={styles['profile']}>
            <Space>
              <Image
                src={'/logo-final.jpg'}
                alt='avator'
                height={50}
                width={50}
              />
              <div>Sheepeer</div>
            </Space>
            <Divider style={{ margin: '12px 0' }} />
            <div className={styles['summary']}>
              <div className={styles['summary-item']}>
                <div className={styles['account']}>9</div>
                <div className={styles['title']}>访问量</div>
              </div>
              <div className={styles['summary-item']}>
                <div className={styles['account']}>11</div>
                <div className={styles['title']}>浏览量</div>
              </div>
              <div className={styles['summary-item']}>
                <div className={styles['account']}>7</div>
                <div className={styles['title']}>文章数</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default BlogsPage
