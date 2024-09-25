import { AppBar, Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Navbar() {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">

        <ul>
          <li><Link to='/products'>Products</Link></li>
        </ul>

      </AppBar>
    </Box>


  </>
}

export default Navbar