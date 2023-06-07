import { z } from 'zod';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles,
} from './acdemicSemester.constant';

const creaAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(
      [...academicSemesterTitles] as [string, ...string[]],

      {
        required_error: 'title is required',
      }
    ),
    year: z.number({
      required_error: 'year is required',
    }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]]),
    startMonth: z.enum(
      [...academicSemesterMonths] as [string, ...string[]],

      {
        required_error: 'start month is required',
      }
    ),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'end month is required',
    }),
  }),
});

export const AcademicSemesterValidation = {
  creaAcademicSemesterZodSchema,
};