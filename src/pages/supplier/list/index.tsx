import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { baseApi } from '../../../api/baseApi'
import { DataGridPremium } from '@mui/x-data-grid-premium'
import { queryClient } from '../../..'

function List() {

    const { data } = useQuery({
        queryKey: ['suppliers'],
        queryFn: async () => {
            return baseApi.getAll<SupplierModel[]>('/suppliers')
        },
        staleTime: 40000
    })

    const clear = () => {
        queryClient.invalidateQueries({
            queryKey: ['suppliers']
        })
    }

    return <>
    <button onClick={clear}>Clear Cache</button>
        <div style={{height:500, width:"100%"}}>
            <DataGridPremium
                rows={data ?? []}
                columns={[
                    {field:"id", headerName:"ID", width:100},
                    { field: 'companyName', headerName: 'Company Name', width: 200 },
                    { field: 'contactName', headerName: 'Contact Name', width: 200 },
                    { field: 'contactTitle', headerName: 'Contact Title', width: 200 },
                ]}
            />
        </div>
    </>
}

export default List


interface SupplierModel {
    companyName: string
    contactName: string
    contactTitle: string
}