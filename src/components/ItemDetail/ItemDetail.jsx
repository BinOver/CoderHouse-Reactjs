

export const ItemDetail = ({id, nombre, precio, descripcion, img, categoria}) =>{
    
    return(
        <div className="containet my-5">
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>
            <h4>Precio ${precio}</h4>
            <small>categoria: {categoria}</small>
        </div>
    )
}

export default ItemDetail