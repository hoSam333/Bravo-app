import React from 'react'
import { Navigate } from 'react-router-dom'


function ProtectedRoute({ children }) {

    if( localStorage.getItem('auth') == null ){
        return <Navigate to={'/login?message=please login frist ...'} />
        
    }else{
        console.log( false );
        
    }

  return <> { children } </>
}

export default ProtectedRoute
