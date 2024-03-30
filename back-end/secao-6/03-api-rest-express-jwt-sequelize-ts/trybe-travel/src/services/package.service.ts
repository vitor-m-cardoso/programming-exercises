import { ServiceResponse } from '../types/ServiceResponse';
import PackageModel from '../database/models/Package.model';
import { Package } from '../types/Package';
import validatePackage from '../utils/validatePackage';

const updatePackage = async (packageToUpdate: Package): Promise<ServiceResponse<Package>> => {
  const { id, destination, category, price } = packageToUpdate;
  const error = await validatePackage(id);

  if (error) {
    return { status: 'NOT_FOUND', data: { message: error } };
  }

  const [affectedCount] = await PackageModel.update(
    { destination, category, price },
    { where: { id } },
  );

  if (!affectedCount) {
    return { status: 'INVALID_DATA', data: { message: 'Problem trying to update package' } };
  }

  return { status: 'SUCCESSFUL', data: packageToUpdate };
};

const deletePackage = async (id: number): Promise<ServiceResponse<string>> => {
  const error = await validatePackage(id);
  
  if (error) {
    return { status: 'NOT_FOUND', data: { message: error } };
  }

  const deletedPackage = await PackageModel.destroy({ where: { id } });

  if (!deletedPackage) {
    return { status: 'INVALID_DATA', data: { message: 'Error trying to delete package' } };
  }
  return { status: 'NO_CONTENT', data: 'Package deleted successfully' };
};

export default {
  updatePackage,
  deletePackage,
};
