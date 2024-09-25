import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { axiosInstance } from '../../../config/axiosInstance'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'

function Add() {

  const [name, setname] = useState<string>("")
  const [unitPrice, setunitPrice] = useState(0)
  const [unitsInStock, setunitsInStock] = useState(0)

  const navigate = useNavigate()

  const addProduct = () => {
    let newProduct = {
      name,
      unitPrice,
      unitsInStock
    }

    axiosInstance.post('/products', newProduct)
      .then(response => {
        navigate('/products')
      })


  }

  return <>
    <Header />
    <Stack gap={3}>
      <Stack flexDirection="row" justifyContent="space-between" gap={5}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          fullWidth
        />
        <TextField
          label="Unit Price"
          value={unitPrice}
          onChange={(e) => setunitPrice(Number(e.target.value))}
          fullWidth
        />
      </Stack>
      <Stack flexDirection="row" gap={5} justifyContent="space-between" >
        <TextField
          label="Units In Stock"
          value={unitsInStock}
          onChange={(e) => setunitsInStock(Number(e.target.value))}
        />
      </Stack>
      <Stack>
        <Button
          variant="contained"
          color="primary"
          onClick={addProduct}
        >
          Add
        </Button>
      </Stack>

    </Stack>
  </>
}

export default Add