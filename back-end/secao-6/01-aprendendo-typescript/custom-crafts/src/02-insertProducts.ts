export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  brands: string[];
};

export default function insertProducts(brandList: string[], product: Product): string {
  const isValidBrands = product.brands.every((brand) => brandList.includes(brand));
  return (isValidBrands 
    ? `${product.name} adicionado(a) com o preço de R$ ${product.price}`
    : 'Seu produto contém marcas indisponíveis.');
}
