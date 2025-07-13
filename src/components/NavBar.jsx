import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm py-3">
      <div className="d-flex justify-content-between align-items-center px-4" style={{ width: '100%' }}>
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#">MiTienda</a>

        {/* Enlaces */}
        <div className="d-flex gap-4">
          <a className="nav-link" href="#">Inicio</a>
          <a className="nav-link" href="#">Productos</a>
          <a className="nav-link" href="#">Contacto</a>
        </div>

        {/* Carrito */}
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
