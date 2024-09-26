import { AppBar, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './style.scss'

function Navbar() {

  let ulStyle = {display:'flex', justifyContent:"space-evenly"}


  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ul className='menu'>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/suppliers'>Suppliers</Link></li>
        </ul>
      </AppBar>
    </Box>


  </>
}

export default Navbar