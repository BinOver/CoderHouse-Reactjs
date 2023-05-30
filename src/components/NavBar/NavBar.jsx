import logo from '../../assets/logo.png'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar__containter">
        <img src={logo} className="navbar__logo" alt='logo'/>
        <p className="navbar__title">The e-Commerce</p>
        <nav className="navbar__nav">
          <a className="navbar__link" href="#">Tecnologia</a>
          <a className="navbar__link" href="#">Deportes</a>
          <a className="navbar__link" href="#">Indumentaria</a>
          <CartWidget />
        </nav>
      </div>
    </header>

  )
}

export default NavBar