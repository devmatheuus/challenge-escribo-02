type PhoneType = {
    numero: string;
    ddd: string;
};

export type CreateUserType = {
    nome: string;
    email: string;
    senha: string;
    telefones: PhoneType[];
};
