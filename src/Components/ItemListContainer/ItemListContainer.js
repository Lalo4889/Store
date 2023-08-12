import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Spinner from '../Spinner/Spinner';
import Error from '../NavBar/Error';
const ItemListContainer = () => {
    
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(true);
  
  const getData = async (categoria) => {
    setLoad(true);
    const querydb = getFirestore();
    const queryCollection = categoria ? query(collection(querydb, 'products'), where("categoryId", "==", categoria)) : collection(querydb, 'products');
    
    try {
      const resultado = await getDocs(queryCollection);
      if (resultado.empty) {
        throw new Error("Categoria no encontrada"); // Lanzar error si no se encontraron productos
      }
      
      const datos = resultado.docs.map(p => ({ id: p.id, ...p.data() }));
      setItems(datos);
      setLoad(false);
    } catch (error) {
      setItems([]); // Limpia los datos para mostrar un componente vacío
      setLoad(false);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <>
      {load ? <Spinner/> : items.length > 0 ? <ItemList item={items} /> : <Error />}
    </>
  );
};

export default ItemListContainer;
