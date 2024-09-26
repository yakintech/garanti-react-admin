import { Button } from '@mui/material'
import { DataGridPremium, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid-premium'
import { trTR } from '@mui/x-data-grid/locales';
import { useContext } from 'react'
import { axiosInstance } from '../../../config/axiosInstance'
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../hooks/data/product/useProducts';
import { FavoritesContext } from '../../../context/FavoritesContext';


function List() {

  const { products, loading, error } = useProducts()
  const { favOperation, favorites } = useContext(FavoritesContext)

  // const [products, setproducts] = useState([])

  // useEffect(() => {

  //   axiosInstance.get('/products')
  //     .then(response => {
  //       setproducts(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })

  // }, [])


  const navigate = useNavigate()

  const deleteProduct = (id: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axiosInstance.delete(`/products/${id}`)
        .then(response => {
          axiosInstance.get('/products')
            .then(response => {
              //setproducts(response.data)
            })
        })
    }
  }



  let columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 1
    },
    {
      field: "name",
      headerName: "Name",
      flex: 2
    },
    {
      field: "categoryId",
      headerName: "Category",
      flex: 2
    },
    {
      field: "quantityPerUnit",
      headerName: "Quantity Per Unit",
      flex: 2
    },
    {
      field: "unitPrice",
      headerName: "Unit Price",
      flex: 2,
      renderCell: (params: GridRenderCellParams) => {
        return `$${params.row.unitPrice.toFixed(2)}`
      }
    },
    {
      field: "Delete",
      headerName: "Delete",
      flex: 1.5,
      renderCell: (params: GridRenderCellParams) => {
        return <Button onClick={() => deleteProduct(params.row.id)} variant="contained" color="error">Delete</Button>
      }
    },
    {
      field: "Favorites",
      headerName: "Favorites",
      flex: 2.5,
      renderCell: (params: GridRenderCellParams) => {
        let favCheck = favorites.find((fav: any) => fav.id == params.row.id)
        return <Button onClick={() => favOperation(params.row)} variant="contained" color={favCheck ? "secondary" : "primary"}>{favCheck ? "Remove from" : "Add to"} Fav</Button>
      }
    }
  ]


  return <>
    {
      loading ? <h1>loading...</h1> : <>
        <Button variant="contained" color="info" onClick={() => navigate("/products/add")}>Add</Button>
        <hr />
        <div style={{ height: 400, width: '100%' }}>
          <DataGridPremium
            rows={products}// rows yani bu datagridde gösterilecek veriler( data source)
            columns={columns}// columns yani bu datagridde gösterilecek kolonlar
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
          />
        </div>
      </>
    }
  </>
}

export default List
