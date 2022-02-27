import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {db}  from '../Firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';


export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    async function getProducts(db){        
        const productosCol = collection(db, 'data');
        const productoSnapshot = await getDocs(productosCol);
        console.log(productoSnapshot.docs);
        const productoList = productoSnapshot.docs.map(doc => {
           let producto=doc.data();
           producto.id=doc.id;
           return producto;
        });
        console.log(productoList)
        return productoList;
    }

    useEffect(() => {

        getProducts(db).then(prod => {
            console.log(prod);
            prod.filter(resultProd=>{
                if(resultProd.id==itemId){
                    console.log(resultProd)
                    setItem(resultProd)
                }
                })
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