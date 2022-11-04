import styles from './style.module.scss'

const Footer = () => {
  return (
    <div className={styles['footer-root']}>
      <div className={styles['main']}>
        All by sheepeer
      </div>
      <div className={styles['contact']}>
        <div className={styles['board']}>
          sheepeer@163.com
        </div>
        <div className={styles['social']}>
          <span>github</span>
          <span>tweeter</span>
          <span>weibo</span>
          <span>zhihu</span>
        </div>
      </div>
    </div>
  )
}

export default Footer