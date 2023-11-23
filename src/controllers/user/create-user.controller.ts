import { AppError } from '@/errors/app-error';
import { createUserSchema } from '@/schemas/user/create-user.schema';
import { CreateUserService } from '@/services/user/create-user.service';
import { Request, Response } from 'express';

export const CreateUserController = async (req: Request, res: Response) => {
    const validatedData = createUserSchema.parse(req.body);

    const userCreated = await CreateUserService(validatedData);

    return res.json({ ...userCreated }).status(201);
};
