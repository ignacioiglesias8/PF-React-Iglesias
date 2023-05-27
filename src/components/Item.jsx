import Card from 'react-bootstrap/Card';
import Button from "./Button.jsx";

const Item = ({id, nombre,categoria, precio, stock, imagen, descripcion}) => {

    return (
        // además de className categoria, quisiera agregarle la clase subcategoria
        <Card id={id} className={categoria}>
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
            <Button label={"Algo hará"} customClass="buttonCard" handleCLick={console.log("algo")}></Button>
        </Card.Body>
        </Card>
    )
}

export default Item;