import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

function Add() {

  const [name, setname] = useState<string>("")
  const [unitPrice, setunitPrice] = useState(0)
  const [unitsInStock, setunitsInStock] = useState(0)

  return <>
    <Stack gap={3}>
      <Stack flexDirection="row" gap={5}>
        <TextField
          sx={{ width: 300 }}
          label="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          fullWidth
        />
        <TextField
          sx={{ width: 300 }}
          label="Unit Price"
          value={unitPrice}
          onChange={(e) => setunitPrice(Number(e.target.value))}
          fullWidth
        />
      </Stack>
      <Stack flexDirection="row" gap={5}>
        <TextField
          sx={{ width: 300 }}
          label="Units In Stock"
          value={unitsInStock}
          onChange={(e) => setunitsInStock(Number(e.target.value))}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log(name, unitPrice, unitsInStock)
          }}
        >
          Add
        </Button>

      </Stack>

    </Stack>
  </>
}

export default Add