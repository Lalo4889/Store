import { useState } from "react";


    const ItemCount = ({stockItems}) => {
        const [counter, setCounter] = useState(1);
        const [stock, setStock] = useState(stockItems);
    
        const incrementarStock = () => {
            if (counter < stock) {
                setCounter(counter + 1);
            } 
        }
    
        const decrementarStock = () => {
            if (counter > 1) {
                setCounter(counter - 1)
            }     
        }
    
        return(
            <div className="container boton" id="itemcount">
                
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-light" onClick={decrementarStock} >-</button>
                            <button type="button" className="btn btn-outline-light">{counter} </button>
                            <button type="button" className="btn btn-outline-light" onClick={incrementarStock} >+</button>
                         </div>
             
             <div className="container boton_input">
                <button type="button" className="btn btn-outline-light" >Agregar al carrito</button>                  
                    </div>
                
            </div>  
        )
    }


export default ItemCount;