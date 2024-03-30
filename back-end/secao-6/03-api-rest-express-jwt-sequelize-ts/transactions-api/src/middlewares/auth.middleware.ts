import { NextFunction, Request, Response } from 'express';
import * as jwtUtil from '../utils/jwt';
import UserModel from '../database/models/user.model';

const extractBearer = (authorization: string): string => authorization.split(' ')[1];

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token required' });
  }
  const token = extractBearer(authorization);
  try {
    const decoded = jwtUtil.verify(token);
    const user = await UserModel.findOne({ where: { email: decoded.email } });
    if (!user) return res.status(401).json({ message: 'Invalid token' });
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired Token' });
  }
};

export default authMiddleware;