import styles from './style.module.scss'

const NoAuth = () => {
  return (
    <div className={styles['root']}>
      <div className={styles['content']}>{`Sry, you don't have permission to access backstage page`}</div>
    </div>
  )
}

export default NoAuth