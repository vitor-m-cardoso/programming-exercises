export type Transaction = {
  id: number,
  name: string,
  price: string,
  type: 'Saque' | 'Depósito',
  userId: number;
};
