import { IProduct, ProductId } from '../../domain/entities/product.entity';
import { ProductAsyncRepository } from '../../domain/repositories/product-async.repository';

const STORAGE_KEY = 'products';

export class ProductAsyncRepositoryImpl implements ProductAsyncRepository {
  saveProduct(product: IProduct) {
    return new Promise<ProductId>(async (resolve, reject) => {
      const products = await this.getAllProducts();
      products.push(product);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
      resolve(product.id);
    });
  }
  removeProduct(productId: ProductId) {
    return new Promise<ProductId>(async (resolve, reject) => {
      const products = await this.getAllProducts();
      const productIndex = products.findIndex(
        (producrt) => producrt.id === productId
      );
      products.splice(productIndex, 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
      resolve(productId);
    });
  }
  getAllProducts() {
    return new Promise<IProduct[]>((resolve, reject) => {
      const productsString = localStorage.getItem(STORAGE_KEY);
      if (productsString) {
        resolve(JSON.parse(productsString) as IProduct[]);
      }
      resolve([]);
    });
  }
}
