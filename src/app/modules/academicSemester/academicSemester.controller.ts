import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../share/catchAsync';
import sendResponse from '../../../share/sendResponse';
import httpStatus from 'http-status';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    next();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester created successfullu',
      data: result,
    });
  }
);

export const createAcademicSemesterControllers = { createSemester };
