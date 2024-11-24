import React  , { createContext }from "react"
import useWishlist from "../hooks/useWishlist"



export const wishlistContext  = createContext()
export const WishlistContextProvider = (props) => {

const { wishlist , addToWishlist , removeFromWishlist   } = useWishlist()

    
 
  return(
    <wishlistContext.Provider value={{ wishlist , addToWishlist , removeFromWishlist   }}>
        { props.children }
    </wishlistContext.Provider>
  )
}

