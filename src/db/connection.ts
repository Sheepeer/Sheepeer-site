import mysql from 'mysql2'
import { ADD_POST_SQL, ADD_TAG_SQL, GET_ALL_POSTS_SQL, GET_POST_SQL, GET_TAGS_SQL, sqlTemplate } from './sqls'

export interface Post {
  title: string,
  content: string,
  content_html: string
  tag: string,
  date: number
}


class Mysql {
  private connection

  constructor() {
    this.connection = mysql.createConnection({
      host: '43.143.198.224',
      port: 3306,
      user: 'root',
      password: 'Sheepeer0719',
      database: 'sheepeer'
    })
  }

  // posts
  public getPosts = () => {
    return new Promise<{ result: any }>((resolve, reject) => {
      this.connection.query(
        GET_ALL_POSTS_SQL,
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

  public getPost = (id: number) => {
    console.log('id -',id)
    return new Promise<{ result: any }>((resolve, reject) => {
      this.connection.query(
        sqlTemplate(GET_POST_SQL, id),
        function (err, result) {
          // console.log(err,result)
          if (err) {
            reject({ result: null })
          } else {
            resolve({ result: result })
          }
        }
      )
    })
  }

  public addPost = (values: Post) => {
    return new Promise<{ msg: 'success' | 'error' }>((resolve, reject) => {
      this.connection.execute(
        sqlTemplate(ADD_POST_SQL, values.title, values.content, values.content_html, values.tag, values.date),
        function (err, result, fields) {
          console.log(err,result)
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
  public getTags = () => {
    return new Promise<{ result: any }>((resolve, reject) => {
      this.connection.query(
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

  public addTag = (value: string) => {
    return new Promise<{ msg: 'success' | 'error' }>((resolve, reject) => {
      this.connection.execute(
        sqlTemplate(ADD_TAG_SQL, value),
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
