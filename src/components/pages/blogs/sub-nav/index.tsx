import { useRouter } from 'next/router'
import styles from './style.module.scss'
import classNames from 'classnames'

const SubNav = () => {
  // fetch tags
  const TAGS = ['javascript', 'react', '设计模式']
  const router = useRouter()
  const currTag = router.query?.tag ?? TAGS[0]

  const clickHandler = (tag: string) => {
    router.push({
      query: { tag }
    })
  }

  return (
    <div className={styles['sub-nav']}>
      {
        TAGS.map(tag => (
          <div
            className={classNames(styles['item'], { [styles['item-active']]: tag === currTag })}
            onClick={() => clickHandler(tag)}
            key={tag}
          >
            {tag}
          </div>
        ))
      }
    </div>
  )
}

export default SubNav
