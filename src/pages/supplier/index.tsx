
import { Route, Routes } from 'react-router-dom'
import List from './list'

function SupplierRoutes() {
  return <>
    <Routes>
        <Route path='' element={<List />} />
    </Routes>
  </>
}

export default SupplierRoutes