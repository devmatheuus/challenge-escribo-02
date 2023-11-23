import { CreateUserController } from '@/controllers/user/create-user.controller';
import { GetOneUserController } from '@/controllers/user/get-one-user.controller';
import { SignInController } from '@/controllers/user/sign-in.controller';
import { AuthorizationTokenMiddleware } from '@/middlewares/authorization-token.middleware';
import { Router } from 'express';

const router = Router();

export const userRoutes = () => {
    router.post('/signup', CreateUserController);
    router.post('/signin', SignInController);
    router.get('/:id', AuthorizationTokenMiddleware, GetOneUserController);

    return router;
};
