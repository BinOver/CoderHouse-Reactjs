import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'


export const ItemListContainer = ( {mensaje} ) => {

    const { categoryId } = useParams()
    const [productos , setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        setLoading(true)
        pedirDatos()
            .then((res) => {
                if(!categoryId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter((item) => item.categoria === categoryId))
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => 
                setLoading(false))
    },[categoryId])

    return (
        <div className='list__container my-5 container'>
            <h2>Lista de productos</h2>
            <hr />
            <p>{mensaje}</p>
            {
                loading
                    ? <h2>Cargando informacion</h2>
                    :<ItemList items={productos} />
            } 
        </div>
    )
}

export default ItemListContainer