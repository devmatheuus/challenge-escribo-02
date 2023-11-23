import AppDataSource from '@/data-source';
import { CreateUserService } from '@/services/user/create-user.service';
import { DataSource } from 'typeorm';
import { createUserMock } from '../mocks/create-user.mock';
import { User } from '@/entities/user.entities';
import { Phone } from '@/entities/phone.entities';

describe('Create User Service', () => {
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

    it('should create a user and return the expected body response', async () => {
        const user = await CreateUserService(createUserMock);

        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('data_criacao');
        expect(user).toHaveProperty('data_atualizacao');
        expect(user).toHaveProperty('ultimo_login');
        expect(user).toHaveProperty('token');
    });

    it('should throw an error if the email already exists', async () => {
        await expect(CreateUserService(createUserMock)).rejects.toThrow('E-mail já existente');
    });
});
