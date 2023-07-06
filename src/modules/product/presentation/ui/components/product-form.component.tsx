import * as React from 'react';
import { useState } from 'react';
import { IProduct } from '../../../domain/entities/product.entity';
// declare var self: Window & typeof globalThis;

interface ProductFormProps {
  onSubmit: (product: IProduct) => void;
}

export const ProductForm = ({ onSubmit }: ProductFormProps) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product: IProduct = {
      id: self.crypto.randomUUID(),
      name,
      price: { currency: 'COP', value: parseFloat(price) },
    };
    onSubmit(product);
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};
