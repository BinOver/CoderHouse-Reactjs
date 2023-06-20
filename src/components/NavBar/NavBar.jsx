import logo from '../../assets/logo.png'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar__containter">
        <Link to="/"><img src={logo} className="navbar__logo" alt='logo'/></Link>
        <p className="navbar__title">The e-Commerce</p>
        <nav className="navbar__nav">
          <Link className="navbar__link" to="/category/tecnologia">Tecnologia</Link>
          <Link className="navbar__link" to="/category/deporte">Deportes</Link>
          <Link className="navbar__link" to="/category/indumentaria">Indumentaria</Link>
          <CartWidget />
        </nav>
      </div>
    </header>

  )
}

export default NavBar