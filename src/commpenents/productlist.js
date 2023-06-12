/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react'
import Product from './product'

export default function Productlist() {
   const api_URL = "https://fakestoreapi.com/products"
   const [products, setProducts] = useState([]);
   const [category, setcategory] = useState([]);

  

   const getproducts=()=>{
      fetch(api_URL)
      .then(res => res.json())
      .then((data) => {
         setProducts(data)
      })
   }
   const getcategory=()=>{
      fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setcategory(data))
   }

   useEffect(() => {
      getproducts()
      getcategory()

         }, [])


const getProductInCategory =(catName)=>{
   fetch(`${api_URL}/category/${catName}`)
         .then(res => res.json())
         .then((data) => {
            setProducts(data)            
         }
         )
 
}

   return (
      <>


         <h2 className="text-center p-5 text-danger fw-bold">Our Products</h2>
         <div className='container'>
            <button className='btn btn-info p-3 m-4' onClick={()=>{getproducts()}}>ALL</button>
            {category.map((cat) => {
               return (
                  <button className='btn btn-info p-3 m-4' key={cat} 
                  onClick={
                     ()=>{getProductInCategory(cat)}
                  }
                  >{cat}</button>
               )
            })}





            <div className='row'>
               {products.map((product) => {
                  return (
                     <div className='col-3' key={product.id}>
                        <Product product={product} showbutton={true} />
                     </div>
                  )
               })}

            </div>
         </div>
      </>
   )
}
