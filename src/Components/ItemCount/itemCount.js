import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);
   
    const incrementar = () => {
      if(count < stock){
        setCount(count + 1)
      }
    }
    const decrementar = () => {
      if(count > initial){
        setCount(count - 1)
      }
    }

        return(
            <div className="container boton" id="itemcount">
              <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button onClick={() => decrementar()} type="button" className="btn btn-outline-light">-</button>
                <button type="button" className="btn btn-outline-light">{count} </button>
                <button onClick={() => incrementar()}  type="button" className="btn btn-outline-light">+</button>
              </div> 
              <div className="container boton_input">
                <button type="button" className="btn btn-outline-light" onClick={() => onAdd(count)}>Agregar al carrito</button>                  
              </div>
            </div>  
        )
    }


export default ItemCount;