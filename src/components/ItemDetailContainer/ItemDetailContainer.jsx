import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = ( {mensaje} ) => {

    const { id } = useParams()
    const [item , setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(id)))
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => 
                setLoading(false))
    },[id])

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando informacion</h2>
                    :<ItemDetail {...item} />
            }
            
        </div>
    )
}

export default ItemDetailContainer