import React, { useState } from 'react'
import useSWR from 'swr'
import { axiosInstance } from '../../../config/axiosInstance'
import { ProductModel } from '../../../hooks/data/product/ProductModel'
import { DataGridPremium } from '@mui/x-data-grid-premium'
import { baseApi } from '../../../api/baseApi'

function ListSWR() {

    const { data, isLoading, error } = useSWR("/products", async () => {
        return baseApi.getAll<ProductModel[]>('/products')
    })

    
    //&& işareti data undefined veya null değilse çalışır
    return <>
        {
            data && <div style={{ height: 500, width: '100%' }}>
                <DataGridPremium
                    rows={data}
                    columns={[
                        { field: 'id', headerName: 'ID', flex: 1 },
                        { field: 'name', headerName: 'Name', flex: 2 },
                        { field: 'categoryId', headerName: 'Category', flex: 2 }
                    ]}
                    loading={isLoading}
                />
            </div>
        }

    </>
}

export default ListSWR