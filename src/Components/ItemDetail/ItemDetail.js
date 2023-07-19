import ItemCount from "../ItemCount/itemCount";



const ItemDetail =({item})=>{
    return(
        <div className="presentacion">
      <div>
        <img src={item.img} className="card-img-top" alt="imagen del producto"/>
        </div>
        <div className="datos_producto">
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>$ {item.precio}</p>
          <p>Cantidad: {item.stock}</p>
        </div>
        <div className="contador">
        <ItemCount stockItems={10}/>
        </div>
        </div>
    </div>
    )
}

export default ItemDetail;