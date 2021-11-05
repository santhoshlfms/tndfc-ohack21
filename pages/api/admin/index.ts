// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from "../../../firebase/fbAdmin"
import { authenticate } from "../../../middleware/apiAuthenticate"

type Data = {
    name?: string,
    status?: string,
    data?: Object
}

export default authenticate(async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (req.method === 'GET') {
        let { userId } = req.query
        const entries = await admin.collection('applications').get();
        const entriesData = entries.docs.map((entry: { id: any; data: () => any }) => ({
            id: entry.id,
            ...entry.data()
        }));
        res.status(200).json({ status: "SUCCESS", data: entriesData });
    } else {
        res.status(405).json({ status: 'METHOD_NOT_SUPPORTED' })
    }
})
