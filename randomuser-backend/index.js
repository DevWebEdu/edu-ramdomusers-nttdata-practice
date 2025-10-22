import express from 'express';
import 'dotenv/config.js'
import cors from 'cors';
import { connectDB } from './db/connection.js';
import { router } from './router/router.js';

const app = express();


connectDB();
app.use(cors())

app.use(express.json());

app.use('/api' , router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});