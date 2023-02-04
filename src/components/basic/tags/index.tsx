import classNames from 'classnames'
import Tag from '../tag'
import AddIcon from '@mui/icons-material/Add'
import styles from './style.module.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Input from '@mui/material/Input'
import useDidMount from '@/hooks/useDidMount'

interface Props {
  tagList: string[]
  onChoose: (value: string) => void
  choosed: string
  showAdd?: boolean
  max?: number
  className?: string
}

const Tags = ({ tagList, onChoose, choosed, showAdd = false, max = 15, className }: Props) => {

  const [addTagName, setAddTagName] = useState<string>('')
  const [_tagList, setTagList] = useState<string[]>([])

  useEffect(() => {
    setTagList(tagList)
  }, [tagList])

  const addTag = () => {
    if (!!addTagName) {
      axios.post('/api/tags', { name: addTagName })
        .then(res => {
          if (res.data.message === 'success') {
            const tl = Array.from(tagList)
            tl.push(addTagName)
            setTagList(tl)
          }
        })
        .catch(e => alert('添加失败'))
    }
  }

  return (
    <div className={classNames(styles['tags'], className)}>
      {
        _tagList.map(tag => (
          <Tag
            key={tag}
            isChoosed={tag === choosed}
            onClick={onChoose}
          >{tag}</Tag>
        ))
      }
      <div className={styles['tag-add']}>
        <div>
          <AddIcon fontSize='small' />
          <span>add tag</span>
          <Input
            size='small'
            value={addTagName}
            onChange={(e) => setAddTagName(e.target.value)}
            onBlur={addTag} />
        </div>
      </div>


    </div>
  )
}

export default Tags