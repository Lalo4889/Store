import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/itemCount";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";


const ItemDetail =({item})=>{
  const stock = item.stock

  const { addItem } = useContext(CartContext)
  const handleOnAdd = (count) => {

      addItem({ id: item.id, price: item.price, title: item.title, img: item.img }, count)
  };

 
    return(
        <div className="presentacion">
          <div>
            <img src={item.img} className="card-img-top" alt="imagen del producto"/>
          </div>
          <div className="datos_producto">
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p> {item.quantity} $ {item.price}</p>
              <p>Cantidad: {item.stock}</p>
            </div>
            <div className="contador">
              <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
              <Link to={'/'}  className="btn btn-secondary mt-2">Volver</Link>
            </div>
          </div>
        </div>
    )
}

export default ItemDetail;