import { UseCase } from '../../../../../../shared/core/usecase';
import { RemoveProductRequestDTO } from '../dto/remove-product.request.dto';

// RemoveProductUseCase
export interface RemoveProductInputBondary
  extends UseCase<RemoveProductRequestDTO, void> {
  execute(productId: RemoveProductRequestDTO): void;
}
