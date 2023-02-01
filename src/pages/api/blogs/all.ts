import { NextApiRequest, NextApiResponse } from 'next'
import Mysql from 'src/db/connection'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const mysql = new Mysql()
  try {
    const result = mysql.getPosts()
    res.status(200).json(result.result)
    // if (result.result) {
    //   res.status(200).json(result.result)
    // } else {
    //   res.status(500).json({ err: 'posts is empty' })
    // }
  } catch (e) {
    res.status(500).json({ err: e })
  }
}

export default handler