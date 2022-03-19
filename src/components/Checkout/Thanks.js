import { Link } from "react-router-dom"


export const Thanks = ({order}) => {

    return <div className="container my-5">
                <h2>¡Gracias por tu compra!</h2>
                <hr/>
                <h3>Tu N° de orden es: {order}</h3>
                <Link to="/" className="btn btn-secondary">Volver</Link>
            </div>
}