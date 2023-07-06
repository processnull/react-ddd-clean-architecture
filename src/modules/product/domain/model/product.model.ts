import { Product } from '../entities/product.entity';

export class ProductModel {
  products: Product[];
  constructor(private product: Product) {}
}
