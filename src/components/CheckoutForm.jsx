import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Link } from 'react-router-dom';

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({ nombre: '', email: '', telefono: '' });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orden = {
      comprador: form,
      items: cart,
      total: totalPrice,
      fecha: new Date(),
    };

    const ordenesRef = collection(db, 'ordenes');

    addDoc(ordenesRef, orden)
      .then((doc) => {
        setOrderId(doc.id);
        clearCart();
      })
      .catch((err) => console.log(err));
  };

  if (orderId) {
    return (
      <div className="text-center mt-5">
        <h2>¡Gracias por tu compra! 🧾</h2>
        <p>Tu número de orden es:</p>
        <code>{orderId}</code>
        <br />
        <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4" style={{ maxWidth: '500px' }}>
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre</label>
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Teléfono</label>
          <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-success">Confirmar compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
