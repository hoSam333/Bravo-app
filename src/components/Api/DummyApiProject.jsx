import React from 'react'
import './Api.css'
import { useContext } from 'react'
import { apiContext } from '../../context/ApiContext'
import { cartContext } from '../../context/CartContext'
import { wishlistContext } from '../../context/WishlistContext'

function DummyApiProducts() {
  const { dummyApi } = useContext( apiContext )
  const { addToCart } = useContext( cartContext )
  const { addToWishlist } = useContext( wishlistContext )
  
  return (
    <div className='Api container my-5 '>
      <p className='text-center h2 fw-bold text-uppercase ' style={{color:'var(--main-color)'}}> Dummy Api Products </p>
        <p className='text-center lh-base opacity-75 w-75 mx-auto fs-5 my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident corporis hic esse porro accusantium ullam. Consectetur id mollitia ipsa tenetur sequi exercitationem facere rem itaque error! Velit!</p>
    
    <div className="row g-2">

        {dummyApi.map( (val)=>{
            return(

        <div className="col-lg-3 col-md-6 col-sm-12" key={val.id}>
            <div className="card">
                <div className='card-img flex py-3'>
                    <img src={val.thumbnail} className='card-img w-50' style={{height:'150px'}} alt="" />
                </div>
                <div className='card-body'>
                    <b className='d-block text-center h4 '> { val.title.split(' ').slice(0 , 2).join(' ') } </b>
                    <p className='fs-5 my-2'> Price : ${ val.price } </p>
                    <div className='proces d-flex align-items-center justify-content-between'>
                      <i onClick={ ()=>  addToWishlist( val ) } className="fa-solid fa-heart"></i>
                      <i onClick={ ()=>  addToCart(val) } className="fa-solid fa-cart-shopping"></i>
                  </div>
                </div>
            </div>
        </div>
            )
        } )}


    </div>
    </div>
  )
}

export default DummyApiProducts
