import { NextApiRequest, NextApiResponse } from 'next'
import Mysql from 'src/db/connection'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("====", process.env.MYSQL_HOST, process.env.MYSQL_PORT)
  if (req.method === 'GET') {
    const { flag = 'posts', tag = '' } = req.query

    try {
      let result: { result: any, errno: 0 | 1 } = { result: [], errno: 1 }
      if (flag === 'drafts') {
        result = await Mysql.getDrafts()
      } else {
        result = await Mysql.getPosts(tag as string)
      }
      if (result.errno === 0) {
        res.status(200).json(result)
      } else {
        res.status(500).json(result)
      }
    } catch (e) {
      res.status(500).json({ msg: e })
    }
  }
}

export default handler