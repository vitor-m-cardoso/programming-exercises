import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const login = async (req: Request, res: Response) => {
  const { status, data } = await loginService.verifyLogin(req.body);

  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json(data);
  }
  return res.status(mapStatusHTTP(status)).json(data);
};

export default { login };