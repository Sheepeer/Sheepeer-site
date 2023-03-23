import { useRouter } from 'next/router'
import classNames from 'classnames'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import { TagProps } from '@/components/basic/tag'
import styles from './style.module.scss'
import { useHeaderContent } from 'src/context/headerContent'

interface Props {
  style?: object
}

const SubNav = () => {

  const {isHeaderHidden} = useHeaderContent()

  const router = useRouter()
  const currTag = router.query?.tag ?? ''

  const { data } = useSWR<{ result: Array<TagProps> }>({ url: '/api/tags' }, fetcher)
  const { result = [] } = data ?? {}

  const clickHandler = (tag: string) => {
    router.push({
      query: { ...router.query, tag }
    })
  }

  return (
    <div
      className={styles['sub-nav']}
      style={{
        position: 'sticky',
         top: isHeaderHidden ? '0px' : '74px' 
        // top: '74px'
      }}
    >
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
