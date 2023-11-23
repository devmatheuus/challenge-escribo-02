import AppDataSource from '@/data-source';
import { CreateUserService } from '@/services/user/create-user.service';
import { DataSource } from 'typeorm';
import { createUserMock } from '../mocks/create-user.mock';
import { User } from '@/entities/user.entities';
import { Phone } from '@/entities/phone.entities';
import { GetOneUserService } from '@/services/user/get-one-user.service';
import { v4 } from 'uuid';

type UserReturnedByGetOneUserServiceType = {
    id: string;
    nome: string;
    email: string;
    data_criacao: Date;
    data_atualizacao: Date | null;
    ultimo_login: Date | null;
    telefones: Phone[];
};

describe('Get One User', () => {
    let connection: DataSource;
    let user: UserReturnedByGetOneUserServiceType;
    let userId: string;

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then((con) => (connection = con))
            .catch((err) => console.log(err));

        const { id } = await CreateUserService(createUserMock);
        userId = id;
    });

    afterAll(async () => {
        const userRepository = connection.getRepository(User);
        const phoneRepository = connection.getRepository(Phone);

        await phoneRepository.delete({});
        await userRepository.delete({});
        await connection.destroy();
    });

    it('Should be able to get one user', async () => {
        user = await GetOneUserService(userId);

        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('nome');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('data_criacao');
        expect(user).toHaveProperty('data_atualizacao');
        expect(user).toHaveProperty('ultimo_login');
        expect(user).toHaveProperty('telefones');
        expect(user.telefones).toHaveLength(2);
    });

    it('Should throw an error if the user does not exists', async () => {
        let invalidUserId = v4();

        if (invalidUserId === userId) {
            const MAX_ATTEMPTS = 10;
            let attempts = 0;

            while (invalidUserId === userId && attempts < MAX_ATTEMPTS) {
                invalidUserId = v4();

                if (invalidUserId !== userId) break;

                attempts++;
            }
        }

        await expect(GetOneUserService(invalidUserId)).rejects.toThrow('Usuário não encontrado');
    });
});
