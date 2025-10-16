import React from 'react'
import { useState } from 'react';

const state = () => {

    const [count , setCount] = useState({name:'', email:'',pass});
    
    
  return (
    <div>
      <h1>Count:{count}</h1>
     
      <button onClick={()=>setCount(count+1)}>Increase</button>
      
    </div>
  )
}

export default state
