import {useParams} from "react-router-dom"
import React from 'react'

const ProductDetails = () => {
    const products = [
        {id:1,name:"Laptop",price:"30000",description:"this is description 1"},
        {id:2,name:"Mouse",price:"20000",description:"this is description 2"},
        {id:3,name:"Pc",price:"50000",description:"this is description 3"},
        {id:4,name:"Keyboard",price:"35000",description:"this is description 4"},
        {id:5,name:"Car",price:"100000",description:"this is description 5"},
    ]
    const id = useParams()
    const product = products.find((p) => p.id)
  return (
    <div>
    
    </div>
  )
}

export default ProductDetails
