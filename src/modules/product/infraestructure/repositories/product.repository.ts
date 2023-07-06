import { IProduct, ProductId } from '../../domain/entities/product.entity';
import { ProductRepository } from '../../domain/repositories/product.repository';

const STORAGE_KEY = 'products';

export class ProductRepositoryImpl implements ProductRepository {
  saveProduct(product: IProduct): ProductId {
    const products = this.getAllProducts();
    products.push(product);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    return product.id;
  }
  removeProduct(productId: ProductId): void {
    const products = this.getAllProducts();
    const productIndex = products.findIndex(
      (producrt) => producrt.id === productId
    );
    products.splice(productIndex, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }
  getAllProducts(): IProduct[] {
    const productsString = localStorage.getItem(STORAGE_KEY);
    if (productsString) {
      return JSON.parse(productsString) as IProduct[];
    }
    return [];
  }
}
