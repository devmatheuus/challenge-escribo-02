declare global {
    namespace NodeJS {
        interface ProcessEnv {
            POSTGRES_USER: string;
            POSTGRES_PASSWORD: string;
            POSTGRES_DB: string;
            DB_HOST: string;
            SECRET_KEY: string;
            NODE_ENV: 'development' | 'production' | 'test';
            PORT: number;
        }
    }
}

export {};
