import React, { useState, useEffect } from 'react';
import ProductCard from '../components/products/ProductCard';
import { getProducts } from '../services/firebase-db'; // Importar la función desde db.js

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const products = await getProducts(); // Llamada a Firestore
        setItems(products);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4 d-flex justify-content-center" key={item.id}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>        
    </div>
  );
}

export default ItemListContainer;
