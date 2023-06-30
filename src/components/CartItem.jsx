import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import Card from 'react-bootstrap/Card';

const CartItem = ({id, nombre, precio, quantity}) => {
    const { removeItem, updateTotal, updateTotalQuantity } = useContext (CartContext)

    const subtotal = precio * quantity;

    const handleRemoveItem = () => {
        removeItem(id);
        updateTotal(-subtotal); 
        updateTotalQuantity(-quantity);
    };

    return (
        <div>
        <Card className="cartItem" key={id}>
        <Card.Body>
            <Card.Title className='cartItemClass' id="cartItemTitle">
                <h2>{nombre}</h2>
            </Card.Title>
            <Card.Text className='cartItemClass'>Pasajeros: {quantity}</Card.Text>
            <Card.Text className='cartItemClass'>Precio unitario: ${precio}</Card.Text>
            <Card.Text className='cartItemClass'>Subtotal: ${subtotal}</Card.Text>
            <button onClick= {handleRemoveItem} className="button + cartItemClass" id="remove">X</button>
            </Card.Body>
        </Card>
        </div>
    );
};

export default CartItem;