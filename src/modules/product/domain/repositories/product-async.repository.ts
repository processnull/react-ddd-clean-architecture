import { IProduct, ProductId } from '../entities/product.entity';

export interface ProductAsyncRepository {
  saveProduct(product: IProduct): Promise<ProductId>;
  removeProduct(productId: ProductId): Promise<ProductId>;
  getAllProducts(): Promise<IProduct[]>;
}
