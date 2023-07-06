import { Product, ProductId } from '../entities/product.entity';

export interface ProductAsyncRepository {
  saveProduct(product: Product): Promise<ProductId>;
  removeProduct(productId: ProductId): Promise<ProductId>;
  getAllProducts(): Promise<Product[]>;
}
