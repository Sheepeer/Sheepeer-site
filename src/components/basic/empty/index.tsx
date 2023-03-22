import { Drafts } from '@mui/icons-material';
import styles from './style.module.scss'

const Empty = () => {
  return (
    <div className={styles['empty-wrapper']} >
      <Drafts className={styles['empty-icon']} />
    </div>
  )
}

export default Empty