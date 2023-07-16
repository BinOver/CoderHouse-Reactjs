import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar__containter container">
        <Navbar expand="lg">
          <Navbar.Brand>
            <div className="navbar__containter">
              <Link to="/">
                <img src={logo} className="navbar__logo" alt="logo" />
              </Link>
              <p className="navbar__title">
                <Link className="navbar__title-link" to="/">
                  The e-Commerce
                </Link>
              </p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Categorias" id="nav-dropdown">
                <NavDropdown.Item as={Link} to="/category/tecnologia">
                  Tecnologia
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/deporte">
                  Deportes
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/indumentaria">
                  Indumentaria
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <nav className="navbar__nav">
            <CartWidget />
          </nav>
        </Navbar>
      </div>
    </header>
  );
};

export default NavBar;
