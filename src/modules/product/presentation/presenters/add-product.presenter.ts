import { UpdateViewCallback } from '../../../../shared/core/update-vew-callback';
import { AddProductOutputBondary } from '../../application/usecases/add-product/boundary/add-product.outputboundary';
import { AddProductProductResponseDTO } from '../../application/usecases/add-product/dto/add-product.response.dto';

export class AddProductPresenter implements AddProductOutputBondary {
  constructor(private readonly updateViewCallback: UpdateViewCallback) {}
  present(response: AddProductProductResponseDTO) {
    this.updateViewCallback(response.data.id);
  }
}
