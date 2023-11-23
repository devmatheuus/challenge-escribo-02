import { CreateUserController } from '@/controllers/user/create-user.controller';
import { Router } from 'express';

const router = Router();

export const userRoutes = () => {
    router.post('', CreateUserController);

    return router;
};
