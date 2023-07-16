import CartContext from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"

export const ItemDetail = ({id, nombre, precio, descripcion, img, categoria, stock}) =>{

    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregarACarrito = () => {
        const item ={
            id,
            nombre,
            precio,
            descripcion,
            img,
            categoria,
            stock,
            cantidad
        }
        agregarAlCarrito(item)
    }
    
    return(
        <div className="container my-5 card itemdetail shadow" >
            <img className='card-img-top p-2 itemdetail__img' src={img} alt={nombre} />
            <div className='card-body'>
                <h2 className='card-title text-center'>{nombre}</h2>
                <hr />
                <p className='card-text'>{descripcion}</p>
                <p className='card-text'>Stock: {stock}</p>
                <h4 className='card-text'>Precio: ${precio}</h4>
            </div>
            <small className='card-text text-center'>categoria: {categoria}</small>
            <hr />

            {
                isInCart(id) 
                ? <Link className ="btn btn-success mb-2" to="/cart">Terminar mi compra</Link>
                : <div className="text-center"> 
                    <ItemCount className="text-center"
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        handleAgregarACarrito={handleAgregarACarrito}
                    />
                </div>

            }


        </div>
    )
}

export default ItemDetail