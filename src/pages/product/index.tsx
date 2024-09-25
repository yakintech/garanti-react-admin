import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Update from './update'
import Add from './add'
import List from './list'
import Detail from './detail'

function ProductRoutes() {
  return <>
    <Routes>
        <Route path='add' element={<Add />} />
        <Route path='update/:id' element={<Update />} />
        <Route path='' element={<List/>} />
        <Route path='detail/:id' element={<Detail />} />
    </Routes>
  </>
}

export default ProductRoutes