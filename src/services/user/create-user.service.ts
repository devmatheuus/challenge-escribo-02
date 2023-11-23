import AppDataSource from '@/data-source';
import { User } from '@/entities/user.entities';
import { AppError } from '@/errors/app-error';
import { CreateUserSchemaType } from '@/schemas/user/create-user.schema';
import { hash } from 'bcryptjs';

export const CreateUserService = async (user: CreateUserSchemaType) => {
    const { nome: name, email, senha: password, telefones: phones } = user;

    const userRepository = AppDataSource.getRepository(User);

    const emailAlreadyExists = await userRepository.findOneBy({ email });

    if (emailAlreadyExists) {
        throw new AppError(400, 'E-mail já existente');
    }

    const hashPassword = await hash(password, 8);

    const newUser = await userRepository.save({
        name,
        email,
        password: hashPassword,
        phones,
    });

    const userResponse = {
        id: newUser.id,
        data_criacao: newUser.createdAt,
        data_atualizacao: newUser.updatedAt,
        ultimo_login: newUser.lastLogin,
        token: null,
    };

    return userResponse;
};
