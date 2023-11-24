import { Express } from 'express';
import { userRoutes } from './user.routes';
import { documentationRoutes } from './documentation.routes';

export const appRoutes = (app: Express) => {
    app.use('/users', userRoutes());
    app.use('/docs', documentationRoutes());
};
