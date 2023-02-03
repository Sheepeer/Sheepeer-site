import { NextApiRequest, NextApiResponse } from 'next'
import Mysql from 'src/db/connection'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const mysql = new Mysql()
    try {
      const result = await mysql.getPosts()
      if (!!result.result) {
        res.status(200).json(result)
      }
      res.status(500).json({ msg: 'error' })
    } catch (e) {
      res.status(500).json({ msg: e })
    }
  }
}

export default handler