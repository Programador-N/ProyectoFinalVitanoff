import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from './firebase-config';

// Initialize Cloud Firestore
const db = getFirestore(app);

// Función para obtener productos
export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "items"));
    const products = [];

    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() }); // Agregar ID al objeto del producto
    });

    return products; // Devuelve la lista de productos
  } catch (error) {
    console.error("Error fetching products from Firestore:", error);
    throw new Error("No se pudieron obtener los productos."); // Manejo de errores
  }
};

export default db;
