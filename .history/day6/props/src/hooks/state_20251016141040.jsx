import React from 'react'
import { useState } from 'react';

const state = () => {

    const [count , setCount] = useState({name:'', email:'',password:'',department:''});
    
    
  return (
    <div>
      <h1>Form </h1>
      <form action="">
        <input type="text" placeholder='Name' value={form.name}/> <br />
        <input type="email" placeholder='Email'/> <br />
        <input type="password" placeholder='Password'/> <br />
        <label>Department</label> <br />
        <input type="radio" name='department' value='IT'/>IT
        <input type="radio" name='department' value='HR'/>HR
        <input type="radio" name='department' value='Sales'/>Sales
        <input type="radio" name='department' value='Marketing'/>Marketing <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default state
