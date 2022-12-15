import Tag from "@/components/basic/tag"
import Container from "@/components/layout/container"
import styles from './style.module.css'

const BlogPage = () => {
  return (
    <Container pageTitle={"a blog"}>
      <div className={styles['root']}>
        <div className={styles['title']}>这里是标题标题标题标题标题</div>
        <div className={styles['info']}>
          <div className={styles['time']}>2022-01-02</div>
          <Tag>标签</Tag>
        </div>
      </div>
    </Container>
  )
}

export default BlogPage