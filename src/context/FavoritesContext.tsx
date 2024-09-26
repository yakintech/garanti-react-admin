import { createContext, useState } from "react"
import { ProductModel } from "../hooks/data/product/ProductModel"



export const FavoritesContext = createContext<FavoritesContextType>({
    favorites: [],
    favOperation: () => { },
    clearAll: () => { }
})


export const FavoritesProvider = ({ children }: any) => {

    const [favorites, setfavorites] = useState<ProductModel[]>([])


    const favOperation = (item: any) => {
        //eğer favorilerde varsa çıkar yoksa ekle
        let favCheck = favorites.find((fav: ProductModel) => fav.id == item.id)

        if (favCheck) {
            let filteredFavorites = favorites.filter((fav: ProductModel) => fav.id != item.id)
            setfavorites(filteredFavorites)
        }
        else {
            setfavorites([...favorites, item])
        }
    }

    const clearAll = () => {
        setfavorites([])
    }

    return <FavoritesContext.Provider value={{ favorites, favOperation, clearAll }}>
        {children}
    </FavoritesContext.Provider>

}


export type FavoritesContextType = {
    favorites: ProductModel[]
    favOperation: (item: ProductModel) => void
    clearAll: () => void
}