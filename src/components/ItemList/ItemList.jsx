import {Item} from '../Item/Item'


export const ItemList =({items})=>{

	return(
		<div className='row'>
			{
				items.map((prod) => (
					<Item key={prod.id} {...prod} />
				))
			}
		</div>
    )
}

export default ItemList