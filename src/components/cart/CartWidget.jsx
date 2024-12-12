import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Ícono de carrito
import { CartContext } from '../../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartWidget() {
  const { cart } = useContext(CartContext) || { cart: [] };

  return (
    <div className="d-flex align-items-center" aria-label="Shopping cart">
      <FaShoppingCart className="me-2" size={24} aria-hidden="true" /> {/* Ícono */}
      <span aria-label={`You have ${cart.length} items in your cart`}>
        {Array.isArray(cart) && cart.length > 0 ? cart.length : ''}
      </span>
    </div>
  );
}

export default CartWidget;
