import mysql from 'mysql2'
import { GET_POSTS_SQL } from './sqls'

class Mysql {
  private connection
  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'test'
    })
  }

  public getPosts = () => {
    let res: {result: any} = {result: null}
    this.connection.query(
      GET_POSTS_SQL,
      function (err, result, fields) {
        console.log(err, result, fields)
        res.result = result
      }
    )
    return res
  }
}

export default Mysql
