import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, removeFromCart, totalItems, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h3>Tu carrito está vacío 🛒</h3>
        <Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>
      <ul className="list-group mb-3">
        {cart.map((prod) => (
          <li key={prod.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{prod.nombre}</h5>
              <p>Cantidad: {prod.quantity}</p>
              <p>Subtotal: ${prod.precio * prod.quantity}</p>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(prod.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <h4>Total: ${totalPrice}</h4>
      <p>Total de unidades: {totalItems}</p>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-danger" onClick={clearCart}>Vaciar carrito</button>
        <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
      </div>
    </div>
  );
};

export default Cart;
