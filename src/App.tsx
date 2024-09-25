import { Route, Routes } from 'react-router-dom'
import ProductRoutes from './pages/product'
import Navbar from './components/layout-components/navbar'
import Footer from './components/layout-components/footer'

function App() {
  return <>

    <Navbar />
    <Routes>
      <Route path='/products/*' element={<ProductRoutes />} />
    </Routes>
    <Footer />

  </>
}

export default App