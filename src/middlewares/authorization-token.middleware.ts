import { Request, Response, NextFunction } from 'express';
import { Secret, verify } from 'jsonwebtoken';
import { AppError } from '@/errors/app-error';

export const AuthorizationTokenMiddleware = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { authorization } = request.headers;

    if (!authorization) {
        throw new AppError(401, 'Não autorizado');
    }

    const [, token] = authorization.split(' ');

    verify(token.trim(), process.env.SECRET_KEY as Secret, (error, decoded) => {
        if (error) {
            const message = error.message === 'jwt expired' ? 'Sessão inválida' : 'Não autorizado';

            throw new AppError(401, message);
        }

        next();
    });
};
