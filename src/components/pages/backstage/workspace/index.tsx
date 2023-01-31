import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import Button from '@mui/material/Button';
import Space from '@/components/basic/space';
import { useState } from 'react';
import Input from '@mui/material/Input';
import styles from './style.module.scss'

const mdParser = new MarkdownIt()

type Content = {
  html: string,
  text: string
}

const WorkSpace = () => {
  const [title, setTitle] = useState<string>()
  const [content, setContent] = useState<Content>()

  /**
   * 这里要加上防抖
   */
  const titleChangeHandler = (e: any) => {
    setTitle(e.target.value)
  }
  const contentChangeHandler = ({ html, text }: any) => {
    setContent({ html, text })
  }

  return (
    <div className={styles['root']}>
      <div className={styles['header-wrapper']}>
        <Space>
          <Button variant='text'>发布</Button>
          <Button >存草稿</Button>
        </Space>
      </div>
      <div className={styles['editor-wrapper']}>
        <div className={styles['title']}>
          <Input
            value={title}
            onChange={titleChangeHandler}
            placeholder='在此输入文章标题' />
        </div>
        <MdEditor
          className={styles['editor']}
          style={{}}
          value={content?.text}
          renderHTML={text => mdParser.render(text)}
          onChange={contentChangeHandler} />
      </div>
    </div>
  )
}

export default WorkSpace