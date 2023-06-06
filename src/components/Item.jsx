import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Item = ({id, nombre, subcategoria, precio, stock, imagen, resumen}) => {

    return (
<Link to={`/item/${id}`} className="verDetalle">
        <Card id={id} className={subcategoria + " " + subcategoria + id}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title><h2>{nombre}</h2></Card.Title>
            <Card.Text id="pasajeros">
                Máx. pasajeros:{stock}
            </Card.Text>
            <Card.Text id="resumen">
                {resumen}
            </Card.Text>
            <div className="cardBottom">
                <Card.Text id="precio">
                    ${precio}
                </Card.Text>
            </div>
        </Card.Body>
        </Card>
        </Link>
    )
}

export default Item;