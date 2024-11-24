import React, { lazy, Suspense, useContext } from "react"
import Home from "./components/Home/Home"
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Shop from './components/Shop/Shop'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Cart from "./components/Cart/Cart"
import { apiContext } from "./context/ApiContext"
import LottiHandler from "./lottiHandler/LottiHAndler"
import Fakestore from './components/Api/FakeApiProduct'
import Dummystore from './components/Api/DummyApiProject'
import Kkk from "./NotFoundPage"
import Wishlist from './components/Wishlist/Wishlist'
import Regester from "./components/auth/Regester"
import Login from "./components/auth/Login"
import ProtectedRoute from "./ProtectedRoute"
const Layout = lazy( ()=> import('./Layout') )

function App(){

  const router = createBrowserRouter([ 
    { path : '/' ,
      element: <Suspense fallback={
         <LottiHandler type='loading' /> }>
            <Layout/>  
        </Suspense> ,
      children : [
        {index : true ,  element : <ProtectedRoute><Home /></ProtectedRoute>  },
        {path:'about' , element:  <ProtectedRoute><About/></ProtectedRoute>  } ,
        {path:'contact' , element:  <ProtectedRoute><Contact/></ProtectedRoute>  } ,
        {path:'shop' , element: <ProtectedRoute><Shop/></ProtectedRoute>   } ,
        {path:'fakeapi' , element:  <ProtectedRoute> <Fakestore/> </ProtectedRoute>} ,
        {path:'dummyapi' , element: <ProtectedRoute><Dummystore/></ProtectedRoute>   } ,
        {path:'Cart' , element: <ProtectedRoute><Cart/></ProtectedRoute>   } , 
        {path: 'wishlist' , element: <ProtectedRoute> <Wishlist /></ProtectedRoute> } , 
        {path: 'wishlist' , element:<Wishlist /> } , 
        {path: 'wishlist' , element:<Wishlist /> } , 
        {path:'regester', element:<Regester/>} ,
        {path:'login', element:<Login/>}
      ],
      errorElement :  <Kkk />
        
    }
   ])



  const { dark } = useContext( apiContext )

  return <main className={ dark ? 'dark' : '' }>
            <RouterProvider router={ router } />
        </main>
  
}
export default App
