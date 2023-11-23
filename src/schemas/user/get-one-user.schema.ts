import { z } from 'zod';

export const getOneUserSchema = z.object({
    id: z.string({
        description: 'O id deve ser uma string',
        invalid_type_error: 'O id deve ser uma string',
        required_error: 'É necessário informar o id do usuário na url',
    }),
});
