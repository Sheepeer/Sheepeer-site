import { useRouter } from 'next/router'
import classNames from 'classnames'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import { TagProps } from '@/components/basic/tag'
import styles from './style.module.scss'

const SubNav = () => {
  const router = useRouter()
  const currTag = router.query?.tag ?? ''

  const { data } = useSWR<{ result: Array<TagProps> }>({ url: '/api/tags' }, fetcher)
  const { result = [] } = data ?? {}

  const clickHandler = (tag: string) => {
    router.push({
      query: { tag }
    })
  }

  return (
    <div className={styles['sub-nav']}>
      {
        result.map(({ id, name, color }) => (
          <div
            className={classNames(styles['item'], { [styles['item-active']]: name === currTag })}
            onClick={() => clickHandler(name)}
            key={id}
          >
            {name}
          </div>
        ))
      }
    </div>
  )
}

export default SubNav
