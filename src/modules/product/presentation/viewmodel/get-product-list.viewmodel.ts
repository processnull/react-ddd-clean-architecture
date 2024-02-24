import { Viewmodel } from '../../../../shared/core/viewmodel';
import { GetProductListResponseDTO } from '../../application/usecases/get-product-list/dto/get-product-list.response.dto';
import { IProductViewModel } from './product.viewmodel';

export class GetProductListViewModel implements Viewmodel<IProductViewModel[]> {
  constructor(private readonly getProductListResponseDTO: GetProductListResponseDTO) {
  }
  get status(): 'error' | 'success' {
    return this.getProductListResponseDTO.status;
  }

  get data() {
    return this.getProductListResponseDTO.data
  }
  get error() {
    return this.getProductListResponseDTO.error
  }
}