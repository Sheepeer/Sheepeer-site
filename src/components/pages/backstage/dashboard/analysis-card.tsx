import Card from '@/components/basic/card'
import styles from './style.module.scss'
import Skeleton from '@/components/basic/skeleton'

interface Props {
  title: string
  account: number
  loading: boolean
}

const AnalysisCard = ({ title, account, loading }: Props) => {
  return (
    <Card>
      <div>
        {
          loading
            ? <Skeleton type='analysis' />
            : <div className={styles['card-content']}>
              <div className={styles['title']}>{title}</div>
              <div className={styles['account']}>{account}</div>
            </div>
        }
      </div>
    </Card>
  )
}

export default AnalysisCard