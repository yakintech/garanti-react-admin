import { Route, Routes } from 'react-router-dom'
import ProductRoutes from './pages/product'
import Navbar from './components/layout-components/navbar'
import Footer from './components/layout-components/footer'
import { Container } from '@mui/material'
import ListSWR from './pages/product/list/ListSWR'
import SupplierRoutes from './pages/supplier'
import styled from 'styled-components'
import Favorites from './pages/favorites'

function App() {


  return <>

    {/* <Title>React Query Example</Title> */}
    <Navbar />
    <Container style={{ marginTop: 50 }}>
      <Routes>
        <Route path='/products/*' element={<ProductRoutes />} />
        <Route path='/suppliers/*' element={<SupplierRoutes />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Container>

    <Footer />

  </>
}

export default App







const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
