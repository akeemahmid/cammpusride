import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({Products}) => {
  return (
    <div>
               Alhamdullilah it was All Mighty Allah that made it very successful
    {Products.map((product)=>{
        return(
         
    
            <div key={product.id}>
               
                <h3>{product.name}</h3>
                <h3>{product.title}</h3>
                <Link to={`/product/${product.id}`}>Link to my bio</Link>
            </div>
          
        )
    })}
    </div>
  )
}

export default Product