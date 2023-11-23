import { signInSchema } from '@/schemas/user/sign-in.schema';
import { SignInService } from '@/services/user/sign-in.service';
import { Request, Response } from 'express';

export const SignInController = async (request: Request, response: Response) => {
    const validatedData = signInSchema.parse(request.body);

    const loggedUser = await SignInService(validatedData);

    return response.json({ ...loggedUser }).status(200);
};
