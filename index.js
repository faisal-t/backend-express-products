import express from "express";
import db from './config/database.js';
import ProductRoutes from './router/index.js';
import cors from 'cors';

const app = express();

try {
    await db.authenticate();
    console.log('database connected');
} catch (error) {
    console.error('database not connected',error);
}

app.use(cors());
app.use(express.json());
app.use('/products',ProductRoutes);



app.listen(5000,() => console.log('server runing at port 5000'));