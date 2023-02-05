import Mysql from "@/db/connection";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const mysql = new Mysql()

  if (req.method === 'GET') {
    try {
      const result = await mysql.getTags()
      if (!!result.result) {
        const _result: string[] = []
        result.result.forEach((item: {name: string, id: number}) => {
          _result.push(item.name)
        });
        res.status(200).json({result: _result})
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
      const result = await mysql.addTag(tag.name)
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