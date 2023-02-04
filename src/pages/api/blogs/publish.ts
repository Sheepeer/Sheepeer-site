import { NextApiRequest, NextApiResponse } from 'next'
import Mysql from 'src/db/connection'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const post = req.body

  if (req.method === 'POST') {
    const mysql = new Mysql()
    try {
      const result = await mysql.addPost(post)
      if (result.msg === 'success') {
        res.status(200).json({ msg: 'success' })
      } else {
        res.status(500).json({ msg: 'error' })
      }
    } catch (e) {
      res.status(500).json({ msg: e })
    }
  }
}

export default handler