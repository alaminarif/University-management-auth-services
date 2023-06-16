import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { academicSemesterRoute } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRoute,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  // {
  //   path: '/academic-departments',
  //   route: AcademicDepartmentRoutes,
  // },
  // {
  //   path: '/students',
  //   route: StudentRoutes,
  // },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
//
// router.use('/users', UserRoutes);
// router.use('/academic-semesters', academicSemesterRoute);
export default router;
