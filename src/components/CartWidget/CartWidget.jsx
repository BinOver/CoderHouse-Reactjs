import { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () =>{
  const {totalCantidad} = useContext(CartContext)

  return(
    <Link to="/cart" className="cart fs-5">
      <FaShoppingCart className="cart__icon"/>
      <p className="cart__cant">{totalCantidad()}</p>
    </Link>
  )
}
export default CartWidget