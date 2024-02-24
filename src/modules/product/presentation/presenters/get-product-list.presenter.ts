import { UpdateViewCallback } from '../../../../shared/core/update-vew-callback';
import { GetProductListOutputBondary } from '../../application/usecases/get-product-list/boundary/get-product-list.outputboundary';
import { GetProductListResponseDTO } from '../../application/usecases/get-product-list/dto/get-product-list.response.dto';
import { GetProductListViewModel } from '../viewmodel/get-product-list.viewmodel';

export class GetProductListPresenter implements GetProductListOutputBondary {
  constructor(private readonly updateViewCallback: UpdateViewCallback) {}
  present(response: GetProductListResponseDTO) {
    // const productViewModel: ProductViewModel[] = response.data.map(
    //   (product) => ({
    //     id: product.id,
    //     name: product.name,
    //     price: product.price.value,
    //   })
    // );

    this.updateViewCallback(new GetProductListViewModel(response));
    // this.updateViewCallback(productViewModel);
  }
}
