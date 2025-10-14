import React from 'react'
import '../css/home.css'
const home = () => {
  return (
    <div>
      <nav className='navbar'>
        <h1 className='navh'>KIRAN P</h1> 
        <div className='links'>
            <a href='/' className='link-a'>Home</a>
            <a href='/' className='link-a'>About</a>
            <a href='/' className='link-a'>TechStack</a>
            <a href='/' className='link-a'>Project</a>
            <a href='/' className='link-a'>Contact</a>
            <a href="https://github.com/kiran2k5-ai" target=><img className="image-a" src="https://cdn-icons-png.flaticon.com/512/2111/2111425.png" alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/kiranp2005/"><img className="image-a" src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="Linked In" /></a>
        </div>
      </nav>
    </div>
  )
}

export default home
