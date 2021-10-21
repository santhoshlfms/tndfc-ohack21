// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import admin from "../../../firebase/fbAdmin"
import {userSchema} from "../../../schema/user"
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';
import {validate} from "../../../middleware/validate"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    let { mobileNo } = req.body
    console.log( req.body)
        const doc = await admin.collection('applications').doc(mobileNo).set(req.body, { merge: true }).then(() => {
            res.status(200).json({ ...req.body, method: req.method })
        });
    };

export default validate(userSchema, handler);
