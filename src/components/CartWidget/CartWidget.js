import './CartWidget.css'
import { useContext } from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


export const CartWidget = () => {
    const { cantidadCart, cart } = useContext(CartContext)

    return (

        cart.length>0 && 
        <Link to="/cart" className='cartWidget'>
            <BsFillCartFill/>
            <span>{cantidadCart()}</span>
        </Link>
    )
}