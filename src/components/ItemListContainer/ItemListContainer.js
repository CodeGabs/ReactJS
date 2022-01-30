import React from 'react'
import './ItemListContainer.css'
export const ItemListContainer = ( {greeting} ) => {
    return(
        <section className= "body">
            <h2>{greeting}</h2>
            <hr/>

        </section>
    )
}