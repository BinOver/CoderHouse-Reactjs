import { useContext } from "react"
import CartContext from "../../context/CartContext"
import CartEmpty from "../CartEmpty/CartEmpty"
import CartList from "../CartList/CartList"



export const Cart = () => {
    const { cart } = useContext(CartContext)

    return (
        <div className="container my-5">
            {
                cart.length === 0 
                ? <CartEmpty />
                : <CartList />
            }
        </div>
    )
}