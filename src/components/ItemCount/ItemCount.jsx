


export const ItemCount = ( {max, cantidad, setCantidad, handleAgregarACarrito} ) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }
    
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return(
        <div className='p-2'>
            <button 
                onClick={handleRestar} 
                className={ `btn ${cantidad === 1 ? "btn-danger": "btn-warning"}`  }
                disabled={cantidad === 1}
            >-</button>

            <span className="mx-3">{cantidad}</span>

            <button 
                onClick={handleSumar} 
                className={ `btn ${cantidad == max ? "btn-danger": "btn-warning"}` }
                disabled={cantidad == max}
            >+</button>

            <br />

            <button 
                onClick={handleAgregarACarrito} 
                className='btn btn-warning my-2'
            >Agregar al carrito</button>
        </div>

    )
}

export default ItemCount 