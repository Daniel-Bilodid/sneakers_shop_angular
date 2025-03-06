export interface Product {
  id: number;
  amount: number;
  name: string;
  company: string;
  img: string;
  description: string;
  price: number;
  price_with_discount: number;
  discount_percent: number;
}

export interface CartProduct {
  id: number;
  name: string;
  price: number;
  amount: number;
  img: string;
}
