import { NextApiRequest, NextApiResponse } from "next"

const PWD = '123123'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method?.toUpperCase() === 'POST') {
    const { pwd } = req.body
    if (pwd === PWD) {
      res.status(200).json({ result: 'success' })
    } else {
      res.status(200).json({ result: 'incorrect password' })
    }
  }
}

export default handler