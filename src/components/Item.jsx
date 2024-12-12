import React from 'react';

function Item({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
    </div>
  );
}

export default Item;
