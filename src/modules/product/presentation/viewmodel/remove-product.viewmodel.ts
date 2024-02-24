import { Viewmodel } from '../../../../shared/core/viewmodel';
import { RemoveProductResponseDTO } from '../../application/usecases/remove-product/dto/remove-product.response.dto';
import { ProductId } from '../../domain/entities/product.entity';

export interface RemoveProductViewModelI {
  id: ProductId;
}
export class RemoveProductViewModel implements Viewmodel<RemoveProductViewModelI> {
  constructor(private readonly removeProductResponseDTO: RemoveProductResponseDTO) {
  }
  get status(): 'error' | 'success' {
    return this.removeProductResponseDTO.status;
  }

  get data(): RemoveProductViewModelI {
    return {
      id: this.removeProductResponseDTO.data.id,
    }
  }
  get error() {
    return this.removeProductResponseDTO.error
  }
}