import Mysql from "@/db/connection";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const posts_sum_data = await Mysql.getPostsSum()
      if (posts_sum_data.result) {
        res.status(200).json({ result: { posts_sum: posts_sum_data.result[0]['count(*)'] } })
      } else {
        res.status(500).json({ result: 'error' })
      }
    } catch (e) {
      res.status(500).json({ result: e })
    }
  }
}

export default handler