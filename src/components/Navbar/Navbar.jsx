import React, { useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { apiContext } from '../../context/ApiContext'
import { cartContext } from '../../context/CartContext'
import { wishlistContext } from '../../context/WishlistContext'
import axios from 'axios'
function Navbar() {

  let navigate = useNavigate()

  
  let authData 
  if( localStorage.getItem('auth') ){
    authData = JSON.parse( localStorage.getItem('auth') )
  }
  async function logout(){
    localStorage.removeItem('auth')
     await axios.delete(`http://localhost:5005/users/${authData.user.id}`)
    navigate('/login')
  }

  const { changMood } = useContext( apiContext )
  const { cart } = useContext( cartContext )
  const { wishlist } = useContext( wishlistContext )

  
  return (
    <div className='Navbar sticky-top'>

      <nav className="navbar navbar-expand-lg  p-2 px-4  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Bravo <span>Shop</span></a>
          <button className="navbar-toggler bg-light text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link to={''}  className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>

              <li className="nav-item">
                <Link to={'about'}  className="nav-link" href="#">About</Link>
              </li>
              <li className="nav-item">
                <Link to={'shop'} className="nav-link" href="#">Shop</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li><Link to={'fakeapi'}  className="dropdown-item text-decoration-none" href="#">Fake API</Link></li>
                  <li><Link to={'dummyapi'} className="dropdown-item text-decoration-none" href="#"> Dummy API </Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={'contact'} className="nav-link" href="#">Contact</Link>
              </li>
              <li className="nav-item" onClick={ changMood }>
                  <i className="fa-solid fa-moon mood ms-3"></i>
              </li>
              { authData && <li className='ms-4 fs-5' > Hello ( <span style={{color : 'var(--main-color)'}}>{ `${authData.user.fristName} ${authData.user.lastName} ` }</span>) </li> }
            </ul>

                
            {/* { authData && <div className='mx-auto fs-5' style={{color : 'var(--main-color)'}}> Hello ( { `${authData.user.fristName} ${authData.user.lastName} ` }) </div> } */}

            <div className='d-flex align-items-center justify-content-center gap-3 m-2 icones'>
            { authData ?
                <>
                <Link to={'wishlist'}  className='fs-5 text-decoration-none' >
                    <i className="fa-solid fa-heart"></i>
                    <sub>({ wishlist.length })</sub>
                </Link>
                <Link to={'cart'} className='fs-5 text-decoration-none'>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <sub>({ cart.length })</sub>
                </Link>
                <span onClick={ logout } className='text-light logout'> logOut </span>
                </>           
            :

              <div>
                  <Link to={'regester'} className='text-decoration-none fs-5 auth' > Regester </Link>
                  <Link to={'login'} className='text-decoration-none fs-5 auth' > Login </Link>
              </div>
             }

            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
