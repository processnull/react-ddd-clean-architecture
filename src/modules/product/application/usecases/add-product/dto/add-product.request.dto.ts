export type Currency = 'COP' | 'USD';

type Price = {
  currency: Currency;
  value: number;
};

export interface AddProductProductRequestDTO {
  name: string;
  price: Price;
}
