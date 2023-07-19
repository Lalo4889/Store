import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cervezas from '../../json/cervezas.json'
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer=()=>{
    const [item, setItem] = useState([])
    const {id} = useParams();
    
useEffect(()=>{
    const cerveza = new Promise((resolve) => {
        setTimeout(() => {
            resolve(cervezas.find(item=> item.id === parseInt(id)))
            /*si el id existe en el array lo va a filtrar segun la categoria y en caso de que no imprima todo el array del archvo osea todas las categorias */
        },1000);
    });
    cerveza.then((data)=>{
        setItem(data)
    })
},[id])

    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;