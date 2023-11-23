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

    const userResponse = {
        id: user.id,
        nome: user.name,
        email: user.email,
        data_criacao: user.createdAt,
        data_atualizacao: user.updatedAt,
        ultimo_login: user.lastLogin,
        telefones: user.phones,
    };

    return userResponse;
};
