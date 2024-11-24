import React , { createContext } from 'react'
import useCart from '../hooks/useCart'


export const cartContext = createContext()
export const CartContextProvider = (props) => {

    const { cart , addToCart , deleteFromCart ,  increaseAmount , decreaseAmount  } = useCart()


  return (

    <cartContext.Provider value={{ cart , addToCart , deleteFromCart ,  increaseAmount , decreaseAmount  }} >
        { props.children }
    </cartContext.Provider>

)
}


