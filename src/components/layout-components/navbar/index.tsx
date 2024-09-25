import { AppBar, Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Navbar() {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ul style={{display:'flex', justifyContent:"space-evenly"}}>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/suppliers'>Suppliers</Link></li>
        </ul>

      </AppBar>
    </Box>


  </>
}

export default Navbar