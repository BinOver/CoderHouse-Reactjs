import logo from '../../assets/logo.png'
import { CarritoLogo } from '../CarritoIcono/CarritoIcono'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__containter">
        <img src={logo} className="header__logo" alt='logo'/>
        <nav className="header__nav">
          <a className="header__link" href="#">Enlace 1</a>
          <a className="header__link" href="#">Enlace 2</a>
          <a className="header__link" href="#">Enlace 3</a>
          <CarritoLogo />
        </nav>
      </div>
    </header>

  )
}

export default Header