export type Currency = 'COP' | 'USD';
export type ProductId = string;

type Price = {
  currency: Currency;
  value: number;
};

export interface IProduct {
  id?: ProductId;
  name: string;
  price: Price;
}
