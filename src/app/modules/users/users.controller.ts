import { Request, Response } from 'express'

import usersServices from './users.services'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    // const  user  = req.body
    console.log('d', user)
    const result = await usersServices.createUser(user)

    res.status(200).json({
      status: 'success',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: 'fail',
      message: 'can/t create user',
      error: error.message,
    })
  }
}

export default {
  createUser,
}
