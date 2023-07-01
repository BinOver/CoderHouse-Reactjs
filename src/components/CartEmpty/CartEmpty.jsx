import { Link } from "react-router-dom"

export const CartEmpty = () => {

    return(
        <div>
            <h2>Tu carrito esta vacio</h2>
            <hr />
            <Link className="btn btn-primary" to="/"> Ir a la tienda</Link>
        </div>
    )
}

export default CartEmpty