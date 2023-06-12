import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
   return (
         <div className="card" style={{ width: '18rem' ,margin:'20px'}}>
            <h2 className='text-primery'>{props.plus}</h2>
            <img src={props.product.image} style={{height :'200px'}} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title" style={{height:'120px'}}>{props.product.title}</h5>
               <p className="card-text " style={{overflowY:'scroll' ,height:'250px'}}>{props.product.description}</p>
               <h6 className="card-title text-center p-3 text-info">{props.product.category}</h6>
               <p className='text-danger text-center  fs-4'>{props.product.price}$</p>

               {props.showbutton?<Link  className="btn btn-primary" to={`/product/${props.product.id}`}>Details</Link>:null}               
            </div>
         </div>
   )
}
