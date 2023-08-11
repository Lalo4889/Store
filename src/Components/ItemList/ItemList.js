import Item from "../Item/item";


const ItemList=({item})=>{
  return(
          <div className='fondo grid' id='itemlist'>
            {
              item.map(item=>
              <div 
                key={item.id}>
                <Item item={item}/> 
              </div>
              )   
            }
          </div>
        )
  }

export default ItemList;