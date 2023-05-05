import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { addTag, getAllTags } from "@/db/postgres";
import { random } from "@/utils/random";
import { TagColor } from "@/components/basic/tag";

const COLORS = ["blue", "green", "yellow", "orange", "red"];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const result = await getAllTags();
    if (result.res && !result.error) {
      res.status(200).json({ result: result.res });
    } else {
      res.status(500).json({ msg: result.error });
    }
  }

  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (session || process.env.NODE_ENV === "development") {
      const tag = req.body;
      const result = await addTag({
        name: tag.name,
        color: COLORS[random(0, 4)] as TagColor,
      });
      if (result.res && !result.error) {
        res.status(200).json({ result: result.res });
      } else {
        res.status(500).json({ msg: result.error });
      }
    } else {
      res.status(401).json({ msg: `You don't have permission` });
    }
  }
};

export default handler;
