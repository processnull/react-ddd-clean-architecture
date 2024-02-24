import { Viewmodel } from '../../../../shared/core/viewmodel';
import { AddProductProductResponseDTO } from '../../application/usecases/add-product/dto/add-product.response.dto';
import { ProductId } from '../../domain/entities/product.entity';

export interface AddProductViewModelI {
  id: ProductId;
}
export class AddProductViewModel implements Viewmodel<AddProductViewModelI> {
  constructor(private readonly addProductProductResponseDTO: AddProductProductResponseDTO) {
  }
  get status(): 'error' | 'success' {
    return this.addProductProductResponseDTO.status;
  }

  get data(): AddProductViewModelI {
    return {
      id: this.addProductProductResponseDTO.data.id,
    }
  }
  get error() {
    return this.addProductProductResponseDTO.error
  }
}