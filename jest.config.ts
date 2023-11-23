export default {
    moduleNameMapper: { '@/(.*)': '<rootDir>/src/$1' },
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\', 'src/data-source.ts'],
    coverageProvider: 'v8',
    preset: 'ts-jest',
    testMatch: ['**/**/*.spec.ts'],
};
