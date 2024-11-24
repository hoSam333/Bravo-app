import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function ProductDetails() {

    let { id } = useParams()
    let [ details , setDetails ] = useState({})

    async function getData(){
        let {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setDetails( data )
    }

    console.log( details );

    useEffect(()=>{
        getData()
    } , [])
    
    
  return (
    <div>
      <p>  ldnflnf;aehfo;uahfiquehfieq Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima veritatis consequatur harum non excepturi repellendus recusandae voluptas aut labore, quam nam laborum reprehenderit, porro, facilis rem provident exercitationem fugit. </p>
    </div>
  )
}

export default ProductDetails
