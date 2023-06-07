import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

// app.get('/', async (req: Request, res: Response) => {
//   Promise.reject(new Error('Unhaled Promise Rejection'))
// })

app.use(globalErrorHandler);
export default app;
