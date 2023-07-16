import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"
import { validarForm } from "../../helpers/validarForm"

export const Checkout = () => {
    const [orderId , setOrderId] = useState(null)
    const { cart, totalCompra, vaciarCarrito } = useCartContext()
    const [value,setValue] = useState({
        nombre: '',
        direccion: '',
        email: '',
        email2: ''
    })

    const handleSubmit =(e) => {
        e.preventDefault()
        
        if(!validarForm(value.nombre, value.direccion, value.email,value.email2)){
            return
        }

        const orden = {
            cliente: value,
            items: cart,
            total: totalCompra(),
            fecha: new Date()
        }
        console.log(orden)

        const orderRef = collection(db, "orders")
        addDoc(orderRef, orden)
            .then((doc)=> {
                setOrderId(doc.id)
                vaciarCarrito()
            })
            .catch(error => console.error(error))
    }
    
    const handleInputChange = (e) => {

        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    if(orderId){
        return (
            <div>
                <h2>Gracias por comprar en nuestro E-Commers!</h2>
                <hr />
                <h3>Tu compra se registro correctamente y tu ID es <strong>{orderId}</strong></h3>
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
        )    
    }

    if(cart.length === 0 ){
        return <Navigate to="/"/>
    }
    
    return (
        <div className="checkout">
            <h2>Finalizando su compra</h2>
            <h6>Complente el formulario para seguir</h6>
            <hr />
            <form className="checkout__form" onSubmit={handleSubmit}>
                <input 
                    value={value.nombre}
                    type="text"
                    placeholder="Nombre:"
                    className="form-control my-2"
                    onChange={handleInputChange}
                    name="nombre"
                />
                <input
                    value={value.direccion}
                    type="text"
                    placeholder="Direccion:"
                    className="form-control my-2"
                    onChange={handleInputChange}
                    name="direccion"
                />
                <input
                    value={value.email}
                    type="email"
                    placeholder="E-mail:"
                    className="form-control my-2"
                    onChange={handleInputChange}
                    name="email"
                />
                <input
                    value={value.email2}
                    type="email"
                    placeholder="Confirmar E-mail:"
                    className="form-control my-2"
                    onChange={handleInputChange}
                    name="email2"
                />
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout
