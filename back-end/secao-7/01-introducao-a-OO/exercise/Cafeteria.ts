import Item from './Item';

type Discount = 0.1 | 0.3 | undefined;

class Client {
  private _name: string;

  constructor(n: string) {
    this.name = n;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }
};

class Order {
  private _client: Client;
  private _items: Item[] = [];
  private _paymentMethod: string;
  private _discount?: Discount;

  constructor(i: Item[], pay: string, d?: Discount) {
    this._items = i;
    this._paymentMethod = pay;
    this._discount = d;
  }

  get client(): Client {
    return this._client;
  }
  set client(value: Client) {
    this._client = value;
  }

  get items(): Item[] {
    return this._items;
  }
  set items(value: Item[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve possuir ao menos um item.');
    }

    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }
  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): Discount {
    return this._discount;
  }

  set discount(value: Discount) {
    if (!value) return;

    this._discount = value;
  }

  calcTotal(): number {
    return this._items.reduce((total, item) => total += item.price, 0);
  }

  totalWithDiscount(): number | undefined {
    if (!this._discount) return;
    return this.calcTotal() * (1 - this._discount);
  }
};
