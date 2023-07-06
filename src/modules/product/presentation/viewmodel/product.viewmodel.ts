import { ProductId } from '../../domain/entities/product.entity';

export interface ProductViewModel {
  id: ProductId;
  name: string;
  price: number;
}
