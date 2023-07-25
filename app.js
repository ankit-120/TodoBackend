import express from "express";
import userRouter from "./routes/userRoute.js";
import dotenv from 'dotenv';

dotenv.config({
    path: './data/.env'
});

export const app = express();

app.get('/', (req, res) => {
    res.send('node started');
})

//using middleware
app.use(express.json());
app.use('/users', userRouter)


