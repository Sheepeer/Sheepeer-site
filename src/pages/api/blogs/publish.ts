import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { addPost, updatePost } from "@/db/postgres";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  if (session || process.env.NODE_ENV === "development") {
    const post = req.body;

    if (req.method === "POST") {
      const result = await addPost(post);
      if (result.res && !result.error) {
        res.status(200).json({ msg: "success" });
      } else {
        res.status(500).json({ msg: result.error });
      }
    }

    if (req.method === "PUT") {
      const result = await updatePost(post);
      if (result.res && !result.error) {
        res.status(200).json({ msg: "success" });
      } else {
        res.status(500).json({ msg: result.error });
      }
    }
  } else {
    res.status(401).json({ msg: `You don't have permission` });
  }
};

export default handler;
