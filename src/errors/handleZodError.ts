import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorRespose } from '../intarfaces/common';
import { IGenericErrorMessage } from '../intarfaces/error';

const handleZodError = (error: ZodError): IGenericErrorRespose => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'validation error',
    errorMessages: errors,
  };
};

export default handleZodError;
