
import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const { cart, removeItem } = useContext(CartContext)
    const total = cart.reduce((acum, unItem) => acum + (unItem.price * unItem.count), 0);

    return (
        <>  
            {
                cart.length === 0 ?
                ( <h1>Carrito Vacio</h1>)
                    :
                (<div className='container'>
                    <h1 className='m-5'>Tus compras</h1>

                    {cart.map(unItem => <div  key={unItem.id}>
                    <h3 className='mt-5'>Nombre: {unItem.title}</h3>
                    <img width="50%" src={unItem.img} alt='imagen de producto'/>
                    <p>Cantidad: {unItem.count}</p>
                    <p>Precio Unitario: {unItem.price}</p>
                    <p>Precio Total: {unItem.price*unItem.count}</p>
                   
                    <button onClick={()=>removeItem(unItem.id)} className='btn btn-danger m-2'>Eliminar Producto</button>
                    <br/>
                    <Link to='/'>
                        <button className='btn btn-warning mt-2 mb-2' >Volver</button>
                    </Link>
                    </div>)}   
                    <p className='mt-2'>TOTAL DE LA COMPRA: {total}</p>
                    <Link to='/checkout'>
                        <button className='btn btn-success m-1' >Finalizar Compra</button>
                    </Link>  
                </div>    
                    )
            }
        </>
    )
}

export default Cart;