import { IProduct } from '../entities/product.entity';

export class ProductModel {
  products: IProduct[];
  constructor(private product: IProduct) {}
}
