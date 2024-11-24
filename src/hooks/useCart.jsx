import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function useCart() {

  // ----------------- Cart ----------------//

let [ cart , setCart ] = useState([])

function addToCart(pro){

  const selectedProduct = cart.find(  el => el.title === pro.title  )
  console.log( selectedProduct );
  
  
  if( !selectedProduct ){
    Swal.fire({
      title: `Product <span class='text-primary'> (${ pro.title.split(' ').slice(0 , 1).join(' ') }) </span> succeffully has been added `,
      text: "You clicked the button!",
      icon: "success" , 
      showConfirmButton : false , 
      background : 'var(--sec-bg)' ,
      timer : 2000
    });
    setCart( [...cart , {...pro , amount : 1}] )
    
  }else{
    
    Swal.fire({
      title: `Product <span class='text-primary'> (${ pro.title.split(' ').slice(0 , 1).join(' ') }) </span> had aleady Adedd !!`,
      icon: "info" , 
      showConfirmButton : true , 
    });
  }
  
}

function deleteFromCart( pro ){

  Swal.fire({
    title: `Are you sure To Delete Product <span class='text-primary'> (${ pro.title.split(' ').slice(0 , 1).join(' ') }) ?`,
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      const newArr = cart.filter(  el  =>  el.title !== pro.title   )
      setCart([ ...newArr ])
    }
  });
  // cart.splice(  index , 1 )
  
}

function increaseAmount(pro){
  ++pro.amount
  setCart([...cart])
}

function decreaseAmount(pro){
  if( pro.amount > 1  ){
    --pro.amount
    setCart([...cart])

  }else{
    deleteFromCart( pro )
  }

}

useEffect(()=>{
    if( localStorage.getItem('cart') == null ){
      setCart([])
    }else{
      setCart( JSON.parse( localStorage.getItem('cart') ) )
    }
  
  } , [])
  
useEffect(()=>{
localStorage.setItem('cart' , JSON.stringify( cart ))
} , [cart ])


  return{ cart , addToCart , deleteFromCart ,  increaseAmount , decreaseAmount  }
}

export default useCart
