import { useState, createContext, useContext } from "react";

export const CartContext = createContext()

export const useCartContext =() => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart ] = useState([])
    console.log(cart)
    
    const agregarAlCarrito =(item) => {
        setCart([...cart,item])
    }
    
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const totalCompra = () => {
        return cart.reduce((total, prod) => total + prod.precio*prod.cantidad,0)
    }

    const totalCantidad = () => {
        return cart.reduce((total, prod) => total + prod.cantidad,0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const eliminarDelCarrito = (id) => {
        setCart(cart.filter((prod) => prod.id != id))
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCompra,
            vaciarCarrito,
            eliminarDelCarrito,
            totalCantidad,
            }}>
                {children}
        </CartContext.Provider>
    )
}

export default CartContext