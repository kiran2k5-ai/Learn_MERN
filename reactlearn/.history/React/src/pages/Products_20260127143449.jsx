import React from 'react'

const Products = () => {
    const products = [
        {id:1,name:"Laptop",price:"30000"},
        {id:2,name:"Mouse",price:"20000"},
        {id:3,name:"Pc",price:"50000"},
        {id:4,name:"Keyboard",price:"35000"},
        {id:5,name:"Car",price:"100000"},
    ]
  return (
    <div>
      {
        products.map((product) => (
            <div key = {product.id}>
                <h4>{}</h4>
        ))
      }
    </div>
  )
}

export default Products
