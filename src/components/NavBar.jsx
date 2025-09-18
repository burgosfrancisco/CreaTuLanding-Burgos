import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          CreaTuLanding
        </Link>

        {/* Botón hamburguesa en mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/teclados">
                Teclados
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/mouses">
                Mouses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/auriculares">
                Auriculares
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link btn btn-outline-light ms-3" to="/cart">
                🛒 Carrito
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
