import { Presenter } from '../../../../../../shared/core/presenter';
import { RemoveProductResponseDTO } from '../dto/remove-product.response.dto';

// RemoveProductPresenter
export interface RemoveProductOutputBondary
  extends Presenter<RemoveProductResponseDTO, void> {
  present(products: RemoveProductResponseDTO): void;
}
