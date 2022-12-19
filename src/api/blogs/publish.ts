import { NextApiRequest, NextApiResponse } from 'next'
import Mysql from 'src/db/connection'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { post } = req.query
  const mysql = new Mysql()
  try {
    mysql.addPost(JSON.parse(post as string))
    res.status(200).json({ msg: 'success' })
  } catch (e) {
    res.status(500).json({ err: e })
  }
}

export default handler