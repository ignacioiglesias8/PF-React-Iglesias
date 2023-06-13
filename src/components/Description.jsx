import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Description = ({id, nombre, subcategoria, precio, stock, imagen, descripcion}) => {
    const [quantityAdded, setQuantityAdded]= useState (0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }

    return (
        <Card id={id} className={subcategoria}>
        <Card.Body>
            <div className="cardBodyLeft">
                <Card.Title><h2 id='cardSelectedTitle'>{nombre}</h2></Card.Title>
                <Card.Text id="descripcion">
                    {descripcion}
                </Card.Text>
            </div>
            <div className="cardBodyRight">
                <Card.Img variant="top" src={imagen} />
                <Card.Text id="precio">
                    ${precio}
                </Card.Text> 
                <Card.Text id="pasajeros">
                    Máx. pasajeros: {stock}
                </Card.Text>
                <div className="contador">
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='finalizar'>Terminar Compra</Link>
                        ) :(
                            <ItemCount initial={0} stock={stock} onAdd={handleOnAdd}/>
                        )
                    }
                </div>
            </div>
        </Card.Body>
        </Card>
    )
}

export default Description;