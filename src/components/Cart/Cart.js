import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'


export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)


    return (
        <div className="container my-4">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: S/{item.cantidad * item.precio}</p>
                        <button className="btn btn-info" onClick={() => eliminarItem(item.id)}>
                            <BsFillTrashFill/>
                        </button>
                    </div>
                ))
            }

            <hr/>
            <h2>Total: S/{totalCart()}</h2>

            <div className="my-2">
                <button className="btn btn-info" onClick={vaciarCart}>Vaciar carrito</button>
                <button className="btn btn-dark mx-2">Terminar mi compra</button>
            </div>
        </div>
    )
}