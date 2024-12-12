import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../../components/ItemCount';

function ItemDetailContent({ item }) {
  const [quantity, setQuantity] = useState(0);

  const { addItem } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAdd = (count) => {
    setQuantity(count);
    addItem(item, count);
    setAddedToCart(true);
  };
  return (
    <div className="item-detail-content">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p className="price">${item.price.toFixed(2)}</p>

      {item.stock > 0 ? (
        !addedToCart ? (
          <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
        ) : (
          <div>
            <p>¡Producto agregado al carrito!</p>
            <Link to="/cart" className="btn btn-primary">Ir al carrito</Link>
            <Link to="/" className="btn btn-secondary">Seguir comprando</Link>
          </div>
        )
      ) : (
        <p className="out-of-stock">Producto sin stock</p>
      )}
    </div>
  );
}

export default ItemDetailContent;

