// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import admin from "../../../firebase/fbAdmin"
import { authenticate } from "../../../middleware/apiAuthenticate"

type Data = {
    name?: string,
    status?: string,
    data?: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (req.method === 'POST') {
      let {disable, uid} = req.body;
        console.log(uid)
        let users: any[] = [];
        await admin.auth().updateUser(uid, { disabled:disable })
        .then((userRecord : any) => {
          let users = userRecord
          console.log('Successfully updated user', userRecord.toJSON());
        })
        .catch((error:any) => {
          console.log('Error listing users:', error);
        });
        res.status(200).json({ status: "SUCCESS", data: users });
    } else {
        res.status(405).json({ status: 'METHOD_NOT_SUPPORTED' })
    }
}


