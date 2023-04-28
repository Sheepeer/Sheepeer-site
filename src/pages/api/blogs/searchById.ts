import { getPost } from "@/db/postgres";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { id = "" } = req.query;
    const result = await getPost(parseInt(id as string));
    if (result.res && !result.error) {
      res.status(200).json({ result: result.res });
    } else {
      res.status(500).json({ msg: result.error });
    }
  }
};

export default handler;
