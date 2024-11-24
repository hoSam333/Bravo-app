import React, { useContext } from 'react'
import "./Cart.css"
import { cartContext } from '../../context/CartContext'

function Cart() {

  const { cart , deleteFromCart  , increaseAmount ,decreaseAmount  }  = useContext( cartContext )

  let totall = 0
  
  return (
    <div className='Cart container my-5'>
      
      <p className='text-center h1 text-uppercase my-3 ' >Your <span style={{color:'var(--main-color)'}}> cart </span> </p>

      { cart.length  ?
        <div className="row gy-3 d-flex justify-content-center">


        { cart.map((value , index)=>{
          totall += value.price * value.amount
          return <div className="col-lg-12" key={ index }>
            <div className='singlePro py-3 flex justify-content-around rounded'>
                {/* <img src={ value.img ? value.img : value.image ? value.image : value.thumbnail }  alt="" /> */}
                <img src={ value.img || value.image || value.thumbnail }  alt="" />
                <b className='fs-5 '> { value.title?.split(' ').slice(0 , 2).join(' ') } </b>
                <div>
                  <p className=''> Price : ${ value.price } </p>
                  <p className='fw-bold'> TotallPrice : <span className='text-primary'> ${( value.price * value.amount).toFixed(2) } </span>  </p>
                </div>
                <div className='flex gap-2'>
                  <button onClick={()=>{ increaseAmount(value) }} className='btn btn-dark btn-sm '> + </button>
                  <span className='fs-5'>{ value.amount }</span>
                  <button onClick={()=>{ decreaseAmount(value) }} className='btn btn-dark btn-sm '> - </button>
                </div>
                <button onClick={ ()=>{ deleteFromCart(  value ,  index )  }} className='btn btn-danger'> Remove From Cart </button>
            </div>

          </div>
        }) }


          <div className="col-lg-8 col-md-12">
            <div className="totall py-4 flex justify-content-around rounded">
              <b className='fs-3'> Totall Cart : </b>
              <b className='fs-3'> ${ totall.toFixed(3) } </b>
            </div>
          </div>

        </div>
      :
      <div className='text-center text-danger my-5 p-5 h1'> There is No Products In Your Cart ... </div>
      }


    </div>
  )
}

export default Cart
