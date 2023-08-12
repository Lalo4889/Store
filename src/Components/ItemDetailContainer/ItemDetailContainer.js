import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Spinner from "../Spinner/Spinner";
import Error from "../NavBar/Error";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false); // Agregamos el estado para el error
    const { id } = useParams();

    useEffect(() => {
        setLoad(true);
        setError(false); // Reiniciamos el estado de error

        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id);

        getDoc(queryDoc)
        .then(res => {
            if (!res.exists()) {
                setError(true); // Establecemos el estado de error si el documento no existe
            } else {
                setItem({ id: res.id, ...res.data() });
            }
            setLoad(false);
        })
        .catch(error => {
            setError(true); // Establecemos el estado de error si hay un error en la recuperación
            setLoad(false);
        });
    }, [id]);

    if (error) {
        return <Error/>; // Si hay un error, mostramos la página de error 404
    }

    return (
        <div>
            {load ? <Spinner/> : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;
