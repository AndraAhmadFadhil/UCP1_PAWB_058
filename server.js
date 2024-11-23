import express from 'express';
import bodyParser from 'body-parser';

const app = express();


app.use(bodyParser.json());
app.listen(PORT, () => 
    console.log(`Server berjalan di port : http://localhost:${PORT}`));