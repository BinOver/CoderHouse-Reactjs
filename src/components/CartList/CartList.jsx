import { FaTrash } from "react-icons/fa"
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"


export const CartList = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    return (
        <div>
            <h2>Tu Compra</h2>
            <hr />
            <div className="cartlist__list">
                {
                    cart.map((prod) =>(
                        <div className="card p-3 m-1 shadow" key={prod.id}>
                            <h4>{prod.nombre}</h4>
                            <img className="cartlist__img" src={prod.img} alt={prod.nombre} />
                            <p>Precio: ${prod.precio}</p>
                            <p>Cantidad: {prod.cantidad}</p>
                            <button 
                                className="btn btn-danger mx-5"
                                onClick={() => eliminarDelCarrito(prod.id)}
                                ><FaTrash /></button>
                            <hr />
                        </div>
                    ))
                }
            </div>

            <div>
                <h5 className="mt-4">Total: ${totalCompra()}</h5>
                <hr />
                <Link className="btn btn-primary mx-1" to="/">Seguir comprando</Link>
                <button onClick={vaciarCarrito} className="btn btn-danger mx-1">Vaciar Carrito</button>
                <Link className="btn btn-success mx-1" to="/checkout">Terminar la compra</Link>
                
            </div>
        </div>
    )
}

export default CartList