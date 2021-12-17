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
    if (req.method === 'GET') {
        let users: any[] = [];
        await admin.auth().listUsers()
        .then((listUsersResult : any) => {
          listUsersResult.users.forEach((userRecord :any) => {
            if(userRecord.emailVerified && userRecord.customClaims.ROLE === 'ADMIN_TNDFC')
               users.push(userRecord);
          });
        })
        .catch((error:any) => {
          console.log('Error listing users :', error);
        });
        res.status(200).json({ status: "SUCCESS", data: users });
    } else {
        res.status(405).json({ status: 'METHOD_NOT_SUPPORTED' })
    }
}


