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
      let {uid, enbale} = req.body;
        //console.log(uid)
        let users: any[] = [];
        
         admin.auth().setCustomUserClaims(uid, {"ROLE":enbale ? "ADMIN_TNDFC": "USER"}).then(() => {
          res.status(200).json({ status: "SUCCESS", data: users });
         }).catch((error:any) => {
          console.log('Error listing users:', error);
          res.status(405).json({ status: 'METHOD_NOT_SUPPORTED' })
        });
        
    } else {
        res.status(405).json({ status: 'METHOD_NOT_SUPPORTED' })
    }
}


