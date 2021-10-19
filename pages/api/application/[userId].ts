// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from "../../../firebase/fbAdmin"

type Data = {
    name?: string,
    status?: string,
    data?: Object
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (req.method === 'GET') {
        let { userId } = req.query
        if (userId != undefined) {
            const applicationRef = admin.collection('applications');
            await applicationRef.doc(userId).get().then((docRef: any) => {
                let userDoc = docRef.data();
                if (userDoc) {
                    res.status(200).json({ status: 'success', data: userDoc })
                } else {
                    res.status(200).json({ status: 'error', data: {} })
                }
            })
                .catch((error: any) => { console.log("Error fetching document") });
        } else {
            res.status(200).json({ status: 'MobileNo not found' })
        }

    } else {
        res.status(405).json({ status: 'Not Supported' })
    }

}
