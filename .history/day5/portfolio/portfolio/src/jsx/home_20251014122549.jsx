import React from 'react'
import '../css/home.css'
const home = () => {
  return (
    <div>
      <nav className='navbar'> 
        <div className='links'>
            
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>Contact</a>
            <a href='/'>Blog</a>
            <a href='/'>Project</a>
        </div>
      </nav>
    </div>
  )
}

export default home
