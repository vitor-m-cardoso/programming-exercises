import { Request, Response } from 'express';
import userService from '../services/user.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const listAll = async (_req: Request, res: Response) => {
  const { status, data } = await userService.listAll();

  return res.status(mapStatusHTTP(status)).json(data);
};

export default { listAll };