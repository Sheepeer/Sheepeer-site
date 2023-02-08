import Mysql from "@/db/connection";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'GET') {
    try {
      const result = await Mysql.getTags()
      console.log(result)
      if (!!result.result) {
        const _result: string[] = []
        result.result.forEach((item: { name: string, id: number }) => {
          _result.push(item.name)
        });
        res.status(200).json({ result: _result })
      } else {
        res.status(500).json({ msg: 'error' })
      }
    } catch (e) {
      res.status(500).json({ msg: 'error' })
    }
  }

  if (req.method === 'POST') {
    const session = await getServerSession(req, res, authOptions)
    if (session) {
      const tag = req.body
      try {
        const result = await Mysql.addTag(tag.name)
        if (result.msg === 'success') {
          res.status(200).json(result)
        } else {
          res.status(500).json({ msg: 'error' })
        }
      } catch (e) {
        res.status(500).json({ msg: 'error' })
      }
    }else {
      res.status(401).json({msg: 'U\'re not login'})
    }

  }
}

export default handler