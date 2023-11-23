import AppDataSource from '@/data-source';
import { CreateUserService } from '@/services/user/create-user.service';
import { DataSource } from 'typeorm';
import { createUserMock } from '../mocks/create-user.mock';
import { User } from '@/entities/user.entities';
import { Phone } from '@/entities/phone.entities';
import { SignInService } from '@/services/user/sign-in.service';
import { invalidSignInMock, validSignInMock } from '../mocks/sign-in.mock';

describe('Sign In Service', () => {
    let connection: DataSource;

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then((con) => (connection = con))
            .catch((err) => console.log(err));
    });

    afterAll(async () => {
        const userRepository = connection.getRepository(User);
        const phoneRepository = connection.getRepository(Phone);

        await phoneRepository.delete({});
        await userRepository.delete({});
        await connection.destroy();
    });

    it('Should be able to sign in', async () => {
        await CreateUserService(createUserMock);
        const sigInData = await SignInService(validSignInMock);

        expect(sigInData).toHaveProperty('id');
        expect(sigInData).toHaveProperty('data_criacao');
        expect(sigInData).toHaveProperty('data_atualizacao');
        expect(sigInData).toHaveProperty('ultimo_login');
        expect(sigInData).toHaveProperty('token');
    });

    it('Should throw an error if the sing in credentials is invalid', async () => {
        await expect(SignInService(invalidSignInMock)).rejects.toThrow(
            'Usuário e/ou senha inválidos'
        );
    });
});
