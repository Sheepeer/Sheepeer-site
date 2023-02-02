import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import Button from '@mui/material/Button';
import Space from '@/components/basic/space';
import { useState } from 'react';
import Input from '@mui/material/Input';
import styles from './style.module.scss'
import axios from 'axios';
import moment from 'moment';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import Tags from '@/components/basic/tags';
import DialogTitle from '@mui/material/DialogTitle';

const mdParser = new MarkdownIt()

type Content = {
  html: string,
  text: string
}

const WorkSpace = () => {
  const [title, setTitle] = useState<string>()
  const [content, setContent] = useState<Content>({ text: '', html: '' })
  const [tag, setTag] = useState<string>('test')

  const [open, setOpen] = useState(false)

  /**
   * 这里要加上防抖
   */
  const titleChangeHandler = (e: any) => {
    setTitle(e.target.value)
  }
  const contentChangeHandler = ({ html, text }: any) => {
    setContent({ html, text })
  }

  const publishPost = () => {
    const currDate = moment().format('YYYY-MM-DD HH:mm')
    axios
      .post('/api/blogs/publish', {
        title,
        content: content.text,
        content_html: content.html,
        tag,
        date: currDate
      })
      .then(res => {
        console.log(res)
      })
      .catch(e => {

      })
  }
  const savePostAsDraft = () => {

  }

  return (
    <div className={styles['root']}>
      <div className={styles['header-wrapper']}>
        <div className={styles['title']}>
          <Input
            value={title}
            onChange={titleChangeHandler}
            placeholder='在此输入文章标题' />
        </div>
        <Space>
          <Button
            variant='text'
            onClick={() => setOpen(true)}
          >发布</Button>
          <Button
            onClick={savePostAsDraft}
          >存草稿</Button>
        </Space>
      </div>
      <div className={styles['editor-wrapper']}>
        <MdEditor
          className={styles['editor']}
          style={{}}
          value={content?.text}
          renderHTML={text => mdParser.render(text)}
          onChange={contentChangeHandler} />
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>
          选择一个标签：
        </DialogTitle>
        <DialogContent className={styles['dialog-wrapper']}>
          <Tags
            tagList={['tag1', 'tag2', 'tag3']}
            onChoose={(value) => setTag(value)}
            choosed={tag}
            className={styles['tags-wrapper']}
          />
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={publishPost}>发布</Button>
          <Button variant='outlined' onClick={() => setOpen(false)}>取消</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default WorkSpace