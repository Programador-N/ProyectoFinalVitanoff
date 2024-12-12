import React from 'react';
import { CartProvider } from './context/CartContext';
import './index.css';
import ProductDetails from './components/products/ProductDetails';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;
