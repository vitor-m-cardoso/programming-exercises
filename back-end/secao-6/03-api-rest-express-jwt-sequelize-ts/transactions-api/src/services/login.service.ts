import * as jwtUtil from '../utils/jwt';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel from '../database/models/user.model';
import { Token } from '../types/Token';
import { Login } from '../types/Login';

const verifyLogin = async (login: Login): Promise<ServiceResponse<Token>> => {
  if (!login.email || !login.password) {
    return { status: 'INVALID_DATA', data: { message: 'Invalid Data' } };
  }
  const foundUser = await UserModel.findOne({ where: { email: login.email } });

  if (!foundUser || foundUser.dataValues.password !== login.password) {
    return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
  }
  const { id, email } = foundUser.dataValues;

  const token = jwtUtil.sign({ id, email });

  return { status: 'SUCCESSFUL', data: { token } };
};

export default { verifyLogin };