import mysql from 'mysql2'

let _mysql: mysql.Connection

const connectMysql = () => {
  console.log(process.env.MYSQL_HOST)
  if (!_mysql) {
    _mysql = mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: +(process.env.MYSQL_PORT ?? ''),
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    })
  }
  return _mysql
}

export default connectMysql