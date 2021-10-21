import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { number, object } from 'yup';
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
          req.method === 'POST'
            ? schema
            : schema.concat(object({ id: number().required().positive() }));

        req.body = await newSchema
          .validate(req.body, { abortEarly: false, stripUnknown: true });
      } catch (error) {
        return res.status(400).json(error);
      }
    }
    await handler(req, res);
  };
}