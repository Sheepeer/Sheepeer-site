import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import Mysql from 'src/db/connection'
import { authOptions } from '../auth/[...nextauth]'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    if (req.method === 'DELETE') {
      const { id = '' } = req.query
      try {
        const result = await Mysql.delPost(parseInt(id as string))
        if (result.msg === 'success') {
          res.status(200).json({ msg: 'success' })
        } else {
          res.status(500).json({ msg: 'error' })
        }
      } catch (e) {
        res.status(500).json({ msg: e })
      }
    }
  } else {
    res.status(401).json({ msg: `You don't have permission` })
  }
}

export default handler