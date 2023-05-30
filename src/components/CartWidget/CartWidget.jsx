import carritoIcono from '../../assets/carritoIcono.png'

export const CartWidget = () =>{
  return(
    <div className="cart">
      <img src={carritoIcono} alt="Carrito Logo" className="cart__icon"/>
      <p className="cart__cant">5</p>
    </div>
  )
}
export default CartWidget