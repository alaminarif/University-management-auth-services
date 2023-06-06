import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/users/user.route';
// import ApiError from './errors/ApiError'

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', UserRoutes);

// app.get('/', async (req: Request, res: Response) => {
//   Promise.reject(new Error('Unhaled Promise Rejection'))
// })

app.use(globalErrorHandler);
export default app;
