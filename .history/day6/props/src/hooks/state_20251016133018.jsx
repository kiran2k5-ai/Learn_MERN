import React from 'react'
import { useState } from 'react';

const state = () => {
    let co=0;
    const [count , setCount] = useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={}>+</button>
    </div>
  )
}

export default state
