import { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="text-center">
      <div className="btn-group my-2">
        <button className="btn btn-outline-secondary" onClick={decrementar}>-</button>
        <span className="btn btn-light disabled">{cantidad}</span>
        <button className="btn btn-outline-secondary" onClick={incrementar}>+</button>
      </div>
      <br />
      <button className="btn btn-success" onClick={() => onAdd(cantidad)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
