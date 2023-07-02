import {useState} from 'react';

const Contador =()=>{
    const [contador, setContador]= useState(0);

    const sumarUno=()=>{
        setContador(contador +1);
    }
    
    return(
        <div>
            <h3> cont: {contador}</h3>
            
        </div>
    )
}

export default Contador;