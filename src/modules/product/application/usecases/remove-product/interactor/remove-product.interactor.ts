import { ProductId } from '../../../../domain/entities/product.entity';
import { ProductAsyncRepository } from '../../../../domain/repositories/product-async.repository';
import { RemoveProductInputBondary } from '../boundary/remove-product.inputboundary';
import { RemoveProductOutputBondary } from '../boundary/remove-product.outputboundary';
import { RemoveProductRequestDTO } from '../dto/remove-product.request.dto';
import { RemoveProductResponseDTO } from '../dto/remove-product.response.dto';

export class RemoveProductInteractor implements RemoveProductInputBondary {
  constructor(
    private repository: ProductAsyncRepository,
    private presenter: RemoveProductOutputBondary
  ) {}

  async execute(product: RemoveProductRequestDTO): Promise<ProductId> {
    const productId = await this.repository.removeProduct(product.id);
    const responseDTO: RemoveProductResponseDTO = {
      status: 'success',
      data: { id: productId },
    };
    this.presenter.present(responseDTO);
    return productId;
  }
}
