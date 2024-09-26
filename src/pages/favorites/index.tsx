import React, { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import { Button } from '@mui/material'

function Favorites() {

  console.log('Favorites component rendered')

  //global state üzerinden favorileri çekip listeleme yapıyorum

  const { favorites,clearAll } = useContext(FavoritesContext)

  return <>
  <Button onClick={clearAll} variant="contained" color="error">Clear All</Button>
    <ul>
      {favorites.map((fav: any) => {
        return <li key={fav.id}>{fav.name}</li>
      }
      )}
    </ul>
  </>
}

export default Favorites