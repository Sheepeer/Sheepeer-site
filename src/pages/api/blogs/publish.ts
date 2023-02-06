import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import Mysql from 'src/db/connection'
import { authOptions } from '../auth/[...nextauth]'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = await getServerSession(req, res, authOptions)
  // if (session) {
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
  // } else {
  //   res.status(401).json({msg: 'U\'r not login'})
  // }

}

export default handler