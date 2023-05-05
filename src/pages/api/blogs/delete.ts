import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { deletePost } from "@/db/postgres";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  if (session || process.env.NODE_ENV === "development") {
    if (req.method === "DELETE") {
      const { id = "" } = req.query;
      const result = await deletePost(parseInt(id as string));
      if (result.res && !result.error) {
        res.status(200).json({ result: result.res });
      } else {
        res.status(500).json({ msg: result.error });
      }
    }
  } else {
    res.status(401).json({ msg: `You don't have permission` });
  }
};

export default handler;
