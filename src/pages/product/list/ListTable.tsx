import React from 'react'
import { useProducts } from '../../../hooks/data/product/useProducts'

function ListTable() {

    const { products } = useProducts()


  return <>
    <ul>
        {
            products.map(product => {
                return <li key={product.id}>{product.name}</li>
            })
        }
    </ul>
  </>
}

export default ListTable