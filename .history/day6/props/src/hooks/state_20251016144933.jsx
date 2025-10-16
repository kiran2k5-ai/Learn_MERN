import React from 'react'
import { useState } from 'react';

const state = () => {

    const [form , setForm] = useState({name:'', email:'',password:'',department:''});
    
    const handleChange = () => {
      const {name, value} = e.target;
      setForm
      
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(form)
    }
  return (
    <div>
      <h1>Form </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Name' value={form.name} onChange={handleChange}/> <br />
        <input type="email" name='email' placeholder='Email'value={form.email} onChange={handleChange}/> <br />
        <input type="password" name='password' placeholder='Password' value={form.password} onChange={handleChange}/> <br />
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
