import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    return (
        !cart.length
            ?
            <div className="container my-4">
                
                <p>El carrito está vacío</p>

                <Link to='/'>
                    <button className="btn btn-dark mx-2">Volver</button>
                </Link>

            </div>
            :
            <div className="container my-4">
                <h2>Tu compra</h2>
                <hr />

                {
                    cart.map((item) => (
                        <div key={item.id}>
                            <h4>{item.nombre}</h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio: S/{item.cantidad * item.precio}</p>
                            <button className="btn btn-info" onClick={() => eliminarItem(item.id)}>
                                <BsFillTrashFill />
                            </button>
                        </div>
                    ))
                }

                <hr />
                <h2>Total: S/{totalCart()}</h2>

                <div className="my-2">
                    <button className="btn btn-info" onClick={vaciarCart}>Vaciar carrito</button>
                    <Link to="/checkout" className="btn btn-success mx-2">Terminar mi compra</Link>
                </div>
            </div>
    )
}