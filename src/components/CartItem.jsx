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
        <Card key={id}>
        <Card.Body>
            <Card.Title>
                <h2>{nombre}</h2>
            </Card.Title>
            <Card.Text id="pasajeros">Cantidad:{quantity}</Card.Text>
            <Card.Text id="unitario">Precio unitario ${precio}:</Card.Text>
            <Card.Text id="subtotal">Subtotal ${subtotal}:</Card.Text>
            <button onClick= {handleRemoveItem} className="button">X</button>
            </Card.Body>
        </Card>
        </div>
    );
};

export default CartItem;