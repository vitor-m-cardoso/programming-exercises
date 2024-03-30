import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import { Package } from '../../types/Package';
import db from './index';

export type PackageInputtableFields = Optional<Package, 'id'>;
type PackageSequelizeModelCreator = ModelDefined<Package, PackageInputtableFields>;

export type PackageSequelizeModel = Model<Package, PackageInputtableFields>;

const PackageModel: PackageSequelizeModelCreator = db.define('PackageModel', {
  destination: DataTypes.STRING,
  category: DataTypes.STRING,
  price: DataTypes.DECIMAL(10, 2),
}, {
  tableName: 'packages',
  timestamps: false,
});

export default PackageModel;
