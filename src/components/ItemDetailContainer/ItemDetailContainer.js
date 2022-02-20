import { useEffect, useState } from 'react';
import { getData } from '../../helpers/getData';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    

    useEffect(() => {
        setLoading(true)

        getData()
            .then((res) => {
                setItem(res.find((el) => el.id === Number(itemId)))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className='container'>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail {...item} />
            }
        </div>
    )
};