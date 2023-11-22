import 'express-async-errors';
import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('It works!');
});

export default app;
