import 'dotenv/config';
import AppDataSource from '@/data-source';
import { User } from '@/entities/user.entities';
import { AppError } from '@/errors/app-error';
import { SignInSchemaType } from '@/schemas/user/sign-in.schema';
import { compare } from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';

export const SignInService = async ({ email, senha: password }: SignInSchemaType) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ email });

    if (!user) {
        throw new AppError(401, 'Usuário e/ou senha inválidos');
    }

    const matchPassword = await compare(password, user.password);

    if (!matchPassword) {
        throw new AppError(401, 'Usuário e/ou senha inválidos');
    }

    await userRepository.update(user.id, { lastLogin: new Date() });

    const token = jwt.sign(
        {
            exp: Math.floor(Date.now() / 1000) + 30 * 60,
            data: {
                id: user.id,
            },
        },
        process.env.SECRET_KEY as Secret
    );

    const userResponse = {
        id: user.id,
        data_criacao: user.createdAt,
        data_atualizacao: user.updatedAt,
        ultimo_login: user.lastLogin ?? new Date(),
        token,
    };

    return userResponse;
};
