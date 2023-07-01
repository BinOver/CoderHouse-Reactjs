import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"


export const ItemDetailContainer = ( {mensaje} ) => {

    const { itemId } = useParams()
    const [item , setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        setLoading(true)
        const itemRef = doc(db, "productos", itemId)
        getDoc(itemRef)
            .then((resp) => {
                setItem({
                    ...resp.data(),
                    id: resp.id
                })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    },[itemId])

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