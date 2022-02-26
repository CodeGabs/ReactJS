import { useState } from "react"
export const ItemCount = ({ max, min = 0, onAdd }) => {

    const [counter, setCounter] = useState(0)


    const handleSumar = (e) => {
        
        counter < max && setCounter(counter + 1)
       
    }

    const handleRestar = () => {
        counter > min && setCounter(counter - 1)
    }

    return (
        <div>
            <button className="btn btn-outline-secondary" onClick={handleRestar}>-</button>
            <span className="mx-3">{counter}</span>
            <button className="btn btn-secondary" onClick={handleSumar}>+</button>

            <button
                className="btn btn-info my-2"
                onClick={()=>{onAdd(counter)}}
            >
                Agregar al carrito
            </button>

        </div>
    )
}