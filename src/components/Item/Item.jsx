import { Link } from 'react-router-dom'


export const Item =({id,nombre,precio,descripcion,img}) =>{

    return (
            <div className='card col-3 m-2' style={{width: '18rem'}}>
                <img className='card-img-top p-2' src={img} alt={nombre} />
                <div className='card-body'>
                    <h4 className='card-title text-center'>{nombre}</h4>
                    <hr />
                    <p className='card-text'>{descripcion}</p>
                    <p className='card-text'>Precio: ${precio}</p>
                </div>
                <Link className="btn btn-warning m-2" style={{width: '8rem'}} to={`/item/${id}`}>Detalle</Link>
            </div>
    )
}

export default Item