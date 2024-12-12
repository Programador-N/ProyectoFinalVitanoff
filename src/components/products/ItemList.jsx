import React from 'react';
import ProductCard from './ProductCard';

function ItemList({ items, onAddToCart, onViewDetails }) {
  return (
    <div className="item-list">
      {items.map(item => (
        <ProductCard
          key={item.id}
          product={item}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}

export default ItemList;
