import styles from './style.module.css'

interface Props {
  children: string
}

const Tag = ({children}: Props) => {
  return (
    <div className={styles['tag']}>{children}</div>
  )
}

export default Tag