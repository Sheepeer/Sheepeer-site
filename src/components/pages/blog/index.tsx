import Tag from "@/components/basic/tag"
import Container from "@/components/layout/container"
import { useEffect } from "react"
import { useRouter } from "next/router"
import moment from "moment"
import fetcher from "@/utils/fetcher"
import useSWR from 'swr'
import styles from './style.module.scss'
import { Blog } from "../blogs"

const BlogPage = () => {
  const router = useRouter()
  const id = router.query.id

  const { data, error } = useSWR({
    url: '/api/blogs/searchById',
    query: { id }
  }, fetcher)
  const { result: blog = {} } = data ?? {}

  useEffect(() => {
    if (blog?.content_html) {
      document.getElementById('content')!.innerHTML = blog.content_html
    }
  }, [blog])

  return (
    <Container pageTitle={"a blog"}>
      <div className={styles['root']}>
        <div className={styles['title']}>{blog?.title}</div>
        <div className={styles['info']}>
          <Tag>{blog?.tag ?? '-'}</Tag>
          <div className={styles['time']}>{blog?.date && moment(+blog.date).format('YYYY-MM-DD HH:mm')}</div>
        </div>

        <div className={styles['content']} id='content'>
          {blog?.content_html}
        </div>
      </div>
    </Container>
  )
}

export default BlogPage