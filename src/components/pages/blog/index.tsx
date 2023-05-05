import Tag from "@/components/basic/tag"
import Container from "@/components/layout/container"
import { useEffect } from "react"
import { useRouter } from "next/router"
import moment from "moment"
import fetcher from "@/utils/fetcher"
import useSWR from 'swr'
import styles from './style.module.scss'
import Skeleton from "@/components/basic/skeleton"

const BlogPage = () => {
  const router = useRouter()
  const id = router.query.id

  const { data, error } = useSWR({
    url: '/api/blogs/searchById',
    query: { id }
  }, fetcher)
  const { result: blog = {} } = data ?? {}
  const {title, tag, color, date, content, content_html} = blog

  useEffect(() => {
    if (blog?.content_html) {
      document.getElementById('content')!.innerHTML = blog.content_html
    }
  }, [blog])

  return (
    <Container pageTitle={title}>
      <div className={styles['root']}>
        {
          !data && !error
            ? <Skeleton type="post" />
            : <>
              <h1 className={styles['title']}>{title}</h1>
              <div className={styles['info']}>
                <Tag color={color}>{tag}</Tag>
                <div className={styles['time']}>{date && moment(date).format('YYYY-MM-DD HH:mm')}</div>
              </div>

              <div className={styles['content']} id='content'>
                {content_html}
              </div>
            </>
        }
      </div>
    </Container>
  )
}

export default BlogPage