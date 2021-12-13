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
      let {username, password} = req.body;
        let users: any[] = [];
        admin.auth()
        .createUser({ email: username, password: password, emailVerified: true, displayName: username, disabled: false }).then((userRecord: any) => {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log('Successfully created new user:', userRecord.uid);
          const user = admin.auth().setCustomUserClaims(userRecord.uid, {"ROLE":"ADMIN_TNDFC"}).then(() => {
            console.log(user)
            res.status(200).json({ status: "SUCCESS", data: users });
           })
  
        })
        .catch((error: any) => {
          console.log('Error creating new user:', error);
        });
        
    } else {
        res.status(405).json({ status: 'METHOD_NOT_SUPPORTED' })
    }
}


