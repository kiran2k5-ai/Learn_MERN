import React from 'react'
import { useState } from 'react';

const state = () => {

    const [count , setCount] = useState({name:'', email:'',password:'',department:''});
    
    
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Name'/>
        input type="email" placeholder='Email'/>
      </form>
    </div>
  )
}

export default state
