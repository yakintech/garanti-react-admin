import { useEffect, useState } from "react";
import { axiosInstance } from "../../../config/axiosInstance";
import { ProductModel } from "./ProductModel";


//custom hook to fetch products
export function useProducts() {

    const [products, setproducts] = useState<ProductModel[]>([])
    const [loading, setloading] = useState<boolean>(true)
    const [error, seterror] = useState<any>(null)


    useEffect(() => {

        axiosInstance.get<ProductModel[]>('/products')
            .then(response => {
                setproducts(response.data)
                setloading(false)
            })
            .catch(error => {
                seterror(error)
                setloading(false)
            })

    }, [])

    return { products, loading, error }

}


