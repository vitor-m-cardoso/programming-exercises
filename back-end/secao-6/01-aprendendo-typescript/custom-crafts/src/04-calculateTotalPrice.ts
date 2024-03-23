import { Product } from './02-insertProducts';

export type Item = {
  product: Product;
  quantity: number;
  phrase: string;
  brand: string;
};

export default function calculateTotalPrice(items: Item[]): number {
  const total = items.reduce((prev, curr) => {
    let acc = prev;
    acc += curr.product.price * curr.quantity;
    return acc;
  }, 0);

  return Number(total.toFixed(2));
}
