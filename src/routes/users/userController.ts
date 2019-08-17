import { Request, Response } from 'express';

import User from '../../models/users';
import { validateCreateUser } from './usersValidation';

export const createUser = async (req: Request, res: Response) => {
  const { error } = validateCreateUser(req.body);
  if (error) {
    res.status(400).end('Please fill the correct value for each field');
    return;
  }
  const user = new User(req.body);
  return user
    .save()
    .then(() => {
      res.status(201).json(user);
    })
    .catch(err => {
      res
        .status(400)
        .send(err.message)
        .end();
    });
};
