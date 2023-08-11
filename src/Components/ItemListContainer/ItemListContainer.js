import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = () => {
    
  const { id } = useParams()
  const [items, setItems] = useState([])
  const [load, setLoad] = useState(true)

  const getData = async (categoria) => {
    setLoad(true)
    const querydb = getFirestore();
    const queryCollection = categoria ? query(collection(querydb, 'products'), where("categoryId", "==", categoria)) : collection(querydb, 'products');
    const resultado = await getDocs(queryCollection)
    const datos = resultado.docs.map(p => ({ id: p.id, ...p.data() }))
    setItems(datos)
    setLoad(false)
  }

  useEffect(() => {
    getData(id)
  }, [id])


  return (
    <>
      {load ? <Spinner/> : < ItemList item={items} />}
    </>
  );
};

export default ItemListContainer;