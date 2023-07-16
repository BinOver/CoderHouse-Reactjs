

export const validarForm = (nombre,direccion,email,email2) => {

    const validarNombre = /^[A-Za-z\s]+$/
    const validarDireccion = /^(?=.*[A-Za-z])(?=.*\d)(?=.*\s).+$/
    const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!validarNombre.test(nombre)) {
        alert('Para el campo "Nombre" solo se permiten letras y espacios.')
        return false 
    }

    if (!validarDireccion.test(direccion)) {
        alert('Para el campo "Direccion" solo se permiten letras, numeros y espacios.')
        return false
    }

    if (!validarEmail.test(email)) {
        alert('Para el campo "Email" por favor ingresar direcciones validas.')
        return false
    }

    if (email != email2){
        alert('El Email ingresado y su verificacion son distintas')
        return false
    }
    
    return true    
}

export default validarForm