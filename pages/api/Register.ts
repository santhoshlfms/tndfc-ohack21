// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../utils/dbConnection";

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    dbConnect();
    res.status(200).json({ name: "John Doe" });
  } catch (e: any) {
    console.log(e);
  }
}
