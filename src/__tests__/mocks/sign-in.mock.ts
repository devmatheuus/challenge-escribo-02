import { createUserMock } from './create-user.mock';

export const validSignInMock = {
    email: createUserMock.email,
    senha: createUserMock.senha,
};

export const invalidSignInMock = {
    email: createUserMock.email,
    senha: '123',
};
