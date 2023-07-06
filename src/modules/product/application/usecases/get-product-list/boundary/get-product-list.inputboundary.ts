import { UseCase } from '../../../../../../shared/core/usecase';
import { GetProductListResponseDTO } from '../dto/get-product-list.response.dto';

// GetProductListUseCase
export interface GetProductListInputBondary
  extends UseCase<void, GetProductListResponseDTO> {
  execute(): Promise<GetProductListResponseDTO>;
}
