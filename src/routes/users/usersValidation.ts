import Joi from '@hapi/joi';
import { Request } from 'express';

function validateCreateUser(createUser: Request) {
  // validate user details
  const schema = Joi.object().keys({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required()
  });
  return Joi.validate(createUser, schema);
}

export { validateCreateUser };
