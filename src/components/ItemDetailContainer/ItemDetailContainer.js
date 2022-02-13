import { useEffect, useState } from 'react';
import { getData } from '../../helpers/getData';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    
    console.log(item)

    useEffect(() => {
        setLoading(true)

        getData()
            .then((res) => {
                setItem( res[0] ) //tempralmente hasta emplear routing//
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className='container my-5'>
            {
                loading 
                ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
            }
        </div>
)
};