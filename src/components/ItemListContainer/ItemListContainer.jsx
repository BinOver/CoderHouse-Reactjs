
export const ItemListContainer = ( {mensaje} ) => {
    return (
        <div className="list__container">
            <h2>Lista de productos</h2>
            <hr />
            <p>{mensaje}</p>
        </div>
    )
}

export default ItemListContainer