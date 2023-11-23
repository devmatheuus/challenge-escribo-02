import AppDataSource from '@/data-source';
import { User } from '@/entities/user.entities';
import { AppError } from '@/errors/app-error';

export const GetOneUserService = async (userId: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({
        where: { id: userId },
        relations: ['phones'],
    });

    if (!user) {
        throw new AppError(400, 'Usuário não encontrado');
    }

    const { password, ...userResponse } = user;

    return userResponse;
};
