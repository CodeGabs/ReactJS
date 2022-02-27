import { useEffect } from "react"
import { Item } from "../Item/Item"
import './ItemList.css'



export const ItemList = ( {productos} ) => {

    return (
        <div class="container itemlist">    
            <h2>Productos</h2>   
            <hr/>
            <div className="row">
                { productos.map( (item) => <Item key={item.id} {...item}/> )}
            </div> 
        </div>

    )
}