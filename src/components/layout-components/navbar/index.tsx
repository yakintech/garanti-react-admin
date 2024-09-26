import { AppBar, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './style.scss'
import { useContext } from 'react'
import { FavoritesContext } from '../../../context/FavoritesContext'

function Navbar() {

  console.log('Navbar component rendered')

  const { favorites } = useContext(FavoritesContext)

  let ulStyle = { display: 'flex', justifyContent: "space-evenly" }


  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ul className='menu'>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/suppliers'>Suppliers</Link></li>
          <li><Link to='/favorites'>Favorites
            <span style={{ color: 'red' }}>({favorites.length})</span>
          </Link></li>
        </ul>
      </AppBar>
    </Box>


  </>
}

export default Navbar