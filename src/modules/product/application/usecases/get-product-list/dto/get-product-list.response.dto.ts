import { ResponseDTO } from '../../../../../../shared/core/response.dto';
import { Product } from '../../../../domain/entities/product.entity';

export interface GetProductListResponseDTO extends ResponseDTO {
  data: Product[];
}
