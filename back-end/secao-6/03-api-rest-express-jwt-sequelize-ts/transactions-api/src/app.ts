import express, { Request, Response } from 'express';

import transactionsRouter from './routes/transaction.router';
import loginRouter from './routes/login.router';
import authMiddleware from './middlewares/auth.middleware';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

app.use('/login', loginRouter);

app.use(authMiddleware);
app.use('/transactions', transactionsRouter);

export default app;
