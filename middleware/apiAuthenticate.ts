import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';


export const authenticate = (fn : NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    verify(req.headers.authorization!, process.env.SIGNING_TOKEN!, async function(err, decoded){
        if(!err && decoded) {
            return await fn(req, res);
        }
        res.status(404).json({status:"NOT_AUTHORIZED"})
    })

}
