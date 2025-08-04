import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">MiTienda</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/category/teclados">Teclados</Link>
        <Link className="nav-link" to="/category/mouses">Mouses</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
