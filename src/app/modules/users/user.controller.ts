import { RequestHandler } from 'express';
import { UserService } from './user.services';

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    // const  user  = req.body

    const result = await UserService.createUser(user);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createUser,
};
