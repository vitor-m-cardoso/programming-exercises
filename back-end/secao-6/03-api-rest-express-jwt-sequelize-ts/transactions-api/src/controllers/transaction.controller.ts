import { Request, Response } from 'express';
import transactionService from '../services/transaction.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const listAll = async (_req: Request, res: Response) => {
  const { status, data } = await transactionService.listAll();

  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json(data);
  }
  return res.status(mapStatusHTTP(status)).json(data);
};

const listById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { status, data } = await transactionService.listById(id);

  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json(data);
  }
  return res.status(mapStatusHTTP(status)).json(data);
};

const create = async (req: Request, res: Response) => {
  const { name, price, type, userId } = req.body;
  const { status, data } = await transactionService.create({ name, price, type, userId });

  if (status !== 'CREATED') {
    return res.status(mapStatusHTTP(status)).json(data);
  }

  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  create,
  listAll,
  listById,
};
