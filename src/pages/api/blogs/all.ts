import { NextApiRequest, NextApiResponse } from 'next'
import Mysql from 'src/db/connection'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const mysql = new Mysql()
    try {
      const result = await mysql.getPosts()
      res.status(200).json(result)
    } catch (e) {
      res.status(500).json({ err: e })
    }
  }
}

export default handler