import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa'; // Íconos
import CartWidget from '../cart/CartWidget';
import { motion } from 'framer-motion'; // Importa Framer Motion
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const logoVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 360, scale: 1.2, transition: { duration: 1 } },
  };

  return (
    <motion.nav
      className="navbar navbar-expand-lg"
      style={{
        position: 'relative',
        zIndex: 10,
        background: 'transparent',
      }}
    >
      {/* Fondo animado */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          background: 'linear-gradient(270deg, #4caf50, #8bc34a, #f9fbe7, #4caf50)',
          backgroundSize: '400% 400%',
          filter: 'blur(8px)',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      <div className="container-fluid">
        {/* Logo con animación */}
        <motion.div
          className="navbar-brand"
          variants={logoVariants}
          initial="initial"
          whileHover="hover"
        >
          <NavLink to="/">
            <img
              src="/public/logo.png" // Ruta del logo
              alt="My E-commerce Logo"
              style={{ height: '50px' }}
            />
          </NavLink>
        </motion.div>

        {/* Botón colapsable */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home */}
            <li className="nav-item">
              <NavLink className="nav-link fs-5 text-white" to="/">
                <FaHome /> Home
              </NavLink>
            </li>

            {/* Categories con animación del menú */}
            <motion.li
              className="nav-item dropdown"
              whileHover={{ scale: 1.1 }}
              style={{ position: 'relative' }}
            >
              <a
                className="nav-link dropdown-toggle fs-5 text-white"
                href="#"
                id="categoriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <motion.ul
                className="dropdown-menu"
                aria-labelledby="categoriesDropdown"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownVariants}
                style={{
                  backgroundColor: '#4caf50',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <li>
                  <NavLink className="dropdown-item text-white" to="/category/electronics">
                    Electronics
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item text-white" to="/category/clothing">
                    Clothing
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item text-white" to="/category/toys">
                    Toys
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item text-white" to="/category/sale">
                    Sale
                  </NavLink>
                </li>
              </motion.ul>
            </motion.li>

            {/* Cart */}
            <li className="nav-item">
              <NavLink className="nav-link fs-5 text-white" to="/cart">
                <FaShoppingCart /> Cart
              </NavLink>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
