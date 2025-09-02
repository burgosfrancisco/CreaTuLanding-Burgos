import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <button className="btn btn-outline-secondary position-relative">
      🛒
      {totalItems > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default CartWidget;
