import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {
  const [agregado, setAgregado] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAgregar = (cantidad) => {
    addToCart(producto, cantidad);
    setAgregado(true);
  };

  return (
    <div className="card mx-auto" style={{ maxWidth: '600px' }}>
      <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
      <div className="card-body">
        <h2 className="card-title">{producto.nombre}</h2>
        <p className="card-text">{producto.descripcion}</p>
        <p className="card-text">Precio: ${producto.precio}</p>
        <p className="card-text">Stock disponible: {producto.stock}</p>

        {agregado ? (
          <Link to="/cart" className="btn btn-primary mt-2">
            Ir al carrito
          </Link>
        ) : (
          <ItemCount stock={producto.stock} onAdd={handleAgregar} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
