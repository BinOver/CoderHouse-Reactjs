

export const ItemDetail = ({id, nombre, precio, descripcion, img, categoria}) =>{
    
    return(
        <div className="container my-5 card" style={{width: '18rem'}}>
            <img className='card-img-top p-2' src={img} alt={nombre} />
            <div className='card-body'>
                <h2 className='card-title text-center'>{nombre}</h2>
                <hr />
                <p className='card-text'>{descripcion}</p>
                <h4 className='card-text'>Precio: ${precio}</h4>
            </div>
            <small className='card-text text-center'>categoria: {categoria}</small>
        </div>
    )
}

export default ItemDetail