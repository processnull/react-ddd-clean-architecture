import { AddProductInputBondary } from '../../application/usecases/add-product/boundary/add-product.inputboundary';
import { GetProductListInputBondary } from '../../application/usecases/get-product-list/boundary/get-product-list.inputboundary';
import { RemoveProductInputBondary } from '../../application/usecases/remove-product/boundary/remove-product.inputboundary';
import { IProduct, ProductId } from '../../domain/entities/product.entity';
import { AddProductPresenter } from '../presenters/add-product.presenter';

export class ProductController {
  constructor(
    private addProductUseCase: AddProductInputBondary,
    private getProductListUseCase: GetProductListInputBondary,
    private removeProductUseCase: RemoveProductInputBondary,
    private addProductPresenter: AddProductPresenter
  ) {}

  addProduct(product: IProduct): void {
    this.addProductUseCase.execute(product);
  }
  removeProduct(productId: ProductId): void {
    this.removeProductUseCase.execute({ id: productId });
  }
  getProductList(): void {
    this.getProductListUseCase.execute();
    // return this.productPresenter.present(products);
  }
}
