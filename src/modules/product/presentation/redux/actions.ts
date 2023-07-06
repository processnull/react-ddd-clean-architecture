import { IProduct } from '../../domain/entities/product.entity';
import { ProductViewModel } from '../viewmodel/product.viewmodel';

export const addProductAction = (product: ProductViewModel[]) => ({
  type: 'ADD_PRODUCT',
  payload: product,
});
