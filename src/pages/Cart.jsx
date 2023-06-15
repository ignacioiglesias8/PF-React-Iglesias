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
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="button">Limpiar</button>
            <div>
                <Link to='/checkout' className='Option'>Checkout</Link>
            </div>
            
        </div>
    )
}

export default Cart;