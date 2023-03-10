import { Blog } from '@/components/pages/blogs'
import { List as _List, ListItem } from '@mui/material'
import Skeleton from '../skeleton'
import renderListItem from './render'
import styles from './style.module.scss'

interface Props {
  dataList: Array<Blog>
  type: 'list' | 'single-list'
  loading: boolean,
  deletePost?: (id: number) => void
}

const List = ({ dataList, type, loading, deletePost }: Props) => {
  return (
    loading
      ? <Skeleton type={type} count={3} />
      : <_List className={styles['list']}>
        {
          dataList.map(item => (
            <ListItem key={item.id}>
              {renderListItem(type, item, deletePost)}
            </ListItem>
          ))
        }
      </_List>
  )
}

export default List