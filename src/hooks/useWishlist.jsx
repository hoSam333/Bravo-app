import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'



function useWishlist() {

    let [ wishlist , setWishlist ] = useState([])

  
    // -----------wishlist ----------//
    
    
    
    function addToWishlist( pro ){
    
      let selectedProduct = wishlist.find( el => el.title === pro.title ) // undefined
      
    
      if( !selectedProduct ){
        Swal.fire({
          title: `Product <span class='text-primary'> (${ pro.title.split(' ').slice(0 , 1).join(' ') }) </span> succeffully has been added `,
          text: "You clicked the button!",
          icon: "success" , 
          showConfirmButton : false , 
          timer : 2000
        });
    
        setWishlist( [...wishlist , pro] )
        
      }else{
        
        Swal.fire({
          title: `Product <span class='text-primary'> (${ pro.title.split(' ').slice(0 , 1).join(' ') }) </span> had aleady Adedd !!`,
          icon: "info" , 
          showConfirmButton : true , 
        });
      }
      
    }
    
    
    function removeFromWishlist(pro){
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
          
          const newArr = wishlist.filter( (el) =>{ return el.title !== pro.title } )
          setWishlist( [...newArr] )
        }
      });
    }
    useEffect(()=>{
    
      if( localStorage.getItem('wishlist') ){
        setWishlist(JSON.parse( localStorage.getItem('wishlist') ))
      }else{
        setWishlist([])
      }
    } , [])
    
    useEffect(()=>{
      localStorage.setItem('wishlist' , JSON.stringify( wishlist ))
    } , [  wishlist])
    
  
  return{ wishlist , addToWishlist , removeFromWishlist  }
}

export default useWishlist
