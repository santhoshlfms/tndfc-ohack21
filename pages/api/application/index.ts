// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from "../../../firebase/fbAdmin"

type Data = {
    name?: string,
    status?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (req.method === 'POST') {
        let {mobileNo} = req.body
        if(mobileNo != undefined) {
            const doc =  await admin.collection('applications').doc(mobileNo).set(req.body, { merge: true }).then(()=>{
                res.status(200).json({ status: 'saved' })
            });


           
        }else {
            res.status(200).json({ status: 'MobileNo not found' })
        }

    } else {
        res.status(405).json({ status: 'Not Supported' })
    }

}
