import React from 'react'
import { useState } from 'react';

const state = () => {

    const [count , setCount] = useState({name:'', email:'',password:'',department:''});
    
    
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <label>Department</label>
        <input type="radio" name='department' value='IT'/>IT
        <input type="radio" name='department' value='HR'/>HR
        <input type="" name='department' value='Sales'/>Sales
        <input type="" name='department' value='Marketing'/>Marketing
        <button>Submit</button>
      </form>
    </div>
  )
}

export default state
