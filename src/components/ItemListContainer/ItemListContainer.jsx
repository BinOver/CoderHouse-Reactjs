import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../../firebase/config'
import { Loading} from '../../components/Loading/Loading'

export const ItemListContainer = ( {mensaje} ) => {

    const { categoryId } = useParams()
    const [productos , setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        setLoading(true)
        const productosRef = collection( db, "productos")
        const q = categoryId
            ? query(productosRef, where("categoria", "==", categoryId))
            :productosRef
        getDocs(q)
            .then ((resp) => {
                const items = resp.docs.map((doc) => ({
                    ...doc.data(), 
                    id: doc.id
                }))
                setProductos(items)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
        },[categoryId])

    return (
        <div className='list__container container'>
            <h2>Lista de productos</h2>
            <hr />
            <p>{mensaje}</p>
            {
                loading
                    ? <Loading />
                    : <ItemList items={productos} />
            } 
        </div>
    )
}

export default ItemListContainer