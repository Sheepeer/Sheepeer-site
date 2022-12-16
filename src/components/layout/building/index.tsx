import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import styles from './style.module.scss'

const Building = () => {
  return (
    <div className={styles['root']}>
      <BuildOutlinedIcon fontSize="large"/>
      <div className={styles['placeholder']}>This page is being building ...</div>
    </div>
  )
}

export default Building