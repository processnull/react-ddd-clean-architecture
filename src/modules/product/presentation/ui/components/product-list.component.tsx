// components/ProductList.tsx
import * as React from 'react';
import { useState } from 'react';
import { ProductId } from '../../../domain/entities/product.entity';
import { ProductViewModel } from '../../viewmodel/product.viewmodel';

interface ProductListProps {
  products: ProductViewModel[];
  onClick: (productId: ProductId) => void;
}

export const ProductList = ({ products, onClick }: ProductListProps) => {
  const [productList, productListSet] = useState();

  const handleClick = (productId?: ProductId) => {
    onClick && onClick(productId ? productId : '0');
  };

  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          {product.name} - ${product.price}{' '}
          <button onClick={() => handleClick(product.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};
