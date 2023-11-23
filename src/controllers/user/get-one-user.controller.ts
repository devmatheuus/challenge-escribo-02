import { getOneUserSchema } from '@/schemas/user/get-one-user.schema';
import { GetOneUserService } from '@/services/user/get-one-user.service';
import { Request, Response } from 'express';

export const GetOneUserController = async (request: Request, response: Response) => {
    const { id } = getOneUserSchema.parse(request.params);

    const user = await GetOneUserService(id);

    return response.json(user);
};
