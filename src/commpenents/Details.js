import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './product'

export default function Details() {
   const params = useParams() //djib variable li ikoun f url (router)
   const [detail,setdetail]=useState({})
   useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${params.Productid}`)
      .then(res=>res.json())
      .then(data=>{
         setdetail(data)
      })
   },[])
  return (
    <>
      <Product product={detail} showbutton={false} plus={`Product Num : ${detail.id}`}/>
    </>
  )
}
