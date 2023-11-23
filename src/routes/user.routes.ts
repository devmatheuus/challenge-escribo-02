import { CreateUserController } from '@/controllers/user/create-user.controller';
import { SignInController } from '@/controllers/user/sign-in.controller';
import { Router } from 'express';

const router = Router();

export const userRoutes = () => {
    router.post('/signup', CreateUserController);
    router.post('/signin', SignInController);

    return router;
};
