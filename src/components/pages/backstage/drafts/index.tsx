import styles from './style.module.scss'
import axios from 'axios'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import List from '@/components/basic/list'

const Posts = () => {

  const { data, error, mutate } = useSWR({
    url: '/api/blogs/all?flag=drafts'
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
      <List
        type='single-list'
        dataList={blogList}
        loading={!data && !error}
        deletePost={deletePost}
      />
    </div>
  )
}

export default Posts