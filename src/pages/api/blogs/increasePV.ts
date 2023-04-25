import Mysql from "@/db/connection";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (process.env.NODE_ENV === "production") {
    if (req.method === "PUT") {
        const {id=''}=req.query
        try {
        const result = await Mysql.delPost(parseInt(id as string))
        if(result.msg === 'success'){
          res.status(200).json({msg: 'success'})
        }else{
          res.status(500).json({msg: 'error'})
        }
      } catch (e) {
        res.status(500).json({ msg: e })
      }
    }
  }
};

export default handler