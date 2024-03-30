import { Model, DataTypes, ModelDefined, Optional } from 'sequelize';
import { User } from '../../types/User';
import db from './index';

export type UserInputtableFields = Optional<User, 'id'>;
type UserSequelizeModelCreator = ModelDefined<User, UserInputtableFields>;

export type UserSequelizeModel = Model<User, UserInputtableFields>;

const UserModel: UserSequelizeModelCreator = db.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  name: DataTypes.STRING,
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;
