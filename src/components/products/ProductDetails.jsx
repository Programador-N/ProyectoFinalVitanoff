import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams(); // Obtén el ID del producto desde la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulación de datos
    const products = [
      {
        id: '1',        
        name: 'Product 1',
        description:
          'This is a detailed description for Product 1. It includes all the amazing features and benefits of this product.',
        price: 29.99,
        image: '/src/assets/images/producto-1.png',
        bigImage: '/src/assets/images/producto-1.png', // Portada grande
      },
      {
        id: '2',
        name: 'Product 2',
        description:
          'This is a detailed description for Product 2. It includes all the amazing features and benefits of this product.',
        price: 39.99,
        image: '/src/assets/images/producto-7.png',
        bigImage: '/src/assets/images/producto-7.png', // Portada grande
      },
    ];

    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>; // Cargando
  }

  return (
    <div>
      {/* Portada del producto */}
      <div
        style={{
          backgroundImage: `url(${product.bigImage})`,
          height: '300px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            {/* Imagen del producto */}
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>
          <div className="col-md-6">
            {/* Detalles del producto */}
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>
              <strong>Price:</strong> ${product.price.toFixed(2)}
            </p>
            <button
              className="btn btn-primary"
              style={{ marginRight: '10px' }}
              onClick={() => alert('Added to cart!')}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
