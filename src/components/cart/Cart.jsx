import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion'; // Importa Framer Motion

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  // Variantes para las animaciones
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, y: -20, transition: { duration: 0.3 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      className="container mt-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-center mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ color: '#4caf50', fontWeight: 'bold' }}
      >
        🛒 Your Shopping Cart
      </motion.h2>
      {cart.length === 0 ? (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            padding: '2rem',
            backgroundColor: '#f9fbe7',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h3 style={{ color: '#757575' }}>Your cart is empty!</h3>
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: '#4caf50',
              color: '#fff',
              boxShadow: '0px 8px 20px rgba(46, 125, 50, 0.3)',
            }}
            transition={{ duration: 0.3 }}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1.5rem',
              backgroundColor: '#8bc34a',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Shop Now
          </motion.button>
        </motion.div>
      ) : (
        <div className="row">
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                className="col-md-4 d-flex justify-content-center"
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 10px 25px rgba(0, 128, 0, 0.4)',
                }}
              >
                <motion.div
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    backgroundColor: '#f9fbe7',
                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderTopLeftRadius: '15px',
                      borderTopRightRadius: '15px',
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div style={{ padding: '1rem', textAlign: 'center' }}>
                    <motion.h5
                      whileHover={{ color: '#2e7d32', scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        fontWeight: 'bold',
                        color: '#2e7d32',
                      }}
                    >
                      {item.name}
                    </motion.h5>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      style={{ color: '#666' }}
                    >
                      ${item.price.toFixed(2)}
                    </motion.p>
                    <motion.button
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: '#ff4d4f',
                        boxShadow: '0px 8px 20px rgba(255, 77, 79, 0.4)',
                      }}
                      transition={{ duration: 0.3 }}
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#f44336',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                      }}
                    >
                      Remove
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}

export default Cart;
