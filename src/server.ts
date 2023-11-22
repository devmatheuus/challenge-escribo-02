import AppDataSource from './data-source';
import app from './app';

(async () => {
    await AppDataSource.initialize().catch((err) => {
        console.error(`Error during database initialization: ${err}`);
        process.exit(1);
    });

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
})();
