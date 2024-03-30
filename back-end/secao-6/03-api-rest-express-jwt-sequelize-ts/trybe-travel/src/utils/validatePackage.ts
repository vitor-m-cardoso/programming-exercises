import PackageModel from '../database/models/Package.model';

const validatePackage = async (id: number): Promise<string | null> => {
  const foundPackage = await PackageModel.findOne({ where: { id } });

  if (!foundPackage) {
    return 'Package not found!';
  }
  return null;
};

export default validatePackage;
