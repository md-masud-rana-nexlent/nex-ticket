import express from 'express';
import userRouter from './apps/users/http/express';
import productRouter from './apps/products/http/express'

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/products',productRouter)

export default app;
