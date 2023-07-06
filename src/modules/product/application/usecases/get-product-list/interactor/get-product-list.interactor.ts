import { ProductAsyncRepository } from '../../../../domain/repositories/product-async.repository';
import { ProductRepository } from '../../../../domain/repositories/product.repository';
import { GetProductListInputBondary } from '../boundary/get-product-list.inputboundary';
import { GetProductListOutputBondary } from '../boundary/get-product-list.outputboundary';
import { GetProductListResponseDTO } from '../dto/get-product-list.response.dto';

export class GetProductListInteractor implements GetProductListInputBondary {
  constructor(
    private repository: ProductAsyncRepository,
    private presenter: GetProductListOutputBondary
  ) {}

  async execute() {
    const responseDTO: GetProductListResponseDTO = {
      status: 'success',
      data: await this.repository.getAllProducts(),
    };
    this.presenter.present(responseDTO);
    return responseDTO;
  }
}
