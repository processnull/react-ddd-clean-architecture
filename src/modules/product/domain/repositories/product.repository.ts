import { IProduct, ProductId } from '../entities/product.entity';

export interface ProductRepository {
  saveProduct(product: IProduct): ProductId;
  removeProduct(productId: ProductId): void;
  getAllProducts(): IProduct[];
}
