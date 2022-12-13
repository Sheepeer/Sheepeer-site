import styles from './style.module.scss'

const Login = () => {
  return (
    <div className={styles['root']}>
      <div className={styles["qrcode-wrapper"]}></div>
      <div>扫码登录</div>
    </div>
  )
}

export default Login