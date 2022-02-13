import './ItemDetail.css'
export const ItemDetail = ({id, nombre, img, desc, precio}) => {

    return (
        <div class="itemDetail">
            <h3>{nombre}</h3>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>
            <h3>Precio: S/{precio}</h3>

        </div>
    )
} 