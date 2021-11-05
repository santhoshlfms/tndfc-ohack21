import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { string, object } from 'yup';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';

export function validate(
  schema: OptionalObjectSchema<ObjectShape>,
  handler: NextApiHandler
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    let API_METHOD = req?.method ? req.method: "";
    if (['POST', 'PUT'].includes(API_METHOD)) {
      try {
        const newSchema =
          req.method === 'POST' ? schema.concat(object({ status: string().required().default('NEW')})) : schema.concat(object({ mobileNo: string().required().min(10).max(10)}));
          req.body = await newSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
      } catch (error) {
        return res.status(400).json(error);
      }
    }
    await handler(req, res);
  };
}