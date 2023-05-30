import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const Item = ({id, nombre,categoria, subcategoria, precio, stock, imagen, descripcion}) => {

    return (
        <Card id={id} className={categoria + " " + subcategoria}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title><h2>{nombre}</h2></Card.Title>
            <Card.Text id="descripcion">
                {descripcion}
            </Card.Text>
            <Card.Text id="pasajeros">
                Máx. pasajeros:{stock}
            </Card.Text>
            <Card.Text id="precio">
                ${precio}
            </Card.Text>            
        </Card.Body>
        <footer className="contador">
            <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log('cantidad agregada',quantity)}/>
        </footer>
        </Card>
    )
}

export default Item;