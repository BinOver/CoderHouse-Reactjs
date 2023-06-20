import { Link } from 'react-router-dom'


export const Item =({id,nombre,precio,descripcion,img}) =>{

    return (
            <div className='col-3 m-2'>
                <h4>{nombre}</h4>
                <img src={img} alt={nombre} />
                <p>{descripcion}</p>
                <p>Precio:${precio}</p>
                <Link className="btn btn-primary" to={`/item/${id}`}>Detalle</Link>
            </div>
    )
}

export default Item