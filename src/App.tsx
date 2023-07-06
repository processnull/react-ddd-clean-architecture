import * as React from 'react';
import { useState, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { AddProductInputBondary } from './modules/product/application/usecases/add-product/boundary/add-product.inputboundary';
import { AddProductInteractor } from './modules/product/application/usecases/add-product/interactor/add-product.interactor';
import { GetProductListInputBondary } from './modules/product/application/usecases/get-product-list/boundary/get-product-list.inputboundary';
import { GetProductListInteractor } from './modules/product/application/usecases/get-product-list/interactor/get-product-list.interactor';
import { RemoveProductInputBondary } from './modules/product/application/usecases/remove-product/boundary/remove-product.inputboundary';
import { RemoveProductInteractor } from './modules/product/application/usecases/remove-product/interactor/remove-product.interactor';
import {
  IProduct,
  ProductId,
} from './modules/product/domain/entities/product.entity';
import { ProductAsyncRepositoryImpl } from './modules/product/infraestructure/repositories/product-async.repository';
import { ProductController } from './modules/product/presentation/controllers/product.controller.';
import { AddProductPresenter } from './modules/product/presentation/presenters/add-product.presenter';
import { GetProductListPresenter } from './modules/product/presentation/presenters/get-product-list.presenter';
import { RemoveProductPresenter } from './modules/product/presentation/presenters/remove-product.presenter';
import { addProductAction } from './modules/product/presentation/redux/actions';
import { store } from './modules/product/presentation/redux/store';
import { ProductForm } from './modules/product/presentation/ui/components/product-form.component';
import { ProductList } from './modules/product/presentation/ui/components/product-list.component';
import { ProductViewModel } from './modules/product/presentation/viewmodel/product.viewmodel';
import { Viewmodel } from './shared/core/viewmodel';
import './style.css';

export default function App() {
  const [productList, productListSet] = useState([]);

  const dispatch = useDispatch();
  const repository = new ProductAsyncRepositoryImpl();

  // const onAddProduct = (product: ProductId) => {
  const onAddProduct = (product: Viewmodel<ProductId>) => {
    console.log('ADD PRODUCT VIEWMODEL', product.data);
    // Dispatch Redux action with the updated product
    // dispatch(addProductAction(product));
    // productListSet(product);
    // aqui podria hacer sentido que el propio vewModel se encargue de llamar el siguiente use case
    controller.getProductList();
  };
  const addProductPresenter = new AddProductPresenter(onAddProduct);
  const addProductUseCase: AddProductInputBondary = new AddProductInteractor(
    repository,
    addProductPresenter
  );
  const onGetProductList = (products: ProductViewModel[]) => {
    console.log('GET PRODUCT VIEWMODEL', products);
    // Dispatch Redux action with the updated product
    // dispatch(addProductAction(product));
    productListSet(products);
  };
  const getProductlistPresenter = new GetProductListPresenter(onGetProductList);
  const getProductListUseCase: GetProductListInputBondary =
    new GetProductListInteractor(repository, getProductlistPresenter);

  const onRemoveProduct = (product: ProductId) => {
    console.log('REMOVE PRODUCT VIEWMODEL', product);
    controller.getProductList();
  };
  const removeProductPresenter = new RemoveProductPresenter(onRemoveProduct);
  const removeProductUseCase: RemoveProductInputBondary =
    new RemoveProductInteractor(repository, removeProductPresenter);

  const controller = new ProductController(
    addProductUseCase,
    getProductListUseCase,
    removeProductUseCase,
    addProductPresenter
  );

  // const productList = useSelector((state) => state.productReducer.products);
  console.log('Default Function');

  const handleAddProduct = (product: IProduct) => {
    console.log('handleAddProduct');
    controller.addProduct(product);
    // productListSet(controller.getProductList());
  };

  const handleRemoveddProduct = (productId: ProductId) => {
    console.log('handleRemoveProduct');
    controller.removeProduct(productId);
    // productListSet(controller.getProductList());
  };

  useEffect(() => {
    console.log('useEffect');
    controller.getProductList();
    // productListSet(controller.getProductList());
    // return () => speechToTextService.current?.removeListener(onMessageReceived);
  }, []);

  return (
    <div>
      <ProductForm onSubmit={handleAddProduct} />
      <ProductList products={productList} onClick={handleRemoveddProduct} />
    </div>
  );
}
