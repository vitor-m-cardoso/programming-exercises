import { TransactionInputtableFields } from '../database/models/transaction.model';

const validateTransactionsFields = (transaction: TransactionInputtableFields): string | null => {
  const { name, price, type, userId } = transaction;
  if (!name) return 'name is required';
  if (!price) return 'price is required';
  if (!type) return 'type is required';
  if (!userId) return 'userId is required';
  return null;
};

export default validateTransactionsFields;