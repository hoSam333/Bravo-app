import axios from "axios";
import React, { useEffect, useState } from "react";

function useApi() {

    
    // -------------- APi ---------------//
let fakeurl = 'https://fakestoreapi.com/products'
let dummyurl = 'https://dummyjson.com/products'

let [ fakeApi , setFakeApi ] = useState([])
let [ dummyApi , setDummyApi ] = useState([])
let [ dark , setDark ] = useState(false)
let [ loading , setLoading ] = useState( false )

async function getFakeAPiProducts(){
  setLoading(true)
  let {data} = await axios.get( fakeurl )
  setFakeApi( data )
  setLoading(false)
}
async function getDummyAPiProducts(){
  setLoading(true)
  let {data} = await axios.get( dummyurl )
  setDummyApi( data.products )
  setLoading(false)
}

useEffect(()=>{
  getFakeAPiProducts()
  getDummyAPiProducts()
} , [])

function changMood(){
    setDark( !dark )
  }
  

  return{ fakeApi , dummyApi , dark , changMood , loading }
}

export default useApi
