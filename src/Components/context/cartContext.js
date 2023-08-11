import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])    
    const addItem = (item, count) => {
        setCart([...cart, { ...item, count }])
    }

    const removeItem = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
    };
    
    useEffect(() => {
    }, [cart])

    const getQuantity = () => {
        return cart.reduce((acum, unItem) => acum + unItem.count, 0)
    }

    const clear = () => {
        setCart([]);
    };

    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;