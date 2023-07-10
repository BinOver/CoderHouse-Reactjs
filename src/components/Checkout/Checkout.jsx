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
        email: ''
    })

    const handleSubmit =(e) => {
        e.preventDefault()
        
        // const validarNombre = /^[A-Za-z\s]+$/
        // const validarDireccion = /^(?=.*[A-Za-z])(?=.*\d)(?=.*\s).+$/
        // const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        // if (!validarNombre.test(value.nombre)) {
        //     alert('Para el campo "Nombre" solo se permiten letras y espacios.')
        //     return
        // }

        // if (!validarDireccion.test(value.direccion)) {
        //     alert('Para el campo "Direccion" solo se permiten letras, numeros y espacios.')
        //     return
        // }

        // if (!validarEmail.test(value.email)) {
        //     alert('Para el campo "Email" por favor ingresar direcciones validas.')
        //     return
        // }

            if(validarForm(value.nombre, value.direccion, value.email)){
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

            console.log(e.target.name)
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
        <div>
            <h2>Checkout</h2>
            <hr />
            <form onSubmit={handleSubmit}>
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
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>

    )
}

export default Checkout
