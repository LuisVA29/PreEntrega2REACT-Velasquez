import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <header className="header-nav">
      <Link to="/">
        <h3>Farmacia</h3>
      </Link>

      <nav className="navBar">
        <ul>
          <Link to="/">
            <li className="all-instruments">Todos los productos</li>
          </Link>
          <Link to={`/category/Cerave`}>
            <li>Cerave</li>
          </Link>
          <Link to={"/category/Bioderma"}>
            <li>Bioderma</li>
          </Link>
          <Link to={"/category/Vichy"}>
            <li>Vichy</li>
          </Link>
        </ul>
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};
