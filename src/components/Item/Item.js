import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import './Item.css' 

export const Item = ( {id, nombre, precio, img, desc} ) => {

    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>
                    Precio: S/{precio}
                </Card.Text>
                <Link to={`/detail/${id}`}>
                <Button variant="secondary">¡Lo quiero!</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}