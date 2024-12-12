import React from 'react';
import ItemDetailContent from './ItemDetailContent';

function ItemDetail({ item }) {
  return (
    <div>
      <ItemDetailContent item={item} />
    </div>
  );
}

export default ItemDetail;
