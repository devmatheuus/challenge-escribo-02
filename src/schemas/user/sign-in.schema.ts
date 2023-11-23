import { TypeOf, z } from 'zod';

export const signInSchema = z.object({
    email: z
        .string({
            invalid_type_error: 'O email deve ser uma string',
            description: 'O email deve ser uma string',
            required_error: 'O email é obrigatório',
        })
        .email('O email deve ser válido'),
    senha: z.string({
        invalid_type_error: 'A senha deve ser uma string',
        description: 'A senha deve ser uma string',
        required_error: 'A senha é obrigatória',
    }),
});

export type SignInSchemaType = TypeOf<typeof signInSchema>;
