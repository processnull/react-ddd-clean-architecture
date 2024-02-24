// components/ProductList.tsx
import * as React from 'react';
import { useState } from 'react';
import { ProductId } from '../../../domain/entities/product.entity';
import { IProductViewModel, ProductViewModel } from '../../viewmodel/product.viewmodel';

interface ProductListProps {
  products: IProductViewModel[];
  onClick: (productId: ProductId) => void;
}

export const ProductList = ({ products, onClick }: ProductListProps) => {
  // const [productList, productListSet] = useState();

  const handleClick = (productId?: ProductId) => {
    onClick && onClick(productId ? productId : '0');
  };

  return (
    <ul>
      {products.map((product, index) => (
        <li key={product.id}>
          {product.name} - ${product.price.value}{' '}
          <button onClick={() => handleClick(product.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};
