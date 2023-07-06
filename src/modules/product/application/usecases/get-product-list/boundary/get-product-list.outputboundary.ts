import { Presenter } from '../../../../../../shared/core/presenter';
import { GetProductListResponseDTO } from '../dto/get-product-list.response.dto';

// AddProductPresenter
export interface GetProductListOutputBondary
  extends Presenter<GetProductListResponseDTO, void> {
  present(products: GetProductListResponseDTO): void;
}
