import { ResponseDTO } from '../../../../../../shared/core/response.dto';
import { ProductId } from '../../../../domain/entities/product.entity';

export interface RemoveProductResponseDTO extends ResponseDTO {
  data: {
    id: ProductId;
  };
}
