import { useEffect, useState } from "react"
import { getData } from "../../helpers/getData"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const { catId } = useParams()
    console.log(catId)

    useEffect(() => {
        setLoading(true)

        getData()
            .then((res) => {
                if (catId) {
                    setProductos(res.filter((el) => el.categoria === catId))
                } else {
                    setProductos(res)
                }
                setProductos(res)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

    return (
        <>
            {
                loading
                    ? <h2> </h2>
                    : <ItemList productos={productos} />
            }
        </>
    )
}