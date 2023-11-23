import 'dotenv/config';
import { DataSource } from 'typeorm';

const isTestEnvironment = process.env.NODE_ENV === 'test';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: isTestEnvironment ? process.env.POSTGRES_DB_TEST : process.env.POSTGRES_DB,
    synchronize: isTestEnvironment,
    logging: false,
    entities: ['src/entities/*.ts'],
    migrations: ['src/migrations/*.ts'],
});
export default AppDataSource;
