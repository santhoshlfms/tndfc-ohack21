// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from "../../../firebase/fbAdmin"
import {sign} from "jsonwebtoken";

type Data = {
    name?: string,
    status?: string,
    data?: Object,
    accessToken?:string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        let { mobileNo } = req.body
        let TOP_USERS = process.env.USERS || [];
        if (mobileNo != undefined) {
            const applicationRef = admin.collection('application');
            await applicationRef.doc(mobileNo).get().then((docRef: any) => {
                let userDoc = docRef.data();
                if (userDoc) {
                    //let isAdmin = TOP_USERS.includes(mobileNo);

                    // we need to create JWT here and for future calls we need to use the same token
                    const claims = {userId: mobileNo}
                    console.log(mobileNo, process.env.SIGNING_TOKEN)
                    const jwt = sign(claims, process.env.SIGNING_TOKEN!, {expiresIn: '1h'})
                    res.status(200).json({ status: 'success', data: userDoc, accessToken: jwt })
                } else {
                    res.status(200).json({ status: 'NO_DATA_FOUND', data: {} })
                }
            }).catch((error: any) => { console.log("ERROR_FETCHING_DOCUMENT") });
        } else {
            res.status(200).json({ status: 'NO_DATA_FOUND', data: {} })
        }

    } else {
        res.status(405).json({ status: 'METHOD_NOT_SUPPORTED' })
    }

}
