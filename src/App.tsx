import { Route, Routes } from 'react-router-dom'
import ProductRoutes from './pages/product'
import Navbar from './components/layout-components/navbar'
import Footer from './components/layout-components/footer'
import { Container } from '@mui/material'
import ListSWR from './pages/product/list/ListSWR'

function App() {

  return <ListSWR />


  return <>

    <Navbar />
    <Container style={{marginTop:50}}>
      <Routes>
        <Route path='/products/*' element={<ProductRoutes />} />
      </Routes>
    </Container>

    <Footer />

  </>
}

export default App