import { getAllPosts } from "@/db/postgres";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { flag = "posts", tag = "" } = req.query;

    try {
      const result = await getAllPosts(flag === "draft", tag as string);
      if (result.res && !result.error) {
        res.status(200).json({ result: result.res, errno: 0 });
      } else {
        res.status(500).json({ msg: result.error });
      }
    } catch (e) {
      res.status(500).json({ msg: e });
    }
  }
};

export default handler;
