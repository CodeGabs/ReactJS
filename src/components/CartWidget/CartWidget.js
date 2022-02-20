import './CartWidget.css'
import { useContext } from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


export const CartWidget = () => {
    const { cantidadCart } = useContext(CartContext)

    return (
        <Link to="/cart" className='cartWidget'>
            <BsFillCartFill/>
            <span>{cantidadCart()}</span>
        </Link>
    )
}