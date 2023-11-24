import 'reflect-metadata';
import 'express-async-errors';
import 'module-alias/register';
import express from 'express';
import { appRoutes } from './routes/index.routes';
import { globalErrorMiddleware } from './middlewares/global-error.middleware';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
appRoutes(app);
app.use(globalErrorMiddleware);

app.use('*', (request, response) => {
    return response.status(404).json({
        mensagem: 'Endpoint não encontrado',
    });
});

export default app;
