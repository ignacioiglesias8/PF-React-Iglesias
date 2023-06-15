import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext (CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='cartItemContainer'>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <div className='checkoutContainer'>
                <h3 className='checkoutItem'>Total: ${total}</h3>
                <button onClick={() => clearCart()} className="cartItemClass" id="vaciar">Vaciar carrito</button>
                <div>
                    <Link to='/checkout' className='Option + checkoutItem' id="checkout">Checkout</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;