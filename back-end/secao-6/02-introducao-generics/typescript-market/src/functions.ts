import { Food } from './types/Food';
import { Drink } from './types/Drink';
import { CartItem } from './types/CartItem';

export function first<Type>(array: Type[]): Type {
  return array[0];
}

export function updateItem<Type>(array: Type[], idx: number, obj: Type): Type[] {
  const item = array[idx];
  if (item) {
    array.splice(idx, 1, obj);
  }
  return array;
}

export function buildCartItem(item: Food | Drink, quantity: number): CartItem {
  const { name, price } = item;
  return { name, price, quantity };
}
