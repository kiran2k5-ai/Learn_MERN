import React from 'react'
import '../css/home.css'
const home = () => {
  return (
    <div>
      <nav className='navbar'> 
        <div className='links'>
            <h1 className='navh'>My Portfolio</h1>
            <a href='/' className='link-a'>Home</a>
            <a href='/' className='link-a'>About</a>
            <a href='/' className='link-a'>Contact</a>
            <a href='/' className='link-a'>Blog</a>
            <a href='/' className='link-a'>Project</a>
        </div>
      </nav>
    </div>
  )
}

export default home
