import express, { Request, Response } from 'express';

import packagesRouter from './routes/package.router';
import loginRouter from './routes/login.router';
import authMiddleware from './middlewares/auth.middleware';
import usersRouter from './routes/user.router';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('App working!');
});

app.use('/login', loginRouter);

app.use(authMiddleware);
app.use('/users', usersRouter);
app.use('/packages', packagesRouter);

export default app;
