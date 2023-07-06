import { ResponseDTO } from '../../../../../../shared/core/response.dto';
import { IProduct } from '../../../../domain/entities/product.entity';

export interface GetProductListResponseDTO extends ResponseDTO {
  data: IProduct[];
}
