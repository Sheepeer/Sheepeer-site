import { NextApiRequest, NextApiResponse } from 'next'
import Mysql from 'src/db/connection'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const post = req.body

  if (req.method === 'POST') {
    const mysql = new Mysql()
    try {
      mysql.addPost(post)
      res.status(200).json({ msg: 'success' })
    } catch (e) {
      res.status(500).json({ msg: e })
    }
  }
}

export default handler