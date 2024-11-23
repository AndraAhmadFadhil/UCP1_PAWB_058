import express from 'express';
import bodyParser from 'body-parser';
import pupukRoute from './routes/pupuk.js';
import bibitRoute from './routes/bibit.js';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use('/pupuk', pupukRoute);
app.use('/bibit', bibitRoute);

app.get('/', (req, res) => {
    console.log(['GET ROUTE']);
    res.send('selamat pagi');
});

app.listen(PORT, () => 
    console.log(`Server berjalan di port : http://localhost:${PORT}`));