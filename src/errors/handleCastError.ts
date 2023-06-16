import { IGenericErrorMessage } from './../intarfaces/error';
import mongoose from 'mongoose';

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: 'Invalid Id',
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: ' Cast error',
    errorMessages: errors,
  };
};

export default handleCastError;
