import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemester.interface';
import { AcamedicSemester } from './academicSemester.model';
import { academicSemesterTitleCodeMapper } from './acdemicSemester.constant';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code');
  }

  const result = await AcamedicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = { createSemester };
