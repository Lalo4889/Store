import {useState, useEffect} from 'react';
import Cervezas from '../../json/cervezas.json';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';



const  ItemListContainer = () =>{
    const [Item, setItem] = useState([])
    const {id} = useParams();
    
useEffect(()=>{
    const cerveza = new Promise((resolve) => {
        setTimeout(() => {
            resolve(id ? Cervezas.filter(item=>item.category === id) : Cervezas)
            /*si el id existe en el array lo va a filtrar segun la categoria y en caso de que no imprima todo el array del archvo osea todas las categorias */
        },1000);
    });
    cerveza.then((data)=>{
        setItem(data)
    })
},[id])



    return(
       <ItemList item={Item}/>
    )
}
    

export default ItemListContainer;