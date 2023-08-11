import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import Spinner from "../Spinner/Spinner";


const ItemDetailContainer=()=>{
    const [item, setItem] = useState([])
    const {id} = useParams();
    const [load, setLoad] = useState(true)
    
    useEffect(() => {
        setLoad(true);
    
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id);
    
        getDoc(queryDoc)
        .then(res => {
            setItem({ id: res.id, ...res.data() });
            setLoad(false); 
        })
        .catch(error => {
            setLoad(false); 
        });
    }, [id]);
    

    return(
        <div>
            {load ? <Spinner/> : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;