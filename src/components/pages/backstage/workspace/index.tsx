import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import Button from '@mui/material/Button';
import Space from '@/components/basic/space';
import { useState, useEffect } from 'react';
import Input from '@mui/material/Input';
import styles from './style.module.scss'
import axios from 'axios';
import moment from 'moment';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
import Tags from '@/components/basic/tags';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/router';
import useSWR from 'swr'
import fetcher from '@/utils/fetcher';
import { TagProps } from '@/components/basic/tag';

const mdParser = new MarkdownIt()

type Content = {
  html: string,
  text: string
}

const WorkSpace = () => {
  const router = useRouter()
  const id = router.query.id

  const { data, error } = useSWR({
    url: id ? '/api/blogs/searchById' : null,
    query: { id }
  }, fetcher)
  const { result: blog = {} } = data ?? {}
  const blogStr = JSON.stringify(blog)

  const [tagList, setTagList] = useState<Array<TagProps>>([])

  const [title, setTitle] = useState<string>()
  const [content, setContent] = useState<Content>({ text: '', html: '' })
  const [tag, setTag] = useState<string>('')

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (blog && JSON.stringify(blog) !== '{}') {
      setTitle(blog.title)
      setContent({
        text: blog.content,
        html: blog.content_html
      })
      setTag(blog.tag)
    }
  }, [blogStr])

  /**
   * 这里要加上防抖
   */
  const titleChangeHandler = (e: any) => {
    setTitle(e.target.value)
  }
  const contentChangeHandler = ({ html, text }: any) => {
    setContent({ html, text })
  }

  const publishPost = (isDraft: 0 | 1) => {
    if (!title) {
      alert('请填写标题')
      return
    }
    if (!content) {
      alert('请填写内容')
      return
    }
    if (!tag) {
      alert('请选择标签')
      return
    }
    const currDate = moment().valueOf()
    if (id) {
      // modify post
      axios.put('/api/blogs/publish', {
        id,
        title,
        content: content.text,
        content_html: content.html,
        tag,
        date: currDate,
        isDraft
      })
        .then(res => {
          if (res.data.msg === 'success') {
            setOpen(false)
            alert(isDraft ? '已存入草稿' : '已成功发布')
          }
        })
        .catch(e => {
          alert(isDraft ? '草稿保存失败' : '发布失败')
        })
    } else {
      // add post
      axios
        .post('/api/blogs/publish', {
          title,
          content: content.text,
          content_html: content.html,
          tag,
          date: currDate,
          isDraft
        })
        .then(res => {
          if (res.data.msg === 'success') {
            setOpen(false)
            alert(isDraft ? '已存入草稿' : '已成功发布')
          }
        })
        .catch(e => {
          alert(isDraft ? '草稿保存失败' : '发布失败')
        })
    }

  }


  const getTags = () => {
    axios.get('/api/tags')
      .then(res => {
        if (res.data.result) {
          setTagList(res.data.result)
        }
      })
      .catch(e => console.error(e))
  }

  const onImageUpload = (file: any) => {
    return new Promise((resolve, reject) => {
      axios.post(`${location.protocol}//${location.hostname}:36677/upload`)
        .then(res => {
          if (res.data && res.data.success === true) {
            resolve(res.data.result[0])
          }
        })
        .catch(e => reject(e))
    })
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
        <Button
          variant='contained'
          onClick={() => {
            setOpen(true)
            getTags()
          }}
        >完成</Button>
      </div>
      <div className={styles['editor-wrapper']}>
        <MdEditor
          className={styles['editor']}
          value={content?.text}
          renderHTML={text => mdParser.render(text)}
          shortcuts={true}
          onChange={contentChangeHandler}
          onImageUpload={onImageUpload}
        />
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
            tagList={tagList}
            onChoose={(value) => setTag(value)}
            choosed={tag}
            className={styles['tags-wrapper']}
            showAdd={true}
          />
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={() => publishPost(0)}>发布</Button>
          <Button variant='contained' onClick={() => publishPost(1)}>存草稿</Button>
          <Button variant='outlined' onClick={() => setOpen(false)}>取消</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default WorkSpace