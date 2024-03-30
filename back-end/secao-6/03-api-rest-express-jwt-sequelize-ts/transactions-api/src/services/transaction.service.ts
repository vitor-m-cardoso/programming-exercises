import TransactionModel, {
  TransactionInputtableFields, TransactionSequelizeModel,
} from '../database/models/transaction.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Transaction } from '../types/Transaction';
import validateTransactionsFields from '../utils/validateTransactionsFields';

const listAll = async (): Promise<ServiceResponse<TransactionSequelizeModel[]>> => {
  const transactions = await TransactionModel.findAll();

  return { status: 'SUCCESSFUL', data: transactions };
};

const listById = async (id: string): Promise<ServiceResponse<TransactionSequelizeModel>> => {
  const transaction = await TransactionModel.findOne({ where: { id } });

  if (!transaction) {
    return { status: 'NOT_FOUND', data: { message: 'Transaction not found' } };
  }
  return { status: 'SUCCESSFUL', data: transaction };
};

const create = async (
  transaction: TransactionInputtableFields,
): Promise<ServiceResponse<Transaction>> => {
  const error = validateTransactionsFields(transaction);
  if (error) {
    return { status: 'INVALID_DATA', data: { message: error } };
  }

  const newTransaction = await TransactionModel.create(transaction);
  return { status: 'CREATED', data: newTransaction.dataValues };
};

export default {
  create,
  listAll,
  listById,
};
