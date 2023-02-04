import Tag from "@/components/basic/tag"
import Container from "@/components/layout/container"
import { useEffect, useState } from "react"
import useDidMount from "@/hooks/useDidMount"
import axios from "axios"
import { useRouter } from "next/router"
import { Blog } from "../blogs"
import moment from "moment"
import styles from './style.module.scss'

const BlogPage = () => {
  const route = useRouter()
  const id = route.query.id

  const [blog, setBlog] = useState<Blog>()

  const getBlog = ()=>{
    axios.get(`/api/blogs/searchById?id=${id}`)
    .then(res => {
      setBlog(res.data.result[0])
    })
  }

  useEffect(()=>{
    if(id) {
      getBlog()
    }
  }, [id])

  useEffect(() =>{
    if(blog?.content_html ){
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