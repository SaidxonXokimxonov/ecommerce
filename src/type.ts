export type item = {
  id: number;
  name: string;
  img: string;
  brand: string;
  price: number;
  description: string;
}

export type Data = {
  products: item[];
  cart: item[];
}