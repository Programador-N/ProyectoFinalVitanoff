import React, { useState } from 'react';
import ProductCard from '.products/ProductCard';

function ProductList({ products }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => setSelectedCategory('all')}>All</button>
        <button onClick={() => setSelectedCategory('electronics')}>Electronics</button>
        <button onClick={() => setSelectedCategory('clothing')}>Clothing</button>
        {/* Añade más categorías si es necesario */}
      </div>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
