import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import './index.css'
import { ApiContextProvider } from './context/ApiContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { WishlistContextProvider } from './context/WishlistContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

<WishlistContextProvider>
<CartContextProvider>
<ApiContextProvider>
        <App />
</ApiContextProvider>
</CartContextProvider>
</WishlistContextProvider>


)
