import Product from './types/Product';

function getProcuts(): Product {
  const product: Product = {
    barcode: '123c456b789a',
    price: 123,
  };

  return product;
};

console.log(getProcuts());
