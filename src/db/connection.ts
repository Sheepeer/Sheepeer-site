import mysql from 'mysql2'
import { ADD_POST_SQL, ADD_TAG_SQL, GET_ALL_POSTS_SQL, GET_POST_SQL, GET_TAGS_SQL, MOD_POST_SQL } from './sqls'
import connectMysql from './connect'

export interface Post {
  title: string,
  content: string,
  content_html: string
  tag: string,
  date: number,
  id?: number
}

const connection = connectMysql()

class Mysql {

  // posts
  static getPosts = (tag?: string) => {
    return new Promise<{ result: any }>((resolve, reject) => {
      connection.query(
        GET_ALL_POSTS_SQL(tag),
        [tag],
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
    const { title, content, content_html, tag, date } = values
    return new Promise<{ msg: 'success' | 'error' }>((resolve, reject) => {
      connection.execute(
        ADD_POST_SQL,
        [title, content, content_html, tag, date],
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

  static modPost = (values: Post) => {
    const { id, title, content, content_html, tag, date } = values
    return new Promise<{ msg: 'success' | 'error' }>((resolve, reject) => {
      connection.execute(
        MOD_POST_SQL,
        [ title, content, content_html, tag, date,id],
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
            resolve({ msg: 'error' })
          } else {
            resolve({ msg: 'success' })
          }
        }
      )
    })
  }
}

export default Mysql
