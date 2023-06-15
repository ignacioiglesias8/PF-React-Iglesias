import React, { createContext, useState, /*useMemo*/} from 'react'

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
            console.error('Ya agregaste a este producto')
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

/*    const contextValue = useMemo(() => {
        return { cart, addItem, removeItem, clearCart };/// en el value irían las {}
    }, [cart, addItem, removeItem, clearCart]);
*/

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