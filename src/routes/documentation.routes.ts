import { Request, Response, Router } from 'express';
import swaggerUi, { JsonObject } from 'swagger-ui-express';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const swaggerDocument = yaml.load(readFileSync(join(__dirname, '../documentation.yml'), 'utf8'));

const router = Router();

export const documentationRoutes = () => {
    router.use('/', swaggerUi.serve);
    router.get('/', swaggerUi.setup(swaggerDocument as JsonObject));

    return router;
};
