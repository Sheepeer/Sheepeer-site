import { Pagination, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Container from '@/components/layout/container'
import styles from './style.module.scss'
import SubNav from './sub-nav'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import { useRouter } from 'next/router'
import List from '@/components/basic/list'
import Tags from '@/components/basic/tags'

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

  const { data: tagsData, error: tagsError } = useSWR({
    url: '/api/tags'
  }, fetcher)
  const { result: tagList = [] } = tagsData ?? {}

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
          <TextField
            size='small'
            variant='outlined'
            placeholder='search post about ...' />
          <Tags
            className={styles['tags']}
            tagList={tagList}
            onChoose={value => router.push({ query: { tag: value } })} choosed={''}
          />
        </div>
      </div>
    </Container>
  )
}

export default BlogsPage
