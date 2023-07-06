import { RemoveProductOutputBondary } from '../../application/usecases/remove-product/boundary/remove-product.outputboundary';
import { RemoveProductResponseDTO } from '../../application/usecases/remove-product/dto/remove-product.response.dto';
import { UpdateViewCallback } from '../../../../shared/core/update-vew-callback';

export class RemoveProductPresenter implements RemoveProductOutputBondary {
  constructor(private readonly updateViewCallback: UpdateViewCallback) {}
  present(response: RemoveProductResponseDTO) {
    this.updateViewCallback(response.data.id);
  }
}
