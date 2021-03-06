import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import './ItemDetail.css'
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({ id, nombre, img, desc, precio, stock, categoria }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const onAdd = (cantidad) => {
        
        console.log(cantidad)
        if (cantidad === 0) return

        if (!isInCart(id)) {
            const addItem = {
                id, nombre, precio, stock, cantidad
            }
            agregarAlCarrito(addItem)
        }
    }

    return (
        <div class="itemDetail">
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} />
            <p>{desc}</p>
            <h3>Precio: S/{precio}</h3>

            {
                isInCart(id)
                    ? <Link to="/cart" className="btn btn-success my-3">
                        Terminar mi compra
                    </Link>
                    :
                    <>
                        <ItemCount
                            max={stock}
                            onAdd={onAdd}
                        />


                    </>
            }



        </div >
    )
} 