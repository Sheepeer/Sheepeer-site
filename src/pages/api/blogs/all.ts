import { NextApiRequest, NextApiResponse } from 'next'
import Mysql from 'src/db/connection'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { tag = '' } = req.query

    try {
      const result = await Mysql.getPosts(tag as string)
      if (result.errno === 0) {
        res.status(200).json(result)
      }
      res.status(500).json(result)
    } catch (e) {
      res.status(500).json({ msg: e })
    }
  }
}

export default handler