import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserService } from './user.services';
import catchAsync from '../../../share/catchAsync';
import sendResponse from '../../../share/sendResponse';
import httpStatus from 'http-status';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    // const  user  = req.body

    const result = await UserService.createUser(user);
    next();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully  ',
      data: result,
    });
  }
);

export const UserController = {
  createUser,
};

/*
res.status(200).json({
  da: dfa,
})

*/
