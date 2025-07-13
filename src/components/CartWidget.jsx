const CartWidget = () => {
  return (
    <button className="btn btn-outline-secondary position-relative">
      🛒
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        3
      </span>
    </button>
  );
};

export default CartWidget;
