import { Product, ProductId } from '../entities/product.entity';

export interface ProductRepository {
  saveProduct(product: Product): ProductId;
  removeProduct(productId: ProductId): void;
  getAllProducts(): Product[];
}
