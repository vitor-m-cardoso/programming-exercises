import { Request, Response } from 'express';
import packageService from '../services/package.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const updatePackage = async (req: Request, res: Response) => {
  const {
    params: { id },
    body: { destination, category, price },
  } = req;

  const { status, data } = await packageService
    .updatePackage({ id: Number(id), destination, category, price });

  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json(data);
  }
  return res.status(mapStatusHTTP(status)).json(data);
};

const deletePackage = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { status, data } = await packageService.deletePackage(+id);

  if (status !== 'NO_CONTENT') {
    return res.status(mapStatusHTTP(status)).json(data);
  }
  return res.status(mapStatusHTTP(status)).end();
};

export default {
  updatePackage,
  deletePackage,
};
