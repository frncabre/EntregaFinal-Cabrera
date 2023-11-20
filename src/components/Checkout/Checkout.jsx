// Checkout.jsx
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore';
import { db } from "../../services/firebase/firebaseConfig";
import './checkout.css'; // Importa el archivo de estilo CSS

const Checkout = () => {
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const { cart, total, clearCart } = useCart();

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const createOrder = async () => {
    try {
      setLoading(true);
  
      const objOrder = {
        buyer: {
          name: userData.name || '',
          email: userData.email || '',
          phone: userData.phone || ''
        },
        items: cart,
        total: parseInt(total)
      };
  
      const batch = writeBatch(db);
      const outOfStock = [];
  
      const ids = cart.map(prod => prod.id);
      const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids));
      const { docs } = await getDocs(productsRef);
  
      docs.forEach(async documentSnapshot => {
        const fields = documentSnapshot.data();
        const stockDb = fields.stock;
  
        const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id);
        const prodQuantity = productAddedToCart.quantity;
  
        if (stockDb >= prodQuantity) {
          batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: documentSnapshot.id, ...fields });
        }
      });

      if (outOfStock.length === 0) {
        const ordersRef = collection(db, 'orders');
        const { id } = await addDoc(ordersRef, objOrder);
  
        batch.commit();
        clearCart();
        setOrderId(id);
        console.log(`El id de su orden es ${id}`);
      } else {
        console.log('No hay stock de algún producto');
      }
    } catch (error) {
      console.error('Hubo un error generando la orden', error);
    } finally {
      setLoading(false);
    }
  };

  if(loading) {
    return <h1>Se está generando su orden...</h1>;
  }

  if(orderId) {
    return <h1>El id de su orden es: {orderId}</h1>;
  }

  return (
    <>
      <h1>Checkout</h1>
      <form id="checkout-form">
        <label className="label">
          Nombre:
          <input type="text" name="name" value={userData.name} onChange={handleInputChange} className="input" />
        </label>
        <label className="label">
          Email:
          <input type="text" name="email" value={userData.email} onChange={handleInputChange} className="input" />
        </label>
        <label className="label">
          Teléfono:
          <input type="text" name="phone" value={userData.phone} onChange={handleInputChange} className="input" />
        </label>
        <button type="button" onClick={createOrder} className="button">Crear orden</button>
      </form>
    </>
  );
};

export default Checkout;
