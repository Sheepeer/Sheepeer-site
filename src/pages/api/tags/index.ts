import Mysql from "@/db/connection";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const mysql = new Mysql()

  if (req.method === 'GET') {
    try {
      const result = await mysql.getTags()
      if (!!result.result) {
        res.status(200).json(result)
      } else {
        res.status(500).json({ msg: 'error' })
      }
    } catch (e) {
      res.status(500).json({ msg: 'error' })
    }
  }

  if (req.method === 'POST') {
    const tag = req.body
    try {
      const result = await mysql.addTag(tag)
      if (result.msg === 'success') {
        res.status(200).json(result)
      } else {
        res.status(500).json({ msg: 'error' })
      }
    } catch (e) {
      res.status(500).json({ msg: 'error' })
    }
  }
}

export default handler