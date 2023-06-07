import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { createAcademicSemesterControllers } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.creaAcademicSemesterZodSchema),
  createAcademicSemesterControllers.createSemester
);

export const academicSemesterRoute = router;
