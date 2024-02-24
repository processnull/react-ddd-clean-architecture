import { UpdateViewCallback } from '../../../../shared/core/update-vew-callback';
import { AddProductOutputBondary } from '../../application/usecases/add-product/boundary/add-product.outputboundary';
import { AddProductProductResponseDTO } from '../../application/usecases/add-product/dto/add-product.response.dto';
import { AddProductViewModel } from '../viewmodel/add-product.viewmodel';

export class AddProductPresenter implements AddProductOutputBondary {
  constructor(private readonly updateViewCallback: UpdateViewCallback) {}
  present(response: AddProductProductResponseDTO) {
    
    this.updateViewCallback(new AddProductViewModel(response));
  }
}
