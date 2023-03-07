import {
  ADD_POST_SQL,
  ADD_TAG_SQL,
  GET_ALL_POSTS_SQL,
  GET_POST_SQL,
  GET_TAGS_SQL,
  MOD_POST_SQL,
  GET_POSTS_SUM_SQL
} from './sqls'
import connectMysql from './connect'
import { DEL_POST_SQL, GET_ALL_DRAFTS_SQL } from './sqls/post'

export interface Post {
  title: string,
  content: string,
  content_html: string
  tag: string,
  date: number,
  isDraft: 0 | 1
  id?: number
}

const connection = connectMysql()

class Mysql {

  // posts
  static getPosts = (tag?: string) => {
    return new Promise<{ result: any, errno: 0 | 1 }>((resolve, reject) => {
      try {
        connection.query(
          GET_ALL_POSTS_SQL(tag),
          [tag],
          function (err, result) {
            if (err) {
              reject({ result: err, errno: 1 })
            } else {
              resolve({ result: result, errno: 0 })
            }
          }
        )
      } catch (e) {
        reject({ result: e, errno: 1 })
      }
    })
  }

  static getDrafts = () => {
    return new Promise<{ result: any, errno: 0 | 1 }>((resolve, reject) => {
      try {
        connection.query(
          GET_ALL_DRAFTS_SQL,
          function (err, result) {
            if (err) {
              reject({ result: err, errno: 1 })
            } else {
              resolve({ result: result, errno: 0 })
            }
          }
        )
      } catch (e) {
        reject({ result: e, errno: 1 })
      }
    })
  }

  static getPost = (id: number) => {
    return new Promise<{ result: any }>((resolve, reject) => {
      connection.query(
        GET_POST_SQL,
        [id],
        function (err, result) {
          if (err) {
            reject({ result: null })
          } else {
            resolve({ result: result })
          }
        }
      )
    })
  }

  static addPost = (values: Post) => {
    const { title, content, content_html, tag, date, isDraft } = values
    return new Promise<{ msg: 'success' | 'error' }>((resolve, reject) => {
      connection.execute(
        ADD_POST_SQL,
        [title, content, content_html, tag, date, isDraft],
        function (err, result) {
          if (err) {
            console.error(err)
            reject({ msg: 'error' })
          } else {
            resolve({ msg: 'success' })
          }
        }
      )
    })
  }

  static modPost = (values: Post) => {
    const { id, title, content, content_html, tag, date, isDraft } = values
    return new Promise<{ msg: 'success' | 'error' }>((resolve, reject) => {
      connection.execute(
        MOD_POST_SQL,
        [title, content, content_html, tag, date, isDraft, id],
        function (err, result) {
          if (err) {
            reject({ msg: 'error' })
          } else {
            resolve({ msg: 'success' })
          }
        }
      )
    })
  }

  static delPost = (id: number) => {
    return new Promise<{ msg: 'success' | 'error' }>((resolve, reject) => {
      connection.execute(
        DEL_POST_SQL,
        [id],
        function (err, result) {
          if (err) {
            reject({ msg: 'error' })
          } else {
            resolve({ msg: 'success' })
          }
        }
      )
    })
  }

  // tags
  static getTags = () => {
    return new Promise<{ result: any }>((resolve, reject) => {
      connection.query(
        GET_TAGS_SQL,
        function (err, result) {
          if (err) {
            reject({ result: null })
          } else {
            resolve({ result: result })
          }
        }
      )
    })
  }

  static addTag = (value: string) => {
    return new Promise<{ msg: 'success' | 'error' }>((resolve, reject) => {
      connection.execute(
        ADD_TAG_SQL,
        [value],
        function (err, result) {
          if (err) {
            console.error(err)
            resolve({ msg: 'error' })
          } else {
            resolve({ msg: 'success' })
          }
        }
      )
    })
  }

  static getPostsSum = () => {
    return new Promise<{ result: any }>((resolve, reject) => {
      connection.query(
        GET_POSTS_SUM_SQL,
        function (err, result) {
          if (err) {
            reject({ result: null })
          } else {
            resolve({ result: result })
          }
        }
      )
    })
  }
}

export default Mysql
