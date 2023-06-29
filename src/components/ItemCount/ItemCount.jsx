import { useState } from "react"


export const ItemCount = ( {max, cantidad, setCantidad, handleAgregarACarrito} ) => {


    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }
    
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }


    
    return(
        <div className='p-2'>
            <button onClick={handleRestar} className="btn btn-outline-warning">-</button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-warning">+</button>
            <br />
            <button onClick={handleAgregarACarrito} className='btn btn-warning my-2'>Agregar al carrito</button>
        </div>

    )
}

export default ItemCount 