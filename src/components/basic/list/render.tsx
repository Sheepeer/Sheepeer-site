import { Blog } from "@/components/pages/blogs"
import moment from "moment"
import Tag from "../tag"
import Space from "../space"
import styles from './style.module.scss'

const SingleListItem = ({ item, deletePost }: { item: Blog, deletePost: (id: number) => void }) => (
  <div className={styles['list-item']}>
    <div className={styles['text']}>
      <div className={styles['info']}>
        <Tag>{item.tag}</Tag>
        <div className={styles['date']}>{moment((+item.date)).format('YYYY-MM-DD HH:mm')}</div>
      </div>
      <div className={styles['title']}>{item.title}</div>
    </div>
    <Space className={styles['actions']}>
      <div
        className={styles['edit']}
        onClick={() => window.location.href = `/backstage/workspace?id=${item.id}`}
      >Edit</div>
      <div
        className={styles['delete']}
        onClick={() => deletePost(parseInt(item.id))}
      >Delete</div>
    </Space>
  </div>
)

const renderListItem = (
  type: 'list' | 'single-list',
  item: Blog,
  deletePost?: (id: number) => void
) => {
  switch (type) {
    case 'list':
      return 
    case 'single-list':
      return <SingleListItem item={item} deletePost={deletePost!} />
  }
}
export default renderListItem