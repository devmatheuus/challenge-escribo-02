import { TypeOf, z } from 'zod';

const NUMBER_REGEX = /^\d+$/;

const phoneSchema = z.object(
    {
        numero: z
            .string({
                invalid_type_error: 'O número deve ser uma string',
                required_error: 'O número é obrigatório',
            })
            .length(9, 'O número deve conter 9 caracteres')
            .refine((number) => {
                return NUMBER_REGEX.test(number);
            }, 'O número de telefone deve conter apenas caracteres numéricos'),
        ddd: z
            .string({
                invalid_type_error: 'O DDD deve ser uma string',
                required_error: 'O DDD é obrigatório',
            })
            .length(2, 'O DDD deve conter 2 caracteres')
            .refine((ddd) => {
                return NUMBER_REGEX.test(ddd);
            }, 'O DDD deve conter apenas caracteres numéricos'),
    },
    {
        required_error: 'Os telefones são obrigatórios',
        invalid_type_error:
            'Os telefones devem seguir o seguinte formato: {"numero": 123456789, "dd": 11}',
    }
);

export const createUserSchema = z.object({
    nome: z
        .string({
            invalid_type_error: 'O nome deve ser uma string',
            description: 'O nome deve ser uma string',
            required_error: 'O nome é obrigatório',
        })
        .min(2, 'O nome deve conter ao menos 2 caracteres')
        .max(255, 'O nome deve conter no máximo 255 caracteres'),
    email: z
        .string({
            invalid_type_error: 'O email deve ser uma string',
            description: 'O email deve ser uma string',
            required_error: 'O email é obrigatório',
        })
        .email('O email deve ser válido'),
    senha: z
        .string({
            invalid_type_error: 'A senha deve ser uma string',
            description: 'A senha deve ser uma string',
            required_error: 'A senha é obrigatória',
        })
        .min(4, 'A senha deve conter ao menos 4 caracteres'),
    telefones: z
        .array(phoneSchema, {
            invalid_type_error: 'Os telefones devem ser um array',
            description: 'Os telefones devem ser um array',
            required_error: 'Os telefones são obrigatórios',
        })
        .refine(
            (phones) => (phones.length <= 0 ? false : true),
            'Os telefones são obrigatórios refine'
        ),
});

export type CreateUserSchemaType = TypeOf<typeof createUserSchema>;
