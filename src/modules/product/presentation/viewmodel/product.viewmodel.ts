import { Viewmodel } from '../../../../shared/core/viewmodel';
import { GetProductListResponseDTO } from '../../application/usecases/get-product-list/dto/get-product-list.response.dto';
import { IProduct } from '../../domain/entities/product.entity';

export interface IProductViewModel extends IProduct{
}
export class ProductViewModel implements Viewmodel<IProductViewModel> {
  constructor(private readonly getProductListResponseDTO: GetProductListResponseDTO) {
  }
  get status(): 'error' | 'success' {
    return this.getProductListResponseDTO.status;
  }

  get data() {
    return this.getProductListResponseDTO.data[0]
  }
  get error() {
    return this.getProductListResponseDTO.error
  }
}