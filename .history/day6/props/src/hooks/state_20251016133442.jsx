import React from 'react'
import { useState } from 'react';

const state = () => {
    let co=0;
    const [count , setCount] = useState(0);
    
    
  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>{co}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={(prev)=>console.log(prev+1)}>+</button>
    </div>
  )
}

export default state
