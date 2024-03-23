import { Item } from './04-calculateTotalPrice';

export type Order = {
  id: number;
  customerName: string;
  customerEmail: string;
  items: Item[];
  status: string;
};

export default function orderRequest(order: Order): string {
  const withoutStock = order.items.filter((item) => item.product.quantity <= 0);

  if (withoutStock.length) {
    const { name } = withoutStock[0].product;
    throw new Error(`Desculpe, ${name} não está disponível no estoque`);
  }
  const { customerName, id, status } = order;
  const customerStatus = (status === 'pendente' ? 'enviado' : 'entregue');
  return `Olá ${customerName}, o seu pedido de ID ${id} foi ${customerStatus}.`;
}
