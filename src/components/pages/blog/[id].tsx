import Tag from "@/components/basic/tag"
import Container from "@/components/layout/container"
import styles from './style.module.css'
import { useEffect, useState } from "react"
import useDidMount from "@/hooks/useDidMount"
import axios from "axios"
import { useRouter } from "next/router"
import { Blog } from "../blogs"
import moment from "moment"

const BlogPage = () => {
  const route = useRouter()
  const id = route.query.id
  console.log(route)

  const [blog, setBlog] = useState<Blog>()

  const getBlog = ()=>{
    axios.get(`/api/blogs/searchById?id=${id}`)
    .then(res => {
      setBlog(res.data.result)
    })
  }

  useEffect(()=>{
    if(id) {
      getBlog()
    }
  }, [id])

  return (
    <Container pageTitle={"a blog"}>
      <div className={styles['root']}>
        <div className={styles['title']}>{blog?.title}</div>
        <div className={styles['info']}>
          <div className={styles['time']}>{moment(+(blog?.date)*1000).format('YYYY-MM-DD HH:mm')}</div>
          <Tag>{blog?.tag ?? '-'}</Tag>
        </div>
      </div>
    </Container>
  )
}

export default BlogPage