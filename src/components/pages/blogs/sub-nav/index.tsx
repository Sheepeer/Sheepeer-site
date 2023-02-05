import { useRouter } from 'next/router'
import styles from './style.module.scss'
import classNames from 'classnames'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'

const SubNav = () => {
  // fetch tags
  const router = useRouter()
  const currTag = router.query?.tag ?? ''

  const { data } = useSWR<{ result: Array<string> }>('/api/tags', fetcher)
  const { result = [] } = data ?? {}

  const clickHandler = (tag: string) => {
    router.push({
      query: { tag }
    })
  }

  return (
    <div className={styles['sub-nav']}>
      {
        result.map(item => (
          <div
            className={classNames(styles['item'], { [styles['item-active']]: item === currTag })}
            onClick={() => clickHandler(item)}
            key={item}
          >
            {item}
          </div>
        ))
      }
    </div>
  )
}

export default SubNav
