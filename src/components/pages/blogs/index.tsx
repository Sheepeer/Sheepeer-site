import { List, ListItem } from '@mui/material'
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

export type Blog = {
  id: string,
  tag: string,
  title: string,
  content: string,
  content_html: string,
  date: string,
  watcher_count: number
}

const ListItemLayout = ({ item }: { item: Blog }) => (
  <Link href={`/blog/${item.id}`}>
    <div className={styles['list-item']}>
      <div className={styles['text']}>
        <div className={styles['info']}>
          <Tag>{item.tag}</Tag>
          <div className={styles['date']}>{moment((+item.date)).format('YYYY-MM-DD HH:mm')}</div>
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
  const router = useRouter()
  const { tag } = router.query

  const { data, error } = useSWR({
    url: '/api/blogs/all',
    query: { tag }
  }, fetcher)
  const { result: blogList = [] } = data ?? {}

  return (
    <Container pageTitle='Blogs'>
      <div className={styles['root']}>
        <div className={styles['main']}>
          <SubNav />
          <div className={styles['main-content']}>
            {
              !data && !error
                ? <div className={styles['skeleton']}>
                  <Skeleton type='list' count={3} />
                </div>
                : (
                  blogList.reverse().length === 0
                    ? <div className={styles['empty']}>
                      <Image src={'/empty.svg'} alt='empty' width={30} height={30} />
                      <div>No data here</div>
                    </div>
                    : <List className={styles['list']}>
                      {
                        blogList.map((item: any) => (
                          <ListItem key={item.title}>
                            <ListItemLayout item={item} />
                          </ListItem>
                        ))
                      }
                    </List>
                )
            }
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
