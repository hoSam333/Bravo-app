import React, { useContext } from 'react'
import "./Wishlist.css"
import { cartContext } from '../../context/CartContext'
import { wishlistContext } from '../../context/WishlistContext'


function Wishlist() {

   const { addToCart } = useContext( cartContext )
   const { wishlist  , removeFromWishlist   } = useContext( wishlistContext )

  return (
    <div className='Wishlist container my-5'>
      
      <p className='text-center h1 text-uppercase my-3 ' >Your <span style={{color:'var(--main-color)'}}> Wishlist </span> </p>


        <div className="row g-3">
  
  { wishlist.length > 0 ?

   wishlist.map((el , index)=>{
    return(

    <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
      <div className="card">
      <div className='card-img p-5'>
        <img src={ el.img || el.image || el.thumbnail } className='card-img' alt="" />
      </div>
      <div className='card-body flex flex-column '>
        <b className='text-center d-block h3' style={{color : 'var(--main-color)'}}> { el.title.split(' ').slice(0 , 2).join(' ') } </b>
        <p className='fs-3'> Price : ${ el.price }   </p>
        <div className='proces d-flex align-items-center justify-content-between w-100'>
            <i onClick={()=> addToCart(el) }  className="fa-solid fa-cart-shopping"></i>
            <i onClick={ ()=> removeFromWishlist( el )  } className="fa-solid fa-xmark bg-danger"></i>
        </div>
      </div>

      </div>
    </div>
    )
  }) 

  :
<div className='text-center text-danger my-5 p-5 h1'> There is No Products In Your Wishlist ... </div>

    }

        </div>

    </div>
  )
}

export default Wishlist
