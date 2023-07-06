import { UseCase } from '../../../../../../shared/core/usecase';
import { AddProductProductRequestDTO } from '../dto/add-product.request.dto';
import { AddProductOutputBondary } from './add-product.outputboundary';

// AddProductUseCase
export interface AddProductInputBondary
  extends UseCase<AddProductProductRequestDTO, void> {
  execute(product: AddProductProductRequestDTO): void;
}
