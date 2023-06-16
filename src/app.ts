import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

// app.get('/', async (req: Request, res: Response) => {
//   Promise.reject(new Error('Unhaled Promise Rejection'))
// })

// \global Error Handle
app.use(globalErrorHandler);

//Not Fount route handle
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: '.',
        message: 'API NOT FOUND',
      },
    ],
  });
});

export default app;
