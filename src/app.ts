import 'express-async-errors';
import 'module-alias/register';
import express from 'express';
import { appRoutes } from './routes/index.routes';
import { globalErrorMiddleware } from './middlewares/global-error.middleware';

const app = express();

app.use(express.json());
appRoutes(app);
app.use(globalErrorMiddleware);

export default app;
