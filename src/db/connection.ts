import mysql from 'mysql2'
import { ADD_POST, GET_POSTS_SQL, sqlTemplate } from './sqls'

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

  public getPosts = async () => {
    return new Promise<{result: any}>((resolve, reject) => {
      this.connection.query(
        GET_POSTS_SQL,
        function (err, result, fields) {
          if (!err) {
            resolve({result: result})
          }else {
            reject({result: null})
          }
        }
      )
    })
  }

  public addPost = (values: Post) => {
    this.connection.execute(
      // ADD_POST_SQL(values),
      sqlTemplate(ADD_POST, values.title, values.content, values.content_html, values.tag, values.date),
      function (err, result, fields) {
        console.log(err, result, fields)
      }
    )
  }
}

export default Mysql
