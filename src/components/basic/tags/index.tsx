import classNames from 'classnames'
import Tag from '../tag'
import styles from './style.module.scss'

interface Props {
  tagList: string[]
  onChoose: (value: string) => void
  choosed: string
  max?: number
  className?: string
}

const Tags = ({ tagList, onChoose, choosed, max = 15, className }: Props) => {
  return (
    <div className={classNames(styles['tags'], className)}>
      {
        tagList.map(tag => (
          <Tag
            key={tag}
            isChoosed={tag === choosed}
            onClick={onChoose}
          >{tag}</Tag>
        ))
      }
    </div>
  )
}

export default Tags