import { useRouter } from 'next/router'
import classNames from 'classnames'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import { COLOR_MAP, TagProps } from '@/components/basic/tag'
import styles from './style.module.scss'
import { useHeaderContent } from 'src/context/headerContent'
import { Blog } from '..'
import { useMemo } from 'react'


const Archive = () => {
  const router = useRouter()

  const { data, error } = useSWR<{ result: Array<Blog> }>({
    url: '/api/blogs/all',
  }, fetcher)
  const { result: blogList = [] } = data ?? {}

  const archiveData = useMemo(() => {
    const data: { [tag: string]: { count: number, color: string } } = {}
    for (let blog of blogList) {
      if (data[blog.tag]) {
        data[blog.tag].count++
      } else {
        data[blog.tag] = { count: 1, color: blog.color }
      }
    }
    return data
  }, [blogList])

  const chooseArchive = (tag: string) => {
    router.push({
      query: { ...router.query, tag }
    })
  }

  return (
    <div className={styles['archive']}>
      <h4 className={styles['archive-title']}>归档</h4>
      {
        Object.keys(archiveData).map(tag => (
          <div
            className={styles['archive-item']}
            key={tag}
            onClick={() => chooseArchive(tag)}
          >
            <span
              className={styles['archive-dot']}
              style={{ background: COLOR_MAP[archiveData[tag].color] }} />
            {`${tag} (${archiveData[tag].count})`}
          </div>
        ))
      }
    </div>
  )
}

export default Archive
