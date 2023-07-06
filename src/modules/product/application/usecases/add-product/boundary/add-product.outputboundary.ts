import { Presenter } from '../../../../../../shared/core/presenter';
import { AddProductProductResponseDTO } from '../dto/add-product.response.dto';

// AddProductPresenter
export interface AddProductOutputBondary
  extends Presenter<AddProductProductResponseDTO, void> {
  present(products: AddProductProductResponseDTO): void;
}
