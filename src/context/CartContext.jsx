import React, { createContext, useState } from 'react';
import CustomAlert from '../components/CustomAlert';

export const CartContext = createContext ({
    cart: [],
    totalQuantity : 0,
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
            updateTotal(quantity * item.precio)
            setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity)
        }else{
            CustomAlert();
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([]);
        setTotal(0);
        setTotalQuantity(0);
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const updateTotal = (subtotal) => {
        setTotal(prevTotal => prevTotal + subtotal);
    };

    const updateTotalQuantity = (amount) => {
        setTotalQuantity((prevQuantity) => prevQuantity + amount);
    };

    return (
        <CartContext.Provider value={{ 
            cart, 
            addItem, 
            removeItem, 
            clearCart, 
            total, 
            totalQuantity, 
            updateTotal, 
            updateTotalQuantity }}>
            {children}
        </CartContext.Provider>
    )
} 