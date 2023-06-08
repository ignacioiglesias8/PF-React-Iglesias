import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const Description = ({id, nombre, subcategoria, precio, stock, imagen, descripcion}) => {

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
                <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log('cantidad agregada',quantity)}/>
                </div>
            </div>
        </Card.Body>
        </Card>
    )
}

export default Description;