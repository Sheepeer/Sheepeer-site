import Card from '@/components/basic/card'
import styles from './style.module.scss'

interface Props {
  title: string
  account: number
}

const AnalysisCard = ({ title, account }: Props) => {
  return (
    <Card>
      <div className={styles['card-content']}>
        <div className={styles['title']}>{title}</div>
        <div className={styles['account']}>{account}</div>
      </div>
    </Card>
  )
}

export default AnalysisCard