// import config from '../../../config'
// import { IUser } from './users.interface'
// import { User } from './users.model'

// const createUser = async (user: IUser): Promise<IUser | null> => {
//   if (!user.password) {
//     user.password = config.default_user_pass as string
//   }
//   const createdUser = await User.create(user)

//   if (!createUser) {
//     throw new Error('failed to create user')
//   }
//   return createdUser
// }
// export default {
//   createUser,
// }

import config from '../../../config/index';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generateUserId();
  user.id = id;
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);

  if (!createUser) {
    throw new Error('Failed to create user!');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
