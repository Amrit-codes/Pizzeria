import express from 'express';
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/config.js'

import pizzaRouter from './routes/pizzaMealsRoutes.js';

import userRouter from './routes/userRoutes.js';

const app = express();

const port = process.env.PORT || 5000

connectDB();

app.use(express.json());

app.use(cors());

//routes to display pizza meals 

app.use('/api/pizza', pizzaRouter);

app.use('/images', express.static('Uploads'))

//User Routes

app.use('/api/user', userRouter)

app.listen(port, () => console.log("Server is running on port", port));
