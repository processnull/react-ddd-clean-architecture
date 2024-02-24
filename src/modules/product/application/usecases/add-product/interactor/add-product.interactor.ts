import { Product, ProductProps } from '../../../../domain/entities/product';
import {
  IProduct,
  ProductId,
} from '../../../../domain/entities/product.entity';
import { ProductAsyncRepository } from '../../../../domain/repositories/product-async.repository';
import { AddProductInputBondary } from '../boundary/add-product.inputboundary';
import { AddProductOutputBondary } from '../boundary/add-product.outputboundary';
import { AddProductProductRequestDTO } from '../dto/add-product.request.dto';
import { AddProductProductResponseDTO } from '../dto/add-product.response.dto';

export class AddProductInteractor implements AddProductInputBondary {
  constructor(
    private repository: ProductAsyncRepository,
    private presenter: AddProductOutputBondary
  ) { }

  async execute(product: AddProductProductRequestDTO): Promise<ProductId> {
    const productId = self.crypto.randomUUID();
    const productprops: ProductProps = {
      name: product.name,
      price: product.price,
    };
    const productOrError = Product.create(productprops);
    if (productOrError.isLeft()) {
      alert('error');
      // console.log(productOrError.error);
      const responseDTO: AddProductProductResponseDTO = {
        status: 'error',
        error: productOrError.error.map(error => ({
          code: error.name,
          message: error.message,
          details: error.stack,
        }))
      };
      console.log(responseDTO);

      this.presenter.present(responseDTO);
    } else {
      const { productId, name, price } = productOrError.value;
      const productStored: IProduct = { id: productId, name, price };
      const responseProductId = await this.repository.saveProduct(
        productStored
      );
      // const responseProductId = await this.repository.saveProduct({
      //   id: productId,
      //   ...product,
      // });
      const responseDTO: AddProductProductResponseDTO = {
        status: 'success',
        data: { id: responseProductId },
      };
      this.presenter.present(responseDTO);
      return productId;
    }
  }
}
