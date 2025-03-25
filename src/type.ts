export type item = {
  id: number;
  name: string;
  img: string;
  brand: string;
  price: number;
  description: string;
  size: string;
  count: number;
  color: string
}

export type Data = {
  products: item[];
  cart: item[];
}